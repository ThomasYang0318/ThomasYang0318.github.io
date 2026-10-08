import assert from 'node:assert/strict';

export async function runTypographyChecks(browser, baseURL) {
  const context = await browser.newContext({ locale: 'zh-TW', reducedMotion: 'reduce' });
  await context.route('**/*', route => route.request().url().startsWith(baseURL) ? route.continue() : route.abort());
  const page = await context.newPage();
  const cases = [
    { route: '/', phrases: ['從構想到實作', '打造智慧產品'] },
    { route: '/projects/wearable.html', phrases: ['智慧穿戴式', '阻力訓練系統'] },
    { route: '/projects/sign-language.html', phrases: ['手語影像辨識'] },
    { route: '/projects/project.html?id=mijing', phrases: ['深度旅行探索'] }
  ];
  for (const width of [320, 375, 768, 1024, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    for (const { route, phrases } of cases) {
      await page.goto(`${baseURL}${route}`);
      await page.locator('[data-language-toggle]').waitFor();
      const result = await page.locator('h1').evaluate((heading, phrases) => {
        const chars = [];
        const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
          for (let i = 0; i < node.length; i++) {
            const char = node.nodeValue[i];
            if (char === '\u2060') continue;
            const range = document.createRange();
            range.setStart(node, i);
            range.setEnd(node, i + 1);
            chars.push({ char, top: Math.round(range.getBoundingClientRect().top) });
          }
        }
        const visible = chars.map(item => item.char).join('');
        return phrases.map(phrase => {
          const start = visible.indexOf(phrase);
          return { phrase, found: start >= 0, lines: new Set(chars.slice(start, start + phrase.length).map(item => item.top)).size };
        });
      }, phrases);
      assert.ok(result.every(item => item.found && item.lines === 1), `Broken phrase at ${width}px on ${route}: ${JSON.stringify(result)}`);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Overflow at ${width}px on ${route}`);
      const chinese = await page.locator('h1').innerText();
      await page.locator('[data-language-toggle]').click();
      assert.ok(!(await page.locator('h1').innerText()).includes('\u2060'), 'English should not contain Chinese layout hints');
      await page.locator('[data-language-toggle]').click();
      assert.equal(await page.locator('h1').innerText(), chinese);
    }
  }
  await context.close();
  return 'Chinese phrase boundaries remain intact at 320, 375, 768, 1024, and 1280px; no overflow; English round trips preserve content.';
}

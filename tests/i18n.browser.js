// Serve the repository locally, then call runI18nChecks(browser, baseURL)
// with an isolated Playwright Browser. No account or external media is required.
import assert from 'node:assert/strict';
import { zhTW } from '../data/zh-tw.js';

export async function runI18nChecks(browser, baseURL) {
  const context = await browser.newContext({ locale: 'en-US', viewport: { width: 1280, height: 900 } });
  await context.route('**/*', route => route.request().url().startsWith(baseURL) ? route.continue() : route.abort());
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(String(error)));
  const routes = ['/', '/projects/nebula.html', '/projects/opengl.html', '/projects/sign-language.html', '/projects/wearable.html',
    ...['mijing', 'local-ai-chatbot', 'stock-assistant', 'two-dices', 'mini-photoshop', 'blender-vfx-movie', 'blender-match-move', 'missing'].map(id => `/projects/project.html?id=${id}`)];
  const snapshot = () => page.evaluate(() => {
    const output = [];
    const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!node.parentElement?.closest('script, style, [data-no-translate]') && node.nodeValue.trim()) output.push(node.nodeValue);
    }
    document.querySelectorAll('[alt], [aria-label], [title], meta[name="description"]').forEach(element => {
      if (element.closest('[data-no-translate]')) return;
      for (const key of ['alt', 'aria-label', 'title', 'content']) if (element.hasAttribute(key)) output.push(element.getAttribute(key));
    });
    return output;
  });

  for (const route of routes) {
    await page.goto(`${baseURL}${route}`);
    await page.locator('[data-language-toggle]').waitFor();
    assert.equal(await page.locator('html').getAttribute('lang'), 'en');
    const original = await snapshot();
    const targets = await page.locator('[href], [src]').evaluateAll(elements => elements.map(el => [el.getAttribute('href'), el.getAttribute('src')]));
    await page.locator('[data-language-toggle]').click();
    assert.equal(await page.locator('html').getAttribute('lang'), 'zh-TW');
    const untranslated = await page.evaluate(() => {
      const out = [];
      const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        if (node.parentElement?.closest('script,style,code,pre,[data-no-translate]')) continue;
        const text = node.nodeValue.replace(/\s+/g, ' ').trim();
        if (/[A-Za-z]/.test(text) && !/[\u3400-\u9fff]/.test(text)) out.push(text);
      }
      return out;
    });
    assert.equal(JSON.stringify(untranslated.filter(text => zhTW[text] !== text && !text.split(' · ').every(part => zhTW[part] === part))), '[]', `Missing Chinese copy on ${route}`);
    assert.equal(JSON.stringify(await page.locator('[href], [src]').evaluateAll(elements => elements.map(el => [el.getAttribute('href'), el.getAttribute('src')]))), JSON.stringify(targets));
    await page.locator('[data-language-toggle]').click();
    assert.equal(JSON.stringify(await snapshot()), JSON.stringify(original), `English round trip changed content on ${route}`);
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `Desktop overflow: ${route}`);
  }

  await page.goto(`${baseURL}/`);
  await page.locator('[data-language-toggle]').click();
  await page.reload();
  assert.equal(await page.locator('html').getAttribute('lang'), 'zh-TW');
  await page.locator('[data-language-toggle]').waitFor();
  await page.locator('[data-skill-name="Flutter"]').click();
  assert.equal(await page.locator('.skill-dialog-header p').innerText(), '使用此技術的專案');
  assert.match(await page.locator('.skill-dialog-projects').innerText(), /智慧穿戴式阻力訓練系統/);
  await page.locator('.skill-dialog-close').click();
  await page.locator('[data-theme-toggle]').click();
  await page.waitForFunction(() => document.querySelector('[data-theme-toggle]').getAttribute('aria-label').includes('背景'));

  await page.setViewportSize({ width: 375, height: 812 });
  for (const route of routes) {
    await page.goto(`${baseURL}${route}`);
    await page.locator('[data-language-toggle]').waitFor();
    assert.equal(await page.locator('html').getAttribute('lang'), 'zh-TW');
    for (let turn = 0; turn < 2; turn++) {
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `Mobile overflow: ${route}`);
      assert.ok(await page.locator('[data-language-toggle]').isVisible());
      await page.locator('[data-language-toggle]').click();
    }
  }
  await page.locator('.nav-toggle').click();
  await page.waitForFunction(() => document.querySelector('.nav-toggle').getAttribute('aria-label') === '關閉導覽選單');
  await page.keyboard.press('Escape');
  await page.waitForFunction(() => document.querySelector('.nav-toggle').getAttribute('aria-label') === '開啟導覽選單');
  await page.goto(`${baseURL}/projects/nebula.html`);
  await page.locator('.carousel-next').click();
  assert.equal(await page.locator('[data-carousel-current]').innerText(), '2');
  await page.locator('[data-language-toggle]').click();
  assert.equal(await page.locator('[data-carousel-current]').innerText(), '2');
  await page.goto(`${baseURL}/projects/sign-language.html`);
  assert.equal(await page.locator('main img, [data-project-gallery]').count(), 0);
  assert.deepEqual(errors, []);

  const blocked = await browser.newContext({ locale: 'zh-TW' });
  await blocked.addInitScript(() => Object.defineProperty(window, 'localStorage', { get() { throw new Error('blocked'); } }));
  const blockedPage = await blocked.newPage();
  await blockedPage.goto(`${baseURL}/`);
  await blockedPage.locator('[data-language-toggle]').waitFor();
  assert.equal(await blockedPage.locator('html').getAttribute('lang'), 'zh-TW');
  await blockedPage.locator('[data-language-toggle]').click();
  assert.equal(await blockedPage.locator('html').getAttribute('lang'), 'en');
  await blocked.close();
  const languageHelpers = await page.evaluate(async () => {
    const { preferredLanguage, translate } = await import('/components/i18n.js');
    return [preferredLanguage({ getItem: () => 'en' }, ['zh-TW']), preferredLanguage({ getItem() { throw new Error(); } }, ['zh-HK']), preferredLanguage(null, []), translate('  Projects\n', 'zh-TW')];
  });
  assert.equal(JSON.stringify(languageHelpers), JSON.stringify(['en', 'zh-TW', 'en', '  專案作品\n']));
  await context.close();
  return `${routes.length} routes: bilingual round trips, translation coverage, unchanged media/links, desktop/mobile layout, persistence, dynamic controls, and blocked storage passed.`;
}

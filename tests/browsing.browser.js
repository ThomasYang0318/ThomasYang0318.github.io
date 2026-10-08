import assert from 'node:assert/strict';

export async function runBrowsingChecks(browser, baseURL) {
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, locale: 'zh-TW', reducedMotion: 'reduce' });
  await context.route('**/*', route => route.request().url().startsWith(baseURL) ? route.continue() : route.abort());
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(String(error)));
  await page.goto(baseURL);
  await page.locator('[data-project-filter]').first().waitFor();
  assert.equal(await page.locator('.project-tile:visible').count(), 11);
  assert.equal(await page.locator('#projects .carousel-button').count(), 0);
  for (const [category, count] of [['software', 4], ['embedded', 2], ['visual', 5], ['all', 11]]) {
    const filter = page.locator(`[data-project-filter="${category}"]`);
    await filter.focus();
    await page.keyboard.press('Enter');
    assert.equal(await filter.getAttribute('aria-pressed'), 'true');
    assert.equal(await page.locator('.project-tile:visible').count(), count);
    assert.equal(await page.locator('[data-project-count]').innerText(), String(count));
  }
  await page.locator('[data-project-filter="embedded"]').click();
  await page.locator('[data-language-toggle]').click();
  assert.equal(await page.locator('[data-project-filter="embedded"]').getAttribute('aria-pressed'), 'true');
  assert.equal(await page.locator('.project-tile:visible').count(), 2);
  await page.locator('[data-skill-name="Flutter"]').click();
  await page.locator('.skill-dialog a[href="#project-nebula"]').click();
  assert.equal(await page.locator('#project-nebula').isVisible(), true);
  assert.equal(await page.locator('[data-project-filter="software"]').getAttribute('aria-pressed'), 'true');
  await page.locator('#project-nebula').click();
  await page.locator('.reading-nav').waitFor();
  const chapters = await page.locator('.reading-nav a').evaluateAll(links => links.map(link => ({ href: link.getAttribute('href'), exists: !!document.getElementById(link.hash.slice(1)) })));
  assert.ok(chapters.length >= 5 && chapters.every(chapter => chapter.exists));
  await page.locator('.reading-nav a').first().click();
  assert.ok(new URL(page.url()).hash.startsWith('#section-'));
  const controls = await page.locator('.project-detail-carousel').evaluate(gallery => ({
    imageBottom: gallery.querySelector('.carousel-track').getBoundingClientRect().bottom,
    controlsTop: gallery.querySelector('.carousel-controls').getBoundingClientRect().top
  }));
  assert.ok(controls.controlsTop >= controls.imageBottom, 'Gallery controls must not cover images');
  await page.locator('.carousel-next').click();
  assert.equal(await page.locator('[data-carousel-current]').innerText(), '2');
  await page.locator('[data-carousel]').focus();
  await page.keyboard.press('ArrowRight');
  assert.equal(await page.locator('[data-carousel-current]').innerText(), '3');

  for (const width of [320, 375, 768, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`${baseURL}/`);
    await page.locator('[data-project-filter]').first().waitFor();
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Overflow at ${width}`);
    const sizes = await page.locator('[data-project-filter]').evaluateAll(elements => elements.map(el => el.getBoundingClientRect().height));
    assert.ok(sizes.every(height => height >= 44));
    await page.locator('[data-project-filter="visual"]').click();
    assert.equal(await page.locator('.project-tile:visible').count(), 5);
    await page.goto(`${baseURL}/projects/nebula.html`);
    await page.locator('.reading-nav').waitFor();
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Detail overflow at ${width}`);
  }
  await page.goto(`${baseURL}/#project-two-dices`);
  await page.locator('#project-two-dices').waitFor();
  assert.ok(await page.locator('#project-two-dices').isVisible());
  await page.goto(`${baseURL}/projects/sign-language.html`);
  assert.equal(await page.locator('main img, [data-project-gallery]').count(), 0);
  assert.equal(errors.length, 0, errors.join('\n'));
  await context.close();

  const fallback = await browser.newContext({ javaScriptEnabled: false });
  const fallbackPage = await fallback.newPage();
  await fallbackPage.goto(baseURL);
  assert.equal(await fallbackPage.locator('.project-tile').count(), 11);
  assert.equal(await fallbackPage.locator('[data-project-filter]').count(), 0);
  await fallback.close();
  return 'Project filters, keyboard access, language/filter state, skill links, chapter links, gallery controls, responsive layouts, and no-JavaScript cards passed.';
}

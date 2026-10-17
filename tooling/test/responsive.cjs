// Run against a built preview: PW=/path/to/playwright-core node tooling/test/responsive.cjs [url]
// All content routes at phone widths, plus each stylesheet family at larger breakpoints.
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { chromium } = require(process.env.PW || 'playwright-core');
const base = (process.argv[2] || 'http://127.0.0.1:8765').replace(/\/$/, '');
const root = process.env.RESPONSIVE_ROOT || 'dist';
const out = process.env.RESPONSIVE_OUT || path.join(os.tmpdir(), 'typingease-responsive');
fs.mkdirSync(out, { recursive: true });
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]);
const families = new Map();
const routes = [];
for (const file of walk(root).filter(f => f.endsWith('.html'))) {
  const html = fs.readFileSync(file, 'utf8');
  if (/http-equiv="refresh"/i.test(html)) continue;
  const route = '/' + path.relative(root, file).replace(/index\.html$/, '');
  const styles = [...html.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g)].map(m => m[1]).join(',');
  routes.push(route);
  if (!families.has(styles)) families.set(styles, route);
}
const jobs = routes.flatMap(route => [320, 390, 768].map(width => ({ route, width })));
for (const width of [360, 430, 1024, 1440]) {
  for (const route of families.values()) jobs.push({ route, width });
}
const results = [];
let cursor = 0;
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
  try {
    await Promise.all(Array.from({ length: 4 }, async () => {
      const context = await browser.newContext({ isMobile: true, hasTouch: true, reducedMotion: 'reduce', serviceWorkers: 'block' });
      const page = await context.newPage();
      page.setDefaultTimeout(10000);
      while (cursor < jobs.length) {
        const job = jobs[cursor++];
        const failures = [];
        const errors = [];
        const onError = e => errors.push(e.message);
        page.on('pageerror', onError);
        const check = async state => {
          const sizes = await page.evaluate(() => ({ viewport: innerWidth, document: document.documentElement.scrollWidth }));
          if (sizes.viewport !== job.width || sizes.document > job.width + 1) failures.push({ state, ...sizes });
        };
        try {
          await page.setViewportSize({ width: job.width, height: job.width <= 430 ? 568 : 900 });
          const response = await page.goto(base + job.route, { waitUntil: 'load', timeout: 20000 });
          if (response.status() !== 200) failures.push({ status: response.status() });
          await page.evaluate(() => document.fonts.ready);
          if (await page.locator('body.player-page').count()) await page.locator('#board .nt-player-keyboard').waitFor({ state: 'visible' });
          // Allow deferred UI and two layout frames to settle without fixed sleeps.
          await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
          await check('loaded');
          const wordmark = page.locator('.product-wordmark');
          if (await wordmark.count() && await wordmark.evaluate(e => e.scrollWidth > e.clientWidth + 1)) failures.push({ state: 'footer wordmark clipped' });
          const toggle = page.locator('.menu-toggle:visible');
          if (job.width <= 900 && await toggle.count()) {
            await toggle.click();
            await check('navigation open');
            const nav = await page.locator('[data-site-header]>nav').boundingBox();
            if (!nav || nav.width < job.width - 48 || nav.y + nav.height > (job.width <= 430 ? 568 : 900)) failures.push({ state: 'navigation bounds', nav });
            await page.keyboard.press('Escape');
            if (await toggle.getAttribute('aria-expanded') !== 'false') failures.push({ state: 'navigation Escape' });
          }
          const language = page.locator('.home-language summary');
          if (await language.count()) {
            await language.click();
            await check('language open');
            const menu = await page.locator('.home-language-menu').boundingBox();
            if (!menu || menu.x < -1 || menu.x + menu.width > job.width + 1) failures.push({ state: 'language bounds', menu });
            await page.keyboard.press('Escape');
          }
          // Exercise the three game surfaces, including translated labels and RTL.
          if (job.width === 320 && await page.locator('[data-game-tab]').count()) {
            for (const mode of ['rain', 'race', 'keys']) {
              await page.locator(`[data-game-tab="${mode}"]`).click();
              await check('game ' + mode);
              await page.locator('[data-act="games-back"]').click();
            }
          }
          if (errors.length) failures.push({ state: 'page errors', errors });
        } catch (error) { failures.push({ error: error.message }); }
        page.off('pageerror', onError);
        if (failures.length) await page.screenshot({ path: path.join(out, `${job.width}-${job.route.replace(/[^a-z0-9]/gi, '_')}.png`) }).catch(() => {});
        results.push({ ...job, failures });
      }
      await context.close();
    }));
  } finally { await browser.close(); }
  const failed = results.filter(r => r.failures.length);
  const report = { routes: routes.length, families: families.size, checks: results.length, failed: failed.length, results };
  fs.writeFileSync(path.join(out, 'report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ routes: report.routes, families: report.families, checks: report.checks, failed: failed.length, report: path.join(out, 'report.json') }));
  process.exitCode = failed.length ? 1 : 0;
})().catch(error => { console.error(error); process.exitCode = 1; });

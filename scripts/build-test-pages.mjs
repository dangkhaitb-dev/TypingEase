/* scripts/build-test-pages.mjs — trang kiểm tra tốc độ gõ cho từng ngôn ngữ (Đợt 1 SEO, 2026-09-25).
 *
 *   node scripts/build-test-pages.mjs            ghi /<lang>/<slug>/index.html cho mọi ngôn ngữ đã BẬT
 *   node scripts/build-test-pages.mjs --check    chỉ so, lệch thì exit 1
 *
 * Một ngôn ngữ được bật khi có `kiem-tra-toc-do-go/text/<lang>.mjs` (chữ tĩnh của trang) VÀ bảng
 * `test` trong i18n/ui.<lang>.js (chữ JS điền lúc chạy + các đoạn văn để gõ). Tung theo ĐỢT, không
 * bật cả 26 ngôn ngữ một lúc (kế hoạch chống spam: mỗi đợt 4–5 ngôn ngữ, theo dõi Search Console).
 * File chữ có `live: false` là nội dung đã viết sẵn cho đợt sau: bỏ qua cho tới khi xoá dòng đó.
 *
 * MỘT trang cho mỗi ngôn ngữ, chọn thời lượng bằng nút (15 giây … 10 phút). Không bao giờ sinh một
 * trang cho mỗi thời lượng: năm trang "test 1/2/3/5/10 phút" giống nhau trừ cái đồng hồ là đúng dạng
 * trang cửa ngõ mà Google phạt.
 *
 * /kiem-tra-toc-do-go/ (vi) và /en/typing-test/ (en) viết tay; máy sinh chỉ thay khối hreflang của
 * chúng để cả cụm khai hai chiều. Khối chia sẻ + JSON-LD (WebApplication) in bằng scripts/lib/seo-head.mjs.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { HOME_SWITCH } from '../bai-hoc/home-switch.mjs';
import { seoHead, ORIGIN } from './lib/seo-head.mjs';
import { legalFooter } from './lib/legal.mjs';
import { createRequire } from 'node:module';
const { typeableWith } = createRequire(import.meta.url)('./lib/content.js');

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');
// --preview: dựng các ngôn ngữ ĐANG CHỜ (`live: false`) vào _preview-test/<lang>/ để thử trong trình duyệt;
// thư mục bắt đầu bằng _ nên sitemap/SEO bỏ qua. Xoá sau khi thử.
const PREVIEW = process.argv.includes('--preview');
export const DURATIONS = [15, 30, 60, 120, 180, 300, 600];

const loadWindow = file => {
  const sandbox = { window: {}, globalThis: {} };
  sandbox.window = sandbox; sandbox.globalThis = sandbox;
  vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8'), sandbox, { filename: file });
  return sandbox;
};
const esc = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const htmlLang = lang => lang.replace(/-([a-z]+)$/, (dash, region) => `-${region.toUpperCase()}`);
const LANGUAGES = loadWindow('data/languages.js').TypingEaseLanguages.list;
const LANDING = loadWindow('landing-i18n.js').TypingEaseLandingText;

// Mỗi kiểu bàn phím (họ khoá) gõ được những đoạn nào — cùng luật typeableWith của máy sinh khoá học, cộng
// phím AltGr (người học gõ trên bàn phím thật) và phím chết dấu móc ¸ (ç trên bàn phím Pháp Canada).
const DEAD = new Set(['´', '`', '^', '~', '¨']);
function typeableOn(layoutId) {
  const layout = JSON.parse(fs.readFileSync(path.join(root, 'data', 'keyboards', 'layouts', `${layoutId}.json`), 'utf8'));
  const keys = new Set([' ', 'SHIFT']), dead = new Set();
  for (const row of layout.structure) for (const key of row) for (const field of ['main', 'shifted', 'alt']) {
    const value = typeof key[field] === 'string' ? key[field] : null;
    if (!value || [...value].length !== 1) continue;
    keys.add(value); if (DEAD.has(value)) dead.add(value);
  }
  return text => [...text].every(character => typeableWith(character, keys, dead)
    || (keys.has('¸') && /^[çÇ]$/.test(character) && keys.has(character === 'ç' ? 'c' : 'C')));
}

// Ngôn ngữ đã bật = có file chữ. Thứ tự hreflang: vi, en, rồi theo data/languages.js.
const enabled = [];
const waiting = [];
for (const entry of LANGUAGES) {
  if (['vi', 'en'].includes(entry.code) || entry.course?.status !== 'ready') continue;
  const file = path.join(root, 'kiem-tra-toc-do-go', 'text', `${entry.code}.mjs`);
  if (!fs.existsSync(file)) continue;
  const T = (await import(pathToFileURL(file).href)).default;
  // `live: false` = nội dung đã viết sẵn cho ĐỢT SAU, chưa tung: không sinh trang, không hreflang.
  if (T.live === false && !PREVIEW) { waiting.push(entry.code); continue; }
  if (PREVIEW && T.live !== false) continue;
  enabled.push({ entry, T, url: `/${entry.code}/${T.slug}/` });
}
const cluster = [['vi', '/kiem-tra-toc-do-go/'], ['en', '/en/typing-test/'],
  ...enabled.map(({ entry, url }) => [htmlLang(entry.code), url]), ['x-default', '/en/typing-test/']];
const alternates = indent => cluster.map(([code, url]) => `${indent}<link rel="alternate" hreflang="${code}" href="${ORIGIN}${url}" />`).join('\n');

function page({ entry, T, url }) {
  const lang = entry.code;
  const UI = loadWindow(`i18n/ui.${lang}.js`).TypingEaseUI;
  if (!UI.test || !Array.isArray(UI.test.passages) || UI.test.passages.length < 4)
    throw new Error(`i18n/ui.${lang}.js: cần bảng \`test\` với ít nhất 4 đoạn \`passages\``);
  if (!PREVIEW && UI.routes?.test !== url) throw new Error(`i18n/ui.${lang}.js: routes.test phải là ${url}`);
  const config = loadConfig(lang);
  if (!PREVIEW && config.routes.test !== url) throw new Error(`bai-hoc/config.${lang}.mjs: routes.test phải là ${url}`);
  const S = config.s;
  const routes = PREVIEW ? { ...config.routes, test: url } : config.routes;
  // Chú âm: bản đồ mã phím → ký tự của bố cục khoá học, cho typing-test.js gõ theo vị trí phím.
  // Ô chọn bàn phím chỉ khi các họ KHÔNG gõ được cùng một bộ đoạn văn.
  let coursePicker = '', courseScript = '';
  if (entry.courses.length > 1 && !T.typeByPosition && lang !== 'ko') {
    const passages = UI.test.passages;
    const byCourse = Object.fromEntries(entry.courses.map(course => {
      const ok = typeableOn(course.layouts[0]);
      return [course.id, passages.map((text, index) => (ok(text) ? index : -1)).filter(index => index >= 0)];
    }));
    for (const [id, list] of Object.entries(byCourse)) if (list.length < 4) throw new Error(`${lang}: kiểu bàn phím ${id} chỉ gõ được ${list.length} đoạn văn (cần ≥ 4)`);
    if (Object.values(byCourse).some(list => list.length !== passages.length)) {
      const label = LANDING[lang]?.pickLayout || LANDING.en.pickLayout;
      coursePicker = `
          <label class="test-course">${esc(label)} <select id="test-course">${entry.courses.map(course => `<option value="${course.id}">${esc(course.name)}</option>`).join('')}</select></label>`;
      courseScript = `    <script>window.TypingEaseTestCourses = ${JSON.stringify(byCourse)};</script>
`;
    }
  }
  let positionKeys = '';
  if (T.typeByPosition) {
    const layout = JSON.parse(fs.readFileSync(path.join(root, 'data', 'keyboards', 'layouts', `${entry.courses[0].layouts[0]}.json`), 'utf8'));
    const map = {};
    for (const row of layout.structure) for (const key of row) {
      if (key?.hardware && typeof key.main === 'string' && [...key.main].length === 1) map[key.hardware] = [key.main, typeof key.shifted === 'string' ? key.shifted : null];
    }
    positionKeys = `    <script>window.TypingEaseTestKeys = ${JSON.stringify(map)};</script>
`;
  }
  const main = entry.courses[0];
  const lessons = main.lessons;
  const dir = entry.dir === 'rtl' ? 'rtl' : 'ltr';
  const arrow = dir === 'rtl' ? '←' : '→';
  const [homeLabel, homeTitle] = HOME_SWITCH[lang] || HOME_SWITCH.en;
  const nav = S.nav(routes).filter(([href]) => href)
    .map(([href, label]) => `<a${href === url ? ' class="active"' : ''} href="${href}">${esc(label)}</a>`).join('\n        ');
  const fillN = text => String(text).replace(/\{lessons\}/g, lessons).replace(/\{course\}/g, main.roadmap);
  const buttons = DURATIONS.map(seconds =>
    `            <button type="button" data-duration="${seconds}" aria-pressed="${seconds === 60}"${seconds === 60 ? ' class="selected"' : ''}>${esc(T.durationLabel(seconds))}</button>`).join('\n');
  const sections = T.sections.map(section => `        <section>
          <h2>${esc(section.h2)}</h2>
          ${fillN(section.html)}
        </section>`).join('\n\n');
  const faq = T.faq.map(([q, a]) => `            <details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n');
  const title = T.title, description = T.description;

  return `<!doctype html>
<html lang="${htmlLang(lang)}"${dir === 'rtl' ? ' dir="rtl"' : ''}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <link rel="canonical" href="${ORIGIN}${url}" />
${seoHead({ kind: 'tool', url, title, description, lang: htmlLang(lang), breadcrumb: [[T.homeCrumb, routes.home], [T.crumb, url]] })}
${alternates('    ')}
    <!-- Trang sinh bằng scripts/build-test-pages.mjs từ kiem-tra-toc-do-go/text/${lang}.mjs và bảng test
         trong i18n/ui.${lang}.js. Sửa ở đó rồi chạy lại, đừng sửa tay. -->
    <meta name="robots" content="index, follow" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" type="image/png" sizes="48x48" href="/assets/favicon-48x48.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/tokens.css" />
    <link rel="stylesheet" href="/base.css" />
    <link rel="stylesheet" href="/kiem-tra-toc-do-go/test.css" />
    <link rel="stylesheet" href="/kiem-tra-toc-do-go/chart.css" />
  </head>
  <body>
    <header class="topbar test-header">
      <a class="brand" href="/">Typing<span>Ease</span></a>
      <nav aria-label="${esc(S.navAria)}">
        ${nav}
      </nav>
      <div class="header-actions"><a class="home-switch" href="/" title="${esc(homeTitle)}">${esc(homeLabel)}</a></div>
    </header>

    <main class="test-main">
      <nav class="breadcrumb" aria-label="${esc(T.breadcrumbAria)}">
        <a href="${routes.home}">${esc(T.homeCrumb)}</a><span aria-hidden="true">›</span><span>${esc(T.crumb)}</span>
      </nav>

      <article>
        <header class="test-hero">
          <p class="eyebrow"><i></i> ${esc(T.eyebrow)}</p>
          <h1>${esc(T.h1)}</h1>
          <p>${esc(T.intro)}</p>
        </header>

        <section class="typing-test" aria-labelledby="test-title">
          <div class="test-heading"><h2 id="test-title">${esc(UI.test.titleMinutes.replace('{minutes}', 1))}</h2><p id="test-message" aria-live="polite">${esc(UI.test.ready)}</p></div>
${coursePicker ? `${coursePicker.slice(1)}\n` : ''}          <div class="duration-picker" role="group" aria-label="${esc(T.durationAria)}">
${buttons}
          </div>
          <div class="test-stats" aria-label="${esc(T.liveAria)}">
            <div><span>${esc(T.stats.time)}</span><strong id="time-left">1:00</strong></div>
            <div><span>${esc(T.stats.wpm)}</span><strong id="wpm">0</strong></div>
            <div><span>${esc(T.stats.accuracy)}</span><strong id="accuracy">--<small>%</small></strong></div>
            <div><span>${esc(T.stats.errors)}</span><strong id="errors">0</strong></div>
            <div><span>${esc(T.stats.consistency)}</span><strong id="consistency">--<small>%</small></strong></div>
          </div>
          <p class="test-prompt" id="test-prompt" aria-label="${esc(T.promptAria)}"></p>
          <div class="input-head"><label for="typing-input">${esc(T.inputLabel)}</label><button class="sound-toggle" id="sound-toggle" type="button" aria-pressed="false" title="${esc(T.soundTitle)}">🔊 ${esc(T.soundLabel)}</button></div>
          <textarea id="typing-input" rows="4" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${esc(T.placeholder)}"></textarea>
          <div class="test-actions"><button class="primary-button" id="restart" type="button">${esc(T.restart)} <span>↻</span></button><p>${esc(T.wpmNote)}</p></div>
          <section class="test-result" id="test-result" aria-live="polite" hidden>
            <p>${esc(T.result.title)}</p>
            <strong id="result-wpm">0 ${esc(T.stats.wpm)}</strong>
            <div class="result-details"><span>${esc(T.stats.accuracy)} <b id="result-accuracy">--%</b></span><span>${esc(T.stats.errors)} <b id="result-errors">0</b></span><span>${esc(T.stats.consistency)} <b id="result-consistency">--%</b></span></div>
            <p class="result-comparison" id="result-comparison" hidden></p>
          </section>
        </section>

        <section class="progress-section" aria-labelledby="progress-title">
          <div class="progress-heading"><div><p class="eyebrow"><i></i> ${esc(T.progress.eyebrow)}</p><h2 id="progress-title">${esc(T.progress.title)}</h2></div><div class="progress-range" role="group" aria-label="${esc(T.progress.rangeAria)}"><button type="button" data-progress-range="7" aria-pressed="true" class="selected">${esc(T.progress.days(7))}</button><button type="button" data-progress-range="30" aria-pressed="false">${esc(T.progress.days(30))}</button></div></div>
          <div class="progress-metric" role="group" aria-label="${esc(T.progress.metricAria)}"><button type="button" data-progress-metric="wpm" aria-pressed="true" class="selected">${esc(T.stats.wpm)}</button><button type="button" data-progress-metric="accuracy" aria-pressed="false">${esc(T.stats.accuracy)}</button></div>
          <p class="progress-note">${esc(T.progress.note)}</p>
          <div class="progress-summary" aria-label="${esc(T.progress.summaryAria)}"><div><span>${esc(T.progress.avgWpm)}</span><strong id="progress-average-wpm">--</strong></div><div><span>${esc(T.progress.bestWpm)}</span><strong id="progress-best-wpm">--</strong></div><div><span>${esc(T.progress.avgAccuracy)}</span><strong id="progress-average-accuracy">--%</strong></div><div><span>${esc(T.progress.count)}</span><strong id="progress-test-count">0</strong></div></div>
          <p class="progress-empty" id="progress-empty">${esc(UI.test.progressEmpty)}</p>
          <div class="progress-chart-wrap" id="progress-chart-wrap" hidden><svg class="progress-chart" id="progress-chart" viewBox="0 0 640 220" role="img" aria-label="${esc(T.progress.chartAria)}"></svg></div>
          <p class="progress-trend" id="progress-trend" aria-live="polite"></p>
          <p class="sr-only" id="progress-summary-text" aria-live="polite"></p>
        </section>

${sections}

        <section>
          <h2>${esc(T.faqTitle)}</h2>
          <div class="faq">
${faq}
          </div>
        </section>

        <section class="test-cta">
          <p class="eyebrow"><i></i> ${esc(T.cta.eyebrow)}</p>
          <h2>${esc(T.cta.title)}</h2>
          <p>${esc(fillN(T.cta.text))}</p>
          <a class="primary-button" href="${main.roadmap}">${esc(T.cta.button)} <span>${arrow}</span></a>
        </section>
      </article>
    </main>

    <footer class="test-footer"><a class="brand" href="/">Typing<span>Ease</span></a>
      <p>${esc(S.footerTag)}</p>
      ${legalFooter(lang)}</footer>
    <script src="/i18n/ui.${lang}.js"></script>
    <script src="/sound.js"></script>
${positionKeys}${courseScript}    <script src="/kiem-tra-toc-do-go/typing-test.js"></script>
    <script src="/menu.js" defer></script>
    <script src="/sw-register.js"></script>
  </body>
</html>
`;
}

const configs = new Map();
for (const { entry } of enabled) {
  configs.set(entry.code, (await import(pathToFileURL(path.join(root, 'bai-hoc', `config.${entry.code}.mjs`)).href)).default);
}
function loadConfig(lang) { return configs.get(lang); }

const outputs = enabled.map(item => ({ file: PREVIEW ? path.join(root, '_preview-test', item.entry.code, 'index.html') : path.join(root, item.entry.code, item.T.slug, 'index.html'), html: page(item) }));
// Hai trang viết tay: chỉ thay khối hreflang.
for (const rel of PREVIEW ? [] : ['kiem-tra-toc-do-go/index.html', 'en/typing-test/index.html']) {
  const file = path.join(root, rel);
  const current = fs.readFileSync(file, 'utf8');
  const run = /([ \t]*)<link rel="alternate" hreflang="[^"]+" href="[^"]+" \/>(\r?\n)(?:[ \t]*<link rel="alternate" hreflang="[^"]+" href="[^"]+" \/>\r?\n)*/.exec(current);
  if (!run) throw new Error(`${rel}: không thấy khối hreflang`);
  outputs.push({ file, html: current.replace(run[0], alternates(run[1]).split('\n').join(run[2]) + run[2]) });
}

let bad = 0, wrote = 0;
for (const { file, html } of outputs) {
  const current = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
  if (current === html) continue;
  if (CHECK) { bad += 1; console.log(`LỆCH  ${path.relative(root, file)}`); continue; }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  wrote += 1;
}
const summary = `${enabled.length} trang test sinh (${enabled.map(item => item.entry.code).join(', ') || 'chưa bật ngôn ngữ nào'}) + 2 trang viết tay`
  + (waiting.length ? ` · chờ đợt sau: ${waiting.join(', ')}` : '');
if (CHECK) { console.log(bad ? `${bad} file lệch — chạy lại script` : `${summary}, mọi file khớp`); process.exit(bad ? 1 : 0); }
console.log(`${summary} · ${wrote} file đã ghi`);

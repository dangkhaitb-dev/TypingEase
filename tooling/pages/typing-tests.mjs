/* tooling/pages/typing-tests.mjs — trang kiểm tra tốc độ gõ cho từng ngôn ngữ (Đợt 1 SEO, 2026-09-25).
 *
 * Module trang cho Eleventy (xem tooling/pages/index.mjs): `pages()` trả `[{ path, html }]`, mỗi
 * ngôn ngữ đã BẬT một trang `<lang>/<slug>/index.html`. Module chỉ ĐỌC; Eleventy ghi file.
 *   PAGES=typing-tests npx eleventy     chỉ dựng module này
 *
 * Một ngôn ngữ được bật khi có `content/typing-test/<lang>.mjs` (chữ tĩnh của trang) VÀ bảng
 * `test` trong 11ty/client/i18n/ui.<lang>.js (chữ JS điền lúc chạy + các đoạn văn để gõ). Tung theo ĐỢT,
 * không bật cả 26 ngôn ngữ một lúc (kế hoạch chống spam: mỗi đợt 4–5 ngôn ngữ, theo dõi Search Console).
 * File chữ có `live: false` là nội dung đã viết sẵn cho đợt sau: bỏ qua cho tới khi xoá dòng đó.
 *
 * MỘT trang cho mỗi ngôn ngữ, chọn thời lượng bằng nút (15 giây … 10 phút). Không bao giờ sinh một
 * trang cho mỗi thời lượng: năm trang "test 1/2/3/5/10 phút" giống nhau trừ cái đồng hồ là đúng dạng
 * trang cửa ngõ mà Google phạt.
 *
 * /kiem-tra-toc-do-go/ (vi) và /typing-test/ (en) viết tay (11ty/site/…). Không sửa tại chỗ nữa:
 * `hubTransform(html, outputPath)` là transform của Eleventy (tooling/build/transforms.mjs) thay khối
 * hreflang của hai trang đó bằng cụm tính từ CÙNG danh sách ngôn ngữ đã bật, để cả cụm khai hai chiều.
 * Khối chia sẻ + JSON-LD (WebApplication) in bằng tooling/lib/seo-head.mjs.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import { HOME_SWITCH } from '../lib/home-switch.mjs';
import { seoHead, ORIGIN } from '../lib/seo-head.mjs';
import { legalFooter } from '../lib/legal.mjs';
import paths from '../lib/paths.cjs';
const { typeableWith } = createRequire(import.meta.url)('../lib/content.js');

export const DURATIONS = [15, 30, 60, 120, 180, 300, 600];

const loadWindow = file => {
  const sandbox = { window: {}, globalThis: {} };
  sandbox.window = sandbox; sandbox.globalThis = sandbox;
  vm.runInNewContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: path.relative(paths.ROOT, file) });
  return sandbox;
};
const esc = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const htmlLang = lang => lang.replace(/-([a-z]+)$/, (dash, region) => `-${region.toUpperCase()}`);
const LANGUAGES = loadWindow(paths.dataFile('languages.js')).TypingEaseLanguages.list;
const LANDING = loadWindow(paths.clientFile('landing-i18n.js')).TypingEaseLandingText;
const readLayout = id => JSON.parse(fs.readFileSync(paths.dataFile('keyboards', 'layouts', `${id}.json`), 'utf8'));

// Mỗi kiểu bàn phím (họ khoá) gõ được những đoạn nào — cùng luật typeableWith của máy sinh khoá học, cộng
// phím AltGr (người học gõ trên bàn phím thật) và phím chết dấu móc ¸ (ç trên bàn phím Pháp Canada).
const DEAD = new Set(['´', '`', '^', '~', '¨']);
function typeableOn(layoutId) {
  const layout = readLayout(layoutId);
  const keys = new Set([' ', 'SHIFT']), dead = new Set();
  for (const row of layout.structure) for (const key of row) for (const field of ['main', 'shifted', 'alt']) {
    // Phím chết có hai dạng: chuỗi trần ("´", định dạng cũ) hoặc object {key, dead, compose} (định
    // dạng nhập từ typekute). Với object, mọi chữ ghép trong `compose` cũng gõ được trực tiếp.
    const raw = key[field];
    const value = typeof raw === 'string' ? raw : typeof raw?.key === 'string' ? raw.key : null;
    if (!value || [...value].length !== 1) continue;
    keys.add(value); if (DEAD.has(value) || raw?.dead) dead.add(value);
    for (const composed of Object.values(raw?.compose || {})) if (typeof composed === 'string') keys.add(composed);
  }
  return text => [...text].every(character => typeableWith(character, keys, dead)
    || (keys.has('¸') && /^[çÇ]$/.test(character) && keys.has(character === 'ç' ? 'c' : 'C')));
}

// Ngôn ngữ đã bật = có file chữ. Thứ tự hreflang: vi, en, rồi theo content/data/languages.js.
// Tính MỘT lần lúc nạp module: cả `pages()` lẫn `hubTransform` dùng chung danh sách này.
const enabled = [];
const waiting = [];
for (const entry of LANGUAGES) {
  if (['vi', 'en'].includes(entry.code) || entry.course?.status !== 'ready') continue;
  const file = paths.contentFile('typing-test', `${entry.code}.mjs`);
  if (!fs.existsSync(file)) continue;
  const T = (await import(pathToFileURL(file).href)).default;
  // `live: false` = nội dung đã viết sẵn cho ĐỢT SAU, chưa tung: không sinh trang, không hreflang.
  if (T.live === false) { waiting.push(entry.code); continue; }
  enabled.push({ entry, T, url: `/${entry.code}/${T.slug}/` });
}
const cluster = [['vi', '/kiem-tra-toc-do-go/'], ['en', '/typing-test/'],
  ...enabled.map(({ entry, url }) => [htmlLang(entry.code), url]), ['x-default', '/typing-test/']];
const alternates = indent => cluster.map(([code, url]) => `${indent}<link rel="alternate" hreflang="${code}" href="${ORIGIN}${url}" />`).join('\n');

const configs = new Map();
for (const { entry } of enabled) {
  configs.set(entry.code, (await import(pathToFileURL(paths.contentFile('roadmaps', `config.${entry.code}.mjs`)).href)).default);
}
function loadConfig(lang) { return configs.get(lang); }

function page({ entry, T, url }) {
  const lang = entry.code;
  const UI = loadWindow(paths.clientFile('i18n', `ui.${lang}.js`)).TypingEaseUI;
  if (!UI.test || !Array.isArray(UI.test.passages) || UI.test.passages.length < 4)
    throw new Error(`11ty/client/i18n/ui.${lang}.js: cần bảng \`test\` với ít nhất 4 đoạn \`passages\``);
  if (UI.routes?.test !== url) throw new Error(`11ty/client/i18n/ui.${lang}.js: routes.test phải là ${url}`);
  const config = loadConfig(lang);
  if (config.routes.test !== url) throw new Error(`content/roadmaps/config.${lang}.mjs: routes.test phải là ${url}`);
  const S = config.s;
  const routes = config.routes;
  // Chú âm: bản đồ mã phím → ký tự của bố cục khoá học, cho typing-test.js gõ theo vị trí phím.
  // Ô chọn bàn phím chỉ khi các họ KHÔNG gõ được cùng một bộ đoạn văn.
  let coursePicker = '', courseScript = '';
  if (entry.courses.length > 1 && !T.typeByPosition && lang !== 'ko') {
    const passages = UI.test.passages;
    const byCourse = Object.fromEntries(entry.courses.map(course => {
      const ok = typeableOn(course.layouts[0]);
      return [course.id, passages.map((text, index) => (ok(text) ? index : -1)).filter(index => index >= 0)];
    }));
    // Luật của typekute (docs/standards/practice-corpus-standards.md): đoạn văn mà bàn phím "anh em"
    // (họ không mặc định, như de-schweiz không có ß) không gõ được thì chỉ bị BỎ khỏi danh sách của
    // họ đó — cảnh báo; bỏ quá 20% là nợ nội dung (lỗi khi chạy với TYPING_TESTS_STRICT=1, như
    // `--strict` của typekute): viết đoạn văn sao cho các họ cùng gõ được, giữ những đoạn họ khác
    // không gõ được ở mức khoảng 10%. Họ mặc định phải gõ được hết.
    // Đang vượt 20%: hi-bolnagri (bàn phím phiên âm, cố ý dùng bộ đoạn riêng — DECISIONS.md v20).
    for (const [index, [id, list]] of Object.entries(byCourse).entries()) {
      const left = passages.length - list.length;
      if (!left) continue;
      if (index === 0) throw new Error(`${lang}: bàn phím mặc định ${id} không gõ được ${left} đoạn văn`);
      const message = `${lang}: kiểu bàn phím ${id} bỏ ${left}/${passages.length} đoạn văn không gõ được`;
      if (left / passages.length > 0.2) {
        if (process.env.TYPING_TESTS_STRICT === '1') throw new Error(`${message} (tối đa 20%)`);
        console.warn(`${message} — quá 20%`);
      } else console.warn(message);
    }
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
    const layout = readLayout(entry.courses[0].layouts[0]);
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

// Trang viết tay của cụm: /kiem-tra-toc-do-go/ và /typing-test/ ở GỐC site (máy sinh cũ chỉ vá đúng hai
// file này). /<lang>/typing-test/ (hi, ja … và trang chuyển hướng /en/typing-test/) cùng đuôi nhưng
// nằm dưới thư mục ngôn ngữ: bỏ qua.
const HUBS = ['kiem-tra-toc-do-go', 'typing-test'];
const CODES = new Set(LANGUAGES.map(entry => entry.code));
const isHub = outputPath => {
  const parts = ('/' + String(outputPath || '').replace(/\\/g, '/')).split('/');
  if (parts.pop() !== 'index.html' || !HUBS.includes(parts.pop())) return false;
  return !CODES.has(parts.pop());
};

/** Transform Eleventy cho hai trang viết tay: chỉ thay khối hreflang (giữ thụt lề và kiểu xuống dòng của
 *  trang), y như máy sinh cũ ghi đè tại chỗ. Trang khác trả nguyên. */
export function hubTransform(html, outputPath) {
  if (!isHub(outputPath)) return html;
  const run = /([ \t]*)<link rel="alternate" hreflang="[^"]+" href="[^"]+" \/>(\r?\n)(?:[ \t]*<link rel="alternate" hreflang="[^"]+" href="[^"]+" \/>\r?\n)*/.exec(html);
  if (!run) throw new Error(`${outputPath}: không thấy khối hreflang`);
  return html.replace(run[0], () => alternates(run[1]).split('\n').join(run[2]) + run[2]);
}

export default async function pages() {
  if (waiting.length) console.log(`typing-tests: chờ đợt sau: ${waiting.join(', ')}`);
  return enabled.map(item => ({ path: `${item.entry.code}/${item.T.slug}/index.html`, html: page(item) }));
}

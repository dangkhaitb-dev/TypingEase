/* scripts/build-progress-pages.mjs — trang tiến độ của mọi ngôn ngữ có khoá (trừ tiếng Việt).
 *
 *   node scripts/build-progress-pages.mjs            ghi /<lang>/<slug>/index.html cho mọi ngôn ngữ có chữ
 *   node scripts/build-progress-pages.mjs --check    chỉ so, lệch thì exit 1
 *   node scripts/build-progress-pages.mjs --lang fr  một ngôn ngữ
 *
 * Ba nguồn chữ, không nguồn nào lặp lại nguồn kia:
 *   - tien-do/text/<lang>.mjs   chữ tĩnh của trang (tiêu đề, nhãn, đoạn giải thích)
 *   - i18n/ui.<lang>.js         `progress` — chữ JS điền lúc chạy; máy sinh gọi chính các hàm ấy để
 *                               in giá trị ban đầu (bản mà máy tìm kiếm và người tắt JS thấy)
 *   - bai-hoc/config.<lang>.mjs menu, chân trang, khẩu hiệu — cùng bộ với trang lộ trình
 *
 * MỘT TRANG CHO MỌI KHOÁ CỦA NGÔN NGỮ. Mỗi khoá (fr, fr-bepo…) có kho tiến độ riêng, khoá bằng
 * `progressKey` trong data/curriculum.<khoá>.js. Trang nạp chỉ mục của khoá ghi trong `?course=`
 * (mặc định: khoá chính) bằng một script nhỏ trước progress-store.js — progress-store và badges đọc
 * TypingEaseCurriculum ngay lúc nạp, nên chỉ mục phải có mặt trước chúng. Ngôn ngữ nhiều khoá thì
 * trên đầu trang có hàng chọn khoá; player của mỗi khoá trỏ về trang này kèm `?course=` của nó.
 *
 * Tiếng Việt (/tien-do/) viết tay và có thêm thẻ luyện phím yếu — không sinh ở đây.
 * Mọi trang tiến độ là `noindex, follow` và không nằm trong sitemap (xem ghi chú trong <head>).
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { HOME_SWITCH } from '../bai-hoc/home-switch.mjs';
import { legalFooter } from './lib/legal.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const CHECK = args.includes('--check');
const only = args.includes('--lang') ? args[args.indexOf('--lang') + 1] : null;

const loadWindow = file => {
  const sandbox = { window: {}, globalThis: {} };
  sandbox.window = sandbox; sandbox.globalThis = sandbox;
  vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8'), sandbox, { filename: file });
  return sandbox;
};
const esc = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const fill = (template, values) => String(template).replace(/\{(\w+)\}/g, (whole, key) => (key in values ? values[key] : whole));

// Huy hiệu có `requires` (Telex) chỉ tồn tại khi giáo trình khai tính năng đó — đếm như badges.js.
const badgeCount = curriculum => {
  const sandbox = { window: {}, globalThis: {}, document: { documentElement: { lang: 'en' } } };
  sandbox.window = sandbox; sandbox.globalThis = sandbox; sandbox.TypingEaseCurriculum = curriculum;
  vm.runInNewContext(fs.readFileSync(path.join(root, 'badges.js'), 'utf8'), sandbox);
  const features = curriculum.features || [];
  return sandbox.TypingEaseBadges.LIST.filter(badge => !badge.requires || features.includes(badge.requires)).length;
};

const LANGUAGES = loadWindow('data/languages.js').TypingEaseLanguages.list;

async function page(entry) {
  const lang = entry.code;
  const textFile = path.join(root, 'tien-do', 'text', `${lang}.mjs`);
  if (!fs.existsSync(textFile)) return null;
  const T = (await import(pathToFileURL(textFile).href)).default;
  const config = (await import(pathToFileURL(path.join(root, 'bai-hoc', `config.${lang}.mjs`)).href)).default;
  const UI = loadWindow(`i18n/ui.${lang}.js`).TypingEaseUI;
  if (!UI.progress) throw new Error(`i18n/ui.${lang}.js chưa có bảng \`progress\``);
  const P = UI.progress;
  const url = `/${lang}/${T.slug}/`;
  const routes = { ...config.routes, progress: url };
  if (UI.routes?.progress !== url) throw new Error(`i18n/ui.${lang}.js: routes.progress phải là ${url} (đang là ${UI.routes?.progress})`);
  if (config.routes.progress !== url) throw new Error(`bai-hoc/config.${lang}.mjs: routes.progress phải là ${url} (đang là ${config.routes.progress})`);

  const courses = entry.courses || [];
  const main = courses.find(course => course.id === lang) || courses[0];
  const curriculum = loadWindow(`data/curriculum.${main.id}.js`).TypingEaseCurriculum;
  const lessons = curriculum.sequence.length;
  const dir = entry.dir === 'rtl' ? 'rtl' : 'ltr';
  const arrow = dir === 'rtl' ? '←' : '→';
  const S = config.s;
  const [homeLabel, homeTitle] = HOME_SWITCH[lang] || HOME_SWITCH.en;
  const links = (pairs, active) => pairs.filter(([href]) => href)
    .map(([href, label]) => `<a${href === active ? ' class="active"' : ''}${href === routes.lessons ? ' data-route="lessons"' : ''} href="${href}">${esc(label)}</a>`);
  const nav = links(S.nav(routes), url).join('\n        ');
  const level0 = P.levels[0];
  const courseMap = Object.fromEntries(courses.map(course => [course.id, { learn: course.href, lessons: course.roadmap }]));
  const switcher = courses.length > 1
    ? `\n        <nav class="prog-courses" id="prog-courses" aria-label="${esc(T.courseSwitch)}">\n          `
      + courses.map(course => `<a href="${url}?course=${course.id}" data-course="${course.id}"${course.id === main.id ? ' aria-current="page"' : ''}>${esc(course.name)}</a>`).join('\n          ')
      + '\n        </nav>'
    : '';

  const html = `<!doctype html>
<html lang="${lang.replace(/-([a-z]+)$/, (dash, region) => `-${region.toUpperCase()}`)}"${dir === 'rtl' ? ' dir="rtl"' : ''}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(T.title)}</title>
    <meta name="description" content="${esc(T.description)}" />
    <link rel="canonical" href="https://typingease.site${url}" />
    <!-- Trang sinh bằng scripts/build-progress-pages.mjs từ tien-do/text/${lang}.mjs, progress trong
         i18n/ui.${lang}.js và bai-hoc/config.${lang}.mjs. Sửa ở đó rồi chạy lại, đừng sửa tay. -->
    <!-- noindex (Đợt 0 chống spam, 2026-09-25): mọi con số ở đây nằm trong localStorage của người
         học, nên Google chỉ thấy 27 bản trạng thái trống cùng một khuôn — đúng dạng trang cửa ngõ.
         "follow" để liên kết trong trang vẫn được đi theo. Không có hreflang: trang noindex không
         thuộc cụm hreflang nào. -->
    <meta name="robots" content="noindex, follow" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" type="image/png" sizes="48x48" href="/assets/favicon-48x48.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&family=Roboto+Mono:wght@500;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/tokens.css" />
    <link rel="stylesheet" href="/base.css" />
    <link rel="stylesheet" href="/keyboard/keyboard.css" />
    <link rel="stylesheet" href="/tien-do/progress.css" />
  </head>
  <body class="progress-page">
    <header class="topbar">
      <a class="brand" href="/">Typing<span>Ease</span></a>
      <nav aria-label="${esc(S.navAria)}">
        ${nav}
      </nav>
      <div class="header-actions"><a class="home-switch" href="/" title="${esc(homeTitle)}">${esc(homeLabel)}</a><a class="secondary-button" data-route="learn" href="${main.href}">${esc(T.keepLearning)} <span>${arrow}</span></a></div>
    </header>

    <main class="progress-main">
      <section class="prog-head">
        <p class="eyebrow"><i></i> ${esc(T.eyebrow)}</p>
        <h1>${esc(T.h1)}</h1>
        <p class="prog-intro">${esc(T.intro)}</p>${switcher}
        <div class="status-strip" id="status-strip">
          <span id="strip-streak">${esc(P.streak(0))}</span>
          <span id="strip-today">${esc(P.today(0))}</span>
          <span id="strip-level">${esc(P.stripLevel(level0))}</span>
        </div>
      </section>

      <section class="prog-summary" aria-label="${esc(T.overviewAria)}">
        <div><span>${esc(T.sumLessons)}</span><strong id="sum-lessons">0 / ${lessons}</strong></div>
        <div><span>${esc(T.sumStars)}</span><strong id="sum-stars">0</strong></div>
        <div><span>${esc(T.sumWpm)}</span><strong id="sum-wpm">0 WPM</strong></div>
        <div><span>${esc(T.sumAccuracy)}</span><strong id="sum-accuracy">--%</strong></div>
      </section>
      <p class="prog-legacy" id="prog-legacy" hidden></p>

      <section class="badges" id="badges" aria-labelledby="badges-title">
        <div class="badges-heading">
          <div>
            <p class="eyebrow"><i></i> ${esc(T.milestones)}</p>
            <h2 id="badges-title">${esc(T.badgesTitle)}</h2>
            <p>${esc(T.badgesIntro)}</p>
          </div>
          <span class="badges-count" id="badges-count">0 / ${badgeCount(curriculum)}</span>
        </div>
        <ul class="badge-grid" id="badge-grid"></ul>
      </section>

      <section class="daily-goal" aria-labelledby="daily-goal-title">
        <div class="daily-goal-copy">
          <p id="daily-goal-kicker">${esc(T.goalKicker)}</p>
          <h3 id="daily-goal-title">${esc(P.dailyGoal(0, 10))}</h3>
          <p id="daily-goal-status">${esc(P.streak(0))}</p>
        </div>
        <div class="daily-goal-progress">
          <div class="daily-progress-track" id="daily-progress" role="progressbar" aria-valuemin="0" aria-valuemax="10" aria-valuenow="0"><i></i></div>
          <p id="daily-best-streak">${esc(P.bestStreak(0))}</p>
        </div>
        <div class="daily-goal-options" role="group" aria-label="${esc(T.goalAria)}">
${[5, 10, 15, 20].map(n => `          <button type="button" data-daily-goal="${n}" aria-pressed="${n === 10}"${n === 10 ? ' class="selected"' : ''}>${esc(T.minutes(n))}</button>`).join('\n')}
        </div>
      </section>

      <section class="coach" id="coach" aria-labelledby="coach-title">
        <div class="coach-head">
          <div><p class="coach-kicker" id="coach-kicker">${esc(T.coachKicker)}</p><h3 id="coach-title">${esc(T.coachTitle)}</h3></div>
          <span class="coach-level" id="coach-level">${esc(level0)}</span>
        </div>
        <div class="coach-body">
          <div class="coach-stats" id="coach-stats"></div>
          <svg class="coach-trend" id="coach-trend" viewBox="0 0 200 52" preserveAspectRatio="none" role="img" aria-label="${esc(T.trendAria)}" hidden></svg>
          <p class="coach-trend-hint" id="coach-trend-hint">${esc(P.trendHint(2))}</p>
        </div>
        <p class="coach-target" id="coach-target"></p>
        <div class="coach-keys" id="coach-keys"></div>
        <p class="coach-advice" id="coach-advice" aria-live="polite">${esc(P.adviceStart)}</p>
        <a class="coach-action" id="coach-action" href="${main.href}">${esc(P.actionStart)}</a>
      </section>

      <section class="keyboard-lab" aria-labelledby="heat-title">
        <div class="keyboard-copy">
          <p class="eyebrow"><i></i> ${esc(T.keyByKey)}</p>
          <h3 id="heat-title">${esc(T.heatTitle)}</h3>
          <p>${esc(T.heatText)}</p>
          <p class="heat-empty" id="heat-empty">${esc(T.heatEmpty)}</p>
          <div class="heat-legend" id="heat-legend" aria-label="${esc(T.heatAria)}" hidden></div>
        </div>
        <div class="keyboard-demo heat-board" id="heat-board"></div>
      </section>

      <section class="results" id="bang-xep-hang" aria-labelledby="results-title">
        <div class="results-heading">
          <div>
            <p class="eyebrow" id="results-kicker" data-template="${esc(T.courseKicker)}"><i></i> ${esc(fill(T.courseKicker, { n: lessons }))}</p>
            <h2 id="results-title">${esc(T.resultsTitle)}</h2>
            <p>${esc(T.resultsIntro)}</p>
          </div>
          <button class="clear-results" id="clear-results" type="button">${esc(T.clear)}</button>
        </div>
        <div class="results-table-wrap">
          <table class="results-table">
            <thead><tr>${T.columns.map(label => `<th>${esc(label)}</th>`).join('')}</tr></thead>
            <tbody id="results-body"></tbody>
          </table>
        </div>
      </section>

      <section class="explore" aria-labelledby="prog-explore-title">
        <div class="explore-heading">
          <p class="eyebrow"><i></i> ${esc(T.keepGoing)}</p>
          <h2 id="prog-explore-title">${esc(T.nextTitle)}</h2>
        </div>
        <div class="explore-grid">
          <a class="explore-card" data-route="lessons" href="${main.roadmap}">
            <h3>${esc(T.courseCard[0])}</h3>
            <p>${esc(T.courseCard[1])}</p>
            <span>${esc(T.courseCard[2])} <b aria-hidden="true">${arrow}</b></span>
          </a>
          <a class="explore-card" href="/">
            <h3>${esc(T.layoutsCard[0])}</h3>
            <p>${esc(T.layoutsCard[1])}</p>
            <span>${esc(T.layoutsCard[2])} <b aria-hidden="true">${arrow}</b></span>
          </a>
        </div>
      </section>
    </main>

    <footer>
      <a class="brand" href="/">Typing<span>Ease</span></a>
      <p>${esc(S.footerTag)}</p>
      <span>© 2024 TypingEase</span>
      ${legalFooter(lang)}
    </footer>

    <!-- Thứ tự là luật: ui.${lang}.js trước tiên (mọi bảng chữ đã phủ khi script chạy), rồi chọn khoá
         và nạp data/curriculum.<khoá>.js TRƯỚC progress-store.js và badges.js — cả hai đọc tên kho
         localStorage từ TypingEaseCurriculum ngay lúc nạp. -->
    <script src="/i18n/ui.${lang}.js"></script>
    <script>
      (function () {
        var COURSES = ${JSON.stringify(courseMap)};
        var wanted = new URLSearchParams(location.search).get('course');
        var id = Object.prototype.hasOwnProperty.call(COURSES, wanted) ? wanted : ${JSON.stringify(main.id)};
        var routes = window.TypingEaseUI && window.TypingEaseUI.routes;
        if (routes) { routes.learn = COURSES[id].learn; routes.lessons = COURSES[id].lessons; }
        document.documentElement.setAttribute('data-course', id);
        document.write('<script src="/data/curriculum.' + id + '.js"><\\/script>');
        document.addEventListener('DOMContentLoaded', function () {
          document.querySelectorAll('[data-route]').forEach(function (link) { link.href = COURSES[id][link.dataset.route]; });
          document.querySelectorAll('#prog-courses a').forEach(function (link) {
            if (link.dataset.course === id) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
          });
          var kicker = document.getElementById('results-kicker'), curriculum = window.TypingEaseCurriculum;
          if (kicker && curriculum) kicker.innerHTML = '<i></i> ' + kicker.dataset.template.replace('{n}', curriculum.sequence.length);
        });
      })();
    </script>
    <script src="/profile.js"></script>
    <script src="/progress-store.js"></script>
    <script src="/badges.js"></script>
    <script src="/keyboard/ready.js"></script>
    <script type="module" src="/keyboard/boot.js"></script>
    <script src="/tien-do/progress-page.js"></script>
    <script src="/menu.js" defer></script>
    <script src="/sw-register.js"></script>
  </body>
</html>
`;
  return { file: path.join(root, lang, T.slug, 'index.html'), html, url };
}

const outputs = [];
for (const entry of LANGUAGES) {
  if (entry.code === 'vi' || entry.course?.status !== 'ready') continue;
  if (only && entry.code !== only) continue;
  const result = await page(entry);
  if (!result) { console.log(`  ${entry.code}: chưa có tien-do/text/${entry.code}.mjs — bỏ qua`); continue; }
  outputs.push(result);
}

let bad = 0, wrote = 0;
const count = outputs.length;
for (const result of outputs) {
  const current = fs.existsSync(result.file) ? fs.readFileSync(result.file, 'utf8').replace(/\r\n/g, '\n') : null;
  if (current === result.html) continue;
  if (CHECK) { bad += 1; console.log(`LỆCH  ${path.relative(root, result.file)}`); continue; }
  fs.mkdirSync(path.dirname(result.file), { recursive: true });
  fs.writeFileSync(result.file, result.html);
  wrote += 1;
}
if (CHECK) {
  console.log(bad ? `${bad}/${count} trang lệch — chạy lại script` : `${count} trang tiến độ, mọi trang khớp`);
  process.exit(bad ? 1 : 0);
}
console.log(`${count} trang tiến độ · ${wrote} file đã ghi`);

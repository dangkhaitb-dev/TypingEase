/* bai-hoc/generate.mjs — sinh trang lộ trình tĩnh từ data/curriculum.<lang>.js.
 *
 * Chạy (từ thư mục gốc project):
 *   node bai-hoc/generate.mjs                → bai-hoc/index.html      (tiếng Việt)
 *   node bai-hoc/generate.mjs --lang en      → en/lessons/index.html   (tiếng Anh)
 *
 * Vì sao cần script: trang lộ trình là trang CÓ giá trị SEO, nên tên từng bài phải nằm sẵn
 * trong HTML cho crawler đọc (PLAN.md B7). JS của trang chỉ phủ thêm tiến độ/sao/trạng thái.
 * Khi `data/curriculum.<lang>.js` đổi (bật `ready: true`, sửa tên bài) thì chạy lại rồi commit
 * HTML mới. Không có bước build nào khác trong repo — đây là script tay.
 *
 * BẢNG CHUỖI NẰM Ở ĐÂY, KHÔNG Ở i18n/ui.<lang>.js. Đây là công cụ chạy lúc build; chữ nó sinh
 * ra đã nằm sẵn trong HTML khi trình duyệt nhận được. Đẩy chúng sang file i18n là bắt mọi khách
 * tải về một bảng chuỗi chỉ để dựng lại thứ đã có trong trang.
 *
 * ĐƯỜNG DẪN TUYỆT ĐỐI. Trang tiếng Việt nằm sâu một cấp, trang tiếng Anh sâu hai — `../` viết
 * cho cái này thì trượt ở cái kia. Đường dẫn tuyệt đối làm cả lớp lỗi đó biến mất.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');

const args = process.argv.slice(2);
const lang = args.indexOf('--lang') >= 0 ? args[args.indexOf('--lang') + 1] : 'vi';

const source = fs.readFileSync(path.join(root, 'data', `curriculum.${lang}.js`), 'utf8');
const scope = { window: {} };
new Function('window', source)(scope.window);
const curriculum = scope.window.TypingEaseCurriculum;
if (!curriculum) throw new Error(`data/curriculum.${lang}.js không gán window.TypingEaseCurriculum`);
if (curriculum.lang !== lang) throw new Error(`curriculum.lang = ${curriculum.lang}, đợi ${lang}`);

/* ---------- cấu hình theo ngôn ngữ ---------- */
const CONFIG = {
  vi: {
    out: path.join(root, 'bai-hoc', 'index.html'),
    url: 'https://typingease.site/bai-hoc/',
    alt: 'https://typingease.site/en/lessons/',
    curriculumScript: '/data/curriculum.vi.js',
    ui: null,
    routes: {
      home: '/', lessons: '/bai-hoc/', learn: '/hoc/', test: '/kiem-tra-toc-do-go/',
      progress: '/tien-do/', free: '/luyen-tu-do/', weak: '/luyen-phim-yeu/',
      guide: '/cach-go-10-ngon/', wpm: '/cach-tang-wpm/'
    },
    s: {
      title: c => `Lộ trình luyện gõ 10 ngón · ${c.sequence.length} bài | TypingEase`,
      description: c => `Lộ trình luyện gõ 10 ngón đầy đủ: ${c.units.length} unit, ${c.sequence.length} bài từ hàng phím cơ sở đến tiếng Việt có dấu, số và ký hiệu. Xem tiến độ từng bài và học tiếp ngay.`,
      nav: ['Luyện gõ', 'Lộ trình', 'Tiến độ', 'Kiểm tra tốc độ'],
      navAria: 'Điều hướng chính',
      enter: 'Vào học',
      eyebrow: 'Giáo trình TypingEase',
      h1: c => `Lộ trình gõ 10 ngón · ${c.sequence.length} bài · ${c.units.length} unit`,
      intro: 'Từ hai phím có gờ nổi đến đoạn văn tiếng Việt có dấu. Mỗi bài dạy hai phím mới,\n          chia thành nhiều screen ngắn, xen kẽ drill và bài gõ nhanh — khoảng năm phút một bài.',
      countDone: total => `Đã xong 0/${total} bài`,
      cta: 'Bắt đầu Bài 1',
      sideUnit: 'Unit', sideOther: 'Khác', sideAria: 'Danh sách unit',
      otherLinks: r => [[r.weak, 'Luyện phím yếu'], [r.test, 'Kiểm tra tốc độ'], [r.free, 'Luyện tự do'], [r.progress, 'Tiến độ của bạn']],
      unitKicker: n => `Unit ${n}`,
      locked: 'Chưa mở',
      unitScore: 'bài đã xong',
      noteNone: 'Nội dung unit này đang được viết — bạn sẽ thấy bài mở dần.',
      noteSome: (ready, total) => `Đã có nội dung cho ${ready}/${total} bài; phần còn lại đang được viết.`,
      kind: { keys: '', review: 'Ôn tập', weak: 'Cá nhân hoá', test: 'Kiểm tra' },
      lessonMeta: (n, meta, tag) => `Bài ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
      seconds: n => `${n} giây`, screens: n => `${n} screen`, minutes: n => `${n}'`,
      soon: 'Sắp có',
      exploreEyebrow: 'Đọc thêm', exploreTitle: 'Trước khi bắt đầu',
      explore: r => [
        [r.guide, 'Cách gõ 10 ngón', 'Vị trí ngón tay trên hàng phím cơ sở, tư thế ngồi và những lỗi thường gặp của người mới.', 'Xem hướng dẫn'],
        [r.wpm, 'Cách tăng WPM', 'Vì sao độ chính xác đi trước tốc độ, và cách luyện để WPM tăng mà không sinh tật.', 'Đọc tiếp'],
        [r.test, 'Kiểm tra tốc độ gõ', 'Đo WPM và độ chính xác trong 15 · 30 · 60 · 120 giây để biết mình đang ở đâu.', 'Kiểm tra ngay']
      ],
      footerAria: 'Tài nguyên TypingEase',
      footerLinks: r => [[r.lessons, 'Lộ trình'], [r.progress, 'Tiến độ'], [r.free, 'Luyện tự do'], [r.guide, 'Cách gõ 10 ngón']],
      footerTag: 'Gõ chậm một chút, rồi bạn sẽ đi rất xa.',
      switchLabel: 'EN', switchHref: '/en/lessons/', switchLang: 'en', switchTitle: 'English version'
    }
  },

  en: {
    out: path.join(root, 'en', 'lessons', 'index.html'),
    url: 'https://typingease.site/en/lessons/',
    alt: 'https://typingease.site/bai-hoc/',
    curriculumScript: '/data/curriculum.en.js',
    ui: '/i18n/ui.en.js',
    routes: {
      home: '/en/', lessons: '/en/lessons/', learn: '/en/learn/', test: '/en/typing-test/',
      progress: '/en/progress/', free: '/en/practice/', weak: null,
      guide: '/en/touch-typing/', wpm: '/en/how-to-type-faster/'
    },
    s: {
      title: c => `Learn to type: the full ${c.sequence.length}-lesson course | TypingEase`,
      description: c => `A complete free touch typing course: ${c.units.length} units, ${c.sequence.length} lessons from the home row to numbers, symbols and full paragraphs. Track every lesson and pick up where you left off.`,
      nav: ['Practice', 'Course', 'Progress', 'Typing test'],
      navAria: 'Main navigation',
      enter: 'Start learning',
      eyebrow: 'The TypingEase course',
      h1: c => `Touch typing course · ${c.sequence.length} lessons · ${c.units.length} units`,
      intro: 'From the two keys with a raised bump to full paragraphs at speed. Every lesson teaches\n          two new keys across a handful of short screens, alternating drills with timed bursts —\n          about five minutes each.',
      countDone: total => `0/${total} lessons done`,
      cta: 'Start lesson 1',
      sideUnit: 'Units', sideOther: 'More', sideAria: 'Unit list',
      otherLinks: r => [[r.test, 'Typing test'], [r.progress, 'Your progress']],
      unitKicker: n => `Unit ${n}`,
      locked: 'Locked',
      unitScore: 'lessons done',
      noteNone: 'This unit is still being written — lessons will open as they land.',
      noteSome: (ready, total) => `${ready} of ${total} lessons are written; the rest are on the way.`,
      kind: { keys: '', review: 'Review', weak: 'Personalised', test: 'Test' },
      lessonMeta: (n, meta, tag) => `Lesson ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
      seconds: n => `${n} seconds`, screens: n => `${n} screens`, minutes: n => `${n} min`,
      soon: 'Coming soon',
      exploreEyebrow: 'Before you start', exploreTitle: 'Worth knowing first',
      explore: r => [
        [r.learn, 'Start with the home row', 'Eight keys, eight fingers, and the habit of not looking down. The first unit is the one that decides the rest.', 'Open lesson 1'],
        [r.test, 'Measure where you are', 'A timed test over 15, 30, 60 or 120 seconds, so the number you improve on is a real one.', 'Take the test']
      ],
      footerAria: 'TypingEase resources',
      footerLinks: r => [[r.lessons, 'Course'], [r.progress, 'Progress'], [r.test, 'Typing test']],
      footerTag: 'Go a little slower, and you will get a lot further.',
      switchLabel: 'VI', switchHref: '/bai-hoc/', switchLang: 'vi', switchTitle: 'Bản tiếng Việt'
    }
  }
};

const config = CONFIG[lang];
if (!config) throw new Error(`chưa có cấu hình cho --lang ${lang}`);
const { s: S, routes: R } = config;

const esc = value => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const CIRCLED = ['①','②','③','④','⑤','⑥','⑦','⑧','⑨','⑩','⑪','⑫'];
const order = new Map(curriculum.sequence.map((id, index) => [id, index + 1]));

function lessonRow(id, indexInUnit) {
  const entry = curriculum.lessons[id];
  const number = order.get(id) || 0;
  const meta = entry.kind === 'test' || entry.kind === 'weak'
    ? `${entry.seconds ? S.seconds(entry.seconds) : S.screens(entry.screens)} · ${S.minutes(entry.estMinutes)}`
    : `${S.screens(entry.screens)} · ${S.minutes(entry.estMinutes)}`;
  const tag = S.kind[entry.kind];
  const inner = `<span class="lr-mark">${CIRCLED[indexInUnit] || number}</span>`
    + `<span class="lr-body"><span class="lr-title">${esc(entry.title)}</span>`
    + `<span class="lr-meta">${esc(S.lessonMeta(number, meta, tag))}</span></span>`
    + `<span class="lr-stars" data-stars aria-hidden="true"></span>`
    + `<span class="lr-state" data-state>${entry.ready ? '' : esc(S.soon)}</span>`;
  // Bài chưa có nội dung (`ready: false`) không được là link — player sẽ báo "chưa mở" chứ
  // không 404, nhưng dẫn người dùng vào đó vẫn là dẫn vào chỗ trống.
  return entry.ready
    ? `<li class="lesson-row" data-lesson="${esc(id)}"><a href="${R.learn}#${esc(id)}/1">${inner}</a></li>`
    : `<li class="lesson-row is-soon" data-lesson="${esc(id)}"><span class="lr-link" aria-disabled="true">${inner}</span></li>`;
}

function unitCard(unit) {
  const ids = unit.groups.flatMap(group => group.lessons);
  let cursor = -1;
  const groups = unit.groups.map(group => {
    const rows = group.lessons.map(id => { cursor += 1; return lessonRow(id, cursor); }).join('');
    return `<h3 class="group-title">${esc(group.title)}</h3><ol class="lesson-rows">${rows}</ol>`;
  }).join('');
  const readyCount = ids.filter(id => curriculum.lessons[id].ready).length;
  return `<article class="unit-card" id="${esc(unit.id)}" data-unit="${esc(unit.id)}">
          <header class="unit-head">
            <div>
              <p class="unit-kicker">${esc(S.unitKicker(unit.index))}${unit.locked ? ` · <span class="unit-lock" data-lock>${esc(S.locked)}</span>` : ''}</p>
              <h2>${esc(unit.title)}</h2>
              <p class="unit-summary">${esc(unit.summary)}</p>
            </div>
            <div class="unit-score">
              <b data-unit-count>0/${ids.length}</b>
              <span>${esc(S.unitScore)}</span>
            </div>
          </header>
          <div class="unit-track" data-unit-track><i></i></div>
          <p class="unit-note" data-unit-note${readyCount === ids.length ? ' hidden' : ''}>${esc(readyCount === 0
            ? S.noteNone
            : S.noteSome(readyCount, ids.length))}</p>
          ${groups}
        </article>`;
}

const sideLinks = curriculum.units.map(unit => {
  const ids = unit.groups.flatMap(group => group.lessons);
  return `<li><a href="#${esc(unit.id)}"><span class="side-name">`
    + `<b>${esc(S.unitKicker(unit.index))}</b>`
    + `<span>${esc(unit.title)}</span></span>`
    + `<em data-side-count="${esc(unit.id)}">0/${ids.length}</em></a></li>`;
}).join('');

const totalLessons = curriculum.sequence.length;
const otherLinks = S.otherLinks(R).filter(([href]) => href)
  .map(([href, label]) => `<li><a href="${href}">${esc(label)}</a></li>`).join('\n            ');
const exploreCards = S.explore(R).filter(([href]) => href).map(([href, title, body, action]) =>
  `<a class="explore-card" href="${href}">
            <h3>${esc(title)}</h3>
            <p>${esc(body)}</p>
            <span>${esc(action)} <b aria-hidden="true">→</b></span>
          </a>`).join('\n          ');
const footerLinks = S.footerLinks(R).filter(([href]) => href)
  .map(([href, label]) => `<a href="${href}">${esc(label)}</a>`).join('');

const html = `<!doctype html>
<html lang="${lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(S.title(curriculum))}</title>
    <meta name="description" content="${esc(S.description(curriculum))}" />
    <link rel="canonical" href="${config.url}" />
    <link rel="alternate" hreflang="vi" href="${lang === 'vi' ? config.url : config.alt}" />
    <link rel="alternate" hreflang="en" href="${lang === 'en' ? config.url : config.alt}" />
    <link rel="alternate" hreflang="x-default" href="${lang === 'en' ? config.url : config.alt}" />
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
    <link rel="stylesheet" href="/bai-hoc/curriculum.css" />
    <!-- Danh sách bài dưới đây được sinh bằng bai-hoc/generate.mjs từ data/curriculum.${lang}.js.
         Sửa nội dung ở curriculum.${lang}.js rồi chạy lại script, đừng sửa tay hai chỗ. -->
  </head>
  <body class="curriculum-page">
    <header class="topbar">
      <a class="brand" href="${R.home}">Typing<span>Ease</span></a>
      <nav aria-label="${esc(S.navAria)}">
        <a href="${R.home}">${esc(S.nav[0])}</a>
        <a class="active" href="${R.lessons}">${esc(S.nav[1])}</a>
        <a href="${R.progress}">${esc(S.nav[2])}</a>
        <a href="${R.test}">${esc(S.nav[3])}</a>
      </nav>
      <div class="header-actions"><a class="lang-switch" hreflang="${S.switchLang}" lang="${S.switchLang}" href="${S.switchHref}" title="${esc(S.switchTitle)}">${esc(S.switchLabel)}</a><a class="secondary-button" href="${R.learn}">${esc(S.enter)} <span>→</span></a></div>
    </header>

    <main class="curriculum">
      <section class="cur-head">
        <p class="eyebrow"><i></i> ${esc(S.eyebrow)}</p>
        <h1>${esc(S.h1(curriculum))}</h1>
        <p class="cur-intro">${S.intro}</p>
        <div class="cur-status">
          <p class="cur-count" id="cur-count">${esc(S.countDone(totalLessons))}</p>
          <p class="cur-legacy" id="cur-legacy" hidden></p>
        </div>
        <p class="cur-cta"><a class="primary-button" id="cur-continue" href="${R.learn}#${esc(curriculum.sequence[0])}/1">▶ ${esc(S.cta)} <span>→</span></a></p>
      </section>

      <div class="cur-layout">
        <aside class="cur-side" aria-label="${esc(S.sideAria)}">
          <p class="side-kicker">${esc(S.sideUnit)}</p>
          <ul class="side-units">${sideLinks}</ul>
          <p class="side-kicker">${esc(S.sideOther)}</p>
          <ul class="side-other">
            ${otherLinks}
          </ul>
        </aside>

        <div class="cur-main">
${curriculum.units.map(unitCard).join('\n')}
        </div>
      </div>

      <section class="explore" aria-labelledby="cur-explore-title">
        <div class="explore-heading">
          <p class="eyebrow"><i></i> ${esc(S.exploreEyebrow)}</p>
          <h2 id="cur-explore-title">${esc(S.exploreTitle)}</h2>
        </div>
        <div class="explore-grid">
          ${exploreCards}
        </div>
      </section>
    </main>

    <footer>
      <a class="brand" href="${R.home}">Typing<span>Ease</span></a>
      <nav class="footer-links" aria-label="${esc(S.footerAria)}">
        ${footerLinks}
      </nav>
      <p>${esc(S.footerTag)}</p>
      <span>© 2024 TypingEase</span>
    </footer>
${config.ui ? `\n    <script src="${config.ui}"></script>` : ''}
    <script src="${config.curriculumScript}"></script>
    <script src="/progress-store.js"></script>
    <script src="/bai-hoc/curriculum-page.js"></script>
    <script src="/sw-register.js"></script>
  </body>
</html>
`;

// File này lưu bằng CRLF nhưng HTML sinh ra là LF, và template literal mang nguyên kết thúc
// dòng của file nguồn — nên phải chuẩn hoá, không thì mỗi lần chạy lại là một diff giả 170 dòng.
fs.mkdirSync(path.dirname(config.out), { recursive: true });
fs.writeFileSync(config.out, html.replace(/\r\n/g, '\n'));
console.log(`${path.relative(root, config.out).split(path.sep).join('/')}: ${curriculum.units.length} unit, ${totalLessons} bài (${lang})`);

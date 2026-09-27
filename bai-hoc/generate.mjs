/* bai-hoc/generate.mjs — sinh trang lộ trình tĩnh từ data/curriculum.<lang>.js.
 *
 * Chạy (từ thư mục gốc project):
 *   node bai-hoc/generate.mjs                → bai-hoc/index.html      (tiếng Việt)
 *   node bai-hoc/generate.mjs --lang en      → en/lessons/index.html   (tiếng Anh)
 *   node bai-hoc/generate.mjs --course fr-bepo → fr/bepo/index.html   (một họ bàn phím khác)
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
import { fileURLToPath, pathToFileURL } from 'node:url';
import { HOME_SWITCH } from './home-switch.mjs';
import { seoHead } from '../scripts/lib/seo-head.mjs';
import { legalFooter } from '../scripts/lib/legal.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');

const args = process.argv.slice(2);
const courseArg = args.indexOf('--course') >= 0 ? args[args.indexOf('--course') + 1] : null;

// `--course fr-bepo`: trang lộ trình của MỘT HỌ không-mặc-định. Họ là gì, nằm ở URL nào, gọi là gì
// — tất cả đọc từ data/languages.js (`courses`), cùng nguồn với trang đầu và build-course.js.
const languages = (() => {
  const scope = {};
  new Function('window', fs.readFileSync(path.join(root, 'data', 'languages.js'), 'utf8'))(scope);
  return scope.TypingEaseLanguages.list;
})();
const family = courseArg
  ? languages.flatMap(entry => (entry.courses || []).map(item => ({ ...item, lang: entry.code })))
    .find(item => item.id === courseArg)
  : null;
if (courseArg && !family) throw new Error(`không có khoá ${courseArg} trong data/languages.js`);
if (family && family.id === family.lang) throw new Error(`${courseArg} là họ mặc định — chạy --lang ${family.lang}`);
const lang = family ? family.lang
  : args.indexOf('--lang') >= 0 ? args[args.indexOf('--lang') + 1] : 'vi';
const code = family ? family.id : lang;
// Ả Rập, Ba Tư, Urdu, Hebrew: trang lộ trình mang dir="rtl" (đọc từ data/languages.js).
const pageDir = (languages.find(entry => entry.code === lang) || {}).dir || 'ltr';

const source = fs.readFileSync(path.join(root, 'data', `curriculum.${code}.js`), 'utf8');
const scope = { window: {} };
new Function('window', source)(scope.window);
const curriculum = scope.window.TypingEaseCurriculum;
if (!curriculum) throw new Error(`data/curriculum.${code}.js không gán window.TypingEaseCurriculum`);
if (curriculum.lang !== lang) throw new Error(`curriculum.lang = ${curriculum.lang}, đợi ${lang}`);
if (family && curriculum.course !== code) throw new Error(`curriculum.course = ${curriculum.course}, đợi ${code}`);

/* ---------- cấu hình theo ngôn ngữ ---------- */
// Mọi bản của TRANG LỘ TRÌNH, để dựng hreflang. Trước đây hai dòng hreflang được viết thẳng vào
// template với điều kiện `lang === 'en' ? url : alt`, đúng khi chỉ có hai ngôn ngữ và im lặng sai
// ngay khi có ngôn ngữ thứ ba: bản tiếng Tây Ban Nha sẽ tự khai mình là bản tiếng Việt.
// x-default trỏ về bản tiếng Anh vì `/` là tiếng Anh.
const ALTERNATES = {
  vi: 'https://typingease.site/bai-hoc/',
  en: 'https://typingease.site/lessons/',
  es: 'https://typingease.site/es/lecciones/',
  fr: 'https://typingease.site/fr/lecons/',
  de: 'https://typingease.site/de/lektionen/',
  it: 'https://typingease.site/it/lezioni/',
  id: 'https://typingease.site/id/pelajaran/',
  ms: 'https://typingease.site/ms/pelajaran/',
  fil: 'https://typingease.site/fil/aralin/',
  sw: 'https://typingease.site/sw/masomo/',
  nl: 'https://typingease.site/nl/lessen/',
  pl: 'https://typingease.site/pl/lekcje/',
  pt: 'https://typingease.site/pt/licoes/',
  tr: 'https://typingease.site/tr/dersler/',
  ru: 'https://typingease.site/ru/uroki/',
  uk: 'https://typingease.site/uk/uroky/',
  ar: 'https://typingease.site/ar/durus/',
  fa: 'https://typingease.site/fa/darsha/',
  ur: 'https://typingease.site/ur/asbaq/',
  he: 'https://typingease.site/he/shiurim/',
  hi: 'https://typingease.site/hi/path/',
  bn: 'https://typingease.site/bn/path/',
  th: 'https://typingease.site/th/bot-rian/',
  zh: 'https://typingease.site/zh/kecheng/',
  'zh-TW': 'https://typingease.site/zh-tw/kecheng/',
  ja: 'https://typingease.site/ja/renshu/',
  ko: 'https://typingease.site/ko/gangui/'
};
const X_DEFAULT = ALTERNATES.en;

// Cau hinh cua tung ngon ngu song trong bai-hoc/config.<lang>.mjs. Truoc day chung nam chung
// trong mot object CONFIG o day; tach ra vi them mot ngon ngu khong nen la sua mot file ma moi
// ngon ngu khac cung dung.
const configFile = path.join(here, `config.${lang}.mjs`);
if (!fs.existsSync(configFile)) {
  throw new Error(`chua co cau hinh cho --lang ${lang} (can ${path.relative(root, configFile).split(path.sep).join('/')})`);
}
const baseConfig = (await import(pathToFileURL(configFile).href)).default;
if (!baseConfig) throw new Error(`chưa có cấu hình cho --lang ${lang}`);

// Một họ dùng lại toàn bộ cấu hình của ngôn ngữ, chỉ đổi những gì thuộc về KHOÁ: đường dẫn ra,
// URL, chỉ mục nạp vào, hai route lộ trình/player, và ba câu có tên bàn phím (`s.family`). Không
// hreflang: /fr/bepo/ và /fr/lecons/ cùng một ngôn ngữ, không phải bản dịch của nhau.
function familyConfig(config) {
  if (!family) return config;
  if (!config.s.family) throw new Error(`bai-hoc/config.${lang}.mjs thiếu s.family cho trang ${code}`);
  const F = config.s.family;
  return {
    ...config,
    out: path.join(root, ...family.roadmap.split('/').filter(Boolean), 'index.html'),
    url: `https://typingease.site${family.roadmap}`,
    curriculumScript: `/data/curriculum.${code}.js`,
    alternates: false,
    // Trang tiến độ dùng chung cho mọi khoá của ngôn ngữ; `?course=` chọn kho tiến độ của họ này.
    routes: { ...config.routes, lessons: family.roadmap, learn: family.href,
      progress: config.routes.progress && `${config.routes.progress}?course=${code}` },
    s: {
      ...config.s,
      title: c => F.title(c, family),
      description: c => F.description(c, family),
      h1: c => F.h1(c, family)
    }
  };
}
const config = familyConfig(baseConfig);
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

// Mot o "Trang chu" ve `/` — trang chon ngon ngu va ban phim — thay cho day o doi ngon ngu
// (EN, VI, ES…). Voi muoi ngon ngu, day o ay dai ra ma van khong tra loi duoc "doi sang cai nao";
// trang `/` tra loi duoc. `s.switches` trong config.<lang>.mjs khong con duoc dung.
const [homeLabel, homeTitle] = HOME_SWITCH[lang] || HOME_SWITCH.en;
const switchLinks = `<a class="home-switch" href="/" title="${esc(homeTitle)}">${esc(homeLabel)}</a>`;

const alternateLinks = config.alternates === false ? '' : [
  ...Object.entries(ALTERNATES).map(([code, href]) => `<link rel="alternate" hreflang="${code}" href="${href}" />`),
  `<link rel="alternate" hreflang="x-default" href="${X_DEFAULT}" />`
].join('\n    ');

const totalLessons = curriculum.sequence.length;
// Nav di theo cung luat voi otherLinks/explore: route null thi khong in lien ket. Chan trang khong con hang
// lien ket lo trinh/bai hoc (2026-09-26): o giua chan trang la dong phap ly (scripts/lib/legal.mjs).
// Ban tieng Anh chua co trang tien do va trang kiem tra toc do, nen nav cua no chi con hai muc.
const navLinks = S.nav(R).filter(([href]) => href)
  .map(([href, label]) => `<a${href === R.lessons ? ' class="active"' : ''} href="${href}">${esc(label)}</a>`)
  .join('\n        ');
const otherLinks = S.otherLinks(R).filter(([href]) => href)
  .map(([href, label]) => `<li><a href="${href}">${esc(label)}</a></li>`).join('\n            ');
const exploreCards = S.explore(R).filter(([href]) => href).map(([href, title, body, action]) =>
  `<a class="explore-card" href="${href}">
            <h3>${esc(title)}</h3>
            <p>${esc(body)}</p>
            <span>${esc(action)} <b aria-hidden="true">→</b></span>
          </a>`).join('\n          ');

const html = `<!doctype html>
<html lang="${lang.replace(/-([a-z]+)$/, (dash, region) => `-${region.toUpperCase()}`)}"${pageDir === 'rtl' ? ' dir="rtl"' : ''}${family ? ` data-course="${code}"` : ''}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(S.title(curriculum))}</title>
    <meta name="description" content="${esc(S.description(curriculum))}" />
    <link rel="canonical" href="${config.url}" />
${seoHead({ kind: 'course', url: new URL(config.url).pathname, title: S.title(curriculum), description: S.description(curriculum),
  lang: lang.replace(/-([a-z]+)$/, (dash, region) => `-${region.toUpperCase()}`) })}
    ${alternateLinks}
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
    <!-- Danh sách bài dưới đây được sinh bằng bai-hoc/generate.mjs từ data/curriculum.${code}.js.
         Sửa nội dung ở curriculum.${code}.js rồi chạy lại script, đừng sửa tay hai chỗ. -->
  </head>
  <body class="curriculum-page">
    <header class="topbar">
      <a class="brand" href="/">Typing<span>Ease</span></a>
      <nav aria-label="${esc(S.navAria)}">
        ${navLinks}
      </nav>
      <div class="header-actions">${switchLinks}<a class="secondary-button" href="${R.learn}">${esc(S.enter)} <span>${pageDir === 'rtl' ? '←' : '→'}</span></a></div>
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
      <a class="brand" href="/">Typing<span>Ease</span></a>
      <p>${esc(S.footerTag)}</p>
      <span>© 2024 TypingEase</span>
      ${legalFooter(lang)}
    </footer>
${config.ui ? `\n    <script src="${config.ui}"></script>` : ''}
    <script src="${config.curriculumScript}"></script>
    <script src="/progress-store.js"></script>
    <script src="/bai-hoc/curriculum-page.js"></script>
    <script src="/menu.js" defer></script>
    <script src="/sw-register.js"></script>
  </body>
</html>
`;

// File này lưu bằng CRLF nhưng HTML sinh ra là LF, và template literal mang nguyên kết thúc
// dòng của file nguồn — nên phải chuẩn hoá, không thì mỗi lần chạy lại là một diff giả 170 dòng.
fs.mkdirSync(path.dirname(config.out), { recursive: true });
fs.writeFileSync(config.out, html.replace(/\r\n/g, '\n'));
console.log(`${path.relative(root, config.out).split(path.sep).join('/')}: ${curriculum.units.length} unit, ${totalLessons} bài (${lang})`);

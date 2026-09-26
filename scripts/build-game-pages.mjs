/* scripts/build-game-pages.mjs — trang trò chơi gõ phím cho từng ngôn ngữ (2026-09-25).
 *
 *   node scripts/build-game-pages.mjs            ghi trang cho mọi ngôn ngữ có tro-choi/text/<lang>.mjs
 *   node scripts/build-game-pages.mjs --check    chỉ so, lệch thì exit 1
 *
 * MỘT trang mỗi ngôn ngữ chứa cả ba trò (Mưa chữ, Đua với bóng, Săn phím — tro-choi/games.js), chọn
 * bằng thẻ. Không tách mỗi trò hay mỗi độ khó ra một trang (trang cửa ngõ). Tung theo ĐỢT như trang
 * test: file chữ có `live: false` là viết sẵn, chưa bật.
 *
 * Kho từ in thẳng vào trang (JSON), lấy từ `words` của file chữ nếu có (tiếng Việt: kho có dấu, gõ
 * bằng Telex) hoặc từ data/words/<lang>.js — chính kho từ mà khoá học của ngôn ngữ đó dùng.
 * Bàn phím ảo (Săn phím) là bố cục của khoá: một TypingEaseCurriculum rút gọn khai keyboardId +
 * mọi bố cục của ngôn ngữ, để keyboard/preferences.js chỉ cho chọn trong họ đó.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { HOME_SWITCH } from '../bai-hoc/home-switch.mjs';
import { seoHead, ORIGIN } from './lib/seo-head.mjs';
import { legalFooter } from './lib/legal.mjs';
import { THUMB, HOW, STEPS, CAR, RAIN_SCENE } from './lib/game-art.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');
// --preview: dựng CẢ các ngôn ngữ đang chờ (`live: false`) vào _preview/<lang>/ để thử trong trình duyệt
// trước khi tung. Thư mục bắt đầu bằng _ nên sitemap, SEO và máy sinh khác đều bỏ qua; xoá sau khi thử.
const PREVIEW = process.argv.includes('--preview');
const loadWindow = file => {
  const sandbox = { window: {}, globalThis: {} };
  sandbox.window = sandbox; sandbox.globalThis = sandbox;
  vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8'), sandbox, { filename: file });
  return sandbox;
};
const esc = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const htmlLang = lang => lang.replace(/-([a-z]+)$/, (dash, region) => `-${region.toUpperCase()}`);
const json = value => JSON.stringify(value).replace(/</g, '\\u003c');
const LANGUAGES = loadWindow('data/languages.js').TypingEaseLanguages.list;

const enabled = [], waiting = [];
for (const entry of LANGUAGES) {
  if (entry.course?.status !== 'ready') continue;
  const file = path.join(root, 'tro-choi', 'text', `${entry.code}.mjs`);
  if (!fs.existsSync(file)) continue;
  const T = (await import(pathToFileURL(file).href)).default;
  if (T.live === false && !PREVIEW) { waiting.push(entry.code); continue; }
  if (PREVIEW && T.live !== false) continue;
  enabled.push({ entry, T, url: T.url || `/${entry.code}/${T.slug}/` });
}
const cluster = [...enabled.map(({ entry, url }) => [htmlLang(entry.code), url]),
  ['x-default', (enabled.find(item => item.entry.code === 'en') || enabled[0])?.url]];
const alternates = cluster.filter(([, url]) => url).map(([code, url]) => `    <link rel="alternate" hreflang="${code}" href="${ORIGIN}${url}" />`).join('\n');

async function page({ entry, T, url }) {
  const lang = entry.code;
  const config = (await import(pathToFileURL(path.join(root, 'bai-hoc', `config.${lang}.mjs`)).href)).default;
  if (!PREVIEW && config.routes.games !== url) throw new Error(`bai-hoc/config.${lang}.mjs: routes.games phải là ${url}`);
  const S = config.s, routes = PREVIEW ? { ...config.routes, games: url } : config.routes;
  const uiFile = `i18n/ui.${lang}.js`;
  const hasUi = fs.existsSync(path.join(root, uiFile));
  let words = T.words;
  let letters = [];
  if (!words) {
    const bank = loadWindow(`data/words/${lang}.js`).TypingEaseWords[lang];
    words = bank.words; letters = [...String(bank.alphabet || '')];
  }
  words = [...new Set(words.map(word => String(word).trim()).filter(word => word && !/\s/.test(word)))];
  if (words.length < 60) throw new Error(`${lang}: kho từ cho trò chơi chỉ có ${words.length} từ`);
  const main = entry.courses[0];
  const layouts = [...new Set(entry.courses.flatMap(course => course.layouts))];
  const dir = entry.dir === 'rtl' ? 'rtl' : 'ltr';
  const arrow = dir === 'rtl' ? '←' : '→';
  const [homeLabel, homeTitle] = HOME_SWITCH[lang] || HOME_SWITCH.en;
  const nav = S.nav(routes).filter(([href]) => href)
    .map(([href, label]) => `<a${href === url ? ' class="active"' : ''} href="${href}">${esc(label)}</a>`).join('\n        ');
  const fillN = text => String(text).replace(/\{lessons\}/g, main.lessons).replace(/\{course\}/g, main.roadmap).replace(/\{test\}/g, routes.test || main.roadmap);
  const tab = (mode, [name, blurb], first) =>
    `<button type="button" role="tab" data-game-tab="${mode}" id="tab-${mode}" aria-controls="panel-${mode}" aria-selected="${first}"${first ? ' class="selected"' : ' tabindex="-1"'}>${THUMB[mode]}<b>${esc(name)}</b><span>${esc(blurb)}</span></button>`;
  // Hướng dẫn ba bước có hình, ngay đầu mỗi trò (chữ ở tro-choi/text/<lang>.mjs → `how`).
  if (!T.how || ['rain', 'race', 'keys'].some(mode => !Array.isArray(T.how[mode]) || T.how[mode].length !== 3))
    throw new Error(`tro-choi/text/${lang}.mjs: cần how.rain / how.race / how.keys, mỗi cái 3 câu`);
  const how = mode => `<ol class="game-how" aria-label="${esc(T.howAria)}">${STEPS[mode].map((name, index) =>
    `<li>${HOW[name]}<span><b>${index + 1}</b> ${esc(T.how[mode][index])}</span></li>`).join('')}</ol>`;
  const sections = T.sections.map(section => `        <section>
          <h2>${esc(section.h2)}</h2>
          ${fillN(section.html)}
        </section>`).join('\n\n');
  const faq = T.faq.map(([q, a]) => `            <details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n');
  const game = { lang, locale: T.locale, typeByPosition: Boolean(T.typeByPosition), words, letters, text: T.runtime };
  const R = T.rain, C = T.race, K = T.keys;

  return `<!doctype html>
<html lang="${htmlLang(lang)}"${dir === 'rtl' ? ' dir="rtl"' : ''}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(T.title)}</title>
    <meta name="description" content="${esc(T.description)}" />
    <link rel="canonical" href="${ORIGIN}${url}" />
${seoHead({ kind: 'game', url, title: T.title, description: T.description, lang: htmlLang(lang), breadcrumb: [[T.homeCrumb, routes.home], [T.crumb, url]] })}
${alternates}
    <!-- Trang sinh bằng scripts/build-game-pages.mjs từ tro-choi/text/${lang}.mjs. Sửa ở đó rồi chạy lại. -->
    <meta name="robots" content="index, follow" />
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
    <link rel="stylesheet" href="/kiem-tra-toc-do-go/test.css" />
    <link rel="stylesheet" href="/tro-choi/games.css" />
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

        <section class="games" aria-label="${esc(T.tabsAria)}">
          <div class="game-tabs" role="tablist" aria-label="${esc(T.tabsAria)}">
            ${tab('rain', T.modes.rain, true)}
            ${tab('race', T.modes.race, false)}
            ${tab('keys', T.modes.keys, false)}
          </div>

          <div class="game-panel" data-game-panel="rain" id="panel-rain" role="tabpanel" aria-labelledby="tab-rain">
            ${how('rain')}
            <div class="game-bar">
              <label>${esc(R.difficulty)} <select id="rain-difficulty"><option value="easy">${esc(R.easy)}</option><option value="normal" selected>${esc(R.normal)}</option><option value="hard">${esc(R.hard)}</option></select></label>
              <div class="game-stats" aria-live="off">
                <div>${esc(R.score)} <strong id="rain-score">0</strong></div>
                <div>${esc(R.level)} <strong id="rain-level">1</strong></div>
                <div>${esc(R.lives)} <strong class="game-lives" id="rain-lives">♥♥♥</strong></div>
                <div>${esc(R.best)} <strong id="rain-best">0</strong></div>
              </div>
            </div>
            <div class="rain-arena" id="rain-arena" aria-hidden="true">
              ${RAIN_SCENE}
              <div class="game-overlay" id="rain-overlay"><button class="primary-button game-start" type="button" data-act="rain-start">${esc(R.start)} <span>${arrow}</span></button><p class="game-hint">${esc(R.hint)}</p></div>
            </div>
            <input class="game-input" id="rain-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="${esc(R.placeholder)}" placeholder="${esc(R.placeholder)}" disabled />
          </div>

          <div class="game-panel" data-game-panel="race" id="panel-race" role="tabpanel" aria-labelledby="tab-race" hidden>
            ${how('race')}
            <div class="game-bar">
              <label>${esc(C.pace)} <select id="race-pace"><option value="best" selected></option>${C.paces.map(wpm => `<option value="${wpm}">${esc(C.paceLabel(wpm))}</option>`).join('')}</select></label>
              <button class="primary-button game-start" type="button" data-act="race-start">${esc(C.start)} <span>${arrow}</span></button>
            </div>
            <div class="race-track" aria-hidden="true">
              <div class="race-lane you"><span id="race-you">${CAR('#157a55')}${esc(C.you)}</span></div>
              <div class="race-lane ghost"><span id="race-ghost">${CAR('#9fb0a8')}${esc(C.ghost)}</span></div>
            </div>
            <p class="race-prompt" id="race-prompt"></p>
            <input class="game-input" id="race-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="${esc(C.placeholder)}" placeholder="${esc(C.placeholder)}" disabled />
            <p class="race-status" id="race-status" aria-live="polite"></p>
            <div class="race-result" id="race-result" aria-live="polite" hidden></div>
          </div>

          <div class="game-panel" data-game-panel="keys" id="panel-keys" role="tabpanel" aria-labelledby="tab-keys" hidden>
            ${how('keys')}
            <div class="game-bar">
              <button class="primary-button game-start" type="button" data-act="keys-start">${esc(K.start)} <span>${arrow}</span></button>
              <div class="game-stats">
                <div>${esc(K.time)} <strong id="keys-time">60</strong></div>
                <div>${esc(K.hits)} <strong id="keys-hits">0</strong></div>
                <div>${esc(K.streak)} <strong id="keys-streak">0</strong></div>
                <div>${esc(K.best)} <strong id="keys-best">0</strong></div>
              </div>
            </div>
            <p class="keys-target" id="keys-target" aria-live="polite"></p>
            <div class="keys-board keyboard-demo" id="keys-board"></div>
            <p class="game-hint">${esc(K.hint)}</p>
            <div class="keys-result" id="keys-result" aria-live="polite" hidden></div>
          </div>
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
${hasUi ? `    <script src="/${uiFile}"></script>\n` : ''}    <!-- Bố cục của khoá cho bàn phím ảo (keyboard/preferences.js đọc keyboardId + layouts). -->
    <script>window.TypingEaseCurriculum = window.TypingEaseCurriculum || ${json({ lang, course: main.id, keyboardId: main.layouts[0], layouts })};</script>
    <script>window.TypingEaseGame = ${json(game)};</script>
    <script src="/sound.js"></script>
    <script src="/keyboard/ready.js"></script>
    <script type="module" src="/keyboard/boot.js"></script>
    <script src="/tro-choi/games.js"></script>
    <script src="/menu.js" defer></script>
    <script src="/sw-register.js"></script>
  </body>
</html>
`;
}

const outputs = [];
for (const item of enabled) {
  const rel = item.url.split('/').filter(Boolean);
  outputs.push({ file: PREVIEW ? path.join(root, '_preview', item.entry.code, 'index.html') : path.join(root, ...rel, 'index.html'), html: await page(item) });
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
const summary = `${enabled.length} trang trò chơi (${enabled.map(item => item.entry.code).join(', ') || 'chưa bật'})`
  + (waiting.length ? ` · chờ đợt sau: ${waiting.join(', ')}` : '');
if (CHECK) { console.log(bad ? `${bad} file lệch — chạy lại script` : `${summary}, mọi file khớp`); process.exit(bad ? 1 : 0); }
console.log(`${summary} · ${wrote} file đã ghi`);

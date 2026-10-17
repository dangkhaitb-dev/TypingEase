import { seoReading } from '../lib/seo-reading.mjs';
/* tooling/pages/games.mjs — trang trò chơi gõ phím cho từng ngôn ngữ (2026-09-25).
 *
 * Module trang cho Eleventy (xem tooling/pages/index.mjs): `pages()` trả `[{ path, html }]`, một trang
 * cho mỗi ngôn ngữ có content/games/<lang>.mjs (vi: tro-choi/index.html, en: typing-games/index.html,
 * còn lại <lang>/<slug>/index.html). Module chỉ ĐỌC; Eleventy ghi file.
 *   PAGES=games npx eleventy     chỉ dựng module này
 *
 * MỘT trang mỗi ngôn ngữ chứa cả ba trò (Mưa chữ, Đua với bóng, Săn phím — 11ty/client/tro-choi/games.js),
 * chọn bằng thẻ. Không tách mỗi trò hay mỗi độ khó ra một trang (trang cửa ngõ). Tung theo ĐỢT như trang
 * test: file chữ có `live: false` là viết sẵn, chưa bật.
 *
 * Kho từ in thẳng vào trang (JSON), lấy từ `words` của file chữ nếu có (tiếng Việt: kho có dấu, gõ
 * bằng Telex) hoặc từ content/data/words/<lang>.js — chính kho từ mà khoá học của ngôn ngữ đó dùng.
 * Bàn phím ảo (Săn phím) là bố cục của khoá: một TypingEaseCurriculum rút gọn khai keyboardId +
 * mọi bố cục của ngôn ngữ, để keyboard/preferences.js chỉ cho chọn trong họ đó.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { pathToFileURL } from 'node:url';
import { HOME_SWITCH } from '../lib/home-switch.mjs';
import { seoHead, ORIGIN } from '../lib/seo-head.mjs';
import { legalFooter } from '../lib/legal.mjs';
import { THUMB, HOW, STEPS, RAIN_SCENE, RAIN_SPRITE, RACE_SCENE, RALLY_CAR, SPACE_SCENE, SPACE_BOT } from '../lib/game-art.mjs';
import paths from '../lib/paths.cjs';

const loadWindow = file => {
  const sandbox = { window: {}, globalThis: {} };
  sandbox.window = sandbox; sandbox.globalThis = sandbox;
  vm.runInNewContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: path.relative(paths.ROOT, file) });
  return sandbox;
};
const esc = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const htmlLang = lang => lang.replace(/-([a-z]+)$/, (dash, region) => `-${region.toUpperCase()}`);
const json = value => JSON.stringify(value).replace(/</g, '\\u003c');
const LANGUAGES = loadWindow(paths.dataFile('languages.js')).TypingEaseLanguages.list;

const enabled = [], waiting = [];
for (const entry of LANGUAGES) {
  if (entry.course?.status !== 'ready') continue;
  const file = paths.contentFile('games', `${entry.code}.mjs`);
  if (!fs.existsSync(file)) continue;
  const T = (await import(pathToFileURL(file).href)).default;
  if (T.live === false) { waiting.push(entry.code); continue; }
  enabled.push({ entry, T, url: T.url || (entry.code === 'en' ? '/' + T.slug + '/' : '/' + entry.code + '/' + T.slug + '/') });
}
const cluster = [...enabled.map(({ entry, url }) => [htmlLang(entry.code), url]),
  ['x-default', (enabled.find(item => item.entry.code === 'en') || enabled[0])?.url]];
const alternates = cluster.filter(([, url]) => url).map(([code, url]) => `    <link rel="alternate" hreflang="${code}" href="${ORIGIN}${url}" />`).join('\n');

async function page({ entry, T, url }) {
  const lang = entry.code;
  const config = (await import(pathToFileURL(paths.contentFile('roadmaps', `config.${lang}.mjs`)).href)).default;
  if (config.routes.games !== url) throw new Error(`content/roadmaps/config.${lang}.mjs: routes.games phải là ${url}`);
  const S = config.s, routes = config.routes;
  const uiFile = `i18n/ui.${lang}.js`;
  const hasUi = fs.existsSync(paths.clientFile(uiFile));
  let words = T.words;
  let letters = [];
  if (!words) {
    const bank = loadWindow(paths.dataFile('words', `${lang}.js`)).TypingEaseWords[lang];
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
  const tab = (mode, [name, blurb]) =>
    `<button type="button" data-game-tab="${mode}" id="tab-${mode}" aria-controls="panel-${mode}">${THUMB[mode]}<b>${esc(name)}</b><span>${esc(blurb)}</span><i class="game-card-arrow" aria-hidden="true">${arrow}</i></button>`;
  // Hướng dẫn ba bước có hình, ngay đầu mỗi trò (chữ ở content/games/<lang>.mjs → `how`).
  if (!T.how || ['rain', 'race', 'keys'].some(mode => !Array.isArray(T.how[mode]) || T.how[mode].length !== 3))
    throw new Error(`content/games/${lang}.mjs: cần how.rain / how.race / how.keys, mỗi cái 3 câu`);
  const how = mode => `<ol class="game-how" aria-label="${esc(T.howAria)}">${STEPS[mode].map((name, index) =>
    `<li>${HOW[name]}<span><b>${index + 1}</b> ${esc(T.how[mode][index])}</span></li>`).join('')}</ol>`;
  const sections = T.sections.map(section => `        <section>
          <h2>${esc(section.h2)}</h2>
          ${fillN(section.html)}
        </section>`).join('\n\n');
  const faq = T.faq.map(([q, a]) => `            <details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n');
  const game = { lang, locale: T.locale, typeByPosition: Boolean(T.typeByPosition), words, letters, text: T.runtime };
  const R = T.rain, C = T.race, K = T.keys;
  for (const mode of ['rain', 'race', 'keys']) {
    if (!T.worlds?.[mode]?.trim()) throw new Error(`content/games/${lang}.mjs: missing worlds.${mode}`);
  }

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
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/tokens.css" />
    <link rel="stylesheet" href="/base.css" />
    <link rel="stylesheet" href="/keyboard/keyboard.css" />
    <link rel="stylesheet" href="/kiem-tra-toc-do-go/test.css" />
    <link rel="stylesheet" href="/tro-choi/games.css" />
      <link rel="stylesheet" href="/seo-reading.css" />
  </head>
  <body>
    <header class="topbar test-header">
      <a class="brand" href="/">Typing<span>Ease</span></a>
      <nav aria-label="${esc(S.navAria)}">
        ${nav}
      </nav>
      <div class="header-actions"><a class="home-switch" href="/" title="${esc(homeTitle)}">${esc(homeLabel)}</a></div>
    </header>

    <main class="test-main games-main">
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
          <div class="game-tabs" role="group" aria-label="${esc(T.tabsAria)}">
            ${tab('rain', T.modes.rain, true)}
            ${tab('race', T.modes.race, false)}
            ${tab('keys', T.modes.keys, false)}
          </div>

          <div class="game-play-nav" hidden><button type="button" data-act="games-back" aria-keyshortcuts="Escape"><span aria-hidden="true">${dir === 'rtl' ? '→' : '←'}</span> ${esc(T.tabsAria)} <kbd class="game-exit-key" aria-hidden="true">Esc</kbd></button><h2 id="game-play-title"></h2></div>
          <div class="game-panel" data-game-panel="rain" id="panel-rain" role="region" aria-labelledby="tab-rain" hidden>
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
            <div class="rain-arena" id="rain-arena">
              ${RAIN_SCENE}
              <div class="rain-companion" aria-hidden="true">${RAIN_SPRITE}</div>
              <div class="rain-progress" aria-hidden="true"><span id="rain-progress-fill"></span></div>
              <div class="game-overlay" id="rain-overlay"><div class="rain-welcome-art" aria-hidden="true">${RAIN_SPRITE}</div><p class="rain-world-label">${esc(T.worlds.rain)}</p><h2 class="rain-welcome-title">${esc(T.modes.rain[0])}</h2><p class="rain-welcome-copy">${esc(T.modes.rain[1])}</p><button class="primary-button game-start" type="button" data-act="rain-start">${esc(R.start)} <span>${arrow}</span></button><p class="game-hint">${esc(R.hint)}</p></div>
            <div class="rain-input-wrap"><span class="rain-input-icon" aria-hidden="true">⌨</span><input class="game-input" id="rain-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="${esc(R.placeholder)}" placeholder="${esc(R.placeholder)}" disabled /><kbd aria-hidden="true">↵</kbd></div>
            </div>
          </div>

          <div class="game-panel" data-game-panel="race" id="panel-race" role="region" aria-labelledby="tab-race" hidden>
            ${how('race')}
            <div class="game-bar">
              <label>${esc(C.pace)} <select id="race-pace"><option value="best" selected></option>${C.paces.map(wpm => `<option value="${wpm}">${esc(C.paceLabel(wpm))}</option>`).join('')}</select></label>
              <button class="primary-button game-start" type="button" data-act="race-start">${esc(C.start)} <span>${arrow}</span></button>
            </div>
            <div class="rally-world">
              ${RACE_SCENE}
              <div class="world-caption"><span>${esc(T.worlds.race)}</span><h2>${esc(T.modes.race[0])}</h2></div>
              <div class="rally-lights" aria-hidden="true"><i></i><i></i><i></i></div>
            <div class="race-track" aria-hidden="true">
              <div class="race-lane you"><span id="race-you">${RALLY_CAR('#d47b4e')}${esc(C.you)}</span></div>
              <div class="race-lane ghost"><span id="race-ghost">${RALLY_CAR('#8199bc')}${esc(C.ghost)}</span></div>
            </div>
            <div class="rally-console">
            <p class="race-prompt" id="race-prompt"></p>
            <input class="game-input" id="race-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="${esc(C.placeholder)}" placeholder="${esc(C.placeholder)}" disabled />
            <p class="race-status" id="race-status" aria-live="polite"></p>
            </div>
            </div>
            <div class="race-result" id="race-result" aria-live="polite" hidden></div>
          </div>

          <div class="game-panel" data-game-panel="keys" id="panel-keys" role="region" aria-labelledby="tab-keys" hidden>
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
            ${SPACE_SCENE}
            <div class="orbit-world">
              <div class="world-caption"><span>${esc(T.worlds.keys)}</span><h2>${esc(T.modes.keys[0])}</h2></div>
              <div class="orbit-target-ring"><p class="keys-target" id="keys-target" aria-live="polite"></p></div>
              <div class="orbit-bot" aria-hidden="true">${SPACE_BOT}</div>
              <div class="orbit-energy" aria-hidden="true"><span id="keys-energy"></span></div>
              <div class="orbit-feedback" id="keys-feedback" aria-hidden="true"></div>
            </div>
            <div class="keys-board keyboard-demo" id="keys-board"></div>
            <p class="game-hint">${esc(K.hint)}</p>
            <div class="keys-result" id="keys-result" aria-live="polite" hidden></div>
          </div>
        </section>

${seoReading(`${sections}

        <section>
          <h2>${esc(T.faqTitle)}</h2>
          <div class="faq">
${faq}
          </div>
        </section>`, { lang, prefix: `games-${lang}`, allLanguages: true })}

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

export default async function pages() {
  if (waiting.length) console.log(`games: chờ đợt sau: ${waiting.join(', ')}`);
  const out = [];
  for (const item of enabled) out.push({ path: [...item.url.split('/').filter(Boolean), 'index.html'].join('/'), html: await page(item) });
  return out;
}

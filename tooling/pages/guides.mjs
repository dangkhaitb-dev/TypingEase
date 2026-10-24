/* tooling/pages/guides.mjs — bài "cách gõ nhanh hơn" cho từng ngôn ngữ ngoài en/vi (2026-10-17).
 *
 * Module trang cho Eleventy (xem tooling/pages/index.mjs). Một ngôn ngữ có bài khi có
 * content/guides/<lang>.mjs; trang ra ở /<lang>/<slug>/. Cùng cụm hreflang với hai bài viết tay
 * /how-to-type-faster/ (en) và /cach-tang-wpm/ (vi): `guideHubTransform` thay khối hreflang của hai
 * trang đó bằng cụm tính từ CÙNG danh sách, để cả cụm khai hai chiều — y như trang test tốc độ.
 *
 * MỘT bài mỗi ngôn ngữ, viết riêng cho bàn phím và bộ gõ của ngôn ngữ đó — không dịch máy bài tiếng
 * Anh, không sinh nhiều bài cùng khuôn (luật chống spam, docs/DECISIONS.md).
 *
 * File chữ: { slug, title, description, breadcrumbAria, homeCrumb, crumb, eyebrow, h1, lead, meta,
 *   sections: [{ h2, html }], faqTitle, faq: [[q, a]], cta: { title, text, button } }.
 * `{course}` / `{test}` / `{games}` trong html = đường dẫn thật của ngôn ngữ đó, `{lessons}` = số bài khoá chính.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { pathToFileURL } from 'node:url';
import { HOME_SWITCH } from '../lib/home-switch.mjs';
import { seoHead, ORIGIN } from '../lib/seo-head.mjs';
import { legalFooter } from '../lib/legal.mjs';
import { seoReading } from '../lib/seo-reading.mjs';
import paths from '../lib/paths.cjs';

const esc = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const htmlLang = lang => lang.replace(/-([a-z]+)$/, (dash, region) => `-${region.toUpperCase()}`);
const loadWindow = file => {
  const sandbox = { window: {}, globalThis: {} };
  sandbox.window = sandbox; sandbox.globalThis = sandbox;
  vm.runInNewContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: path.relative(paths.ROOT, file) });
  return sandbox;
};
const LANGUAGES = loadWindow(paths.dataFile('languages.js')).TypingEaseLanguages.list;

// Ngôn ngữ đã có bài = có file chữ. Thứ tự hreflang: vi, en, rồi theo content/data/languages.js.
const enabled = [];
for (const entry of LANGUAGES) {
  if (['vi', 'en'].includes(entry.code) || entry.course?.status !== 'ready') continue;
  const file = paths.contentFile('guides', `${entry.code}.mjs`);
  if (!fs.existsSync(file)) continue;
  const G = (await import(pathToFileURL(file).href)).default;
  const config = (await import(pathToFileURL(paths.contentFile('roadmaps', `config.${entry.code}.mjs`)).href)).default;
  enabled.push({ entry, G, config, url: `/${entry.code}/${G.slug}/` });
}
const cluster = [['vi', '/cach-tang-wpm/'], ['en', '/how-to-type-faster/'],
  ...enabled.map(({ entry, url }) => [htmlLang(entry.code), url]), ['x-default', '/how-to-type-faster/']];
const alternates = indent => cluster.map(([code, url]) => `${indent}<link rel="alternate" hreflang="${code}" href="${ORIGIN}${url}" />`).join('\n');

function page({ entry, G, config, url }) {
  const lang = entry.code;
  const dir = entry.dir === 'rtl' ? 'rtl' : 'ltr';
  const arrow = dir === 'rtl' ? '←' : '→';
  const S = config.s;
  const routes = config.routes;
  const main = entry.courses[0];
  const lessons = main.lessons;
  const [homeLabel, homeTitle] = HOME_SWITCH[lang] || HOME_SWITCH.en;
  const nav = S.nav(routes).filter(([href]) => href)
    .map(([href, label]) => `<a${href === url ? ' class="active"' : ''} href="${href}">${esc(label)}</a>`).join('\n        ');
  const fill = text => String(text).replace(/\{lessons\}/g, lessons).replace(/\{course\}/g, main.roadmap || routes.lessons)
    .replace(/\{test\}/g, routes.test).replace(/\{games\}/g, routes.games);
  const sections = G.sections.map(section => `        <section>
          <h2>${esc(section.h2)}</h2>
          ${fill(section.html)}
        </section>`).join('\n\n');
  const faq = G.faq.map(([q, a]) => `            <details><summary>${esc(q)}</summary><p>${fill(a)}</p></details>`).join('\n');
  const { title, description } = G;

  return `<!doctype html>
<html lang="${htmlLang(lang)}"${dir === 'rtl' ? ' dir="rtl"' : ''}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <link rel="canonical" href="${ORIGIN}${url}" />
${seoHead({ kind: 'page', url, title, description, lang: htmlLang(lang), breadcrumb: [[G.homeCrumb, routes.home], [G.crumb, url]] })}
${alternates('    ')}
    <!-- Trang sinh bằng tooling/pages/guides.mjs từ content/guides/${lang}.mjs. Sửa ở đó, đừng sửa tay. -->
    <meta name="robots" content="index, follow" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" type="image/png" sizes="48x48" href="/assets/favicon-48x48.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
    <link rel="preload" href="/assets/fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="stylesheet" href="/fonts.css" />
    <link rel="stylesheet" href="/tokens.css" />
    <link rel="stylesheet" href="/base.css" />
    <link rel="stylesheet" href="/cach-go-10-ngon/article.css" />
    <link rel="stylesheet" href="/guides.css" />
    <link rel="stylesheet" href="/seo-reading.css" />
  </head>
  <body>
    <header class="topbar article-header">
      <a class="brand" href="/">Typing<span>Ease</span></a>
      <nav aria-label="${esc(S.navAria)}">
        ${nav}
      </nav>
      <div class="header-actions"><a class="home-switch" href="/" title="${esc(homeTitle)}">${esc(homeLabel)}</a></div>
    </header>

    <main class="article-main guide-main" id="main">
      <nav class="breadcrumb" aria-label="${esc(G.breadcrumbAria)}">
        <a href="${routes.home}">${esc(G.homeCrumb)}</a><span aria-hidden="true">›</span><span>${esc(G.crumb)}</span>
      </nav>

      <article>
        <header class="article-hero">
          <p class="eyebrow"><i aria-hidden="true"></i> ${esc(G.eyebrow)}</p>
          <h1>${esc(G.h1)}</h1>
          <p class="article-lead">${esc(G.lead)}</p>
          <p class="guide-meta">${esc(G.meta)}</p>
        </header>

${seoReading(`${sections}

        <section>
          <h2>${esc(G.faqTitle)}</h2>
          <div class="faq">
${faq}
          </div>
        </section>`, { lang, prefix: G.slug, allLanguages: true })}

        <section class="article-cta">
          <h2>${esc(G.cta.title)}</h2>
          <p>${esc(fill(G.cta.text))}</p>
          <a class="primary-button" href="${main.roadmap || routes.lessons}">${esc(G.cta.button)} <span aria-hidden="true">${arrow}</span></a>
        </section>
      </article>
    </main>

    <footer class="article-footer"><a class="brand" href="/">Typing<span>Ease</span></a>
      <p>${esc(S.footerTag)}</p>
      ${legalFooter(lang)}</footer>
    <script src="/menu.js" defer></script>
    <script src="/sw-register.js"></script>
  </body>
</html>
`;
}

// Hai bài viết tay của cụm, ở GỐC site.
const HUBS = ['how-to-type-faster', 'cach-tang-wpm'];
const CODES = new Set(LANGUAGES.map(entry => entry.code));
const isHub = outputPath => {
  const parts = ('/' + String(outputPath || '').replace(/\\/g, '/')).split('/');
  if (parts.pop() !== 'index.html' || !HUBS.includes(parts.pop())) return false;
  return !CODES.has(parts.pop());
};

/** Transform Eleventy cho hai bài viết tay: chỉ thay khối hreflang. Trang khác trả nguyên. */
export function guideHubTransform(html, outputPath) {
  if (!isHub(outputPath) || !enabled.length) return html;
  const run = /([ \t]*)<link rel="alternate" hreflang="[^"]+" href="[^"]+" \/>(\r?\n)(?:[ \t]*<link rel="alternate" hreflang="[^"]+" href="[^"]+" \/>\r?\n)*/.exec(html);
  if (!run) throw new Error(`${outputPath}: không thấy khối hreflang`);
  return html.replace(run[0], () => alternates(run[1]).split('\n').join(run[2]) + run[2]);
}

export const guideRoutes = () => enabled.map(({ entry, url }) => [entry.code, url]);

export default async function pages() {
  return enabled.map(item => ({ path: `${item.entry.code}/${item.G.slug}/index.html`, html: page(item) }));
}

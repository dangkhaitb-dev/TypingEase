/* scripts/build-legal-pages.mjs — Giới thiệu / Điều khoản / Quyền riêng tư cho mọi ngôn ngữ (2026-09-26).
 *
 *   node scripts/build-legal-pages.mjs            ghi 3 trang cho mỗi phap-ly/text/<lang>.mjs
 *   node scripts/build-legal-pages.mjs --check    chỉ so, lệch thì exit 1
 *
 * Bản TIẾNG ANH (phap-ly/text/en.mjs) là bản gốc có hiệu lực; bản dịch in câu `prevails` ngay dưới
 * ngày cập nhật. About được index và vào sitemap; Terms và Privacy là `noindex, follow`: chúng không
 * cần xếp hạng, và hàng chục bản dịch của cùng một văn bản pháp lý không nên nằm trong chỉ mục.
 * Chữ phải khớp sự thật của mã (không tài khoản, không cookie, không analytics, localStorage, Google
 * Fonts, Cloudflare Pages) — đổi hành vi của site thì đổi en.mjs trước.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { HOME_SWITCH } from '../bai-hoc/home-switch.mjs';
import { seoHead, ORIGIN } from './lib/seo-head.mjs';
import { LEGAL_TEXT, legalUrls, legalFooter } from './lib/legal.mjs';

export const UPDATED = '2026-09-26';
export const EMAIL = 'support@typingease.site';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');
const esc = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const htmlLang = lang => lang.replace(/-([a-z]+)$/, (dash, region) => `-${region.toUpperCase()}`);
const sandbox = { window: {} }; sandbox.window = sandbox;
vm.runInNewContext(fs.readFileSync(path.join(root, 'data', 'languages.js'), 'utf8'), sandbox);
const LANGUAGES = sandbox.TypingEaseLanguages.list;
const PAGES = ['about', 'terms', 'privacy'];

const langs = LANGUAGES.map(entry => entry.code).filter(code => LEGAL_TEXT[code]);
const cluster = page => [...langs.map(code => [htmlLang(code), legalUrls(code)[page]]), ['x-default', legalUrls('en')[page]]]
  .map(([code, url]) => `    <link rel="alternate" hreflang="${code}" href="${ORIGIN}${url}" />`).join('\n');
const date = (lang, iso) => {
  const locale = LEGAL_TEXT[lang].locale || htmlLang(lang);
  try { return new Date(`${iso}T12:00:00Z`).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }); }
  catch { return iso; }
};

async function page(lang, name) {
  const T = LEGAL_TEXT[lang];
  const P = T.pages[name];
  const entry = LANGUAGES.find(item => item.code === lang);
  const config = (await import(pathToFileURL(path.join(root, 'bai-hoc', `config.${lang}.mjs`)).href)).default;
  const S = config.s, routes = config.routes;
  const urls = legalUrls(lang);
  const url = urls[name];
  const dir = entry?.dir === 'rtl' ? 'rtl' : 'ltr';
  const [homeLabel, homeTitle] = HOME_SWITCH[lang] || HOME_SWITCH.en;
  const indexable = name === 'about';
  const fill = html => String(html).replace(/\{email\}/g, EMAIL).replace(/\{privacy\}/g, urls.privacy).replace(/\{terms\}/g, urls.terms);
  const nav = S.nav(routes).filter(([href]) => href).map(([href, label]) => `<a href="${href}">${esc(label)}</a>`).join('\n        ');
  const sections = P.sections.map(section => `        <section>
          <h2>${esc(section.h2)}</h2>
          ${fill(section.html)}
        </section>`).join('\n\n');
  const head = indexable
    ? `${seoHead({ kind: 'page', url, title: P.title, description: P.description, lang: htmlLang(lang), breadcrumb: [[T.home, routes.home], [P.h1, url]] })}\n${cluster(name)}`
    : '';
  return `<!doctype html>
<html lang="${htmlLang(lang)}"${dir === 'rtl' ? ' dir="rtl"' : ''}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(P.title)}</title>
    <meta name="description" content="${esc(P.description)}" />
    <link rel="canonical" href="${ORIGIN}${url}" />
${head ? `${head}\n` : ''}    <!-- Trang sinh bằng scripts/build-legal-pages.mjs từ phap-ly/text/${lang}.mjs. Sửa ở đó rồi chạy lại. -->
    <meta name="robots" content="${indexable ? 'index, follow' : 'noindex, follow'}" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" type="image/png" sizes="48x48" href="/assets/favicon-48x48.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/tokens.css" />
    <link rel="stylesheet" href="/base.css" />
    <link rel="stylesheet" href="/cach-go-10-ngon/article.css" />
  </head>
  <body>
    <header class="topbar article-header">
      <a class="brand" href="/">Typing<span>Ease</span></a>
      <nav aria-label="${esc(S.navAria)}">
        ${nav}
      </nav>
      <div class="header-actions"><a class="home-switch" href="/" title="${esc(homeTitle)}">${esc(homeLabel)}</a></div>
    </header>

    <main class="article-main">
      <nav class="breadcrumb" aria-label="${esc(T.breadcrumbAria)}">
        <a href="${routes.home}">${esc(T.home)}</a><span aria-hidden="true">›</span><span>${esc(P.h1)}</span>
      </nav>

      <article>
        <header class="article-hero">
          <p class="eyebrow"><i></i> ${esc(P.eyebrow)}</p>
          <h1>${esc(P.h1)}</h1>
          <p class="article-lead">${esc(P.lead)}</p>
          <p class="legal-meta">${esc(T.updatedLabel)}: <time datetime="${UPDATED}">${esc(date(lang, UPDATED))}</time>${T.prevails ? `<br />${esc(T.prevails)} <a class="inline-link" href="${legalUrls('en')[name]}" hreflang="en" lang="en">English</a>` : ''}</p>
        </header>

${sections}
      </article>
    </main>

    <footer class="article-footer">
      <a class="brand" href="/">Typing<span>Ease</span></a>
      <p>${esc(S.footerTag)}</p>
      ${legalFooter(lang)}
    </footer>
    <script src="/menu.js" defer></script>
    <script src="/sw-register.js"></script>
  </body>
</html>
`;
}

const outputs = [];
for (const lang of langs) for (const name of PAGES) {
  const url = legalUrls(lang)[name];
  outputs.push({ file: path.join(root, ...url.split('/').filter(Boolean), 'index.html'), html: await page(lang, name) });
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
const summary = `${outputs.length} trang pháp lý (${langs.join(', ')})`;
if (CHECK) { console.log(bad ? `${bad} file lệch — chạy lại script` : `${summary}, mọi file khớp`); process.exit(bad ? 1 : 0); }
console.log(`${summary} · ${wrote} file đã ghi`);

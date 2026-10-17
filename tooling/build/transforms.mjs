/* tooling/build/transforms.mjs — site-wide HTML transforms, applied by Eleventy to every .html output
 * (hand-written and generated) in this order. Each is `(html, outputPath, inputPath) => html` and
 * must be idempotent: hand-written pages in 11ty/site/ already carry most of these blocks.
 *
 * What used to be patched into the pages in place now happens here, at build time:
 *   stamp-data      `?v=<hash>` on <script src=".../data/curriculum.<id>.js"> (tooling/lib/stamp.mjs)
 *   home-hreflang   the hreflang cluster of the language home pages (/, /vi/, /fr/…)
 *   legal-footer    About / Terms / Privacy line before </footer> (tooling/lib/legal.mjs)
 *   menu-button     /menu.js on pages whose .topbar has a <nav>
 *   seo-head        share tags + JSON-LD (tooling/lib/seo-head.mjs) on indexed pages
 *   typing-test-hubs hreflang of /typing-test/ and /kiem-tra-toc-do-go/ (tooling/pages/typing-tests.mjs)
 * The last four only touch HAND-WRITTEN pages (source in 11ty/site/, not generated.11ty.js): every
 * generator prints those blocks itself, exactly as the old scripts/build-seo-head.mjs assumed.
 * Sitemap <lastmod> is not a page: tooling/data/sitemap-lastmod.mjs writes public/sitemap.xml.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import paths from '../lib/paths.cjs';
import { stampScripts, curriculumHash } from '../lib/stamp.mjs';
import { seoHead, START, END, ORIGIN } from '../lib/seo-head.mjs';
import { legalFooter, LEGAL_START, LEGAL_END } from '../lib/legal.mjs';
import { hubTransform } from '../pages/typing-tests.mjs';
import { siteHeader } from '../lib/site-header.mjs';
import { homePresentation } from '../lib/home-presentation.mjs';

/* ---------- which page is this ---------- */
/** URL of a hand-written page (`/fr/apprendre/`), or null for a generated page / non-page input. */
export function handWrittenUrl(inputPath) {
  if (!inputPath || !inputPath.endsWith('.html')) return null;
  const rel = path.relative(paths.SITE, path.resolve(paths.ROOT, inputPath));
  if (rel.startsWith('..') || path.isAbsolute(rel) || path.basename(rel) !== 'index.html') return null;
  const dir = path.dirname(rel).split(path.sep).join('/');
  return dir === '.' ? '/' : `/${dir}/`;
}
const handWritten = fn => (html, outputPath, inputPath) => {
  const url = handWrittenUrl(inputPath);
  return url ? fn(html, url) : html;
};

/* ---------- stamp-data ---------- */
// One hash per curriculum per build: the data does not change while Eleventy writes pages. A watch
// rebuild reuses this module, so eleventy.config.mjs calls resetCaches() at every build start.
const hashes = new Map();
const cachedHash = code => {
  if (!hashes.has(code)) hashes.set(code, curriculumHash(code));
  return hashes.get(code);
};
export const resetCaches = () => hashes.clear();
const stampData = html => stampScripts(html, cachedHash);

/* ---------- home-hreflang ---------- */
const sandbox = { window: {} }; sandbox.window = sandbox;
vm.runInNewContext(fs.readFileSync(paths.dataFile('languages.js'), 'utf8'), sandbox);
const LANGUAGES = sandbox.TypingEaseLanguages.list;
const HOMES = [['en', '/'], ['vi', '/vi/'],
  ...LANGUAGES.filter(entry => !['en', 'vi'].includes(entry.code) && entry.course?.status === 'ready')
    .map(entry => [entry.code === 'zh-tw' ? 'zh-TW' : entry.code, `/${entry.code}/`])];
for (const [, url] of HOMES) if (!fs.existsSync(paths.sourcePage(url))) throw new Error(`home-hreflang: no hand-written home page ${url}`);
const HOME_URLS = new Set(HOMES.map(([, url]) => url));
const HOME_BLOCK = [...HOMES.map(([code, url]) => `<link rel="alternate" hreflang="${code}" href="${ORIGIN}${url}" />`),
  `<link rel="alternate" hreflang="x-default" href="${ORIGIN}/" />`];
const HREFLANG_RUN = /([ \t]*)<link rel="alternate" hreflang="[^"]+" href="[^"]+" \/>(\r?\n)(?:[ \t]*<link rel="alternate" hreflang="[^"]+" href="[^"]+" \/>\r?\n)*/;
function homeHreflang(html, url) {
  if (!HOME_URLS.has(url)) return html;
  const match = HREFLANG_RUN.exec(html.slice(0, html.indexOf('</head>')));
  if (!match) throw new Error(`${url}: no hreflang block in <head>`);
  return html.replace(match[0], HOME_BLOCK.map(line => match[1] + line + match[2]).join(''));
}

/* ---------- shared helpers ---------- */
const pick = (html, re) => (re.exec(html) || [])[1];
const unescape = text => String(text).replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const newlineOf = html => html.includes('\r\n') ? '\r\n' : '\n';
const isRedirect = html => /http-equiv="refresh"/i.test(html);

/* ---------- legal-footer ---------- */
// Every page with a footer, noindex ones included — except redirect pages.
function legalLine(html) {
  if (!html.includes('</footer>') || isRedirect(html)) return html;
  // The footer no longer has a roadmap/lesson link row (the top menu has them): drop
  // <nav class="footer-links"> and the blank line it leaves.
  html = html.replace(/[ \t]*<nav class="footer-links"[^>]*>[\s\S]*?<\/nav>(\r?\n)?/, '');
  const legal = legalFooter(pick(html, /<html lang="([^"]+)"/) || 'en');
  const at = html.indexOf(LEGAL_START);
  if (at >= 0) return html.slice(0, at) + legal + html.slice(html.indexOf(LEGAL_END, at) + LEGAL_END.length);
  const close = html.lastIndexOf('</footer>');
  const lineStart = html.lastIndexOf('\n', close) + 1;
  const indent = /^[ \t]*$/.test(html.slice(lineStart, close)) ? html.slice(lineStart, close) + '  ' : '';
  return indent ? html.slice(0, lineStart) + indent + legal + newlineOf(html) + html.slice(lineStart) : html.slice(0, close) + legal + html.slice(close);
}

/* ---------- menu-button ---------- */
// The ☰ button of the top menu on narrow screens (menu.js): every page whose `.topbar` has a <nav>.
function menuButton(html) {
  const topbar = /<header class="topbar[^"]*"[^>]*>([\s\S]*?)<\/header>/.exec(html);
  if (!topbar || !/<nav[\s>]/.test(topbar[1]) || html.includes('/menu.js')) return html;
  const sw = /([ \t]*)<script src="(?:\.\.\/|\/)?sw-register\.js"><\/script>/.exec(html);
  const newline = newlineOf(html);
  return sw ? html.replace(sw[0], `${sw[1]}<script src="/menu.js" defer></script>${newline}${sw[0]}`)
    : html.replace('</body>', `  <script src="/menu.js" defer></script>${newline}  </body>`);
}

/* ---------- seo-head ---------- */
const TOOL = new Set(['/typing-test/', '/kiem-tra-toc-do-go/']);
function seoBlock(html, url) {
  const robots = pick(html, /<meta name="robots" content="([^"]*)"/) || '';
  const start = html.indexOf(START);
  if (/noindex/.test(robots) || isRedirect(html)) {
    if (start >= 0) throw new Error(`${url}: noindex page with a seo:head block`);
    return html;
  }
  const title = unescape(pick(html, /<title>([^<]*)<\/title>/) || '');
  const description = unescape(pick(html, /<meta name="description" content="([^"]*)"/) || '');
  const canonical = pick(html, /<link rel="canonical" href="([^"]*)"/);
  if (!title || !description || !canonical) throw new Error(`${url}: missing title/description/canonical`);
  const lang = pick(html, /<html lang="([^"]+)"/) || 'en';
  const kind = url === '/' ? 'home' : TOOL.has(url) ? 'tool' : 'page';
  const newline = newlineOf(html);
  const indent = (/\n([ \t]*)<link rel="canonical"/.exec(html) || [])[1] ?? '    ';
  // Visible breadcrumb (<nav class="breadcrumb">) → BreadcrumbList, unless the page already declares
  // one outside the seo:head block (the Vietnamese articles do).
  let breadcrumb = null;
  const crumbNav = /<nav class="breadcrumb"[^>]*>([\s\S]*?)<\/nav>/.exec(html);
  const ownLd = html.replace(/<!-- seo:head -->[\s\S]*?<!-- \/seo:head -->/, '');
  if (crumbNav && !/BreadcrumbList/.test(ownLd)) {
    const links = [...crumbNav[1].matchAll(/<a[^>]*href="([^"]+)"[^>]*>([^<]+)<\/a>/g)]
      .map(m => [unescape(m[2]).trim(), new URL(m[1], ORIGIN + url).pathname]);
    const last = /<span(?![^>]*aria-hidden)[^>]*>([^<]+)<\/span>\s*$/.exec(crumbNav[1].trim());
    if (links.length && last) breadcrumb = [...links, [unescape(last[1]).trim(), new URL(canonical).pathname]];
  }
  const block = seoHead({ kind, url: new URL(canonical).pathname, title, description, lang, indent, breadcrumb }).replace(/\n/g, newline);
  if (start >= 0) {
    const lineStart = html.lastIndexOf('\n', start) + 1;
    const end = html.indexOf(END, start) + END.length;
    return html.slice(0, lineStart) + block.trimStart().replace(/^/, indent) + html.slice(end);
  }
  const canon = /[ \t]*<link rel="canonical" href="[^"]*" \/?>(\r?\n)/.exec(html);
  if (!canon) throw new Error(`${url}: canonical tag is not on a line of its own`);
  return html.replace(canon[0], canon[0] + block + newline);
}

/* ---------- the chain ---------- */
// Shared visual shell applies equally to generated routes and hand-written pages.
function designShell(html) {
  if (isRedirect(html) || !html.includes('/tokens.css') || html.includes('/design-system.css')) return html;
  return html.replace('</head>', '    <link rel="stylesheet" href="/design-system.css" />\n  </head>')
    .replace('</body>', '    <script src="/interface-icons.js" defer></script>\n  </body>');
}
export const TRANSFORMS = [
  ['shared-header', siteHeader],
  ['design-shell', designShell],
  ['home-presentation', homePresentation],
  ['stamp-data', stampData],
  ['home-hreflang', handWritten(homeHreflang)],
  ['legal-footer', handWritten(legalLine)],
  ['menu-button', menuButton],
  ['seo-head', handWritten(seoBlock)],
  // hreflang of the two hand-written typing-test hubs (/typing-test/, /kiem-tra-toc-do-go/): one
  // line per language whose test page tooling/pages/typing-tests.mjs builds.
  ['typing-test-hubs', hubTransform]
];

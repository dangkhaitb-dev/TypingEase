/* scripts/build-seo-head.mjs — ba việc SEO trên trang VIẾT TAY (Đợt 0, 2026-09-25).
 *
 *   node scripts/build-seo-head.mjs           ghi
 *   node scripts/build-seo-head.mjs --check   chỉ so, lệch thì exit 1
 *
 * 1. Khối chia sẻ + JSON-LD (scripts/lib/seo-head.mjs) cho mọi trang ĐƯỢC INDEX mà không do máy
 *    sinh nào viết ra. Trang lộ trình do bai-hoc/generate.mjs tự in khối này; trang học bài, trang
 *    tiến độ, bài nếm thử và trang chuyển hướng là noindex nên không có.
 * 2. Cụm hreflang của TRANG NHÀ các ngôn ngữ (/, /vi/, /fr/…): mỗi trang liệt kê đủ cả 28, để mọi
 *    cặp khai hai chiều. Trước đây /fr/ trỏ về / mà / không trỏ lại — Google bỏ qua cặp một chiều.
 * 3. `<lastmod>` trong sitemap.xml: ngày commit cuối của file nếu file chưa đổi so với HEAD, còn
 *    không thì ngày sửa file trên đĩa. Không bịa ngày: Google bỏ qua lastmod của site hay khai sai.
 *    Ở chế độ --check chỉ kiểm mọi <url> có lastmod (ngày phụ thuộc git và đồng hồ).
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { seoHead, START, END, ORIGIN } from './lib/seo-head.mjs';
import { legalFooter, LEGAL_START, LEGAL_END } from './lib/legal.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');
const read = file => fs.readFileSync(file, 'utf8');
const sandbox = { window: {} }; sandbox.window = sandbox;
vm.runInNewContext(read(path.join(root, 'data', 'languages.js')), sandbox);
const LANGUAGES = sandbox.TypingEaseLanguages.list;

const SKIP_DIRS = new Set(['node_modules', 'vendor', 'scripts', 'data', 'keyboard', 'i18n', 'assets', '.git', '.claude']);
const pages = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) { if (!SKIP_DIRS.has(entry.name) && !entry.name.startsWith('_')) walk(path.join(dir, entry.name)); }
    else if (entry.name === 'index.html') pages.push(path.join(dir, entry.name));
  }
})(root);
const urlOf = file => {
  const rel = path.relative(root, path.dirname(file)).split(path.sep).join('/');
  return rel ? `/${rel}/` : '/';
};
const byUrl = new Map(pages.map(file => [urlOf(file), file]));

// Các file đổi được giữ nguyên kiểu xuống dòng của chúng (CRLF hay LF).
const outputs = new Map();
const load = file => outputs.get(file) ?? read(file);
const save = (file, html) => outputs.set(file, html);

/* ---------- 2. hreflang của trang nhà ---------- */
const homes = [['en', '/'], ['vi', '/vi/'],
  ...LANGUAGES.filter(entry => !['en', 'vi'].includes(entry.code) && entry.course?.status === 'ready')
    .map(entry => [entry.code === 'zh-tw' ? 'zh-TW' : entry.code, `/${entry.code}/`])];
for (const [, url] of homes) if (!byUrl.has(url)) throw new Error(`thiếu trang nhà ${url}`);
const homeBlock = [...homes.map(([code, url]) => `<link rel="alternate" hreflang="${code}" href="${ORIGIN}${url}" />`),
  `<link rel="alternate" hreflang="x-default" href="${ORIGIN}/" />`];
const HREFLANG_RUN = /([ \t]*)<link rel="alternate" hreflang="[^"]+" href="[^"]+" \/>(\r?\n)(?:[ \t]*<link rel="alternate" hreflang="[^"]+" href="[^"]+" \/>\r?\n)*/;
for (const [, url] of homes) {
  const file = byUrl.get(url);
  const html = load(file);
  const match = HREFLANG_RUN.exec(html.slice(0, html.indexOf('</head>')));
  if (!match) throw new Error(`${url}: không thấy khối hreflang trong <head>`);
  save(file, html.replace(match[0], homeBlock.map(line => match[1] + line + match[2]).join('')));
}

/* ---------- 1. khối chia sẻ + JSON-LD ---------- */
const TOOL = new Set(['/typing-test/', '/kiem-tra-toc-do-go/']);
const pick = (html, re) => (re.exec(html) || [])[1];
const unescape = text => String(text).replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
let blocks = 0;
for (const file of pages) {
  const url = urlOf(file);
  let html = load(file);
  if (/bai-hoc\/generate\.mjs|build-test-pages\.mjs|build-game-pages\.mjs|build-legal-pages\.mjs|build-progress-pages\.mjs|build-family-pages\.js|build-tasters\.js/
    .test(html.slice(0, html.indexOf('</head>')))) continue;   // máy sinh tự in
  // Liên kết Giới thiệu / Điều khoản / Quyền riêng tư ngay trước </footer> (scripts/lib/legal.mjs).
  // Mọi trang có chân trang, kể cả trang noindex — trừ trang chuyển hướng.
  if (html.includes('</footer>') && !/http-equiv="refresh"/i.test(html)) {
    // Chân trang không còn hàng liên kết lộ trình/bài học (menu trên đã có): giữa chân trang là dòng
    // pháp lý. Bỏ <nav class="footer-links"> cùng dòng trống nó để lại.
    html = html.replace(/[ \t]*<nav class="footer-links"[^>]*>[\s\S]*?<\/nav>(\r?\n)?/, '');
    const footerLang = pick(html, /<html lang="([^"]+)"/) || 'en';
    const legal = legalFooter(footerLang);
    const at = html.indexOf(LEGAL_START);
    if (at >= 0) html = html.slice(0, at) + legal + html.slice(html.indexOf(LEGAL_END, at) + LEGAL_END.length);
    else {
      const close = html.lastIndexOf('</footer>');
      const lineStart = html.lastIndexOf('\n', close) + 1;
      const indent = /^[ \t]*$/.test(html.slice(lineStart, close)) ? html.slice(lineStart, close) + '  ' : '';
      const newline = html.includes('\r\n') ? '\r\n' : '\n';
      html = indent ? html.slice(0, lineStart) + indent + legal + newline + html.slice(lineStart) : html.slice(0, close) + legal + html.slice(close);
    }
    save(file, html);
  }
  // Nút ☰ cho menu trên cùng khi màn hẹp (menu.js): mọi trang có `.topbar` chứa <nav>.
  const topbar = /<header class="topbar[^"]*"[^>]*>([\s\S]*?)<\/header>/.exec(html);
  if (topbar && /<nav[\s>]/.test(topbar[1]) && !html.includes('/menu.js')) {
    const sw = /([ \t]*)<script src="(?:\.\.\/|\/)?sw-register\.js"><\/script>/.exec(html);
    const newline = html.includes('\r\n') ? '\r\n' : '\n';
    html = sw ? html.replace(sw[0], `${sw[1]}<script src="/menu.js" defer></script>${newline}${sw[0]}`)
      : html.replace('</body>', `  <script src="/menu.js" defer></script>${newline}  </body>`);
    save(file, html);
  }
  const robots = pick(html, /<meta name="robots" content="([^"]*)"/) || '';
  const indexable = !/noindex/.test(robots) && !/http-equiv="refresh"/i.test(html);
  const start = html.indexOf(START);
  if (!indexable) {
    if (start >= 0) throw new Error(`${url}: trang noindex mà có khối seo:head`);
    continue;
  }
  const title = unescape(pick(html, /<title>([^<]*)<\/title>/) || '');
  const description = unescape(pick(html, /<meta name="description" content="([^"]*)"/) || '');
  const canonical = pick(html, /<link rel="canonical" href="([^"]*)"/);
  if (!title || !description || !canonical) throw new Error(`${url}: thiếu title/description/canonical`);
  const lang = pick(html, /<html lang="([^"]+)"/) || 'en';
  const kind = url === '/' ? 'home' : TOOL.has(url) ? 'tool' : 'page';
  const newline = html.includes('\r\n') ? '\r\n' : '\n';
  const indent = (/\n([ \t]*)<link rel="canonical"/.exec(html) || [])[1] ?? '    ';
  // Breadcrumb hiển thị (<nav class="breadcrumb">) → BreadcrumbList, trừ khi trang đã tự khai một cái
  // ngoài khối seo:head (các bài viết tiếng Việt có sẵn).
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
    html = html.slice(0, lineStart) + block.trimStart().replace(/^/, indent) + html.slice(end);
  } else {
    const canon = /[ \t]*<link rel="canonical" href="[^"]*" \/?>(\r?\n)/.exec(html);
    if (!canon) throw new Error(`${url}: thẻ canonical không nằm trên một dòng riêng`);
    html = html.replace(canon[0], canon[0] + block + newline);
  }
  save(file, html);
  blocks += 1;
}

/* ---------- 3. lastmod ---------- */
const sitemapFile = path.join(root, 'sitemap.xml');
let sitemap = read(sitemapFile);
const git = args => execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
const today = new Date();
const ymd = date => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
const lastmodOf = file => {
  const rel = path.relative(root, file).split(path.sep).join('/');
  try {
    const tracked = git(['ls-files', '--', rel]);
    const dirty = git(['status', '--porcelain', '--', rel]);
    if (tracked && !dirty) return git(['log', '-1', '--format=%cs', '--', rel]);
  } catch { /* không có git: dùng ngày sửa file */ }
  return ymd(fs.statSync(file).mtime > today ? today : fs.statSync(file).mtime);
};
let missing = 0;
sitemap = sitemap.replace(/<url><loc>([^<]+)<\/loc>(?:<lastmod>[^<]*<\/lastmod>)?<\/url>/g, (whole, loc) => {
  const url = loc.replace(ORIGIN, '');
  const file = byUrl.get(url);
  if (!file) throw new Error(`sitemap: ${url} không có trang`);
  if (CHECK) { if (!whole.includes('<lastmod>')) missing += 1; return whole; }
  return `<url><loc>${loc}</loc><lastmod>${lastmodOf(file)}</lastmod></url>`;
});

/* ---------- ghi / so ---------- */
let bad = 0, wrote = 0;
for (const [file, html] of outputs) {
  if (html === read(file)) continue;
  if (CHECK) { bad += 1; console.log(`LỆCH  ${path.relative(root, file)}`); continue; }
  fs.writeFileSync(file, html);
  wrote += 1;
}
if (CHECK) {
  if (missing) console.log(`sitemap: ${missing} <url> thiếu <lastmod>`);
  console.log(bad || missing ? 'LỆCH — chạy lại scripts/build-seo-head.mjs' : `${blocks} trang có khối chia sẻ, ${homes.length} trang nhà hreflang đủ, sitemap có lastmod — khớp`);
  process.exit(bad || missing ? 1 : 0);
}
if (sitemap !== read(sitemapFile)) { fs.writeFileSync(sitemapFile, sitemap); wrote += 1; }
console.log(`${blocks} trang có khối chia sẻ, ${homes.length} trang nhà hreflang đủ · ${wrote} file đã ghi`);

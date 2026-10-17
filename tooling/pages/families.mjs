/*
 * tooling/pages/families.mjs — trang PLAYER của mỗi họ bàn phím không-mặc-định.
 *
 * Module trang cho Eleventy (tooling/pages/index.mjs): module chỉ ĐỌC, Eleventy ghi file.
 * `PAGES=families npx eleventy` dựng riêng nhóm trang này.
 *
 * Một họ (content/data/languages.js → `courses`) là một khoá riêng: /fr/bepo/ là lộ trình,
 * /fr/bepo/apprendre/ là player. Không trang nào trong hai trang đó được viết tay:
 *
 *   - LỘ TRÌNH do tooling/pages/roadmaps.mjs dựng, y như trang lộ trình của họ mặc định.
 *   - PLAYER (module này) là bản sao trang player viết tay của họ mặc định (11ty/site/fr/apprendre/)
 *     với đúng bốn chỗ đổi: mã khoá trên <html data-course>, canonical, nút quay về lộ trình, và chỉ
 *     mục giáo trình nạp vào. Chép chứ không dựng lại: trang player của mỗi ngôn ngữ đã có bảng
 *     chuỗi, thứ tự script và ghi chú riêng của nó, và bản sao đi theo trang gốc ở mỗi lần build.
 *
 * Số bài/unit trong languages.js và dòng sitemap của các họ do tooling/data/sync-catalogue.mjs ghi.
 */
import fs from 'node:fs';
import path from 'node:path';
import paths from '../lib/paths.cjs';

const SITE = 'https://typingease.site';

function loadLanguages() {
  const scope = {};
  new Function('window', fs.readFileSync(paths.dataFile('languages.js'), 'utf8'))(scope);
  return scope.TypingEaseLanguages.list;
}

const rel = file => path.relative(paths.ROOT, file).split(path.sep).join('/');

function replaceOnce(text, from, to, where) {
  const count = text.split(from).length - 1;
  if (count < 1) throw new Error(`${where}: không thấy ${JSON.stringify(from)} trong trang gốc`);
  return text.split(from).join(to);
}

function playerPage(base, family) {
  const sourceFile = paths.sourcePage(base.href);
  const source = fs.readFileSync(sourceFile, 'utf8').replace(/\r\n/g, '\n');
  const where = `${family.id} (từ ${rel(sourceFile)})`;
  let html = source;
  // Thẻ <html> có thể mang thêm dir="rtl" (Ả Rập…) hay mã vùng (zh-Hans): chỉ chen data-course vào.
  const open = /<html lang="[^"]+"[^>]*>/.exec(html);
  if (!open) throw new Error(`${where}: không thấy thẻ <html lang>`);
  html = html.replace(open[0], open[0].replace(/\s*data-course="[^"]*"/, '').replace(/>$/, ` data-course="${family.id}">`));
  html = replaceOnce(html, `<link rel="canonical" href="${SITE}${base.href}" />`,
    `<link rel="canonical" href="${SITE}${family.href}" />`, where);
  html = replaceOnce(html, `href="${base.roadmap}" id="pt-back"`, `href="${family.roadmap}" id="pt-back"`, where);
  // Thẻ chỉ mục của trang gốc có thể mang mã băm `?v=…`: bản sao trỏ sang chỉ mục của họ này,
  // CHƯA băm — transform của cả site gắn `?v=` sau.
  const baseIndex = new RegExp(`<script src="/data/curriculum\\.${base.id.replace(/-/g, '\\-')}\\.js(?:\\?v=[a-f0-9]+)?"></script>`);
  if (!baseIndex.test(html)) throw new Error(`${where}: không thấy thẻ <script> của data/curriculum.${base.id}.js trong trang gốc`);
  html = html.replace(baseIndex, `<script src="/data/curriculum.${family.id}.js"></script>`);
  // Dấu vết cho ai mở trang đã build để sửa: sửa trang gốc. Chữ giữ nguyên như đầu ra cũ (tên
  // script cũ, đường dẫn theo URL) để trang ra không đổi byte nào.
  html = html.replace('<head>\n', `<head>\n    <!-- SINH TỰ ĐỘNG bằng scripts/build-family-pages.js từ ${paths.pageFile(base.href)}. Sửa trang gốc rồi chạy lại. -->\n`);
  return html;
}

export default async function pages() {
  const out = [];
  for (const entry of loadLanguages()) {
    const [base, ...others] = entry.courses || [];
    for (const family of others) out.push({ path: paths.pageFile(family.href), html: playerPage(base, family) });
  }
  return out;
}

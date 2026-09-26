#!/usr/bin/env node
/*
 * scripts/build-family-pages.js — dựng HAI trang cho mỗi họ bàn phím không-mặc-định.
 *
 * Chạy:  node scripts/build-family-pages.js           ghi mọi trang + sitemap
 *        node scripts/build-family-pages.js --check   không ghi, báo trang nào lệch
 *
 * Một họ (data/languages.js → `courses`) là một khoá riêng: /fr/bepo/ là lộ trình, /fr/bepo/apprendre/
 * là player. Không trang nào trong hai trang đó được viết tay:
 *
 *   - LỘ TRÌNH do bai-hoc/generate.mjs --course <mã> sinh, y như trang lộ trình của họ mặc định.
 *   - PLAYER là bản sao trang player của họ mặc định (/fr/apprendre/) với đúng bốn chỗ đổi: mã khoá
 *     trên <html data-course>, canonical, nút quay về lộ trình, và chỉ mục giáo trình nạp vào. Chép
 *     chứ không dựng lại: trang player của mỗi ngôn ngữ đã có bảng chuỗi, thứ tự script và ghi chú
 *     riêng của nó, và bản sao phải đi theo mỗi lần trang gốc được sửa — nên chạy lại script này.
 *
 * SITEMAP nhận trang lộ trình của mọi họ (player là noindex, như ở họ mặc định). Script chỉ CHÈN
 * dòng còn thiếu, ngay sau dòng lộ trình của họ mặc định; không đụng tới dòng nào khác.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const CHECK = process.argv.includes('--check');
const SITE = 'https://typingease.site';

const scope = {};
new Function('window', fs.readFileSync(path.join(ROOT, 'data', 'languages.js'), 'utf8'))(scope);
const LANGUAGES = scope.TypingEaseLanguages.list;

const fileFor = route => path.join(ROOT, ...route.split('/').filter(Boolean), 'index.html');
const rel = file => path.relative(ROOT, file).split(path.sep).join('/');

let drift = 0, written = 0;
function emit(file, text) {
  const current = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
  if (current === text) return;
  if (CHECK) { drift += 1; console.error(`LỆCH  ${rel(file)}`); return; }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text);
  written += 1;
}

function replaceOnce(text, from, to, where) {
  const count = text.split(from).length - 1;
  if (count < 1) throw new Error(`${where}: không thấy ${JSON.stringify(from)} trong trang gốc`);
  return text.split(from).join(to);
}

function playerPage(entry, base, family) {
  const source = fs.readFileSync(fileFor(base.href), 'utf8').replace(/\r\n/g, '\n');
  const where = `${family.id} (từ ${rel(fileFor(base.href))})`;
  let html = source;
  // Thẻ <html> có thể mang thêm dir="rtl" (Ả Rập…) hay mã vùng (zh-Hans): chỉ chen data-course vào.
  const open = /<html lang="[^"]+"[^>]*>/.exec(html);
  if (!open) throw new Error(`${where}: không thấy thẻ <html lang>`);
  html = html.replace(open[0], open[0].replace(/\s*data-course="[^"]*"/, '').replace(/>$/, ` data-course="${family.id}">`));
  html = replaceOnce(html, `<link rel="canonical" href="${SITE}${base.href}" />`,
    `<link rel="canonical" href="${SITE}${family.href}" />`, where);
  html = replaceOnce(html, `href="${base.roadmap}" id="pt-back"`, `href="${family.roadmap}" id="pt-back"`, where);
  html = replaceOnce(html, `<script src="/data/curriculum.${base.id}.js"></script>`,
    `<script src="/data/curriculum.${family.id}.js"></script>`, where);
  // Dấu vết: ai mở file này để sửa phải biết nó bị ghi đè ở lần chạy sau.
  html = html.replace('<head>\n', `<head>\n    <!-- SINH TỰ ĐỘNG bằng scripts/build-family-pages.js từ ${rel(fileFor(base.href))}. Sửa trang gốc rồi chạy lại. -->\n`);
  return html;
}

const roadmaps = [];
for (const entry of LANGUAGES) {
  const [base, ...others] = entry.courses || [];
  for (const family of others) {
    emit(fileFor(family.href), playerPage(entry, base, family));

    // Lộ trình: generate.mjs tự ghi file, nên ở chế độ --check thì so với kết quả ở thư mục tạm.
    const out = fileFor(family.roadmap);
    const before = fs.existsSync(out) ? fs.readFileSync(out, 'utf8') : null;
    const run = spawnSync(process.execPath, [path.join(ROOT, 'bai-hoc', 'generate.mjs'), '--course', family.id],
      { cwd: ROOT, encoding: 'utf8' });
    if (run.status !== 0) throw new Error(`generate.mjs --course ${family.id}: ${run.stderr}`);
    const after = fs.readFileSync(out, 'utf8');
    if (before !== after) {
      if (CHECK) {
        drift += 1;
        console.error(`LỆCH  ${rel(out)}`);
        if (before === null) fs.unlinkSync(out); else fs.writeFileSync(out, before);
      } else written += 1;
    }
    roadmaps.push({ after: `${SITE}${base.roadmap}`, loc: `${SITE}${family.roadmap}` });
  }
}

/* ---------- số bài trong data/languages.js ---------- */
// Từ khi có unit "mọi phím còn lại", số bài KHÁC NHAU theo khoá (BÉPO 32, AZERTY 33, Ý 36…). Trang
// đầu không nạp 18 chỉ mục chỉ để đếm, nên số bài được ghi vào languages.js — và ghi bằng script,
// đọc thẳng từ chỉ mục, để nó không bao giờ là một con số ai đó gõ tay rồi quên sửa.
const LANGUAGES_FILE = path.join(ROOT, 'data', 'languages.js');
let catalogue = fs.readFileSync(LANGUAGES_FILE, 'utf8');
for (const entry of LANGUAGES) {
  (entry.courses || []).forEach((family, index) => {
    const file = path.join(ROOT, 'data', `curriculum.${family.id}.js`);
    if (!fs.existsSync(file)) return;
    const holder = {};
    new Function('window', fs.readFileSync(file, 'utf8'))(holder);
    const curriculum = holder.TypingEaseCurriculum;
    const lessons = curriculum.sequence.length;
    const units = curriculum.units.length;
    const pattern = new RegExp(String.raw`(\{ id: '${family.id}', )(lessons: \d+, units: \d+, )?`);
    if (!pattern.test(catalogue)) throw new Error(`data/languages.js: không thấy dòng khoá ${family.id}`);
    catalogue = catalogue.replace(pattern, `$1lessons: ${lessons}, units: ${units}, `);
    if (index === 0) {
      // `course` của ngôn ngữ = khoá mặc định của nó.
      const block = new RegExp(String.raw`(code: '${entry.code}',[\s\S]*?course: \{ status: 'ready', [^}]*?lessons: )\d+(, units: )\d+`);
      catalogue = catalogue.replace(block, `$1${lessons}$2${units}`);
    }
  });
}
emit(LANGUAGES_FILE, catalogue);

/* ---------- sitemap ---------- */
const SITEMAP = path.join(ROOT, 'sitemap.xml');
let sitemap = fs.readFileSync(SITEMAP, 'utf8');
const line = loc => `  <url><loc>${loc}</loc></url>`;
// Dòng của một URL, có hoặc không có <lastmod> (scripts/build-seo-head.mjs điền ngày sau).
const lineOf = loc => new RegExp(String.raw`  <url><loc>${loc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</loc>(?:<lastmod>[^<]*</lastmod>)?</url>\n`);
// Chèn theo thứ tự ngược để các họ của cùng một ngôn ngữ ra đúng thứ tự khai trong languages.js.
for (const item of [...roadmaps].reverse()) {
  if (lineOf(item.loc).test(sitemap)) continue;
  const anchor = lineOf(item.after).exec(sitemap);
  if (!anchor) throw new Error(`sitemap.xml không có ${item.after} để chèn ${item.loc} sau nó`);
  sitemap = sitemap.replace(anchor[0], `${anchor[0]}${line(item.loc)}\n`);
}
emit(SITEMAP, sitemap);

if (CHECK) {
  console.log(drift ? `\n${drift} file lệch — chạy lại script` : `${roadmaps.length} họ, mọi trang khớp`);
  process.exit(drift ? 1 : 0);
}
console.log(`${roadmaps.length} họ bàn phím · ${written} file đã ghi`);

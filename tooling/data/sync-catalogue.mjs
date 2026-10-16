#!/usr/bin/env node
/*
 * tooling/data/sync-catalogue.mjs — đồng bộ danh mục khoá với chỉ mục giáo trình.
 *
 * Chạy:  node tooling/data/sync-catalogue.mjs           ghi content/data/languages.js + public/sitemap.xml
 *        node tooling/data/sync-catalogue.mjs --check   không ghi, báo file nào lệch
 *
 * Hai việc, đều là DỮ LIỆU (trang của các họ do Eleventy dựng: tooling/pages/roadmaps.mjs và
 * tooling/pages/families.mjs):
 *   - số bài / số unit của mỗi khoá trong languages.js, đọc thẳng từ content/data/curriculum.<mã>.js;
 *   - SITEMAP nhận trang lộ trình của mọi họ (player là noindex, như ở họ mặc định). Script chỉ CHÈN
 *     dòng còn thiếu, ngay sau dòng lộ trình của họ mặc định; không đụng tới dòng nào khác.
 * Chạy lại sau khi thêm một họ vào `courses` hay sau khi chỉ mục của một khoá đổi số bài.
 */
import fs from 'node:fs';
import path from 'node:path';
import paths from '../lib/paths.cjs';

const CHECK = process.argv.includes('--check');
const SITE = 'https://typingease.site';

const LANGUAGES_FILE = paths.dataFile('languages.js');
const scope = {};
new Function('window', fs.readFileSync(LANGUAGES_FILE, 'utf8'))(scope);
const LANGUAGES = scope.TypingEaseLanguages.list;

const rel = file => path.relative(paths.ROOT, file).split(path.sep).join('/');

let drift = 0, written = 0;
function emit(file, text) {
  const current = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
  if (current === text) return;
  if (CHECK) { drift += 1; console.error(`LỆCH  ${rel(file)}`); return; }
  fs.writeFileSync(file, text);
  written += 1;
}

/* ---------- số bài trong languages.js ---------- */
// Từ khi có unit "mọi phím còn lại", số bài KHÁC NHAU theo khoá (BÉPO 32, AZERTY 33, Ý 36…). Trang
// đầu không nạp 18 chỉ mục chỉ để đếm, nên số bài được ghi vào languages.js — và ghi bằng script,
// đọc thẳng từ chỉ mục, để nó không bao giờ là một con số ai đó gõ tay rồi quên sửa.
let catalogue = fs.readFileSync(LANGUAGES_FILE, 'utf8');
for (const entry of LANGUAGES) {
  (entry.courses || []).forEach((family, index) => {
    const file = paths.dataFile(`curriculum.${family.id}.js`);
    if (!fs.existsSync(file)) return;
    const holder = {};
    new Function('window', fs.readFileSync(file, 'utf8'))(holder);
    const curriculum = holder.TypingEaseCurriculum;
    const lessons = curriculum.sequence.length;
    const units = curriculum.units.length;
    const pattern = new RegExp(String.raw`(\{ id: '${family.id}', )(lessons: \d+, units: \d+, )?`);
    if (!pattern.test(catalogue)) throw new Error(`content/data/languages.js: không thấy dòng khoá ${family.id}`);
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
const roadmaps = [];
for (const entry of LANGUAGES) {
  const [base, ...others] = entry.courses || [];
  for (const family of others) roadmaps.push({ after: `${SITE}${base.roadmap}`, loc: `${SITE}${family.roadmap}` });
}
const SITEMAP = path.join(paths.PUBLIC, 'sitemap.xml');
let sitemap = fs.readFileSync(SITEMAP, 'utf8');
const line = loc => `  <url><loc>${loc}</loc></url>`;
// Dòng của một URL, có hoặc không có <lastmod> (điền ngày ở bước khác).
const lineOf = loc => new RegExp(String.raw`  <url><loc>${loc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</loc>(?:<lastmod>[^<]*</lastmod>)?</url>\n`);
// Chèn theo thứ tự ngược để các họ của cùng một ngôn ngữ ra đúng thứ tự khai trong languages.js.
for (const item of [...roadmaps].reverse()) {
  if (lineOf(item.loc).test(sitemap)) continue;
  const anchor = lineOf(item.after).exec(sitemap);
  if (!anchor) throw new Error(`public/sitemap.xml không có ${item.after} để chèn ${item.loc} sau nó`);
  sitemap = sitemap.replace(anchor[0], `${anchor[0]}${line(item.loc)}\n`);
}
emit(SITEMAP, sitemap);

if (CHECK) {
  console.log(drift ? `\n${drift} file lệch — chạy lại script` : `${roadmaps.length} họ, languages.js và sitemap khớp`);
  process.exit(drift ? 1 : 0);
}
console.log(`${roadmaps.length} họ bàn phím · ${written} file đã ghi`);

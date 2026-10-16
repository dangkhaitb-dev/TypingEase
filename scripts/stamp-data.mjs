/* scripts/stamp-data.mjs — gắn mã băm nội dung vào URL dữ liệu khoá học (cách của typekute).
 *
 * Chạy (từ thư mục gốc project) sau MỌI lần đổi data/lessons/ hoặc data/curriculum.*.js:
 *   node scripts/stamp-data.mjs           → ghi
 *   node scripts/stamp-data.mjs --check   → chỉ kiểm, thoát 1 nếu có gì cũ
 *
 * Hai tầng, con trước cha sau — để mã băm của cha "dính" theo mã băm của con:
 *   1. Mỗi bài `data/lessons/<course>/<id>.json` → `?v=<16 hex đầu của sha256(bytes)>`, ghi vào
 *      khối `lessonUrls` ở cuối `data/curriculum.<course>.js`.
 *   2. Mỗi `data/curriculum.<course>.js` (đã có khối trên) → `?v=<hash>` trên mọi thẻ
 *      <script src=".../data/curriculum.<course>.js"> trong các trang HTML.
 *
 * Vì URL đổi khi và chỉ khi nội dung đổi, trình duyệt được phép giữ bản đã tải VĨNH VIỄN:
 * data-cache.js lưu bài vào Cache API (`typingease-data-v1`) sau khi kiểm SHA-256 khớp `?v=`,
 * và sw.js phục vụ chỉ mục đã băm theo kiểu cache-first. HTML vẫn tải lại mỗi lần (network-first)
 * nên một lần deploy mới được thấy ngay ở lần điều hướng sau.
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');
const hash16 = bytes => crypto.createHash('sha256').update(bytes).digest('hex').slice(0, 16);

const BEGIN = '/* <auto:lesson-urls> — SINH TỰ ĐỘNG bởi scripts/stamp-data.mjs, ĐỪNG SỬA TAY */';
const END = '/* </auto:lesson-urls> */';
const stale = [];

function update(file, next) {
  const before = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
  if (before === next) return;
  stale.push(path.relative(ROOT, file));
  if (!CHECK) fs.writeFileSync(file, next);
}

/* ---------- 1. bài học → khối lessonUrls ---------- */
const dataDir = path.join(ROOT, 'data');
const curricula = fs.readdirSync(dataDir)
  .map(name => /^curriculum\.([a-z0-9-]+)\.js$/.exec(name)?.[1])
  .filter(Boolean)
  .sort();

const rootHashes = {};
for (const code of curricula) {
  const file = path.join(dataDir, `curriculum.${code}.js`);
  let source = fs.readFileSync(file, 'utf8');
  const at = source.indexOf(BEGIN);
  if (at >= 0) source = source.slice(0, at).replace(/\s*$/, '\n');

  const lessonDir = path.join(dataDir, 'lessons', code);
  const urls = {};
  if (fs.existsSync(lessonDir)) {
    for (const name of fs.readdirSync(lessonDir).filter(name => name.endsWith('.json')).sort()) {
      const id = name.slice(0, -5);
      urls[id] = `/data/lessons/${code}/${name}?v=${hash16(fs.readFileSync(path.join(lessonDir, name)))}`;
    }
  }
  const block = `${BEGIN}\nwindow.TypingEaseCurriculum.lessonUrls = {\n`
    + Object.entries(urls).map(([id, url]) => `  ${JSON.stringify(id)}: ${JSON.stringify(url)}`).join(',\n')
    + `\n};\n${END}\n`;
  const next = `${source}\n${block}`;
  update(file, next);
  rootHashes[code] = hash16(Buffer.from(next, 'utf8'));
}

/* ---------- 2. chỉ mục → thẻ <script> trong HTML ---------- */
const SKIP = new Set(['.git', 'node_modules', 'vendor', 'scripts', '.claude']);
function* htmlFiles(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(full);
    else if (entry.name.endsWith('.html')) yield full;
  }
}
const SCRIPT_SRC = /(src=["'])((?:\.\.\/)*\/?data\/curriculum\.([a-z0-9-]+)\.js)(?:\?v=[a-f0-9]*)?(["'])/g;
let pages = 0;
for (const file of htmlFiles(ROOT)) {
  const before = fs.readFileSync(file, 'utf8');
  const next = before.replace(SCRIPT_SRC, (all, open, src, code, close) =>
    (rootHashes[code] ? `${open}${src}?v=${rootHashes[code]}${close}` : all));
  if (next !== before) pages += 1;
  update(file, next);
}

if (CHECK) {
  if (stale.length) {
    console.error(`Dữ liệu chưa được băm lại (${stale.length} file), chạy: node scripts/stamp-data.mjs`);
    stale.slice(0, 20).forEach(file => console.error(`  ${file}`));
    process.exit(1);
  }
  console.log(`OK — ${curricula.length} chỉ mục, mã băm khớp.`);
} else {
  console.log(`${curricula.length} chỉ mục, ${pages} trang HTML cập nhật, ${stale.length} file ghi.`);
}

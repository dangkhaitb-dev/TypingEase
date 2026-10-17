/* tooling/data/stamp-data.mjs — gắn mã băm nội dung vào URL dữ liệu khoá học (cách của typekute).
 *
 * Chạy (từ thư mục gốc project) sau MỌI lần đổi content/data/lessons/ hoặc content/data/curriculum.*.js:
 *   node tooling/data/stamp-data.mjs           → ghi
 *   node tooling/data/stamp-data.mjs --check   → chỉ kiểm, thoát 1 nếu có gì cũ
 *
 * Mỗi bài `content/data/lessons/<course>/<id>.json` → `?v=<16 hex đầu của sha256(bytes)>`, ghi vào
 * khối `lessonUrls` ở cuối `content/data/curriculum.<course>.js` (cách tính: tooling/lib/stamp.mjs).
 *
 * Tầng thứ hai — `?v=<hash>` của chỉ mục trên thẻ <script src=".../data/curriculum.<course>.js">
 * trong HTML — KHÔNG còn ghi vào trang: transform `stamp-data` của tooling/build/transforms.mjs
 * gắn nó lúc build cho mọi trang (viết tay lẫn sinh ra).
 *
 * Vì URL đổi khi và chỉ khi nội dung đổi, trình duyệt được phép giữ bản đã tải VĨNH VIỄN:
 * data-cache.js lưu bài vào Cache API (`typingease-data-v1`) sau khi kiểm SHA-256 khớp `?v=`,
 * và sw.js phục vụ chỉ mục đã băm theo kiểu cache-first. HTML vẫn tải lại mỗi lần (network-first)
 * nên một lần deploy mới được thấy ngay ở lần điều hướng sau.
 */
import fs from 'node:fs';
import path from 'node:path';
import paths from '../lib/paths.cjs';
import { curriculumIds, curriculumFile, stampedCurriculum } from '../lib/stamp.mjs';

const CHECK = process.argv.includes('--check');
const stale = [];
const curricula = curriculumIds();
for (const code of curricula) {
  const file = curriculumFile(code);
  const next = stampedCurriculum(code);
  if (fs.readFileSync(file, 'utf8') === next) continue;
  stale.push(path.relative(paths.ROOT, file));
  if (!CHECK) fs.writeFileSync(file, next);
}

if (CHECK) {
  if (stale.length) {
    console.error(`Dữ liệu chưa được băm lại (${stale.length} file), chạy: node tooling/data/stamp-data.mjs`);
    stale.slice(0, 20).forEach(file => console.error(`  ${file}`));
    process.exit(1);
  }
  console.log(`OK — ${curricula.length} chỉ mục, mã băm khớp.`);
} else {
  console.log(`${curricula.length} chỉ mục, ${stale.length} file ghi.`);
}

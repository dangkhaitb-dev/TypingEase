/*
 * tooling/pages/tasters.mjs — trang player của các bài "hàng cơ sở" nếm thử, try/<slug>/index.html.
 *
 * Module trang cho Eleventy (tooling/pages/index.mjs): module chỉ ĐỌC, Eleventy ghi file.
 * `PAGES=tasters npx eleventy` dựng riêng nhóm trang này.
 *
 * VÌ SAO có bài nếm thử: xem tooling/data/build-tasters.mjs, nơi sinh DỮ LIỆU của chúng
 * (content/data/curriculum.<slug>-taster.js + content/data/lessons/<slug>-taster/u1-l01.json).
 * Module này chỉ dựng trang: mỗi bài một bản sao player tiếng Anh viết tay (11ty/site/learn/),
 * noindex như mọi player. Giao diện bằng tiếng Anh (`<html lang="en">`): chưa có bảng chuỗi nào
 * cho các ngôn ngữ này, và nửa tiếng Anh nửa tiếng Việt thì tệ hơn tiếng Anh trọn vẹn.
 *
 * Danh sách bài (`tasterJobs`) dùng chung với tooling/data/build-tasters.mjs, để trang và dữ liệu
 * không bao giờ lệch nhau.
 */
import fs from 'node:fs';
import paths from '../lib/paths.cjs';

export function loadLanguages() {
  const scope = {};
  new Function('window', fs.readFileSync(paths.dataFile('languages.js'), 'utf8'))(scope);
  return scope.TypingEaseLanguages.list;
}

// Hai loại bài nếm thử:
//   - ngôn ngữ CHƯA có khoá: một bài trên bố cục đầu tiên, ở /try/<code>/;
//   - ngôn ngữ ĐÃ có khoá nhưng có bố cục không thuộc khoá nào (tiếng Mã Lai có khoá chữ Latin,
//     còn bố cục Jawi chữ Ả Rập thì không): một bài cho MỖI bố cục lẻ ấy, ở /try/<code>-<id>/.
//     landing.js dẫn bố cục lẻ tới đây — trước đó nó rơi vào khoá của một bàn phím khác.
// Mã khoá của bài là `<slug>-taster`.
export function tasterJobs(languages = loadLanguages()) {
  const jobs = [];
  for (const entry of languages.filter(item => item.course)) {
    if (entry.course.status !== 'ready') {
      jobs.push({ entry, layoutId: entry.layouts[0], slug: entry.code, orphan: false });
      continue;
    }
    const covered = new Set((entry.courses || []).flatMap(family => family.layouts));
    for (const id of entry.layouts) if (!covered.has(id)) jobs.push({ entry, layoutId: id, slug: `${entry.code}-${id}`, orphan: true });
  }
  return jobs.map(job => ({ ...job, code: `${job.slug}-taster` }));
}

// Trang player: bản sao /learn/ với mã khoá, canonical, nút quay về và chỉ mục. Nút quay về
// dẫn tới trang đầu — nơi người học vừa chọn ngôn ngữ này — vì khoá này chưa có trang lộ trình.
export function playerPage(code, slug) {
  let html = fs.readFileSync(paths.sourcePage('/learn/'), 'utf8').replace(/\r\n/g, '\n');
  const swap = (from, to) => {
    if (!html.includes(from)) throw new Error(`11ty/site/learn/index.html không còn "${from}"`);
    html = html.split(from).join(to);
  };
  swap('<html lang="en">', `<html lang="en" data-course="${code}">`);
  swap('<link rel="canonical" href="https://typingease.site/learn/" />', `<link rel="canonical" href="https://typingease.site/try/${slug}/" />`);
  swap('href="/lessons/" id="pt-back">← Roadmap</a>', 'href="/#languages" id="pt-back">← Keyboards</a>');
  // Thẻ chỉ mục của trang gốc có thể mang mã băm (`?v=…`); bản sao trỏ sang chỉ mục của khoá này,
  // CHƯA băm — transform của cả site gắn `?v=` sau.
  const enIndex = /<script src="\/data\/curriculum\.en\.js(?:\?v=[a-f0-9]+)?"><\/script>/;
  if (!enIndex.test(html)) throw new Error('11ty/site/learn/index.html không còn thẻ <script> của data/curriculum.en.js');
  html = html.replace(enIndex, `<script src="/data/curriculum.${code}.js"></script>`);
  // Chữ giữ nguyên như đầu ra cũ (tên script cũ) để trang ra không đổi byte nào.
  html = html.replace('<head>\n', `<head>\n    <!-- SINH TỰ ĐỘNG bằng scripts/build-tasters.js từ en/learn/index.html. Sửa trang gốc rồi chạy lại. -->\n`);
  return html;
}

export default async function pages() {
  return tasterJobs().map(({ code, slug }) => ({ path: paths.pageFile(`/try/${slug}/`), html: playerPage(code, slug) }));
}

// Local review only: node scripts/preview-articles.mjs [port]
// Serves the working tree, with no-store and noindex headers. Does not deploy.
import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.argv[2] || 8765);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.json': 'application/json', '.png': 'image/png', '.ico': 'image/x-icon', '.svg': 'image/svg+xml', '.xml': 'application/xml', '.woff2': 'font/woff2' };
const overview = `<!doctype html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Xem trước ba bài tiếng Anh | TypingEase</title><link rel="stylesheet" href="/tokens.css"><link rel="stylesheet" href="/base.css"><link rel="stylesheet" href="/cach-go-10-ngon/article.css"><link rel="stylesheet" href="/en/guides.css"></head><body><header class="topbar article-header"><a class="brand" href="/_article-preview/">Typing<span>Ease</span></a></header><main class="article-main guide-main"><article><header class="article-hero"><p class="eyebrow">Bản xem trước trên máy</p><h1>Ba bài hướng dẫn tiếng Anh</h1><p class="article-lead">Bản viết lại chuyên sâu, ngày 27/9/2026. Các thay đổi chỉ có trong thư mục làm việc, chưa deploy.</p></header><section><h2>Chọn bài để đọc</h2><ol><li><a href="/en/what-is-wpm/"><strong>What is WPM?</strong></a><p>Cách tính, ví dụ, gross/net WPM, accuracy và cách công cụ TypingEase xử lý lỗi đã sửa.</p></li><li><a href="/en/average-typing-speed/"><strong>Average typing speed</strong></a><p>Nghiên cứu gốc, giới hạn của số trung bình, mốc luyện tập và cách đánh giá tiến bộ.</p></li><li><a href="/en/how-to-type-faster/"><strong>How to type faster</strong></a><p>Chẩn đoán điểm yếu, bài tập cụ thể, phiên luyện 10 phút và kế hoạch hai tuần.</p></li></ol></section><section><h2>Gợi ý khi duyệt</h2><p>Đọc phần mở đầu, thử mục lục, xem bảng trên màn hình điện thoại và kiểm tra các liên kết cuối bài. Mỗi bài có nút in thông qua chức năng Print của trình duyệt nếu bạn muốn lưu PDF.</p><p><a href="/">Mở trang chủ bản local</a></p></section></article></main></body></html>`;

const server = http.createServer(async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405); res.end(); return; }
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (pathname === '/_article-preview/') {
      res.setHeader('Content-Type', types['.html']);
      res.end(req.method === 'HEAD' ? undefined : overview);
      return;
    }
    // Deny hidden files, Windows path separators and drive/stream syntax.
    if (pathname.includes('\\') || pathname.includes(':') || pathname.includes('\0') || pathname.split('/').some(part => part.startsWith('.'))) {
      res.writeHead(403); res.end(); return;
    }
    let file = path.resolve(root, '.' + pathname);
    const relative = path.relative(root, file);
    if (relative.startsWith('..') || path.isAbsolute(relative)) { res.writeHead(403); res.end(); return; }
    if ((await fs.stat(file)).isDirectory()) {
      if (!pathname.endsWith('/')) { res.writeHead(302, { Location: pathname + '/' }); res.end(); return; }
      file = path.join(file, 'index.html');
    }
    let body = await fs.readFile(file);
    if (path.extname(file) === '.html') {
      // Avoid installing the production offline cache into the review origin.
      body = body.toString('utf8').replace(/<script[^>]*src=["'][^"']*sw-register\.js["'][^>]*><\/script>/g, '');
    }
    res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
  }
});
server.on('error', error => { console.error(error.message); process.exitCode = 1; });
server.listen(port, '127.0.0.1', () => console.log('Article preview: http://127.0.0.1:' + port + '/_article-preview/'));

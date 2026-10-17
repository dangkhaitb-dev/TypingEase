/* tooling/pages/en-redirects.mjs — giữ các URL /en/… cũ sau khi tiếng Anh chuyển lên đường dẫn gốc.
 *
 * Module trang cho Eleventy (xem tooling/pages/index.mjs): `pages()` trả `[{ path, html }]`, mỗi URL
 * cũ một trang chuyển hướng (`en/lessons/index.html` → /lessons/), noindex + canonical về URL mới.
 * Không đọc nguồn nào; /en/ (11ty/site/en/index.html) viết tay, không sinh ở đây.
 * Chỉ dựng riêng module này: `PAGES=en-redirects npx eleventy`.
 */
import paths from '../lib/paths.cjs';

const redirects = {
  '/en/lessons/': '/lessons/',
  '/en/learn/': '/learn/',
  '/en/dvorak/': '/dvorak/',
  '/en/dvorak/learn/': '/dvorak/learn/',
  '/en/colemak/': '/colemak/',
  '/en/colemak/learn/': '/colemak/learn/',
  '/en/colemak-dh/': '/colemak-dh/',
  '/en/colemak-dh/learn/': '/colemak-dh/learn/',
  '/en/workman/': '/workman/',
  '/en/workman/learn/': '/workman/learn/',
  '/en/typing-test/': '/typing-test/',
  '/en/typing-games/': '/typing-games/',
  '/en/practice/': '/practice/',
  '/en/progress/': '/progress/',
  '/en/touch-typing/': '/touch-typing/',
  '/en/what-is-wpm/': '/what-is-wpm/',
  '/en/average-typing-speed/': '/average-typing-speed/',
  '/en/how-to-type-faster/': '/how-to-type-faster/'
};
const origin = 'https://typingease.site';
const esc = value => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const page = target => [
  '<!doctype html>', '<html lang="en">', '<head>', '<meta charset="UTF-8">',
  '<meta name="viewport" content="width=device-width, initial-scale=1">',
  '<meta http-equiv="refresh" content="0; url=' + esc(target) + '">',
  '<link rel="canonical" href="' + origin + esc(target) + '">',
  '<meta name="robots" content="noindex, follow">', '<title>This page has moved | TypingEase</title>',
  '<style>body{margin:0;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.75rem;text-align:center;padding:1.5rem;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#15352b;background:#f6faf7}a{color:#157a55;font-weight:700}</style>',
  '</head>', '<body>', '<p>This page has moved to <a href="' + esc(target) + '">' + esc(target) + '</a>.</p>',
  '<script>location.replace(' + JSON.stringify(target) + ');</script>', '</body>', '</html>', ''
].join('\n');
export default async function pages() {
  return Object.entries(redirects).map(([from, target]) => ({ path: paths.pageFile(from), html: page(target) }));
}

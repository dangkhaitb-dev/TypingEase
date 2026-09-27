/* Preserve former /en/ URLs after English moved to root-level routes. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
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
for (const [from, target] of Object.entries(redirects)) {
  const file = path.join(root, ...from.split('/').filter(Boolean), 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(target));
}
console.log('Wrote ' + Object.keys(redirects).length + ' English redirect pages.');

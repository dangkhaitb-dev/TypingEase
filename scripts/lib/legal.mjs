/* scripts/lib/legal.mjs — liên kết Giới thiệu / Điều khoản / Quyền riêng tư ở chân MỌI trang.
 *
 * Trang pháp lý có ở mọi ngôn ngữ có khoá (scripts/build-legal-pages.mjs, chữ ở phap-ly/text/<lang>.mjs);
 * bản TIẾNG ANH là bản gốc có hiệu lực, bản dịch ghi rõ điều đó. Ngôn ngữ chưa có file chữ thì trỏ
 * về bản Anh.
 *
 * Khối nằm giữa `<!-- legal -->` … `<!-- /legal -->`, ngay trước `</footer>`. Máy sinh nào in chân
 * trang thì gọi `legalFooter(lang)`; trang viết tay do scripts/build-seo-head.mjs chèn/cập nhật.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const LEGAL_START = '<!-- legal -->';
export const LEGAL_END = '<!-- /legal -->';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const dir = path.join(root, 'phap-ly', 'text');
export const LEGAL_TEXT = {};
for (const file of fs.existsSync(dir) ? fs.readdirSync(dir).filter(name => name.endsWith('.mjs')).sort() : []) {
  const T = (await import(pathToFileURL(path.join(dir, file)).href)).default;
  LEGAL_TEXT[file.replace(/\.mjs$/, '')] = T;
}
// URL của ba trang cho một ngôn ngữ: /about/ … cho tiếng Anh, /<lang>/about/ … cho ngôn ngữ khác
// (tiếng Việt dùng đường dẫn tiếng Việt, đặt trong file chữ).
export const legalUrls = lang => LEGAL_TEXT[lang]?.urls
  || { about: `/${lang}/about/`, terms: `/${lang}/terms/`, privacy: `/${lang}/privacy/` };
export function legalFooter(lang) {
  // `<html lang>` có thể mang đuôi vùng/hệ chữ: zh-Hans → zh, zh-Hant / zh-TW → zh-tw, pt-BR → pt.
  const raw = String(lang).toLowerCase();
  const code = LEGAL_TEXT[raw] ? raw : /^zh-(tw|hant)/.test(raw) ? 'zh-tw' : raw.split('-')[0];
  const key = LEGAL_TEXT[code] ? code : 'en';
  const T = LEGAL_TEXT[key];
  const urls = legalUrls(key);
  const links = ['about', 'terms', 'privacy'].map(page => [urls[page], T.footer[page]]);
  return `${LEGAL_START}<p class="footer-legal">${links.map(([href, label]) => `<a href="${href}">${label}</a>`).join('<span aria-hidden="true"> · </span>')}</p>${LEGAL_END}`;
}

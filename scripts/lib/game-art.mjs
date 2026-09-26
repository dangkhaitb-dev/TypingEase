/* scripts/lib/game-art.mjs — hình minh hoạ SVG của trang trò chơi (scripts/build-game-pages.mjs).
 *
 * Vẽ tay bằng SVG, in thẳng vào trang: không file ảnh, không thư viện, không chữ bên trong hình — một
 * bộ hình dùng cho mọi ngôn ngữ (chữ giải thích nằm ở HTML, dịch được). Màu lấy từ bảng màu thương
 * hiệu (tokens.css). Mọi hình là trang trí: aria-hidden, focusable="false".
 */
const G = '#157a55', LIME = '#c8f05a', INK = '#15352b', SKY = '#eaf4ff', SOFT = '#f6faf7', LINE = '#d5dde6', GREY = '#9fb0a8';
const svg = (w, h, body, cls = '') => `<svg class="${cls}" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" aria-hidden="true" focusable="false">${body}</svg>`;
const pill = (x, y, w, fill = '#fff', stroke = LINE) => `<rect x="${x}" y="${y}" width="${w}" height="14" rx="4" fill="${fill}" stroke="${stroke}"/><rect x="${x + 5}" y="${y + 5}" width="${w - 10}" height="4" rx="2" fill="${fill === '#fff' ? '#c5d2cb' : INK}" opacity="${fill === '#fff' ? 1 : 0.55}"/>`;
const key = (x, y, w, h, fill = '#fff') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${fill}" stroke="${fill === '#fff' ? LINE : '#a9cf3f'}"/>`;

/* ---------- ảnh thu nhỏ trên thẻ chọn trò (120×72) ---------- */
export const THUMB = {
  rain: svg(120, 72, `
    <rect width="120" height="72" rx="10" fill="${SKY}"/>
    <ellipse cx="22" cy="11" rx="13" ry="6" fill="#fff"/><ellipse cx="32" cy="9" rx="9" ry="6" fill="#fff"/>
    <ellipse cx="92" cy="13" rx="12" ry="5" fill="#fff"/>
    <path d="M28 20v8M78 16v10M58 34v8" stroke="#b7cde6" stroke-width="2" stroke-dasharray="2 3" stroke-linecap="round"/>
    ${pill(14, 26, 30)}${pill(64, 18, 34)}${pill(40, 42, 36, LIME, '#a9cf3f')}
    <rect y="62" width="120" height="10" rx="0" fill="#cfe5d8"/><rect y="60" width="120" height="3" fill="#b6d8c4"/>`, 'game-thumb'),
  race: svg(120, 72, `
    <rect width="120" height="72" rx="10" fill="${SOFT}"/>
    <rect x="8" y="14" width="104" height="18" rx="9" fill="#fff" stroke="${LINE}" stroke-dasharray="3 3"/>
    <rect x="8" y="40" width="104" height="18" rx="9" fill="#fff" stroke="${LINE}" stroke-dasharray="3 3"/>
    ${car(62, 16, G)}${car(38, 42, GREY)}
    <g transform="translate(100 10)"><rect width="3" height="52" fill="${INK}"/><path d="M3 0h12v4H3zM3 8h12v4H3z" fill="${INK}"/><path d="M3 4h12v4H3z" fill="#fff" stroke="${INK}" stroke-width=".5"/></g>`, 'game-thumb'),
  keys: svg(120, 72, `
    <rect width="120" height="72" rx="10" fill="#eef3f7"/>
    ${[0, 1, 2, 3, 4, 5, 6, 7].map(i => key(10 + i * 13, 12, 11, 12)).join('')}
    ${[0, 1, 2, 3, 4, 5, 6, 7].map(i => key(14 + i * 13, 28, 11, 12, i === 3 ? LIME : '#fff')).join('')}
    ${[0, 1, 2, 3, 4, 5, 6].map(i => key(20 + i * 13, 44, 11, 12)).join('')}
    <circle cx="58" cy="34" r="10" fill="none" stroke="${G}" stroke-width="2" opacity=".55"/>
    <circle cx="58" cy="34" r="15" fill="none" stroke="${G}" stroke-width="1.5" opacity=".25"/>
    <rect x="30" y="60" width="60" height="6" rx="3" fill="#fff" stroke="${LINE}"/>`, 'game-thumb')
};

/* ---------- xe đua (Đua với bóng) ---------- */
function car(x, y, color) {
  return `<g transform="translate(${x} ${y})"><path d="M2 9 5 4h10l5 5h4v5H0V9z" fill="${color}"/><rect x="7" y="5" width="7" height="4" rx="1" fill="#fff" opacity=".85"/>`
    + `<circle cx="6" cy="14" r="2.6" fill="${INK}"/><circle cx="18" cy="14" r="2.6" fill="${INK}"/></g>`;
}
export const CAR = color => svg(26, 18, car(1, 0, color), 'race-car');

/* ---------- biểu tượng cho hướng dẫn ba bước (40×40) ---------- */
const icon = body => svg(40, 40, `<rect width="40" height="40" rx="10" fill="${SOFT}"/>${body}`, 'how-icon');
export const HOW = {
  fall: icon(`${pill(8, 7, 24)}<path d="M20 25v8m-4-4 4 4 4-4" stroke="${G}" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),
  type: icon(`${[0, 1, 2].map(i => key(6 + i * 10, 11, 8, 8)).join('')}${[0, 1, 2].map(i => key(9 + i * 10, 21, 8, 8, i === 1 ? LIME : '#fff')).join('')}`),
  space: icon(`<rect x="6" y="16" width="28" height="9" rx="3" fill="${LIME}" stroke="#a9cf3f"/><path d="M13 30l3-3 3 3M24 10l1.5 3 3 .5-2.2 2 .6 3-2.9-1.5-2.9 1.5.6-3-2.2-2 3-.5z" fill="${G}" stroke="${G}" stroke-width="1" stroke-linejoin="round"/>`),
  hearts: icon(`<path d="M13 15c-2-3-7-1-5 3l5 5 5-5c2-4-3-6-5-3zM27 15c-2-3-7-1-5 3l5 5 5-5c2-4-3-6-5-3z" fill="#d9485f"/><rect x="8" y="28" width="24" height="4" rx="2" fill="#cfe5d8"/>`),
  pace: icon(`<rect x="5" y="12" width="30" height="7" rx="3.5" fill="#fff" stroke="${LINE}"/><rect x="5" y="23" width="30" height="7" rx="3.5" fill="#fff" stroke="${LINE}"/><circle cx="24" cy="15.5" r="3" fill="${G}"/><circle cx="15" cy="26.5" r="3" fill="${GREY}"/>`),
  text: icon(`${[9, 15, 21, 27].map((y, i) => `<rect x="7" y="${y}" width="${i === 3 ? 16 : 26}" height="3" rx="1.5" fill="${i === 0 ? G : '#c5d2cb'}"/>`).join('')}`),
  flag: icon(`<rect x="12" y="7" width="2.5" height="26" fill="${INK}"/><path d="M14.5 8h14v4h-14zM14.5 16h14v4h-14z" fill="${INK}"/><path d="M14.5 12h14v4h-14z" fill="#fff" stroke="${INK}" stroke-width=".6"/>`),
  lit: icon(`${key(8, 10, 10, 10)}${key(22, 10, 10, 10, LIME)}${key(8, 23, 10, 10)}${key(22, 23, 10, 10)}<circle cx="27" cy="15" r="8" fill="none" stroke="${G}" stroke-width="1.5" opacity=".5"/>`),
  eyes: icon(`<ellipse cx="14" cy="20" rx="6" ry="4.5" fill="#fff" stroke="${INK}" stroke-width="1.6"/><ellipse cx="26" cy="20" rx="6" ry="4.5" fill="#fff" stroke="${INK}" stroke-width="1.6"/><circle cx="14" cy="18.5" r="2" fill="${INK}"/><circle cx="26" cy="18.5" r="2" fill="${INK}"/><path d="M8 30h24" stroke="${GREY}" stroke-width="2" stroke-dasharray="2 3"/>`),
  clock: icon(`<circle cx="20" cy="21" r="11" fill="#fff" stroke="${G}" stroke-width="2"/><path d="M20 14v7l5 3" stroke="${INK}" stroke-width="2" fill="none" stroke-linecap="round"/><rect x="17" y="6" width="6" height="3" rx="1.5" fill="${G}"/>`)
};
// Ba bước của mỗi trò, theo thứ tự chữ `how.<mode>` trong tro-choi/text/<lang>.mjs.
export const STEPS = { rain: ['fall', 'type', 'hearts'], race: ['pace', 'text', 'flag'], keys: ['lit', 'eyes', 'clock'] };

/* ---------- trang trí sân Mưa chữ: mây trên trời, cỏ dưới đất ---------- */
export const RAIN_SCENE = `<svg class="rain-scene" viewBox="0 0 600 360" preserveAspectRatio="none" aria-hidden="true" focusable="false">
  <g fill="#fff" opacity=".9"><ellipse cx="80" cy="34" rx="46" ry="16"/><ellipse cx="116" cy="28" rx="30" ry="15"/><ellipse cx="430" cy="42" rx="40" ry="13"/><ellipse cx="462" cy="36" rx="26" ry="13"/><ellipse cx="270" cy="22" rx="30" ry="10"/></g>
  <path d="M0 346 C60 336 120 350 180 342 S300 334 360 344 S480 352 600 340 V360 H0Z" fill="#b6d8c4"/>
</svg>`;

/* tooling/lib/game-art.mjs — hình minh hoạ SVG của trang trò chơi (tooling/pages/games.mjs).
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
    <rect width="120" height="72" rx="10" fill="#1c3448"/>
    <circle cx="97" cy="16" r="8" fill="#f5edbb"/>
    <g fill="#d6e9bb"><circle cx="17" cy="12" r="1"/><circle cx="56" cy="8" r="1"/><circle cx="78" cy="26" r="1"/></g>
    <path d="M0 58Q25 32 51 57Q84 38 120 52V72H0Z" fill="#315c58"/>
    ${pill(14, 22, 30, '#d4eadd', '#a7cfbd')}${pill(58, 35, 34, '#d9eef1', '#afcfd4')}
    <path d="M15 72v-10m-8-1q8-17 16 0Z" fill="#e4a4ac" stroke="#e4a4ac" stroke-width="2"/>
    <g fill="#d9f3a0"><circle cx="38" cy="60" r="1.5"/><circle cx="102" cy="57" r="1.5"/><circle cx="65" cy="65" r="1.5"/></g>`, 'game-thumb'),
  race: svg(120, 72, `
    <rect width="120" height="72" rx="10" fill="#f7d9b6"/><circle cx="91" cy="18" r="11" fill="#fff4d4"/>
    <path d="m0 37 24-20 30 22 25-13 41 15v31H0Z" fill="#b2c7ac"/>
    <path d="M0 45h120v27H0Z" fill="#566773"/><path d="M0 59h120" stroke="#e7dfbe" stroke-dasharray="7 5"/>
    ${car(68, 32, '#d47b4e')}${car(24, 51, '#8199bc')}
    <path d="M110 45v27" stroke="#fff1cf" stroke-width="4" stroke-dasharray="3 3"/>`, 'game-thumb'),
  keys: svg(120, 72, `
    <rect width="120" height="72" rx="10" fill="#2b484c"/>
    <circle cx="22" cy="22" r="11" fill="#a6cbd1"/><ellipse cx="22" cy="22" rx="17" ry="4" transform="rotate(-25 22 22)" fill="none" stroke="#e8cda7" stroke-width="3"/>
    <g fill="#dbf3f7"><circle cx="87" cy="12" r="1"/><circle cx="103" cy="34" r="1.5"/><circle cx="24" cy="57" r="1"/></g>
    <circle cx="65" cy="39" r="24" fill="none" stroke="#96c4cb" stroke-dasharray="3 4"/>
    <rect x="50" y="23" width="30" height="32" rx="8" fill="#d8eff2"/><path d="M59 34v9m12-9v9" stroke="#6b989f" stroke-width="4" stroke-linecap="round"/>`, 'game-thumb')
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
// Ba bước của mỗi trò, theo thứ tự chữ `how.<mode>` trong content/games/<lang>.mjs.
export const STEPS = { rain: ['fall', 'type', 'hearts'], race: ['pace', 'text', 'flag'], keys: ['lit', 'eyes', 'clock'] };

/* ---------- trang trí sân Mưa chữ: mây trên trời, cỏ dưới đất ---------- */
const mushroom = (x, y, scale, color) => `<g transform="translate(${x} ${y}) scale(${scale})"><ellipse cy="5" rx="30" ry="7" fill="#071e2c" opacity=".5"/><path d="M-7 0 -5-32H5L9 0Q0 5-7 0" fill="#d9eace"/><path d="M-30-28Q-26-67 0-66T30-28Q0-14-30-28" fill="${color}"/><ellipse cx="-11" cy="-43" rx="6" ry="4" fill="#fff4d5"/><ellipse cx="10" cy="-50" rx="5" ry="6" fill="#fff4d5"/><ellipse cx="17" cy="-32" rx="4" ry="3" fill="#fff4d5"/></g>`;
export const RAIN_SPRITE = svg(120, 120, `<ellipse cx="60" cy="105" rx="32" ry="5" fill="#061d25" opacity=".3"/><path d="M60 27Q39 5 25 19Q27 41 59 39Q89 39 94 14Q72 9 60 27" fill="#bceca0"/><path d="M60 33V19" stroke="#468f70" stroke-width="4"/><path d="M27 70Q24 34 60 34Q96 34 93 70L86 96Q60 110 34 96Z" fill="#d8f4cb"/><ellipse cx="43" cy="70" rx="4" ry="6" fill="#183d3c"/><ellipse cx="77" cy="70" rx="4" ry="6" fill="#183d3c"/><path d="M54 79Q60 85 66 79" stroke="#183d3c" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="34" cy="80" rx="7" ry="4" fill="#f3b5ad"/><ellipse cx="86" cy="80" rx="7" ry="4" fill="#f3b5ad"/><path d="M25 73 13 63M95 73 107 62" stroke="#d8f4cb" stroke-width="8" stroke-linecap="round"/>`, 'rain-sprite');
export const RAIN_SCENE = `<svg class="rain-scene" viewBox="0 0 1000 520" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
  <defs>
    <linearGradient id="rain-sky" x2="0" y2="1"><stop stop-color="#111c3b"/><stop offset=".65" stop-color="#254851"/><stop offset="1" stop-color="#397365"/></linearGradient>
    <radialGradient id="rain-moon-glow"><stop stop-color="#e1edb0" stop-opacity=".2"/><stop offset="1" stop-color="#d8edaa" stop-opacity="0"/></radialGradient>
    <linearGradient id="rain-hill" x2="0" y2="1"><stop stop-color="#284e56"/><stop offset="1" stop-color="#102e39"/></linearGradient>
  </defs>
  <rect width="1000" height="520" fill="url(#rain-sky)"/>
  <circle cx="790" cy="100" r="160" fill="url(#rain-moon-glow)"/>
  <g class="rain-moon"><circle cx="790" cy="100" r="35" fill="#f5edbb"/><circle cx="779" cy="91" r="5" fill="#dfdda9"/><circle cx="802" cy="112" r="8" fill="#dfdda9"/></g>
  ${Array.from({length:32}, (_, i) => `<circle class="rain-star" cx="${(i * 173 + 41) % 980}" cy="${(i * 71 + 20) % 310}" r="${i % 3 === 0 ? 2 : 1}" fill="#e8f1d1" style="animation-delay:-${i % 7}s"/>`).join('')}
  <g class="rain-cloud" fill="#a7c5c9" opacity=".12"><path d="M70 114Q44 95 73 82Q78 53 109 68Q133 46 154 78Q184 78 178 104Z"/><path d="M370 67Q342 52 367 40Q376 13 400 34Q422 14 438 40Q472 37 469 62Z"/><path d="M820 175Q793 158 818 145Q828 120 854 137Q881 116 902 150Q930 149 938 169Z"/></g>
  <path d="M0 340Q130 190 260 310Q440 170 590 310Q780 220 1000 310V520H0Z" fill="#31535d" opacity=".6"/>
  <path d="M0 370Q160 290 300 380Q470 280 650 380Q810 295 1000 350V520H0Z" fill="url(#rain-hill)"/>
  <g fill="#143b40"><path d="M0 140Q65 130 85 247L108 470H0Z"/><path d="M1000 125Q947 145 937 260L910 500H1000Z"/></g>
  <g fill="none" stroke="#367166" stroke-width="3" opacity=".65"><path d="M35 470Q81 345 23 264M62 410 26 376M61 382 88 350M963 470Q917 345 975 264M939 410 974 376M939 382 912 350"/></g>
  <path d="M0 477Q150 432 300 477T630 476T1000 465V520H0Z" fill="#1c4844"/>
  ${mushroom(112,488,1.1,'#d48d9d')}${mushroom(164,500,.6,'#efb77c')}${mushroom(882,489,1.3,'#9ecfd6')}${mushroom(929,503,.65,'#9cd0b4')}${mushroom(735,501,.45,'#efb77c')}
  <g fill="#519078">${[20,65,220,260,340,680,780,960].map(x => `<path d="M${x} 520q-24-50-30-38q0 22 30 38q-3-65 9-56q12 26-9 56q40-40 42-24q-8 20-42 24"/>`).join('')}</g>
  <g fill="#d4ee9c">${Array.from({length:14},(_,i)=>`<circle class="rain-firefly" cx="${(i*137+33)%980}" cy="${360+(i*43)%140}" r="2.4" style="animation-delay:-${i*.7}s"/>`).join('')}</g>
</svg>`;

/* Coastal rally and orbital keyboard station. */
export const RACE_SCENE = svg(1000, 280, `
  <defs><linearGradient id="rally-sky" x2="0" y2="1"><stop stop-color="#f7cfb2"/><stop offset="1" stop-color="#fff1cd"/></linearGradient></defs>
  <rect width="1000" height="280" fill="url(#rally-sky)"/>
  <circle cx="760" cy="93" r="54" fill="#fff4ca"/>
  <g class="rally-clouds" fill="#fff8e4" opacity=".7"><path d="M75 69q-20-15 8-24q8-28 34-9q25-21 42 9q28 0 29 24Z"/><path d="M420 44q-18-14 6-20q14-24 35-8q20-12 31 9q28-4 30 19Z"/></g>
  <path d="M0 150 155 57 302 166 420 99 560 174 695 136 1000 180V280H0Z" fill="#d4a6a0"/>
  <path d="m95 94 60-37 57 43-34-11-24 8-16-15Z" fill="#f5d6bd"/>
  <path d="M0 190Q180 142 360 187T700 180T1000 185V280H0Z" fill="#87b8b2"/>
  <path d="M0 224Q200 185 400 218T800 210T1000 221V280H0Z" fill="#a9d2c1"/>
  <g stroke="#dbebcd" stroke-width="3" opacity=".7"><path d="M400 205h55m30 0h80m90 30h95m-620-15h60m20 0h30"/></g>
  <path d="M0 240q100-36 240 40H0Z M1000 227q-100-16-170 53h170Z" fill="#638e70"/>
  ${[48,112,920,967].map((x,i)=>`<g transform="translate(${x} ${i%2?257:241})"><path d="M0 30Q12-15 2-45" stroke="#967456" stroke-width="7" fill="none"/><path d="M2-45q-33-31-49 1q25-9 49-1q-5-40 27-38q-16 16-27 38q29-23 45 5q-20-9-45-5" fill="#3e7765"/></g>`).join('')}
  <g transform="translate(832 174)"><rect x="-3" width="6" height="73" fill="#f4eed4"/><path d="M-15 0h30l-4-12h-22Z" fill="#c96e65"/><rect x="-10" y="3" width="20" height="11" fill="#f4eed4"/><path d="M-14 17h28l7 55h-42Z" fill="#f4eed4"/><path d="M-16 35h32l2 12h-36Z" fill="#c96e65"/></g>
`, 'rally-scene').replace('viewBox=', 'preserveAspectRatio="xMidYMid slice" viewBox=');
export const RALLY_CAR = color => svg(100, 54, `<ellipse cx="50" cy="47" rx="43" ry="5" fill="#0b283b" opacity=".2"/><path d="M8 28 25 23 38 8h29l15 18 11 4v12H6V31Z" fill="${color}"/><path d="m41 12-10 13h43L64 12Z" fill="#d9edf0"/><path d="M51 12v13" stroke="${color}" stroke-width="4"/><rect x="7" y="30" width="10" height="5" rx="2" fill="#ffe8a3"/><rect x="84" y="31" width="9" height="4" rx="1" fill="#fff1b0"/><path d="M21 29h55" stroke="#ffffff" stroke-width="2" opacity=".3"/><g fill="#263b46" stroke="#e0e7d9" stroke-width="3"><circle cx="26" cy="42" r="9"/><circle cx="76" cy="42" r="9"/></g><g fill="#92acb0"><circle cx="26" cy="42" r="3"/><circle cx="76" cy="42" r="3"/></g>`, 'rally-car');
export const SPACE_SCENE = svg(1000, 300, `
  <defs><radialGradient id="orbit-glow"><stop stop-color="#487f88"/><stop offset="1" stop-color="#102a38"/></radialGradient></defs>
  <rect width="1000" height="300" fill="url(#orbit-glow)"/>
  ${Array.from({length:40},(_,i)=>`<circle class="orbit-star" cx="${(i*173+30)%1000}" cy="${(i*73+17)%300}" r="${i%4?1:2}" fill="#ddfaff" style="animation-delay:-${i%6}s"/>`).join('')}
  <g class="orbit-planet"><circle cx="175" cy="112" r="46" fill="#b3d0d5"/><path d="M136 92q38 25 80 7m-86 11q44 26 88 6m-77 24q33 13 64 3" stroke="#8fb5bb" stroke-width="8" fill="none"/><ellipse cx="175" cy="112" rx="77" ry="14" transform="rotate(-24 175 112)" fill="none" stroke="#ecd7ae" stroke-width="10"/></g>
  <g class="orbit-satellite"><g transform="translate(815 92) rotate(22)"><path d="M-48 0H48" stroke="#aebbdc" stroke-width="4"/><rect x="-65" y="-19" width="42" height="38" rx="3" fill="#6a8fbe" stroke="#b2d7e7" stroke-width="3"/><rect x="23" y="-19" width="42" height="38" rx="3" fill="#6a8fbe" stroke="#b2d7e7" stroke-width="3"/><path d="M-44-18v36M44-18v36M-64 0h40M24 0h40" stroke="#b2d7e7"/><rect x="-15" y="-24" width="30" height="48" rx="8" fill="#e8e2e5"/><path d="M0-24v-16m-9 0h18" stroke="#e8e2e5" stroke-width="3"/><circle cy="3" r="6" fill="#a2d4c5"/></g></g>
  <path d="M0 284Q200 243 350 284T700 280T1000 268V300H0Z" fill="#3b5b60"/>
  <g fill="#708e93" opacity=".5"><ellipse cx="120" cy="287" rx="35" ry="7"/><ellipse cx="895" cy="285" rx="50" ry="9"/></g>
`, 'orbit-scene').replace('viewBox=', 'preserveAspectRatio="xMidYMid slice" viewBox=');
export const SPACE_BOT = svg(100, 100, `<path d="M50 19V9" stroke="#a3e5d4" stroke-width="4"/><circle cx="50" cy="8" r="5" fill="#bfe9a6"/><rect x="17" y="21" width="66" height="54" rx="21" fill="#e3f3f6"/><rect x="25" y="31" width="50" height="30" rx="12" fill="#393f64"/><g fill="#bcebd3"><rect x="34" y="39" width="7" height="12" rx="3"/><rect x="59" y="39" width="7" height="12" rx="3"/></g><path d="M34 80h32l7 12H27Z" fill="#a6cacf"/><path d="m14 44-7 13m79-13 7 13" stroke="#a6cacf" stroke-width="7" stroke-linecap="round"/>`, 'space-bot');

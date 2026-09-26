#!/usr/bin/env node
/*
 * scripts/add-iso-key.js — thêm phím thứ 105 (ô `IntlBackslash`, cạnh Shift trái) vào các bố cục
 * mà bàn phím thật của nó là kiểu ISO.
 *
 * Chạy:  node scripts/add-iso-key.js           ghi vào data/keyboards/layouts/*.json + index.json
 *        node scripts/add-iso-key.js --check   không ghi, báo file nào còn thiếu
 *
 * VÌ SAO. Catalog bàn phím port từ typekute (scripts/build-keyboards.mjs) vẽ MỌI bố cục theo khung
 * 104 phím của Mỹ: Shift trái dài, không có phím nào giữa nó và phím chữ đầu hàng dưới. Nhưng bàn
 * phím Pháp, Đức, Tây Ban Nha, Ý, Thuỵ Sĩ, Thổ Nhĩ Kỳ, Anh… bán ngoài đời là kiểu ISO 105 phím:
 * Shift trái ngắn lại, và ô đó in ra `< >` (hay `\ |` ở Anh và Brazil, `ê` ở BÉPO). Người học nhìn
 * màn hình thấy thiếu đúng một phím trên bàn phím thật của mình, và khoá học không dạy được `<`
 * vì phím của nó không tồn tại trong dữ liệu. File nguồn `layouts.json` không còn trong repo, nên
 * sửa thẳng từng file bố cục, bằng bảng dưới — mỗi dòng là ký tự Windows in ra ở ô đó.
 *
 * CHỈ NHÓM BỐ CỤC MỚI (mã ≥ 100, có `hardware`). Nhóm cũ 3–37 không có `hardware` và đã có một ô
 * ở vị trí này theo cách riêng của nó; không khoá học nào dùng chúng.
 *
 * Ngón: út trái (1), đúng như mọi tài liệu gõ mười ngón. Shift trái bớt đi đúng một ô phím
 * (40px + 5px lề của .keyboard-key trong keyboard/keyboard.css) nên cả hàng giữ nguyên bề rộng.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIR = path.join(ROOT, 'data', 'keyboards', 'layouts');
const CHECK = process.argv.includes('--check');

const LT = ['<', '>'];
const ISO = {
  // Anh: ô ISO in ra \ |, còn # ~ nằm cạnh Enter (dữ liệu đã đặt nó ở ô Backslash).
  120: ['\\', '|'], 121: ['\\', '|'], 122: ['\\', '|'],
  // Anh trên Mac: ô ISO là ` ~, còn ô Backquote là § ± (dữ liệu đã đúng như thế).
  128: ['`', '~'],
  // Pháp Canada (bản cũ, không phải CSA): « » ở cạnh Shift trái.
  186: ['«', '»'],
  // BÉPO đặt ê ở đây — một chữ, không phải dấu.
  184: ['ê', 'Ê'], 185: ['ê', 'Ê'],
  // Hà Lan: ô ISO in ] [, còn < > (dữ liệu để ở ô Backslash) là phím cạnh Enter.
  198: [']', '['], 101: [']', '['],
  // Brazil ABNT2: \ | cạnh Shift trái.
  178: ['\\', '|'], 179: ['\\', '|'],
  // Còn lại: < >.
  174: LT, 175: LT, 176: LT, 177: LT,
  181: LT, 182: LT, 183: LT, 187: LT, 193: LT,
  188: LT, 189: LT, 191: LT,
  194: LT, 195: LT, 196: LT,
  200: LT, 204: LT, 205: LT, 206: LT, 210: LT
};
const KEY_WIDTH = 45;

let changed = 0;
const standards = new Map();
for (const [id, [main, shifted]] of Object.entries(ISO)) {
  const file = path.join(DIR, `${id}.json`);
  const layout = JSON.parse(fs.readFileSync(file, 'utf8'));
  standards.set(Number(id), 'iso');
  const row = layout.structure.find(keys => keys.some(key => key.hardware === 'ShiftLeft'));
  if (!row) throw new Error(`${id}: không thấy hàng có ShiftLeft`);
  const already = row.some(key => key.hardware === 'IntlBackslash');
  const everywhere = layout.structure.flat();
  if (!already && everywhere.some(key => key.hardware === 'IntlBackslash')) throw new Error(`${id}: IntlBackslash nằm sai hàng`);
  if (already && layout.geometry?.physicalStandard === 'iso') continue;
  if (!already) {
    const shift = row.find(key => key.hardware === 'ShiftLeft');
    shift.width = String(Number(shift.width || 108) - KEY_WIDTH);
    row.splice(row.indexOf(shift) + 1, 0, { main, shifted, finger: 1, hardware: 'IntlBackslash' });
  }
  layout.geometry = { ...(layout.geometry || {}), physicalStandard: 'iso' };
  changed += 1;
  if (CHECK) { console.error(`THIẾU  ${id} (${layout.name})`); continue; }
  fs.writeFileSync(file, JSON.stringify(layout), 'utf8');
}

// index.json mang `physicalStandard` để hộp Cài đặt biết bố cục nào mặc định là 105 phím mà
// không phải tải từng file bố cục.
const indexFile = path.join(ROOT, 'data', 'keyboards', 'index.json');
const index = JSON.parse(fs.readFileSync(indexFile, 'utf8'));
let indexChanged = 0;
for (const row of index) {
  if (standards.has(Number(row.keyboard_id)) && row.physicalStandard !== 'iso') {
    row.physicalStandard = 'iso';
    indexChanged += 1;
  }
}
if (indexChanged && !CHECK) fs.writeFileSync(indexFile, JSON.stringify(index), 'utf8');

if (CHECK) {
  const drift = changed + indexChanged;
  console.log(drift ? `${drift} chỗ còn thiếu — chạy lại không có --check` : `${Object.keys(ISO).length} bố cục ISO, đủ cả`);
  process.exit(drift ? 1 : 0);
}
console.log(`${changed} bố cục vừa thêm phím 105 · index.json: ${indexChanged} dòng`);

/*
 * keyboard/named-keys.js — một bảng tên duy nhất cho các phím KHÔNG phải ký tự.
 *
 * Bàn phím sáng phím nào (keyboard.js) và bàn tay đặt tư thế nào (hands-pose-map.js) là hai
 * đường phân giải tách rời. Trước đây mỗi bên tự nhận dạng phím đặc biệt theo cách riêng:
 * `resolveKeyTarget` so đúng chuỗi "Enter"/"Backspace"/" ", còn `findLayoutEntry` so NHÃN in trên
 * phím ("Shift ⇧", "Enter ⏎"). Bài học lại truyền tên viết thường — `{"key": "shift"}`,
 * `{"key": "enter"}` — nên cả hai bên cùng trượt: không phím nào sáng và tay đứng im.
 *
 * Bảng này là chỗ duy nhất biết rằng "shift", "Shift ⇧", "⇧ Shift" và mã 16 là cùng một phím.
 * Thêm phím đặc biệt mới thì thêm ở ĐÂY, đừng thêm vào một trong hai bên.
 */

// `sides: true` = phím có mặt ở cả hai bên bàn phím (Shift, Ctrl, Alt, Cmd). Khi bài học gọi tên
// trần ("shift") thì cả hai phím đó đều là đáp án đúng — người học dùng ngón út bên KHÔNG gõ chữ.
const NAMED_KEYS = Object.freeze({
  enter: { code: 13, hardware: ["Enter", "NumpadEnter"] },
  backspace: { code: 8, hardware: ["Backspace"] },
  tab: { code: 9, hardware: ["Tab"] },
  capslock: { code: 20, hardware: ["CapsLock"] },
  space: { code: 32, hardware: ["Space"] },
  shift: { code: 16, hardware: ["ShiftLeft", "ShiftRight"], sides: true },
  control: { code: 17, hardware: ["ControlLeft", "ControlRight"], sides: true },
  alt: { code: 18, hardware: ["AltLeft", "AltRight"], sides: true },
  meta: { code: 157, hardware: ["MetaLeft", "MetaRight"], sides: true }
});

const ALIASES = Object.freeze({
  return: "enter",
  "\n": "enter",
  "⏎": "enter",
  delete: "backspace",
  del: "backspace",
  "⌫": "backspace",
  caps: "capslock",
  ctrl: "control",
  option: "alt",
  altgr: "alt",
  cmd: "meta",
  command: "meta",
  win: "meta",
  super: "meta",
  spacebar: "space"
});

/**
 * Rút tên chuẩn ra khỏi bất cứ thứ gì một layout hoặc một bài học gọi phím đó: tên viết thường
 * ("shift"), nhãn in trên phím ("Caps Lock ⇪", "⇧ Shift"), hoặc một ô `{key, code}` của layout.
 * Trả về "" cho phím ký tự thường — chỗ gọi cứ tiếp tục đường phân giải theo ký tự như cũ.
 */
export function namedKeyOf(value) {
  if (value && typeof value === "object") {
    const byCode = codeName(Number(value.code));
    if (byCode) return byCode;
    return namedKeyOf(value.key);
  }
  const raw = String(value ?? "");
  if (!raw) return "";
  // Ký hiệu trần ("⏎", "⌫") không còn chữ nào sau khi lọc, nên phải tra nguyên văn trước.
  if (ALIASES[raw]) return ALIASES[raw];
  if (raw === " ") return "space";
  // Nhãn phím mang cả chữ lẫn ký hiệu ("Caps Lock ⇪"); chỉ giữ phần chữ cái rồi bỏ khoảng trắng,
  // nên "Caps Lock ⇪" và "capslock" gặp nhau ở cùng một khoá.
  const letters = raw.toLowerCase().replace(/[^a-z]/g, "");
  if (!letters) return "";
  const name = ALIASES[letters] || letters;
  return NAMED_KEYS[name] ? name : "";
}

function codeName(code) {
  if (!Number.isFinite(code) || !code) return "";
  for (const [name, spec] of Object.entries(NAMED_KEYS)) if (spec.code === code) return name;
  return "";
}

/** Phím đó có mặt ở cả hai bên bàn phím không (Shift, Ctrl, Alt, Cmd). */
export function namedKeyHasSides(name) {
  return Boolean(NAMED_KEYS[name]?.sides);
}

/** Danh sách mã `hardware` mà tên này khớp, theo đúng thứ tự trái → phải. */
export function namedKeyHardware(name) {
  return NAMED_KEYS[name]?.hardware || [];
}

export function namedKeyCode(name) {
  return NAMED_KEYS[name]?.code ?? 0;
}

// `hardware` là căn cứ chính vì nó không đổi theo ngôn ngữ; mã phím là đường lui cho những layout
// cũ không ghi `hardware`. Hai tầng tách riêng để một layout có đủ `hardware` không bao giờ nhận
// nhầm một ô chỉ trùng mã.
function collectNamed(name, visit) {
  const spec = NAMED_KEYS[name];
  if (!spec) return [];
  const byHardware = [];
  const byCode = [];
  visit((entry, found) => {
    if (!entry) return;
    if (spec.hardware.includes(entry.hardware)) byHardware.push(found);
    else if (namedKeyOf(entry.main) === name) byCode.push(found);
  });
  return byHardware.length ? byHardware : byCode;
}

/** Mọi ô của layout khớp với tên này, kèm vị trí hàng/cột (dùng để chọn tư thế tay). */
export function findNamedEntries(layout, name) {
  return collectNamed(name, (take) => {
    for (const [row, entries] of (layout?.structure || []).entries()) {
      for (const [index, entry] of entries.entries()) take(entry, { entry, row, column: index + 1 });
    }
  });
}

/** Cùng việc đó trên danh sách ô đã làm phẳng, trả về chỉ số (dùng để tô sáng bàn phím). */
export function findNamedIndexes(entries, name) {
  return collectNamed(name, (take) => {
    for (const [index, entry] of (entries || []).entries()) take(entry, index);
  });
}

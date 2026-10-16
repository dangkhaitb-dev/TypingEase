// keyboard/keyboard.js — bàn phím trên màn hình, đồng bộ từ typekute
// (11ty/client/player/keyboard.js, bản 2026-10). Thay đổi so với bản gốc — giữ cho TypingEase:
//   - phím đặc biệt theo TÊN (named-keys.js): bài học gọi "shift"/"enter" viết thường;
//   - nút Cài đặt: bánh răng SVG nội tuyến, nhãn từ TypingEaseUI (không sprite /dist/);
//   - tuỳ chọn `keyboardShape` (auto | ansi | iso) qua shapedLayout();
//   - `data-finger` trên mọi phím (landing.css tô màu theo nó);
//   - i18n và static-assets của typekute thay bằng hai shim nhỏ cùng thư mục.
import { keyboardGeometry } from "./keyboard-geometry.js";
import { findNamedIndexes, namedKeyCode, namedKeyOf } from "./named-keys.js";
import { t } from "./ui-strings.js";
import { scheduleHandsLoading } from "./static-assets.js";
const FALLBACK_LAYOUT_ID = 1;

const FINGER_NAMES = Object.freeze({
  1: "left-pinky", 2: "left-ring", 3: "left-middle", 4: "left-index", 5: "left-thumb",
  6: "thumb", 7: "right-index", 8: "right-middle", 9: "right-ring", 10: "right-pinky"
});

// Source marks the trigger of every dead sequence with `key-<code>-dead`, where the
// code is the character code of the diacritic the sequence produces.
const DEAD_CHARACTERS = Object.freeze({
  acute: "´", apostrophe: "'", circumflex: "^", grave: "`", quote: '"', tilde: "~", umlaut: "¨",
  macron: "¯", breve: "˘", abovedot: "˙", abovering: "˚", doubleacute: "˝", caron: "ˇ",
  cedilla: "¸", ogonek: "˛", belowdot: "̣", hook: "̉", horn: "̛", stroke: "/",
  abovecomma: "̓", abovereversedcomma: "̔", doublegrave: "̏", invertedbreve: "̑", belowcomma: "̦"
});
// The combining marks the same diacritics leave behind after NFD decomposition.
const COMBINING_DEAD = Object.freeze({
  "́": "acute", "̀": "grave", "̂": "circumflex", "̃": "tilde", "̈": "umlaut",
  "̄": "macron", "̆": "breve", "̇": "abovedot", "̊": "abovering", "̋": "doubleacute",
  "̌": "caron", "̧": "cedilla", "̨": "ogonek", "̣": "belowdot", "̉": "hook", "̛": "horn",
  "̓": "abovecomma", "̔": "abovereversedcomma", "̏": "doublegrave", "̑": "invertedbreve", "̦": "belowcomma"
});
// Source keeps the error highlight on the pressed key for 250 ms (`highlightErrorKey`).
export const ERROR_HIGHLIGHT_MS = 250;

function element(name, className, text) {
  const node = document.createElement(name);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function keyValue(value) {
  if (!value || typeof value !== "object") return String(value || "");
  // A few XKB layouts model a dead key only by its semantic name (`{ dead:
  // "tilde" }`) rather than repeating the printed glyph in `key`.  It is still
  // a real legend and must not become an empty keycap.
  return String(value.key || (value.dead ? DEAD_CHARACTERS[value.dead] : "") || "");
}

export function keyId(value) {
  const source = String(value || "");
  if (source === " " || source === "Spacebar") return " ";
  if (source === "Enter" || source === "\u23ce") return "Enter";
  return source.length === 1 ? source.toLowerCase() : source;
}

function keyCode(value) {
  if (value && typeof value === "object" && Number.isFinite(Number(value.code))) return Number(value.code);
  const key = keyValue(value);
  return key.length === 1 ? key.charCodeAt(0) : 0;
}

// Keyboards print the actual symbol on their caps. Combining marks (Thai vowels,
// Devanagari matras, etc.) must therefore stay unmodified: the dotted circle used
// in Unicode documentation is not part of a physical key legend.
function keycapText(text) {
  return text;
}

// Monospace web fonts are fine for Latin legends, but some of them claim a
// combining-mark glyph without supplying the matching Thai/Indic base glyph.
// Use the platform's script-aware font fallback for boards that actually need
// it. This keeps normal Latin keycaps unchanged while allowing Thai vowels, matras,
// Arabic, CJK, and other native-script legends to be drawn as complete glyphs.
const NATIVE_SCRIPT_LEGEND = /[\p{Script=Arabic}\p{Script=Bengali}\p{Script=Bopomofo}\p{Script=Devanagari}\p{Script=Ethiopic}\p{Script=Georgian}\p{Script=Gujarati}\p{Script=Gurmukhi}\p{Script=Hangul}\p{Script=Han}\p{Script=Hebrew}\p{Script=Hiragana}\p{Script=Kannada}\p{Script=Katakana}\p{Script=Khmer}\p{Script=Lao}\p{Script=Malayalam}\p{Script=Myanmar}\p{Script=Oriya}\p{Script=Sinhala}\p{Script=Tamil}\p{Script=Telugu}\p{Script=Thai}\p{Script=Tibetan}]/u;

function usesNativeScriptLegends(layout) {
  return layout?.structure?.some((row) => row?.some((entry) =>
    [entry.main, entry.shifted, entry.alt, entry.shiftalt, ...(entry.keycap?.native || [])]
      .some((legend) => NATIVE_SCRIPT_LEGEND.test(keyValue(legend)))
  ));
}

function displayKey(value, letterCase) {
  const key = keyValue(value);
  return keycapText(/^[a-z]$/.test(key) && letterCase === "uppercase" ? key.toUpperCase() : key);
}

function deadCharacter(value, entry = null) {
  if (!value) return "";
  if (typeof value === "object") return value.dead ? (DEAD_CHARACTERS[value.dead] || keyValue(value)) : "";
  if (entry?.explicitDeadKeys) return "";
  const key = keyValue(value);
  return Object.values(DEAD_CHARACTERS).includes(key) ? key : "";
}

function entryDeadCharacter(entry, targetDiacritic = null) {
  if (!entry || entry.other) return "";
  for (const part of [entry.main, entry.shifted, entry.alt, entry.shiftalt, ...(entry.levels || []).slice(4)]) {
    const dead = deadCharacter(part, entry);
    if (dead && (!targetDiacritic || dead === targetDiacritic)) return dead;
  }
  return "";
}

function isFunctionalEntry(entry) {
  return Boolean(entry.other || entry.modifierRole || (entry.main && typeof entry.main === "object" && Number(entry.main.code) > 0));
}

// A letter key prints one legend, its capital, even though Shift types that capital:
// `shifted` only repeats `main` in the other case (Turkish i/İ and ı/I included).
export function isCasePair(entry) {
  const main = keyValue(entry.main);
  const shifted = keyValue(entry.shifted);
  if (!shifted || [...main].length !== 1 || main.toUpperCase() === main) return false;
  return shifted === main.toUpperCase() || shifted === main.toLocaleUpperCase("tr");
}

// Keycaps sold for a non-Latin script also print the Latin letter of the physical key
// in the top-left corner. It is display-only and never a typing target.
// JIS and Taiwan keycaps print the same legends whichever input mode the learner uses:
// ASCII on the left (Shift level above), the native legends on the right (kana and small
// kana; 注音 above 倉頡) in the AltGr legend slots. `keycap` is display-only; typing
// targets and highlights keep reading the entry itself.
export function printedEntry(entry) {
  if (!entry.keycap) return entry;
  const [main, shifted] = entry.keycap.latin;
  const [alt, shiftalt] = entry.keycap.native;
  // A narrow board keeps only the slot holding the legend of the mode being typed.
  const typed = keyValue(entry.main);
  const capSlot = typed === main ? "latin" : typed === shiftalt ? "upper" : "lower";
  return { ...entry, main, shifted, alt, shiftalt, capSlot };
}

export function latinLegend(entry) {
  const letter = /^Key([A-Z])$/.exec(entry.hardware || "")?.[1];
  if (!letter || entry.other) return "";
  return /\p{Script=Latin}/u.test(keyValue(entry.main)) ? "" : letter;
}

function classForKey(entry) {
  const labels = keyValue(entry.main).split(" ").filter(Boolean);
  const code = keyCode(entry.main);
  const classes = ["keyboard-key", "key", "key--a", `key-${code}`];
  // The finger palette must follow the layout's own touch-typing assignment, not
  // the character on the key: `key-<charCode>` only ever matches a US QWERTY
  // character, so Cyrillic, Arabic, Thai, Devanagari, Hangul and Zhuyin boards
  // were left uncoloured and AZERTY/QWERTZ/Turkish coloured the wrong finger.
  if (entry.finger) classes.push(`key--fng-${Number(entry.finger)}`);
  // Homing bumps belong to the physical F/J positions for every layout.
  if (entry.hardware === "KeyF" || entry.hardware === "KeyJ") classes.push("key--homing");
  if (entry.shifted) classes.push(`key-${keyCode(entry.shifted)}`);
  if (entry.shifted && !isCasePair(entry)) classes.push("key--duo");
  if (latinLegend(entry)) classes.push("key--latin");
  if (entry.capSlot) classes.push("key--keycap", `key--keycap-${entry.capSlot}`);
  if (isFunctionalEntry(entry)) classes.push("key--special");
  if (entry.left) classes.push("key--special-l", "left");
  if (entry.right) classes.push("key--special-r", "right");
  if (!entry.other || code === 17 || code === 18) classes.push("key--rspnsv");
  if (labels.length > 1) classes.push("key--twoWords");
  if (/^[a-z]$/i.test(keyValue(entry.main))) classes.push("key--letter");
  const dead = entryDeadCharacter(entry);
  if (dead) classes.push(`key-${dead.charCodeAt(0)}-dead`);
  return classes.join(" ");
}

/**
 * AltGr legends, printed on the right of the keycap the way physical ISO/InScript
 * caps carry them: level 3 (`alt`) beside the main legend, level 4 (`shiftalt`,
 * Shift+AltGr) beside the shifted one. A legend that repeats a printed level adds
 * nothing and is left off. They live inside the existing labels so the legacy
 * `.key--duo .key-label:first-child/:last-child` geometry stays untouched.
 */
function altGrLegends(entry) {
  if (entry.other) return { alt: "", shiftalt: "" };
  const printed = new Set([keyValue(entry.main), keyValue(entry.shifted)].filter(Boolean));
  // Joiner-only legends (GAIL's ZWNJ key) print nothing visible, so they are left off.
  const visible = (value) => (/[^\u200c\u200d]/u.test(value) ? value : "");
  const alt = visible(keyValue(entry.alt));
  const shiftalt = visible(keyValue(entry.shiftalt));
  return {
    alt: alt && !printed.has(alt) ? alt : "",
    shiftalt: shiftalt && !printed.has(shiftalt) && shiftalt !== alt ? shiftalt : "",
  };
}

/**
 * The board's stylesheet uppercases every legend (`.key{text-transform:uppercase}`), which
 * is right for a letter whose Shift level is its capital, and wrong for everything else a
 * keycap prints: AZERTY's é/2 and ù/% print lowercase, ß is not SS, µ is not Greek Μ, and a
 * shifted legend is already the exact output. Those legends are marked `key-label--as-is`.
 * A Turkish i/İ key prints İ, which neither CSS nor `toUpperCase` gives.
 */
function mainLegend(entry, letterCase) {
  const text = displayKey(entry.main, letterCase);
  const main = keyValue(entry.main);
  const shifted = keyValue(entry.shifted);
  if (letterCase === "lowercase" && !isFunctionalEntry(entry)) return { text, asIs: true };
  if (letterCase !== "uppercase" || !shifted || [...main].length !== 1 || main.toUpperCase() === main) return { text, asIs: false };
  if (shifted.toLowerCase() === main || shifted.toLocaleLowerCase("tr") === main) return { text: keycapText(shifted), asIs: true };
  return { text, asIs: true };
}

function appendLabel(key, entry, letterCase) {
  if (entry.levels?.length > 4) {
    key.title = entry.levels.map((value, index) => {
      const modifiers = entry.levelModifiers?.[index] || [];
      return `${modifiers.join('+') || 'base'}: ${keyValue(value) || '—'}`;
    }).join('\n');
  }
  const legends = altGrLegends(entry);
  let shiftedLabel = null;
  if (entry.shifted && !isCasePair(entry)) {
    shiftedLabel = element("div", "key-label key-label--as-is", displayKey(entry.shifted, letterCase));
    key.append(shiftedLabel);
  }
  const legend = mainLegend(entry, letterCase);
  const label = element("div", legend.asIs ? "key-label key-label--as-is" : "key-label");
  const parts = legend.text.split(" ");
  const compactControl = isFunctionalEntry(entry) && parts.some((part) => /^[⌫⇪↹⏎⇧]$/.test(part))
    && parts.every((part) => [...part].every((character) => character.charCodeAt(0) < 128) || /^[⌫⇪↹⏎⇧]$/.test(part));
  if (compactControl) {
    key.classList.add("key--compact-control");
    key.setAttribute("aria-label", legend.text);
    if (!key.title) key.title = legend.text;
  }
  if (isFunctionalEntry(entry)) {
    const labelWidth = [...legend.text].reduce((width, character) => width + (character.charCodeAt(0) < 128 ? .7 : 1.1), 0);
    key.style.setProperty("--nt-key-label-length", String(Math.max(labelWidth, 1)));
    key.style.setProperty("--nt-key-label-units", key.dataset.widthU || "1");
  }
  if (parts.length > 1) parts.forEach((part, index) => {
    const compactClass = compactControl ? (/^[⌫⇪↹⏎⇧]$/.test(part) ? " key-label--control-symbol" : " key-label--control-word") : "";
    label.append(element("span", `key-label--${index}${compactClass}`, part));
  });
  else label.textContent = parts[0] || "";
  // A keycap's native legends sit in the main label so a narrow board can print them alone.
  if (legends.shiftalt) ((entry.capSlot ? null : shiftedLabel) || label).append(element("span", "key-altgr key-altgr--shiftalt", keycapText(legends.shiftalt)));
  if (legends.alt) label.append(element("span", "key-altgr key-altgr--alt", keycapText(legends.alt)));
  if (legends.alt || legends.shiftalt) key.classList.add("key--altgr");
  const latin = latinLegend(entry);
  if (latin) key.append(element("span", "key-latin", latin));
  key.append(label);
  if (entry.levels?.length > 4 || entry.ascii?.mode || entry.ime?.mode) {
    const layer = element("span", "key-active-level");
    layer.hidden = true;
    key.append(layer);
  }
}

// Nguồn dùng sprite `icons.svg#settings` của họ; ở đây bánh răng là SVG nội tuyến để bàn phím
// không kéo theo cả bộ icon, và nhãn lấy từ bảng chữ của trang (TypingEaseUI.keyboard.title).
const SETTINGS_ICON = '<svg class="keyboard-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">'
  + '<path fill="currentColor" d="M12 15.5A3.5 3.5 0 1 1 15.5 12 3.5 3.5 0 0 1 12 15.5Zm0-5.5a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z"/>'
  + '<path fill="currentColor" d="m19.4 13-.2-1 .2-1 1.5-1.2a.8.8 0 0 0 .2-1l-1.6-2.7a.8.8 0 0 0-1-.3l-1.8.7a7 7 0 0 0-1.7-1l-.3-1.9a.8.8 0 0 0-.8-.6h-3.2a.8.8 0 0 0-.8.6l-.3 2a7 7 0 0 0-1.7.9l-1.8-.7a.8.8 0 0 0-1 .3L3.5 8.8a.8.8 0 0 0 .2 1L5.2 11l-.2 1 .2 1-1.5 1.2a.8.8 0 0 0-.2 1l1.6 2.7a.8.8 0 0 0 1 .3l1.8-.7a7 7 0 0 0 1.7 1l.3 1.9a.8.8 0 0 0 .8.6h3.2a.8.8 0 0 0 .8-.6l.3-2a7 7 0 0 0 1.7-.9l1.8.7a.8.8 0 0 0 1-.3l1.6-2.7a.8.8 0 0 0-.2-1Zm-1.8 3.3-1.4-.6-.9.7a5.3 5.3 0 0 1-1.3.7l-1 .4-.3 1.5h-1.4l-.3-1.5-1-.4a5.3 5.3 0 0 1-1.3-.7l-.9-.7-1.4.6-.7-1.2 1.2-1 .1-1.1-.1-.7.1-.7-.1-1.1-1.2-1 .7-1.2 1.4.6.9-.7a5.3 5.3 0 0 1 1.3-.7l1-.4.3-1.5h1.4l.3 1.5 1 .4a5.3 5.3 0 0 1 1.3.7l.9.7 1.4-.6.7 1.2-1.2 1-.1 1.1.1.7-.1.7.1 1.1 1.2 1Z"/></svg>';

function appendSettings(board, onSettings) {
  const settings = element("div", "keyboard-link js-keyboard-settings");
  const action = element("a", "keyboard-link-action");
  action.href = "#";
  const label = t('settings.title');
  action.setAttribute('aria-label', label);
  action.innerHTML = `${SETTINGS_ICON}<span class="keyboard-link-text"></span>`;
  action.querySelector('.keyboard-link-text').textContent = label;
  action.addEventListener("click", (event) => {
    event.preventDefault();
    onSettings(event);
  });
  settings.append(action);
  board.append(settings);
}

/**
 * The 3D renderer pulls in three.js and a 967 KB model, so it is loaded lazily and
 * only once the learner actually has hands switched on. Until it resolves - and for
 * good when it fails - the 2-D fallback hand images stay on screen and every call
 * site keeps working against this handle, which replays the latest state on arrival.
 */
function createHandsHandle(container, options) {
  const handle = {
    renderer: null,
    disposed: false,
    visible: false,
    hands: null,
    pose: null,
    guideStrength: null,
  };
  let loading = null;
  let cancelScheduled = null;
  let automaticReady = false;
  const win = container.ownerDocument?.defaultView || window;
  const saveData = Boolean(win.navigator?.connection?.saveData);
  const load = () => {
    if (handle.disposed || loading) return;
    cancelScheduled?.();
    win.document.removeEventListener('keydown', firstKey, true);
    loading = import("./hands-3d.js")
      .then(({ mountTypingHands }) => {
        if (handle.disposed) return null;
        const renderer = mountTypingHands(container, options);
        handle.renderer = renderer;
        if (!renderer) return null;
        if (handle.hands) renderer.setHands(handle.hands);
        if (handle.guideStrength != null) renderer.setGuideStrength(handle.guideStrength);
        if (handle.pose) renderer.setPose(handle.pose);
        renderer.setVisible(handle.visible);
        return renderer;
      })
      .catch((error) => {
        console.warn("[hands-3d] unavailable", error);
        return null;
      });
  };
  const firstKey = (event) => {
    if (!handle.visible || saveData || event.metaKey || event.ctrlKey || event.altKey || ['Shift', 'Control', 'Alt', 'Meta'].includes(event.key)) return;
    load();
  };
  if (!saveData) {
    win.document.addEventListener('keydown', firstKey, true);
    cancelScheduled = scheduleHandsLoading(win, () => { automaticReady = true; if (handle.visible) load(); });
  }
  handle.setVisible = (value, { manual = false } = {}) => {
    handle.visible = Boolean(value);
    if (handle.visible && (manual || (!saveData && automaticReady))) load();
    handle.renderer?.setVisible(handle.visible);
  };
  handle.setHands = (value) => {
    handle.hands = value;
    handle.renderer?.setHands(value);
  };
  handle.setPose = (pose) => {
    if (pose?.wrong) return;
    handle.pose = pose;
    handle.renderer?.setPose(pose);
  };
  handle.setGuideStrength = (value) => {
    handle.guideStrength = value;
    handle.renderer?.setGuideStrength(value);
  };
  handle.destroy = () => {
    handle.disposed = true;
    cancelScheduled?.();
    win.document.removeEventListener('keydown', firstKey, true);
    handle.renderer?.destroy();
    handle.renderer = null;
  };
  return handle;
}

/**
 * `--fng-peek` is a registered custom property animated by the keyboard's colour
 * guide, so it only moves while that animation runs on the board. Sampling it on a
 * permanent rAF loop forced a style recalculation 60x a second for the whole lesson;
 * sample it during the animation and on every event that can change it instead.
 */
function bindGuideStrength(board, handle) {
  const read = () => {
    if (handle.disposed) return;
    const peek = Number.parseFloat(getComputedStyle(board).getPropertyValue("--fng-peek"));
    // Source fades the guide with --fng-peek only; doubling it tinted the meshes.
    handle.setGuideStrength(Number.isFinite(peek) ? peek : 0);
  };
  const sample = () => {
    read();
    board.__ntHandsGuideFrame = requestAnimationFrame(sample);
  };
  const start = (event) => {
    // Key elements bubble their own animations through the board; only the board's
    // own colour-guide animation moves --fng-peek.
    if (event && event.target !== board) return;
    if (board.__ntHandsGuideFrame) return;
    board.__ntHandsGuideFrame = requestAnimationFrame(sample);
  };
  const stop = (event) => {
    if (event && event.target !== board) return;
    if (board.__ntHandsGuideFrame) {
      cancelAnimationFrame(board.__ntHandsGuideFrame);
      board.__ntHandsGuideFrame = 0;
    }
    read();
  };
  board.addEventListener("animationstart", start);
  board.addEventListener("animationend", stop);
  board.addEventListener("animationcancel", stop);
  board.addEventListener("transitionend", stop);
  board.__ntHandsGuideSync = read;
  read();
  // The board is styled only once it is in the document, so re-read on the next frame.
  requestAnimationFrame(read);
  return () => {
    if (board.__ntHandsGuideFrame) {
      cancelAnimationFrame(board.__ntHandsGuideFrame);
      board.__ntHandsGuideFrame = 0;
    }
    board.__ntHandsGuideSync = null;
    board.removeEventListener("animationstart", start);
    board.removeEventListener("animationend", stop);
    board.removeEventListener("animationcancel", stop);
    board.removeEventListener("transitionend", stop);
  };
}

function appendFallbackHands(board, layout, preferences) {
  const hands = element("div", "hands js-hands nt-player-hands");
  // The legacy hand view sets these on the node, rather than in the stylesheet.
  // They deliberately extend beyond the keyboard so the full 3D scene remains visible.
  hands.style.position = "absolute";
  hands.style.left = "-100px";
  hands.style.right = "-100px";
  // Preserve the legacy wrapper geometry so the hand scene and highlight maps
  // keep the same projection relative to the keyboard.
  hands.style.height = "800px";
  hands.style.width = "unset";
  const left = document.createElement("img");
  left.className = "hand hand--left js-left-hand";
  left.alt = "";
  const right = document.createElement("img");
  right.className = "hand hand--right js-right-hand";
  right.alt = "";
  hands.append(left, right);
  board.append(hands);
  const handle = createHandsHandle(hands, { layout, animated: preferences.animatedHands });
  board.__ntHands = handle;
  const unbindGuide = bindGuideStrength(board, handle);
  const destroy = handle.destroy;
  handle.destroy = () => {
    unbindGuide();
    destroy();
  };
  handle.setHands({ leftOnly: preferences.leftHandOnly, rightOnly: preferences.rightHandOnly });
  handle.setVisible(preferences.showHands);
}

export function normalizeKeyboardLayouts(value) {
  return Array.isArray(value) ? value.filter((layout) => layout && Array.isArray(layout.structure)) : [];
}

export function selectKeyboardLayout(layouts, id = FALLBACK_LAYOUT_ID) {
  return layouts.find((layout) => Number(layout.keyboard_id) === Number(id)) ||
    layouts.find((layout) => Number(layout.keyboard_id) === FALLBACK_LAYOUT_ID) || layouts[0] || null;
}

// Source takes `event.key` verbatim; reconstructing the character from the selected
// on-screen layout mis-scored synthetic, assistive and software-keyboard input.
export function keyboardCharacterFromEvent(event) {
  const key = event.key;
  return key === "Spacebar" ? " " : key;
}

export function fingerForKey(value, layout, options = {}) {
  const source = String(value || "");
  const flat = layout?.structure?.flat() || [];
  // The spoken finger has to name the key the board actually lights up. When a
  // character sits on two keys (for example `[` on both the bracket key and an
  // AltGr level) a separate scan picked the other one and announced the wrong
  // finger, so resolve through the same target the highlight uses.
  const target = resolveKeyTarget(flat, source, options);
  if (target?.entry?.finger) return FINGER_NAMES[target.entry.finger] || "thumb";
  let entry = flat.find((key) => {
    const values = [key.main, key.shifted, key.alt].map(keyValue);
    return values.includes(source) || (source === " " && key.hardware === "Space");
  });
  if (!entry) {
    const lower = source.toLowerCase();
    entry = flat.find((key) => {
      const values = [key.main, key.shifted, key.alt].map(keyValue).map((candidate) => candidate.toLowerCase());
      return values.includes(lower) || (lower === " " && key.hardware === "Space");
    });
  }
  return FINGER_NAMES[entry?.finger] || "thumb";
}

export function fingerLabel(value, layout) {
  return fingerForKey(value, layout).replace("-", " ");
}

export function applyKeyboardPreferences(board, preferences) {
  board.classList.toggle("hide", !preferences.showKeyboard);
  board.classList.toggle("keyboard--letter-case-uppercase", preferences.letterCase === "uppercase");
  board.classList.toggle("keyboard--letter-case-lowercase", preferences.letterCase === "lowercase");
  board.classList.toggle("nt-player-hands-hidden", !preferences.showHands);
  board.classList.toggle("nt-player-right-hand-only", Boolean(preferences.rightHandOnly));
  board.classList.toggle("nt-player-left-hand-only", Boolean(preferences.leftHandOnly));
  board.classList.toggle("nt-player-hands-animated", Boolean(preferences.animatedHands));
  board.__ntHands?.setHands({ leftOnly: preferences.leftHandOnly, rightOnly: preferences.rightHandOnly });
  board.__ntHands?.setVisible(preferences.showHands, { manual: !board.__ntHands.visible && Boolean(preferences.showHands) });
  // A preference change can start or stop the colour-guide animation.
  board.__ntHandsGuideSync?.();
}

export function applyRootKeyboardPreferences(root, preferences, layout = null) {
  root.__ntKeyboardPreferences = preferences;
  // The prompt's height depends on whether a board sits below it; a mid-screen change of
  // the preference has to move it in step with the board it just hid or restored.
  root.querySelectorAll(".js-screen-content.screenBasic").forEach((screen) => {
    screen.classList.toggle("screenBasic--noKeyboard", !preferences.showKeyboard);
  });
  root.querySelectorAll(".nt-player-keyboard").forEach((board) => {
    const previous = board.__ntKeyboardOptions?.preferences;
    const needsRebuild = (layout && Number(board.__ntKeyboardLayout?.keyboard_id) !== Number(layout.keyboard_id)) ||
      previous?.letterCase !== preferences.letterCase ||
      previous?.inputMethodId !== preferences.inputMethodId ||
      previous?.animatedHands !== preferences.animatedHands ||
      previous?.keyboardShape !== preferences.keyboardShape;
    if (needsRebuild) {
      refreshKeyboardLayout(board, { layout, preferences });
      if (previous?.showHands === false && preferences.showHands) board.__ntHands?.setVisible(true, { manual: true });
      return;
    }
    applyKeyboardPreferences(board, preferences);
  });
}

function entryList(layout) {
  return (layout?.structure || []).flat();
}

function specialIndex(entries, code, side) {
  return entries.findIndex((entry) => entry.other && keyCode(entry.main) === code && (!side || entry[side]));
}

function levelModifiers(entries, entry, levelIndex) {
  const opposite = Number(entry.finger) <= 5 ? "right" : "left";
  const roles = entry.levelModifiers?.[levelIndex] || (
    levelIndex === 0 ? [] : levelIndex === 1 ? ["shift"] : levelIndex === 2 ? ["level3"] : levelIndex === 3 ? ["shift", "level3"] : null
  );
  if (roles === null) return null;
  const modifiers = roles.map((role) => {
    if (role === "shift") return specialIndex(entries, 16, opposite);
    const candidates = entries.flatMap((key, index) => key.modifierRole === role ? [{ key, index }] : []);
    const matchingSide = candidates.find(({ key }) => key[opposite] || key.hardware?.endsWith(opposite === "right" ? "Right" : "Left"));
    const legacyAltGr = role === "level3" ? entries.findIndex((key) => key.other && keyCode(key.main) === 18 && key.right && /^Alt\s*Gr$/i.test(keyValue(key.main))) : -1;
    return matchingSide?.index ?? candidates[0]?.index ?? legacyAltGr;
  });
  return modifiers.some((index) => index < 0) ? null : modifiers;
}

function findDeadTrigger(entries, diacritic) {
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    if (!entry || entry.other) continue;
    if (deadCharacter(entry.main, entry) === diacritic && levelModifiers(entries, entry, 0) !== null) {
      return { index: i, level: "main", modifiers: levelModifiers(entries, entry, 0) };
    }
    if (deadCharacter(entry.shifted, entry) === diacritic && levelModifiers(entries, entry, 1) !== null) {
      return { index: i, level: "shifted", modifiers: levelModifiers(entries, entry, 1) };
    }
    if (deadCharacter(entry.alt, entry) === diacritic && levelModifiers(entries, entry, 2) !== null) {
      return { index: i, level: "alt", modifiers: levelModifiers(entries, entry, 2) };
    }
    if (deadCharacter(entry.shiftalt, entry) === diacritic && levelModifiers(entries, entry, 3) !== null) {
      return { index: i, level: "altShifted", modifiers: levelModifiers(entries, entry, 3) };
    }
    for (let level = 4; level < (entry.levels?.length || 0); level++) {
      if (deadCharacter(entry.levels[level], entry) === diacritic && levelModifiers(entries, entry, level) !== null) {
        return { index: i, level: `level${level + 1}`, modifiers: levelModifiers(entries, entry, level) };
      }
    }
  }
  if (diacritic === "´" && !entries.some((entry) => entry.explicitDeadKeys)) {
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      if (!entry || entry.other) continue;
      if (keyValue(entry.main) === "'" || entry.hardware === "Quote") {
        return { index: i, level: "main", modifiers: [] };
      }
    }
  }
  return null;
}

/**
 * Source's `highlightKey`: resolve the character to one key plus the modifier keys the
 * learner has to hold - the opposite-hand Shift for shifted characters, AltGr for
 * alternate-graphic characters, and the dead-key trigger for composed characters.
 */
export function resolveKeyTarget(entries, character, options = {}) {
  if (!character) return null;
  const byCode = (code) => {
    const index = entries.findIndex((entry) => keyCode(entry.main) === code);
    return index < 0 ? null : { index, entry: entries[index], level: "special", modifiers: [] };
  };
  // Phím không phải ký tự đi theo TÊN, không theo nhãn in trên phím: bài học gọi "shift"/"enter"
  // còn layout ghi "Shift ⇧"/"Enter ⏎". Phím có hai bên (Shift, Ctrl, Alt, Cmd) sáng cả hai, vì
  // gọi tên trần là chưa chỉ định bên nào — ô thứ hai đi vào `modifiers` để cùng được tô.
  const named = namedKeyOf(character);
  if (named) {
    const indexes = findNamedIndexes(entries, named);
    if (!indexes.length) return byCode(namedKeyCode(named));
    return { index: indexes[0], entry: entries[indexes[0]], level: "special", modifiers: indexes.slice(1) };
  }
  if (character === "Enter" || character === "\n" || character === "\u23ce") return byCode(13);
  if (character === "Backspace") return byCode(8);
  if (character === "CapsLock") return byCode(20);
  // A modifier intro lights every key of that role, with the left one leading.
  if (character === "Shift" || character === "AltGraph") {
    const indexes = character === "Shift"
      ? entries.flatMap((entry, index) => entry.other && keyCode(entry.main) === 16 ? [index] : [])
      : [levelModifiers(entries, { finger: 1 }, 2)?.[0]].filter((index) => index >= 0);
    if (!indexes.length) return null;
    return { index: indexes[0], entry: entries[indexes[0]], level: "special", modifiers: indexes.slice(1) };
  }
  if (character === " ") {
    const index = entries.findIndex((entry) => entry.hardware === "Space" || keyCode(entry.main) === 32);
    return index < 0 ? null : { index, entry: entries[index], level: "special", modifiers: [] };
  }
  const found = (index, level) => {
    const entry = entries[index];
    const levelIndex = level === "shifted" ? 1 : level === "alt" ? 2 : level === "altShifted" ? 3
      : /^level\d+$/.test(level) ? Number(level.slice(5)) - 1 : 0;
    const modifiers = levelModifiers(entries, entry, levelIndex);
    return modifiers === null ? null : { index, entry, level, modifiers };
  };
  const usable = (entry) => !entry.other;
  // A first-order Ethiopic letter is a consonant key's own legend, but Learn's composer
  // (AmharicFidelComposer) reads that key alone as the sixth order: the first order is
  // the key plus e. The consonant step of a composition still resolves to the bare key.
  if (!composing.size && isEthiopicSyllable(character) && ethiopicOrder(character) === 0) {
    const composed = composedKeyTarget(entries, character, options);
    if (composed) return composed;
  }
  const literalMatches = (entry, value, levelIndex = 0) => usable(entry) && keyValue(value) === character &&
    !deadCharacter(value, entry) && levelModifiers(entries, entry, levelIndex) !== null;
  let index = entries.findIndex((entry) => literalMatches(entry, entry.main));
  if (index >= 0) return found(index, "main");
  index = entries.findIndex((entry) => literalMatches(entry, entry.shifted, 1));
  if (index >= 0) return found(index, "shifted");
  index = entries.findIndex((entry) => {
    const main = keyValue(entry.main);
    return usable(entry) && !entry.explicitDeadKeys && /^[a-z]$/i.test(main) && main.toLowerCase() === character.toLowerCase();
  });
  if (index >= 0) return found(index, character !== character.toLowerCase() ? "shifted" : "main");
  index = entries.findIndex((entry) => literalMatches(entry, entry.alt, 2));
  if (index >= 0) return found(index, "alt");
  index = entries.findIndex((entry) => literalMatches(entry, entry.shiftalt, 3));
  if (index >= 0) return found(index, "altShifted");
  for (let level = 4; level < Math.max(0, ...entries.map((entry) => entry.levels?.length || 0)); level++) {
    index = entries.findIndex((entry) => literalMatches(entry, entry.levels?.[level], level));
    if (index >= 0) return found(index, `level${level + 1}`);
  }
  // A key whose legend is not what its IME types: CJK boards record the
  // IME's native-mode punctuation (`ime`, e.g. JIS `.` -> 。) and the Latin/digit
  // legend their English mode types (`ascii`, e.g. Zhuyin ㄇ key -> a). Both
  // come from tooling/keyboards/generate-cjk-layouts.mjs and never outrank a
  // printed legend.
  for (const field of ["ime", "ascii"]) {
    index = entries.findIndex((entry) => usable(entry) && producedBy(entry[field]?.main, character) && levelModifiers(entries, entry, 0) !== null);
    if (index >= 0) return { ...found(index, "main"), inputMode: entries[index][field].mode || "", output: character };
    index = entries.findIndex((entry) => usable(entry) && producedBy(entry[field]?.shifted, character) && levelModifiers(entries, entry, 1) !== null);
    if (index >= 0) return { ...found(index, "shifted"), inputMode: entries[index][field].mode || "", output: character };
  }

  // The Persian zero-width non-joiner is typed Shift+Space (typing-engine's isPersianZwnj)
  // on a board whose own levels lack it: legacy Persian keeps it on Ctrl+Shift+2.
  if (character === "\u200c") {
    index = entries.findIndex((entry) => entry.other && keyCode(entry.main) === 32);
    if (index >= 0) return found(index, "shifted");
  }
  // A board imported from a Windows DLL carries its dead keys' own composition tables;
  // it types exactly what those tables list and nothing the generic rules would guess.
  if (entries.some(hasComposeTable)) return tableDeadTarget(entries, character, options) || composedKeyTarget(entries, character, options);
  const spacing = spacingDeadTarget(entries, character);
  if (spacing) return spacing;
  // A composed character is typed as its dead-key trigger followed by the base letter,
  // except under a Vietnamese input method, which composes marks from letter or digit keys.
  const decomposed = Array.from(String(character).normalize("NFD"));
  const markIndex = decomposed.findIndex((c) => COMBINING_DEAD[c]);
  const dead = markIndex >= 0 && !VIETNAMESE_METHODS.has(options.inputMethodId) ? COMBINING_DEAD[decomposed[markIndex]] : "";
  if (dead) {
    const diacritic = DEAD_CHARACTERS[dead];
    const trigger = findDeadTrigger(entries, diacritic);
    if (trigger) {
      const remainingBase = decomposed.filter((_, i) => i !== markIndex).join("").normalize("NFC");
      if (remainingBase) return {
        index: trigger.index,
        entry: entries[trigger.index],
        level: "dead",
        dead: remainingBase,
        deadTrigger: diacritic,
        modifiers: trigger.modifiers.filter((value) => value >= 0)
      };
    }
  }
  const composed = composedKeyTarget(entries, character, options);
  if (composed) return composed;
  return null;
}

const entryLevels = (entry) => [entry.main, entry.shifted, entry.alt, entry.shiftalt, ...(entry.levels || []).slice(4)];
const hasComposeTable = (entry) => !entry.other && entryLevels(entry).some((value) => value?.compose);

function tableDeadTarget(entries, character, options) {
  if ((options.deadDepth || 0) > 2) return null;
  const nested = { ...options, deadDepth: (options.deadDepth || 0) + 1 };
  let fallback = null;
  for (const [index, entry] of entries.entries()) {
    if (entry.other) continue;
    for (const [levelIndex, value] of entryLevels(entry).entries()) {
      const bases = Object.keys(value?.compose || {}).filter((base) => value.compose[base] === character);
      const modifiers = bases.length ? levelModifiers(entries, entry, levelIndex) : null;
      if (modifiers === null) continue;
      for (const base of bases) {
        const repeat = base === value.key;
        const baseTarget = repeat || base === " " ? true : resolveKeyTarget(entries, base, nested);
        if (!baseTarget) continue;
        const target = {
          index,
          entry,
          level: "dead",
          dead: base,
          ...(repeat ? { deadRepeat: true } : {}),
          deadTrigger: deadCharacter(value, entry),
          modifiers: modifiers.filter((modifier) => modifier >= 0)
        };
        // Prefer a base typed with one key over one that is itself composed.
        if (baseTarget === true || baseTarget.level !== "dead") return target;
        fallback ||= target;
      }
    }
  }
  return fallback;
}

function producedBy(value, character) {
  return value != null && [].concat(value).includes(character);
}

// libX11 nls/en_US.UTF-8/Compose.pre defines the committed spacing output,
// which can differ from the legend. Acute/diaeresis need a repeated trigger
// for their accent glyph, while Space commits an ASCII quote.
const SPACING_DEAD = Object.freeze({
  "~": { diacritic: "~" }, "'": { diacritic: "´" }, "´": { diacritic: "´", repeat: true },
  "`": { diacritic: "`" }, "^": { diacritic: "^" }, "°": { diacritic: "˚" },
  "¯": { diacritic: "¯" }, "˘": { diacritic: "˘" }, "˙": { diacritic: "˙" },
  '"': { diacritic: "¨" }, "¨": { diacritic: "¨", repeat: true }, "˝": { diacritic: "˝" },
  "ˇ": { diacritic: "ˇ" }, "¸": { diacritic: "¸" }, "˛": { diacritic: "˛" },
  "̣": { diacritic: "̣" }, ",": { diacritic: "̦" }, "̉": { diacritic: "̉" },
  "̛": { diacritic: "̛" }, "/": { diacritic: "/" }
});
function spacingDeadTarget(entries, character) {
  const rule = SPACING_DEAD[character];
  if (!rule) return null;
  const trigger = findDeadTrigger(entries, rule.diacritic);
  if (!trigger) return null;
  return {
    index: trigger.index,
    entry: entries[trigger.index],
    level: "dead",
    dead: rule.repeat ? character : " ",
    ...(rule.repeat ? { deadRepeat: true } : {}),
    deadTrigger: rule.diacritic,
    modifiers: trigger.modifiers.filter((value) => value >= 0)
  };
}

// Telex writes a Vietnamese diacritic as a trailing letter: `ạ` is `a` then `j`,
// `ở` is `o`, `w`, `r`. The circumflex doubles its own vowel (`aa` -> `â`).
// A JIS kana board has no key for a voiced or semi-voiced kana: it is typed as
// the base kana followed by the ゛or ゜ key, which is exactly what the kana
// sound marks decompose to.
const KANA_SOUND_MARKS = Object.freeze({ "\u3099": "\u309B", "\u309A": "\u309C" });
const TELEX_MARKS = Object.freeze({ "́": "s", "̀": "f", "̉": "r", "̃": "x", "̣": "j", "̆": "w", "̛": "w" });
// VNI writes every mark as a digit after the vowel: 1 sắc, 2 huyền, 3 hỏi, 4 ngã, 5 nặng,
// 6 circumflex, 7 horn, 8 breve, and d9 for đ (content/typing-setups.json vi-vni-v1).
const VNI_MARKS = Object.freeze({ "́": "1", "̀": "2", "̉": "3", "̃": "4", "̣": "5", "̂": "6", "̛": "7", "̆": "8" });
const VIETNAMESE_METHODS = new Set(["vi-telex-v1", "vi-vni-v1"]);
// Ethiopic is laid out in rows of eight, and Learn types it through
// AmharicFidelComposer (src/learning/complex-script-engine.js), whose keys after the
// consonant are the only sequences shown: 1st e, 2nd u, 3rd i, 4th a, 5th e e,
// 6th the bare consonant, 7th o. tests/am-guidance-composer-parity.test.mjs types
// every guided sequence through the composer.
const ETHIOPIC_VOWELS = Object.freeze({ 0: ["e"], 1: ["u"], 2: ["i"], 3: ["a"], 4: ["e", "e"], 5: [], 6: ["o"] });
const isEthiopicSyllable = (character) => {
  const code = String(character).codePointAt(0);
  return String(character).length === 1 && code >= 0x1200 && code <= 0x135A;
};
const ethiopicOrder = (character) => (character.codePointAt(0) - 0x1200) % 8;
// The labialized forms are the shifted vowel keys of XKB et(basic) (dead_A/U/I/E/O)
// with a consonant, exactly as libX11 nls/am_ET.UTF-8/Compose lists them: A gives
// the -wa form (ሏ, ቧ, ቋ, ኳ, ጓ, ኋ), and U I E O the rest of the qw/kw/gw rows (ቍ ቊ ቌ ቈ).
// XKB presses the dead vowel key first; the hint lists the consonant first like the
// plain vowels above (the key set is the same). Each string pairs an output with
// its base consonant. Forms Compose does not list
// (ኈ ኊ ኌ ኍ, ሇ, ...) cannot be typed on this board and stay unresolved.
const ETHIOPIC_LABIAL_PAIRS = Object.freeze({
  A: "ሏለሟመሯረሷሰቋቀቧበቷተኗነኧአኳከዟዘዷደጇጀጓገፏፈፗፐሿሸጯጨሗሐሧሠቛቐቿቸጧጠኟኘዃኸዧዠዿዸጿጸጷጰኋኀቯቨ",
  U: "ቍቀኵከጕገቝቐዅኸ", I: "ቊቀኲከጒገቚቐዂኸ", E: "ቌቀኴከጔገቜቐዄኸ", O: "ቈቀኰከጐገቘቐዀኸ"
});
const ETHIOPIC_LABIAL = new Map(Object.entries(ETHIOPIC_LABIAL_PAIRS).flatMap(([key, pairs]) => {
  const letters = [...pairs];
  return letters.filter((_, index) => index % 2 === 0).map((output, index) => [output, [letters[index * 2 + 1], key]]);
}));
const HANGUL_LEAD = Object.freeze(["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"]);
const HANGUL_TAIL = Object.freeze(["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"]);
// A 2-set board has no key for a compound vowel or a compound final consonant;
// both are typed as the two jamo they are built from.
const HANGUL_COMPOUND = Object.freeze({
  "ㅘ": "ㅗㅏ", "ㅙ": "ㅗㅐ", "ㅚ": "ㅗㅣ", "ㅝ": "ㅜㅓ", "ㅞ": "ㅜㅔ", "ㅟ": "ㅜㅣ", "ㅢ": "ㅡㅣ",
  "ㄳ": "ㄱㅅ", "ㄵ": "ㄴㅈ", "ㄶ": "ㄴㅎ", "ㄺ": "ㄹㄱ", "ㄻ": "ㄹㅁ", "ㄼ": "ㄹㅂ", "ㄽ": "ㄹㅅ",
  "ㄾ": "ㄹㅌ", "ㄿ": "ㄹㅍ", "ㅀ": "ㄹㅎ", "ㅄ": "ㅂㅅ"
});
const hangulJamo = (jamo) => [...(HANGUL_COMPOUND[jamo] || jamo)];

/** The ordered key presses a character needs when no single key produces it. */
function compositionKeys(character, inputMethodId = "") {
  const code = character.codePointAt(0);
  if (code >= 0xAC00 && code <= 0xD7A3) {
    const offset = code - 0xAC00;
    const lead = HANGUL_LEAD[Math.floor(offset / 588)];
    const vowel = String.fromCodePoint(0x314F + Math.floor((offset % 588) / 28));
    const tail = HANGUL_TAIL[offset % 28];
    return [lead, ...hangulJamo(vowel), ...(tail ? hangulJamo(tail) : [])];
  }
  if (isEthiopicSyllable(character)) {
    if (ETHIOPIC_LABIAL.has(character)) return ETHIOPIC_LABIAL.get(character);
    const form = ethiopicOrder(character);
    // The eighth column (ሏ, ሇ ...) is only typeable through the labial table above.
    return form === 7 ? null : [String.fromCodePoint(code - form), ...ETHIOPIC_VOWELS[form]];
  }
  const decomposed = Array.from(character.normalize("NFD"));
  if (decomposed.length === 2 && KANA_SOUND_MARKS[decomposed[1]]) return [decomposed[0], KANA_SOUND_MARKS[decomposed[1]]];
  if (!VIETNAMESE_METHODS.has(inputMethodId)) return null;
  const vni = inputMethodId === "vi-vni-v1";
  if (character === "đ" || character === "Đ") {
    const base = character === "Đ" ? "D" : "d";
    return vni ? [base, "9"] : [base, base];
  }
  if (decomposed.length < 2) return null;
  const base = decomposed[0];
  const marks = decomposed.slice(1);
  if (vni) {
    if (!marks.every((mark) => VNI_MARKS[mark])) return null;
    const shape = marks.filter((mark) => mark === "̂" || mark === "̆" || mark === "̛");
    return [base, ...shape.map((mark) => VNI_MARKS[mark]), ...marks.filter((mark) => !shape.includes(mark)).map((mark) => VNI_MARKS[mark])];
  }
  if (!marks.every((mark) => TELEX_MARKS[mark] || mark === "̂")) return null;
  // Telex order is base, then the vowel-shaping mark, then the tone.
  const shaping = marks.filter((mark) => mark === "̂" || mark === "̆" || mark === "̛");
  const tones = marks.filter((mark) => !shaping.includes(mark));
  return [base, ...shaping.map((mark) => (mark === "̂" ? base : TELEX_MARKS[mark])), ...tones.map((mark) => TELEX_MARKS[mark])];
}

// Remington GAIL (Keyman/SIL remington_gail 1.1, content/input-fixtures/
// hi-remington-gail-keyman-1-1-r1/upstream/remington_gail.kmn) builds some
// letters by rewriting the previous output instead of giving them a key:
//   U+0905 + [K_K] > U+0906; U+0906 + [K_S]/[SHIFT K_S]/[SHIFT K_W] > U+0913/U+0914/U+0911
//   U+0909 + [K_Q] > U+090A; U+090F + [K_S]/[SHIFT K_W] > U+0910/U+090D
//   U+093E + [K_S]/[SHIFT K_S]/[SHIFT K_W] > U+094B/U+094C/U+0949
//   any(all) U+094D + [K_K] > index(all,1)   (half form + ा = full consonant)
//   any(nukta1) + [K_BKQUOTE] > index(nukta2,1)
// Each rule is written as the output characters of its keys, so the steps are
// resolved against the board's own labels.
const GAIL_VOWELS = Object.freeze({
  "आ": ["अ", "ा"], "ओ": ["अ", "ा", "े"], "औ": ["अ", "ा", "ै"], "ऑ": ["अ", "ा", "ॅ"],
  "ऊ": ["उ", "ु"], "ऐ": ["ए", "े"], "ऍ": ["ए", "ॅ"],
  "ो": ["ा", "े"], "ौ": ["ा", "ै"], "ॉ": ["ा", "ॅ"]
});
const GAIL_NUKTA = Object.freeze({ "ऩ": "न", "ऱ": "र", "ऴ": "ळ" });
const gailBoards = new WeakMap();
function isGailBoard(entries) {
  if (!gailBoards.has(entries)) {
    const label = (code) => keyValue(entries.find((entry) => entry.hardware === code)?.main);
    // The Remington signature: ा on K and अ on V, with half forms on shifted keys.
    gailBoards.set(entries, label("KeyK") === "ा" && label("KeyV") === "अ"
      && entries.some((entry) => keyValue(entry.shifted) === "थ्"));
  }
  return gailBoards.get(entries);
}
/** The GAIL key sequence for a letter the Remington board only makes by a rewrite rule. */
function gailKeys(entries, character) {
  if (!Array.isArray(entries) || !isGailBoard(entries)) return null;
  if (GAIL_VOWELS[character]) return GAIL_VOWELS[character];
  if (GAIL_NUKTA[character]) return [GAIL_NUKTA[character], "़"];
  const code = character.codePointAt(0);
  if (character.length === 1 && code >= 0x0915 && code <= 0x0939) return [`${character}्`, "ा"];
  return null;
}

/**
 * A character the layout cannot produce with one key may still be typed as a
 * sequence of keys it does have - Hangul jamo, an Ethiopic consonant plus its
 * vowel, or a Telex base plus its marks. Every key in that sequence is returned
 * so the board can light the whole combination instead of nothing at all.
 */
function nfdKeys(character) {
  const parts = [...character.normalize("NFD")];
  return parts.length > 1 && character.normalize("NFD") !== character ? parts : null;
}

// Characters whose composition is being resolved: a rule that decomposes back into
// the same character (GAIL ङ -> ङ् + ा -> ङ + ्) must fail instead of recursing.
const composing = new Set();

function composedKeyTarget(entries, character, options = {}) {
  if (composing.has(character)) return null;
  composing.add(character);
  try { return composedKeyTargetOnce(entries, character, options); }
  finally { composing.delete(character); }
}

function composedKeyTargetOnce(entries, character, options = {}) {
  // A grapheme cluster the board writes one code point at a time - an Indic
  // consonant plus its matra, a Thai syllable plus its tone mark, a Persian
  // letter plus a zero-width non-joiner - needs no per-script table: its own
  // code points are the key sequence, whenever the layout carries them all.
  const scripted = gailKeys(entries, String(character)) || compositionKeys(String(character), options.inputMethodId)
    || ([...String(character)].length > 1 ? [...String(character)] : null)
    // A precomposed letter whose parts the board types separately (Urdu ۓ = ے + ٔ).
    || nfdKeys(String(character));
  const keys = scripted || [...String(character)];
  // A single key is still worth showing when a script rule chose it: the sixth
  // Ethiopic form has no vowel letter here, so its bare consonant is the only
  // honest hint available. A lone code point from the generic fallback is not -
  // it is just the character that already failed to resolve on its own.
  if (!keys.length || (!scripted && keys.length < 2)) return null;
  const steps = [];
  for (const key of keys) {
    const step = (isEthiopicSyllable(character) ? ethiopicVowelControl(entries, key) : null)
      || resolveKeyTarget(entries, key, options);
    if (!step || step.steps) return null;
    steps.push(step);
  }
  const first = steps[0];
  return { index: first.index, entry: first.entry, level: "composed", steps, modifiers: first.modifiers };
}

// XKB et uses dead_a/e/i/o/u (and shifted labialized vowels) as controls,
// not committed Latin letters. They are valid only inside a fidel sequence.
function ethiopicVowelControl(entries, character) {
  if (!/^[aeiouAEIOU]$/.test(character)) return null;
  for (const [index, entry] of entries.entries()) {
    if (entry.other) continue;
    for (const [levelIndex, value] of [entry.main, entry.shifted, entry.alt, entry.shiftalt, ...(entry.levels || []).slice(4)].entries()) {
      if (value?.dead !== character) continue;
      const modifiers = levelModifiers(entries, entry, levelIndex);
      if (modifiers === null) continue;
      return { index, entry, level: "composition-control", modifiers };
    }
  }
  return null;
}

const pressName = (entry) => entry?.hardware || `key(${keyValue(entry?.main)})`;
function pressesOf(entries, target, options = {}) {
  if (!target) return null;
  if (target.level === "composed") {
    const presses = target.steps.map((step) => pressesOf(entries, step, options));
    return presses.every(Boolean) ? presses.flat() : null;
  }
  const own = { key: pressName(target.entry), finger: Number(target.entry?.finger) || null, mods: (target.modifiers || []).length };
  if (target.level === "dead") {
    if (target.deadRepeat) return [own, { ...own }];
    const base = target.dead ? pressesOf(entries, resolveKeyTarget(entries, target.dead, options), options) : [];
    return base ? [own, ...base] : null;
  }
  return [own];
}

/**
 * The physical key presses (modifiers excluded) that type one output character, each
 * with its layout finger (1-10) and how many modifiers it holds (Shift, AltGr): a dead trigger plus base, a Telex base plus marks,
 * Hangul jamo, a GAIL sequence. Practices statistics and the corpus validator use it;
 * null when the board cannot type the character.
 */
export function keyPressesFor(entries, character, options = {}) {
  return pressesOf(entries, resolveKeyTarget(entries, character, options), options);
}

/**
 * Split text into the units a board types: code points, except that a combining mark
 * the board has no key for joins the character before it when that pair is one key
 * (Windows Yoruba types ọ̀ with AltGr+S). The corpus index and validator use it.
 */
export function typedUnits(entries, text, options = {}, presses = (unit) => keyPressesFor(entries, unit, options)) {
  const units = [];
  for (const unit of text) {
    const previous = units.at(-1);
    if (previous && /^\p{M}$/u.test(unit) && !presses(unit) && presses(previous + unit)) units[units.length - 1] = previous + unit;
    else units.push(unit);
  }
  return units;
}

const NO_KEYS = Object.freeze([]);

/**
 * Highlighting runs on every keystroke, so each board keeps the flattened layout, its
 * key elements by entry index, and a per-character resolution cache. `resolveKeyTarget`
 * and `fingerForKey` then run once per distinct character instead of once per keypress,
 * and the highlight only touches the keys that actually change.
 */
function buildKeyboardIndex(board, layout) {
  const nodes = Array.from(board.querySelectorAll(".keyboard-key"));
  const nodeByEntry = [];
  for (const node of nodes) nodeByEntry[Number(node.dataset.entry)] = node;
  return {
    entries: entryList(layout),
    layout,
    options: { inputMethodId: board.__ntInputMethodId || "" },
    nodeByEntry,
    targets: new Map(),
    fingers: new Map(),
  };
}

function keyboardIndex(board) {
  if (!(board instanceof HTMLElement)) return null;
  if (!board.__ntKeyboardIndex && board.__ntKeyboardLayout) {
    board.__ntKeyboardIndex = buildKeyboardIndex(board, board.__ntKeyboardLayout);
  }
  return board.__ntKeyboardIndex || null;
}

/** The resolved target for one character, with its key elements resolved once. */
function targetFor(index, character) {
  if (index.targets.has(character)) return index.targets.get(character);
  const target = resolveKeyTarget(index.entries, character, index.options);
  if (target) {
    target.finger = FINGER_NAMES[target.entry.finger] || "thumb";
    target.node = index.nodeByEntry[target.index] || null;
    // A composed target lights every key of its sequence, the way a shifted key
    // already lights its Shift, so the learner sees the whole combination.
    const parts = target.steps || [target];
    const nodes = parts.flatMap((part) => [index.nodeByEntry[part.index] || null, ...part.modifiers.map((entry) => index.nodeByEntry[entry] || null)]).filter(Boolean);
    target.nodes = nodes.length ? [...new Set(nodes)] : NO_KEYS;
  }
  index.targets.set(character, target);
  return target;
}

function fingerFor(index, value) {
  const key = String(value ?? "");
  if (index.fingers.has(key)) return index.fingers.get(key);
  const finger = fingerForKey(value, index.layout, index.options);
  index.fingers.set(key, finger);
  return finger;
}

/** The key element a character is typed on, used to line falling letters up with it. */
export function keyElementFor(board, character) {
  const text = character === "\n" ? "Enter" : String(character ?? "");
  const index = keyboardIndex(board);
  if (index) return targetFor(index, text)?.node || null;
  const target = resolveKeyTarget(entryList(board?.__ntKeyboardLayout), text, { inputMethodId: board?.__ntInputMethodId || "" });
  return target ? board.querySelector(`.keyboard-key[data-entry="${target.index}"]`) : null;
}

/**
 * The hands can only pose from a key the layout actually has. A composed or
 * dead-key target is typed as a sequence - Hangul jamo, an Ethiopic consonant
 * plus vowel, a Telex base plus marks, a dead trigger plus base letter - whose
 * final character sits on no key at all. The hand must reach for the first key
 * of that sequence, or it drops to rest while the board lights the right keys.
 */
function poseKeyFor(target, fallback) {
  if (target?.level !== "composed" && target?.level !== "dead" && !/^level\d+$/.test(target?.level || "")) return fallback;
  const entry = (target.steps?.[0] || target).entry;
  return keyValue(entry?.main) || fallback;
}

export function setKeyboardState(board, activeKey, deadKeyPending = false) {
  const index = keyboardIndex(board);
  let charToHighlight = activeKey === "\n" ? "Enter" : String(activeKey ?? "");
  if (deadKeyPending && index) {
    const originalTarget = targetFor(index, charToHighlight);
    if (originalTarget?.level === "dead" && originalTarget.dead) {
      charToHighlight = originalTarget.dead;
    }
  }
  const target = index ? targetFor(index, charToHighlight) : null;
  const next = target ? target.nodes : NO_KEYS;
  const previous = board.__ntActiveKeys || NO_KEYS;
  // Only the keys that change are touched; toggling all ~80 nodes per keystroke
  // invalidated their style on every press.
  for (const node of previous) {
    if (!next.includes(node)) node.classList.remove("is-active");
    const layer = node.querySelector('.key-active-level');
    if (layer) layer.hidden = true;
  }
  for (const node of next) node.classList.add("is-active");
  const inputMode = (target?.steps || (target ? [target] : [])).find(part => part.inputMode)?.inputMode || "";
  board.dataset.inputMode = inputMode;
  const modeNotice = board.querySelector('.keyboard-mode-notice');
  if (modeNotice) {
    modeNotice.hidden = !inputMode;
    modeNotice.textContent = inputMode === 'fullwidth-alphanumeric' ? t('player.fullwidthAlphanumericMode')
      : inputMode === 'alphanumeric' ? (board.classList.contains('keyboard--jis') ? t('player.alphanumericMode') : 'ABC') : '';
  }
  for (const part of target?.steps || (target ? [target] : [])) {
    if (!/^level\d+$/.test(part.level) && !part.inputMode) continue;
    const layer = index.nodeByEntry[part.index]?.querySelector('.key-active-level');
    if (layer) {
      layer.textContent = part.inputMode ? part.output : keyValue(part.entry.levels[Number(part.level.slice(5)) - 1]);
      layer.hidden = false;
    }
  }
  board.__ntActiveKeys = next;
  board.__ntAwaitingDead = deadKeyPending ? "" : (target?.level === "dead" ? target.dead : "");
  const finger = target ? target.finger : (index ? fingerFor(index, charToHighlight) : fingerForKey(charToHighlight, board.__ntKeyboardLayout));
  if (board.dataset.finger !== finger) board.dataset.finger = finger;
  if (board.__ntKeyboardOptions) board.__ntKeyboardOptions.activeKey = activeKey;
  const hardware = (target?.steps?.[0] || target)?.entry?.hardware;
  board.__ntHands?.setPose({ key: poseKeyFor(target, charToHighlight), hardware, finger, wrong: false });
}

/**
 * Source's `highlightErrorKey`: the key the learner actually pressed flashes red for
 * 250 ms while the expected key keeps its `is-active` hint.
 */
export function highlightErrorKey(board, pressedKey) {
  const index = keyboardIndex(board);
  if (!index) return;
  const target = targetFor(index, pressedKey === "\n" ? "Enter" : String(pressedKey ?? ""));
  const key = target?.node;
  if (!key) return;
  key.classList.add("is-wrong");
  window.clearTimeout(key.__ntErrorTimer);
  key.__ntErrorTimer = window.setTimeout(() => {
    key.classList.remove("is-wrong");
    key.__ntErrorTimer = undefined;
  }, ERROR_HIGHLIGHT_MS);
}

export function refreshKeyboardLayout(board, { layout, preferences }) {
  const options = board instanceof HTMLElement ? board.__ntKeyboardOptions || {} : {};
  // Chỉ đổi tuỳ chọn (cỡ chữ, kiểu bàn phím…) thì không có layout mới: dựng lại trên layout cũ.
  layout ||= options.layout;
  if (!(board instanceof HTMLElement) || !layout) return board;
  const next = createKeyboard({ ...options, layout, preferences, activeKey: options.activeKey });
  board.__ntHands?.destroy();
  board.className = next.className;
  board.dataset.physicalStandard = next.dataset.physicalStandard;
  board.style.setProperty("--nt-keyboard-units", next.style.getPropertyValue("--nt-keyboard-units"));
  board.replaceChildren(...Array.from(next.childNodes));
  board.__ntKeyboardLayout = next.__ntKeyboardLayout;
  board.__ntKeyboardOptions = next.__ntKeyboardOptions;
  board.__ntInputMethodId = next.__ntInputMethodId;
  board.__ntHands = next.__ntHands;
  // `replaceChildren` moves the rebuilt key elements onto this board, so the index
  // built against them stays valid; the old active set points at discarded nodes.
  board.__ntKeyboardIndex = next.__ntKeyboardIndex;
  board.__ntActiveKeys = next.__ntActiveKeys;
  board.dataset.finger = next.dataset.finger;
  return board;
}

// 104 hay 105 phím. Bố cục ISO (xem tooling/data/add-iso-key.js) mang sẵn ô IntlBackslash cạnh Shift
// trái; `keyboardShape` cho người học nói bàn phím THẬT của họ là kiểu nào:
//   'auto' — theo bố cục (mặc định);
//   'ansi' — bỏ ô đó đi, Shift trái dài lại như bàn phím Mỹ;
//   'iso'  — thêm ô đó vào bố cục vốn vẽ theo kiểu Mỹ. Windows in ra \ | ở đó với bố cục US,
//            nên ô mới là bản sao phím Backslash, giao cho ngón út trái.
// Dữ liệu bố cục không bị sửa: đây là bản sao chỉ dùng để vẽ.
const ISO_KEY_WIDTH = 45;
export function shapedLayout(layout, shape = "auto") {
  if (!layout?.structure || layout.type === "keypad" || shape === "auto" || !shape) return layout;
  const row = layout.structure.findIndex((keys) => keys.some((key) => key.hardware === "ShiftLeft"));
  if (row < 0) return layout;
  const keys = layout.structure[row];
  const has = keys.some((key) => key.hardware === "IntlBackslash");
  const shiftAt = keys.findIndex((key) => key.hardware === "ShiftLeft");
  const shift = keys[shiftAt];
  let next = null;
  if (shape === "ansi" && has) {
    next = keys.filter((key) => key.hardware !== "IntlBackslash")
      .map((key) => (key === shift ? { ...key, width: String(Number(key.width || 63) + ISO_KEY_WIDTH) } : key));
  } else if (shape === "iso" && !has) {
    const backslash = layout.structure.flat().find((key) => key.hardware === "Backslash");
    if (!backslash) return layout;
    next = [...keys];
    next[shiftAt] = { ...shift, width: String(Number(shift.width || 108) - ISO_KEY_WIDTH) };
    next.splice(shiftAt + 1, 0, { main: backslash.main, shifted: backslash.shifted, finger: 1, hardware: "IntlBackslash" });
  }
  if (!next) return layout;
  const structure = layout.structure.map((keys, index) => (index === row ? next : keys));
  // keyboard-geometry.js đọc kiểu bàn phím vật lý từ dữ liệu khi có: bản sao đã đổi hàng dưới
  // thì cũng phải đổi theo, nếu không nó vẫn vẽ ô ISO dù ô đó đã bị bỏ.
  const physicalStandard = shape === "ansi" ? "ansi-104" : "iso-105";
  return {
    ...layout,
    structure,
    physicalStandard,
    ...(layout.geometry ? { geometry: { ...layout.geometry, physicalStandard } } : {})
  };
}

export function createKeyboard({ activeKey, preferences, layout: sourceLayout, falling = false, onSettings }) {
  const layout = shapedLayout(sourceLayout, preferences?.keyboardShape);
  const board = element("div", "nt-player-keyboard keyboard keyboard--a keyboard--c keyboard--full keyboard--hands");
  const isKeypad = layout?.type === "keypad";
  // JIS has a fifteenth key on its number row. It needs a correspondingly wider
  // board to preserve physical key proportions instead of compressing the caps.
  const geometry = keyboardGeometry(layout);
  const isJis = geometry.standard.startsWith("jis-");
  board.classList.add("keyboard--physical");
  board.dataset.physicalStandard = geometry.standard;
  board.style.setProperty("--nt-keyboard-units", String(geometry.units));
  const hasNativeScriptLegends = usesNativeScriptLegends(layout);
  board.classList.toggle("keyboard--numpad", isKeypad);
  board.classList.toggle("keyboard--jis", isJis);
  board.classList.toggle("keyboard--native-script", hasNativeScriptLegends);
  board.classList.toggle("is-falling", falling);
  board.classList.toggle("keyboard--hasSettings", !isKeypad);
  board.__ntKeyboardLayout = layout;
  // Vietnamese Telex and VNI type the same letters with different keys.
  board.__ntInputMethodId = preferences?.inputMethodId || "";
  board.__ntKeyboardOptions = { activeKey, preferences, layout: sourceLayout, falling, onSettings };
  board.setAttribute("aria-label", t(isKeypad ? "player.onScreenNumberPad" : "player.onScreenKeyboard"));
  // A physical board is never mirrored: Tab stays on the left in Arabic, Persian and Urdu too.
  // Without this the rows inherited the page's `dir="rtl"` and ran right to left.
  board.dir = "ltr";
  if (!isKeypad) appendSettings(board, onSettings);
  const modeNotice = element('span', 'keyboard-mode-notice');
  modeNotice.hidden = true;
  board.append(modeNotice);
  if (falling) board.append(element("div", "keyboard-overlay"));
  for (const rowData of geometry.rows) {
    const row = element("div", "keyboard-row");
    for (const position of rowData) {
      if (position.slot) continue; // tall Enter occupies this pitch on the row above.
      const { entry, index, x, widthU } = position;
      const key = element("div", classForKey(printedEntry(entry)));
      key.dataset.entry = String(index);
      // Ngón của phím theo đúng dữ liệu layout — landing.css tô màu lưới bàn phím theo nó.
      if (Number.isFinite(Number(entry.finger))) key.dataset.finger = String(Number(entry.finger));
      key.dataset.hardware = entry.hardware || "";
      key.dataset.widthU = String(widthU);
      key.dataset.xU = String(x);
      key.dataset.values = [keyValue(entry.main), keyValue(entry.shifted), keyValue(entry.alt), entry.hardware === "Space" ? " " : ""].filter(Boolean).join("\u0001");
      key.style.gridColumn = `${Math.round(x * 4) + 1} / span ${Math.round(widthU * 4)}`;
      if (position.spacer) {
        key.classList.add("key--physical-spacer");
        key.setAttribute("aria-hidden", "true");
      }
      if (position.heightU === 2) key.classList.add("key--tall");
      if (position.tallEnter) {
        key.classList.add("key--iso-enter");
        key.style.setProperty("--nt-iso-enter-overhang", String((1.5 - widthU) / widthU));
      }
      appendLabel(key, printedEntry(entry), preferences.letterCase);
      row.append(key);
    }
    board.append(row);
  }
  board.__ntKeyboardIndex = buildKeyboardIndex(board, layout);
  if (!isKeypad) appendFallbackHands(board, layout, preferences);
  applyKeyboardPreferences(board, preferences);
  setKeyboardState(board, activeKey);
  return board;
}

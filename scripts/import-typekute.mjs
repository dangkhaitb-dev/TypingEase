/* scripts/import-typekute.mjs — nhập giáo trình của typekute vào TypingEase.
 *
 * Chạy (từ thư mục gốc project):
 *   node scripts/import-typekute.mjs                     → nhập mọi khoá trong PACKS
 *   node scripts/import-typekute.mjs --course vi         → chỉ một khoá
 *   node scripts/import-typekute.mjs --src <thư mục>     → nguồn khác (mặc định bên dưới)
 *   Mỗi lần chạy tự làm tiếp hai bước sau (bỏ được bằng --no-pages):
 *     node bai-hoc/generate.mjs --lang <course>   → trang lộ trình tĩnh (tên bài cho SEO)
 *     node scripts/stamp-data.mjs                 → băm URL bài học + thẻ <script> của chỉ mục
 *
 * NGUỒN là bản ĐÃ BIÊN DỊCH của typekute (`dist/curriculum`, sinh bởi `npm run build` bên đó),
 * không phải `content/packs`: bản biên dịch đã gộp nội dung map vào từng
 * `lessons/<id>.player.json`, đúng thứ trình duyệt typekute tải. Mỗi pack đi qua manifest
 * `manifests/<pack>.json` → `catalogUrl` (cây khoá học) + `lessons[id].playerPayloadUrl`.
 *
 * ĐÍCH giữ nguyên hợp đồng dữ liệu của TypingEase (PLAN.md §C3/§C4) để player, trang lộ trình,
 * huy hiệu và trang tiến độ không phải đổi: `data/curriculum.<course>.js` (chỉ mục, nạp bằng
 * <script>) + `data/lessons/<course>/<id>.json` (một bài một file, tải bằng data-cache.js).
 *
 * Ánh xạ:
 *   khoá typekute (course, `unit_id`)  → unit `u<n>`
 *   `group` của bài                      → group `g<n>` trong unit
 *   bài "Jump ahead" của khoá            → bài cuối unit, `kind: 'jump'` (xong là mở unit sau)
 *   screen `block`                       → `block` (giữ `newKey`)
 *   screen `standard`                    → `standard`
 *   nội dung nhiều dòng                  → `linebreak: 'enter'` (typekute đòi Enter thật ở cuối dòng)
 *
 * Chế độ gõ (`inputMode`) suy theo từng screen từ chữ cần gõ:
 *   vi     có dấu   → 'telex'   (telex-match.js)
 *   ko     Hangul   → 'hangul'  (hangul-match.js)
 *   ja, zh có chữ không-ASCII → 'ime'      (player chấm theo compositionend)
 *   zh-tw  chỉ ký hiệu chú âm → 'position' (gõ theo vị trí phím, tắt bộ gõ)
 *   zh-tw  có chữ Hán         → 'ime'
 *   còn lại                   → 'ascii'   (so ký tự trực tiếp — mọi bảng chữ gõ thẳng)
 *
 * Tiến độ: khoá nhập có id bài khác hẳn (vi-01-001 thay cho u1-l01), nên kho tiến độ và huy
 * hiệu sang khoá mới (`-v4` / `-v2`). Kho cũ KHÔNG bị xoá (DECISIONS.md §5).
 *
 * Các khoá họ bàn phím (dvorak, bépo, neo…) và tiếng Hebrew typekute không có — không đụng tới.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const arg = name => (args.indexOf(name) >= 0 ? args[args.indexOf(name) + 1] : null);
const SRC = path.resolve(arg('--src') || path.join(ROOT, '..', 'typing', 'typekute', 'dist', 'curriculum'));
const I18N = path.resolve(SRC, '..', 'i18n');

// khoá TypingEase → pack typekute. `pt` lấy pack Brazil (`br`): typekute không có pt-PT.
const PACKS = {
  ar: 'ar', bn: 'bn', de: 'de', en: 'en', es: 'es', fa: 'fa', fil: 'fil', fr: 'fr', hi: 'hi',
  id: 'id', it: 'it', ja: 'ja', ko: 'ko', ms: 'ms', nl: 'nl', pl: 'pl', pt: 'br', ru: 'ru',
  sw: 'sw', th: 'th', tr: 'tr', uk: 'uk', ur: 'ur', vi: 'vi', zh: 'zh', 'zh-tw': 'zh-tw'
};
const only = arg('--course');
if (only && !PACKS[only]) throw new Error(`không có khoá ${only} trong PACKS`);

const PROGRESS_VERSION = 'v4';
const BADGES_VERSION = 'v2';

const readJson = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const stripQuery = url => String(url).split('?')[0].replace(/^\/curriculum\//, '');
const fromSrc = url => path.join(SRC, stripQuery(url));

// Chỉ mục cũ: giữ những gì thuộc về TypingEase chứ không thuộc về nội dung — bố cục bàn phím,
// hướng chữ, câu gợi ý của ô "gõ thử" ở trang chủ.
function oldCurriculum(code) {
  const file = path.join(ROOT, 'data', `curriculum.${code}.js`);
  if (!fs.existsSync(file)) return {};
  const scope = {};
  new Function('window', fs.readFileSync(file, 'utf8'))(scope);
  return scope.TypingEaseCurriculum || {};
}

function jumpTitle(pack) {
  try { return readJson(path.join(I18N, pack, 'bundle.json'))['course-view']?.jumpTitle || 'Jump ahead'; }
  catch { return 'Jump ahead'; }
}

/* ---------- chế độ gõ ---------- */
const NON_ASCII = /[^\x00-\x7F]/;
const HANGUL = /[ᄀ-ᇿ㄰-㆏가-힯]/;
const ZHUYIN_ONLY = /^[㄀-ㄯㆠ-ㆿˊˇˋ˙\x00-\x7F\s]*$/;

function screenMode(code, text) {
  if (code === 'vi') return NON_ASCII.test(text) ? 'telex' : 'ascii';
  if (code === 'ko') return HANGUL.test(text) ? 'hangul' : 'ascii';
  if (code === 'ja' || code === 'zh') return NON_ASCII.test(text) ? 'ime' : 'ascii';
  if (code === 'zh-tw') return !NON_ASCII.test(text) ? 'ascii' : ZHUYIN_ONLY.test(text) ? 'position' : 'ime';
  return 'ascii';
}
// Một bài mang chế độ "nặng" nhất trong các screen của nó (badges.js đếm bài telex theo trường này).
const MODE_RANK = ['ascii', 'position', 'hangul', 'telex', 'ime'];
const lessonMode = modes => modes.reduce((best, mode) => (MODE_RANK.indexOf(mode) > MODE_RANK.indexOf(best) ? mode : best), 'ascii');

/* ---------- phím ---------- */
const keyToken = key => {
  const value = String(key ?? '');
  if (!value) return '';
  const lower = value.toLowerCase();
  if (lower === 'space') return ' ';
  if (['shift', 'enter', 'tab', 'backspace'].includes(lower)) return lower;
  return value;
};

/* ---------- chuyển một bài ---------- */
// typekute src/activities/typing-shared.js formatSourceContent: profile `latin-direct-v1` (en, id,
// ms, sw) là profile "legacy" và nội dung của nó được định dạng lại trước khi gõ —
//   ngoặc cong → thẳng, `↵` là phím Enter (hiện ⏎), xuống dòng thường gõ bằng DẤU CÁCH,
//   bài block bỏ hết xuống dòng và thêm phím mới vào đầu nếu chưa có, khoảng trắng thừa bị gộp.
// Mọi profile khác giữ nguyên chữ (NFC) và mỗi `\n` là một lần bấm Enter thật.
const NAMED_DISCOVERY = new Set([' ', 'shift', 'enter', 'capslock', 'altgr', 'tab', 'backspace']);

function periodSpacing(content, configuredSpaces) {
  const spaces = Number(configuredSpaces || 1);
  if (spaces !== 1 && spaces !== 2) return content;
  const separator = spaces === 1 ? ' ' : '  ';
  return content
    .replace(/(\.|\?|!) +/g, `$1${separator}`)
    .replace(/(mrs\.|mr\.|sr\.|st\.|ms\.|\s\w\.|inc\.|lt\.|jr\.|dr\.|\sgt\.|ft\.|st\.|ave\.|rd\.|in\.|hrs\.|e\.g\.|ot\.|lol\.|ed\.|fl\.|off\.|ord\.|rt\.|rds\.|asstd\.|ea\.|ltd\.|ins\.|reg\.|c\.o\.d\.) /gi, '$1 ');
}

// → { content, linebreak } theo hợp đồng của TypingEase (buildTarget trong player.js).
function legacyContent(raw, type, newKey) {
  let formatted = String(raw ?? '')
    .trimEnd()
    .replace(/^ +/g, '')
    .replace(/\n+ +/g, '\n')
    .replace(/\r/g, '')
    .replace(/[’‘]/g, "'")
    .replace(/[”“]/g, '"')
    .replace(/↵/g, '⏎')
    .replace(/ /g, ' ')
    .replace(/\s+\n/g, '\n')
    .replace(/ {2,10}/g, ' ')
    .replace(/<+\/?bold>/g, '')
    .replace(/<+\/?italic>/g, '');
  if (type === 'block') {
    if (newKey && !NAMED_DISCOVERY.has(newKey.toLowerCase()) && !formatted.startsWith(newKey)) formatted = `${newKey}${formatted}`;
    return { content: formatted.replace(/\n|\r/g, ''), linebreak: null };
  }
  return { formatted, linebreak: null };
}

function legacyStandard(formatted, spaces) {
  let input = periodSpacing(formatted, spaces);
  input = input.replace(/⏎\n/g, '⏎');
  if (!/⏎[^\n]/.test(input)) input = input.replace(/⏎ +/g, '⏎');
  // ⏎ là Enter thật; mọi xuống dòng còn lại gõ bằng dấu cách.
  if (input.includes('⏎')) {
    return { content: input.replace(/\n/g, ' ').replace(/ ?⏎ ?/g, '\n').replace(/\n+$/, ''), linebreak: 'enter' };
  }
  return { content: input, linebreak: input.includes('\n') ? 'space' : null };
}

function convertScreen(code, raw) {
  const type = raw.screen_type === 'block' ? 'block' : 'standard';
  const key = keyToken(raw.new_key);
  const legacy = raw.inputProfileId === 'latin-direct-v1';
  let content, linebreak;
  if (legacy && type === 'block') ({ content } = legacyContent(raw.content, type, key));
  else if (legacy) ({ content, linebreak } = legacyStandard(legacyContent(raw.content, type, key).formatted, raw.settings?.spaces));
  else {
    // typekute normalizeInput: chữ cần gõ ở dạng NFC — player cũng đưa chữ gõ vào về NFC.
    content = String(raw.content ?? '').replace(/\r\n?/g, '\n').normalize('NFC');
    linebreak = content.includes('\n') ? 'enter' : null;
  }
  const screen = { type };
  if (type === 'block' && key) screen.newKey = key;
  if (raw.intro) screen.text = String(raw.intro);
  screen.content = content;
  if (type === 'block') screen.dictation = 'letters';
  if (linebreak) screen.linebreak = linebreak;
  const mode = screenMode(code, content);
  if (mode !== 'ascii') screen.inputMode = mode;
  return screen;
}

function estMinutes(screens) {
  // ~15 WPM cho người đang học, cộng nửa phút đọc hướng dẫn mỗi screen.
  const characters = screens.reduce((sum, screen) => sum + [...(screen.content || '')].length, 0);
  return Math.max(2, Math.round(characters / 5 / 15 + screens.length * 0.5));
}

/* ---------- một khoá ---------- */
function importCourse(code) {
  const pack = PACKS[code];
  const manifestFile = path.join(SRC, 'manifests', `${pack}.json`);
  if (!fs.existsSync(manifestFile)) throw new Error(`thiếu ${manifestFile} — chạy \`npm run build\` trong typekute trước`);
  const manifest = readJson(manifestFile).locales[pack];
  const catalog = readJson(fromSrc(manifest.catalogUrl));
  const aliases = manifest.lessonAliases || {};
  const old = oldCurriculum(code);
  const jumpName = jumpTitle(pack);

  const lessonId = entry => {
    const slug = entry?.settings?.slug;
    if (slug && manifest.lessons[slug]) return slug;
    const id = String(entry?.lesson_id ?? '');
    if (manifest.lessons[id]) return id;
    if (aliases[id] && manifest.lessons[aliases[id]]) return aliases[id];
    return null;
  };

  const units = [];
  const index = {};
  const sequence = [];
  const files = new Map();
  const taught = [];
  let order = 0;
  const missing = [];

  const courses = [...(catalog.courses || [])].sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0));
  courses.forEach((course, courseAt) => {
    const unitId = `u${courseAt + 1}`;
    const groupNames = Array.isArray(course.groups) ? [...course.groups] : [];
    const groups = new Map(groupNames.map((name, at) => [name, { id: `g${at + 1}`, title: name, lessons: [] }]));
    const entries = [...(course.lessons || [])].sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0))
      .map(entry => ({ entry, kind: entry.kind === 'jump' ? 'jump' : '' }));
    if (course.jumpLesson) entries.push({ entry: course.jumpLesson, kind: 'jump' });

    for (const { entry, kind } of entries) {
      const id = lessonId(entry);
      if (!id) { missing.push(entry?.settings?.slug || entry?.lesson_id); continue; }
      const payload = readJson(fromSrc(manifest.lessons[id].playerPayloadUrl));
      const screens = (payload.screens || [])
        .slice().sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0))
        .map(screen => convertScreen(code, screen))
        .filter(screen => screen.content.trim());
      if (!screens.length) { missing.push(id); continue; }

      const newKeys = [...new Set(screens.filter(screen => screen.type === 'block' && screen.newKey).map(screen => screen.newKey))];
      newKeys.forEach(key => { if (!taught.includes(key)) taught.push(key); });
      const modes = screens.map(screen => screen.inputMode || 'ascii');
      const inputMode = lessonMode(modes);
      const isJump = kind === 'jump';
      const title = isJump ? jumpName : String(payload.title || entry.name || id);
      const groupName = isJump ? jumpName : (entry.group || groupNames[0] || '');
      if (!groups.has(groupName)) groups.set(groupName, { id: `g${groups.size + 1}`, title: groupName, lessons: [] });
      groups.get(groupName).lessons.push(id);
      order += 1;   // tạm theo display_order; đánh lại theo thứ tự group ở dưới

      const lesson = {
        id, unit: unitId, group: groups.get(groupName).id, order, slug: id,
        title,
        summary: String(payload.lessonSpec?.objective || ''),
        newKeys,
        keysSoFar: [...taught],
        // DECISIONS.md bổ sung 4: 70% cho bốn bài đầu, 80% sau đó.
        minAccuracy: order <= 4 ? 70 : 80,
        estMinutes: estMinutes(screens),
        inputMode,
        intro: String(payload.lessonSpec?.objective || screens[0]?.text || ''),
        congrats: '',
        kind: isJump ? 'jump' : newKeys.length ? 'keys' : 'review',
        source: { product: 'typekute', pack, lesson: id, revision: payload.playerPack?.id || '' },
        screens
      };
      files.set(id, lesson);
      index[id] = {
        title, newKeys, screens: screens.length, estMinutes: lesson.estMinutes,
        kind: lesson.kind, inputMode, ready: true
      };
    }

    // Thứ tự học = thứ tự units → groups → lessons (player và validator đòi `sequence` khớp nó).
    // typekute có khoá xếp bài xen kẽ giữa các group, nên đánh số lại ở đây chứ không theo display_order.
    const unitGroups = [...groups.values()].filter(group => group.lessons.length);
    if (!unitGroups.length) return;
    for (const id of unitGroups.flatMap(group => group.lessons)) {
      sequence.push(id);
      files.get(id).order = sequence.length;
      files.get(id).minAccuracy = sequence.length <= 4 ? 70 : 80;
    }
    const previous = units[units.length - 1];
    units.push({
      id: unitId,
      index: units.length + 1,
      title: String(course.name || unitId),
      summary: String(course.description || ''),
      minAccuracy: 80,
      // Khoá mềm như trước: unit 1 mở sẵn, các unit sau mở khi xong unit trước (hoặc bài "học vượt").
      locked: Boolean(previous),
      unlockAfter: previous ? previous.groups.flatMap(group => group.lessons).filter(id => index[id].kind !== 'jump').pop() || null : null,
      groups: unitGroups
    });
  });

  // Ô "gõ thử" của trang chủ: screen đầu tiên có chữ của bài đầu tiên, một dòng.
  const first = files.get(sequence[0]);
  const starterAt = Math.max(0, first.screens.findIndex(screen => screen.type === 'block'));
  const starterText = first.screens[starterAt].content.split('\n')[0].split(/\s+/).slice(0, 6).join(' ');

  return {
    code, pack, old, units, index, sequence, files, missing,
    revision: catalog.version || '',
    starter: { lessonId: first.id, screen: starterAt + 1, content: starterText, hint: old.starter?.hint || '' },
    features: code === 'vi' ? ['telex'] : code === 'ko' ? ['hangul'] : ['ja', 'zh', 'zh-tw'].includes(code) ? ['ime'] : []
  };
}

/* ---------- ghi file ---------- */
const q = value => JSON.stringify(value);

function curriculumSource(result) {
  const { code, pack, old, units, index, sequence, starter, features, revision } = result;
  const lang = code === 'zh-tw' ? 'zh-tw' : code.split('-')[0];
  const unitBlocks = units.map(unit => `    {
      id: ${q(unit.id)},
      index: ${unit.index},
      title: ${q(unit.title)},
      summary: ${q(unit.summary)},
      minAccuracy: ${unit.minAccuracy},
      locked: ${unit.locked},
      unlockAfter: ${q(unit.unlockAfter)},
      groups: [
${unit.groups.map(group => `        { id: ${q(group.id)}, title: ${q(group.title)}, lessons: ${q(group.lessons)} }`).join(',\n')}
      ]
    }`);
  const lessonLines = sequence.map(id => `    ${q(id)}: ${q(index[id])}`);
  return `/* data/curriculum.${code}.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: typekute, pack \`${pack}\` (${revision}), qua scripts/import-typekute.mjs.
   Chạy lại:  node scripts/import-typekute.mjs --course ${code} && node scripts/stamp-data.mjs

   Nạp bằng <script src="/data/curriculum.${code}.js?v=…">, KHÔNG fetch: progress-store.js và
   badges.js đọc progressKey/badgesKey ngay khi chạy. Đây là "gốc" của chuỗi băm — khối
   \`lessonUrls\` ở cuối file (do stamp-data.mjs viết) mang URL đã băm của từng bài, và
   data-cache.js chỉ lưu một bài vào Cache API khi SHA-256 của nó khớp mã băm đó.
*/
window.TypingEaseCurriculum = {
  lang: ${q(lang)},
  course: ${q(code)},${old.dir === 'rtl' ? `
  dir: 'rtl',` : ''}
  keyboardId: ${q(old.keyboardId ?? 1)},
  layouts: ${q(old.layouts || [old.keyboardId ?? 1])},
  progressKey: ${q(code === 'vi' ? `typingease-progress-${PROGRESS_VERSION}` : `typingease-progress-${code}-${PROGRESS_VERSION}`)},
  badgesKey: ${q(code === 'vi' ? `typingease-badges-${BADGES_VERSION}` : `typingease-badges-${code}-${BADGES_VERSION}`)},
  features: ${q(features)},
  source: { product: 'typekute', pack: ${q(pack)}, revision: ${q(revision)} },

  units: [
${unitBlocks.join(',\n')}
  ],

  lessons: {
${lessonLines.join(',\n')}
  },

  sequence: ${q(sequence)},

  starter: {
    lessonId: ${q(starter.lessonId)},
    screen: ${starter.screen},
    content: ${q(starter.content)},
    hint: ${q(starter.hint)}
  }
};
`;
}

function write(result) {
  const dir = path.join(ROOT, 'data', 'lessons', result.code);
  fs.mkdirSync(dir, { recursive: true });
  // Bài cũ (u1-l01…) không còn trong chỉ mục: xoá, để thư mục chỉ chứa đúng những gì được băm.
  for (const name of fs.readdirSync(dir)) if (name.endsWith('.json')) fs.rmSync(path.join(dir, name));
  for (const [id, lesson] of result.files)
    fs.writeFileSync(path.join(dir, `${id}.json`), `${JSON.stringify(lesson, null, 2)}\n`);
  fs.writeFileSync(path.join(ROOT, 'data', `curriculum.${result.code}.js`), curriculumSource(result));
}

/* ---------- languages.js: số bài / số unit ---------- */
function updateLanguages(results) {
  const file = path.join(ROOT, 'data', 'languages.js');
  let source = fs.readFileSync(file, 'utf8');
  for (const result of results) {
    const lessons = result.sequence.length, units = result.units.length;
    const id = result.code.replace(/[-]/g, '\\-');
    // course: { …, lessons: N, units: M } của mục ngôn ngữ, và { id: 'xx', lessons: N, units: M, … } của họ mặc định.
    const entry = new RegExp(`(code: '${id}'[\\s\\S]*?course: \\{[^}]*?lessons: )\\d+(, units: )\\d+`);
    source = source.replace(entry, `$1${lessons}$2${units}`);
    source = source.replace(new RegExp(`(\\{ id: '${id}', lessons: )\\d+(, units: )\\d+`), `$1${lessons}$2${units}`);
  }
  fs.writeFileSync(file, source);
}

/* ---------- chạy ---------- */
const codes = only ? [only] : Object.keys(PACKS);
const results = [];
for (const code of codes) {
  const result = importCourse(code);
  write(result);
  results.push(result);
  const screens = [...result.files.values()].reduce((sum, lesson) => sum + lesson.screens.length, 0);
  console.log(`${code.padEnd(6)} ← ${result.pack.padEnd(6)} ${String(result.units.length).padStart(2)} unit, ${String(result.sequence.length).padStart(3)} bài, ${String(screens).padStart(4)} screen`
    + (result.missing.length ? `  (bỏ qua ${result.missing.length}: ${result.missing.slice(0, 4).join(', ')}…)` : ''));
}
updateLanguages(results);

const run = (script, ...rest) => {
  const result = spawnSync(process.execPath, [path.join(ROOT, script), ...rest], { cwd: ROOT, encoding: 'utf8' });
  if (result.status !== 0) throw new Error(`${script} ${rest.join(' ')}:\n${result.stderr || result.stdout}`);
  return result.stdout.trim();
};
if (!args.includes('--no-pages')) {
  for (const result of results) run('bai-hoc/generate.mjs', '--lang', result.code);
  console.log(`\nĐã sinh lại ${results.length} trang lộ trình.`);
  console.log(run('scripts/stamp-data.mjs'));
} else {
  console.log('\nNhớ chạy: node bai-hoc/generate.mjs --lang <course> && node scripts/stamp-data.mjs');
}

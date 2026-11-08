// Gộp dữ liệu localStorage của hai nơi (thiết bị này và tài khoản) — docs/PLAN-dang-nhap.md mục 5.
//
// Chỉ chạy khi CẢ HAI phía cùng đổi một khoá kể từ lần đồng bộ trước (hoặc lần đầu đăng nhập trên máy
// đang có dữ liệu khách). Phía nào chưa đổi thì account-sync.js lấy nguyên phía kia, không gộp — nhờ đó
// "xoá tiến độ" ở /tien-do/ vẫn lan sang máy khác thay vì bị gộp ngược trở lại.
//
// Mọi hàm gộp phải IDEMPOTENT: gộp(a, gộp(a, b)) === gộp(a, b). Vì vậy bộ đếm (phím sai, số lần gõ
// trúng/trượt) lấy bản lớn hơn chứ không cộng — cộng là mỗi lần đồng bộ lại nhân đôi.
//
// Vào/ra là CHUỖI thô đúng như trong localStorage. File thuần, không đụng tới window: test bằng Node
// (tooling/test/test-sync-merge.mjs).

const isObject = value => Boolean(value) && typeof value === 'object' && !Array.isArray(value);
const parse = raw => { try { return JSON.parse(raw); } catch { return undefined; } };
const num = value => (Number.isFinite(Number(value)) ? Number(value) : 0);
const maxOf = (a, b) => Math.max(num(a), num(b));

// --- tiến độ giáo trình (progress-store.js) ---------------------------------------------------------
// { version, current: { lessonId, screen }, lessons: { id: { screens: { i: {stars, maxStars, wpm,
//   accuracy, seconds, type, at} }, stars, maxStars, bestWpm, bestAccuracy, seconds, attempts,
//   completedAt } }, unlocked: [], legacyCompleted, migratedAt }

function betterScreen(a, b) {
  if (!isObject(a)) return b;
  if (!isObject(b)) return a;
  const winner = num(a.stars) !== num(b.stars) ? (num(a.stars) > num(b.stars) ? a : b) : (num(a.at) >= num(b.at) ? a : b);
  return { ...winner, maxStars: maxOf(a.maxStars, b.maxStars) };
}

function mergeLesson(a, b) {
  if (!isObject(a)) return b;
  if (!isObject(b)) return a;
  const screens = {};
  const sa = isObject(a.screens) ? a.screens : {}, sb = isObject(b.screens) ? b.screens : {};
  for (const index of new Set([...Object.keys(sa), ...Object.keys(sb)])) screens[index] = betterScreen(sa[index], sb[index]);
  const list = Object.values(screens);
  const completed = [a.completedAt, b.completedAt].filter(value => num(value) > 0).map(Number);
  return {
    ...b, ...a,
    screens,
    stars: list.length ? list.reduce((total, screen) => total + num(screen.stars), 0) : maxOf(a.stars, b.stars),
    maxStars: list.length ? list.reduce((total, screen) => total + num(screen.maxStars), 0) : maxOf(a.maxStars, b.maxStars),
    bestWpm: maxOf(a.bestWpm, b.bestWpm),
    bestAccuracy: maxOf(a.bestAccuracy, b.bestAccuracy),
    seconds: maxOf(a.seconds, b.seconds),
    attempts: maxOf(a.attempts, b.attempts),
    completedAt: completed.length ? Math.max(...completed) : null
  };
}

// Lần gõ gần nhất của một kho: màn nào có `at` lớn nhất. Dùng để chọn "bài đang học" (`current`) của
// phía vừa học gần đây hơn — current tự nó không mang mốc thời gian.
const lastActivity = state => Object.values(isObject(state.lessons) ? state.lessons : {})
  .flatMap(lesson => Object.values(isObject(lesson?.screens) ? lesson.screens : {}))
  .reduce((latest, screen) => Math.max(latest, num(screen?.at)), 0);

export function mergeProgress(a, b) {
  const lessons = {};
  const la = isObject(a.lessons) ? a.lessons : {}, lb = isObject(b.lessons) ? b.lessons : {};
  for (const id of new Set([...Object.keys(la), ...Object.keys(lb)])) lessons[id] = mergeLesson(la[id], lb[id]);
  const [recent, older] = lastActivity(a) >= lastActivity(b) ? [a, b] : [b, a];
  const migrated = [a.migratedAt, b.migratedAt].filter(value => num(value) > 0).map(Number);
  return {
    ...b, ...a,
    current: recent.current || older.current || null,
    lessons,
    unlocked: [...new Set([...(Array.isArray(a.unlocked) ? a.unlocked : []), ...(Array.isArray(b.unlocked) ? b.unlocked : [])])],
    legacyCompleted: maxOf(a.legacyCompleted, b.legacyCompleted),
    migratedAt: migrated.length ? Math.min(...migrated) : null
  };
}

// --- hồ sơ kỹ năng (profile.js): { attempts: [...], keys: { k: {hits, misses, ms, samples} } } -------
const PROFILE_MAX_ATTEMPTS = 120;

export function mergeProfile(a, b) {
  const seen = new Map();
  for (const attempt of [...(Array.isArray(b.attempts) ? b.attempts : []), ...(Array.isArray(a.attempts) ? a.attempts : [])])
    if (isObject(attempt)) seen.set(`${attempt.at}|${attempt.kind}|${attempt.lesson}|${attempt.wpm}|${attempt.accuracy}`, attempt);
  const attempts = [...seen.values()].sort((x, y) => num(x.at) - num(y.at)).slice(-PROFILE_MAX_ATTEMPTS);
  const keys = {};
  const ka = isObject(a.keys) ? a.keys : {}, kb = isObject(b.keys) ? b.keys : {};
  const volume = stats => num(stats?.hits) + num(stats?.misses);
  for (const key of new Set([...Object.keys(ka), ...Object.keys(kb)]))
    keys[key] = volume(ka[key]) >= volume(kb[key]) ? (ka[key] || kb[key]) : kb[key];
  return { ...b, ...a, attempts, keys };
}

// --- bảng số: phím sai (weak-keys), điểm cao trò chơi — lấy số lớn hơn ------------------------------
export function mergeMaxMap(a, b) {
  const out = { ...b, ...a };
  for (const key of Object.keys(out)) {
    const x = a[key], y = b[key];
    if (Number.isFinite(Number(x)) && Number.isFinite(Number(y)) && x !== null && y !== null) out[key] = Math.max(Number(x), Number(y));
  }
  return out;
}

// --- huy hiệu (badges.js): { id: mốc mở khoá lần đầu } — giữ mốc sớm hơn ------------------------------
export function mergeBadges(a, b) {
  const out = { ...b, ...a };
  for (const id of Object.keys(out)) {
    const times = [a[id], b[id]].filter(value => num(value) > 0).map(Number);
    if (times.length) out[id] = Math.min(...times);
  }
  return out;
}

// --- mục tiêu ngày (progress-store.js / progress-page.js) ----------------------------------------------
// { goalMinutes, days: { 'YYYY-MM-DD': { practiceSeconds, goalCompleted } }, currentStreak, bestStreak,
//   lastCompletedDate }. Chuỗi ngày được TÍNH LẠI từ các ngày đã gộp, không lấy số của phía nào.
const dayBefore = key => {
  const [year, month, day] = key.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day - 1)).toISOString().slice(0, 10);
};

export function mergeDaily(a, b, { prefer = 'local' } = {}) {
  const days = {};
  const da = isObject(a.days) ? a.days : {}, db = isObject(b.days) ? b.days : {};
  for (const key of new Set([...Object.keys(da), ...Object.keys(db)])) {
    const x = isObject(da[key]) ? da[key] : {}, y = isObject(db[key]) ? db[key] : {};
    days[key] = { ...y, ...x, practiceSeconds: maxOf(x.practiceSeconds, y.practiceSeconds), goalCompleted: Boolean(x.goalCompleted || y.goalCompleted) };
  }
  const done = new Set(Object.keys(days).filter(key => /^\d{4}-\d{2}-\d{2}$/.test(key) && days[key].goalCompleted));
  const lastCompletedDate = [...done].sort().pop() || [a.lastCompletedDate, b.lastCompletedDate].filter(Boolean).sort().pop() || '';
  let currentStreak = 0;
  for (let key = lastCompletedDate; key && done.has(key); key = dayBefore(key)) currentStreak += 1;
  // Lịch sử ngày chỉ giữ 90 hôm: chuỗi đang chạy dài hơn thế thì giữ số đã đếm của mỗi phía.
  if (lastCompletedDate && lastCompletedDate === a.lastCompletedDate) currentStreak = Math.max(currentStreak, num(a.currentStreak));
  if (lastCompletedDate && lastCompletedDate === b.lastCompletedDate) currentStreak = Math.max(currentStreak, num(b.currentStreak));
  const preferred = prefer === 'remote' ? b : a;
  return {
    ...b, ...a,
    goalMinutes: preferred.goalMinutes ?? a.goalMinutes ?? b.goalMinutes,
    days,
    currentStreak,
    bestStreak: Math.max(num(a.bestStreak), num(b.bestStreak), currentStreak),
    lastCompletedDate
  };
}

// --- lịch sử bài test tốc độ (typing-test.js): mảng [{ duration, wpm, accuracy, …, timestamp }] -------
const TEST_HISTORY_MAX = 15;

export function mergeHistory(a, b) {
  const seen = new Map();
  for (const item of [...b, ...a]) if (isObject(item)) seen.set(item.timestamp ?? JSON.stringify(item), item);
  return [...seen.values()].sort((x, y) => num(x.timestamp) - num(y.timestamp)).slice(-TEST_HISTORY_MAX);
}

// --- bảng khoá được đồng bộ ------------------------------------------------------------------------
// kind: 'json-object' | 'json-array' (gộp bằng `merge`) hoặc 'setting' (không gộp được — lấy một phía:
// lần đầu đăng nhập lấy của tài khoản, về sau lấy của thiết bị vừa đổi).
// Không đồng bộ: đồng ý cookie (pháp lý, theo từng máy), bộ nhớ đệm dữ liệu bài, ghi chú "đã đọc" của
// player, trạng thái đăng nhập và chính sổ đồng bộ.
const RULES = [
  { test: key => /^typingease-progress-[a-z0-9-]+$/.test(key), kind: 'json-object', merge: mergeProgress },
  { test: key => key === 'typingease-profile-v1', kind: 'json-object', merge: mergeProfile },
  { test: key => key === 'typingease-weak-keys-v1', kind: 'json-object', merge: mergeMaxMap },
  { test: key => /^typingease-badges-[a-z0-9-]+$/.test(key), kind: 'json-object', merge: mergeBadges },
  { test: key => key === 'typingease-daily-goal-v1', kind: 'json-object', merge: mergeDaily },
  { test: key => /^typingease-speed-test-history(-[a-z0-9-]+)?-v1$/.test(key), kind: 'json-array', merge: mergeHistory },
  { test: key => /^typingease-games-[a-z0-9-]+-v1$/.test(key), kind: 'json-object', merge: mergeMaxMap },
  { test: key => ['typingease-sound-v1', 'typingease-keyboard-v1', 'typingease-language-v1'].includes(key)
      || /^typingease-test-course-[a-z0-9-]+-v1$/.test(key), kind: 'setting' }
];

const ruleFor = key => RULES.find(rule => rule.test(key)) || null;
export const isSyncedKey = key => typeof key === 'string' && key.length <= 80 && Boolean(ruleFor(key));

/**
 * Gộp hai bản của cùng một khoá.
 * @param {string} key khoá localStorage.
 * @param {string|null} local chuỗi thô trên thiết bị này (null = không có).
 * @param {string|null} remote chuỗi thô trên tài khoản (null hoặc '' = không có).
 * @param {{ prefer?: 'local' | 'remote' }} [options] phía thắng khi không gộp được (cài đặt, mục tiêu phút).
 * @returns {string|null} chuỗi để ghi lại vào localStorage.
 */
export function mergeRaw(key, local, remote, { prefer = 'local' } = {}) {
  if (local == null || local === '') return remote || null;
  if (remote == null || remote === '' || local === remote) return local;
  const rule = ruleFor(key);
  if (!rule || rule.kind === 'setting') return prefer === 'remote' ? remote : local;
  const a = parse(local), b = parse(remote);
  const valid = rule.kind === 'json-array' ? Array.isArray : isObject;
  if (!valid(a)) return valid(b) ? remote : local;
  if (!valid(b)) return local;
  return JSON.stringify(rule.merge(a, b, { prefer }));
}

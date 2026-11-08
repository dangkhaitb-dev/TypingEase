// Kiểm 11ty/client/sync-merge.js: các hàm gộp dữ liệu thiết bị ↔ tài khoản.
// Luật quan trọng nhất: gộp phải idempotent (đồng bộ lại bao nhiêu lần cũng không nhân đôi bộ đếm),
// và máy mới tinh đăng nhập vào phải thấy đúng bài đang học của tài khoản.

import assert from 'node:assert/strict';
import { isSyncedKey, mergeRaw } from '../../11ty/client/sync-merge.js';

let checks = 0;
const check = (label, fn) => { fn(); checks += 1; void label; };
const S = JSON.stringify;
const P = JSON.parse;
const idempotent = (key, a, b, options) => {
  const once = mergeRaw(key, a, b, options);
  assert.equal(mergeRaw(key, a, once, options), once, `${key}: merge(a, merge(a, b)) changed`);
  assert.equal(mergeRaw(key, once, b, options), once, `${key}: merge(merge(a, b), b) changed`);
  return P(once);
};

// --- khoá nào được đồng bộ --------------------------------------------------------------------------
check('synced keys', () => {
  for (const key of ['typingease-progress-v4', 'typingease-progress-en-v4', 'typingease-progress-fr-bepo-v1', 'typingease-profile-v1',
    'typingease-weak-keys-v1', 'typingease-badges-v1', 'typingease-badges-en-v2', 'typingease-daily-goal-v1',
    'typingease-speed-test-history-v1', 'typingease-speed-test-history-fr-v1', 'typingease-games-vi-v1',
    'typingease-sound-v1', 'typingease-keyboard-v1', 'typingease-language-v1', 'typingease-test-course-vi-v1'])
    assert.ok(isSyncedKey(key), key);
  for (const key of ['typingease-analytics-consent', 'typingease-account-v1', 'typingease-sync-v1', 'typingease.drift-reload',
    'typingease-player-mobile-note-v1', 'goxanh-lesson-records-v2', 'typingease:prefetch:x', null])
    assert.ok(!isSyncedKey(key), String(key));
});

// --- tiến độ: máy A học tới bài 5, máy B mới tinh -------------------------------------------------------
const screen = (stars, at, wpm = 30) => ({ stars, maxStars: 3, wpm, accuracy: 95, seconds: 20, type: 'standard', at });
const lessonsA = {};
for (let n = 1; n <= 4; n += 1) lessonsA[`u1-l0${n}`] = { screens: { 0: screen(3, 1000 + n), 1: screen(2, 1100 + n) }, stars: 5, maxStars: 6, bestWpm: 30, bestAccuracy: 95, seconds: 60, attempts: 1, completedAt: 2000 + n };
lessonsA['u1-l05'] = { screens: { 0: screen(1, 3000) }, stars: 1, maxStars: 3, bestWpm: 30, bestAccuracy: 95, seconds: 0, attempts: 0, completedAt: null };
const accountProgress = S({ version: 3, current: { lessonId: 'u1-l05', screen: 2 }, lessons: lessonsA, unlocked: ['u1', 'u2'], legacyCompleted: 0, migratedAt: 500 });
const blankDevice = S({ version: 3, current: null, lessons: {}, unlocked: ['u1'], legacyCompleted: 0, migratedAt: 9000 });

check('fresh device B picks up lesson 5', () => {
  const merged = idempotent('typingease-progress-v4', blankDevice, accountProgress, { prefer: 'remote' });
  assert.deepEqual(merged.current, { lessonId: 'u1-l05', screen: 2 });
  assert.equal(Object.keys(merged.lessons).length, 5);
  assert.equal(merged.lessons['u1-l03'].completedAt, 2003);
  assert.deepEqual(merged.unlocked.sort(), ['u1', 'u2']);
  assert.equal(merged.migratedAt, 500);
});

check('progress: best screen wins, totals recomputed, newest current kept', () => {
  const a = S({ current: { lessonId: 'u1-l02', screen: 1 }, lessons: { 'u1-l01': { screens: { 0: screen(1, 10, 50), 1: screen(3, 11) }, stars: 4, maxStars: 6, bestWpm: 50, bestAccuracy: 90, seconds: 30, attempts: 2, completedAt: 100 } }, unlocked: ['u1'] });
  const b = S({ current: { lessonId: 'u1-l07', screen: 4 }, lessons: { 'u1-l01': { screens: { 0: screen(3, 50, 20), 2: screen(2, 51) }, stars: 5, maxStars: 6, bestWpm: 20, bestAccuracy: 99, seconds: 40, attempts: 1, completedAt: 300 } }, unlocked: ['u1', 'u3'] });
  const merged = idempotent('typingease-progress-en-v4', a, b);
  const lesson = merged.lessons['u1-l01'];
  assert.equal(lesson.screens[0].stars, 3);
  assert.equal(lesson.screens[1].stars, 3);
  assert.equal(lesson.screens[2].stars, 2);
  assert.equal(lesson.stars, 8);
  assert.equal(lesson.maxStars, 9);
  assert.equal(lesson.bestWpm, 50);
  assert.equal(lesson.bestAccuracy, 99);
  assert.equal(lesson.attempts, 2);
  assert.equal(lesson.completedAt, 300);
  assert.deepEqual(merged.current, { lessonId: 'u1-l07', screen: 4 }, 'b practised more recently (at 51 > 11)');
  assert.deepEqual(merged.unlocked.sort(), ['u1', 'u3']);
});

// --- hồ sơ kỹ năng: gộp lượt gõ, không cộng bộ đếm ----------------------------------------------------
check('profile', () => {
  const attempt = (at, wpm) => ({ at, kind: 'lesson', lesson: 1, wpm, accuracy: 95, seconds: 20 });
  const a = S({ attempts: [attempt(1, 20), attempt(3, 30)], keys: { a: { hits: 90, misses: 10, ms: 100, samples: 5 }, b: { hits: 1, misses: 1, ms: 0, samples: 0 } } });
  const b = S({ attempts: [attempt(2, 25), attempt(3, 30)], keys: { a: { hits: 10, misses: 5, ms: 0, samples: 0 }, b: { hits: 40, misses: 2, ms: 0, samples: 0 }, c: { hits: 5, misses: 0, ms: 0, samples: 0 } } });
  const merged = idempotent('typingease-profile-v1', a, b);
  assert.deepEqual(merged.attempts.map(item => item.at), [1, 2, 3]);
  assert.equal(merged.keys.a.hits, 90, 'larger record kept, not summed');
  assert.equal(merged.keys.b.hits, 40);
  assert.ok(merged.keys.c);
  const many = S({ attempts: Array.from({ length: 200 }, (_, i) => attempt(i, 20)), keys: {} });
  assert.equal(P(mergeRaw('typingease-profile-v1', many, b)).attempts.length, 120);
});

check('weak keys and game bests take the larger number', () => {
  assert.deepEqual(idempotent('typingease-weak-keys-v1', S({ a: 5, s: 1 }), S({ a: 2, d: 7 })), { a: 5, s: 1, d: 7 });
  assert.deepEqual(idempotent('typingease-games-vi-v1', S({ rain: 120, race: 40 }), S({ rain: 200, keys: 9 })), { rain: 200, race: 40, keys: 9 });
});

check('badges keep the first unlock time', () => {
  assert.deepEqual(idempotent('typingease-badges-v1', S({ 'first-step': 500, 'stars-30': 900 }), S({ 'first-step': 100, 'streak-3': 700 })),
    { 'first-step': 100, 'stars-30': 900, 'streak-3': 700 });
});

// --- mục tiêu ngày: chuỗi tính lại từ các ngày đã gộp -------------------------------------------------
check('daily goal streak recomputed across devices', () => {
  const a = S({ goalMinutes: 15, days: { '2026-11-05': { practiceSeconds: 900, goalCompleted: true }, '2026-11-07': { practiceSeconds: 200, goalCompleted: false } }, currentStreak: 1, bestStreak: 1, lastCompletedDate: '2026-11-05' });
  const b = S({ goalMinutes: 10, days: { '2026-11-06': { practiceSeconds: 700, goalCompleted: true }, '2026-11-07': { practiceSeconds: 650, goalCompleted: true } }, currentStreak: 2, bestStreak: 2, lastCompletedDate: '2026-11-07' });
  const merged = idempotent('typingease-daily-goal-v1', a, b);
  assert.equal(merged.currentStreak, 3, '05 + 06 + 07');
  assert.equal(merged.bestStreak, 3);
  assert.equal(merged.lastCompletedDate, '2026-11-07');
  assert.equal(merged.days['2026-11-07'].practiceSeconds, 650);
  assert.equal(merged.goalMinutes, 15, 'local setting by default');
  assert.equal(P(mergeRaw('typingease-daily-goal-v1', a, b, { prefer: 'remote' })).goalMinutes, 10);
  // Tháng 3 → tháng 2 và qua năm: dayBefore không được lệch múi giờ.
  const edge = S({ days: { '2026-02-28': { goalCompleted: true }, '2026-03-01': { goalCompleted: true }, '2025-12-31': { goalCompleted: true }, '2026-01-01': { goalCompleted: true } }, lastCompletedDate: '2026-03-01' });
  assert.equal(P(mergeRaw('typingease-daily-goal-v1', edge, S({ days: {} }))).currentStreak, 2);
});

check('speed test history', () => {
  const run = (timestamp, wpm) => ({ duration: 60, wpm, accuracy: 96, errors: 1, consistency: 80, timestamp });
  const a = S([run(1, 40), run(3, 42)]);
  const b = S([run(2, 41), run(3, 42), ...Array.from({ length: 20 }, (_, i) => run(10 + i, 50))]);
  const merged = idempotent('typingease-speed-test-history-v1', a, b);
  assert.equal(merged.length, 15);
  assert.equal(merged.at(-1).timestamp, 29);
});

// --- cài đặt: không gộp, chọn một phía ------------------------------------------------------------------
check('settings pick a side', () => {
  assert.equal(mergeRaw('typingease-sound-v1', 'off', 'on'), 'off');
  assert.equal(mergeRaw('typingease-sound-v1', 'off', 'on', { prefer: 'remote' }), 'on');
  assert.equal(mergeRaw('typingease-keyboard-v1', S({ keyboardId: 1 }), S({ keyboardId: 4 }), { prefer: 'remote' }), S({ keyboardId: 4 }));
});

// --- dữ liệu thiếu / hỏng ----------------------------------------------------------------------------
check('missing or corrupt values', () => {
  assert.equal(mergeRaw('typingease-profile-v1', null, accountProgress), accountProgress);
  assert.equal(mergeRaw('typingease-profile-v1', accountProgress, ''), accountProgress);
  assert.equal(mergeRaw('typingease-progress-v4', '{broken', accountProgress), accountProgress);
  assert.equal(mergeRaw('typingease-progress-v4', accountProgress, '[1,2]'), accountProgress);
  assert.equal(mergeRaw('typingease-speed-test-history-v1', S({ not: 'array' }), S([])), S([]));
});

console.log(`sync-merge: ${checks} checks passed`);

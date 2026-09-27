#!/usr/bin/env node
/*
 * scripts/e2e.js — kiểm thử đầu-cuối cho player, trang chủ và các trang phụ bằng playwright-core.
 *
 * Chạy (server tĩnh phải đang phục vụ thư mục gốc của repo, ví dụ `npx http-server -p 8765 -s .`):
 *   PW=<thư mục>/node_modules/playwright-core node scripts/e2e.js [baseUrl]
 * Tuỳ chọn:
 *   CHROME=<đường dẫn chrome.exe>   mặc định C:/Program Files/Google/Chrome/Application/chrome.exe
 *   E2E_OUT=<thư mục>               nơi lưu screenshot khi FAIL (mặc định <tmp>/typingease-e2e)
 *   ONLY=<chuỗi>                    chỉ chạy test có tên chứa chuỗi này
 *
 * Không có framework: mỗi test là `async (page, ctx) => {}` dùng assert của Node. Mỗi test chạy trong
 * một browser context mới (localStorage trống) nên tiến độ của test này không đổi hero của test kia.
 * Mọi `pageerror` và `console.error` của trang làm test FAIL.
 */
'use strict';
const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { chromium } = require(process.env.PW || 'playwright-core');

const BASE = (process.argv[2] || 'http://127.0.0.1:8765').replace(/\/$/, '');
const CHROME = process.env.CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const OUT = process.env.E2E_OUT || path.join(os.tmpdir(), 'typingease-e2e');
const ONLY = process.env.ONLY || '';
const DESKTOP = { width: 1440, height: 1000 };

// --- helpers -----------------------------------------------------------------------------------
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Bảng phím -> ngón, chép lại để test không phụ thuộc vào chính module đang kiểm. Tên ngón là tên
// mà keyboard/keyboard.js ghi vào `board.dataset.finger` (bảng FINGER_NAMES của bản gốc).
const FINGERS = {
  q: 'left-pinky', a: 'left-pinky', z: 'left-pinky', w: 'left-ring', s: 'left-ring', x: 'left-ring',
  e: 'left-middle', d: 'left-middle', c: 'left-middle',
  r: 'left-index', f: 'left-index', v: 'left-index', t: 'left-index', g: 'left-index', b: 'left-index',
  y: 'right-index', h: 'right-index', n: 'right-index', u: 'right-index', j: 'right-index', m: 'right-index',
  i: 'right-middle', k: 'right-middle', ',': 'right-middle',
  o: 'right-ring', l: 'right-ring', '.': 'right-ring',
  p: 'right-pinky', ';': 'right-pinky', '/': 'right-pinky', ' ': 'thumb'
};

// Ghi lại mọi class được THÊM vào phím trong `root`, kèm mốc thời gian, để bắt được các class chỉ
// sống 250 ms (is-animating, is-wrong) mà một lần đọc DOM có thể bỏ lỡ.
async function watchClasses(page, rootSelector) {
  await page.evaluate(selector => {
    const root = document.querySelector(selector);
    window.__e2e = { added: [], inputAt: null };
    // pulse() gỡ rồi gắn lại class trong cùng một tick, nên một lô records có thể chứa nhiều lần
    // đổi của cùng một phím. Giá trị SAU record N là oldValue của record N+1 (cùng target), hoặc
    // className hiện tại với record cuối — nhờ đó mỗi lần thêm class đều được đếm.
    const split = value => new Set(String(value || '').split(/\s+/).filter(Boolean));
    const observer = new MutationObserver(records => {
      const at = performance.now();
      records.forEach((record, index) => {
        const element = record.target;
        const next = records.slice(index + 1).find(other => other.target === element);
        const before = split(record.oldValue);
        const after = next ? split(next.oldValue) : new Set(element.classList);
        for (const name of after) {
          if (!before.has(name)) {
            window.__e2e.added.push({
              className: name, at,
              // `data-values` = ký tự chính \u0001 ký tự shift \u0001 ký tự alt.
              key: (element.dataset.values ?? '').split('\u0001')[0] || null,
              finger: element.closest('.nt-player-keyboard')?.dataset.finger ?? null
            });
          }
        }
      });
    });
    observer.observe(root, { subtree: true, attributes: true, attributeOldValue: true, attributeFilter: ['class'] });
    document.addEventListener('input', () => { window.__e2e.inputAt = performance.now(); }, true);
  }, rootSelector);
}
const addedClasses = page => page.evaluate(() => window.__e2e);

// Bàn phím tự giữ danh sách phím đang sáng (`__ntActiveKeys`): phần tử đầu là phím đích, phần còn
// lại là phím bổ trợ phải giữ (Shift của tay kia, AltGr). Đọc đúng thứ đó thay vì đoán từ DOM.
const boardState = (page, host = '#board') => page.evaluate(selector => {
  const root = document.querySelector(selector);
  const board = root?.querySelector('.nt-player-keyboard');
  if (!board) return { board: false, keys: 0 };
  const id = element => (element?.dataset.values ?? '').split('\u0001')[0] || null;
  const side = element => (element.classList.contains('key--special-l') ? 'l' : element.classList.contains('key--special-r') ? 'r' : '?');
  const active = board.__ntActiveKeys ?? [];
  return {
    board: true,
    holder: root.querySelector('.js-keyboard-holder')?.className ?? null,
    keys: board.querySelectorAll('.keyboard-key').length,
    rows: board.querySelectorAll('.keyboard-row').length,
    hands: Boolean(board.querySelector('.hands canvas')),
    handsHidden: board.classList.contains('nt-player-hands-hidden'),
    activeKey: id(active[0]),
    activeMod: active.slice(1).map(element => `${id(element)}:${side(element)}`),
    activeFinger: board.dataset.finger ?? null,
    pose: board.__ntHands?.pose ?? null,
    hasNumberRow: Boolean(board.querySelector('.key-49'))
  };
}, host);

const playerState = page => page.evaluate(() => ({
  ...window.TypingEasePlayer.getState(),
  run: window.TypingEasePlayer.getRun(),
  live: document.querySelector('#live').textContent,
  screenLabel: document.querySelector('#pt-screen').textContent,
  hash: location.hash,
  focused: document.activeElement && document.activeElement.id,
  value: document.querySelector('#player-input').value
}));

const lessonJson = async (page, id) => {
  const response = await page.request.get(`${BASE}/data/lessons/vi/${id}.json`);
  assert.ok(response.ok(), `không tải được bài ${id}`);
  return response.json();
};
// Cùng cách nối dòng của player.buildTarget: "space" (mặc định) hoặc "enter".
const targetOf = screen => String(screen.content).split('\n').map(line => line.trim()).filter(Boolean)
  .join(screen.linebreak === 'enter' ? '\n' : ' ');

async function openPlayer(page, hash) {
  await page.goto(`${BASE}/hoc/#${hash}`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.TypingEasePlayer && !['loading'].includes(window.TypingEasePlayer.getState().state));
  // Bàn phím là module + hai lần fetch (catalog, layout) nên nó tới sau trạng thái player.
  await page.waitForFunction(() => document.querySelector('#board .nt-player-keyboard'), null, { timeout: 15000 });
  await sleep(150);
}

// --- tests -------------------------------------------------------------------------------------
const tests = [];
const test = (name, options, fn) => tests.push(typeof options === 'function' ? { name, fn: options, options: {} } : { name, fn, options });
test.skip = () => {};

test('1 player load: 60 phím, bàn tay 3D, phím + ngón đầu screen', async page => {
  await openPlayer(page, 'u1-l01/2');
  const lesson = await lessonJson(page, 'u1-l01');
  const first = targetOf(lesson.screens[1])[0];
  const board = await boardState(page);
  const state = await playerState(page);
  assert.strictEqual(state.state, 'typing');
  assert.strictEqual(state.screenLabel, 'Screen 2 / 10');
  assert.strictEqual(board.holder, 'cell js-keyboard-holder well', 'ô chứa bàn phím');
  assert.strictEqual(board.keys, 60, 'số phím');
  assert.strictEqual(board.rows, 5, 'số hàng');
  assert.ok(board.hands, 'canvas bàn tay 3D đã dựng');
  assert.strictEqual(board.activeKey, first, 'phím active = ký tự đầu');
  assert.strictEqual(board.activeFinger, FINGERS[first], 'ngón active theo bảng FINGERS');
  assert.strictEqual(board.pose?.key, first, 'tay nhận đúng phím');
  assert.strictEqual(state.focused, 'player-input', 'ô nhập tự focus');
});

test('2 gõ đúng: phím nhún (is-animating ≤150ms), highlight + ngón chuyển', async page => {
  await openPlayer(page, 'u1-l01/6');   // "jjj fff jjj fff jf fj": ký tự thứ 4 là dấu cách, thứ 5 là f
  await watchClasses(page, '#board');
  await page.keyboard.type('jjj', { delay: 30 });
  await sleep(60);
  let added = await addedClasses(page);
  const presses = added.added.filter(entry => entry.className === 'is-animating');
  assert.ok(presses.length >= 3, `is-animating xuất hiện ${presses.length} lần, cần ≥3`);
  assert.ok(presses.every(entry => entry.key === 'j'), 'phím nhún là phím vừa gõ (j)');
  const last = presses[presses.length - 1];
  assert.ok(added.inputAt !== null && last.at - added.inputAt <= 150, `nhún sau input ${Math.round(last.at - added.inputAt)}ms`);
  // `dataset.finger` lúc phím nhún đã là ngón của ký tự KẾ (paint chạy trước reactToKeystroke),
  // nên phím cuối trong "jjj" ghi 'thumb' của dấu cách; chỉ cần có lần ghi đúng ngón trỏ phải.
  assert.ok(presses.some(entry => entry.finger === 'right-index'), 'có lần ghi ngón trỏ phải khi gõ j');
  let board = await boardState(page);
  assert.strictEqual(board.activeKey, ' ', 'sau jjj highlight sang dấu cách');
  // Dấu cách là ngón cái; bản gốc không chia trái/phải cho nó (layout ghi finger 6 = "thumb").
  assert.strictEqual(board.activeFinger, 'thumb', `ngón cái, thấy ${board.activeFinger}`);
  await page.keyboard.type(' ');
  await sleep(40);
  board = await boardState(page);
  assert.strictEqual(board.activeKey, 'f');
  assert.strictEqual(board.activeFinger, 'left-index');
  assert.strictEqual(board.pose?.finger, 'left-index', 'tay đổi theo');
  added = await addedClasses(page);
  assert.ok(!added.added.some(entry => entry.className === 'is-wrong'), 'không có phím nào nháy đỏ');
  const state = await playerState(page);
  assert.strictEqual(state.run.errors, 0);
  assert.strictEqual(state.value, 'jjj ');
});

test('3 gõ sai: phím sai nháy đỏ, lỗi tăng, highlight đứng yên', async page => {
  await openPlayer(page, 'u1-l01/2');   // toàn j
  await watchClasses(page, '#board');
  await page.keyboard.type('k');
  await sleep(60);
  const added = await addedClasses(page);
  const wrong = added.added.filter(entry => entry.className === 'is-wrong');
  assert.strictEqual(wrong.length, 1, 'is-wrong đúng 1 lần');
  assert.strictEqual(wrong[0].key, 'k', 'nháy đỏ trên phím K vừa gõ');
  assert.ok(!added.added.some(entry => entry.className === 'is-animating'), 'phím đích không nhún khi gõ sai');
  const state = await playerState(page);
  assert.strictEqual(state.run.errors, 1, 'bộ đếm lỗi');
  assert.ok(/1 lỗi/.test(state.live), `live: ${state.live}`);
  // Ký tự sai vẫn chiếm chỗ (như typing.com), nên highlight đi tiếp tới ký tự kế — vẫn là j.
  const board = await boardState(page);
  assert.strictEqual(board.activeKey, 'j');
  assert.strictEqual(board.activeFinger, 'right-index');
  await sleep(300);
  const after = await page.evaluate(() => document.querySelectorAll('#board .key.is-wrong').length);
  assert.strictEqual(after, 0, 'is-wrong tự gỡ sau 250ms');
});

test('4 hết screen: bảng kết quả, Enter sang screen kế', async page => {
  await openPlayer(page, 'u1-l01/2');
  const lesson = await lessonJson(page, 'u1-l01');
  const target = targetOf(lesson.screens[1]);
  await page.keyboard.type(target, { delay: 15 });
  await page.waitForFunction(() => window.TypingEasePlayer.getState().state === 'screen-result');
  assert.ok(await page.locator('#stage .result-card').isVisible(), 'result card');
  const stars = await page.locator('#stage .star.is-on').count();
  assert.strictEqual(stars, 3, '100% chính xác → 3 sao');
  assert.ok(/100% chính xác/.test(await page.locator('#stage .result-stats').textContent()));
  assert.strictEqual(await boardState(page).then(board => board.activeKey), null, 'không phím nào sáng ở bảng kết quả');
  await page.keyboard.press('Enter');
  await page.waitForFunction(() => location.hash === '#u1-l01/3');
  await page.waitForFunction(() => window.TypingEasePlayer.getState().state === 'intro');
  const state = await playerState(page);
  assert.strictEqual(state.screenLabel, 'Screen 3 / 10');
  assert.strictEqual(state.screenIndex, 2);
  // Thanh tiến độ ghi nhận screen 2 đã xong.
  const segs = await page.evaluate(() => [...document.querySelectorAll('#pt-progress .seg')].map(seg => seg.className.replace('seg ', '')));
  assert.strictEqual(segs[1], 'is-done');
  assert.strictEqual(segs[2], 'is-current');
});

test('5 shift: chữ hoa sáng Shift tay đối diện (active-mod)', async page => {
  await openPlayer(page, 'u2-l09/2');   // "Aa Ss Dd Ff\nJj Kk Ll Hh…"
  let board = await boardState(page);
  assert.strictEqual(board.activeKey, 'a', 'A → phím a sáng');
  assert.strictEqual(board.activeFinger, 'left-pinky');
  // Nhãn phím lấy thẳng từ layout: Shift trái là "Shift ⇧", Shift phải là "⇧ Shift".
  assert.deepStrictEqual(board.activeMod, ['⇧ Shift:r'], 'chữ A (tay trái) → Shift PHẢI');
  await page.keyboard.type('Aa ');
  await sleep(40);
  board = await boardState(page);
  assert.strictEqual(board.activeKey, 's');
  await page.keyboard.type('Ss Dd Ff ');
  await sleep(40);
  board = await boardState(page);
  assert.strictEqual(board.activeKey, 'j', 'J → phím j');
  assert.deepStrictEqual(board.activeMod, ['Shift ⇧:l'], 'chữ J (tay phải) → Shift TRÁI');
  await page.keyboard.type('J');
  await sleep(40);
  board = await boardState(page);
  assert.deepStrictEqual(board.activeMod, [], 'chữ thường không cần Shift');
  const state = await playerState(page);
  assert.strictEqual(state.run.errors, 0);
});

test('6 telex: ký tự đang compose là pending, không nháy đỏ, highlight theo phím dấu', async page => {
  await openPlayer(page, 'u3-l01/2');   // "má cá bá lá…", inputMode telex
  assert.strictEqual(await page.evaluate(() => document.querySelector('#player').dataset.inputMode), 'telex');
  await watchClasses(page, '#board');
  const input = page.locator('#player-input');
  // Mô phỏng IME Telex: giá trị ô nhập đi qua m → ma → má (phím s bị IME nuốt, chỉ đổi chữ).
  await page.keyboard.type('m');
  await sleep(30);
  let board = await boardState(page);
  assert.strictEqual(board.activeKey, 'a', 'sau m → a');
  await input.fill('ma');
  await sleep(30);
  let states = await page.evaluate(() => [...document.querySelectorAll('#prompt-lines .ch')].slice(0, 3).map(el => el.className));
  assert.ok(/\bok\b/.test(states[0]), `m: ${states[0]}`);
  assert.ok(/\bpending\b/.test(states[1]), `a đang compose phải pending: ${states[1]}`);
  board = await boardState(page);
  assert.strictEqual(board.activeKey, 's', 'đang compose á → highlight phím dấu sắc S');
  assert.strictEqual(board.activeFinger, 'left-ring');
  await input.fill('má');
  await sleep(30);
  states = await page.evaluate(() => [...document.querySelectorAll('#prompt-lines .ch')].slice(0, 3).map(el => el.className));
  assert.ok(/\bok\b/.test(states[1]), `á sau khi compose xong phải ok: ${states[1]}`);
  board = await boardState(page);
  assert.strictEqual(board.activeKey, ' ', 'xong má → dấu cách');
  const added = await addedClasses(page);
  assert.ok(!added.added.some(entry => entry.className === 'is-wrong'), 'không có is-wrong trong lúc compose');
  const state = await playerState(page);
  assert.strictEqual(state.run.errors, 0, 'không lỗi');
  // Gõ sai thật trong telex vẫn báo lỗi theo âm tiết.
  await input.fill('má x');
  await sleep(30);
  const bad = await page.evaluate(() => [...document.querySelectorAll('#prompt-lines .ch')][3].className);
  assert.ok(/\bbad\b/.test(bad), `x thay cho c phải bad: ${bad}`);
});

// Trang chủ không còn ô gõ thử: vào trang là thấy ngay lộ trình để chọn bài. Test này canh đúng
// hai điều dễ vỡ khi ai đó thêm lại thứ gì vào hero — bàn phím/bàn tay quay lại, và lộ trình bị
// đẩy xuống dưới màn hình đầu.
const homeShape = page => page.evaluate(() => {
  const rect = document.querySelector('#roadmap-title').getBoundingClientRect();
  const start = document.querySelector('#hero-start');
  return {
    returning: document.body.classList.contains('is-returning'),
    widgets: document.querySelectorAll('#taster, .taster-line, .keyboard, .nt-player-keyboard, .js-keyboard-holder, .hands').length,
    languagePickers: document.querySelectorAll('#language, .language-select').length,
    startVisible: Boolean(start && start.offsetParent !== null),
    startHref: document.querySelector('#hero-go')?.getAttribute('href') ?? null,
    railItems: document.querySelectorAll('#unit-rail a, #unit-rail button').length,
    teasers: document.querySelectorAll('#unit-teasers li').length,
    roadmapTop: rect.top,
    roadmapBottom: rect.bottom,
    viewport: innerHeight
  };
});

test('7 trang chủ /vi/: không còn bàn phím/bàn tay, lộ trình hiện ngay', async page => {
  await page.goto(`${BASE}/vi/`, { waitUntil: 'networkidle' });
  await page.waitForSelector('#unit-rail a, #unit-rail button');
  const home = await homeShape(page);
  assert.ok(!home.returning, 'khách mới không phải is-returning');
  assert.strictEqual(home.widgets, 0, `hero còn ${home.widgets} widget bàn phím/bàn tay`);
  assert.strictEqual(home.languagePickers, 0, 'không còn bộ chọn ngôn ngữ');
  assert.ok(home.startVisible, '#hero-start hiện cho khách mới');
  assert.ok(/hoc\/?$/.test(home.startHref || ''), `#hero-go trỏ vào player: ${home.startHref}`);
  assert.ok(home.railItems >= 10, `rail có ${home.railItems} bài, cần ≥10`);
  assert.ok(home.teasers >= 1, 'còn teaser của các unit sau');
  assert.ok(home.roadmapBottom <= home.viewport, `lộ trình phải lọt màn hình đầu: bottom ${Math.round(home.roadmapBottom)} > ${home.viewport}`);

  // Khách mới gõ Enter ở trang chủ → vào thẳng bài học, không cần tìm nút.
  await page.locator('body').click({ position: { x: 5, y: 5 } });
  await page.keyboard.press('Enter');
  await page.waitForURL(/\/hoc\//, { timeout: 4000 });
});

test('7b trang chủ /vi/ 1366x768: lộ trình vẫn lọt màn hình đầu', { viewport: { width: 1366, height: 768 } }, async page => {
  await page.goto(`${BASE}/vi/`, { waitUntil: 'networkidle' });
  await page.waitForSelector('#unit-rail a, #unit-rail button');
  const home = await homeShape(page);
  assert.strictEqual(home.widgets, 0);
  assert.ok(home.roadmapTop < home.viewport, `tiêu đề lộ trình phải thấy được: top ${Math.round(home.roadmapTop)} ≥ ${home.viewport}`);
});

// Trang dau `/` la ban tieng Anh, va hero cua no NGUOC HAN voi /vi/: o day ban phim la diem
// chinh, khong phai thu phai don di. Phep do canh dung loi hua cua no — chon ngon ngu thi ban
// phim doi theo, va nut vao hoc tro vao khoa tieng Anh chu khong phai khoa tieng Viet.
test.skip('7c legacy picker rewrites the landing page in place', async page => {
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  assert.strictEqual(await page.evaluate(() => document.documentElement.lang), 'en');
  await page.waitForSelector('#kb-preview .keyboard-key');

  const shape = await page.evaluate(() => ({
    languages: document.querySelectorAll('#pick-language option').length,
    layouts: document.querySelectorAll('#pick-layout option').length,
    language: document.querySelector('#pick-language').value,
    keys: document.querySelectorAll('#kb-preview .keyboard-key').length,
    ctaHref: document.querySelector('#hero-go').getAttribute('href'),
    grid: document.querySelectorAll('#lang-grid .lang-chip').length,
    // Ban tay 3D khong duoc keo theo vao trang dau: no la three.js ~690 KB + model 967 KB.
    canvases: document.querySelectorAll('#kb-preview canvas').length
  }));
  assert.ok(shape.languages >= 20, `mới có ${shape.languages} ngôn ngữ trong bộ chọn`);
  assert.strictEqual(shape.language, 'en', 'mặc định phải là tiếng Anh');
  assert.ok(shape.keys >= 55, `bàn phím chỉ có ${shape.keys} phím`);
  assert.ok(shape.layouts >= 2, 'tiếng Anh phải có nhiều hơn một bố cục để chọn');
  assert.ok(/\/en\/learn\/$/.test(shape.ctaHref || ''), `nút vào học trỏ đâu: ${shape.ctaHref}`);
  assert.ok(shape.grid >= 20, `lưới ngôn ngữ chỉ có ${shape.grid} ô`);
  assert.strictEqual(shape.canvases, 0, 'trang đầu không được dựng bàn tay 3D');

  // Doi sang tieng A Rap: nhan phim phai thanh chu A Rap, khong con la a-z.
  const latin = await page.evaluate(() =>
    [...document.querySelectorAll('#kb-preview .key--letter .key-label')].map(node => node.textContent).join(''));
  await page.selectOption('#pick-language', 'ar');
  await page.waitForFunction(() =>
    [...document.querySelectorAll('#kb-preview .keyboard-key')].some(key => /[\u0600-\u06FF]/.test(key.textContent)),
    null, { timeout: 5000 });
  const arabic = await page.evaluate(() => ({
    text: [...document.querySelectorAll('#kb-preview .keyboard-key')].map(node => node.textContent).join(''),
    cta: document.querySelector('#hero-go').className,
    note: document.querySelector('#hero-note').textContent
  }));
  assert.ok(/[\u0600-\u06FF]/.test(arabic.text), 'bàn phím Ả Rập phải hiện chữ Ả Rập');
  assert.ok(!/[\u0600-\u06FF]/.test(latin), 'bàn phím tiếng Anh không được có chữ Ả Rập');
  // Tieng A Rap nay co khoa: nut chinh vao lo trinh cua no, va CA TRANG lat sang phai-sang-trai.
  assert.ok(!/is-secondary/.test(arabic.cta), 'tiếng Ả Rập đã có khoá, nút phải là nút chính');
  assert.strictEqual(await page.evaluate(() => document.querySelector('#hero-go').getAttribute('href')), '/ar/taallam/');
  assert.strictEqual(await page.evaluate(() => document.documentElement.dir), 'rtl', 'trang tiếng Ả Rập phải dir=rtl');
  // Tieng Trung phon the (ngon ngu cuoi cung duoc them, 2026-09-25): nut chinh vao khoa Chu am, va
  // doi tu tieng A Rap sang thi trang lat ve trai-sang-phai.
  await page.selectOption('#pick-language', 'zh-tw');
  await page.waitForFunction(() => document.querySelector('#hero-go').getAttribute('href') === '/zh-tw/xuexi/', null, { timeout: 5000 })
    .catch(() => { throw new Error('tiếng Trung phồn thể phải vào /zh-tw/xuexi/'); });
  const traditional = await page.evaluate(() => ({ cta: document.querySelector('#hero-go').className, dir: document.documentElement.dir }));
  assert.ok(!/is-secondary/.test(traditional.cta), 'tiếng Trung phồn thể đã có khoá, nút phải là nút chính');
  assert.strictEqual(traditional.dir, 'ltr', 'rời tiếng Ả Rập thì trang về LTR');
  // Moi ngon ngu trong bo chon deu da co khoa: khong con muc nao trong nhom "sap co".
  const soonCount = await page.evaluate(() => {
    const catalogue = window.TypingEaseLanguages?.list || [];
    return catalogue.filter(entry => entry.course?.status !== 'ready').length;
  });
  assert.strictEqual(soonCount, 0, `còn ${soonCount} ngôn ngữ chưa có khoá`);

  // LOI GOC cua ke hoach ho chuoi phim: chon BEPO thi ban phim doi, nut van vao khoa AZERTY.
  // Nay nut phai di theo BO CUC, khong theo ngon ngu — va doi lai AZERTY thi nut quay ve.
  await page.selectOption('#pick-language', 'fr');
  // Chon mot ngon ngu co bang chu (landing-i18n.js) la doi CA TRANG sang ngon ngu do — khong chi
  // ban phim. Menu phai dan toi lo trinh tieng Phap, khong con trang tieng Anh nao.
  const french = await page.evaluate(() => ({
    lang: document.documentElement.lang, h1: document.querySelector('.hero h1').textContent,
    nav: [...document.querySelectorAll('.topbar nav a')].map(a => a.getAttribute('href'))
  }));
  assert.strictEqual(french.lang, 'fr', 'chọn tiếng Pháp thì <html lang> phải là fr');
  assert.ok(/clavier/.test(french.h1), `tiêu đề chưa đổi sang tiếng Pháp: ${french.h1}`);
  assert.ok(french.nav.includes('/fr/lecons/') && !french.nav.some(href => href.startsWith('/en/')),
    `menu khi chọn tiếng Pháp: ${french.nav.join(', ')}`);
  await page.selectOption('#pick-layout', '184');
  await page.waitForFunction(() => /\/fr\/bepo\/apprendre\/$/.test(document.querySelector('#hero-go').getAttribute('href')),
    null, { timeout: 5000 }).catch(() => {});
  const bepoHref = await page.evaluate(() => document.querySelector('#hero-go').getAttribute('href'));
  assert.ok(/\/fr\/bepo\/apprendre\/$/.test(bepoHref), `chọn BÉPO mà nút vẫn trỏ ${bepoHref}`);
  await page.selectOption('#pick-layout', '183');
  const ossHref = await page.evaluate(() => document.querySelector('#hero-go').getAttribute('href'));
  assert.ok(/\/fr\/apprendre\/$/.test(ossHref), `French (OSS) thuộc họ AZERTY, nút lại trỏ ${ossHref}`);
  const cards = await page.evaluate(() => [...document.querySelectorAll('#lang-grid a.lang-chip')].map(a => a.getAttribute('href')));
  for (const href of ['/fr/bepo/', '/dvorak/', '/de/neo/', '/lessons/', '/bai-hoc/']) {
    assert.ok(cards.includes(href), `lưới thiếu thẻ khoá ${href}`);
  }
  assert.strictEqual(await page.locator('#course').count(), 0, 'trang đầu không còn lộ trình tiếng Anh');
  await page.selectOption('#pick-language', 'ar');

  // Lua chon duoc nho lai: nap lai trang phai van la tieng A Rap.
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForSelector('#kb-preview .keyboard-key');
  assert.strictEqual(await page.evaluate(() => document.querySelector('#pick-language').value), 'ar',
    'lựa chọn ngôn ngữ phải được nhớ giữa hai lần vào');
});

test('7c / remains English and the picker uses canonical language homes', async page => {
  await page.addInitScript(() => {
    localStorage.setItem('typingease-language-v1', JSON.stringify({ code: 'vi', keyboardId: 1 }));
  });
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.waitForSelector('#kb-preview .keyboard-key');
  assert.strictEqual(await page.evaluate(() => document.documentElement.lang), 'en');
  assert.strictEqual(await page.locator('#pick-language').inputValue(), 'en');

  await Promise.all([
    page.waitForURL(url => new URL(url).pathname === '/ar/'),
    page.selectOption('#pick-language', 'ar')
  ]);
  assert.strictEqual(await page.evaluate(() => document.documentElement.lang), 'ar');

  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  assert.strictEqual(await page.evaluate(() => document.documentElement.lang), 'en');
  await Promise.all([
    page.waitForURL(url => new URL(url).pathname === '/fr/'),
    page.selectOption('#pick-language', 'fr')
  ]);
  assert.strictEqual(await page.evaluate(() => document.documentElement.lang), 'fr');
});

test('8a responsive 1024: bàn phím đầy đủ + tay', { viewport: { width: 1024, height: 900 } }, async page => {
  await openPlayer(page, 'u1-l01/2');
  const board = await boardState(page);
  assert.strictEqual(board.keys, 60);
  assert.ok(board.hasNumberRow, 'còn hàng số');
  // player.js chỉ tắt tay ở ngưỡng điện thoại (620px) → 1024 vẫn có tay.
  assert.ok(board.hands && !board.handsHidden, 'tay hiện ở 1024px');
  const fits = await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth);
  assert.ok(fits, 'không tràn ngang');
});

// Bàn phím của typekute không có bản compact: cùng 60 phím, chỉ co lại theo khung nhìn
// (keyboard/keyboard.css, khối max-width:700px). Điện thoại chỉ khác ở chỗ tắt bàn tay.
test('8b responsive 390 (phone): vẫn đủ phím, không tay, không tràn ngang', { viewport: { width: 390, height: 800 }, isMobile: true, hasTouch: true }, async page => {
  await openPlayer(page, 'u1-l01/2');
  const board = await boardState(page);
  assert.ok(board.hasNumberRow, 'vẫn có hàng số');
  assert.strictEqual(board.keys, 60, 'vẫn đủ 60 phím');
  assert.ok(!board.hands, 'không dựng canvas bàn tay');
  assert.ok(board.handsHidden, 'board mang class nt-player-hands-hidden');
  assert.strictEqual(board.activeKey, 'j', 'phím đích vẫn sáng');
  const fits = await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1);
  assert.ok(fits, 'không tràn ngang');
});

test('9 reduced motion: highlight vẫn chạy, không lỗi', { reducedMotion: 'reduce' }, async page => {
  await openPlayer(page, 'u1-l01/6');
  assert.ok(await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches));
  await watchClasses(page, '#board');
  await page.keyboard.type('jjj ', { delay: 20 });
  await sleep(50);
  const board = await boardState(page);
  assert.strictEqual(board.activeKey, 'f');
  assert.strictEqual(board.activeFinger, 'left-index');
  const added = await addedClasses(page);
  assert.ok(added.added.some(entry => entry.className === 'is-animating'), 'class vẫn gắn (CSS tắt animation)');
  const motion = await page.evaluate(() => {
    const board = document.querySelector('#board .nt-player-keyboard');
    const key = board.__ntActiveKeys[0];
    key.classList.add('is-animating');
    const name = getComputedStyle(key).animationName;
    key.classList.remove('is-animating');
    return { name, peekFade: getComputedStyle(board).animationName, hands: board.__ntHands?.renderer?.leftHand?.frameTransitionDuration ?? null };
  });
  assert.strictEqual(motion.name, 'none', `nhún phím phải tắt khi reduced-motion, thấy "${motion.name}"`);
  assert.strictEqual(motion.peekFade, 'none', `màu ngón không mờ dần khi reduced-motion, thấy "${motion.peekFade}"`);
  assert.ok(motion.hands === null || motion.hands === 0, `tay phải nhảy thẳng tư thế, thấy ${motion.hands}`);
});

// --- bàn tay 3D ---------------------------------------------------------------------------------
// Tư thế nằm trong WebGL nên không có DOM để đo. Hai thứ quan sát được thay cho nó:
//   1. `board.dataset.finger` + `board.__ntHands.pose` — đúng cái mà renderer nhận;
//   2. `hands-pose-map.js` — bảng quyết định clip nào được phát và ngón nào sáng màu.
// Cộng thêm `renderer.adaptiveDuration` cho phần tốc độ thích ứng.
const SETTLE_MS = 500;
const handSlots = (page, key, animated = true) => page.evaluate(async ({ key, animated }) => {
  const { resolveHandSlots } = await import('/keyboard/hands-pose-map.js');
  const slots = resolveHandSlots({ layout: window.NTKeyboard.layout(), key, animated });
  const plain = slot => (slot ? { id: slot.fingerId, pose: slot.entry?.pose ?? null, highlight: slot.entry?.highlight ?? null } : null);
  return { left: plain(slots.left), right: plain(slots.right) };
}, { key, animated });

const handsState = page => page.evaluate(() => {
  const board = document.querySelector('#board .nt-player-keyboard');
  const handle = board.__ntHands ?? null;
  const canvas = board.querySelector('.hands canvas');
  return {
    pose: handle?.pose ?? null,
    visible: handle?.visible ?? null,
    duration: handle?.renderer?.adaptiveDuration ?? null,
    canvas: canvas ? { w: canvas.width, h: canvas.height } : null
  };
});

test('11 pose: ngón giữa trái với lên E rồi về D', async page => {
  await openPlayer(page, 'u1-l07/2');   // "eeee dddd…": e hàng trên, d hàng cơ sở — cùng ngón
  await sleep(SETTLE_MS);
  let board = await boardState(page);
  assert.strictEqual(board.activeKey, 'e');
  assert.strictEqual(board.activeFinger, 'left-middle');
  assert.strictEqual(board.pose?.key, 'e', 'renderer nhận phím e');
  let slots = await handSlots(page, 'e');
  assert.strictEqual(slots.left.id, 'left-top-row-3', 'tay trái với lên hàng trên');
  assert.strictEqual(slots.left.highlight, 'middle', 'ngón giữa sáng');
  assert.strictEqual(slots.right.id, 'right-resting-hand', 'tay phải nghỉ');

  await page.keyboard.type('eeee ', { delay: 20 });   // phím kế là d: hàng cơ sở của chính ngón đó
  await sleep(SETTLE_MS);
  board = await boardState(page);
  assert.strictEqual(board.activeKey, 'd');
  assert.strictEqual(board.activeFinger, 'left-middle', 'vẫn ngón giữa trái');
  slots = await handSlots(page, 'd');
  assert.strictEqual(slots.left.id, 'left-home-row-3', 'về hàng cơ sở');
  const hands = await handsState(page);
  assert.strictEqual(hands.pose?.key, 'd', 'renderer đã nhận tư thế mới');
  assert.ok(hands.canvas && hands.canvas.w > 0, 'canvas có kích thước');
});

test('12 Shift: chữ A sáng cả phím a lẫn Shift tay kia', async page => {
  await openPlayer(page, 'u2-l09/2');   // "Aa Ss…"
  await sleep(SETTLE_MS);
  const board = await boardState(page);
  assert.strictEqual(board.activeKey, 'a');
  assert.deepStrictEqual(board.activeMod, ['⇧ Shift:r'], 'Shift PHẢI sáng cho chữ của tay trái');
  assert.strictEqual(board.activeFinger, 'left-pinky');
  const slots = await handSlots(page, 'A');
  assert.strictEqual(slots.left.id, 'left-home-row-5', 'tay trái ở A');
  assert.strictEqual(slots.left.highlight, 'pinky', 'ngón út sáng');
  // Khác bản gốc typekute: nó chỉ tô sáng phím Shift chứ để tay kia nghỉ. Chủ site yêu cầu phím nào
  // cũng phải thấy ngón di chuyển, và chính bài u2-l09 dạy "ngón út bên kia giữ Shift".
  assert.strictEqual(slots.right.id, 'right-bottom-row-6', 'ngón út phải với tới Shift');
  assert.strictEqual(slots.right.highlight, 'pinky', 'ngón út phải sáng');

  // Chiều ngược lại: "?" là Shift + "/" của tay PHẢI, nên Shift phải giữ là của tay TRÁI.
  const question = await handSlots(page, '?');
  assert.strictEqual(question.right.id, 'right-bottom-row-5', 'tay phải ở phím /');
  assert.strictEqual(question.left.id, 'left-bottom-row-6', 'ngón út trái với tới Shift');
});

// Bốn lỗi rời nhau cùng cho một triệu chứng "bấm phím mà tay đứng im", nên kiểm cả bốn ở đây:
//   1. bài học gọi tên viết thường ("shift"/"enter") mà layout ghi nhãn "Shift ⇧"/"Enter ⏎";
//   2. phím rìa (Backspace) rơi ra ngoài dải chỉ số của kho tư thế;
//   3. hàng Ctrl/Alt/Cmd chỉ có bảy ô nên công thức cột của hàng chữ cho ra chỉ số ngược hướng;
//   4. bảng tư thế trỏ vào clip KHÔNG có trong file GLTF (`home-row-7-left`, `bottom-row-7-left`).
// Lỗi 4 chỉ lộ ra ở renderer, nên phải hỏi chính mô hình xem clip nào được phát thật.
test('12b mọi phím đều làm tay động, bằng clip có thật trong mô hình', async page => {
  await openPlayer(page, 'u2-l09/1');
  await page.waitForFunction(
    () => document.querySelector('#board .nt-player-keyboard')?.__ntHands?.renderer?.leftHand?.clipByName?.has('base'),
    null, { timeout: 30000 });

  const result = await page.evaluate(async () => {
    const board = document.querySelector('#board .nt-player-keyboard');
    const renderer = board.__ntHands.renderer;
    const played = [];
    for (const side of ['leftHand', 'rightHand']) {
      const hand = renderer[side];
      const original = hand.setAnimationFrame.bind(hand);
      hand.setAnimationFrame = frame => {
        const used = hand.resolveFrame(frame);
        played.push({ side: hand.side, used, resting: used === `default-${hand.side}` });
        return original(frame);
      };
    }
    // Mọi phím CÓ TRÊN BÀN PHÍM, lấy từ chính DOM chứ không phải danh sách chép tay.
    const keys = [...board.querySelectorAll('.keyboard-key')]
      .map(node => (node.dataset.values ?? '').split('')[0] || node.textContent.trim())
      .filter(Boolean);
    const { resolveHandSlots } = await import('/keyboard/hands-pose-map.js');
    const layout = window.NTKeyboard.layout();
    const dead = [];
    for (const key of keys) {
      played.length = 0;
      window.NTKeyboard.setKeyboardState(board, key);
      const moved = played.length > 0 && played.some(entry => !entry.resting);
      const slots = resolveHandSlots({ layout, key, animated: true });
      const lit = Boolean(slots.left?.entry?.highlight || slots.right?.entry?.highlight);
      if (!moved && !lit) dead.push(key);
    }
    return { count: keys.length, dead };
  });

  assert.ok(result.count >= 60, `đếm được ${result.count} phím`);
  // Đủ cho một phím là tay DỊCH tới nó, HOẬC ngón phụ trách sáng lên. Phím cách và dấu chấm phẩy
  // rơi vào vế sau một cách có lý: tư thế NGHỈ vốn đã đặt ngón cái trên phím cách và ngón út trên
  // ";", nên dịch tay thêm mới là sai. Phím nào không có cả hai thì người học không nhận được gì.
  assert.deepStrictEqual(result.dead, [], 'không phím nào vừa đứng im vừa không sáng ngón');
});

test('12c màn dạy Shift và Enter: sáng đúng phím và đúng ngón', async page => {
  // Bu1-l09 truyền `key: "shift"` / `key: "enter"` viết thường; trước đây không phím nào sáng cả.
  await openPlayer(page, 'u2-l09/1');
  let board = await boardState(page);
  assert.strictEqual(board.activeKey, 'Shift ⇧', 'Shift trái sáng');
  assert.deepStrictEqual(board.activeMod, ['⇧ Shift:r'], 'Shift phải cũng sáng — bài dạy dùng ngón út bên kia');
  assert.strictEqual(board.activeFinger, 'left-pinky');
  let slots = await handSlots(page, 'shift');
  assert.strictEqual(slots.left.id, 'left-bottom-row-6', 'ngón út trái tới Shift trái');
  assert.strictEqual(slots.right.id, 'right-bottom-row-6', 'ngón út phải tới Shift phải');

  await openPlayer(page, 'u2-l09/3');
  board = await boardState(page);
  assert.strictEqual(board.activeKey, 'Enter ⏎', 'phím Enter sáng');
  assert.strictEqual(board.activeFinger, 'right-pinky', 'ngón út phải, đúng lời bài');
  slots = await handSlots(page, 'enter');
  assert.strictEqual(slots.right.id, 'right-home-row-7', 'tay phải với ngang tới Enter');
  assert.strictEqual(slots.left.id, 'left-resting-hand', 'tay trái nghỉ');
});

test('13 Space: ngón cái phải, tay trái nghỉ', async page => {
  await openPlayer(page, 'u1-l01/6');   // "jjj fff…"
  await page.keyboard.type('jjj', { delay: 20 });
  await sleep(SETTLE_MS);
  const board = await boardState(page);
  assert.strictEqual(board.activeKey, ' ');
  assert.strictEqual(board.activeFinger, 'thumb');
  const slots = await handSlots(page, ' ');
  assert.strictEqual(slots.right.id, 'space', 'tay phải giữ phím cách');
  assert.strictEqual(slots.right.highlight, 'thumb');
  assert.strictEqual(slots.left.id, 'left-resting-hand', 'tay trái nghỉ');
});

test('14 tốc độ thích ứng: tween của tay ngắn lại khi gõ nhanh', async page => {
  await openPlayer(page, 'u1-l01/8');   // standard "jjf jjf fjj fjj…"
  await sleep(SETTLE_MS);
  const before = (await handsState(page)).duration;
  assert.ok(before === null || Math.abs(before - 0.275) < 0.001, `ban đầu ${before}`);
  const lesson = await lessonJson(page, 'u1-l01');
  await page.keyboard.type(targetOf(lesson.screens[7]).slice(0, 10), { delay: 60 });
  // Đợi ĐẾN KHI giá trị đổi, thay vì ngủ 200ms rồi đo một lần. `adaptiveDuration` được cập nhật trong
  // vòng vẽ, nên khi cả bộ test chạy cùng lúc thì 200ms có thể chưa kịp một khung hình — đó là lý do
  // test này chập chờn suốt: nó đo được tải của máy chứ không phải hành vi của mã. Phép kiểm không
  // hề nới ra: vẫn đòi tween NGẮN LẠI và nằm trong đúng khoảng cũ, chỉ là không áp đặt hạn chót tùy tiện.
  let after = null;
  for (let attempt = 0; attempt < 30; attempt += 1) {
    after = (await handsState(page)).duration;
    if (Number.isFinite(after) && after < 0.275) break;
    await sleep(100);
  }
  assert.ok(Number.isFinite(after), 'có giá trị');
  assert.ok(after < 0.275 && after >= 0.09, `tween = ${after}s, cần trong [0.09, 0.275)`);
  assert.strictEqual((await playerState(page)).run.errors, 0);
});

test('15 animatedHands:false → tư thế đứng yên ở hàng cơ sở', async page => {
  await openPlayer(page, 'u1-l07/2');   // phím đích là e (hàng trên)
  const animated = await handSlots(page, 'e', true);
  assert.strictEqual(animated.left.id, 'left-top-row-3');
  const still = await handSlots(page, 'e', false);
  assert.strictEqual(still.left.id, 'left-home-row-3', 'tắt chuyển động thì tay ở hàng cơ sở');
  assert.strictEqual(still.left.highlight, 'middle', 'ngón vẫn sáng đúng ngón');

  // Công tắc ✋ trên thanh trên cùng đổi tuỳ chọn và dựng lại bàn phím.
  await page.click('#pt-hands');
  await page.waitForFunction(() => !document.querySelector('#board .nt-player-keyboard').classList.contains('nt-player-hands-animated'));
  const pressed = await page.getAttribute('#pt-hands', 'aria-pressed');
  assert.strictEqual(pressed, 'false', 'nút ✋ đổi trạng thái');
  const board = await boardState(page);
  assert.strictEqual(board.activeKey, 'e', 'phím đích vẫn sáng sau khi dựng lại');
  const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('typingease-keyboard-v1')));
  assert.strictEqual(stored.animatedHands, false, 'tuỳ chọn được ghi lại');
});

test('16 resize 1440→1024→1440: giữ phím đích, canvas vẽ lại', async page => {
  await openPlayer(page, 'u2-l09/2');
  await sleep(SETTLE_MS);
  const first = await handsState(page);
  assert.ok(first.canvas.w > 0, 'canvas ban đầu');
  for (const width of [1024, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await sleep(400);
    const board = await boardState(page);
    const hands = await handsState(page);
    assert.strictEqual(board.activeKey, 'a', `${width}: phím đích còn nguyên`);
    assert.strictEqual(board.activeFinger, 'left-pinky', `${width}: ngón còn nguyên`);
    assert.ok(hands.canvas.w > 0, `${width}: canvas có kích thước`);
    assert.strictEqual(hands.pose?.key, 'A', `${width}: tư thế giữ nguyên`);
  }
});

// Hop cai dat chi liet ke CA HO cua khoa dang hoc (curriculum.layouts), khong phai ca danh muc:
// chon Dvorak trong khoa QWERTY la ve mot ban phim ma bai hoc khong day. Khoa tieng Anh co nam bo
// cuc cung ho (US, UK x2, Canada, US Intl) nen la noi thu doi bo cuc; khoa tieng Viet chi co US.
test('17 cài đặt bàn phím: đổi bố cục trong họ và dựng lại board', async page => {
  await page.goto(`${BASE}/learn/#u1-l01/2`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.TypingEasePlayer && !['loading'].includes(window.TypingEasePlayer.getState().state));
  await page.waitForFunction(() => document.querySelector('#board .nt-player-keyboard'), null, { timeout: 15000 });
  await sleep(150);
  const before = await boardState(page);
  await page.click('#board .js-keyboard-settings a');
  await page.waitForSelector('.kb-settings-card');
  const options = await page.evaluate(() => [...document.querySelectorAll('select[name=keyboard_id] option')].map(o => Number(o.value)));
  assert.deepStrictEqual(options.slice().sort((a, b) => a - b), [1, 120, 123, 125, 128], `hộp cài đặt liệt kê ${options}`);
  await page.selectOption('select[name=keyboard_id]', { label: 'British (PC)' });
  await page.click('.kb-settings-footer .primary-button');
  await page.waitForFunction(() => !document.querySelector('.kb-settings'));
  await sleep(400);
  const state = await page.evaluate(() => ({
    layout: window.NTKeyboard.layout()?.name,
    stored: JSON.parse(localStorage.getItem('typingease-keyboard-v1')).keyboardId
  }));
  assert.strictEqual(state.layout, 'British (PC)', 'layout đã đổi');
  assert.ok(Number.isFinite(state.stored), 'bố cục được nhớ lại');
  const board = await boardState(page);
  assert.strictEqual(board.activeKey, before.activeKey, 'phím đích được áp lại lên bàn phím mới');
  assert.ok(board.hands, 'bàn tay dựng lại cùng board');
});

test('17d khoá tiếng Việt chỉ vẽ bàn phím US, dù đã lưu bố cục "Vietnamese"', async page => {
  await page.goto(`${BASE}/robots.txt`);
  await page.evaluate(() => localStorage.setItem('typingease-keyboard-v1', JSON.stringify({ keyboardId: 208 })));
  await openPlayer(page, 'u1-l01/2');
  const name = await page.evaluate(() => window.NTKeyboard.layout()?.name);
  assert.strictEqual(name, 'United States Standard', `khoá Telex vẽ ${name}`);
});

test('17b ẩn bàn phím: bài dồn lên đầu trang, nút ⚙ mở lại được', async page => {
  await openPlayer(page, 'u1-l01/2');
  const setKeyboard = async (on, from) => {
    await page.click(from);
    await page.waitForSelector('.kb-settings-card');
    // Ô checkbox cố tình vô hình (chỉ để bàn phím và trình đọc màn hình thấy); nhãn mới là thứ bấm.
    const checked = await page.isChecked('#kb-show-keyboard');
    if (checked !== on) await page.click('label[for="kb-show-keyboard"]');
    await page.click('.kb-settings-footer .primary-button');
    await page.waitForFunction(() => !document.querySelector('.kb-settings'));
    await sleep(400);
  };

  await setKeyboard(false, '#board .js-keyboard-settings a');
  const hidden = await page.evaluate(() => {
    const board = document.querySelector('#board .nt-player-keyboard');
    const stage = document.querySelector('#stage');
    const card = document.querySelector('#stage .card').getBoundingClientRect();
    const box = stage.getBoundingClientRect();
    const button = document.querySelector('#pt-keyboard').getBoundingClientRect();
    return {
      hide: board.classList.contains('hide'),
      boardHeight: Math.round(board.getBoundingClientRect().height),
      justify: getComputedStyle(stage).justifyContent,
      // 0 = bài nằm sát mép trên khung, 1 = sát mép dưới.
      drop: (card.top + card.height / 2 - box.top) / box.height,
      button: { w: Math.round(button.width), h: Math.round(button.height) }
    };
  });
  assert.ok(hidden.hide, 'board mang class hide');
  assert.strictEqual(hidden.boardHeight, 0, 'bàn phím ẩn hẳn như bản gốc');
  // Khung bài căn sát đáy để nằm ngay trên bàn phím; bỏ bàn phím mà vẫn căn đáy thì cả bài tụt
  // xuống mép dưới màn hình.
  assert.strictEqual(hidden.justify, 'flex-start', 'không còn bàn phím thì bài dồn lên đầu trang');
  assert.ok(hidden.drop < 0.3, `bài phải ở nửa trên khung, đang ở ${hidden.drop.toFixed(2)}`);
  // Liên kết Cài đặt nằm TRONG bàn phím nên ẩn theo nó; nút ⚙ trên thanh trên cùng là lối vào
  // luôn có mặt, nếu không người học tự khoá mình ra ngoài không bật lại được bàn phím.
  assert.ok(hidden.button.w > 0 && hidden.button.h > 0, 'nút Cài đặt bàn phím trên thanh trên cùng');

  await setKeyboard(true, '#pt-keyboard');
  const board = await boardState(page);
  assert.strictEqual(board.keys, 60, 'phím trở lại');
  assert.strictEqual(board.activeKey, 'j', 'phím đích được áp lại');
  const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('typingease-keyboard-v1')).showKeyboard);
  assert.strictEqual(stored, true, 'tuỳ chọn được ghi lại');
});

test('17c Alt+K mở Cài đặt bàn phím ngay giữa lúc gõ', async page => {
  await openPlayer(page, 'u1-l01/2');
  await page.keyboard.press('Alt+k');
  await page.waitForSelector('.kb-settings-card', { timeout: 3000 });
  await page.keyboard.press('Escape');
  await page.waitForFunction(() => !document.querySelector('.kb-settings'));
  const state = await playerState(page);
  assert.strictEqual(state.state, 'typing', 'vẫn đang ở màn gõ');
  assert.strictEqual(state.value, '', 'phím tắt không lọt vào ô nhập');
});

for (const route of ['/tien-do/', '/luyen-tu-do/', '/bai-hoc/', '/kiem-tra-toc-do-go/', '/luyen-phim-yeu/',
  '/vi/', '/lessons/', '/typing-test/', '/progress/', '/practice/', '/touch-typing/',
  '/es/', '/es/lecciones/']) {
  test(`10 ${route} load không lỗi JS`, async page => {
    const response = await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle' });
    assert.ok(response.ok(), `HTTP ${response.status()}`);
    await sleep(300);
    const title = await page.title();
    assert.ok(title && !/404/.test(title), `title: ${title}`);
  });
}

// Bản tiếng Anh/Nhật đã bỏ, nhưng 9 URL cũ còn nằm trong kết quả tìm kiếm nên mỗi cái phải đưa
// người dùng sang trang tiếng Việt tương ứng chứ không rơi vào 404.
// `/en/` va `/ja/` tung la trang chu cua hai ban ngon ngu da bo, roi thanh trang chuyen huong ve
// ban tieng Viet. Nay `/` LA ban tieng Anh, nen chung ve do va trang dich noi tieng Anh.
// `/typing-test/` KHONG con o day: no da thanh trang that. Khi mot URL trong bang nay duoc
// viet thanh trang that thi phai go khoi bang — de lai la test se doi no chuyen huong, va se do.
const REDIRECTS = {
  '/en/': { to: '/', lang: 'en' },
  '/en/lessons/': { to: '/lessons/', lang: 'en' },
  '/en/learn/': { to: '/learn/', lang: 'en' },
  '/en/dvorak/': { to: '/dvorak/', lang: 'en' },
  '/en/dvorak/learn/': { to: '/dvorak/learn/', lang: 'en' },
  '/en/colemak/': { to: '/colemak/', lang: 'en' },
  '/en/colemak/learn/': { to: '/colemak/learn/', lang: 'en' },
  '/en/colemak-dh/': { to: '/colemak-dh/', lang: 'en' },
  '/en/colemak-dh/learn/': { to: '/colemak-dh/learn/', lang: 'en' },
  '/en/workman/': { to: '/workman/', lang: 'en' },
  '/en/workman/learn/': { to: '/workman/learn/', lang: 'en' },
  '/en/typing-test/': { to: '/typing-test/', lang: 'en' },
  '/en/typing-games/': { to: '/typing-games/', lang: 'en' },
  '/en/practice/': { to: '/practice/', lang: 'en' },
  '/en/progress/': { to: '/progress/', lang: 'en' },
  '/en/touch-typing/': { to: '/touch-typing/', lang: 'en' },
  '/ja/': { to: '/ja/', lang: 'ja' },
  // Tu 2026-09-25 (Dot 0 SEO) cac URL cu ve trang CUNG ngon ngu, khong con sang ban tieng Viet.
  '/en/what-is-wpm/': { to: '/what-is-wpm/', lang: 'en' },
  '/ja/what-is-wpm/': { to: '/ja/', lang: 'ja' },
  '/ja/touch-typing/': { to: '/ja/', lang: 'ja' },
  '/en/how-to-type-faster/': { to: '/how-to-type-faster/', lang: 'en' },
  '/en/average-typing-speed/': { to: '/average-typing-speed/', lang: 'en' }
};
// /ja/ nay là trang nhà của khoá tiếng Nhật (không còn chuyển hướng); vẫn giữ để chắc nó sống.
test('11b URL en/ja cũ không rơi vào 404', async page => {
  for (const [from, { to, lang }] of Object.entries(REDIRECTS)) {
    const response = await page.goto(`${BASE}${from}`, { waitUntil: 'networkidle' });
    assert.ok(response.ok(), `${from}: HTTP ${response.status()}`);
    await page.waitForURL(url => new URL(url).pathname === to, { timeout: 4000 })
      .catch(() => { throw new Error(`${from} → ${new URL(page.url()).pathname}, cần ${to}`); });
    const title = await page.title();
    assert.ok(title && !/404/.test(title), `${to}: title ${title}`);
    assert.strictEqual(await page.evaluate(() => document.documentElement.lang), lang, `${to}: lang=${lang}`);
  }
});

// Ban tieng Viet doi tu `/` sang `/vi/`. Moi trang tieng Viet phai tro ve dung nha moi; khong
// trang nao con duoc dua nguoi dung ve `/`, noi bay gio la mot trang ngon ngu khac — TRU dung o
// "Trang chu" (.home-switch) va logo (.brand), hai thu co y dua ve trang chon ngon ngu va ban phim.
test('11c trang tiếng Việt trỏ về /vi/, không trỏ về /', async page => {
  for (const path of ['/bai-hoc/', '/tien-do/', '/luyen-tu-do/', '/kiem-tra-toc-do-go/', '/cach-go-10-ngon/']) {
    await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle' });
    const links = await page.evaluate(() =>
      [...document.querySelectorAll('a[href]:not(.home-switch):not(.brand)')].map(a => a.getAttribute('href')));
    assert.ok(links.includes('/vi/'), `${path}: không có lối về /vi/`);
    const brands = await page.evaluate(() => [...document.querySelectorAll('a.brand')].map(a => a.getAttribute('href')));
    assert.ok(brands.length && brands.every(href => href === '/'), `${path}: logo phải về /, đang là ${brands.join(', ')}`);
    assert.ok(!links.includes('/'), `${path}: còn ${links.filter(h => h === '/').length} liên kết trỏ thẳng về /`);
  }
});

// Trang tieng Anh phai o lai trong the gioi tieng Anh. Truoc day `/typing-test/` va ba URL
// khac duoi /en/ la trang chuyen huong ve bai tieng Viet, nen mot nguoi hoc tieng Anh bam vao
// "Typing test" la roi thang sang mot trang ho khong doc duoc. Phep do nay chan dung lop loi do:
// khong trang tieng Anh nao duoc tro sang duong dan tieng Viet, tru dung nut doi ngon ngu.
const EN_PAGES = ['/', '/lessons/', '/typing-test/', '/progress/', '/practice/', '/touch-typing/',
  '/what-is-wpm/', '/average-typing-speed/', '/how-to-type-faster/'];
const VI_PATHS = ['/vi/', '/hoc/', '/bai-hoc/', '/tien-do/', '/luyen-tu-do/', '/luyen-phim-yeu/',
  '/kiem-tra-toc-do-go/', '/cach-go-10-ngon/', '/cach-tang-wpm/', '/wpm-la-gi/', '/wpm-bao-nhieu-la-nhanh/'];
test('11d trang tiếng Anh không trỏ sang trang tiếng Việt', async page => {
  for (const path of EN_PAGES) {
    const response = await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle' });
    assert.ok(response.ok(), `${path}: HTTP ${response.status()}`);
    assert.strictEqual(await page.evaluate(() => document.documentElement.lang), 'en', `${path}: lang`);
    const leaks = await page.evaluate(vi => [...document.querySelectorAll('a[href]')]
      .filter(a => a.getAttribute('hreflang') !== 'vi')
      .map(a => a.getAttribute('href'))
      .filter(href => vi.some(p => href === p || href.startsWith(p + '#'))), VI_PATHS);
    assert.deepStrictEqual(leaks, [], `${path}: trỏ sang trang tiếng Việt: ${leaks.join(', ')}`);
  }
});

// O doi ngon ngu (EN, VI, ES…) da bi bo o goc phai moi trang, thay bang MOT o "Trang chu" ve `/`
// — trang chon ngon ngu va ban phim. Kiem tren moi trang trong sitemap (tru chinh `/`, noi o ay
// se tro ve chinh no) va tren cac trang ung dung tieng Viet khong nam trong sitemap.
test('11f mọi trang: một ô Trang chủ về /, không còn ô đổi ngôn ngữ', async page => {
  const sitemap = fs.readFileSync(path.join(__dirname, '..', 'sitemap.xml'), 'utf8');
  const paths = [...sitemap.matchAll(/<loc>https:\/\/typingease\.site([^<]*)<\/loc>/g)].map(m => m[1]);
  for (const route of paths) {
    await page.goto(`${BASE}${route}`, { waitUntil: 'domcontentloaded' });
    const shape = await page.evaluate(() => ({
      switches: document.querySelectorAll('.lang-switch').length,
      homes: [...document.querySelectorAll('.topbar .home-switch')].map(a => a.getAttribute('href'))
    }));
    assert.strictEqual(shape.switches, 0, `${route}: còn ${shape.switches} ô đổi ngôn ngữ`);
    if (route === '/') assert.deepStrictEqual(shape.homes, [], '/ không cần ô Trang chủ trỏ về chính nó');
    else if (await page.evaluate(() => !!document.querySelector('.topbar .header-actions'))) {
      assert.deepStrictEqual(shape.homes, ['/'], `${route}: ô Trang chủ = ${JSON.stringify(shape.homes)}`);
    }
  }
});

// Moi trang duoc khai trong sitemap phai that su ton tai va that su cho index. Sitemap noi doi la
// kieu loi khong bao gio hien ra trong trinh duyet — no chi hien trong Search Console, vai tuan sau.
test('11e sitemap: mọi URL đều sống và đều index được', async page => {
  const body = await (await page.goto(`${BASE}/sitemap.xml`)).text();
  const paths = [...body.matchAll(/<loc>https:\/\/typingease\.site([^<]*)<\/loc>/g)].map(m => m[1]);
  assert.ok(paths.length >= 16, `sitemap chỉ có ${paths.length} URL`);
  for (const path of paths) {
    const response = await page.goto(`${BASE}${path}`, { waitUntil: 'domcontentloaded' });
    assert.ok(response.ok(), `${path}: HTTP ${response.status()}`);
    const robots = await page.evaluate(() =>
      document.querySelector('meta[name="robots"]')?.getAttribute('content') || 'index');
    assert.ok(!/noindex/.test(robots), `${path}: nằm trong sitemap mà lại ${robots}`);
  }
});

// Menu tren dien thoai (menu.js): <= 900px menu tren cung bi an; nut ☰ mo chinh menu do thanh bang tha
// xuong, Esc dong, bam ra ngoai dong; tren man rong nut khong hien.
test('11k menu điện thoại: nút ☰ mở menu trên cùng, Esc và bấm ra ngoài thì đóng', async page => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const url of ['/', '/vi/', '/fr/', '/ar/durus/', '/fr/test-de-frappe/', '/tro-choi/']) {
    await page.goto(`${BASE}${url}`, { waitUntil: 'networkidle' });
    assert.ok(await page.isVisible('.menu-toggle'), `${url}: không thấy nút ☰`);
    assert.ok(!(await page.isVisible('.topbar > nav')), `${url}: menu phải ẩn trước khi bấm`);
    await page.click('.menu-toggle');
    const links = await page.$$eval('.topbar > nav a', items => items.filter(a => a.offsetParent).length);
    assert.ok(links >= 3, `${url}: menu mở ra chỉ có ${links} liên kết`);
    const box = await page.$eval('.topbar > nav', nav => nav.getBoundingClientRect().width);
    assert.ok(box >= 380, `${url}: menu thả xuống phải rộng hết màn hình (${box}px)`);
    await page.keyboard.press('Escape');
    assert.ok(!(await page.isVisible('.topbar > nav')), `${url}: Esc không đóng menu`);
    await page.click('.menu-toggle');
    await page.mouse.click(195, 800);
    assert.strictEqual(await page.getAttribute('.menu-toggle', 'aria-expanded'), 'false', `${url}: bấm ra ngoài không đóng menu`);
  }
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto(`${BASE}/fr/`, { waitUntil: 'networkidle' });
  assert.ok(!(await page.isVisible('.menu-toggle')) && await page.isVisible('.topbar > nav'), 'màn rộng: nút ☰ phải ẩn, menu phải hiện');
});

// Trang phap ly (scripts/build-legal-pages.mjs): moi trang nha co dong Gioi thieu / Dieu khoan / Quyen
// rieng tu o chan trang, ba lien ket deu song; About duoc index, Terms/Privacy noindex; ban dich ghi ro
// ban tieng Anh co hieu luc va co email lien he.
test('11j trang pháp lý: chân trang mọi trang nhà trỏ tới 3 trang sống, About index, Terms/Privacy noindex', async page => {
  const catalogue = loadGlobal('data/languages.js').TypingEaseLanguages.list;
  const homes = ['/', '/vi/', ...catalogue.filter(entry => !['en', 'vi'].includes(entry.code)).map(entry => `/${entry.code}/`)];
  for (const home of homes) {
    const html = await (await page.request.get(`${BASE}${home}`)).text();
    const block = /<p class="footer-legal">([\s\S]*?)<\/p>/.exec(html);
    assert.ok(block, `${home}: chân trang thiếu dòng pháp lý`);
    const links = [...block[1].matchAll(/href="([^"]+)"/g)].map(m => m[1]);
    assert.strictEqual(links.length, 3, `${home}: cần 3 liên kết pháp lý`);
    for (const [index, url] of links.entries()) {
      const response = await page.request.get(`${BASE}${url}`);
      assert.ok(response.ok(), `${home} → ${url}: HTTP ${response.status()}`);
      const text = await response.text();
      const robots = /<meta name="robots" content="([^"]+)"/.exec(text)[1];
      assert.strictEqual(robots, index === 0 ? 'index, follow' : 'noindex, follow', `${url}: robots ${robots}`);
      assert.ok(text.includes('support@typingease.site'), `${url}: thiếu email liên hệ`);
      if (home !== '/') assert.ok(/hreflang="en" lang="en">English<\/a>/.test(text), `${url}: bản dịch phải trỏ về bản tiếng Anh có hiệu lực`);
    }
  }
});

// Trang tro choi (scripts/build-game-pages.mjs, tro-choi/games.js): ca ba tro choi that su choi duoc
// bang ban phim that — Mua chu pha duoc tu, Dua voi bong ve dich, San phim nhan phim theo vi tri.
// Trang test / tro choi da bat cua moi ngon ngu: doc slug tu file chu cua may sinh, roi chi giu URL co trong sitemap.
const generatedPages = (dir, sitemap) => fs.readdirSync(path.join(__dirname, '..', dir, 'text')).filter(file => file.endsWith('.mjs'))
  .map(file => [file.replace('.mjs', ''), /slug: '([^']+)'/.exec(fs.readFileSync(path.join(__dirname, '..', dir, 'text', file), 'utf8'))])
  .filter(([, slug]) => slug).map(([lang, slug]) => `/${lang}/${slug[1]}/`)
  .filter(url => sitemap.includes(`<loc>https://typingease.site${url}</loc>`));

test('11i trò chơi: Mưa chữ phá được từ, Đua về đích, Săn phím tính điểm', async page => {
  const sitemap = await (await page.request.get(`${BASE}/sitemap.xml`)).text();
  const gamePages = ['/typing-games/', '/tro-choi/', ...generatedPages('tro-choi', sitemap).filter(url => url !== '/typing-games/')];
  for (const url of gamePages) {
    await page.goto(`${BASE}${url}`, { waitUntil: 'networkidle' });
    await page.click('[data-act="rain-start"]');
    await page.waitForFunction(() => window.TypingEaseGames.rain.drops.length > 0, null, { timeout: 5000 });
    const word = await page.evaluate(() => window.TypingEaseGames.rain.drops[0].word);
    await page.keyboard.type(word);
    await page.keyboard.press('Space');
    assert.strictEqual(await page.evaluate(() => window.TypingEaseGames.rain.cleared), 1, `${url}: Mưa chữ không phá được "${word}"`);

    await page.click('[data-game-tab="race"]');
    await page.selectOption('#race-pace', '20');
    await page.click('[data-act="race-start"]');
    await page.keyboard.type(await page.evaluate(() => window.TypingEaseGames.race.text));
    await page.waitForFunction(() => !document.querySelector('#race-result').hidden, null, { timeout: 5000 });

    await page.click('[data-game-tab="keys"]');
    await page.click('[data-act="keys-start"]');
    await page.waitForFunction(() => window.TypingEaseGames.hunt.running && window.TypingEaseGames.hunt.current, null, { timeout: 8000 });
    const code = await page.evaluate(() => {
      const want = window.TypingEaseGames.hunt.current;
      for (const row of window.NTKeyboard.layout().structure) for (const key of row) if (key.main === want) return key.hardware;
      return null;
    });
    await page.keyboard.press(code);
    assert.strictEqual(await page.textContent('#keys-hits'), '1', `${url}: Săn phím không tính phím ${code}`);
  }
});

// Dot 1 SEO: trang test toc do cua tung ngon ngu (scripts/build-test-pages.mjs). Moi trang trong
// sitemap co the-luong 15 s -> 10 phut, go bang ban phim that 15 giay la ra ket qua dung don vi cua
// ngon ngu do, va bai 10 phut noi them doan van khi nguoi go toi gan cuoi.
test('11h trang test tốc độ theo ngôn ngữ: gõ thật ra kết quả, bài dài nối thêm văn bản', async page => {
  const body = await (await page.request.get(`${BASE}/sitemap.xml`)).text();
  const tests = generatedPages('kiem-tra-toc-do-go', body);
  assert.ok(tests.length >= 9, `sitemap chỉ có ${tests.length} trang test theo ngôn ngữ`);
  for (const url of tests) {
    await page.goto(`${BASE}${url}`, { waitUntil: 'networkidle' });
    const durations = await page.$$eval('[data-duration]', buttons => buttons.map(button => Number(button.dataset.duration)));
    assert.deepStrictEqual(durations, [15, 30, 60, 120, 180, 300, 600], `${url}: thời lượng`);
    await page.click('[data-duration="600"]');
    assert.strictEqual(await page.textContent('#time-left'), '10:00', `${url}: đồng hồ 10 phút`);
    const before = (await page.textContent('#test-prompt')).length;
    await page.evaluate(n => { const input = document.querySelector('#typing-input'); input.value = document.querySelector('#test-prompt').textContent.slice(0, n); input.dispatchEvent(new Event('input')); }, before - 100);
    assert.ok((await page.textContent('#test-prompt')).length > before, `${url}: bài dài không nối thêm văn bản`);
    await page.click('#restart');
    await page.click('[data-duration="15"]');
    const text = await page.textContent('#test-prompt');
    await page.click('#typing-input');
    await page.keyboard.type(text.slice(0, 30));
    await page.waitForFunction(() => !document.querySelector('#test-result').hidden, null, { timeout: 20000 });
    const unit = await page.textContent('.test-stats > div:nth-child(2) span');
    assert.ok((await page.textContent('#result-wpm')).endsWith(unit), `${url}: kết quả phải dùng đơn vị ${unit}`);
    assert.strictEqual(await page.textContent('#result-accuracy'), '100%', `${url}: gõ đúng mà không 100%`);
  }
});

// Dot 0 SEO chong spam (2026-09-25). Doc thang HTML (khong mo trinh duyet) cho nhanh: moi URL trong
// sitemap co <lastmod>, canonical tro ve chinh no, the chia se du, JSON-LD doc duoc va khong co
// AggregateRating/Review; trang tien do noindex va khong nam trong sitemap; trang nha cac ngon ngu
// khai hreflang HAI CHIEU voi nhau.
test('11g SEO: lastmod, canonical, OG, JSON-LD sạch, tiến độ noindex, hreflang trang nhà hai chiều', async page => {
  const body = await (await page.request.get(`${BASE}/sitemap.xml`)).text();
  const entries = [...body.matchAll(/<url><loc>https:\/\/typingease\.site([^<]*)<\/loc>(<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>)?<\/url>/g)];
  const html = async url => (await page.request.get(`${BASE}${url}`)).text();
  for (const [, url, lastmod] of entries) {
    assert.ok(lastmod, `${url}: thiếu <lastmod>`);
    const text = await html(url);
    assert.ok(text.includes(`<link rel="canonical" href="https://typingease.site${url}"`), `${url}: canonical không trỏ về chính nó`);
    for (const tag of ['og:title', 'og:description', 'og:image', 'og:url', 'twitter:card'])
      assert.ok(text.includes(`"${tag}"`), `${url}: thiếu ${tag}`);
    for (const [, json] of text.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      assert.doesNotThrow(() => JSON.parse(json), `${url}: JSON-LD không đọc được`);
      assert.ok(!/AggregateRating|"Review"/.test(json), `${url}: JSON-LD khai đánh giá không có thật`);
    }
  }
  const catalogue = loadGlobal('data/languages.js').TypingEaseLanguages.list;
  const listed = new Set(entries.map(([, url]) => url));
  for (const progress of ['/tien-do/', '/progress/', '/fr/progres/', '/ja/shinchoku/']) {
    assert.ok(!listed.has(progress), `${progress}: trang tiến độ không được nằm trong sitemap`);
    assert.ok(/<meta name="robots" content="noindex, follow"/.test(await html(progress)), `${progress}: phải noindex, follow`);
  }
  const homes = ['/', '/vi/', ...catalogue.filter(entry => !['en', 'vi'].includes(entry.code)).map(entry => `/${entry.code}/`)];
  const clusters = new Map();
  for (const home of homes) {
    const text = await html(home);
    clusters.set(home, new Set([...text.slice(0, text.indexOf('</head>')).matchAll(/hreflang="[^"]+" href="https:\/\/typingease\.site([^"]+)"/g)].map(m => m[1])));
  }
  for (const [home, targets] of clusters) {
    for (const other of homes) assert.ok(targets.has(other), `${home}: hreflang thiếu ${other}`);
  }
});

// Khoa Tier 2 KHONG duoc viet tay: scripts/build-course.js suy thu tu day phim tu chinh file
// bo cuc, roi trai noi dung tu data/words/<lang>.js. Cai de sai nhat trong ca co che do la mot
// thu rat cu the: khoa duoc sinh ra tu bo cuc nay, ma man hinh lai ve mot bo cuc khac — nguoi
// hoc doc bai bao bam mot phim khong ton tai tren ban phim truoc mat.
//
// Phep do nay vi the so HANG CO SO THAT tren man hinh voi hang co so trong file bo cuc, cho
// MOI ngon ngu ma data/languages.js khai la da san sang. Khong mot hang so ngon ngu nao o day:
// them mot khoa moi la no tu duoc kiem, khong phai sua test.
const HOME_ROW_HW = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote'];

function loadGlobal(file) {
  const scope = {};
  new Function('window', fs.readFileSync(path.join(__dirname, '..', file), 'utf8'))(scope);
  return scope;
}

// MOI HO, khong chi ho mac dinh: /fr/bepo/apprendre/ phai ve BEPO, /dvorak/learn/ phai ve
// Dvorak. Doc thang tu `courses` cua data/languages.js, nen them mot ho la no tu duoc kiem.
function tier2Courses() {
  const list = loadGlobal('data/languages.js').TypingEaseLanguages.list;
  return list.filter(entry => entry.course?.status === 'ready')
    .flatMap(entry => entry.courses || [])
    .map(family => {
      const file = path.join(__dirname, '..', 'data', `curriculum.${family.id}.js`);
      if (!fs.existsSync(file)) return null;
      const curriculum = loadGlobal(`data/curriculum.${family.id}.js`).TypingEaseCurriculum;
      // Chi khoa SINH TU DONG moi co header canh bao; khoa viet tay (en, vi) khong qua duong nay.
      const generated = /SINH T\u1ef0 \u0110\u1ed8NG/.test(fs.readFileSync(file, 'utf8'));
      return generated ? { code: family.id, href: family.href, keyboardId: curriculum.keyboardId } : null;
    })
    .filter(Boolean);
}

for (const course of tier2Courses()) {
  test(`21 ${course.code}: bàn phím trên màn hình đúng là bố cục ${course.keyboardId} mà khoá được sinh ra từ đó`, async page => {
    const layout = JSON.parse(fs.readFileSync(
      path.join(__dirname, '..', 'data', 'keyboards', 'layouts', `${course.keyboardId}.json`), 'utf8'));
    const byHardware = new Map();
    for (const row of layout.structure) {
      for (const key of row) if (key.hardware && !byHardware.has(key.hardware)) byHardware.set(key.hardware, key);
    }
    const expected = HOME_ROW_HW.map(hw => {
      const main = byHardware.get(hw)?.main;
      return String((main && typeof main === 'object' ? main.key : main) || '');
    }).filter(Boolean).join('');

    const curriculum = loadGlobal(`data/curriculum.${course.code}.js`).TypingEaseCurriculum;
    const first = curriculum.sequence[0];
    // Gieo mot lua chon ban phim NGOAI HO: nguoi nay da chon mot bo cuc khac o mot khoa khac.
    // Truoc day lua chon da luu luon thang, va khoa BEPO hien ban phim AZERTY cua ho. Nay no phai
    // hien bo cuc cua khoa — lua chon kia van con nguyen trong kho, chi khong duoc ve o day.
    const outsider = curriculum.layouts.includes(1) ? 181 : 1;
    await page.goto(`${BASE}/robots.txt`);
    await page.evaluate(id => localStorage.setItem('typingease-keyboard-v1',
      JSON.stringify({ showKeyboard: true, showHands: false, keyboardId: id })), outsider);
    const lessonRequests = [];
    page.on('request', request => { if (request.url().includes('/data/lessons/')) lessonRequests.push(request.url()); });
    const response = await page.goto(`${BASE}${course.href}#${first}/1`, { waitUntil: 'networkidle' });
    assert.ok(response.ok(), `${course.href}: HTTP ${response.status()}`);
    await page.waitForSelector('#board .keyboard-key');
    assert.ok(lessonRequests.some(url => url.includes(`/data/lessons/${course.code}/${first}.json`)),
      `${course.code}: player không tải bài từ data/lessons/${course.code}/ (đã tải: ${lessonRequests.join(', ') || 'không gì'})`);
    const kept = await page.evaluate(() => JSON.parse(localStorage.getItem('typingease-keyboard-v1')).keyboardId);
    assert.strictEqual(kept, outsider, 'lựa chọn bàn phím đã lưu không được bị ghi đè');

    const shown = await page.evaluate(() => {
      const keys = [...document.querySelectorAll('#board .keyboard-key')];
      // Nhan phim mang ca ky tu Shift; lay dong nhan CUOI, tuc ky tu khong Shift.
      return keys.map(key => {
        const labels = [...key.querySelectorAll('.key-label')];
        return (labels[labels.length - 1]?.textContent || '').trim();
      }).join('\u0001');
    });
    const flat = shown.split('\u0001').join('').toLowerCase();
    for (const character of expected) {
      assert.ok(flat.includes(character.toLowerCase()),
        `${course.code}: bàn phím thiếu "${character}" — hàng cơ sở của bố cục ${course.keyboardId} là "${expected}"`);
    }
    // "Có mặt đâu đó" là chưa đủ: BÉPO và AZERTY có chung gần hết chữ cái, chỉ khác CHỖ. Hàng cơ sở
    // phải hiện ra LIỀN NHAU, đúng thứ tự, theo ký tự chính của từng phím.
    const mains = await page.evaluate(() => [...document.querySelectorAll('#board .keyboard-key')]
      .map(key => (key.dataset.values || '').split('\u0001')[0]).filter(value => value.length === 1).join(''));
    assert.ok(mains.includes(expected),
      `${course.code}: hàng cơ sở trên màn hình không phải "${expected}" (bố cục ${course.keyboardId})`);
  });
}

// --- ban phim 105 phim (ISO) va Unit 4 -----------------------------------------------------------
// Bo cuc ISO mang them o IntlBackslash ngay sau Shift trai (scripts/add-iso-key.js); nguoi hoc noi
// ban phim THAT cua ho la kieu nao qua `keyboardShape`. Cac test 22 kiem ca hai chieu cua lua chon
// ay, duong di qua hop cai dat, bai Unit 4 day chinh phim do, va tu the tay tren hang co o ISO.
async function openCourse(page, href, hash, preferences) {
  if (preferences) {
    await page.goto(`${BASE}/robots.txt`);
    await page.evaluate(value => localStorage.setItem('typingease-keyboard-v1', JSON.stringify(value)), preferences);
  }
  await page.goto(`${BASE}${href}#${hash}`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.TypingEasePlayer && !['loading'].includes(window.TypingEasePlayer.getState().state));
  await page.waitForFunction(() => document.querySelector('#board .nt-player-keyboard'), null, { timeout: 15000 });
  await sleep(150);
}

// Hang chua Shift trai, doc tu DOM: ky tu chinh cua tung phim theo thu tu, vi tri Shift trai, va so
// phim tren CA ban phim mang ky tu chinh `probe`.
const shiftRow = (page, probe) => page.evaluate(probe => {
  const main = key => (key.dataset.values ?? '').split('\u0001')[0];
  const keys = [...document.querySelectorAll('#board .keyboard-key')];
  const shift = keys.find(key => /^Shift/.test(main(key)));
  const row = shift ? [...shift.closest('.keyboard-row').querySelectorAll('.keyboard-key')] : [];
  return {
    total: keys.length,
    row: row.map(main),
    shiftAt: row.indexOf(shift),
    probe: keys.filter(key => main(key) === probe).length,
    probeInRow: row.findIndex(key => main(key) === probe)
  };
}, probe);

// AZERTY in "<" o dung cho do tren moi ban phim Phap that; neu o nay mat, bai u4-l02 day mot phim
// khong co tren man hinh.
test('22a ISO: AZERTY vẽ đúng một phím "<" ngay sau Shift trái', async page => {
  await openCourse(page, '/fr/apprendre/', 'u1-l01/1');
  const shape = await shiftRow(page, '<');
  assert.strictEqual(shape.probe, 1, `bàn phím có ${shape.probe} phím "<"`);
  assert.ok(shape.shiftAt >= 0, 'không thấy Shift trái');
  assert.strictEqual(shape.probeInRow, shape.shiftAt + 1, `hàng Shift: ${shape.row.join(' ')}`);
  assert.strictEqual(shape.row[shape.shiftAt + 2], 'w', 'sau "<" là w (KeyZ)');
});

// Lua chon kieu ban phim phai thang bo cuc theo CA hai chieu: nguoi dung ban phim My voi bo cuc Phap
// khong co o "<", con nguoi dung ban phim chau Au voi bo cuc US lai co. keyboardId gieo nam TRONG ho
// cua khoa, de luat "chi ve bo cuc cua ho" khong xen vao.
test('22b kiểu bàn phím: ansi bỏ phím "<" của AZERTY, iso thêm phím cạnh Shift cho US', async page => {
  await openCourse(page, '/fr/apprendre/', 'u1-l01/1', { keyboardId: 181, keyboardShape: 'ansi' });
  const ansi = await shiftRow(page, '<');
  assert.strictEqual(ansi.probe, 0, `ansi vẫn còn phím "<": ${ansi.row.join(' ')}`);
  assert.strictEqual(ansi.row[ansi.shiftAt + 1], 'w', 'ngay sau Shift trái là w');

  await openCourse(page, '/learn/', 'u1-l01/1', { keyboardId: 1, keyboardShape: 'auto' });
  const plain = await shiftRow(page, '\\');
  assert.strictEqual(plain.row[plain.shiftAt + 1], 'z', `US auto: ${plain.row.join(' ')}`);
  await openCourse(page, '/learn/', 'u1-l01/1', { keyboardId: 1, keyboardShape: 'iso' });
  const iso = await shiftRow(page, '\\');
  assert.strictEqual(iso.total, plain.total + 1, `iso: ${plain.total} → ${iso.total} phím`);
  assert.strictEqual(iso.probeInRow, iso.shiftAt + 1, `iso: hàng Shift ${iso.row.join(' ')}`);
  assert.strictEqual(iso.probe, 2, 'phím mới là bản sao của Backslash');
  assert.strictEqual(iso.row[iso.shiftAt + 2], 'z');
});

// Duong nguoi hoc that di: mo hop cai dat, doi kieu, luu. Board phai dung lai ngay, khong can nap trang.
test('22c hộp cài đặt: chọn kiểu bàn phím ansi rồi lưu là board mất phím "<"', async page => {
  await openCourse(page, '/fr/apprendre/', 'u1-l01/2');
  await page.click('#board .js-keyboard-settings a');
  await page.waitForSelector('.kb-settings-card');
  const options = await page.evaluate(() => [...document.querySelectorAll('select[name=keyboard_shape] option')].map(o => o.value));
  assert.deepStrictEqual(options, ['auto', 'ansi', 'iso'], `lựa chọn: ${options}`);
  assert.strictEqual(await page.inputValue('select[name=keyboard_shape]'), 'auto', 'mặc định là auto');
  await page.selectOption('select[name=keyboard_shape]', 'ansi');
  await page.click('.kb-settings-footer .primary-button');
  await page.waitForFunction(() => !document.querySelector('.kb-settings'));
  await page.waitForFunction(() => ![...document.querySelectorAll('#board .keyboard-key')]
    .some(key => (key.dataset.values ?? '').split('\u0001')[0] === '<'), null, { timeout: 5000 });
  const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('typingease-keyboard-v1')).keyboardShape);
  assert.strictEqual(stored, 'ansi', 'lựa chọn được nhớ lại');
  const board = await boardState(page);
  assert.ok(board.hands, 'bàn tay dựng lại cùng board');
});

// Unit 4 la nhanh moi nhat cua bo sinh khoa; mot man go cua no phai choi het duoc tu dau den cuoi,
// ke ca "<" va chu co dau nhu ô, ê ma Playwright chen thang vao o nhap.
test('22d Unit 4: màn gõ đầu tiên của u4-l02 (AZERTY) chơi xong với 100% chính xác', async page => {
  const response = await page.request.get(`${BASE}/data/lessons/fr/u4-l02.json`);
  assert.ok(response.ok(), 'không tải được data/lessons/fr/u4-l02.json');
  const lesson = await response.json();
  const index = lesson.screens.findIndex(screen => typeof screen.content === 'string' && screen.content.trim());
  assert.ok(index >= 0, 'bài không có màn gõ');
  const target = targetOf(lesson.screens[index]);
  // Tat ban tay 3D: moi phim mot tween WebGL tren swiftshader (~350 ms), 84 ky tu thanh 30 s. Test
  // nay kiem noi dung bai, tay da co 11-15 lo.
  await openCourse(page, '/fr/apprendre/', `u4-l02/${index + 1}`, { keyboardId: 181, showKeyboard: true, showHands: false });
  const state = await playerState(page);
  assert.strictEqual(state.state, 'typing', `player ở trạng thái ${state.state}`);
  assert.strictEqual((await boardState(page)).activeKey, target[0], 'phím đích là ký tự đầu');
  await page.keyboard.type(target);
  await page.waitForFunction(() => window.TypingEasePlayer.getState().state === 'screen-result', null, { timeout: 10000 });
  const run = await page.evaluate(() => window.TypingEasePlayer.getRun());
  assert.strictEqual(run.errors, 0, `lỗi: ${run.errors}`);
  assert.strictEqual(await page.locator('#stage .star.is-on').count(), 3, '100% chính xác → 3 sao');
});

// Chu am Dai Loan (`typeByPosition`): bo go tat, phim vat ly KeyF phai ra ㄑ — trang tu doi ma phim
// sang ky tu cua bo cuc 215. Go mot man u3 (co dau thanh) chi bang ma phim vat ly, phai xong 100%.
test('22f Chú âm: gõ theo vị trí phím, u3 có dấu thanh xong với 100% chính xác', async page => {
  const layout = await (await page.request.get(`${BASE}/data/keyboards/layouts/215.json`)).json();
  const codeOf = new Map(layout.structure.flat().filter(entry => typeof entry.main === 'string').map(entry => [entry.main, entry.hardware]));
  codeOf.set(' ', 'Space');
  const lesson = await (await page.request.get(`${BASE}/data/lessons/zh-tw/u3-l01.json`)).json();
  const index = lesson.screens.findIndex(screen => typeof screen.content === 'string' && /[ˇˋˊ˙]/.test(screen.content));
  assert.ok(index >= 0, 'u3-l01 không có màn nào có dấu thanh');
  const target = targetOf(lesson.screens[index]);
  await openCourse(page, '/zh-tw/xuexi/', `u3-l01/${index + 1}`, { keyboardId: 215, showKeyboard: true, showHands: false });
  assert.strictEqual((await playerState(page)).state, 'typing');
  for (const character of target) {
    const code = codeOf.get(character);
    assert.ok(code, `không có phím cho ${character}`);
    await page.keyboard.press(code);
  }
  await page.waitForFunction(() => window.TypingEasePlayer.getState().state === 'screen-result', null, { timeout: 10000 });
  const run = await page.evaluate(() => window.TypingEasePlayer.getRun());
  assert.strictEqual(run.errors, 0, `lỗi: ${run.errors}`);
});

// O ISO chen vao truoc KeyZ; neu kho tu the dem no la mot cot thi tay voi sang phim ben canh. w cua
// AZERTY nam dung cho z cua US nen phai cung mot tu the.
test('22e tư thế: w của AZERTY (KeyZ) trùng tư thế z của US', async page => {
  await openCourse(page, '/fr/apprendre/', 'u1-l01/1');
  const azerty = await handSlots(page, 'w');
  const less = await handSlots(page, '<');
  await openCourse(page, '/learn/', 'u1-l01/1', { keyboardId: 1 });
  const us = await handSlots(page, 'z');
  assert.deepStrictEqual(azerty, us, `w AZERTY ${JSON.stringify(azerty)} ≠ z US ${JSON.stringify(us)}`);
  assert.notDeepStrictEqual(less.left, azerty.left, 'phím "<" không được mượn tư thế của w');
});

// Huy hiệu: gieo sẵn tiến độ vào localStorage rồi nạp lại trang — huy hiệu phải khớp đúng số liệu
// mà chính trang đó đang hiện, và huy hiệu chưa đạt phải nói rõ còn thiếu bao nhiêu.
const BADGE_SEED = () => {
  const lessons = {};
  ['u1-l01', 'u1-l02', 'u1-l03', 'u1-l04', 'u1-l05', 'u1-l06', 'u1-l07', 'u1-l08', 'u1-l09', 'u1-l10']
    .forEach(id => { lessons[id] = { screens: { 0: { stars: 3, maxStars: 3 }, 1: { stars: 3, maxStars: 3 } }, stars: 6, maxStars: 6, bestWpm: 44, bestAccuracy: 96, seconds: 200, attempts: 1, completedAt: Date.now() }; });
  localStorage.setItem('typingease-progress-v3', JSON.stringify({ version: 3, current: null, lessons, unlocked: ['u1', 'u2'], legacyCompleted: 0, migratedAt: Date.now() }));
  localStorage.setItem('typingease-daily-goal-v1', JSON.stringify({ goalMinutes: 10, days: {}, currentStreak: 4, bestStreak: 4, lastCompletedDate: '' }));
  localStorage.setItem('typingease-profile-v1', JSON.stringify({
    attempts: [{ at: Date.now(), kind: 'lesson', lesson: 1, wpm: 44, accuracy: 96, seconds: 60 }],
    keys: { a: { hits: 3000, misses: 60, ms: 0, samples: 0 } }
  }));
};

test('17 huy hiệu: rỗng thì 0/10, có tiến độ thì mở đúng 5 cái', async page => {
  await page.goto(`${BASE}/tien-do/`, { waitUntil: 'networkidle' });
  const empty = await page.evaluate(() => ({
    count: document.querySelector('#badges-count').textContent.trim(),
    cards: document.querySelectorAll('.badge').length,
    earned: document.querySelectorAll('.badge.is-earned').length,
    store: localStorage.getItem('typingease-badges-v1')
  }));
  assert.strictEqual(empty.cards, 10, 'số huy hiệu');
  assert.strictEqual(empty.earned, 0, 'chưa gõ gì thì chưa mở cái nào');
  assert.strictEqual(empty.count, '0 / 10');
  assert.strictEqual(empty.store, null, 'không đạt thì không ghi mốc nào vào localStorage');

  await page.evaluate(BADGE_SEED);
  await page.reload({ waitUntil: 'networkidle' });
  const full = await page.evaluate(() => ({
    count: document.querySelector('#badges-count').textContent.trim(),
    earned: [...document.querySelectorAll('.badge.is-earned')].map(el => el.dataset.badge),
    locked: [...document.querySelectorAll('.badge:not(.is-earned)')].map(el => ({
      id: el.dataset.badge, meta: el.querySelector('.badge-meta').textContent.trim(),
      track: Boolean(el.querySelector('.badge-track'))
    })),
    store: Object.keys(JSON.parse(localStorage.getItem('typingease-badges-v1') || '{}'))
  }));
  assert.deepStrictEqual(full.earned, ['first-step', 'unit-1', 'stars-30', 'streak-3', 'clean-40'], 'huy hiệu mở');
  assert.strictEqual(full.count, '5 / 10');
  assert.deepStrictEqual(full.store.sort(), [...full.earned].sort(), 'mốc mở khoá ghi đúng những cái đã đạt');
  assert.ok(full.locked.every(item => item.track), 'huy hiệu chưa đạt có thanh tiến trình');
  const stars90 = full.locked.find(item => item.id === 'stars-90');
  assert.strictEqual(stars90.meta, '60 / 90', 'chưa đạt thì hiện số hiện tại / mốc');

  // Xoá lịch sử là huy hiệu mất theo, không còn cái nào "mồ côi".
  page.once('dialog', dialog => dialog.accept());
  await page.click('#clear-results');
  await sleep(120);
  const cleared = await page.evaluate(() => ({
    earned: document.querySelectorAll('.badge.is-earned').length,
    store: JSON.parse(localStorage.getItem('typingease-badges-v1') || '{}')
  }));
  assert.strictEqual(cleared.earned, 0, 'xoá lịch sử → không còn huy hiệu nào');
  assert.deepStrictEqual(cleared.store, {}, 'mốc mở khoá cũng bị dọn');
});

test('18 công tắc: âm click tắt sẵn, bàn tay bật sẵn, Alt+S/Alt+H đổi và nhớ', async page => {
  await openPlayer(page, 'u1-l01/2');
  const toggles = () => page.evaluate(() => ({
    sound: document.querySelector('#pt-sound').getAttribute('aria-pressed'),
    hands: document.querySelector('#pt-hands').getAttribute('aria-pressed'),
    stored: [localStorage.getItem('typingease-sound-v1'),
      JSON.parse(localStorage.getItem('typingease-keyboard-v1') || 'null')?.animatedHands ?? null],
    static: !document.querySelector('#board .nt-player-keyboard').classList.contains('nt-player-hands-animated')
  }));
  const start = await toggles();
  assert.strictEqual(start.sound, 'false', 'âm click PHẢI tắt mặc định');
  assert.strictEqual(start.hands, 'true', 'bàn tay động bật mặc định');
  assert.deepStrictEqual(start.stored, [null, null], 'chưa động vào thì không ghi gì');

  await page.click('#pt-sound');
  await page.click('#pt-hands');
  const clicked = await toggles();
  assert.deepStrictEqual([clicked.sound, clicked.hands], ['true', 'false'], 'bấm nút đổi trạng thái');
  assert.deepStrictEqual(clicked.stored, ['on', false], 'ghi vào localStorage');
  assert.strictEqual(clicked.static, true, 'tắt tay động → board bỏ class nt-player-hands-animated');

  await page.keyboard.press('Alt+s');
  await page.keyboard.press('Alt+h');
  const afterAlt = await toggles();
  assert.deepStrictEqual([afterAlt.sound, afterAlt.hands], ['false', 'true'], 'Alt+S / Alt+H đảo lại');
  assert.strictEqual(afterAlt.static, false);

  // Với âm BẬT, vòng gõ phải sống sót: cạm bẫy 8 (hiệu ứng phụ ném lỗi làm player chết sau 1 phím).
  await page.keyboard.press('Alt+s');
  await page.click('.player-stage');
  const target = await page.evaluate(() => window.TypingEasePlayer.getRun().target);
  await page.keyboard.type(target.slice(0, 6), { delay: 30 });
  const run = await page.evaluate(() => window.TypingEasePlayer.getRun());
  assert.strictEqual(run.typed, 6, 'gõ 6 phím với âm bật vẫn đếm đủ 6');
  assert.strictEqual(run.errors, 0, 'và không sinh lỗi');

  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.TypingEasePlayer && window.TypingEasePlayer.getState().state !== 'loading');
  const reloaded = await toggles();
  assert.deepStrictEqual([reloaded.sound, reloaded.hands], ['true', 'true'], 'công tắc nhớ qua lần nạp sau');
});

// Service worker: ở đây chỉ kiểm được phần ĐO ĐƯỢC — đăng ký, kiểm soát trang, và cache đúng
// những thứ người dùng vừa đi qua. Phần "mất mạng thì sao" nằm ở scripts/offline-check.js, vì
// `context.setOffline(true)` và `context.route(... abort)` đều KHÔNG với tới fetch của service
// worker (đo 18/09/2026): trang vẫn tải sống nhăn và bài kiểm xanh một cách vô nghĩa.
test('19 service worker: kiểm soát trang và cache đúng lối đi của người dùng', async page => {
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  await page.evaluate(() => navigator.serviceWorker.ready);
  await openPlayer(page, 'u1-l01/2');
  await sleep(700);   // chờ stale-while-revalidate ghi xong
  assert.ok(await page.evaluate(() => Boolean(navigator.serviceWorker.controller)), 'service worker phải kiểm soát trang');

  const cached = await page.evaluate(async () => {
    const names = await caches.keys();
    const urls = [];
    for (const name of names) urls.push(...(await (await caches.open(name)).keys()).map(request => new URL(request.url).pathname));
    return { names, urls };
  });
  assert.ok(cached.names.some(name => name.startsWith('typingease-shell-')), `tên cache: ${cached.names.join(', ')}`);
  for (const must of ['/', '/hoc/', '/data/lessons/vi/u1-l01.json', '/player.js', '/base.css'])
    assert.ok(cached.urls.includes(must), `thiếu ${must} trong cache: ${cached.urls.join(' ')}`);
  // Bài KẾ TIẾP cũng được player prefetch — mở bài 2 khi mất mạng vẫn chạy.
  assert.ok(cached.urls.includes('/data/lessons/vi/u1-l02.json'), 'bài kế tiếp chưa được cache');
  // Trang chưa ai mở thì không được tự chui vào cache: cache đi theo lối đi thật, không đoán trước.
  assert.ok(!cached.urls.includes('/luyen-phim-yeu/'), 'trang chưa mở mà đã nằm trong cache');

  const html = await page.evaluate(async () => (await (await caches.match('/hoc/')).text()));
  assert.ok(/id="player"/.test(html) && /player\.js/.test(html), 'bản cache của /hoc/ phải là trang thật');
});

// Topbar có BA hình dạng (logo+nav, logo+nav+CTA, logo+`← Trang chủ`) và một lưới chung. Ngày
// 18/09 nav được đưa vào giữa bằng grid `1fr auto 1fr`, và vì lưới xếp theo thứ tự, link
// `← Trang chủ` của 6 trang bị kéo vào cột giữa — chỉ nhìn trang chủ thì không thấy. Phép đo này
// đi qua đủ ba hình dạng: logo sát mép trái, nav đúng tâm, phần tử cuối sát mép phải.
const TOPBAR_PAGES = ['/', '/vi/', '/tien-do/', '/kiem-tra-toc-do-go/', '/cach-go-10-ngon/'];
test('20 topbar: logo trái, nav giữa, phần tử cuối sát mép phải trên cả ba hình dạng', async page => {
  for (const path of TOPBAR_PAGES) {
    await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle' });
    const bar = await page.evaluate(() => {
      const topbar = document.querySelector('.topbar');
      const box = topbar.getBoundingClientRect();
      const pad = parseFloat(getComputedStyle(topbar).paddingLeft);
      const visible = [...topbar.children].filter(child => getComputedStyle(child).display !== 'none');
      const nav = topbar.querySelector('nav');
      const last = visible[visible.length - 1];
      return {
        logoLệch: Math.round(topbar.querySelector('.brand').getBoundingClientRect().left - (box.left + pad)),
        navLệchTâm: nav && getComputedStyle(nav).display !== 'none'
          ? Math.round(nav.getBoundingClientRect().left + nav.getBoundingClientRect().width / 2 - (box.left + box.width / 2)) : null,
        cuốiLàNav: last.tagName === 'NAV',
        cuốiLệchPhải: Math.round((box.right - pad) - last.getBoundingClientRect().right)
      };
    });
    assert.ok(Math.abs(bar.logoLệch) <= 1, `${path}: logo lệch mép trái ${bar.logoLệch}px`);
    if (bar.navLệchTâm !== null)
      assert.ok(Math.abs(bar.navLệchTâm) <= 1, `${path}: nav lệch tâm ${bar.navLệchTâm}px`);
    // Trang chủ không có gì ở cột phải nên phần tử cuối chính là nav — chỉ đo mép phải khi có.
    if (!bar.cuốiLàNav)
      assert.ok(Math.abs(bar.cuốiLệchPhải) <= 1, `${path}: phần tử phải cùng cách mép phải ${bar.cuốiLệchPhải}px`);
  }
});

// --- runner ------------------------------------------------------------------------------------
(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const started = Date.now();
  // Bàn tay là WebGL: headless không có GPU thật nên phải chỉ định rõ trình vẽ phần mềm, nếu
  // không `mountTypingHands` ném lỗi và mọi phép kiểm về tay đều xanh giả.
  const browser = await chromium.launch({
    executablePath: CHROME,
    headless: true,
    args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader']
  });
  const results = [];
  for (const { name, fn, options } of tests) {
    if (ONLY && !name.includes(ONLY)) continue;
    const context = await browser.newContext({ viewport: DESKTOP, ...options });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(`pageerror: ${error.message}`));
    page.on('console', message => {
      if (message.type() !== 'error') return;
      const text = message.text();
      // Font/CDN ngoài không tải được khi offline không phải lỗi của trang.
      if (/fonts\.g(oogleapis|static)\.com|net::ERR_(INTERNET_DISCONNECTED|NAME_NOT_RESOLVED)/.test(text)) return;
      errors.push(`console.error: ${text.slice(0, 200)}`);
    });
    const t0 = Date.now();
    let failure = null;
    try {
      await fn(page, context);
      if (errors.length) throw new Error(`lỗi JS của trang:\n    ${errors.join('\n    ')}`);
    } catch (error) {
      failure = error;
      // Một assertion hỏng thường là hậu quả của lỗi JS xảy ra trước đó: in kèm để khỏi phải đoán.
      if (errors.length && !/lỗi JS của trang/.test(error.message))
        failure.message += `\n  (lỗi JS của trang cùng lúc: ${errors.join(' | ')})`;
      const file = path.join(OUT, `fail-${name.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase()}.png`);
      try { await page.screenshot({ path: file, fullPage: true }); failure.screenshot = file; } catch { /* trang đã đóng */ }
    }
    await context.close();
    const ms = Date.now() - t0;
    results.push({ name, ok: !failure, ms, failure });
    if (failure) {
      console.log(`FAIL ${name} (${ms}ms)\n    ${String(failure.message || failure).split('\n').join('\n    ')}`
        + (failure.screenshot ? `\n    screenshot: ${failure.screenshot}` : ''));
    } else console.log(`PASS ${name} (${ms}ms)`);
  }
  await browser.close();
  const failed = results.filter(result => !result.ok).length;
  console.log(`\n${results.length - failed}/${results.length} PASS · ${((Date.now() - started) / 1000).toFixed(1)}s`);
  process.exit(failed ? 1 : 0);
})().catch(error => { console.error(error); process.exit(1); });

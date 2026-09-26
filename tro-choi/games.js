/* tro-choi/games.js — ba trò chơi gõ phím trên một trang, dùng chung cho mọi ngôn ngữ.
 *
 *   rain  "Mưa chữ": từ rơi từ trên xuống, gõ đúng từ rồi Space/Enter để phá nó trước khi chạm đáy.
 *   race  "Đua với bóng": gõ một đoạn ngắn, đua với một chiếc xe chạy đều ở tốc độ bạn chọn (hoặc kỷ
 *         lục của chính bạn). Không có người chơi khác: site tĩnh, không máy chủ — và trang không
 *         bao giờ nói là có.
 *   keys  "Săn phím": một phím sáng trên bàn phím ảo đúng bố cục của khoá, bấm trúng càng nhiều càng
 *         tốt trong 60 giây. Tra theo mã phím vật lý (event.code), nên đúng với mọi bố cục hệ điều hành.
 *
 * Dữ liệu: `window.TypingEaseGame` do trang in sẵn (scripts/build-game-pages.mjs): { lang, words,
 * letters, text, typeByPosition }. Kỷ lục chỉ lưu trong trình duyệt (localStorage) — không bảng xếp
 * hạng, không số người chơi: không có thứ đó thì không được khai là có.
 */
(function (global) {
  const G = global.TypingEaseGame;
  if (!G) return;
  const T = G.text;
  const doc = global.document;
  const $ = selector => doc.querySelector(selector);
  const fill = (template, values = {}) => String(template).replace(/\{(\w+)\}/g, (whole, key) => (key in values ? values[key] : whole));
  const number = value => Number(value).toLocaleString(G.locale || G.lang);
  const ALL_WORDS = (G.words || []).filter(Boolean);
  // Chỉ dùng từ GÕ ĐƯỢC trên bàn phím đang chọn (Hindi Bolnagri thiếu phím ई ऊ ऐ औ, v.v.): ký tự ở tầng
  // chính / Shift / AltGr của bố cục, chữ hoa của chữ có trên phím, hoặc chữ có dấu ghép bằng phím chết
  // (´ ` ^ ~ ¨ ¸). Tiếng Việt (Telex) và tiếng Hàn (bộ gõ ghép âm tiết) không lọc: bộ gõ, không phải bố
  // cục, tạo ra chữ. Lọc còn dưới 60 từ thì giữ nguyên kho.
  const DEAD_FOR = { '\u0301': '´', '\u0300': '`', '\u0302': '^', '\u0303': '~', '\u0308': '¨', '\u0327': '¸' };
  let WORDS = ALL_WORDS;
  function fitWordsTo(layout) {
    if (!layout?.structure || ['vi', 'ko'].includes(G.lang)) { WORDS = ALL_WORDS; return; }
    const keys = new Set();
    for (const row of layout.structure) for (const entry of row) for (const field of ['main', 'shifted', 'alt']) {
      const value = typeof entry?.[field] === 'string' ? entry[field] : null;
      if (value && [...value].length === 1) keys.add(value);
    }
    const ok = character => keys.has(character) || keys.has(character.toLowerCase())
      || (() => { const parts = [...character.normalize('NFD')]; if (parts.length !== 2) return false;
        const dead = DEAD_FOR[parts[1]]; return Boolean(dead && keys.has(dead) && keys.has(parts[0].toLowerCase())); })();
    const fitting = ALL_WORDS.filter(word => [...word].every(ok));
    WORDS = fitting.length >= 60 ? fitting : ALL_WORDS;
  }
  (global.NTKeyboardReady || Promise.resolve(null)).then(api => api && api.ready).then(fitWordsTo).catch(() => {});
  const STORE = `typingease-games-${G.lang}-v1`;
  const load = () => { try { return JSON.parse(global.localStorage.getItem(STORE)) || {}; } catch { return {}; } };
  const save = record => { try { global.localStorage.setItem(STORE, JSON.stringify(record)); } catch { /* storage blocked */ } };
  let best = load();
  const setBest = (mode, value) => { best = { ...best, [mode]: value }; save(best); };
  const pick = list => list[Math.floor(Math.random() * list.length)];
  const sound = global.TypingEaseSound;
  const composing = event => event.isComposing || event.key === 'Process';

  /* ---------- gõ theo vị trí phím (Chú âm…) — cùng luật với player.js ---------- */
  let positionMap = null;
  function positional(event) {
    if (!G.typeByPosition || composing(event) || event.ctrlKey || event.metaKey || event.altKey) return null;
    const layout = global.NTKeyboard?.layout?.();
    if (!layout?.structure) return null;
    if (!positionMap || positionMap.layout !== layout) {
      const map = new Map();
      for (const row of layout.structure) for (const entry of row) {
        if (entry?.hardware && typeof entry.main === 'string' && [...entry.main].length === 1)
          map.set(entry.hardware, { main: entry.main, shifted: typeof entry.shifted === 'string' ? entry.shifted : null });
      }
      positionMap = { layout, map };
    }
    const slot = positionMap.map.get(event.code);
    return slot ? (event.shiftKey ? slot.shifted : slot.main) : null;
  }
  function bindPositional(input, onInput) {
    input.addEventListener('keydown', event => {
      const character = positional(event);
      if (!character) return;
      event.preventDefault();
      const start = input.selectionStart ?? input.value.length, end = input.selectionEnd ?? start;
      input.setRangeText(character, start, end, 'end');
      onInput();
    });
  }

  /* ---------- chọn trò ---------- */
  const tabs = [...doc.querySelectorAll('[data-game-tab]')];
  const panels = [...doc.querySelectorAll('[data-game-panel]')];
  let active = null;
  function show(mode, focus = true) {
    if (active && active !== mode) STOP[active]?.();
    active = mode;
    tabs.forEach(tab => { const on = tab.dataset.gameTab === mode; tab.classList.toggle('selected', on); tab.setAttribute('aria-selected', String(on)); tab.tabIndex = on ? 0 : -1; });
    panels.forEach(panel => { panel.hidden = panel.dataset.gamePanel !== mode; });
    if (mode === 'keys') mountKeyboard();
    try { global.history.replaceState(null, '', `#${mode}`); } catch { /* file:// */ }
    if (focus) doc.querySelector(`[data-game-panel="${mode}"] .game-start`)?.focus();
  }
  tabs.forEach(tab => tab.addEventListener('click', () => show(tab.dataset.gameTab)));
  const STOP = {};

  /* ===================================================================== Mưa chữ */
  const DIFFICULTY = {
    easy: { maxLength: 5, speed: 26, spawn: 2600 },
    normal: { maxLength: 8, speed: 36, spawn: 2100 },
    hard: { maxLength: 30, speed: 50, spawn: 1600 }
  };
  const rain = {
    arena: $('#rain-arena'), input: $('#rain-input'), overlay: $('#rain-overlay'),
    score: $('#rain-score'), level: $('#rain-level'), lives: $('#rain-lives'), best: $('#rain-best'),
    running: false, drops: [], raf: 0
  };
  function rainPool(level) {
    const max = DIFFICULTY[level].maxLength;
    const pool = WORDS.filter(word => [...word].length >= 2 && [...word].length <= max);
    return pool.length >= 20 ? pool : WORDS;
  }
  function rainHud() {
    rain.score.textContent = number(rain.points);
    rain.level.textContent = String(rain.stage);
    rain.lives.textContent = '♥'.repeat(Math.max(0, rain.life)) + '♡'.repeat(Math.max(0, 3 - rain.life));
    rain.best.textContent = number(best.rain || 0);
  }
  function rainStart() {
    rainStop(false);
    const level = $('#rain-difficulty').value in DIFFICULTY ? $('#rain-difficulty').value : 'normal';
    Object.assign(rain, { level, pool: rainPool(level), drops: [], points: 0, stage: 1, life: 3, cleared: 0, chars: 0, submits: 0, hits: 0,
      speed: DIFFICULTY[level].speed, spawnEvery: DIFFICULTY[level].spawn, nextSpawn: 0, last: 0, startedAt: performance.now(), running: true });
    rain.arena.querySelectorAll('.drop').forEach(node => node.remove());
    rain.overlay.hidden = true;
    rain.input.disabled = false;
    rain.input.value = '';
    rain.input.focus();
    rainHud();
    rain.raf = requestAnimationFrame(rainTick);
  }
  function rainSpawn() {
    const used = new Set(rain.drops.map(drop => drop.word));
    let word = pick(rain.pool);
    for (let i = 0; i < 6 && used.has(word); i += 1) word = pick(rain.pool);
    const el = doc.createElement('span');
    el.className = 'drop';
    el.textContent = word;
    rain.arena.append(el);
    const width = rain.arena.clientWidth;
    const x = Math.random() * Math.max(10, width - el.offsetWidth - 16) + 8;
    const drop = { word, el, x, y: -34 };
    el.style.transform = `translate(${x}px, ${drop.y}px)`;
    rain.drops.push(drop);
  }
  function rainTick(now) {
    if (!rain.running) return;
    const dt = rain.last ? Math.min(0.05, (now - rain.last) / 1000) : 0;
    rain.last = now;
    if (now >= rain.nextSpawn) { rainSpawn(); rain.nextSpawn = now + rain.spawnEvery; }
    const floor = rain.arena.clientHeight - 30;
    for (const drop of [...rain.drops]) {
      drop.y += rain.speed * dt;
      drop.el.style.transform = `translate(${drop.x}px, ${drop.y}px)`;
      if (drop.y >= floor) {
        rainRemove(drop, 'missed');
        rain.life -= 1;
        rain.arena.classList.remove('is-hit'); void rain.arena.offsetWidth; rain.arena.classList.add('is-hit');
        rainHud();
        if (rain.life <= 0) { rainEnd(); return; }
      }
    }
    rain.raf = requestAnimationFrame(rainTick);
  }
  function rainRemove(drop, how) {
    rain.drops = rain.drops.filter(item => item !== drop);
    drop.el.classList.add(how === 'missed' ? 'is-missed' : 'is-cleared');
    setTimeout(() => drop.el.remove(), 260);
  }
  function rainMark() {
    const typed = rain.input.value.trim();
    for (const drop of rain.drops) {
      const on = typed && drop.word.startsWith(typed);
      drop.el.classList.toggle('is-target', Boolean(on));
      drop.el.innerHTML = on ? `<b>${esc(typed)}</b>${esc(drop.word.slice(typed.length))}` : esc(drop.word);
    }
  }
  function rainSubmit() {
    const typed = rain.input.value.trim();
    rain.input.value = '';
    if (!typed || !rain.running) { rainMark(); return; }
    rain.submits += 1;
    const match = rain.drops.filter(drop => drop.word === typed).sort((a, b) => b.y - a.y)[0];
    if (!match) {
      rain.input.classList.remove('is-wrong'); void rain.input.offsetWidth; rain.input.classList.add('is-wrong');
      sound?.click('bad');
      rainMark();
      return;
    }
    rain.hits += 1;
    rain.cleared += 1;
    rain.chars += [...typed].length + 1;
    rain.points += [...typed].length * rain.stage;
    rainRemove(match, 'cleared');
    sound?.click('ok');
    if (rain.cleared % 8 === 0) {
      rain.stage += 1;
      rain.speed *= 1.1;
      rain.spawnEvery = Math.max(650, rain.spawnEvery * 0.92);
    }
    rainHud();
    rainMark();
  }
  function rainStop(hideOverlay = true) {
    rain.running = false;
    cancelAnimationFrame(rain.raf);
    if (hideOverlay) rain.input.disabled = true;
  }
  function rainEnd() {
    rainStop();
    const minutes = Math.max(1 / 60, (performance.now() - rain.startedAt) / 60000);
    const wpm = Math.round(rain.chars / 5 / minutes);
    const accuracy = rain.submits ? Math.round(rain.hits / rain.submits * 100) : 100;
    const record = rain.points > (best.rain || 0);
    if (record) setBest('rain', rain.points);
    rainHud();
    rain.overlay.innerHTML = `<p class="game-over-title">${esc(T.over)}</p>`
      + `<p class="game-over-score">${esc(fill(T.rainResult, { score: number(rain.points), words: number(rain.cleared), wpm, accuracy }))}</p>`
      + (record ? `<p class="game-over-best">${esc(T.newBest)}</p>` : '')
      + `<button class="primary-button game-start" type="button" data-act="rain-start">${esc(T.again)} <span>↻</span></button>`;
    rain.overlay.hidden = false;
    rain.overlay.querySelector('button').focus();
  }
  rain.input?.addEventListener('keydown', event => {
    if ((event.key === ' ' || event.key === 'Enter') && !composing(event)) { event.preventDefault(); rainSubmit(); }
  });
  // Điện thoại: bàn phím ảo thường không gửi keydown có `key`, chỉ gửi input có dấu cách.
  rain.input?.addEventListener('input', () => { if (/\s$/.test(rain.input.value)) rainSubmit(); else rainMark(); });
  if (rain.input) bindPositional(rain.input, () => (/\s$/.test(rain.input.value) ? rainSubmit() : rainMark()));
  STOP.rain = () => { if (rain.running) { rainStop(); rain.overlay.hidden = false; } };

  /* ===================================================================== Đua với bóng */
  const race = {
    prompt: $('#race-prompt'), input: $('#race-input'), you: $('#race-you'), ghost: $('#race-ghost'),
    result: $('#race-result'), pace: $('#race-pace'), status: $('#race-status'), running: false, raf: 0
  };
  function raceText() {
    const words = [];
    const pool = WORDS.filter(word => [...word].length >= 2 && [...word].length <= 9);
    while (words.join(' ').length < 170) words.push(pick(pool.length > 20 ? pool : WORDS));
    return words.join(' ');
  }
  function raceGhostWpm() {
    const choice = race.pace.value;
    return choice === 'best' ? Math.max(15, best.race || 30) : Number(choice) || 30;
  }
  function paceOptions() {
    const current = race.pace.value || 'best';
    const own = best.race ? fill(T.paceBest, { wpm: best.race }) : fill(T.paceBest, { wpm: 30 });
    race.pace.querySelector('option[value="best"]').textContent = own;
    race.pace.value = current;
  }
  function raceRender() {
    const typed = race.input.value;
    race.prompt.innerHTML = [...race.text].map((character, index) => {
      const state = index < typed.length ? (typed[index] === character ? 'ok' : 'wrong') : index === typed.length ? 'current' : '';
      return `<span class="${state}">${character === '<' ? '&lt;' : character === '&' ? '&amp;' : character}</span>`;
    }).join('');
  }
  function correctPrefix() {
    const typed = race.input.value;
    let n = 0;
    while (n < typed.length && typed[n] === race.text[n]) n += 1;
    return n;
  }
  function raceStart() {
    raceStop();
    Object.assign(race, { text: raceText(), startedAt: 0, running: true, ghostDone: 0, keystrokes: 0, wrong: 0, ghostWpm: raceGhostWpm() });
    race.input.disabled = false;
    race.input.value = '';
    race.result.hidden = true;
    race.status.textContent = fill(T.raceReady, { wpm: race.ghostWpm });
    race.you.style.setProperty('--p', '0');
    race.ghost.style.setProperty('--p', '0');
    raceRender();
    race.input.focus();
  }
  function raceTick(now) {
    if (!race.running || !race.startedAt) return;
    const minutes = (now - race.startedAt) / 60000;
    const ghostChars = minutes * race.ghostWpm * 5;
    const ghost = Math.min(1, ghostChars / race.text.length);
    race.ghost.style.setProperty('--p', ghost.toFixed(4));
    if (ghost >= 1 && !race.ghostDone) race.ghostDone = now;
    race.raf = requestAnimationFrame(raceTick);
  }
  function raceInput() {
    if (!race.running) return;
    if (!race.startedAt && race.input.value) { race.startedAt = performance.now(); race.status.textContent = T.raceGo; race.raf = requestAnimationFrame(raceTick); }
    const typed = race.input.value;
    if (typed.length > (race.lastLength || 0)) {
      race.keystrokes += 1;
      const index = typed.length - 1;
      const ok = typed[index] === race.text[index];
      if (!ok) race.wrong += 1;
      sound?.click(ok ? 'ok' : 'bad');
    }
    race.lastLength = typed.length;
    const done = correctPrefix();
    race.you.style.setProperty('--p', (done / race.text.length).toFixed(4));
    raceRender();
    if (done >= race.text.length) raceEnd();
  }
  function raceEnd() {
    const now = performance.now();
    race.running = false;
    cancelAnimationFrame(race.raf);
    race.input.disabled = true;
    const minutes = Math.max(1 / 60, (now - race.startedAt) / 60000);
    const wpm = Math.round(race.text.length / 5 / minutes);
    const accuracy = race.keystrokes ? Math.round((race.keystrokes - race.wrong) / race.keystrokes * 100) : 100;
    const won = !race.ghostDone;
    const record = wpm > (best.race || 0);
    if (record) setBest('race', wpm);
    paceOptions();
    race.status.textContent = won ? T.raceWin : T.raceLose;
    race.result.innerHTML = `<p class="game-over-title">${esc(won ? T.raceWin : T.raceLose)}</p>`
      + `<p class="game-over-score">${esc(fill(T.raceResult, { seconds: Math.round(minutes * 60), wpm, accuracy, ghost: race.ghostWpm }))}</p>`
      + (record ? `<p class="game-over-best">${esc(T.newBest)}</p>` : '')
      + `<button class="primary-button game-start" type="button" data-act="race-start">${esc(T.again)} <span>↻</span></button>`;
    race.result.hidden = false;
    race.result.querySelector('button').focus();
  }
  function raceStop() { race.running = false; cancelAnimationFrame(race.raf); race.lastLength = 0; }
  race.input?.addEventListener('input', raceInput);
  race.input?.addEventListener('keydown', event => { if (event.key === 'Enter') event.preventDefault(); });
  if (race.input) bindPositional(race.input, raceInput);
  STOP.race = () => { if (race.running) { raceStop(); race.input.disabled = true; race.status.textContent = T.racePaused; } };

  /* ===================================================================== Săn phím */
  const hunt = {
    host: $('#keys-board'), target: $('#keys-target'), time: $('#keys-time'), hits: $('#keys-hits'),
    streak: $('#keys-streak'), best: $('#keys-best'), result: $('#keys-result'), running: false, board: null
  };
  const ROUND = 60;
  let keyboardPending = null;
  function mountKeyboard() {
    if (keyboardPending || !hunt.host) return keyboardPending;
    keyboardPending = (global.NTKeyboardReady || Promise.resolve(null)).then(api => api && api.ready.then(layout => {
      const holder = doc.createElement('div');
      holder.className = 'cell js-keyboard-holder well';
      hunt.board = api.createKeyboard({
        activeKey: '', layout,
        preferences: { ...api.loadKeyboardPreferences(), showHands: false, showKeyboard: true },
        onSettings: () => api.openSettingsFor(hunt.board, { root: hunt.host, onSave: next => { api.applyKeyboardPreferences(hunt.board, { ...next, showHands: false }); huntLetters(); fitWordsTo(global.NTKeyboard?.layout?.()); } })
      });
      holder.append(hunt.board);
      hunt.host.replaceChildren(holder);
      huntLetters();
    })).catch(error => { console.warn('[trò chơi] bàn phím không tải được', error); });
    return keyboardPending;
  }
  // Phím để săn: các chữ ở tầng chính của bố cục đang hiện (không dấu cách, không phím chức năng).
  function huntLetters() {
    const layout = global.NTKeyboard?.layout?.();
    const letters = [];
    for (const row of layout?.structure || []) for (const entry of row) {
      if (typeof entry?.main === 'string' && [...entry.main].length === 1 && /[\p{L}\p{M}]/u.test(entry.main)) letters.push(entry.main);
    }
    hunt.letters = letters.length >= 10 ? letters : (G.letters || []);
  }
  function huntCode(event) {
    const layout = global.NTKeyboard?.layout?.();
    for (const row of layout?.structure || []) for (const entry of row) {
      if (entry?.hardware === event.code) return typeof entry.main === 'string' ? entry.main : null;
    }
    return null;
  }
  function huntNext() {
    let next = pick(hunt.letters);
    for (let i = 0; i < 4 && next === hunt.current; i += 1) next = pick(hunt.letters);
    hunt.current = next;
    hunt.target.textContent = next;
    if (hunt.board) global.NTKeyboard.setKeyboardState(hunt.board, next);
  }
  function huntHud() {
    hunt.time.textContent = String(Math.max(0, Math.ceil(hunt.left)));
    hunt.hits.textContent = number(hunt.score || 0);
    hunt.streak.textContent = number(hunt.run || 0);
    hunt.best.textContent = number(best.keys || 0);
  }
  async function huntStart() {
    await mountKeyboard();
    huntLetters();
    if (!hunt.letters?.length) return;
    Object.assign(hunt, { running: true, score: 0, run: 0, bestRun: 0, misses: 0, left: ROUND, endsAt: performance.now() + ROUND * 1000 });
    hunt.result.hidden = true;
    huntNext();
    huntHud();
    clearInterval(hunt.timer);
    hunt.timer = setInterval(() => {
      hunt.left = (hunt.endsAt - performance.now()) / 1000;
      huntHud();
      if (hunt.left <= 0) huntEnd();
    }, 200);
  }
  function huntEnd() {
    hunt.running = false;
    clearInterval(hunt.timer);
    if (hunt.board) global.NTKeyboard.setKeyboardState(hunt.board, '');
    hunt.target.textContent = '';
    const record = hunt.score > (best.keys || 0);
    if (record) setBest('keys', hunt.score);
    hunt.left = 0;
    huntHud();
    const accuracy = hunt.score + hunt.misses ? Math.round(hunt.score / (hunt.score + hunt.misses) * 100) : 100;
    hunt.result.innerHTML = `<p class="game-over-title">${esc(T.over)}</p>`
      + `<p class="game-over-score">${esc(fill(T.keysResult, { hits: number(hunt.score), streak: number(hunt.bestRun), accuracy }))}</p>`
      + (record ? `<p class="game-over-best">${esc(T.newBest)}</p>` : '')
      + `<button class="primary-button game-start" type="button" data-act="keys-start">${esc(T.again)} <span>↻</span></button>`;
    hunt.result.hidden = false;
    hunt.result.querySelector('button').focus();
  }
  doc.addEventListener('keydown', event => {
    if (active !== 'keys' || !hunt.running || event.ctrlKey || event.metaKey || event.altKey) return;
    if (event.key === 'Tab' || event.key === 'Escape') return;
    const character = huntCode(event);
    if (!character) return;
    event.preventDefault();
    if (character === hunt.current || character.toLowerCase() === String(hunt.current).toLowerCase()) {
      hunt.score += 1; hunt.run += 1; hunt.bestRun = Math.max(hunt.bestRun, hunt.run);
      global.NTKeyboard?.pressKey(hunt.board, character);
      sound?.click('ok');
      huntNext();
    } else {
      hunt.misses += 1; hunt.run = 0;
      global.NTKeyboard?.highlightErrorKey(hunt.board, character);
      sound?.click('bad');
    }
    huntHud();
  });
  STOP.keys = () => { if (hunt.running) huntEnd(); };

  /* ---------- nút chung ---------- */
  doc.addEventListener('click', event => {
    const act = event.target.closest('[data-act]')?.dataset.act;
    if (act === 'rain-start') rainStart();
    if (act === 'race-start') raceStart();
    if (act === 'keys-start') huntStart();
  });
  race.pace?.addEventListener('change', () => { if (!race.startedAt) raceStart(); });
  function esc(value) { return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  rain.best && (rain.best.textContent = number(best.rain || 0));
  hunt.best && (hunt.best.textContent = number(best.keys || 0));
  if (race.pace) paceOptions();
  const fromHash = String(global.location.hash || '').slice(1);
  show(['rain', 'race', 'keys'].includes(fromHash) ? fromHash : 'rain', false);
  if (race.prompt) { race.text = raceText(); raceRender(); race.input.disabled = true; race.status.textContent = fill(T.raceReady, { wpm: raceGhostWpm() }); }
  global.TypingEaseGames = { rain, race, hunt, show };
})(window);

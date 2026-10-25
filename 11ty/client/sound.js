(function (global) {
  // Âm thanh khi gõ — cùng bộ tiếng với typekute: tiếng phím thật (một sprite ~100 KB, mỗi phím một
  // đoạn), chuông theo số sao (star1–3) và tiếng "pop" của pháo hoa kỷ lục.
  //
  // MẶC ĐỊNH BẬT như typekute (chủ site yêu cầu, 2026-10-17 — thay quyết định "mặc định tắt" của PLAN.md
  // phase 5). Ai đã tắt bằng nút loa thì lựa chọn đó được nhớ (`off`) và giữ nguyên.
  //
  // Phím đúng phát tiếng phím thật qua WebAudio (không trễ, chồng nhau được khi gõ nhanh). Sprite chỉ
  // tải khi âm đang bật và người dùng đã chạm/gõ (AudioContext chỉ chạy sau một cử chỉ); phím gõ trước
  // khi tải xong thì im lặng. Phím SAI im lặng — y như typekute: chỉ phím đúng mới kêu.
  const KEY = 'typingease-sound-v1';
  const BASE = '/assets/sounds/';

  const read = () => { try { return global.localStorage.getItem(KEY) !== 'off'; } catch { return true; } };
  let enabled = read(), context = null, buffer = null, sprite = null, loading = null;
  const playing = new Set();

  function audio() {
    const Ctor = global.AudioContext || global.webkitAudioContext;
    if (!Ctor) return null;
    if (!context) { try { context = new Ctor(); } catch { return null; } }
    if (context.state === 'suspended') context.resume().catch(() => {});
    return context;
  }

  // Tải byte của sprite (chỉ mạng, không tốn luồng chính) — dùng chung cho lúc trang rảnh và prepare().
  let download = null;
  function fetchSprite() {
    download ||= Promise.all([
      fetch(`${BASE}keysprite.mp3`).then(response => response.arrayBuffer()),
      fetch(`${BASE}key-sprite.json`).then(response => response.json())
    ]).catch(error => { download = null; throw error; });
    return download;
  }

  // Tạo AudioContext + giải mã sprite một lần; lỗi thì để lần sau thử lại, trong lúc đó im lặng.
  function prepare() {
    if (loading || !enabled) return loading;
    const ctx = audio();
    if (!ctx) return null;
    // slice(): decodeAudioData tách (detach) buffer, giữ bản gốc để lần thử lại vẫn giải mã được.
    loading = fetchSprite()
      .then(([bytes, meta]) => ctx.decodeAudioData(bytes.slice(0)).then(decoded => { buffer = decoded; sprite = meta.sprite; }))
      .catch(() => { loading = null; });
    return loading;
  }

  // Đoạn của sprite theo mã ký tự (cách của typekute: Enter 13, Backspace 8, còn lại charCode).
  function keySample(key) {
    const ctx = audio();
    if (!ctx || !buffer || !sprite) return false;
    const code = key === 'Enter' || key === '\n' ? 13 : key === 'Backspace' ? 8 : String(key || ' ').charCodeAt(0);
    const [offset, duration] = sprite[String(code)] || sprite['32'] || [3203, 309];
    const source = ctx.createBufferSource(), gain = ctx.createGain();
    source.buffer = buffer;
    gain.gain.value = 0.6;
    source.connect(gain); gain.connect(ctx.destination);
    source.onended = () => { source.disconnect(); gain.disconnect(); };
    source.start(0, offset / 1000, duration / 1000);
    return true;
  }

  // Mọi lời gọi từ vòng gõ đều đi qua đây và không bao giờ ném: cạm bẫy 8 trong DECISIONS.md — một hiệu
  // ứng phụ ném lỗi giữa `reactToKeystroke()` là player chết đứng sau đúng một phím.
  function click(verdict, key) {
    if (!enabled) return;
    try {
      if (verdict === 'bad') return;
      if (!keySample(key)) prepare();
    } catch { /* thiết bị không có audio, cứ gõ tiếp */ }
  }

  // Một đoạn âm ngắn (chuông sao, pop). Trả về Promise xong khi hết tiếng — kèm .cancel() — hoặc null
  // khi âm tắt, để nơi gọi xếp hiệu ứng nối tiếp theo tiếng (sao bay vào cùng chuông của nó).
  function effect(name, volume = 1) {
    if (!enabled) return null;
    let clip;
    try { clip = new Audio(`${BASE}${name}.mp3`); } catch { return null; }
    clip.volume = Math.min(1, Math.max(0, volume));
    let finish;
    const promise = new Promise(resolve => {
      finish = () => { playing.delete(clip); resolve(); };
      clip.addEventListener('ended', finish, { once: true });
      clip.addEventListener('error', finish, { once: true });
      clip.play().catch(finish);
    });
    promise.cancel = () => { clip.pause(); finish(); };
    playing.add(clip);
    return promise;
  }

  // Tiếng theo PHÍM VẬT LÝ (keydown), không theo ô nhập: bộ gõ tiếng Việt/Nhật thay chữ tại chỗ
  // ("a" → "â", key "Process"), độ dài ô không đổi nên tiếng theo `input` cứ mất lúc có lúc không.
  // `wrong(char)` (tuỳ chọn) trả true khi ký tự gõ sai bài — phím sai im lặng như typekute. Phím đang
  // soạn bộ gõ thì không biết đúng/sai nên luôn kêu, lấy tiếng theo vị trí phím (`event.code`).
  function key(event, wrong, typed = event.key) {
    if (!enabled || !event || event.repeat || event.metaKey || (event.ctrlKey && !event.altKey)) return;
    const name = event.key;
    if (name === 'Backspace' || name === 'Enter') { click('ok', name); return; }
    if (event.isComposing || name === 'Process' || name === 'Unidentified' || event.keyCode === 229) {
      const code = /^(?:Key|Digit)(.)$/.exec(event.code || '');
      click('ok', code ? code[1].toLowerCase() : ' ');
      return;
    }
    if (typeof typed !== 'string' || [...typed].length !== 1) return;   // Shift, mũi tên, phím chết…
    let bad = false;
    try { bad = Boolean(wrong?.(typed)); } catch { /* chấm lỗi thì cứ kêu */ }
    click(bad ? 'bad' : 'ok', typed);
  }

  function set(value) {
    enabled = Boolean(value);
    try { global.localStorage.setItem(KEY, enabled ? 'on' : 'off'); } catch { /* storage blocked */ }
    // Nghe thử ngay: bật mà im lặng thì không ai biết đã bật chưa.
    if (enabled) prepare()?.then(() => { if (enabled) click('ok', ' '); });
    else playing.forEach(clip => clip.pause());
    return enabled;
  }

  // Khi trang rảnh chỉ TẢI byte của sprite (mạng). AudioContext + giải mã (vài chục ms trên luồng chính,
  // có lúc >1 s trên máy yếu) dời tới cử chỉ đầu tiên: lúc tải trang không còn tác vụ dài, mà byte đã
  // có sẵn nên những phím đầu tiên vẫn có tiếng gần như ngay. Âm tắt thì không tải gì.
  const warm = () => { if (enabled) fetchSprite().catch(() => {}); };
  const idle = global.requestIdleCallback || (callback => setTimeout(callback, 300));
  if (document.readyState === 'complete') idle(warm);
  else global.addEventListener('load', () => idle(warm), { once: true });
  const wake = () => { if (!enabled) return; if (context) audio(); else prepare(); };
  global.addEventListener('keydown', wake, { capture: true });
  global.addEventListener('pointerdown', wake, { capture: true });

  global.TypingEaseSound = {
    KEY, isOn: () => enabled, set, toggle: () => set(!enabled), click, key,
    star: number => effect(`star${Math.min(3, Math.max(1, Number(number) || 1))}`, 1),
    effect
  };
})(window);

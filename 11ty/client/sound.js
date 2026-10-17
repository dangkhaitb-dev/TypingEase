(function (global) {
  // Âm thanh khi gõ — cùng bộ tiếng với typekute: tiếng phím thật (một sprite ~100 KB, mỗi phím một
  // đoạn), chuông theo số sao (star1–3) và tiếng "pop" của pháo hoa kỷ lục.
  //
  // MẶC ĐỊNH TẮT (PLAN.md phase 5): người học thường mở site ở lớp, ở quán, ở văn phòng — tự dưng phát
  // ra tiếng là một cách rất nhanh để họ đóng tab. typekute mặc định bật; TypingEase giữ quyết định cũ.
  //
  // Phím đúng phát tiếng phím thật qua WebAudio (không trễ, chồng nhau được khi gõ nhanh). Sprite chỉ
  // tải khi âm đang bật và người dùng đã chạm/gõ (AudioContext chỉ chạy sau một cử chỉ). Chưa tải xong
  // thì dùng tiếng click tổng hợp. Phím SAI: typekute im lặng; TypingEase giữ một tiếng "bụp" trầm, khẽ,
  // để vẫn phân biệt được đúng/sai mà không cần nhìn màn hình.
  const KEY = 'typingease-sound-v1';
  const BASE = '/assets/sounds/';
  const VOICES = {
    ok: { type: 'triangle', from: 1180, to: 760, gain: 0.05, seconds: 0.035 },
    bad: { type: 'square', from: 220, to: 150, gain: 0.035, seconds: 0.08 }
  };

  const read = () => { try { return global.localStorage.getItem(KEY) === 'on'; } catch { return false; } };
  let enabled = read(), context = null, buffer = null, sprite = null, loading = null;
  const playing = new Set();

  function audio() {
    const Ctor = global.AudioContext || global.webkitAudioContext;
    if (!Ctor) return null;
    if (!context) { try { context = new Ctor(); } catch { return null; } }
    if (context.state === 'suspended') context.resume().catch(() => {});
    return context;
  }

  // Tải + giải mã sprite một lần; lỗi mạng thì để lần sau thử lại, trong lúc đó dùng tiếng tổng hợp.
  function prepare() {
    if (loading || !enabled) return loading;
    const ctx = audio();
    if (!ctx) return null;
    loading = Promise.all([
      fetch(`${BASE}keysprite.mp3`).then(response => response.arrayBuffer()).then(bytes => ctx.decodeAudioData(bytes)),
      fetch(`${BASE}key-sprite.json`).then(response => response.json())
    ]).then(([decoded, meta]) => { buffer = decoded; sprite = meta.sprite; })
      .catch(() => { loading = null; });
    return loading;
  }

  function synth(voice) {
    const ctx = audio();
    if (!ctx) return;
    const now = ctx.currentTime;
    const oscillator = ctx.createOscillator(), gain = ctx.createGain();
    oscillator.type = voice.type;
    oscillator.frequency.setValueAtTime(voice.from, now);
    oscillator.frequency.exponentialRampToValueAtTime(voice.to, now + voice.seconds);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(voice.gain, now + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + voice.seconds);
    oscillator.connect(gain).connect(ctx.destination);
    oscillator.start(now);
    oscillator.stop(now + voice.seconds + 0.01);
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
      if (verdict === 'bad') { synth(VOICES.bad); return; }
      if (!keySample(key)) { synth(VOICES.ok); prepare(); }
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

  function set(value) {
    enabled = Boolean(value);
    try { global.localStorage.setItem(KEY, enabled ? 'on' : 'off'); } catch { /* storage blocked */ }
    if (enabled) { prepare(); click('ok', ' '); }   // nghe thử ngay: bật mà im lặng thì không ai biết đã bật chưa
    else playing.forEach(clip => clip.pause());
    return enabled;
  }

  // Giải mã sprite ở phím/chạm đầu tiên khi âm đang bật — không tải gì nếu người học không bật âm.
  const warm = () => { if (enabled) prepare(); };
  global.addEventListener('keydown', warm, { once: true, capture: true });
  global.addEventListener('pointerdown', warm, { once: true, capture: true });

  global.TypingEaseSound = {
    KEY, isOn: () => enabled, set, toggle: () => set(!enabled), click,
    star: number => effect(`star${Math.min(3, Math.max(1, Number(number) || 1))}`, 1),
    effect
  };
})(window);

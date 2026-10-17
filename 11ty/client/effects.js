(function (global) {
  // effects.js — hiệu ứng gõ theo typekute, dùng chung cho player, trang test và luyện tự do.
  //
  //   caret(container, selector)  con trỏ trượt: một thanh mảnh trượt 100 ms sang ký tự kế tiếp,
  //                               đứng yên khi đang gõ, nhấp nháy khi dừng, chớp đỏ khi gõ sai.
  //   floatStars(row)             sao kết quả bay vào lần lượt, mỗi sao một tiếng chuông (star1–3).
  //   fireworks()                 pháo hoa kỷ lục cá nhân (canvas-confetti) + tiếng "pop".
  //   confettiRain()              mưa giấy màu ngắn khi xong bài với đủ sao.
  //
  // Mọi hàm không bao giờ ném (cạm bẫy 8 trong DECISIONS.md: hiệu ứng phụ ném lỗi giữa vòng gõ là
  // player chết đứng). `prefers-reduced-motion`: không trượt, không pháo hoa — chỉ đổi trạng thái.
  const doc = global.document;
  const reduced = () => global.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const sound = () => global.TypingEaseSound;

  /* ---------- con trỏ trượt ---------- */
  // Prompt được vẽ lại bằng innerHTML sau mỗi phím, nên con trỏ là MỘT phần tử riêng được gắn lại
  // vào khung sau mỗi lần vẽ, rồi trượt từ vị trí cũ sang vị trí mới (Web Animations — transition
  // CSS không chạy trên phần tử vừa được chèn lại).
  const carets = new WeakMap();
  function caret(container, selector) {
    try {
      if (!container) return;
      let state = carets.get(container);
      if (!state) {
        const el = doc.createElement('span');
        el.className = 'te-caret';
        el.setAttribute('aria-hidden', 'true');
        state = { el, x: null, y: null, idle: 0, length: -1 };
        carets.set(container, state);
        container.classList.add('has-smooth-caret');
      }
      const { el } = state;
      if (el.parentNode !== container) container.append(el);
      const target = container.querySelector(selector);
      if (!target) { el.hidden = true; state.x = null; return; }
      el.hidden = false;
      const rtl = global.getComputedStyle(container).direction === 'rtl';
      const height = target.offsetHeight;
      const x = rtl ? target.offsetLeft + target.offsetWidth - 2 : target.offsetLeft;
      const y = target.offsetTop;
      el.style.height = `${Math.max(12, Math.round(height * 0.86))}px`;
      const to = `translate(${x}px, ${y + Math.round(height * 0.07)}px)`;
      if (state.x !== null && !reduced() && (state.x !== x || state.y !== y) && el.animate) {
        const from = `translate(${state.x}px, ${state.y + Math.round(height * 0.07)}px)`;
        // Xuống dòng thì nhảy thẳng: trượt chéo qua cả dòng trông như con trỏ bay.
        if (state.y === y) el.animate([{ transform: from }, { transform: to }], { duration: 100, easing: 'cubic-bezier(.25,.1,.25,1)' });
      }
      el.style.transform = to;
      state.x = x; state.y = y;
      // Đang gõ: đứng yên, sáng rõ. Ngừng 600 ms: nhấp nháy lại.
      el.classList.add('is-typing');
      global.clearTimeout(state.idle);
      state.idle = global.setTimeout(() => el.classList.remove('is-typing'), 600);
      // Phím vừa gõ sai: chớp đỏ một nhịp.
      const before = target.previousElementSibling
        || target.parentElement?.previousElementSibling?.lastElementChild;
      if (before && /(^|\s)(wrong|bad)(\s|$)/.test(before.className)) {
        el.classList.remove('is-flash'); void el.offsetWidth; el.classList.add('is-flash');
      }
    } catch { /* hiệu ứng phụ: bỏ qua */ }
  }

  /* ---------- sao bay vào ---------- */
  // Mỗi sao được thắp nối nhau theo tiếng chuông của nó (typekute: chờ chuông hết mới tới sao sau);
  // âm tắt thì cách nhau 450 ms. Khung kết quả bị gỡ giữa chừng (người học bấm Tiếp) thì dừng.
  async function floatStars(row) {
    try {
      if (!row) return;
      const stars = [...row.querySelectorAll('.star.is-on')];
      if (!stars.length) return;
      if (reduced()) { stars.forEach(star => star.classList.add('is-floating')); return; }
      stars.forEach(star => star.classList.add('is-waiting'));
      for (const [index, star] of stars.entries()) {
        if (!star.isConnected) return;
        star.classList.remove('is-waiting');
        star.classList.add('is-floating');
        const chime = sound()?.star?.(index + 1);
        const gap = new Promise(resolve => global.setTimeout(resolve, 450));
        await (chime ? Promise.race([chime, new Promise(resolve => global.setTimeout(resolve, 1200))]) : gap);
      }
    } catch { /* bỏ qua */ }
  }

  /* ---------- canvas-confetti, tải khi cần ---------- */
  let confettiLoading = null;
  function loadConfetti() {
    if (global.confetti) return Promise.resolve(global.confetti);
    confettiLoading ||= new Promise((resolve, reject) => {
      const script = doc.createElement('script');
      script.src = '/vendor/canvas-confetti/confetti.browser.js';
      script.async = true;
      script.onload = () => (global.confetti ? resolve(global.confetti) : reject(new Error('confetti')));
      script.onerror = reject;
      doc.head.append(script);
    }).catch(() => { confettiLoading = null; return null; });
    return confettiLoading;
  }
  // Màu thương hiệu: xanh, lime, vàng của sao, trắng.
  const COLORS = ['#157a55', '#1f9466', '#c8f05a', '#ffcc00', '#ffffff'];

  // Pháo hoa kỷ lục (preset "Fireworks" của canvas-confetti, như typekute): 3,5 giây, hai bên màn
  // hình, mỗi loạt nhỏ dần; loạt chẵn kêu "pop" nhỏ dần theo. Trả về hàm dừng.
  function fireworks() {
    if (reduced()) return () => {};
    let timer = 0, stopped = false;
    loadConfetti().then(confetti => {
      if (!confetti || stopped) return;
      const DURATION = 3500, end = Date.now() + DURATION;
      const defaults = { startVelocity: 30, spread: 360, ticks: 70, zIndex: 80, colors: COLORS, disableForReducedMotion: true };
      const range = (min, max) => Math.random() * (max - min) + min;
      let index = 0;
      const burst = () => {
        const left = end - Date.now();
        if (left <= 0 || stopped) { global.clearInterval(timer); return; }
        const strength = left / DURATION;
        if (index++ % 2 === 0) sound()?.effect?.('pop', 0.15 + 0.35 * strength);
        const particleCount = Math.round(50 * strength);
        confetti({ ...defaults, particleCount, origin: { x: range(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: range(0.7, 0.9), y: Math.random() - 0.2 } });
      };
      timer = global.setInterval(burst, 250);
      burst();
    });
    return () => { stopped = true; global.clearInterval(timer); global.confetti?.reset?.(); };
  }

  // Xong bài với đủ sao: một trận giấy màu ngắn từ hai góc dưới, kèm chuông sao 3.
  function confettiRain() {
    if (reduced()) return;
    loadConfetti().then(confetti => {
      if (!confetti) return;
      const options = { particleCount: 70, spread: 70, startVelocity: 48, ticks: 160, gravity: 1.1, zIndex: 80, colors: COLORS, disableForReducedMotion: true };
      confetti({ ...options, angle: 60, origin: { x: 0, y: 0.9 } });
      confetti({ ...options, angle: 120, origin: { x: 1, y: 0.9 } });
    });
  }

  global.TypingEaseEffects = { caret, floatStars, fireworks, confettiRain };
})(window);

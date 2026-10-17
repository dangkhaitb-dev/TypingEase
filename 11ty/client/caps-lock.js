(function (global) {
  // Cảnh báo Caps Lock — chuyển từ typekute (11ty/client/player/caps-lock.js): gõ ra chữ HOA
  // đúng chỗ bài cần chữ thường mà không giữ Shift thì gần như chắc chắn Caps Lock đang bật.
  // Hiện một thẻ nhỏ có phím Caps Lock (đèn xanh) góc trên bên phải, tự tắt sau 2 giây, tắt ngay
  // khi bấm Caps Lock hoặc gõ lại được chữ thường. Thẻ KHÔNG lấy focus: người học vẫn gõ tiếp,
  // phím đó vẫn tính là một lỗi bình thường — cảnh báo chỉ nói lý do.
  //
  // Dùng chung cho bài học (player.js), kiểm tra tốc độ (typing-test.js) và luyện tự do
  // (free-page.js); mỗi trang gọi `observe(event, expected)` ở keydown của ô nhập.
  const C_VI = {
    title: 'Chú ý!',
    body: 'Caps Lock đang bật',
    close: 'Đóng cảnh báo Caps Lock'
  };
  const C = { ...C_VI, ...(global.TypingEaseUI?.capsLock || {}) };
  const HIDE_MS = 2000;

  // Luật của bài học typekute: chờ chữ thường a–z, ra đúng chữ đó viết hoa, không có Shift.
  function isCapsTypo(event, expected) {
    return !event.shiftKey && /^[a-z]$/.test(expected || '') &&
      /^[A-Z]$/.test(event.key || '') && expected.toUpperCase() === event.key;
  }
  // Thêm nhánh của Test/Practice typekute: phím chữ bấm khi trình duyệt báo Caps Lock đang bật —
  // bắt cả đường bộ gõ/di động mà `key` không bị viết hoa. Shift vẫn thắng.
  function isCapsLockTypo(event, expected) {
    if (isCapsTypo(event, expected)) return true;
    return !event.shiftKey && /^[a-z]$/.test(expected || '') && /^[a-z]$/i.test(event.key || '') &&
      event.getModifierState?.('CapsLock') === true;
  }

  let warning = null, timer = null;
  function element() {
    if (warning) return warning;
    warning = document.createElement('div');
    warning.className = 'capslock-warning';
    warning.dataset.capslockWarning = 'true';
    warning.setAttribute('role', 'status');
    warning.setAttribute('aria-live', 'polite');
    warning.innerHTML = '<div class="capslock-card">'
      + '<button type="button" class="capslock-close"><svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 3l8 8M11 3l-8 8"/></svg></button>'
      + '<div class="capslock-bed"><span class="capslock-key"><i class="capslock-led"></i>Caps Lock</span></div>'
      + '<p class="capslock-title"></p><p class="capslock-body"></p></div>';
    warning.querySelector('.capslock-close').setAttribute('aria-label', C.close);
    // Bấm nút đóng không được cướp focus của ô gõ (ô ẩn mất focus là phím sau rơi ra ngoài).
    warning.querySelector('.capslock-close').addEventListener('mousedown', event => event.preventDefault());
    warning.querySelector('.capslock-close').addEventListener('click', dismiss);
    document.body.append(warning);
    return warning;
  }

  function dismiss() {
    clearTimeout(timer);
    if (!warning) return;
    warning.classList.remove('is-open');
    warning.querySelector('.capslock-title').textContent = '';
    warning.querySelector('.capslock-body').textContent = '';
  }

  function show() {
    const node = element();
    dismiss();
    void node.offsetWidth; // Chạy lại hiệu ứng hiện khi gõ sai lần nữa.
    node.classList.add('is-open');
    // Chữ chỉ đổ vào lúc hiện (và xoá lúc ẩn) để vùng aria-live thấy nội dung đổi mà đọc lên.
    node.querySelector('.capslock-title').textContent = C.title;
    node.querySelector('.capslock-body').textContent = C.body;
    timer = setTimeout(dismiss, HIDE_MS);
  }

  // Bấm chính phím Caps Lock, hoặc gõ ra chữ thường không Shift → Caps Lock đã tắt.
  function onKey(event) {
    if (!warning?.classList.contains('is-open')) return;
    if (event.key === 'CapsLock' || event.code === 'CapsLock' ||
        (event.type === 'keydown' && !event.shiftKey && /^[a-z]$/.test(event.key))) dismiss();
  }
  global.addEventListener('keydown', onKey, true);
  global.addEventListener('keyup', onKey, true);
  // Dựng sẵn (ẩn) ngay khi nạp: vùng aria-live phải có mặt TRƯỚC khi nội dung đổi thì trình đọc
  // màn hình mới đọc. Script nằm cuối <body> nên body đã có.
  if (document.body) element();

  global.TypingEaseCapsLock = {
    isCapsTypo,
    isCapsLockTypo,
    show,
    dismiss,
    observe(event, expected) {
      if (event.isComposing || event.ctrlKey || event.metaKey || event.altKey) return false;
      if (!isCapsLockTypo(event, expected)) return false;
      show();
      return true;
    }
  };
})(window);

/* Small, local-only warm-up. Real lesson progress remains owned by the lesson player. */
(() => {
  const input = document.querySelector('#demo-input');
  if (!input) return;
  const target = document.querySelector('#demo-target');
  const count = document.querySelector('#demo-count');
  const feedback = document.querySelector('#demo-feedback');
  const samples = {
    home: 'fff jjj fj fj ff jj f j f j',
    words: 'ban phim   ngon tay   cham rai   moi ngay',
    sentence: 'hom nay toi se go cham hon, deu hon va chinh xac hon.'
  };
  let text = samples.sentence;
  function render() {
    const typed = input.value;
    const chars = [...text].map((char, i) => {
      const span = document.createElement('span');
      span.textContent = char;
      if (i < typed.length) span.className = typed[i] === char ? 'is-correct' : 'is-mistake';
      else if (i === typed.length) span.className = 'is-cursor';
      return span;
    });
    target.replaceChildren(...chars);
    count.textContent = `${typed.length} / ${text.length}`;
    const complete = typed === text;
    // Only announce completion, not every keystroke.
    feedback.textContent = complete ? 'Thật tốt. Bạn đã gõ đúng cả dòng — sẵn sàng cho bài học đầu tiên!' : '';
    input.classList.toggle('is-complete', complete);
  }
  // Tiếng phím như trong bài học (sound.js): phím đúng kêu, phím sai im lặng, xoá lùi kêu Backspace.
  input.addEventListener('keydown', event => {
    const expected = text[input.selectionStart ?? input.value.length];
    window.TypingEaseSound?.key(event, char => char !== expected);
  });
  input.addEventListener('input', event => { if (!event.isComposing) render(); });
  input.addEventListener('compositionend', render);
  document.querySelector('#demo-reset').addEventListener('click', () => { input.value = ''; render(); input.focus(); });
  document.querySelectorAll('[data-sample]').forEach(button => {
    button.addEventListener('click', () => {
      text = samples[button.dataset.sample];
      document.querySelectorAll('[data-sample]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      input.value = ''; render(); input.focus();
    });
  });
  render();
  const rail = document.querySelector('#unit-rail');
  const expand = document.querySelector('#roadmap-expand');
  if (rail && expand) {
    const setExpanded = open => {
      rail.dataset.expanded = String(open);
      expand.setAttribute('aria-expanded', String(open));
      expand.textContent = open ? 'Thu gọn' : 'Xem toàn bộ unit';
    };
    const syncRail = () => {
      expand.hidden = rail.children.length <= 8;
      // A returning learner's current lesson must always remain visible.
      const current = [...rail.children].findIndex(item => item.classList.contains('is-current'));
      if (current >= 8) setExpanded(true);
    };
    expand.addEventListener('click', () => {
      const open = rail.dataset.expanded !== 'true';
      setExpanded(open);
      if (!open) document.querySelector('#lo-trinh').scrollIntoView({block:'start'});
    });
    new MutationObserver(syncRail).observe(rail, {childList:true});
    syncRail();
  }
})();

(function (global) {

// Duong dan giua cac trang, TUYET DOI (xem player.js): '../' tinh sai o ban ngon ngu nam sau
// hai cap thu muc, va ten thu muc cung khac nhau. Lop phu `TypingEaseUI.routes` ghi de.
const R = {
  home: '/', lessons: '/bai-hoc/', learn: '/hoc/', test: '/kiem-tra-toc-do-go/',
  progress: '/tien-do/', free: '/luyen-tu-do/', weak: '/luyen-phim-yeu/',
  ...(window.TypingEaseUI?.routes || {})
};

// Chu do generate.mjs in san vao HTML thi khong can o day; bang nay chi chua chu mà script
// GHI DE luc chay, tuc phan phu thuoc vao tien do cua tung nguoi.
const S_VI = {
  done: (a, b) => `Đã xong ${a}/${b} bài`,
  legacy: n => `Đã hoàn thành ${n} bài ở giáo trình cũ — Unit 1 và Unit 2 đã mở cho bạn.`,
  ctaResume: '▶ Tiếp tục', ctaStart: '▶ Bắt đầu',
  ctaLesson: (verb, number, title) => `${verb} Bài ${number} · ${title} <span>→</span>`,
  ctaAllDone: 'Bạn đã xong hết phần có nội dung — luyện phím yếu <span>→</span>',
  rowResume: (screen, total) => `▶ Tiếp tục · screen ${screen}/${total}`,
  rowStart: '▶ Bắt đầu',
  rowDone: '✓ Đã xong',
  unlocked: 'Đã mở',
  unlockAfter: n => `Mở sau khi xong Bài ${n}`,
  unlockNow: 'Mở sớm unit này'
};
const S = { ...S_VI, ...(window.TypingEaseUI?.curriculum || {}) };
  // Trang lộ trình: HTML của 35 bài đã có sẵn (sinh bằng generate.mjs), script này chỉ PHỦ
  // trạng thái lên — bài đã xong, sao, bài đang dở, tiến độ unit, khoá mềm. Nếu localStorage
  // trống thì trang vẫn đọc được nguyên vẹn, đó là lý do danh sách không dựng bằng JS.
  const curriculum = global.TypingEaseCurriculum;
  const store = global.TypingEaseProgress;
  if (!curriculum || !store) return;

  const sequence = curriculum.sequence || [];
  const entry = id => curriculum.lessons[id] || null;
  const isReady = id => Boolean(entry(id)?.ready);
  const stars = (won, max) => (max > 0 ? '★'.repeat(Math.min(3, Math.round(won / max * 3))) : '');

  function screensDone(id) {
    const lesson = store.getLesson(id);
    return lesson ? Object.keys(lesson.screens).length : 0;
  }

  const isDone = id => {
    const lesson = store.getLesson(id);
    if (!lesson) return false;
    const total = entry(id)?.screens || 0;
    return Boolean(lesson.completedAt) || (total > 0 && screensDone(id) >= total);
  };

  // Bài "đang dở" ưu tiên `current` của store; nếu chưa có thì là bài ready đầu tiên chưa xong.
  function resolveCurrent() {
    const saved = store.getCurrent();
    if (saved && entry(saved.lessonId) && !isDone(saved.lessonId))
      return { lessonId: saved.lessonId, screen: saved.screen };
    const next = sequence.find(id => isReady(id) && !isDone(id));
    return next ? { lessonId: next, screen: 1 } : null;
  }

  const current = resolveCurrent();
  const doneIds = sequence.filter(isDone);

  // --- đầu trang -------------------------------------------------------------------------------
  const totalStars = sequence.reduce((total, id) => total + (store.getLesson(id)?.stars || 0), 0);
  const maxStars = sequence.reduce((total, id) => total + (store.getLesson(id)?.maxStars || 0), 0);
  const countEl = document.querySelector('#cur-count');
  if (countEl)
    countEl.textContent = S.done(doneIds.length, sequence.length)
      + (maxStars > 0 ? ` · ${totalStars}★/${maxStars}` : '');

  const legacy = store.legacyCompleted();
  const legacyEl = document.querySelector('#cur-legacy');
  if (legacyEl && legacy > 0) {
    // Quyết định 5: không map 1-1 sang giáo trình mới, chỉ nói thẳng con số.
    legacyEl.textContent = S.legacy(legacy);
    legacyEl.hidden = false;
  }

  const cta = document.querySelector('#cur-continue');
  if (cta && current) {
    const number = sequence.indexOf(current.lessonId) + 1;
    // "Tiếp tục" khi đã có bất kỳ dấu vết nào — kể cả một screen giữa bài chưa xong. Chỉ người
    // hoàn toàn mới mới thấy "Bắt đầu".
    const started = doneIds.length > 0 || current.screen > 1 || screensDone(current.lessonId) > 0;
    cta.href = `${R.learn}#${current.lessonId}/${current.screen}`;
    cta.innerHTML = S.ctaLesson(started ? S.ctaResume : S.ctaStart, number, escapeHtml(entry(current.lessonId).title));
  } else if (cta && !current) {
    cta.href = R.weak;
    cta.innerHTML = S.ctaAllDone;
  }

  function escapeHtml(value) {
    return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // --- từng bài --------------------------------------------------------------------------------
  document.querySelectorAll('.lesson-row[data-lesson]').forEach(row => {
    const id = row.dataset.lesson;
    const lesson = store.getLesson(id);
    const starsEl = row.querySelector('[data-stars]');
    const stateEl = row.querySelector('[data-state]');
    const done = isDone(id);
    row.classList.toggle('is-done', done);
    const active = Boolean(current && current.lessonId === id);
    row.classList.toggle('is-current', active);
    if (starsEl && lesson && lesson.maxStars > 0) starsEl.textContent = stars(lesson.stars, lesson.maxStars);
    if (!stateEl) return;
    if (!isReady(id)) return;                    // giữ nhãn "Sắp có" của HTML tĩnh
    if (active) {
      const total = entry(id)?.screens || 0;
      stateEl.textContent = current.screen > 1 && total > 1
        ? S.rowResume(current.screen, total)
        : S.rowStart;
      const link = row.querySelector('a');
      if (link) link.href = `${R.learn}#${id}/${current.screen}`;
    } else if (done) {
      stateEl.textContent = S.rowDone;
    } else {
      stateEl.textContent = '';
    }
  });

  // --- từng unit -------------------------------------------------------------------------------
  curriculum.units.forEach(unit => {
    const ids = unit.groups.flatMap(group => group.lessons);
    const card = document.querySelector(`.unit-card[data-unit="${unit.id}"]`);
    const done = ids.filter(isDone).length;
    const ratio = ids.length ? Math.round(done / ids.length * 100) : 0;
    const side = document.querySelector(`[data-side-count="${unit.id}"]`);
    if (side) side.textContent = `${done}/${ids.length}`;
    if (!card) return;
    const count = card.querySelector('[data-unit-count]');
    if (count) count.textContent = `${done}/${ids.length}`;
    const track = card.querySelector('[data-unit-track]');
    if (track) track.style.setProperty('--unit-progress', `${ratio}%`);
    const unlocked = store.isUnlocked(unit.id);
    card.classList.toggle('is-locked', !unlocked);
    const lock = card.querySelector('[data-lock]');
    if (lock) lock.textContent = unlocked ? S.unlocked : S.unlockAfter(sequence.indexOf(unit.unlockAfter) + 1);
    // Khoá unit là khoá MỀM (DECISIONS.md): người biết gõ luôn mở sớm được, không ai bị chặn.
    // Nhưng chỉ mời mở sớm khi trong unit đã có ít nhất một bài gõ được — mở một unit rỗng
    // thì cũng chẳng vào được bài nào.
    const hasContent = ids.some(isReady);
    if (!unlocked && hasContent && !card.querySelector('.unit-open')) {
      const wrap = document.createElement('p');
      wrap.className = 'unit-open';
      wrap.innerHTML = `<button type="button">${S.unlockNow}</button>`;
      wrap.querySelector('button').addEventListener('click', () => {
        store.unlock(unit.id);
        location.reload();
      });
      card.querySelector('[data-unit-track]')?.after(wrap);
    }
  });
})(window);

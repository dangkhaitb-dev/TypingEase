/* landing.js — the language/keyboard picker that IS the hero of `/`.
 *
 * Runs only on the English landing page. It owns four things and nothing else:
 *   1. the two <select>s  (#pick-language, #pick-layout)
 *   2. the live keyboard preview (#kb-preview)
 *   3. the call to action (#hero-go, #hero-note)
 *   4. the course grid further down the page (#lang-grid)
 *
 * ONE COURSE PER KEY-SEQUENCE FAMILY. A language can have several courses — French has AZERTY,
 * Canadian, Swiss and BÉPO — and which one a visitor needs depends on the LAYOUT they picked, not
 * on the language. The call to action therefore follows the layout select: choose BÉPO and the
 * button opens /fr/bepo/apprendre/. Until 2026-09-23 it followed the language only, and a BÉPO
 * typist was sent into lessons that teach AZERTY positions while a BÉPO board sat above them.
 * The families come from `courses` in data/languages.js; see the note at the top of that file.
 *
 * NO ENGLISH ROADMAP HERE ANY MORE, and no English continue card. `/` is the page that does not
 * know your language yet; a list of English lessons on it was one language's content on the
 * neutral page. "Continue" is answered per course instead: the CTA reads the progress store of
 * the family it points at (see `progressKeyOf`) and resumes there when there is something to
 * resume. script.js still renders the shared blocks (shortcuts, footer copy).
 *
 * NO AUTO-REDIRECT. A visitor whose browser is set to Vietnamese gets the Vietnamese entry
 * preselected in the picker and one dismissible line offering /vi/ — the page itself never
 * moves. Redirecting on `navigator.language` would mean Googlebot, which crawls from the US,
 * could only ever see the English page, and the Vietnamese half of the site would quietly
 * stop being indexable. A banner costs one line; that costs the site.
 *
 * LAYOUT NAMES ARE NOT DUPLICATED HERE. They come from the catalogue keyboard/boot.js already
 * fetched (`NTKeyboard.catalog()`), so a layout renamed in data/keyboards/index.json is
 * renamed in the picker too. An id in data/languages.js with no catalogue entry is dropped
 * rather than offered — `layoutById` would silently fall back to United States Standard, and
 * an option labelled "Hindi (InScript)" that draws a US board is worse than no option.
 */
(function (global) {
  'use strict';

  const doc = global.document;
  const catalogue = global.TypingEaseLanguages;
  const picker = doc.querySelector('#picker');
  if (!catalogue || !picker) return;

  const languageSelect = doc.querySelector('#pick-language');
  const layoutSelect = doc.querySelector('#pick-layout');
  const preview = doc.querySelector('#kb-preview');
  const loadingNote = doc.querySelector('#kb-loading');
  const cta = doc.querySelector('#hero-go');
  const note = doc.querySelector('#hero-note');
  const grid = doc.querySelector('#lang-grid');

  const LANGUAGES = Array.isArray(catalogue.list) ? catalogue.list : [];

  /* --- the page's own language ------------------------------------------------------------ */
  // Chọn một ngôn ngữ có bảng chữ (landing-i18n.js) là đổi TOÀN BỘ trang sang ngôn ngữ đó: tiêu
  // đề, nhãn, nút, lưới, menu, chân trang, và `<html lang>`. Ngôn ngữ chưa có bảng thì trang về
  // tiếng Anh. HTML gốc vẫn là tiếng Anh — đó là bản máy tìm kiếm đọc.
  const TEXT = global.TypingEaseLandingText || {};
  let L = TEXT.en || {};
  // Tiếng Ba Tư và Bengali viết số bằng chữ số của mình (bảng chữ cũng thế: «درس ۱», «পাঠ ১»), nên
  // số bài {n}/{u} điền vào cũng theo.
  const NATIVE_DIGITS = new Set(['fa', 'bn']);
  let numberFormat = null;
  const fillText = (template, values) => String(template || '')
    .replace(/\{(\w+)\}/g, (whole, key) => {
      if (!(key in values)) return whole;
      const value = values[key];
      return typeof value === 'number' && numberFormat ? numberFormat.format(value) : String(value);
    });

  function linksHtml(pairs) {
    return pairs.filter(([href]) => href)
      .map(([href, label, active]) => `<a${active ? ' class="active"' : ''} href="${href}">${escapeHtml(label)}</a>`).join('');
  }

  function applyLanguage(entry) {
    const code = TEXT[entry?.code] ? entry.code : 'en';
    L = TEXT[code] || L;
    const R = L.routes || {};
    const course = ready(entry) && TEXT[entry.code] ? entry.course.roadmap : (TEXT.en && byCode.get('en')?.course?.roadmap) || '/en/lessons/';
    doc.documentElement.lang = code;
    // Ả Rập, Ba Tư, Urdu, Hebrew đọc từ phải sang trái: cả trang lật theo, không chỉ từng câu.
    doc.documentElement.dir = code !== 'en' && entry?.dir === 'rtl' ? 'rtl' : 'ltr';
    numberFormat = NATIVE_DIGITS.has(code) && global.Intl ? new Intl.NumberFormat(code) : null;
    if (L.title) doc.title = L.title;
    const h1 = doc.querySelector('.hero h1');
    if (h1 && L.h1) h1.innerHTML = `${escapeHtml(L.h1[0])}<br /><em>${escapeHtml(L.h1[1])}</em>`;
    const intro = doc.querySelector('.hero .intro');
    if (intro && L.intro) intro.textContent = L.intro;
    const labels = doc.querySelectorAll('.picker-field > span');
    if (labels[0]) labels[0].textContent = L.pickLang;
    if (labels[1]) labels[1].textContent = L.pickLayout;
    if (loadingNote && loadingNote.isConnected) loadingNote.textContent = L.loading;
    const eyebrow = doc.querySelector('.langs-heading .eyebrow');
    if (eyebrow) eyebrow.innerHTML = `<i></i> ${escapeHtml(L.eyebrow)}`;
    const gridTitle = doc.querySelector('#langs-title');
    if (gridTitle) gridTitle.textContent = L.gridTitle;

    // Lối tắt: chỉ những trang ngôn ngữ này CÓ; không có trang nào thì ẩn cả khối.
    const shortcuts = doc.querySelector('.home-shortcuts');
    const cards = [['#sc-test', R.test, L.testTitle, L.testText], ['#sc-free', R.free, L.freeTitle, L.freeText]];
    let shown = 0;
    for (const [selector, href, title, text] of cards) {
      const card = doc.querySelector(selector);
      if (!card) continue;
      card.hidden = !href;
      if (!href) continue;
      shown += 1;
      card.href = href;
      card.querySelector('.sc-title').textContent = title;
      card.querySelector('.sc-text').textContent = text;
    }
    if (shortcuts) shortcuts.hidden = shown === 0;
    const shortcutsTitle = doc.querySelector('#shortcuts-title');
    if (shortcutsTitle) shortcutsTitle.textContent = L.shortcutsTitle;

    const nav = doc.querySelector('.topbar nav');
    if (nav) nav.innerHTML = linksHtml([['/', L.nav.practice, true], [course, L.nav.course], [R.progress, L.nav.progress], [R.test, L.nav.test], [R.games, L.nav.games]]);
    const footerNav = doc.querySelector('footer .footer-links');
    if (footerNav) footerNav.innerHTML = linksHtml([[course, L.nav.course], [R.progress, L.nav.progress], [R.free, L.nav.free], [R.games, L.nav.games], [R.guide, L.nav.guide]]);
    const footerTag = doc.querySelector('footer p');
    if (footerTag && L.footerTag) footerTag.textContent = L.footerTag;
  }

  const byCode = new Map(LANGUAGES.map(entry => [entry.code, entry]));
  const ready = entry => entry?.course?.status === 'ready';

  /* --- what the visitor chose last time, or what their browser hints at ----------------- */

  function stored() {
    try {
      const value = JSON.parse(global.localStorage?.getItem(catalogue.storageKey) || 'null');
      return value && typeof value === 'object' ? value : null;
    } catch { return null; }
  }

  function remember(code, keyboardId) {
    try {
      global.localStorage?.setItem(catalogue.storageKey, JSON.stringify({ code, keyboardId }));
    } catch { /* private window, blocked storage — the picker still works, it just forgets */ }
  }

  // `zh-TW` has to beat `zh`, so the full tag is tried before its base. Everything is compared
  // lowercase because browsers are inconsistent about the case of the region subtag.
  function detected() {
    const tags = Array.isArray(global.navigator?.languages) && global.navigator.languages.length
      ? global.navigator.languages
      : [global.navigator?.language].filter(Boolean);
    for (const tag of tags) {
      const full = String(tag).toLowerCase();
      if (byCode.has(full)) return full;
      const base = full.split('-')[0];
      if (byCode.has(base)) return base;
    }
    return '';
  }

  const saved = stored();
  const hinted = detected();
  let current = byCode.get(saved?.code) || byCode.get(hinted) || byCode.get(catalogue.fallback) || LANGUAGES[0];
  let currentLayoutId = null;

  /* --- the two selects ------------------------------------------------------------------ */

  // No `dir` on the option. Setting it flips the whole <select>'s text alignment when an RTL
  // entry is selected, and the control visibly jumped sideways between English and Arabic on the
  // first screenshot. The mixed string "العربية — Arabic" resolves correctly under plain bidi in an
  // LTR control anyway, so the attribute bought nothing and cost a layout jump.
  function option(value, label, lang) {
    const node = doc.createElement('option');
    node.value = String(value);
    node.textContent = label;
    if (lang) node.lang = lang;
    return node;
  }

  function fillLanguages() {
    const available = LANGUAGES.filter(ready);
    const soon = LANGUAGES.filter(entry => !ready(entry))
      .slice()
      .sort((a, b) => a.english.localeCompare(b.english, 'en'));

    const group = (label, entries) => {
      if (!entries.length) return null;
      const node = doc.createElement('optgroup');
      node.label = label;
      for (const entry of entries) {
        // The native name leads, because a Japanese speaker scans for 日本語, not "Japanese".
        // The English name follows so an English speaker can still find it in the same list.
        const text = entry.native === entry.english
          ? entry.native
          : `${entry.native} — ${entry.english}`;
        node.append(option(entry.code, text, entry.code));
      }
      return node;
    };

    languageSelect.replaceChildren();
    const first = group(L.groupReady, available);
    const second = group(L.groupSoon, soon);
    if (first) languageSelect.append(first);
    if (second) languageSelect.append(second);
    languageSelect.value = current.code;
  }

  // The catalogue can hold several rows with the same keyboard_id (index.json has duplicates),
  // so the first row wins and the rest are ignored — two identical options would be a puzzle.
  function layoutOptionsFor(entry, catalog) {
    const seen = new Set();
    const rows = [];
    for (const id of entry.layouts || []) {
      if (seen.has(id)) continue;
      const row = catalog.find(item => Number(item.keyboard_id) === Number(id));
      if (!row) continue;
      seen.add(id);
      rows.push(row);
    }
    return rows;
  }

  function fillLayouts(entry, catalog, wantedId) {
    const rows = layoutOptionsFor(entry, catalog);
    layoutSelect.replaceChildren();
    for (const row of rows) layoutSelect.append(option(row.keyboard_id, row.name));
    layoutSelect.disabled = rows.length <= 1;
    const wanted = rows.some(row => Number(row.keyboard_id) === Number(wantedId)) ? Number(wantedId) : null;
    const chosen = wanted ?? Number(rows[0]?.keyboard_id ?? 0);
    if (chosen) layoutSelect.value = String(chosen);
    return chosen || null;
  }

  /* --- the call to action --------------------------------------------------------------- */

  // The family (course) a layout belongs to. Every ready language lists its layouts in exactly
  // one family, so this only comes back empty for a language with no course at all.
  const familiesOf = entry => (Array.isArray(entry?.courses) ? entry.courses : []);
  const familyFor = (entry, keyboardId) => familiesOf(entry)
    .find(family => family.layouts.includes(Number(keyboardId))) || familiesOf(entry)[0] || null;
  const isDefaultFamily = (entry, family) => family && family.id === entry.code;

  // Where each course keeps its progress. It is the SAME rule scripts/build-course.js writes into
  // data/curriculum.<course>.js — `/` does not load 18 curricula just to read one key from each.
  // The two handwritten courses predate the rule and keep the keys their learners already have.
  const LEGACY_PROGRESS = { vi: 'typingease-progress-v3', en: 'typingease-progress-en-v3' };
  function progressKeyOf(entry, family) {
    if (LEGACY_PROGRESS[family.id]) return LEGACY_PROGRESS[family.id];
    return isDefaultFamily(entry, family) ? `typingease-progress-${entry.code}-v1` : `typingease-progress-${family.id}-v1`;
  }

  // The lesson this visitor is up to IN THIS COURSE, or null for somebody who has not started it.
  function resumeFor(entry, family) {
    try {
      const store = JSON.parse(global.localStorage?.getItem(progressKeyOf(entry, family)) || 'null');
      const current = store?.current;
      if (current && /^[a-z0-9-]{2,32}$/.test(current.lessonId || '')) {
        const screen = Math.max(1, Math.round(Number(current.screen)) || 1);
        return { href: `${family.href}#${current.lessonId}/${screen}`, lessonId: current.lessonId };
      }
    } catch { /* blocked or damaged storage: treat as a first visit */ }
    return null;
  }

  const layoutName = (catalog, id) => catalog.find(row => Number(row.keyboard_id) === Number(id))?.name || '';

  function renderCta(entry, keyboardId, catalog = []) {
    const course = entry.course || {};
    cta.hidden = false;
    cta.classList.remove('is-secondary');

    if (course.status !== 'ready') {
      // No course to enrol in, so the button stays the secondary style and does not pretend
      // otherwise. What there IS, is one home-row lesson on this language's first layout
      // (scripts/build-tasters.js) — the part of any course that needs no words.
      const first = entry.layouts?.[0];
      const onOther = Number(keyboardId) && Number(keyboardId) !== Number(first);
      cta.textContent = L.tryHome;
      cta.href = `/try/${entry.code}/`;
      cta.classList.add('is-secondary');
      note.innerHTML = `Lessons for <b lang="${entry.code}" dir="${entry.dir}">${escapeHtml(entry.native)}</b> `
        + 'are still being written. The keyboard above is the real layout, key for key, and its '
        + `eight home-row keys are ready to practise now${onOther && layoutName(catalog, first)
          ? ` (on ${escapeHtml(layoutName(catalog, first))})` : ''}. `
        + 'Or <a href="/en/learn/">start the English course</a> — it teaches the same habits.';
      return;
    }

    // Bố cục của một ngôn ngữ có khoá, nhưng không thuộc khoá nào (tiếng Mã Lai chữ Jawi): KHÔNG
    // được đẩy sang khoá của bàn phím khác. Nó có bài nếm thử riêng (scripts/build-tasters.js).
    const covered = familiesOf(entry).some(item => item.layouts.includes(Number(keyboardId)));
    if (Number(keyboardId) && !covered) {
      const main = familiesOf(entry)[0];
      cta.textContent = L.tryHome;
      cta.href = `/try/${entry.code}-${Number(keyboardId)}/`;
      cta.classList.add('is-secondary');
      note.innerHTML = fillText(L.orphanNote, {
        main: escapeHtml(layoutName(catalog, main?.layouts?.[0]) || main?.name || ''),
        board: escapeHtml(layoutName(catalog, keyboardId)), href: main?.href || course.href
      });
      return;
    }
    const family = familyFor(entry, keyboardId) || { id: entry.code, name: '', layouts: [], href: course.href, roadmap: course.roadmap };
    const resume = resumeFor(entry, family);
    const alternative = !isDefaultFamily(entry, family);
    if (resume) {
      cta.textContent = alternative ? fillText(L.resumeFamily, { name: family.name }) : L.resume;
      cta.href = resume.href;
    } else {
      cta.textContent = alternative ? fillText(L.startFamily, { name: family.name }) : L.start;
      cta.href = family.href;
    }

    // Say which keyboard the lessons are built on, and which others they fit. A visitor who picked
    // "British (PC)" should read that the US-built course is right for them, not wonder.
    const board = layoutName(catalog, keyboardId) || family.name;
    const siblings = family.layouts.filter(id => Number(id) !== Number(keyboardId))
      .map(id => layoutName(catalog, id)).filter(Boolean);
    const fits = siblings.length ? fillText(L.fits, { list: siblings.map(escapeHtml).join(', ') }) : '';
    note.innerHTML = fillText(L.note, { n: family.lessons || course.lessons, u: family.units || course.units, board: escapeHtml(board) })
      + `${fits} <a href="${family.roadmap}">${escapeHtml(L.seeAll)}</a>.`;
  }

  const escapeHtml = value => String(value)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  /* --- the preview ---------------------------------------------------------------------- */

  // Every change starts a fetch, and a visitor flicking through the list can start several.
  // Only the newest one is allowed to touch the DOM; the rest resolve into nothing.
  let token = 0;

  async function renderPreview(NT, entry, keyboardId) {
    const mine = ++token;
    const layout = await NT.layoutById(keyboardId).catch(() => null);
    if (mine !== token) return;
    if (!layout) {
      // Offline on a first visit, or a layout file that failed to come down. A board already on
      // screen is left alone — the previous keyboard is stale by one choice, which beats
      // replacing something correct with an apology. Only an empty preview gets the message.
      if (!preview.querySelector('.keyboard') && loadingNote) {
        loadingNote.textContent = L.loadFail;
        preview.replaceChildren(loadingNote);
      }
      return;
    }

    const board = NT.createKeyboard({
      activeKey: '',
      // Hands off, literally: showHands:false is what stops keyboard.js lazy-loading three.js
      // and a 967 KB hand model into a page whose job is to load fast.
      preferences: {
        ...NT.DEFAULTS,
        showKeyboard: true,
        showHands: false,
        animatedHands: false,
        rightHandOnly: false,
        leftHandOnly: false,
        letterCase: 'uppercase',
        keyboardId
      },
      layout,
      falling: false,
      // The board draws its own ⚙ link and there is no way to ask it not to. landing.css hides
      // it, because on this page the dropdown beside it IS the setting; if that CSS ever fails
      // to load, this at least sends the click somewhere sensible instead of nowhere.
      onSettings: () => layoutSelect.focus()
    });
    board.classList.add('kb-preview-board');
    // The keyboard is decoration for a screen reader — the two selects above already say what
    // it shows, and 80 unlabelled key divs read as noise.
    board.setAttribute('aria-hidden', 'true');
    board.removeAttribute('aria-label');
    preview.replaceChildren(board);
    preview.dataset.script = entry.script || 'latin';
  }

  /* --- the grid ------------------------------------------------------------------------- */

  // One card per COURSE, not per language: French is four cards, because it is four courses. A
  // card is a plain link straight to that course's lesson list — the thing somebody scanning for
  // "Dvorak" or "BÉPO" came for. Languages without a course stay as chips that drive the picker,
  // since the keyboard is all there is to show for them yet.
  function renderGrid(catalog) {
    if (!grid) return;
    grid.replaceChildren();
    const readyEntries = LANGUAGES.filter(ready)
      .slice().sort((a, b) => a.english.localeCompare(b.english, 'en'));
    for (const entry of readyEntries) {
      for (const family of familiesOf(entry)) {
        const layouts = family.layouts.filter(id => catalog.some(row => Number(row.keyboard_id) === Number(id)));
        if (!layouts.length) continue;
        const item = doc.createElement('li');
        const link = doc.createElement('a');
        link.className = 'lang-chip is-ready is-course';
        link.href = family.roadmap;
        link.dataset.code = entry.code;
        link.dataset.course = family.id;
        link.hreflang = entry.code;
        const names = layouts.map(id => layoutName(catalog, id)).filter(Boolean);
        // Chỉ bàn phím, không số bài: tên đầy đủ của các bố cục nằm trong tooltip.
        link.title = names.join(', ');
        // Một nhãn, như typingstudy.com: khoá mặc định chỉ mang tên ngôn ngữ ("Français"), khoá
        // của một bàn phím khác thêm tên bàn phím ("Français BÉPO").
        const label = isDefaultFamily(entry, family) ? entry.native : `${entry.native} ${family.short || family.name}`;
        link.innerHTML = `<span class="lang-name" lang="${entry.code}" dir="${entry.dir}">${escapeHtml(label)}</span>`;
        item.append(link);
        grid.append(item);
      }
    }
    const soon = LANGUAGES.filter(entry => !ready(entry))
      .slice().sort((a, b) => a.english.localeCompare(b.english, 'en'));
    for (const entry of soon) {
      const item = doc.createElement('li');
      const button = doc.createElement('button');
      button.type = 'button';
      button.className = 'lang-chip';
      button.dataset.code = entry.code;
      // Cùng một ô với ô khoá học: chỉ tên ngôn ngữ. Tên tiếng Anh nằm trong tooltip.
      button.title = entry.english;
      button.innerHTML = `<span class="lang-name" lang="${entry.code}" dir="${entry.dir}">${escapeHtml(entry.native)}</span>`;
      item.append(button);
      grid.append(item);
    }
  }

  /* --- wiring ---------------------------------------------------------------------------- */

  applyLanguage(current);

  (async () => {
    const NT = await global.NTKeyboardReady;
    if (!NT) {
      // The keyboard module is the only part that can fail on its own (it fetches). Everything
      // else on the page — picker, CTA, grid — is still worth having without it.
      if (loadingNote) loadingNote.textContent = L.previewFail;
      renderCta(current, saved?.keyboardId ?? current.layouts?.[0]);
      return;
    }
    await NT.ready;
    const catalog = NT.catalog();

    fillLanguages();
    renderGrid(catalog);
    currentLayoutId = fillLayouts(current, catalog, saved?.keyboardId);
    renderCta(current, currentLayoutId, catalog);
    if (currentLayoutId) await renderPreview(NT, current, currentLayoutId);

    const select = async (code, keyboardId) => {
      const entry = byCode.get(code);
      if (!entry) return;
      current = entry;
      applyLanguage(entry);
      fillLanguages();
      renderGrid(catalog);
      languageSelect.value = code;
      currentLayoutId = fillLayouts(entry, catalog, keyboardId);
      renderCta(entry, currentLayoutId, catalog);
      remember(entry.code, currentLayoutId);
      if (currentLayoutId) await renderPreview(NT, entry, currentLayoutId);
    };

    languageSelect.addEventListener('change', () => { select(languageSelect.value, null); });

    layoutSelect.addEventListener('change', () => {
      currentLayoutId = Number(layoutSelect.value);
      remember(current.code, currentLayoutId);
      // The layout decides the course, so the button has to move with it.
      renderCta(current, currentLayoutId, catalog);
      renderPreview(NT, current, currentLayoutId);
    });

    grid?.addEventListener('click', event => {
      // Course cards are real links and simply navigate; only the keyboard-only chips drive the picker.
      const chip = event.target.closest('button.lang-chip');
      if (!chip) return;
      select(chip.dataset.code, null);
      // The picker is the thing that just changed, so put it back on screen — the grid sits
      // well below the fold and a silent change up there is a change nobody sees.
      picker.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  })();
})(window);

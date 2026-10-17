/* Original web SVG symbols with a consistent optical weight. No proprietary fonts required.
   Enhance only interface chrome; lesson text, keys and editable content remain untouched. */
(() => {
  const paths = {
    keyboard: '<rect x="2" y="5" width="20" height="14" rx="3"/><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M7 16h10"/>',
    timer: '<circle cx="12" cy="14" r="8"/><path d="M9 2h6M12 2v4M18 6l2-2M12 9v5l3 2"/>',
    refresh: '<path d="M20 10a8 8 0 1 0-1 8M20 4v6h-6"/>',
    sound: '<path d="M4 9h4l5-4v14l-5-4H4zM17 8a6 6 0 0 1 0 8M20 5a10 10 0 0 1 0 14"/>',
    hand: '<path d="M8 12V6a2 2 0 0 1 4 0v6-8a2 2 0 0 1 4 0v8-5a2 2 0 0 1 4 0v8c0 4-3 7-7 7-3 0-5-2-7-5l-3-4a2 2 0 0 1 3-2l2 2"/>',
    settings: '<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="9" cy="6" r="2" fill="var(--surface)"/><circle cx="16" cy="12" r="2" fill="var(--surface)"/><circle cx="8" cy="18" r="2" fill="var(--surface)"/>',
    bolt: '<path d="m14 2-9 12h6l-1 8 9-13h-6z"/>',
    star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9z"/>',
    flame: '<path d="M13 2c1 5-5 6-5 10-2-1-2-3-2-3-5 8 0 13 6 13s10-6 6-12c0 3-2 4-2 4 1-5-3-7-3-12Z"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4M17 3v4M3 10h18M8 14h2M14 14h2M8 17h2"/>',
    leaf: '<path d="M5 19C0 6 13 4 21 3c0 10-5 18-14 15M4 22 16 9"/>',
    flag: '<path d="M5 22V3c5-4 9 4 15 0v10c-6 4-10-4-15 0"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    chart: '<path d="M4 3v18h17M8 16v-5M13 16V6M18 16V9"/>',
    pen: '<path d="m4 16-1 5 5-1L20 8a3 3 0 0 0-4-4ZM14 6l4 4"/>',
    play: '<path d="m8 4 12 8-12 8z"/>',
    book: '<path d="M12 5v16M12 5C9 3 5 3 2 4v15c4-1 7 0 10 2 3-2 6-3 10-2V4c-3-1-7-1-10 1Z"/>',
    game: '<path d="M8 7h8c4 0 6 10 4 12-2 2-5-3-6-3h-4c-1 0-4 5-6 3C2 17 4 7 8 7ZM6 11h5M8.5 8.5v5M16 11h.01M18 13h.01"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>'
  };
  const glyphs = {'★':'star','✎':'pen','→':'arrow','⏱':'timer','⏱️':'timer','⌨':'keyboard','⌨️':'keyboard','⚙':'settings','⚙️':'settings','↻':'refresh','🔊':'sound','🔇':'sound','✋':'hand','⚡':'bolt','⭐':'star','🌟':'star','🔥':'flame','🗓️':'calendar','🌱':'leaf','🏁':'flag','🚀':'bolt','✍️':'pen','🎯':'target','📈':'chart','📊':'chart','▶':'play','📖':'book','🎮':'game','✓':'check','✕':'close'};
  const selector = '.pt-redo,.pt-toggle,.shortcut-card>b,.badge-icon,.badge-notice-icon,.explore-card [aria-hidden],.game-thumb>[aria-hidden]';
  function enhance(root) {
    const nodes = [];
    if (root.nodeType !== 1) return;
    if (root.matches(selector)) nodes.push(root);
    nodes.push(...root.querySelectorAll(selector));
    for (const el of nodes) {
      if (el.querySelector('.ui-symbol')) continue;
      const name = glyphs[el.textContent.trim()];
      if (!name) continue;
      // These containers are decorative or already have an accessible button label.
      if (el.tagName === 'BUTTON' && !el.hasAttribute('aria-label')) continue;
      el.innerHTML = `<svg class="ui-symbol" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths[name]}</svg>`;
    }
  }
  enhance(document.body);
  // Only inspect inserted UI containers. No characterData/attribute observation in the hot typing path.
  new MutationObserver(records => {
    for (const record of records) {
      if (record.target.nodeType === 1 && record.target.matches(selector)) enhance(record.target);
      for (const node of record.addedNodes) if (node.nodeType === 1 && node.tagName !== 'svg' && !node.closest('.ui-symbol')) enhance(node);
    }
  }).observe(document.body, {childList:true,subtree:true});
})();

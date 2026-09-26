/* menu.js — nút ☰ cho menu trên cùng khi màn hình hẹp (≤ 900px, base.css ẩn `.topbar nav`).
 *
 * Không có menu thứ hai: nút chỉ mở CHÍNH `.topbar > nav` của trang thành một bảng thả xuống, nên
 * liên kết luôn đúng ngôn ngữ và đúng trang (kể cả `/`, nơi landing.js vẽ lại nav khi đổi ngôn ngữ).
 * Nạp bằng <script src="/menu.js" defer> trên mọi trang có menu (máy sinh + scripts/build-seo-head.mjs).
 * Trên màn rộng nút bị CSS ẩn và script không làm gì khác.
 */
(function () {
  const bar = document.querySelector('.topbar');
  const nav = bar && bar.querySelector(':scope > nav');
  if (!nav || bar.querySelector('.menu-toggle')) return;
  if (!nav.id) nav.id = 'site-nav';
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'menu-toggle';
  button.setAttribute('aria-controls', nav.id);
  button.setAttribute('aria-expanded', 'false');
  // Nhãn đọc cho trình đọc màn hình: chính nhãn của nav ("Điều hướng chính", "Main navigation"…),
  // đã đúng ngôn ngữ của trang; trạng thái mở/đóng do aria-expanded nói.
  button.setAttribute('aria-label', nav.getAttribute('aria-label') || 'Menu');
  button.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">'
    + '<path class="menu-bars" d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>'
    + '<path class="menu-close" d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/></svg>';
  const actions = bar.querySelector(':scope > .header-actions');
  if (actions) actions.prepend(button); else bar.append(button);

  const set = open => {
    bar.classList.toggle('is-menu-open', open);
    button.setAttribute('aria-expanded', String(open));
  };
  button.addEventListener('click', event => { event.stopPropagation(); set(!bar.classList.contains('is-menu-open')); });
  nav.addEventListener('click', event => { if (event.target.closest('a')) set(false); });
  document.addEventListener('click', event => { if (!bar.contains(event.target)) set(false); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && bar.classList.contains('is-menu-open')) { set(false); button.focus(); }
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', event => { if (event.matches) set(false); });
})();

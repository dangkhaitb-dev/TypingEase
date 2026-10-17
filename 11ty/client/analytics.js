// Firebase Analytics (GA4) cho typingease.site — điểm vào, nạp dạng ES module.
//
// Cấu trúc giống solprompter: firebase/firebase-init.js khởi tạo app + Analytics bằng Firebase SDK
// (page_view tự gửi lúc khởi tạo), firebase/button-click-analytics.js tự track mọi nút bấm, và
// analytics CHỈ bật sau khi người dùng bấm "Cho phép" ở banner cookie (cookie-banner.js). Chưa chọn
// hoặc từ chối thì không tải SDK, không đặt cookie. Đồng ý / rút lại có hiệu lực ngay, không cần
// tải lại trang; rút lại thì tắt thu thập và xoá cookie `_ga*`.
//
// Không nhúng trực tiếp vào từng trang: sw-register.js đã có mặt trên mọi trang không phải trang
// chuyển hướng, và nó chèn file này — một chỗ duy nhất thay vì sửa 300 trang và 10 máy sinh.
//
// Chỉ chạy trên tên miền thật: e2e, preview và localhost không được làm bẩn số liệu (không banner,
// không SDK). Xem banner ở localhost: `TypingEaseConsent.show()`.
//
// Sự kiện tuỳ chỉnh: gọi `TypingEaseAnalytics.track(tên, { ... })`. sw-register.js dựng sẵn bản
// tạm xếp hàng sự kiện, nên gọi trước khi module này chạy xong cũng không mất; sự kiện tới khi
// người dùng chưa chọn được giữ lại tới lúc họ chọn. `language` được gắn tự động.
import { CONSENT_EVENT, getAnalyticsConsent, isAnalyticsGranted } from './cookie-consent.js';
import { initCookieBanner } from './cookie-banner.js';
import { initializeFirebase, clearAnalyticsCookies } from './firebase/firebase-init.js';
import { initButtonClickTracking } from './firebase/button-click-analytics.js';

const ENABLED = /(^|\.)typingease\.site$/.test(window.location.hostname);
const lang = () => (document.documentElement.lang || 'en').toLowerCase();
const queued = window.TypingEaseAnalytics?.queue || [];

initCookieBanner({ show: ENABLED });

if (!ENABLED) {
  window.TypingEaseAnalytics = { track() {} };
} else {
  let client = null;
  let stopClicks = null;
  // Sự kiện chờ người dùng chọn; null = không giữ nữa (đã từ chối, hoặc đã gửi hết).
  let pending = getAnalyticsConsent() === 'denied' ? null : [...queued];

  const send = (name, params) => void client.then(ready => {
    if (ready && isAnalyticsGranted()) ready.logEvent(ready.analytics, name, { language: lang(), ...params });
  });

  const start = () => {
    if (client) void client.then(ready => ready?.setEnabled(true));
    else client = initializeFirebase({ contentGroup: lang() });
    pending?.forEach(([name, params]) => send(name, params));
    pending = null;
    stopClicks ??= initButtonClickTracking();
  };

  const stop = () => {
    pending = null;
    stopClicks?.();
    stopClicks = null;
    if (client) void client.then(ready => ready?.setEnabled(false));
    clearAnalyticsCookies();
  };

  window.TypingEaseAnalytics = {
    track(name, params) {
      // Đồng ý ở tab khác thì trang này chưa start — start luôn ở lần track đầu.
      if (isAnalyticsGranted()) { if (!stopClicks) start(); send(name, params); }
      else if (pending && pending.length < 20) pending.push([name, params]);
    }
  };
  window.addEventListener(CONSENT_EVENT, event => (event.detail?.consent === 'granted' ? start() : stop()));
  if (isAnalyticsGranted()) start();
}

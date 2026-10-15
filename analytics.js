(function (global) {
  // Firebase Analytics (GA4) cho typingease.site.
  //
  // Dùng thẳng gtag.js thay vì Firebase JS SDK: trên web, Firebase Analytics CHÍNH LÀ gtag.js bọc
  // thêm một lớp, còn site này tĩnh, không có bundler — nạp cả SDK chỉ để gọi gtag là phí. Dữ liệu
  // vẫn vào đúng property gắn với project Firebase `typingease-75e4f` (qua measurement ID).
  //
  // Không nhúng trực tiếp vào từng trang: sw-register.js đã có mặt trên mọi trang không phải trang
  // chuyển hướng, và nó chèn file này — một chỗ duy nhất thay vì sửa 300 trang và 10 máy sinh.
  //
  // Chỉ chạy trên tên miền thật: e2e, preview và localhost không được làm bẩn số liệu.
  //
  // Sự kiện tuỳ chỉnh: gọi `TypingEaseAnalytics.track(tên, { ... })`. Hàm luôn tồn tại (kể cả khi
  // không track) nên nơi gọi không phải kiểm tra gì; `language` được gắn tự động.
  const MEASUREMENT_ID = 'G-5E3FSNW2WL';
  const ENABLED = /(^|\.)typingease\.site$/.test(global.location.hostname);
  const lang = () => (global.document.documentElement.lang || 'en').toLowerCase();

  global.TypingEaseAnalytics = {
    track(name, params) {
      if (ENABLED) global.gtag('event', name, { language: lang(), ...params });
    }
  };
  if (!ENABLED) return;

  global.dataLayer = global.dataLayer || [];
  global.gtag = function () { global.dataLayer.push(arguments); };
  global.gtag('js', new Date());
  global.gtag('config', MEASUREMENT_ID, { content_group: lang() });

  const script = global.document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  global.document.head.appendChild(script);
})(window);

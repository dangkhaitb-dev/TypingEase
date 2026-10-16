// Khởi tạo Firebase (app + Analytics) cho typingease.site — cùng cách với solprompter
// (src/script/libs/firebase/firebase-init.js), khác một chỗ: site này tĩnh, không có bundler, nên
// SDK modular được nạp thẳng từ CDN của Firebase thay vì `import 'firebase/app'` từ npm. Phiên bản
// ghim cứng, trùng với bản solprompter đang chạy; nâng thì đổi ở SDK_URL.
//
// SDK chỉ được tải khi có người gọi initializeFirebase() — analytics.js chỉ gọi trên tên miền thật,
// nên localhost, preview và e2e không đụng tới mạng của Google.

const SDK_URL = 'https://www.gstatic.com/firebasejs/12.8.0';

// Lấy ở Firebase Console → Project settings → Your apps → Web app. Đây là định danh công khai
// (trang web nào dùng Firebase cũng lộ ra), không phải bí mật.
const firebaseConfig = {
  apiKey: 'AIzaSyC1XZxkG8cZ4H68oFzYqq2Uq-8EN5fzp9s',
  authDomain: 'typingease-75e4f.firebaseapp.com',
  projectId: 'typingease-75e4f',
  storageBucket: 'typingease-75e4f.firebasestorage.app',
  messagingSenderId: '857678577624',
  appId: '1:857678577624:web:7794fdaa7158cb0b16bcad',
  measurementId: 'G-5E3FSNW2WL'
};

let clientPromise = null;

/**
 * Khởi tạo Firebase app và Analytics, một lần cho cả trang.
 * Analytics tự gửi page_view ngay khi khởi tạo.
 *
 * @param {{ contentGroup?: string }} [options] content_group của GA4 — ở đây là ngôn ngữ trang.
 * @returns {Promise<{ app, analytics, logEvent } | null>} null khi trình duyệt không hỗ trợ
 *          (Safari ẩn danh, chặn cookie) hoặc tải SDK lỗi — site vẫn chạy bình thường.
 */
export function initializeFirebase({ contentGroup } = {}) {
  if (!clientPromise) {
    clientPromise = (async () => {
      const [{ initializeApp, getApps }, { initializeAnalytics, isSupported, logEvent, setAnalyticsCollectionEnabled }] = await Promise.all([
        import(`${SDK_URL}/firebase-app.js`),
        import(`${SDK_URL}/firebase-analytics.js`)
      ]);
      if (!(await isSupported())) return null;
      const app = getApps()[0] || initializeApp(firebaseConfig);
      const analytics = initializeAnalytics(app, { config: contentGroup ? { content_group: contentGroup } : {} });
      return { app, analytics, logEvent, setEnabled: enabled => setAnalyticsCollectionEnabled(analytics, enabled) };
    })().catch(() => null);
  }
  return clientPromise;
}

/**
 * Xoá cookie của Google Analytics (`_ga`, `_ga_<ID>`) khi người dùng rút lại đồng ý.
 * GA đặt cookie ở tên miền gốc (.typingease.site), nên xoá ở cả tên miền đó lẫn tên máy hiện tại.
 */
export function clearAnalyticsCookies() {
  const host = window.location.hostname;
  const domains = ['', `; domain=${host}`, `; domain=.${host.split('.').slice(-2).join('.')}`];
  for (const name of document.cookie.split(';').map(part => part.split('=')[0].trim())) {
    if (!/^_ga(_|$)/.test(name)) continue;
    for (const domain of domains) document.cookie = `${name}=; Max-Age=0; path=/${domain}`;
  }
}

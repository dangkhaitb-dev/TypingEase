// /__/* — chuyển tiếp trang xử lý đăng nhập của Firebase Auth (/__/auth/handler, /__/auth/iframe,
// /__/firebase/init.json…) từ typingease.site sang <project>.firebaseapp.com.
//
// Lý do: popup "Đăng nhập bằng Google" ghi tên miền của trang xử lý (authDomain). Để authDomain là
// typingease-75e4f.firebaseapp.com thì người dùng đọc "Đăng nhập vào typingease-75e4f.firebaseapp.com";
// đặt authDomain = typingease.site (firebase-init.js) và chuyển tiếp ở đây thì đọc "typingease.site".
// Cách này là phương án "reverse proxy" trong tài liệu Firebase (Best practices for signInWithRedirect).
// Điều kiện: https://typingease.site/__/auth/handler phải nằm trong Authorized redirect URIs của OAuth
// client "Web client (auto created by Google Service)" ở Google Cloud Console → APIs & Services → Credentials.

const FIREBASE_HOST = 'typingease-75e4f.firebaseapp.com';

export async function onRequest({ request }) {
  const url = new URL(request.url);
  url.hostname = FIREBASE_HOST;
  url.protocol = 'https:';
  url.port = '';
  // Chuyển hướng (nếu có) để nguyên cho trình duyệt xử lý, không đi theo ở phía server.
  return fetch(new Request(url, request), { redirect: 'manual' });
}

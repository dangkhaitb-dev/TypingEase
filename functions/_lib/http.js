// Tiện ích chung cho các Pages Function có phiên đăng nhập.

export function json(body, status = 200, cookies = []) {
  const headers = new Headers({ 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
  for (const cookie of cookies) headers.append('Set-Cookie', cookie);
  return new Response(JSON.stringify(body), { status, headers });
}

// Chặn CSRF cho request đổi trạng thái: cookie SameSite=Lax đã không đi theo POST từ site khác, đây là
// lớp thứ hai. Trình duyệt luôn gửi Origin với POST/PUT/DELETE từ fetch().
export const sameOrigin = request => request.headers.get('Origin') === new URL(request.url).origin;

export function readCookie(request, name) {
  for (const part of (request.headers.get('Cookie') || '').split(';')) {
    const index = part.indexOf('=');
    if (index > -1 && part.slice(0, index).trim() === name) return part.slice(index + 1).trim();
  }
  return '';
}

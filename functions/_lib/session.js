// Phiên đăng nhập do site tự quản (docs/PLAN-dang-nhap.md mục 2). Cookie te_session mang 32 byte ngẫu nhiên,
// D1 chỉ giữ SHA-256 của nó: lộ database cũng không dựng lại được cookie. Phiên trượt: còn dùng thì còn sống.

import { readCookie } from './http.js';

export const SESSION_COOKIE = 'te_session';
export const HINT_COOKIE = 'te_auth';       // JS đọc được: trang biết "đã đăng nhập" mà không gọi API
const DAY_MS = 24 * 60 * 60 * 1000;
const SESSION_TTL_MS = 180 * DAY_MS;
const TOUCH_EVERY_MS = DAY_MS;              // gia hạn tối đa một lần mỗi ngày → một lần ghi D1/ngày/phiên

const toHex = buffer => [...new Uint8Array(buffer)].map(byte => byte.toString(16).padStart(2, '0')).join('');
const hashToken = async token => toHex(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(token)));

function randomToken() {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function sessionCookies(token, maxAgeMs = SESSION_TTL_MS) {
  const maxAge = Math.floor(maxAgeMs / 1000);
  return [
    `${SESSION_COOKIE}=${token}; Max-Age=${maxAge}; Path=/; HttpOnly; Secure; SameSite=Lax`,
    `${HINT_COOKIE}=1; Max-Age=${maxAge}; Path=/; Secure; SameSite=Lax`
  ];
}

export const clearedCookies = () => [
  `${SESSION_COOKIE}=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Lax`,
  `${HINT_COOKIE}=; Max-Age=0; Path=/; Secure; SameSite=Lax`
];

export const publicUser = row => ({
  id: row.id, email: row.email, name: row.display_name, photo: row.photo_url, createdAt: row.created_at
});

/** Tạo phiên mới cho user; dọn luôn các phiên đã hết hạn của user đó. Trả token để đặt cookie. */
export async function createSession(db, userId, request, now = Date.now()) {
  const token = randomToken();
  await db.batch([
    db.prepare('DELETE FROM sessions WHERE user_id = ? AND expires_at < ?').bind(userId, now),
    db.prepare('INSERT INTO sessions (token_hash, user_id, created_at, last_seen_at, expires_at, user_agent) VALUES (?, ?, ?, ?, ?, ?)')
      .bind(await hashToken(token), userId, now, now, now + SESSION_TTL_MS, (request.headers.get('User-Agent') || '').slice(0, 300))
  ]);
  return token;
}

/**
 * Đọc phiên từ cookie. Trả null khi không có / hết hạn / đã bị thu hồi.
 * `cookies` khác rỗng khi phiên vừa được gia hạn — endpoint nào gọi hàm này thì gắn chúng vào response.
 */
export async function readSession(db, request, now = Date.now()) {
  const token = readCookie(request, SESSION_COOKIE);
  if (!token || token.length > 100) return null;
  const tokenHash = await hashToken(token);
  const row = await db.prepare(
    `SELECT s.last_seen_at, u.id, u.email, u.display_name, u.photo_url, u.created_at
       FROM sessions s JOIN users u ON u.id = s.user_id
      WHERE s.token_hash = ? AND s.expires_at > ?`
  ).bind(tokenHash, now).first();
  if (!row) return null;
  let cookies = [];
  if (now - row.last_seen_at >= TOUCH_EVERY_MS) {
    await db.prepare('UPDATE sessions SET last_seen_at = ?, expires_at = ? WHERE token_hash = ?')
      .bind(now, now + SESSION_TTL_MS, tokenHash).run();
    cookies = sessionCookies(token);
  }
  return { user: publicUser(row), tokenHash, cookies };
}

export async function deleteSession(db, request, { all = false } = {}) {
  const token = readCookie(request, SESSION_COOKIE);
  if (!token || token.length > 100) return;
  const tokenHash = await hashToken(token);
  if (all) await db.prepare('DELETE FROM sessions WHERE user_id = (SELECT user_id FROM sessions WHERE token_hash = ?)').bind(tokenHash).run();
  else await db.prepare('DELETE FROM sessions WHERE token_hash = ?').bind(tokenHash).run();
}

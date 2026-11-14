// POST /api/auth/session — đổi ID token của Firebase (đăng nhập Google ở trình duyệt) lấy phiên của site.
// Body: { idToken, source? } — source = nguồn truy cập (11ty/client/traffic-source.js), chỉ dùng cho tin Telegram. Trả { user, isNew } và đặt cookie te_session + te_auth (functions/_lib/session.js).
// isNew = tài khoản vừa được tạo lần này; client dựa vào đó để báo "đã lưu tiến độ của bạn vào tài khoản".
//
// Cần binding D1 tên DB (wrangler.toml) và biến FIREBASE_PROJECT_ID.

import { verifyFirebaseIdToken } from '../../_lib/firebase-token.js';
import { json, sameOrigin } from '../../_lib/http.js';
import { createSession, publicUser, sessionCookies } from '../../_lib/session.js';
import { sendTelegram } from '../../_lib/telegram.js';
import { projectLabel, sanitizeSource, visitorLines } from '../../_lib/visitor.js';

// Chỉ nhận token của lần đăng nhập vừa xong: token Firebase sống 1 giờ, nhưng auth_time là lúc người dùng
// thật sự bấm đăng nhập. Token cũ bị lấy cắp thì không đổi được thành phiên 180 ngày.
const MAX_AUTH_AGE_S = 5 * 60;
const field = (value, limit) => (typeof value === 'string' && value ? value.slice(0, limit) : null);

export async function onRequestPost({ request, env, waitUntil }) {
  if (!env.DB || !env.FIREBASE_PROJECT_ID) return json({ error: 'auth_not_configured' }, 503);
  if (!sameOrigin(request)) return json({ error: 'bad_origin' }, 403);

  let body;
  try { body = await request.json(); } catch { return json({ error: 'invalid_json' }, 400); }
  const idToken = typeof body?.idToken === 'string' ? body.idToken : '';
  if (!idToken || idToken.length > 4096) return json({ error: 'invalid_token' }, 401);

  let claims;
  try { claims = await verifyFirebaseIdToken(idToken, env.FIREBASE_PROJECT_ID); } catch (error) {
    console.error('firebase key fetch failed', error);
    return json({ error: 'auth_unavailable' }, 503);
  }
  if (!claims) return json({ error: 'invalid_token' }, 401);
  if (claims.firebase?.sign_in_provider !== 'google.com') return json({ error: 'provider_not_allowed' }, 403);
  if (Math.floor(Date.now() / 1000) - claims.auth_time > MAX_AUTH_AGE_S) return json({ error: 'stale_login' }, 401);

  const now = Date.now();
  const user = await env.DB.prepare(
    `INSERT INTO users (id, firebase_uid, email, display_name, photo_url, provider, created_at, last_login_at)
     VALUES (?, ?, ?, ?, ?, 'google.com', ?, ?)
     ON CONFLICT (firebase_uid) DO UPDATE SET
       email = excluded.email, display_name = excluded.display_name,
       photo_url = excluded.photo_url, last_login_at = excluded.last_login_at
     RETURNING id, email, display_name, photo_url, created_at`
  ).bind(
    crypto.randomUUID(), claims.sub,
    claims.email_verified ? field(claims.email, 200) : null, field(claims.name, 100), field(claims.picture, 500),
    now, now
  ).first();

  const token = await createSession(env.DB, user.id, request, now);
  const isNew = user.created_at === now;
  // Báo tài khoản mới về Telegram sau khi đã trả response: Telegram chậm hay lỗi cũng không làm chậm
  // hay hỏng việc đăng nhập. Đăng nhập lại thì không báo.
  if (isNew) waitUntil(announceSignup(env, request, user, sanitizeSource(body?.source)).catch(error => console.error('signup notice failed', error)));
  return json({ user: publicUser(user), isNew }, 200, sessionCookies(token));
}

async function announceSignup(env, request, user, source) {
  const { total } = await env.DB.prepare('SELECT COUNT(*) AS total FROM users').first();
  const when = new Date(user.created_at).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
  await sendTelegram(env, [
    `🎉 Tài khoản mới — ${projectLabel(env, request)}`,
    ...visitorLines(request, source),
    `Tên: ${user.display_name || 'n/a'}`,
    `Email: ${user.email || 'n/a'}`,
    `Lúc: ${when}`,
    `Tổng số tài khoản: ${total}`
  ].join('\n'));
}

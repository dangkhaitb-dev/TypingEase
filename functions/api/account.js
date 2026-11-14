// DELETE /api/account — xoá vĩnh viễn tài khoản đang đăng nhập: dòng users, mọi phiên (mọi thiết bị) và mọi
// dữ liệu đồng bộ (user_data). Body: { idToken } của một lần đăng nhập Google VỪA làm (auth.js mở lại popup
// trước khi gọi): phiên cookie còn sống chưa đủ để xoá — máy dùng chung, ai mở trình duyệt cũng có phiên đó.
// Bản ghi tài khoản bên Firebase do trình duyệt tự xoá sau khi endpoint này trả ok (user.delete()).

import { verifyFirebaseIdToken } from '../_lib/firebase-token.js';
import { json, sameOrigin } from '../_lib/http.js';
import { clearedCookies, readSession } from '../_lib/session.js';
import { sendTelegram } from '../_lib/telegram.js';
import { projectLabel } from '../_lib/visitor.js';

const MAX_AUTH_AGE_S = 5 * 60;

export async function onRequestDelete({ request, env, waitUntil }) {
  if (!env.DB || !env.FIREBASE_PROJECT_ID) return json({ error: 'auth_not_configured' }, 503);
  if (!sameOrigin(request)) return json({ error: 'bad_origin' }, 403);
  const session = await readSession(env.DB, request);
  if (!session) return json({ error: 'signed_out' }, 401, clearedCookies());

  let body;
  try { body = await request.json(); } catch { return json({ error: 'invalid_json' }, 400); }
  const idToken = typeof body?.idToken === 'string' && body.idToken.length <= 4096 ? body.idToken : '';
  let claims = null;
  try { claims = idToken ? await verifyFirebaseIdToken(idToken, env.FIREBASE_PROJECT_ID) : null; } catch (error) {
    console.error('firebase key fetch failed', error);
    return json({ error: 'auth_unavailable' }, 503);
  }
  if (!claims) return json({ error: 'invalid_token' }, 401);
  if (Math.floor(Date.now() / 1000) - claims.auth_time > MAX_AUTH_AGE_S) return json({ error: 'stale_login' }, 401);

  const userId = session.user.id;
  const owner = await env.DB.prepare('SELECT firebase_uid FROM users WHERE id = ?').bind(userId).first();
  // Đăng nhập lại bằng một tài khoản Google KHÁC thì không được xoá tài khoản đang mở.
  if (!owner || owner.firebase_uid !== claims.sub) return json({ error: 'wrong_account' }, 403);

  await env.DB.batch([
    env.DB.prepare('DELETE FROM user_data WHERE user_id = ?').bind(userId),
    env.DB.prepare('DELETE FROM sessions WHERE user_id = ?').bind(userId),
    env.DB.prepare('DELETE FROM users WHERE id = ?').bind(userId)
  ]);
  // Báo số tài khoản còn lại, KHÔNG kèm tên/email: người dùng vừa yêu cầu xoá dữ liệu của họ.
  waitUntil((async () => {
    const { total } = await env.DB.prepare('SELECT COUNT(*) AS total FROM users').first();
    await sendTelegram(env, `🗑️ Một tài khoản vừa được người dùng xoá — ${projectLabel(env, request)}\nTổng số tài khoản: ${total}`);
  })().catch(error => console.error('delete notice failed', error)));
  return json({ ok: true }, 200, clearedCookies());
}

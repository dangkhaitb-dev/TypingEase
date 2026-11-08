// GET /api/me — tài khoản đang đăng nhập, hoặc 401 (kèm xoá cookie gợi ý te_auth để trang về giao diện khách).
// Gọi định kỳ cũng là cách giữ phiên trượt: tới hạn thì readSession gia hạn và trả cookie mới.

import { json } from '../_lib/http.js';
import { clearedCookies, readSession } from '../_lib/session.js';

export async function onRequestGet({ request, env }) {
  if (!env.DB) return json({ error: 'auth_not_configured' }, 503);
  const session = await readSession(env.DB, request);
  if (!session) return json({ error: 'signed_out' }, 401, clearedCookies());
  return json({ user: session.user }, 200, session.cookies);
}

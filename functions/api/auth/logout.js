// POST /api/auth/logout — xoá phiên hiện tại; ?all=1 xoá mọi phiên của tài khoản ("đăng xuất mọi thiết bị").
// Luôn xoá cookie, kể cả khi phiên đã không còn trong D1.

import { json, sameOrigin } from '../../_lib/http.js';
import { clearedCookies, deleteSession } from '../../_lib/session.js';

export async function onRequestPost({ request, env }) {
  if (!sameOrigin(request)) return json({ error: 'bad_origin' }, 403);
  if (env.DB) await deleteSession(env.DB, request, { all: new URL(request.url).searchParams.get('all') === '1' });
  return json({ ok: true }, 200, clearedCookies());
}

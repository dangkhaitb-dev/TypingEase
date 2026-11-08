// /api/sync — kho dữ liệu đồng bộ của tài khoản (bảng user_data; docs/PLAN-dang-nhap.md mục 5).
// Mỗi dòng là một khoá localStorage, giữ nguyên chuỗi thô. Server không hiểu nội dung, không gộp:
// gộp là việc của trình duyệt (11ty/client/sync-merge.js). Server chỉ giữ `rev` để biết ai ghi đè ai.
//
// GET  /api/sync?since=<ms>  → { now, items: [{ key, data, rev, updatedAt }] } các khoá đổi sau `since`.
// PUT  /api/sync  { items: [{ key, data, baseRev }] }
//      → { now, saved: [{ key, rev }], conflicts: [{ key, data, rev, updatedAt }] }
//      Ghi khi rev trên server vẫn là baseRev (0 = khoá chưa có). Lệch là máy khác vừa ghi: trả bản đó
//      trong `conflicts` để trình duyệt gộp rồi gửi lại. data = '' là "đã xoá trên thiết bị".

import { json, sameOrigin } from '../_lib/http.js';
import { readSession } from '../_lib/session.js';

const KEY_PATTERN = /^typingease-[a-z0-9-]{1,69}$/;
// Mỗi khoá là một câu SQL trong batch; gói Workers miễn phí cho tối đa 50 truy vấn D1 mỗi request (và
// 100 tham số mỗi câu, chạm tới ở `IN (...)` bên dưới). Trình duyệt tự chia lô theo con số này.
const MAX_ITEMS = 40;
const MAX_VALUE_CHARS = 200_000;
const MAX_KEYS_PER_USER = 300;

async function authorize(request, env) {
  if (!env.DB) return { error: json({ error: 'sync_not_configured' }, 503) };
  const session = await readSession(env.DB, request);
  if (!session) return { error: json({ error: 'signed_out' }, 401) };
  return { session };
}

export async function onRequestGet({ request, env }) {
  const { session, error } = await authorize(request, env);
  if (error) return error;
  const since = Math.max(0, Math.floor(Number(new URL(request.url).searchParams.get('since')) || 0));
  const now = Date.now();
  const { results } = await env.DB.prepare(
    'SELECT key, data, rev, updated_at FROM user_data WHERE user_id = ? AND updated_at > ?'
  ).bind(session.user.id, since).all();
  const items = results.map(row => ({ key: row.key, data: row.data, rev: row.rev, updatedAt: row.updated_at }));
  return json({ now, items }, 200, session.cookies);
}

export async function onRequestPut({ request, env }) {
  if (!sameOrigin(request)) return json({ error: 'bad_origin' }, 403);
  const { session, error } = await authorize(request, env);
  if (error) return error;

  let body;
  try { body = await request.json(); } catch { return json({ error: 'invalid_json' }, 400); }
  const raw = Array.isArray(body?.items) ? body.items : null;
  if (!raw || !raw.length || raw.length > MAX_ITEMS) return json({ error: 'invalid_items' }, 422);
  const items = [];
  const seen = new Set();
  for (const item of raw) {
    const valid = typeof item?.key === 'string' && KEY_PATTERN.test(item.key) && !seen.has(item.key)
      && typeof item.data === 'string' && item.data.length <= MAX_VALUE_CHARS
      && Number.isInteger(item.baseRev) && item.baseRev >= 0;
    if (!valid) return json({ error: 'invalid_item', key: typeof item?.key === 'string' ? item.key.slice(0, 80) : null }, 422);
    seen.add(item.key);
    items.push(item);
  }

  const userId = session.user.id;
  const inserts = items.filter(item => item.baseRev === 0).length;
  if (inserts) {
    const { total } = await env.DB.prepare('SELECT COUNT(*) AS total FROM user_data WHERE user_id = ?').bind(userId).first();
    if (total + inserts > MAX_KEYS_PER_USER) return json({ error: 'too_many_keys' }, 413);
  }

  const now = Date.now();
  const results = await env.DB.batch(items.map(item => (item.baseRev === 0
    ? env.DB.prepare('INSERT INTO user_data (user_id, key, data, rev, updated_at) VALUES (?, ?, ?, 1, ?) ON CONFLICT (user_id, key) DO NOTHING')
      .bind(userId, item.key, item.data, now)
    : env.DB.prepare('UPDATE user_data SET data = ?, rev = rev + 1, updated_at = ? WHERE user_id = ? AND key = ? AND rev = ?')
      .bind(item.data, now, userId, item.key, item.baseRev))));

  const saved = [], lost = [];
  items.forEach((item, index) => (results[index].meta.changes === 1 ? saved.push({ key: item.key, rev: item.baseRev + 1 }) : lost.push(item.key)));

  let conflicts = [];
  if (lost.length) {
    const rows = (await env.DB.prepare(
      `SELECT key, data, rev, updated_at FROM user_data WHERE user_id = ? AND key IN (${lost.map(() => '?').join(', ')})`
    ).bind(userId, ...lost).all()).results;
    const byKey = new Map(rows.map(row => [row.key, row]));
    // Khoá không còn trên server (baseRev > 0 nhưng dòng đã mất): báo rev 0 để lần sau gửi như khoá mới.
    conflicts = lost.map(key => {
      const row = byKey.get(key);
      return row ? { key, data: row.data, rev: row.rev, updatedAt: row.updated_at } : { key, data: '', rev: 0, updatedAt: 0 };
    });
  }
  return json({ now, saved, conflicts }, 200, session.cookies);
}

// Kiểm functions/api/account.js (DELETE /api/account) trên một D1 giả: node:sqlite trong bộ nhớ, nạp đúng
// migrations/*.sql. ID token Firebase được ký bằng khoá RSA tự sinh, JWKS giả qua fetch — không cần mạng.

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { onRequestDelete } from '../../functions/api/account.js';

const ROOT = path.resolve(import.meta.dirname, '..', '..');
const PROJECT = 'typingease-75e4f';
const ORIGIN = 'https://typingease.site';

// --- D1 giả: đủ prepare/bind/first/all/run/batch cho các endpoint ----------------------------------------
function fakeD1() {
  const db = new DatabaseSync(':memory:');
  for (const file of fs.readdirSync(path.join(ROOT, 'migrations')).sort()) db.exec(fs.readFileSync(path.join(ROOT, 'migrations', file), 'utf8'));
  const statement = (sql, args = []) => ({
    bind: (...next) => statement(sql, next),
    first: async () => db.prepare(sql).get(...args) ?? null,
    all: async () => ({ results: db.prepare(sql).all(...args) }),
    run: async () => { const info = db.prepare(sql).run(...args); return { meta: { changes: Number(info.changes) } }; }
  });
  return {
    raw: db,
    prepare: sql => statement(sql),
    batch: async list => { db.exec('BEGIN'); try { const out = []; for (const s of list) out.push(await s.run()); db.exec('COMMIT'); return out; } catch (e) { db.exec('ROLLBACK'); throw e; } }
  };
}

// --- token Firebase giả ------------------------------------------------------------------------------
const algorithm = { name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' };
const keys = await crypto.subtle.generateKey(algorithm, true, ['sign', 'verify']);
const jwk = { ...(await crypto.subtle.exportKey('jwk', keys.publicKey)), kid: 'k1', alg: 'RS256' };
globalThis.fetch = async () => new Response(JSON.stringify({ keys: [jwk] }), { headers: { 'Cache-Control': 'max-age=3600' } });
const b64url = value => Buffer.from(value).toString('base64url');
async function idToken(sub, { authAge = 10 } = {}) {
  const now = Math.floor(Date.now() / 1000);
  const payload = { iss: `https://securetoken.google.com/${PROJECT}`, aud: PROJECT, sub, iat: now - 5, exp: now + 3600, auth_time: now - authAge, firebase: { sign_in_provider: 'google.com' } };
  const input = `${b64url(JSON.stringify({ alg: 'RS256', kid: 'k1' }))}.${b64url(JSON.stringify(payload))}`;
  return `${input}.${b64url(Buffer.from(await crypto.subtle.sign('RSASSA-PKCS1-v1_5', keys.privateKey, new TextEncoder().encode(input))))}`;
}
const sha256 = async text => [...new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text)))].map(b => b.toString(16).padStart(2, '0')).join('');

// --- dữ liệu: hai người dùng, mỗi người một phiên và vài khoá đồng bộ ------------------------------------
const DB = fakeD1();
const now = Date.now();
for (const [id, uid] of [['u1', 'fb-one'], ['u2', 'fb-two']]) {
  DB.raw.prepare('INSERT INTO users VALUES (?, ?, ?, ?, NULL, ?, ?, ?)').run(id, uid, `${id}@x.test`, id, 'google.com', now, now);
  DB.raw.prepare('INSERT INTO sessions VALUES (?, ?, ?, ?, ?, ?)').run(await sha256(`tok-${id}`), id, now, now, now + 86400000, 'test');
  DB.raw.prepare('INSERT INTO user_data VALUES (?, ?, ?, 1, ?)').run(id, 'typingease-progress-v4', '{}', now);
}
const count = (table, id) => DB.raw.prepare(`SELECT COUNT(*) AS n FROM ${table} WHERE ${table === 'users' ? 'id' : 'user_id'} = ?`).get(id).n;
const waits = [];
const env = { DB, FIREBASE_PROJECT_ID: PROJECT };
const call = async ({ token, body, origin = ORIGIN }) => {
  const headers = { 'Content-Type': 'application/json', Origin: origin };
  if (token) headers.Cookie = `te_session=${token}`;
  const response = await onRequestDelete({ request: new Request(`${ORIGIN}/api/account`, { method: 'DELETE', headers, body: JSON.stringify(body) }), env, waitUntil: p => waits.push(p) });
  return { status: response.status, body: await response.json(), cookies: response.headers.getSetCookie() };
};

let checks = 0;
const check = async (label, fn) => { await fn(); checks += 1; void label; };

await check('other origin rejected', async () => assert.equal((await call({ token: 'tok-u1', body: {}, origin: 'https://evil.test' })).status, 403));
await check('no session', async () => assert.equal((await call({ body: { idToken: await idToken('fb-one') } })).status, 401));
await check('missing token', async () => assert.equal((await call({ token: 'tok-u1', body: {} })).status, 401));
await check('stale re-auth', async () => {
  const result = await call({ token: 'tok-u1', body: { idToken: await idToken('fb-one', { authAge: 3600 }) } });
  assert.deepEqual([result.status, result.body.error], [401, 'stale_login']);
});
await check('re-auth with another Google account cannot delete', async () => {
  const result = await call({ token: 'tok-u1', body: { idToken: await idToken('fb-two') } });
  assert.deepEqual([result.status, result.body.error], [403, 'wrong_account']);
  assert.equal(count('users', 'u1') + count('users', 'u2'), 2);
});
await check('owner deletes: account, sessions and data gone; other user untouched', async () => {
  const result = await call({ token: 'tok-u1', body: { idToken: await idToken('fb-one') } });
  assert.equal(result.status, 200);
  assert.ok(result.cookies.some(c => c.startsWith('te_session=;')) && result.cookies.some(c => c.startsWith('te_auth=;')));
  assert.deepEqual([count('users', 'u1'), count('sessions', 'u1'), count('user_data', 'u1')], [0, 0, 0]);
  assert.deepEqual([count('users', 'u2'), count('sessions', 'u2'), count('user_data', 'u2')], [1, 1, 1]);
  await Promise.all(waits);
});
await check('deleted session no longer works', async () => assert.equal((await call({ token: 'tok-u1', body: { idToken: await idToken('fb-one') } })).status, 401));

console.log(`account-api: ${checks} checks passed`);

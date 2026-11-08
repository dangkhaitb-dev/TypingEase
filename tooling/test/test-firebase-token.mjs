// Kiểm functions/_lib/firebase-token.js: tự sinh khoá RSA, giả JWKS của Google qua fetch, ký token
// rồi xem bộ kiểm nhận đúng token hợp lệ và từ chối từng kiểu sai. Không cần mạng.

import assert from 'node:assert/strict';
import { verifyFirebaseIdToken } from '../../functions/_lib/firebase-token.js';

const PROJECT = 'typingease-75e4f';
const algorithm = { name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' };
const good = await crypto.subtle.generateKey(algorithm, true, ['sign', 'verify']);
const rogue = await crypto.subtle.generateKey(algorithm, true, ['sign', 'verify']);
const publicJwk = { ...(await crypto.subtle.exportKey('jwk', good.publicKey)), kid: 'k1', use: 'sig', alg: 'RS256' };

let fetches = 0;
globalThis.fetch = async () => {
  fetches += 1;
  return new Response(JSON.stringify({ keys: [publicJwk] }), { headers: { 'Cache-Control': 'public, max-age=3600' } });
};

const b64url = input => Buffer.from(input).toString('base64url');
const now = Math.floor(Date.now() / 1000);
const claims = (extra = {}) => ({
  iss: `https://securetoken.google.com/${PROJECT}`, aud: PROJECT, sub: 'uid-123',
  iat: now - 10, exp: now + 3600, auth_time: now - 10, firebase: { sign_in_provider: 'google.com' }, ...extra
});

async function sign(payload, { key = good.privateKey, header = { alg: 'RS256', kid: 'k1', typ: 'JWT' } } = {}) {
  const input = `${b64url(JSON.stringify(header))}.${b64url(JSON.stringify(payload))}`;
  const signature = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, new TextEncoder().encode(input));
  return `${input}.${b64url(Buffer.from(signature))}`;
}

const ok = await verifyFirebaseIdToken(await sign(claims()), PROJECT);
assert.equal(ok?.sub, 'uid-123', 'valid token accepted');

const rejects = {
  'wrong signing key': await sign(claims(), { key: rogue.privateKey }),
  'wrong audience': await sign(claims({ aud: 'other-project' })),
  'wrong issuer': await sign(claims({ iss: 'https://securetoken.google.com/other-project' })),
  'expired': await sign(claims({ exp: now - 3600 })),
  'issued in the future': await sign(claims({ iat: now + 3600 })),
  'auth_time in the future': await sign(claims({ auth_time: now + 3600 })),
  'empty subject': await sign(claims({ sub: '' })),
  'alg none': await sign(claims(), { header: { alg: 'none', kid: 'k1' } }),
  'unknown kid': await sign(claims(), { header: { alg: 'RS256', kid: 'nope' } }),
  'garbage': 'not.a.token',
  'not a string': null
};
for (const [label, token] of Object.entries(rejects))
  assert.equal(await verifyFirebaseIdToken(token, PROJECT), null, `rejects: ${label}`);

// Tampered payload with the original signature.
const [h, , s] = (await sign(claims())).split('.');
assert.equal(await verifyFirebaseIdToken(`${h}.${b64url(JSON.stringify(claims({ sub: 'admin' })))}.${s}`, PROJECT), null, 'rejects: tampered payload');

// Keys are cached; an unknown kid triggers exactly one refetch, not one per token.
assert.ok(fetches <= 2, `JWKS fetched ${fetches} times`);

console.log(`firebase-token: ${Object.keys(rejects).length + 2} checks passed`);

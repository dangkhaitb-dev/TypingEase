// Kiểm ID token của Firebase Auth ngay trong Worker, bằng WebCrypto, không cần Admin SDK hay thư viện JWT.
// Quy tắc theo tài liệu Firebase ("Verify ID tokens using a third-party JWT library"): RS256, kid nằm trong
// bộ khoá công khai của securetoken, aud = project id, iss = https://securetoken.google.com/<project id>,
// exp chưa qua, iat/auth_time không ở tương lai, sub là chuỗi không rỗng.

const JWKS_URL = 'https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com';
const CLOCK_SKEW_S = 60;

const base64UrlBytes = value => {
  const base64 = value.replace(/-/g, '+').replace(/_/g, '/');
  return Uint8Array.from(atob(base64.padEnd(Math.ceil(base64.length / 4) * 4, '=')), char => char.charCodeAt(0));
};
const decodeJson = part => JSON.parse(new TextDecoder().decode(base64UrlBytes(part)));

// Google xoay khoá vài giờ một lần và báo thời hạn trong Cache-Control; giữ trong bộ nhớ của isolate
// tới hạn đó, gặp kid lạ thì tải lại một lần (vừa xoay khoá).
let cached = { keys: null, expires: 0 };

async function loadKeys(force = false) {
  if (!force && cached.keys && Date.now() < cached.expires) return cached.keys;
  const response = await fetch(JWKS_URL);
  if (!response.ok) throw new Error(`jwks fetch failed: ${response.status}`);
  const maxAge = Number(/max-age=(\d+)/.exec(response.headers.get('Cache-Control') || '')?.[1]) || 3600;
  const { keys } = await response.json();
  cached = { keys: Array.isArray(keys) ? keys : [], expires: Date.now() + maxAge * 1000 };
  return cached.keys;
}

async function findKey(kid) {
  const fresh = !cached.keys || Date.now() >= cached.expires;
  let jwk = (await loadKeys()).find(key => key.kid === kid);
  if (!jwk && !fresh) jwk = (await loadKeys(true)).find(key => key.kid === kid);
  return jwk || null;
}

/**
 * @param {string} token ID token lấy từ user.getIdToken() ở trình duyệt.
 * @param {string} projectId Firebase project id.
 * @param {{ now?: number }} [options] now tính bằng giây, để test.
 * @returns {Promise<object | null>} payload khi hợp lệ, null khi không.
 */
export async function verifyFirebaseIdToken(token, projectId, { now = Math.floor(Date.now() / 1000) } = {}) {
  const parts = typeof token === 'string' ? token.split('.') : [];
  if (parts.length !== 3 || !projectId) return null;
  let header, payload;
  try { header = decodeJson(parts[0]); payload = decodeJson(parts[1]); } catch { return null; }

  if (header?.alg !== 'RS256' || typeof header.kid !== 'string') return null;
  if (payload?.aud !== projectId || payload.iss !== `https://securetoken.google.com/${projectId}`) return null;
  if (typeof payload.sub !== 'string' || !payload.sub || payload.sub.length > 128) return null;
  if (!(payload.exp > now - CLOCK_SKEW_S)) return null;
  if (!(payload.iat <= now + CLOCK_SKEW_S) || !(payload.auth_time <= now + CLOCK_SKEW_S)) return null;

  const jwk = await findKey(header.kid);
  if (!jwk) return null;
  const key = await crypto.subtle.importKey(
    'jwk', { kty: jwk.kty, n: jwk.n, e: jwk.e, alg: 'RS256', ext: true },
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify']
  );
  const valid = await crypto.subtle.verify(
    'RSASSA-PKCS1-v1_5', key, base64UrlBytes(parts[2]), new TextEncoder().encode(`${parts[0]}.${parts[1]}`)
  );
  return valid ? payload : null;
}

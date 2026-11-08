// Đồng bộ tiến độ giữa thiết bị và tài khoản (docs/PLAN-dang-nhap.md mục 5). auth.js điều khiển:
// startSync(user) khi biết người dùng đã đăng nhập, stopSync() khi phiên mất, clearSyncedData() khi
// người dùng bấm Đăng xuất.
//
// Mô hình: mỗi khoá localStorage được đồng bộ (sync-merge.js → isSyncedKey) là một dòng trên server
// mang số `rev`. Sổ đồng bộ (META_KEY) nhớ, với từng khoá, rev và dấu băm của bản mà server đang giữ.
//  - Khoá trên máy khác dấu băm trong sổ = máy đã đổi → đẩy lên kèm baseRev. Server chỉ nhận khi rev
//    của nó vẫn là baseRev; lệch thì trả bản của nó về, máy gộp hai bản (sync-merge.js) rồi đẩy lại.
//  - Kéo về một khoá máy CHƯA đổi → lấy nguyên bản server (kể cả bản "đã xoá tiến độ"). Máy đã đổi →
//    gộp. Chỉ gộp khi cả hai phía cùng đổi, nên xoá tiến độ ở /tien-do/ lan được sang máy khác.
//  - Lần đầu đăng nhập trên máy đang có dữ liệu khách: sổ trống, mọi khoá đều tính là "đã đổi" → gộp
//    hết vào tài khoản. Máy đang giữ dữ liệu của TÀI KHOẢN KHÁC (phiên cũ hết hạn, không đăng xuất) thì
//    bỏ dữ liệu đó đi, lấy của tài khoản mới — không trộn tiến độ của hai người.
//
// Đẩy: mọi localStorage.setItem/removeItem vào khoá đồng bộ hẹn một lần đẩy sau PUSH_DELAY_MS; tab bị ẩn
// hay đóng thì đẩy ngay bằng fetch keepalive. Kéo: lúc khởi động, và mỗi lần tab hiện lại sau PULL_EVERY_MS.
// Kéo về làm đổi dữ liệu thì gọi onRemoteChange — trang đang chạy còn giữ bản cũ trong bộ nhớ.

import { isSyncedKey, mergeRaw } from './sync-merge.js';

const META_KEY = 'typingease-sync-v1';    // { userId, cursor, keys: { key: { rev, hash } } }
const PUSH_DELAY_MS = 4000;
const PULL_EVERY_MS = 30 * 1000;
const PULL_OVERLAP_MS = 10 * 1000;        // kéo chồng lên 10 s: đồng hồ của các Worker có thể lệch nhau
const BATCH = 40;                         // = MAX_ITEMS của functions/api/sync.js
const KEEPALIVE_LIMIT = 60_000;           // trình duyệt giới hạn thân request keepalive ở 64 KB

const storage = (() => { try { return globalThis.localStorage || null; } catch { return null; } })();
const get = key => { try { return storage?.getItem(key) ?? null; } catch { return null; } };
const put = (key, raw) => {
  try { if (raw == null || raw === '') storage?.removeItem(key); else storage?.setItem(key, raw); } catch { /* đầy / bị chặn */ }
};

// FNV-1a 32 bit + độ dài: chỉ để biết "chuỗi có đổi không", không cần chống va chạm có chủ đích.
function hash(text) {
  let value = 0x811c9dc5;
  for (let index = 0; index < text.length; index += 1) {
    value ^= text.charCodeAt(index);
    value = Math.imul(value, 0x01000193);
  }
  return `${(value >>> 0).toString(36)}.${text.length}`;
}
const EMPTY = hash('');

let userId = null, meta = null, onRemoteChange = null;
let pushTimer = 0, pushing = null, pushQueued = false, lastPull = 0, interacted = false, hooked = false;

// Người dùng đã bấm / gõ gì trên trang chưa — chưa thì tải lại trang để hiện tiến độ mới là vô hại.
for (const type of ['keydown', 'pointerdown']) globalThis.addEventListener?.(type, () => { interacted = true; }, { capture: true, passive: true, once: true });
export const hasInteracted = () => interacted;

function readMeta() {
  try {
    const value = JSON.parse(get(META_KEY));
    if (value && typeof value === 'object' && value.keys && typeof value.keys === 'object') return value;
  } catch { /* hỏng thì làm lại từ đầu */ }
  return { userId: null, cursor: 0, keys: {} };
}
const saveMeta = () => put(META_KEY, JSON.stringify(meta));

function syncedLocalKeys() {
  const keys = [];
  try { for (let index = 0; index < storage.length; index += 1) { const key = storage.key(index); if (isSyncedKey(key)) keys.push(key); } } catch { /* bị chặn */ }
  return keys;
}

// Một khoá từ server (kéo về, hoặc bản thắng trong một lần đẩy bị từ chối). Trả true nếu localStorage đổi.
function applyRemote({ key, data, rev }, { prefer, fromPull }) {
  if (!isSyncedKey(key)) return false;
  const known = meta.keys[key];
  if (fromPull && known && known.rev >= rev) return false;            // bản mình đã có (thường là của chính mình)
  const local = get(key);
  const dirty = local === null ? Boolean(known) && known.hash !== EMPTY : !known || known.hash !== hash(local);
  const next = dirty ? mergeRaw(key, local, data, { prefer }) : (data || null);
  meta.keys[key] = { rev, hash: hash(data || '') };
  if ((next || null) === (local || null)) return false;
  put(key, next);
  return true;
}

function dirtyItems() {
  const items = [];
  for (const key of new Set([...syncedLocalKeys(), ...Object.keys(meta.keys)])) {
    if (!isSyncedKey(key)) continue;
    const known = meta.keys[key];
    const data = get(key) ?? '';
    if (known ? known.hash === hash(data) : data === '') continue;
    items.push({ key, data, baseRev: known?.rev || 0 });
  }
  return items;
}

async function pull({ full = false, prefer = 'local' } = {}) {
  const since = full ? 0 : Math.max(0, (meta.cursor || 0) - PULL_OVERLAP_MS);
  const response = await fetch(`/api/sync?since=${since}`, { cache: 'no-store' });
  if (response.status === 401) { stopSync(); return false; }
  if (!response.ok || !userId) return false;
  const { now, items } = await response.json();
  let changed = false;
  for (const item of items) changed = applyRemote(item, { prefer, fromPull: !full }) || changed;
  meta.cursor = Number(now) || meta.cursor;
  saveMeta();
  lastPull = Date.now();
  return changed;
}

async function pushOnce({ keepalive }) {
  let changed = false;
  for (let round = 0; round < 3 && userId; round += 1) {
    const items = dirtyItems();
    if (!items.length) break;
    let conflicted = false;
    for (let start = 0; start < items.length && userId; start += BATCH) {
      const batch = items.slice(start, start + BATCH);
      const body = JSON.stringify({ items: batch });
      const response = await fetch('/api/sync', {
        method: 'PUT', headers: { 'Content-Type': 'application/json' }, body,
        keepalive: Boolean(keepalive) && body.length < KEEPALIVE_LIMIT
      });
      if (response.status === 401) { stopSync(); return changed; }
      if (!response.ok) return changed;
      const { saved = [], conflicts = [] } = await response.json();
      const sent = new Map(batch.map(item => [item.key, item.data]));
      for (const { key, rev } of saved) meta.keys[key] = { rev, hash: hash(sent.get(key) ?? '') };
      for (const conflict of conflicts) {
        conflicted = true;
        if (!conflict.rev) delete meta.keys[conflict.key];            // server không còn khoá này: gửi lại như mới
        else changed = applyRemote(conflict, { prefer: 'local', fromPull: false }) || changed;
      }
      saveMeta();
    }
    if (!conflicted) break;
  }
  return changed;
}

function push({ keepalive = false } = {}) {
  clearTimeout(pushTimer);
  if (!userId) return Promise.resolve();
  if (pushing) { pushQueued = true; return pushing; }
  pushing = pushOnce({ keepalive })
    .then(changed => { if (changed) onRemoteChange?.({ initial: false }); })
    .catch(() => { /* mất mạng: lần sau đẩy lại, dữ liệu vẫn "đã đổi" so với sổ */ })
    .finally(() => {
      pushing = null;
      if (pushQueued) { pushQueued = false; schedulePush(); }
    });
  return pushing;
}

function schedulePush() {
  if (!userId) return;
  clearTimeout(pushTimer);
  pushTimer = setTimeout(push, PUSH_DELAY_MS);
}

function hook() {
  if (hooked || typeof Storage !== 'function' || !storage) return;
  hooked = true;
  const proto = Storage.prototype;
  const { setItem, removeItem } = proto;
  const touched = (target, key) => { if (userId && target === storage && isSyncedKey(String(key))) schedulePush(); };
  proto.setItem = function (key, value) { const result = setItem.call(this, key, value); touched(this, key); return result; };
  proto.removeItem = function (key) { const result = removeItem.call(this, key); touched(this, key); return result; };

  document.addEventListener('visibilitychange', () => {
    if (!userId) return;
    if (document.visibilityState === 'hidden') { push({ keepalive: true }); return; }
    if (Date.now() - lastPull < PULL_EVERY_MS) return;
    pull().then(changed => { if (changed) onRemoteChange?.({ initial: false }); return push(); }).catch(() => {});
  });
  globalThis.addEventListener('pagehide', () => { if (userId) push({ keepalive: true }); });
}

/**
 * Bắt đầu đồng bộ cho tài khoản này (gọi lại với cùng tài khoản thì không làm gì).
 * @param {{ id: string }} user
 * @param {{ onRemoteChange?: (info: { initial: boolean }) => void }} [options] gọi khi dữ liệu trên máy
 *        vừa bị thay bằng / gộp với dữ liệu tài khoản; `initial` = lần đầu tài khoản này vào máy này.
 */
export async function startSync(user, options = {}) {
  if (!user?.id || !storage || userId === user.id) return;
  hook();
  userId = user.id;
  onRemoteChange = options.onRemoteChange || null;
  meta = readMeta();
  let initial = false;
  if (meta.userId !== user.id) {
    if (meta.userId) for (const key of syncedLocalKeys()) put(key, null);   // dữ liệu của tài khoản khác
    meta = { userId: user.id, cursor: 0, keys: {} };
    initial = true;
  }
  try {
    // Lần đầu: cài đặt (âm thanh, bàn phím…) lấy theo tài khoản; về sau lấy theo máy vừa đổi.
    const changed = await pull({ full: initial, prefer: initial ? 'remote' : 'local' });
    if (!userId) return;
    await push();
    if (changed) onRemoteChange?.({ initial });
  } catch { /* mất mạng: lần tab hiện lại sau sẽ thử lại */ }
}

export function stopSync() {
  userId = null;
  clearTimeout(pushTimer);
}

/** Đẩy nốt thay đổi chưa gửi (trước khi đăng xuất): chờ lần đang chạy xong rồi đẩy thêm một lần. */
export async function flushSync() {
  if (pushing) await pushing;
  await push();
}

/** Đăng xuất: xoá dữ liệu tài khoản khỏi máy (máy có thể dùng chung), về trạng thái khách trống. */
export function clearSyncedData() {
  stopSync();
  for (const key of syncedLocalKeys()) put(key, null);
  put(META_KEY, null);
}

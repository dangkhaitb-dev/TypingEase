(function (global) {
  // data-cache.js — cổng tải dữ liệu khoá học, làm theo typekute (11ty/client/services/data-cache.js
  // + content-repository.js). Nạp bằng <script> TRƯỚC player.js; treo API lên `TypingEaseData`.
  //
  // Năm tầng, từ ngoài vào trong:
  //   1. URL băm nội dung. Mỗi bài có `?v=<16 hex đầu của sha256>` (tooling/data/stamp-data.mjs viết
  //      vào `curriculum.lessonUrls`). Nội dung đổi thì URL đổi — bản cũ không bao giờ "nhầm" là mới.
  //   2. Cache API `typingease-data-v1`. Chỉ lưu khi SHA-256 của bytes nhận về KHỚP `?v=`; lưu
  //      xong thì xoá các bản `?v=` cũ hơn của cùng đường dẫn. Lần sau đọc thẳng từ cache, kể cả
  //      khi offline, không một request mạng nào.
  //   3. Lệch phiên bản (404, hoặc băm không khớp: trang cũ trỏ tới file đã bị deploy mới thay)
  //      → `DataVersionDriftError` + sự kiện `typingease:data-drift`. Trang được tải lại MỘT lần
  //      (chặn bằng sessionStorage) và chỉ khi không có ai đang gõ dở.
  //   4. Bộ nhớ trong: `pending` gộp các request trùng đang bay; `parsed` nhớ promise JSON đã
  //      parse. Promise thất bại bị gỡ ra để lần sau thử lại được.
  //   5. Tải trước lúc rảnh (`prefetch`): sau sự kiện load, trong requestIdleCallback, khi người học
  //      không gõ; bỏ qua với Save-Data / 2G và khi bộ nhớ đã dùng quá 80% hạn mức. Một dấu
  //      localStorage ghi "đã tải đủ" cho từng phạm vi để lần ghé sau khỏi duyệt lại.
  //
  // URL không có `?v=` (dữ liệu chưa băm, môi trường không có crypto.subtle / caches) vẫn tải
  // được — chỉ đi thẳng mạng, không lưu Cache API — giống typekute.
  const DATA_CACHE_NAME = 'typingease-data-v1';
  const CACHE_PREFIX = 'typingease-data-';
  const FILE_HASH = /^[a-f0-9]{16}$/;
  const TIMEOUT_MS = 15000;
  const RETRY_BACKOFF_MS = 400;
  const DRIFT_RELOAD_KEY = 'typingease.drift-reload';
  const PREFETCH_KEY = 'typingease:prefetch:';

  class DataVersionDriftError extends Error {
    constructor(url) {
      super(`Dữ liệu đã đổi phiên bản: ${url}`);
      this.name = 'DataVersionDriftError';
      this.url = url;
    }
  }

  const pending = new Map();
  const parsed = new Map();
  let cachePromise = null;
  let sessions = 0;
  let driftPending = false;

  const hasCrypto = () => Boolean(global.crypto?.subtle && global.isSecureContext !== false);
  function fileHash(url) {
    try {
      const hash = new URL(url, global.location.href).searchParams.get('v');
      return FILE_HASH.test(hash || '') ? hash : null;
    } catch { return null; }
  }
  function openCache() {
    if (!('caches' in global) || !hasCrypto()) return Promise.resolve(null);
    cachePromise ||= global.caches.open(DATA_CACHE_NAME).catch(() => null);
    return cachePromise;
  }
  const timeoutSignal = ms => { try { return AbortSignal.timeout(ms); } catch { return undefined; } };
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  // Mạng: thời hạn 15 s, thử lại một lần khi lỗi mạng hoặc 5xx. 4xx trả về luôn cho tầng trên xử.
  async function fetchResponse(url, { timeoutMs = TIMEOUT_MS, retries = 1, priority } = {}) {
    let lastError;
    for (let attempt = 0; attempt <= retries; attempt += 1) {
      if (attempt) await sleep(RETRY_BACKOFF_MS * attempt);
      try {
        const response = await fetch(url, {
          credentials: 'same-origin',
          signal: timeoutSignal(timeoutMs),
          ...(priority ? { priority } : {})
        });
        if (response.status < 500) return response;
        lastError = new Error(`Không tải được ${url} (${response.status}).`);
      } catch (error) {
        lastError = error?.name === 'TimeoutError' ? new Error(`Hết thời gian tải ${url}.`) : error;
      }
    }
    throw lastError;
  }

  const hex = buffer => Array.from(new Uint8Array(buffer), byte => byte.toString(16).padStart(2, '0')).join('');

  // Bytes đã giải nén → Response mới, bỏ content-encoding/length của bản gốc (chúng mô tả bytes
  // nén, không còn đúng với thân đã giải nén ta cất vào cache).
  function byteResponse(bytes, response) {
    const headers = new Headers(response.headers);
    headers.delete('content-encoding');
    headers.delete('content-length');
    return new Response(bytes, { status: response.status, statusText: response.statusText, headers });
  }

  async function obtain(url, options) {
    const hash = fileHash(url);
    const cache = hash ? await openCache() : null;
    if (cache) {
      try { const hit = await cache.match(url); if (hit) return hit; } catch { /* cache hỏng: đi mạng */ }
    }
    const response = await fetchResponse(url, options);
    if (!cache) return response;
    if (response.status === 404) throw new DataVersionDriftError(url);
    if (!response.ok) return response;
    const bytes = await response.arrayBuffer();
    const actual = hex(await global.crypto.subtle.digest('SHA-256', bytes)).slice(0, 16);
    if (actual !== hash) throw new DataVersionDriftError(url);
    const result = byteResponse(bytes, response);
    try {
      await cache.put(url, result.clone());
      // Giữ đúng một phiên bản cho mỗi đường dẫn.
      const current = new URL(url, global.location.href).href;
      const previous = await cache.keys(url, { ignoreSearch: true });
      await Promise.all(previous.filter(request => request.url !== current).map(request => cache.delete(request)));
    } catch { /* hết hạn mức: không được vứt một response tốt */ }
    return result;
  }

  function request(url, options = {}) {
    if (!pending.has(url)) {
      const promise = obtain(url, options);
      pending.set(url, promise);
      promise.finally(() => { if (pending.get(url) === promise) pending.delete(url); }).catch(() => {});
    }
    return pending.get(url);
  }

  async function fetchJson(url, options = {}) {
    if (!url) throw new Error('Thiếu URL dữ liệu trong chỉ mục giáo trình.');
    let response;
    try {
      response = (await request(url, options)).clone();
    } catch (error) {
      if (error instanceof DataVersionDriftError) markDrift(error, options.background);
      throw error;
    }
    if (!response.ok) throw new Error(`Không tải được ${url} (${response.status}).`);
    return response.json();
  }

  // Một URL, một promise JSON cho cả vòng đời trang.
  function fetchJsonOnce(url, options) {
    if (!parsed.has(url)) {
      parsed.set(url, fetchJson(url, options).catch(error => { parsed.delete(url); throw error; }));
    }
    return parsed.get(url);
  }

  // Khi lệch phiên bản: trang có thể đang trỏ vào file cũ, nên đến lúc an toàn (không ai đang gõ)
  // thì tải lại trang, nhưng chỉ một lần cho mỗi phiên bản trang — tránh vòng lặp reload.
  function markDrift(error, background) {
    global.dispatchEvent(new CustomEvent('typingease:data-drift', { detail: { url: error.url, background: Boolean(background) } }));
    if (background) return;
    driftPending = true;
    reloadIfStale();
  }
  // Phiên bản trang = src đã băm của chỉ mục giáo trình (đổi theo mỗi lần deploy dữ liệu).
  const pageStamp = () => document.querySelector('script[src*="data/curriculum."]')?.getAttribute('src') || location.pathname;
  function canReloadForDrift() {
    try {
      const stamp = pageStamp();
      if (sessionStorage.getItem(DRIFT_RELOAD_KEY) === stamp) return false;
      sessionStorage.setItem(DRIFT_RELOAD_KEY, stamp);
      return sessionStorage.getItem(DRIFT_RELOAD_KEY) === stamp;
    } catch { return false; }
  }
  function reloadIfStale() {
    if (!driftPending || sessions > 0) return;
    driftPending = false;
    if (canReloadForDrift()) location.reload();
  }
  // Player gọi begin/end quanh một lượt gõ; tải lại trang giữa chừng là mất bài đang gõ.
  function beginSession() { sessions += 1; }
  function endSession() { sessions = Math.max(0, sessions - 1); reloadIfStale(); }
  const driftReloadUsed = () => {
    try { return sessionStorage.getItem(DRIFT_RELOAD_KEY) === pageStamp(); } catch { return true; }
  };

  // Lệch phiên bản mà đã tải lại một lần rồi: vẫn phải cho người học học được. Lấy thẳng bản mới
  // nhất từ mạng (bỏ `?v=`), không kiểm băm, không lưu cache.
  async function fetchLatestJson(url) {
    const bare = String(url).split('?')[0];
    const response = await fetchResponse(bare, { retries: 1 });
    if (!response.ok) throw new Error(`Không tải được ${bare} (${response.status}).`);
    return response.json();
  }

  /* ---------- tải trước lúc rảnh ---------- */
  const queue = [];
  let draining = false;
  let loaded = document.readyState === 'complete';
  if (!loaded) global.addEventListener('load', () => { loaded = true; drain(); }, { once: true });

  const connectionTooSlow = () => {
    const connection = navigator.connection;
    return Boolean(connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType || ''));
  };
  async function storageFull() {
    try {
      const { usage = 0, quota = 0 } = await navigator.storage?.estimate?.() || {};
      return quota > 0 && usage / quota > 0.8;
    } catch { return false; }
  }
  const idle = () => new Promise(resolve =>
    (global.requestIdleCallback ? global.requestIdleCallback(resolve, { timeout: 2000 }) : setTimeout(resolve, 200)));

  async function drain() {
    if (draining || !loaded) return;
    draining = true;
    try {
      while (queue.length) {
        await idle();
        if (sessions > 0) { await sleep(1000); continue; }
        if (await storageFull()) { queue.length = 0; break; }
        const job = queue.shift();
        const results = await Promise.allSettled(job.urls.splice(0, 4).map(url => request(url, { background: true, priority: 'low' })));
        results.forEach(result => { if (result.status === 'rejected' && result.reason instanceof DataVersionDriftError) markDrift(result.reason, true); });
        if (job.urls.length) queue.unshift(job);
        else job.done();
      }
    } finally { draining = false; }
  }

  // `scope` + danh sách URL: tải hết lúc rảnh. Danh sách đổi (mã băm đổi) thì dấu "đã xong" cũ
  // không khớp nữa và phạm vi được tải lại — đúng phần đã đổi, phần còn lại có sẵn trong cache.
  function prefetch(scope, urls) {
    const list = [...new Set((urls || []).filter(url => fileHash(url)))];
    if (!list.length || connectionTooSlow() || !('caches' in global) || !hasCrypto()) return;
    const digest = `${list.length}:${list.join('|').length}:${list[list.length - 1].slice(-16)}`;
    const marker = `${PREFETCH_KEY}${scope}`;
    try { if (localStorage.getItem(marker) === digest) return; } catch { /* storage blocked */ }
    queue.push({
      urls: list.filter(url => !pending.has(url)),
      done: () => { try { localStorage.setItem(marker, digest); } catch { /* storage blocked */ } }
    });
    drain();
  }

  // Dọn các bucket dữ liệu của schema cũ (typingease-data-v0…) lúc rảnh.
  function pruneOldSchemas() {
    if (!('caches' in global)) return;
    global.caches.keys()
      .then(names => Promise.all(names
        .filter(name => name.startsWith(CACHE_PREFIX) && name !== DATA_CACHE_NAME)
        .map(name => global.caches.delete(name))))
      .catch(() => {});
  }
  idle().then(pruneOldSchemas);

  global.TypingEaseData = {
    DATA_CACHE_NAME,
    DataVersionDriftError,
    fetchJson,
    fetchJsonOnce,
    fetchLatestJson,
    prefetch,
    beginSession,
    endSession,
    driftReloadUsed
  };
})(window);

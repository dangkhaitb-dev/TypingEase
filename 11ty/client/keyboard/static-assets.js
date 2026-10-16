// keyboard/static-assets.js — thay cho 11ty/client/services/static-assets.js của typekute.
//
// Bên typekute, tài nguyên tĩnh (mô hình tay, texture) mang mã băm từ manifest lúc build và được
// giữ trong một bucket Cache API riêng. Site này không có bước build: các file nằm ở
// /assets/hands-3d/ với tên cố định, và sw.js đã giữ bản đã tải (mạng trước, cache đỡ khi mất
// mạng). Nên ở đây chỉ còn đúng hai việc keyboard.js / hands-3d.js cần.

/** Tải một tài nguyên tĩnh; gộp các lượt gọi trùng nhau đang bay. */
const pending = new Map();
export async function fetchStaticAsset(url, win = globalThis) {
  if (!pending.has(url)) {
    pending.set(url, (async () => {
      const response = await win.fetch(url, { credentials: 'same-origin' });
      if (!response.ok) throw new Error(`Static asset unavailable: ${url} (${response.status})`);
      return response;
    })());
  }
  try { return (await pending.get(url)).clone(); }
  finally { pending.delete(url); }
}

/**
 * Bàn tay 3D là phần thêm: chỉ bắt đầu sau `load`, trong một khoảng rảnh. Gõ phím hoặc bật tay
 * bằng tay thì keyboard.js tự gọi sớm hơn và huỷ lịch này. Trả về hàm huỷ.
 */
export function scheduleHandsLoading(win, start) {
  let cancelled = false;
  let timer;
  let idle;
  const run = () => { if (!cancelled) { cancel(); start(); } };
  const loaded = () => {
    if (cancelled) return;
    if (typeof win.requestIdleCallback === 'function') idle = win.requestIdleCallback(run, { timeout: 1000 });
    else timer = win.setTimeout(run, 50);
  };
  function cancel() {
    cancelled = true;
    win.removeEventListener('load', loaded);
    win.clearTimeout(timer);
    if (idle !== undefined) win.cancelIdleCallback?.(idle);
  }
  if (win.document.readyState === 'complete') loaded();
  else win.addEventListener('load', loaded, { once: true });
  return cancel;
}

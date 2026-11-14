// Nhớ khách tới site bằng đường nào trong phiên tab này (trang vào đầu tiên, trang giới thiệu bên ngoài,
// từ khoá tìm kiếm nếu máy tìm kiếm để lộ, utm_*) — giống traffic-source.js của TeleprompterOnline.
// Ghi một lần khi module được nạp (feedback.js và auth.js nạp nó trên mọi trang); chỉ được đọc ra khi
// khách gửi góp ý hoặc tạo tài khoản, để tin Telegram ghi được nguồn.

const KEY = 'typingease-traffic-source';
const MAX_LENGTH = 300;
// Tham số chứa từ khoá của các máy tìm kiếm (Google gần như không gửi).
const KEYWORD_PARAMS = ['q', 'p', 'text', 'query', 'wd'];

const clip = value => (typeof value === 'string' ? value.trim().slice(0, MAX_LENGTH) : '');
const parseUrl = value => { try { return new URL(value); } catch { return null; } };
const strip = host => host.replace(/^www\./, '');

export function parseTrafficSource({ href = '', referrer = '', hostname = '' } = {}) {
  const page = parseUrl(href);
  const params = page ? page.searchParams : new URLSearchParams();
  const ref = parseUrl(referrer);
  const isExternal = ref && strip(ref.hostname) !== strip(hostname);

  let keyword = clip(params.get('utm_term'));
  if (!keyword && isExternal) {
    const param = KEYWORD_PARAMS.find(name => ref.searchParams.get(name));
    if (param) keyword = clip(ref.searchParams.get(param));
  }
  const source = {
    landingPage: page ? clip(page.pathname) : '',
    referrer: isExternal ? clip(`${ref.origin}${ref.pathname}`) : '',
    keyword,
    utmSource: clip(params.get('utm_source')),
    utmMedium: clip(params.get('utm_medium')),
    utmCampaign: clip(params.get('utm_campaign'))
  };
  return Object.fromEntries(Object.entries(source).filter(([, value]) => value));
}

export function getTrafficSource() {
  try {
    const source = JSON.parse(sessionStorage.getItem(KEY) || 'null');
    return source && typeof source === 'object' ? source : {};
  } catch { return {}; }
}

try {
  if (typeof sessionStorage !== 'undefined' && !sessionStorage.getItem(KEY)) {
    sessionStorage.setItem(KEY, JSON.stringify(parseTrafficSource({ href: location.href, referrer: document.referrer, hostname: location.hostname })));
  }
} catch { /* sessionStorage bị chặn */ }

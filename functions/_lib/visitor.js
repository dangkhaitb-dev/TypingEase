// Phần "khách từ đâu tới" của tin Telegram — cùng định dạng với TeleprompterOnline, vì các site báo chung
// một nhóm. Quốc gia / thành phố lấy từ request.cf (Cloudflare tự điền); nguồn là bản client gửi kèm
// (11ty/client/traffic-source.js), chỉ nhận các trường đã biết và cắt ngắn.

const MAX_LENGTH = 300;
const SOURCE_FIELDS = ['landingPage', 'referrer', 'keyword', 'utmSource', 'utmMedium', 'utmCampaign'];
const SEARCH_ENGINE = /(^|\.)(google|bing|yahoo|duckduckgo|yandex|baidu|ecosia|naver|coccoc)\./i;

// Tên project ở đầu mỗi tin: PROJECT_NAME trong wrangler.toml, kèm tên miền để phân biệt trong nhóm.
export function projectLabel(env, request) {
  const name = (env.PROJECT_NAME || 'TypingEase').trim();
  let host = '';
  try { host = new URL(request.url).hostname.replace(/^www\./, ''); } catch { /* bỏ qua */ }
  return host ? `${name} (${host})` : name;
}

export function sanitizeSource(raw) {
  const source = {};
  if (!raw || typeof raw !== 'object') return source;
  for (const field of SOURCE_FIELDS) {
    const value = typeof raw[field] === 'string' ? raw[field].trim().slice(0, MAX_LENGTH) : '';
    if (value) source[field] = value;
  }
  return source;
}

const hostOf = url => { try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return url; } };

// Các dòng 🌍 / 🔎 / ↪️ / 🛬; dòng nào không có dữ liệu thì bỏ.
export function visitorLines(request, source = {}) {
  const country = request.cf?.country || '';
  const city = request.cf?.city || '';
  const referrerHost = source.referrer ? hostOf(source.referrer) : '';
  const fromSearch = SEARCH_ENGINE.test(`.${referrerHost}`) || source.utmMedium === 'organic';
  const keyword = source.keyword || (fromSearch ? '(máy tìm kiếm ẩn từ khóa)' : '');
  const utm = [source.utmSource, source.utmMedium, source.utmCampaign].filter(Boolean).join('/');
  const origin = [referrerHost || (utm ? '' : 'Truy cập trực tiếp'), utm && `utm: ${utm}`].filter(Boolean).join(' · ');
  return [
    country && `🌍 Quốc gia: ${[country, city].filter(Boolean).join(' · ')}`,
    keyword && `🔎 Từ khóa: ${keyword}`,
    origin && `↪️ Nguồn: ${origin}`,
    source.landingPage && `🛬 Trang vào: ${source.landingPage}`
  ].filter(Boolean);
}

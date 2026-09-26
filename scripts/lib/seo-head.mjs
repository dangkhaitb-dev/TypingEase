/* scripts/lib/seo-head.mjs — khối thẻ chia sẻ (Open Graph, Twitter) + JSON-LD cho <head>.
 *
 * Dùng chung cho bai-hoc/generate.mjs (trang lộ trình) và scripts/build-seo-head.mjs (trang viết
 * tay), để hai nơi không bao giờ in hai kiểu khác nhau. Khối nằm giữa hai dấu
 * `<!-- seo:head -->` … `<!-- /seo:head -->` ngay sau thẻ canonical.
 *
 * Luật chống spam (Đợt 0, 2026-09-25): JSON-LD chỉ khai điều CÓ THẬT trên trang — không
 * AggregateRating/Review (chưa có đánh giá thật), không FAQPage, không giá bịa. og:title/description
 * lấy nguyên từ <title>/meta description của trang, không viết lại cho "đẹp" hơn nội dung.
 */
export const ORIGIN = 'https://typingease.site';
export const OG_IMAGE = `${ORIGIN}/assets/og-image.png`;
export const START = '<!-- seo:head -->';
export const END = '<!-- /seo:head -->';

// og:locale theo định dạng Facebook (ngôn ngữ_VÙNG). Filipino là tl_PH trong danh sách của Facebook.
const LOCALE = {
  en: 'en_US', vi: 'vi_VN', es: 'es_ES', fr: 'fr_FR', de: 'de_DE', it: 'it_IT', id: 'id_ID', ms: 'ms_MY',
  fil: 'tl_PH', sw: 'sw_KE', nl: 'nl_NL', pl: 'pl_PL', pt: 'pt_BR', tr: 'tr_TR', ru: 'ru_RU', uk: 'uk_UA',
  ar: 'ar_AR', fa: 'fa_IR', ur: 'ur_PK', he: 'he_IL', hi: 'hi_IN', bn: 'bn_IN', th: 'th_TH', zh: 'zh_CN',
  'zh-tw': 'zh_TW', ja: 'ja_JP', ko: 'ko_KR'
};
export const localeOf = lang => LOCALE[String(lang).toLowerCase()] || LOCALE[String(lang).toLowerCase().split('-')[0]] || 'en_US';

const attr = value => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// Tên trang trong JSON-LD: bỏ đuôi " | TypingEase" của <title>.
export const plainTitle = title => String(title).replace(/\s*\|\s*TypingEase\s*$/, '').trim();

const ORGANIZATION = { '@type': 'Organization', name: 'TypingEase', url: `${ORIGIN}/`, logo: `${ORIGIN}/assets/apple-touch-icon.png` };

/**
 * kind: 'home' (/), 'course' (lộ trình một khoá), 'tool' (trang test tốc độ), 'page' (còn lại —
 * chỉ có thẻ chia sẻ, không JSON-LD).
 */
export function jsonLd({ kind, url, title, description, lang }) {
  const name = plainTitle(title);
  if (kind === 'home') {
    return [
      { '@context': 'https://schema.org', '@type': 'WebSite', name: 'TypingEase', url: `${ORIGIN}/`, inLanguage: lang, description },
      { '@context': 'https://schema.org', ...ORGANIZATION }
    ];
  }
  if (kind === 'course') {
    return [{
      '@context': 'https://schema.org', '@type': 'Course', name, description, url: ORIGIN + url, inLanguage: lang,
      isAccessibleForFree: true, educationalLevel: 'Beginner', provider: ORGANIZATION
    }];
  }
  if (kind === 'game') {
    // Trò chơi gõ phím chạy trong trình duyệt: WebApplication loại GameApplication. Không VideoGame
    // (cần nhà phát hành, nền tảng, đánh giá… mà trang không có).
    return [{
      '@context': 'https://schema.org', '@type': 'WebApplication', name, description, url: ORIGIN + url, inLanguage: lang,
      applicationCategory: 'GameApplication', operatingSystem: 'Any', browserRequirements: 'Requires JavaScript',
      isAccessibleForFree: true, provider: ORGANIZATION
    }];
  }
  if (kind === 'tool') {
    return [{
      '@context': 'https://schema.org', '@type': 'WebApplication', name, description, url: ORIGIN + url, inLanguage: lang,
      applicationCategory: 'EducationalApplication', operatingSystem: 'Any', browserRequirements: 'Requires JavaScript',
      isAccessibleForFree: true, provider: ORGANIZATION
    }];
  }
  return [];
}

export function seoHead({ kind = 'page', url, title, description, lang, indent = '    ', breadcrumb = null }) {
  const lines = [
    START,
    '<meta property="og:type" content="website" />',
    '<meta property="og:site_name" content="TypingEase" />',
    `<meta property="og:locale" content="${localeOf(lang)}" />`,
    `<meta property="og:title" content="${attr(title)}" />`,
    `<meta property="og:description" content="${attr(description)}" />`,
    `<meta property="og:url" content="${ORIGIN}${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    '<meta property="og:image:alt" content="TypingEase" />',
    '<meta name="twitter:card" content="summary_large_image" />'
  ];
  const items = jsonLd({ kind, url, title, description, lang });
  // Breadcrumb CHỈ khi trang có breadcrumb hiển thị thật (luật của Google: dữ liệu cấu trúc phải khớp
  // nội dung người đọc thấy). `breadcrumb` = [[tên, url], …], mục cuối là chính trang này.
  if (breadcrumb && breadcrumb.length > 1) {
    items.push({ '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: breadcrumb.map(([name, href], index) => ({ '@type': 'ListItem', position: index + 1, name, item: ORIGIN + href })) });
  }
  for (const data of items) {
    // `<` trong chuỗi JSON thoát thành \u003c để không bao giờ đóng thẻ <script> giữa chừng.
    lines.push(`<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`);
  }
  lines.push(END);
  return lines.map(line => indent + line).join('\n');
}

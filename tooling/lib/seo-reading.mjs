/* Shared reading navigation for trusted, authored editorial HTML. */
const LABELS = {
  en: 'In this guide', vi: 'Trong hướng dẫn này', ar: 'في هذا الدليل', bn: 'এই গাইডে', de: 'In diesem Ratgeber',
  es: 'En esta guía', fa: 'در این راهنما', fil: 'Sa gabay na ito', fr: 'Dans ce guide', he: 'במדריך הזה',
  hi: 'इस गाइड में', id: 'Dalam panduan ini', it: 'In questa guida', ja: 'このページの内容', ko: '이 글의 내용',
  ms: 'Dalam panduan ini', nl: 'In deze gids', pl: 'W tym przewodniku', pt: 'Neste guia', ru: 'В этом руководстве',
  sw: 'Katika mwongozo huu', th: 'ในคู่มือนี้', tr: 'Bu rehberde', uk: 'У цьому посібнику', ur: 'اس رہنما میں',
  zh: '本页内容', 'zh-tw': '本頁內容'
};

// `allLanguages`: callers that already render the same sections in every language (typing tests) opt in;
// the default stays EN/VI so pages whose other-language copy has not been reviewed keep their layout.
export function seoReading(html, { lang = 'en', prefix = 'reading', allLanguages = false } = {}) {
  if (!LABELS[lang] || (!allLanguages && !['en', 'vi'].includes(lang))) return html;
  const headings = [];
  const body = html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/g, (_, attrs, title) => {
    const existing = attrs.match(/\bid="([^"]+)"/);
    const id = existing ? existing[1] : `${prefix}-${headings.length + 1}`;
    headings.push({ id, title });
    return `<h2${attrs}${existing ? '' : ` id="${id}"`}>${title}</h2>`;
  });
  const label = LABELS[lang];
  return `<div class="seo-reading"><nav class="seo-reading-toc" aria-label="${label}"><p class="seo-reading-label">${label}</p><ol>${headings.map(({id,title}) => `<li><a href="#${id}">${title}</a></li>`).join('')}</ol></nav><div class="seo-reading-body">${body}</div></div>`;
}

import fs from 'node:fs';
import { homeEditorial as content } from '../../content/home/editorial.en-vi.mjs';
import { localizedHomeEditorial, localizedHomeSectionHeadings } from '../../content/home/editorial.localized.mjs';

const guideCopy = {
  en: { label: 'Your typing practice guide', title: 'Find your next typing lesson, practice task or test.', topics: ['Choose where to start', 'Check keyboard and input', 'Build a useful practice routine', 'Read your result', 'Start with good habits'] },
  vi: { label: 'Hướng dẫn luyện gõ 10 ngón', title: 'Chọn bài học, bài luyện hoặc bài test phù hợp với bạn.', topics: ['Chọn cách bắt đầu', 'Kiểm tra bàn phím và bộ gõ', 'Luyện với một mục tiêu', 'Đọc kết quả test', 'Tập thói quen từ đầu'] }
};

// Trang chủ ngôn ngữ khác en/vi: content/home/guide.<lang>.mjs, cùng hình dạng với bản en/vi — `guide`
// { label, title, topics[5] } và `sections` 5 × [h2, [[h3, html], …]], mục thứ 5 là quan điểm của TypingEase.
// Ngôn ngữ chưa có file đó vẫn dùng ghi chú ngắn ở editorial.localized.mjs.
const GUIDES = Object.fromEntries(await Promise.all(
  fs.readdirSync(new URL('../../content/home/', import.meta.url))
    .filter(name => /^guide\.[a-z]{2,3}(-[a-z]{2})?\.mjs$/.test(name))
    .map(async name => [name.slice('guide.'.length, -'.mjs'.length),
      (await import(new URL(`../../content/home/${name}`, import.meta.url))).default])));

const renderGuide = (locale, copy, sections, languageTag = locale) => `<div class="home-learning-guide" lang="${languageTag}">
    <div class="product-wrap home-learning-intro"><p class="product-eyebrow">${copy.label}</p><p class="home-learning-title">${copy.title}</p>
      <nav class="home-learning-topics" aria-label="${copy.label}">${copy.topics.map((label, i) => `<a href="#home-notes-${locale}-${i}">${label}<span aria-hidden="true">↗</span></a>`).join('')}</nav>
    </div>
    ${sections.map(([title, items], i) => `<section class="home-learning-notes${i === 0 ? ' home-learning-notes--paths' : ''}${i === 4 ? ' home-learning-notes--perspective' : ''}" aria-labelledby="home-notes-${locale}-${i}"><div class="product-wrap home-learning-layout"><header class="home-learning-heading"><span class="home-learning-number" aria-hidden="true">0${i + 1}</span><h2 id="home-notes-${locale}-${i}">${title}</h2></header><div class="home-learning-body">${items.map(([heading, body]) => `<div class="home-learning-item"><h3>${heading}</h3><p>${body}</p></div>`).join('')}</div></div></section>`).join('\n')}
  </div>`;

export function homeSeoContent(locale) {
  const languageTag = { pt: 'pt-BR', zh: 'zh-Hans', 'zh-tw': 'zh-Hant' }[locale] || locale;
  if (GUIDES[locale]) return renderGuide(locale, GUIDES[locale].guide, GUIDES[locale].sections, languageTag);
  if (localizedHomeEditorial[locale]) {
    const [title, items] = localizedHomeEditorial[locale][0];
    const headings = [title, ...localizedHomeSectionHeadings[locale]];
    return `<div class="home-learning-guide home-learning-guide--localized" lang="${languageTag}">
      ${items.map(([, body], i) => `<section class="home-learning-notes" aria-labelledby="home-notes-${locale}-${i}"><div class="product-wrap home-learning-layout"><header class="home-learning-heading"><span class="home-learning-number" aria-hidden="true">0${i + 1}</span><h2 id="home-notes-${locale}-${i}">${headings[i]}</h2></header><div class="home-learning-body"><div class="home-learning-item"><p>${body}</p></div></div></div></section>`).join('\n')}
    </div>`;
  }
  if (!content[locale]) return '';
  return renderGuide(locale, guideCopy[locale], [0, 1, 2, 4, 3].map(index => content[locale][index]));
}

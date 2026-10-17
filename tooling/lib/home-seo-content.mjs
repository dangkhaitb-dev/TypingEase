import { homeEditorial as content } from '../../content/home/editorial.en-vi.mjs';

export function homeSeoContent(locale) {
  if (!content[locale]) return '';
  return content[locale].map(([title, items], i) => `<section class="product-section home-learning-notes" aria-labelledby="home-notes-${locale}-${i}"><div class="product-wrap"><div class="product-heading"><h2 id="home-notes-${locale}-${i}">${title}</h2></div><div class="product-questions">${items.map(([heading, body]) => `<h3>${heading}</h3><p>${body}</p>`).join('')}</div></div></section>`).join('\n');
}

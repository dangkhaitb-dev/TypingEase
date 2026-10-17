/* Homepage-only art direction, inspired by the user's velprompt reference.
   The site header and other application screens retain the shared design system. */
import { productSections, productFooter, productHero } from './product-landing.mjs';
const mark = `<div class="home-mark" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><rect x="3" y="7" width="26" height="19" rx="5" stroke="currentColor" stroke-width="1.5"/><path d="M8 12h2m5 0h2m5 0h2M8 17h2m5 0h2m5 0h2M11 22h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div>`;
const portraits = `<div class="home-portraits" aria-hidden="true">
  <figure class="portrait-card portrait-card--left"><img src="/assets/people/student.webp" width="768" height="576" alt="" loading="lazy" decoding="async" /></figure>
  <figure class="portrait-card portrait-card--center"><img src="/assets/people/learner.webp" width="768" height="576" alt="" loading="lazy" decoding="async" /><span class="portrait-label"><svg viewBox="0 0 24 24" fill="none"><path d="m6 12 4 4 8-8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>TypingEase</span></figure>
  <figure class="portrait-card portrait-card--right"><img src="/assets/people/creative.webp" width="768" height="576" alt="" loading="lazy" decoding="async" /></figure>
</div>`;
export function homePresentation(html) {
  if (!html.includes('href="/home.css"') || html.includes('class="home-mark"')) return html;
  html = html.replace(/<body([^>]*)>/, (_, attrs) => /class="/.test(attrs)
    ? `<body${attrs.replace('class="', 'class="editorial-home ')}>` : `<body${attrs} class="editorial-home">`);
  html = html.replace('<div class="hero-copy">', `<div class="hero-copy">${mark}`);
  // Use source stock photographs only; no AI imagery or customer endorsements.
  html = html.replace(/(<section class="hero"[\s\S]*?)(<\/section>)/, '$1' + portraits + '$2');
  const lang = /<html[^>]*lang="vi"/.test(html) ? 'vi' : /<html[^>]*lang="en"/.test(html) ? 'en' : null;
  if (lang) {
    html = html.replace(/<section class="hero"[\s\S]*?<\/section>/, productHero(lang, mark, portraits));
    const start = html.indexOf('</section>', html.indexOf('<section class="hero')) + '</section>'.length;
    const end = html.indexOf('</main>', start);
    const sections = productSections(lang);
    const catalog = '';
    html = html.slice(0, start) + sections + catalog + html.slice(end);
    html = html.replace(/<footer[\s\S]*?<\/footer>/, old => productFooter(lang, old));
    html = html.replace('</head>', '<link rel="stylesheet" href="/product-landing.css" />\n</head>');
    html = html.replace(/<script src="\/(?:home-demo|landing|landing-i18n)\.js"[^>]*><\/script>/g, '');
    html = html.replace('</body>', '<script src="/product-landing.js" defer></script>\n</body>');
  }
  return html.replace('</head>',  `${lang?'':'<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600&family=Lora:ital,wght@1,500&display=swap" />'}
    <link rel="stylesheet" href="/home-editorial.css" />${lang?'<link rel="stylesheet" href="/home-canvas.css" />':''}\n</head>`);
}

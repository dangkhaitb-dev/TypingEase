/* One product homepage for every language route. The EN presentation is shared;
   navigation and primary actions resolve to the selected language's course. */
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';
import paths from './paths.cjs';
import { productSections, productFooter, productHero } from './product-landing.mjs';
import { COPY } from './product-landing.mjs';
import { homeSeoContent } from './home-seo-content.mjs';

const routesByLanguage = new Map();
for (const file of fs.readdirSync(paths.contentFile('roadmaps'))) {
  const match = /^config\.(.+)\.mjs$/.exec(file);
  if (match) routesByLanguage.set(match[1], (await import(pathToFileURL(paths.contentFile('roadmaps',file)).href)).default.routes);
}
function collectRoutes(value, output = new Set()) {
  if (typeof value === 'string' && value.startsWith('/')) output.add(value);
  else if (Array.isArray(value)) value.forEach(item => collectRoutes(item, output));
  else if (value && typeof value === 'object') Object.values(value).forEach(item => collectRoutes(item, output));
  return output;
}
const englishCopyRoutes = collectRoutes(COPY.en);

export function homePresentation(html) {
  if (!html.includes('href="/home.css"') || html.includes('product-home-hero')) return html;
  const declaredLocale = (/<html[^>]*lang="([^"]+)"/.exec(html)?.[1] || 'en').toLowerCase();
  const locale = ({'zh-hans':'zh','zh-hant':'zh-tw','pt-br':'pt'})[declaredLocale] || declaredLocale;
  const copyLanguage = COPY[locale] ? locale : 'en';
  const routes = routesByLanguage.get(locale) || routesByLanguage.get('en');
  const sourceRoutes = routesByLanguage.get(copyLanguage === 'vi' ? 'vi' : 'en');
  const destinations = new Map(Object.keys(sourceRoutes).flatMap(key =>
    sourceRoutes[key] && routes[key] ? [[sourceRoutes[key],routes[key]]] : []));
  const unavailable = new Set([
    ...Object.keys(sourceRoutes).filter(key => sourceRoutes[key] && !routes[key]).map(key => sourceRoutes[key]),
    ...(locale === 'en' ? [] : [...englishCopyRoutes].filter(url => url !== '/' && !destinations.has(url)))
  ]);
  const adapt = fragment => fragment
    .replace(/<a\b(?=[^>]*\bhref="([^"]+)")[^>]*>[\s\S]*?<\/a>/g, (whole) => {
      const url = /\bhref="([^"]+)"/.exec(whole)?.[1];
      return url && unavailable.has(url) ? '' : whole;
    })
    .replace(/<button\b(?=[^>]*\bdata-route="([^"]+)")[^>]*>[\s\S]*?<\/button>/g, (whole) => {
      const url = /\bdata-route="([^"]+)"/.exec(whole)?.[1];
      return url && unavailable.has(url) ? '' : whole;
    })
    .replace(/\b(href|action|data-route)="([^"]+)"/g, (whole,attribute,url) =>
      destinations.has(url) ? `${attribute}="${destinations.get(url)}"` : whole)
    .replace(/(<span data-preview-address>)([^<]+)(<\/span>)/g, (_,start,url,end) =>
      start+(destinations.get(url)||url)+end);
  const rtl = ['ar','fa','ur','he'].includes(locale);
  html = html.replace(/<body([^>]*)>/, (_,attrs) => {
    const changed = /class="/.test(attrs) ? attrs.replace('class="','class="editorial-home ') : `${attrs} class="editorial-home"`;
    return `<body${changed} dir="${rtl?'rtl':'ltr'}">`;
  });
  const hero = adapt(productHero(copyLanguage)).replace('<section class="hero',`<section lang="${copyLanguage}" dir="${rtl?'rtl':'ltr'}" class="hero`).replace(`lang="${copyLanguage}"`,`lang="${declaredLocale}"`);
  html = html.replace(/<section class="hero"[\s\S]*?<\/section>/,hero);
  const start = html.indexOf('</section>',html.indexOf('product-home-hero'))+10;
  const end = html.indexOf('</main>',start);
  const homepageSections = productSections(copyLanguage).replace(
    '<section class="product-section product-faq">',
    homeSeoContent(locale) + '<section class="product-section product-faq">'
  );
  const sections = adapt(homepageSections).replace('class="product-content"',`class="product-content" dir="${rtl?'rtl':'ltr'}"`).replace(`data-product-lang="${copyLanguage}"`,`data-product-lang="${locale}"`).replace(` lang="${copyLanguage}"`,` lang="${declaredLocale}"`);
  html = html.slice(0,start)+sections+html.slice(end);
  html = html.replace(/<footer[\s\S]*?<\/footer>/,old => adapt(productFooter(copyLanguage,old)).replace('<footer ',`<footer lang="${declaredLocale}" dir="${rtl?'rtl':'ltr'}" `));
  html = html.replace(/<script src="\/(?:home-demo|landing|landing-i18n)\.js"[^>]*><\/script>/g,'');
  // The product homepage has no keyboard (the hero preview is replaced above and landing.js, the only
  // NTKeyboard reader, is gone), so drop the keyboard module, its stylesheet and ready.js. Otherwise
  // boot.js still loads 25 KB of JS/CSS and fetches keyboard layout data nobody renders.
  html = html.replace(/[ \t]*<link rel="stylesheet" href="(?:\.\.)?\/keyboard\/keyboard\.css" \/>\r?\n?/g,'');
  html = html.replace(/[ \t]*<script (?:type="module" )?src="(?:\.\.)?\/keyboard\/(?:ready|boot)\.js"><\/script>\r?\n?/g,'');
  html = html.replace('</body>','<script src="/product-landing.js" defer></script>\n</body>');
  return html.replace('</head>','<link rel="stylesheet" href="/product-landing.css" />\n<link rel="stylesheet" href="/home-editorial.css" />\n<link rel="stylesheet" href="/home-canvas.css" />\n</head>');
}

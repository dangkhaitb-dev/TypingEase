/* One product homepage for every language route. The EN presentation is shared;
   navigation and primary actions resolve to the selected language's course. */
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';
import paths from './paths.cjs';
import { productSections, productFooter, productHero } from './product-landing.mjs';

const routesByLanguage = new Map();
for (const file of fs.readdirSync(paths.contentFile('roadmaps'))) {
  const match = /^config\.(.+)\.mjs$/.exec(file);
  if (match) routesByLanguage.set(match[1], (await import(pathToFileURL(paths.contentFile('roadmaps',file)).href)).default.routes);
}

export function homePresentation(html) {
  if (!html.includes('href="/home.css"') || html.includes('product-home-hero')) return html;
  const declaredLocale = (/<html[^>]*lang="([^"]+)"/.exec(html)?.[1] || 'en').toLowerCase();
  const locale = ({'zh-hans':'zh','zh-hant':'zh-tw','pt-br':'pt'})[declaredLocale] || declaredLocale;
  const copyLanguage = locale === 'vi' ? 'vi' : 'en';
  const routes = routesByLanguage.get(locale) || routesByLanguage.get('en');
  const sourceRoutes = routesByLanguage.get(copyLanguage);
  const destinations = new Map(Object.keys(sourceRoutes).flatMap(key =>
    sourceRoutes[key] && routes[key] ? [[sourceRoutes[key],routes[key]]] : []));
  const adapt = fragment => fragment
    .replace(/\b(href|action|data-route)="([^"]+)"/g, (whole,attribute,url) =>
      destinations.has(url) ? `${attribute}="${destinations.get(url)}"` : whole)
    .replace(/(<span data-preview-address>)([^<]+)(<\/span>)/g, (_,start,url,end) =>
      start+(destinations.get(url)||url)+end);
  html = html.replace(/<body([^>]*)>/, (_,attrs) => /class="/.test(attrs)
    ? `<body${attrs.replace('class="','class="editorial-home ')}>` : `<body${attrs} class="editorial-home">`);
  const hero = adapt(productHero(copyLanguage)).replace('<section class="hero',`<section lang="${copyLanguage}" dir="ltr" class="hero`);
  html = html.replace(/<section class="hero"[\s\S]*?<\/section>/,hero);
  const start = html.indexOf('</section>',html.indexOf('product-home-hero'))+10;
  const end = html.indexOf('</main>',start);
  const sections = adapt(productSections(copyLanguage)).replace('class="product-content"','class="product-content" dir="ltr"');
  html = html.slice(0,start)+sections+html.slice(end);
  html = html.replace(/<footer[\s\S]*?<\/footer>/,old => adapt(productFooter(copyLanguage,old)).replace('<footer ',`<footer lang="${copyLanguage}" dir="ltr" `));
  html = html.replace(/<script src="\/(?:home-demo|landing|landing-i18n)\.js"[^>]*><\/script>/g,'');
  html = html.replace('</body>','<script src="/product-landing.js" defer></script>\n</body>');
  return html.replace('</head>','<link rel="stylesheet" href="/product-landing.css" />\n<link rel="stylesheet" href="/home-editorial.css" />\n<link rel="stylesheet" href="/home-canvas.css" />\n</head>');
}

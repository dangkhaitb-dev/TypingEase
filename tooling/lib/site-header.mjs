/* One build-time header for all routes, including legal pages and lesson players.
   Labels/routes come from the existing language configs, never duplicated in templates. */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import paths from './paths.cjs';
import { HOME_SWITCH } from './home-switch.mjs';

const configs = new Map();
for (const file of fs.readdirSync(paths.contentFile('roadmaps'))) {
  const match = /^config\.(.+)\.mjs$/.exec(file);
  if (match) configs.set(match[1], (await import(pathToFileURL(paths.contentFile('roadmaps', file)).href)).default);
}
const scope = {};
new Function('window', fs.readFileSync(paths.dataFile('languages.js'), 'utf8'))(scope);
const courses = scope.TypingEaseLanguages.list.flatMap(language => language.courses || []);
const escape = value => String(value).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const globe = '<svg class="ui-symbol" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/></svg>';

export function siteHeader(html, outputPath) {
  if (/http-equiv="refresh"/i.test(html) || html.includes('data-site-header')) return html;
  const existing = /<header class="(?:topbar|player-topbar)[^"]*"[^>]*>([\s\S]*?)<\/header>/;
  const match = existing.exec(html);
  if (!match) return html;
  const lang = (/<html[^>]*lang="([^"]+)"/.exec(html)?.[1] || 'en').toLowerCase();
  const config = configs.get(lang) || configs.get('en');
  const url = '/' + path.relative(paths.GENERATED, path.resolve(outputPath)).split(path.sep).join('/').replace(/index\.html$/, '');
  const courseId = /curriculum\.([^/?"]+)\.js/.exec(html)?.[1];
  const course = courses.find(item => item.id === courseId);
  const routes = {...config.routes};
  if (course) { routes.lessons = course.roadmap; routes.learn = course.href; }
  const isPlayer = match[0].includes('class="player-topbar');
  const links = config.s.nav(routes).filter(([href]) => href).map(([href, label]) => {
    const current = href === url || (url === '/' && href === routes.home) || (isPlayer && href === routes.lessons);
    return `<a href="${escape(href)}"${current ? ` class="active" aria-current="${isPlayer ? 'true' : 'page'}"` : ''}>${escape(label)}</a>`;
  }).join('\n        ');
  const [, languageLabel] = HOME_SWITCH[lang] || HOME_SWITCH.en;
  const header = `<header class="topbar site-header" data-site-header>
      <a class="brand brand-signature" href="/" aria-label="TypingEase"><svg class="brand-emblem" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><rect width="32" height="32" rx="8" fill="currentColor"/><g fill="none" stroke="var(--brand-mark-ink, #fff)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 11h2m5 0h2m5 0h2M8 16h2m5 0h2M8 21h9"/><path d="M23 15v7m-2-7h4m-4 7h4"/></g></svg><span class="brand-wordmark">Typing<em>Ease</em></span></a>
      <nav aria-label="${escape(config.s.navAria)}">${links}</nav>
      <div class="header-actions"><a class="site-language" href="/" aria-label="${escape(languageLabel)}" title="${escape(languageLabel)}">${globe}<span>${escape(lang.toUpperCase())}</span></a></div>
    </header>`;
  // Keep lesson controls and their IDs intact as a contextual toolbar below the same site header.
  const lessonToolbar = isPlayer ? `<div class="player-topbar lesson-toolbar" role="region" aria-label="${escape(config.s.enter)}">${match[1]}</div>` : '';
  return html.replace(existing, header + lessonToolbar);
}

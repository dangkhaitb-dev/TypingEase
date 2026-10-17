import assert from 'node:assert/strict';
import fs from 'node:fs';
import { homePresentation } from '../lib/home-presentation.mjs';
import { siteHeader } from '../lib/site-header.mjs';
import paths from '../lib/paths.cjs';
import englishConfig from '../../content/roadmaps/config.en.mjs';

// Exercise the real build transforms: source homepages were already translated
// when the presentation layer accidentally replaced them with English.
const scope = {};
new Function('window', fs.readFileSync(paths.dataFile('languages.js'), 'utf8'))(scope);
const homes = scope.TypingEaseLanguages.list.filter(language => language.course?.status === 'ready');
const render = code => {
  const url = code === 'en' ? '/' : `/${code}/`;
  const source = fs.readFileSync(paths.sourcePage(url), 'utf8');
  return homePresentation(siteHeader(source, paths.GENERATED + url + 'index.html'));
};
const content = html => html.slice(html.indexOf('<main>'), html.lastIndexOf('</footer>'));
const textNodes = html => [...html.matchAll(/>([^<>]+)</g)].map(match => match[1].trim()).filter(Boolean);
const englishSentences = new Set(textNodes(content(render('en'))).filter(text => /[a-z]/i.test(text) && text.length > 25));
const failures = [];
for (const { code } of homes) {
  try {
    const html = render(code);
    const declared = /<html[^>]*lang="([^"]+)"/.exec(html)[1].toLowerCase();
    assert.match(html, new RegExp(`data-product-lang="${code}"`), 'product content uses its own locale');
    assert.match(html, new RegExp(`<section[^>]*lang="${declared}"[^>]*class="hero|<section[^>]*class="hero[^>]*lang="${declared}"`, 'i'), 'hero declares its own locale');
    assert.doesNotMatch(html, /\b(?:undefined|\[object Object\])\b/, 'all copy and routes are defined');
    if (code !== 'en') {
      const copied = textNodes(content(html)).filter(text => englishSentences.has(text));
      assert.deepEqual([...new Set(copied)], [], 'homepage sentences must not fall back to English');
      const englishRoutes = new Set(Object.values(englishConfig.routes).filter(route => route && route !== '/'));
      for (const [, href] of content(html).matchAll(/href="([^"]+)"/g)) {
        assert.ok(!englishRoutes.has(href), `localized content links to English route: ${href}`);
      }
      assert.doesNotMatch(content(html), />Get started\s|Learn to <em>type<\/em> free/, 'hero CTA and headline are localized');
    }
    if (['ar', 'he', 'fa', 'ur'].includes(code)) {
      assert.match(html, /class="product-content"[^>]*dir="rtl"|dir="rtl"[^>]*class="product-content"/, 'RTL copy has the correct direction');
    }
    const fragment = content(html);
    for (const [, src] of fragment.matchAll(/<img[^>]*src="([^"]+)"/g)) {
      assert.ok(fs.existsSync(paths.ROOT + '/public' + src), `image exists: ${src}`);
    }
  } catch (error) { failures.push(`${code}: ${error.message}`); }
}
assert.equal(failures.length, 0, failures.join('\n'));
console.log(`PASS: ${homes.length} locale homepages use localized copy, language attributes, RTL direction, and existing images.`);

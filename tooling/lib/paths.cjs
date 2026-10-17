/* tooling/lib/paths.cjs — where every kind of source lives, in one place.
 *
 * Layout (same split as typekute):
 *   11ty/site/     Eleventy input: hand-written pages at their URL path, _data, _includes
 *   11ty/client/   browser JS served at its URL path (/script.js, /keyboard/boot.js, /i18n/ui.en.js…)
 *   11ty/styles/   CSS served at its URL path (/base.css, /keyboard/keyboard.css…)
 *   content/       page text (typing-test, games, legal, progress, roadmaps) and runtime data (/data/…)
 *   public/        copied verbatim to the site root (assets, vendor, CNAME, sitemap.xml…)
 *   tooling/       page modules (pages/), build helpers (build/), data authoring (data/), checks (test/)
 *
 * CommonJS so both the CommonJS authoring scripts and the ES modules can load it.
 */
'use strict';
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const SITE = path.join(ROOT, '11ty', 'site');
const CLIENT = path.join(ROOT, '11ty', 'client');
const STYLES = path.join(ROOT, '11ty', 'styles');
const CONTENT = path.join(ROOT, 'content');
const DATA = path.join(CONTENT, 'data');
const PUBLIC = path.join(ROOT, 'public');
const GENERATED = path.join(ROOT, '.generated', 'site');
const DIST = path.join(ROOT, 'dist');

const segments = route => String(route).split('/').filter(Boolean);

module.exports = {
  ROOT, SITE, CLIENT, STYLES, CONTENT, DATA, PUBLIC, GENERATED, DIST,
  /** `/fr/apprendre/` → output path `fr/apprendre/index.html` (relative, forward slashes). */
  pageFile: route => [...segments(route), 'index.html'].join('/'),
  /** Hand-written source of the page served at `route`. */
  sourcePage: route => path.join(SITE, ...segments(route), 'index.html'),
  /** `data/languages.js` → content/data/languages.js; `i18n/ui.en.js` → 11ty/client/i18n/ui.en.js. */
  dataFile: (...parts) => path.join(DATA, ...parts),
  clientFile: (...parts) => path.join(CLIENT, ...parts),
  contentFile: (...parts) => path.join(CONTENT, ...parts)
};

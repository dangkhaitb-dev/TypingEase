/* Vite takes the Eleventy output (.generated/site) to dist/.
 *
 * What Vite owns: every `<link rel="stylesheet">` (bundled, minified, content-hashed) and the one
 * ES module entry, /keyboard/boot.js (bundled with its imports; hands-3d.js and three.js stay a
 * lazy chunk). Hashed files go to /_build/, never /assets/, which is the site's own image folder.
 *
 * What Vite leaves alone: classic `<script src>` files (script.js, player.js, i18n/ui.*.js… share
 * globals and load order, so they are served as written), inline scripts, and data. Rollup never
 * sees those, so copyUnbundled() puts every non-HTML file of the Eleventy output into dist/ as is.
 */
import fs from 'node:fs';
import path from 'node:path';
import { createLogger, defineConfig } from 'vite';

const root = path.resolve(import.meta.dirname, '.generated/site');
const outDir = path.resolve(import.meta.dirname, 'dist');

const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
  const full = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(full) : [full];
});
const pages = () => (fs.existsSync(root) ? walk(root).filter(file => file.endsWith('.html')) : []);

function copyUnbundled() {
  return {
    name: 'typingease:copy-unbundled',
    apply: 'build',
    closeBundle() {
      for (const file of walk(root)) {
        if (file.endsWith('.html')) continue;
        const target = path.join(outDir, path.relative(root, file));
        if (fs.existsSync(target)) continue;
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.copyFileSync(file, target);
      }
    }
  };
}

/* sw.js precaches the stylesheets of `/` by URL. Those URLs are hashed now, so the list is
 * rewritten with whatever dist/index.html links to. The source keeps the readable names. */
function serviceWorkerPrecache() {
  return {
    name: 'typingease:sw-precache',
    apply: 'build',
    closeBundle: {
      order: 'post',
      handler() {
        const sw = path.join(outDir, 'sw.js');
        const home = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');
        const sheets = [...home.matchAll(/<link rel="stylesheet"[^>]*href="(\/_build\/[^"]+\.css)"/g)].map(match => match[1]);
        if (!sheets.length) throw new Error('sw-precache: dist/index.html links no built stylesheet');
        const source = fs.readFileSync(sw, 'utf8');
        const marker = /'\/', '\/tokens\.css', '\/base\.css', '\/home\.css', '\/landing\.css',/;
        if (!marker.test(source)) throw new Error('sw-precache: PRECACHE stylesheet line not found in sw.js');
        fs.writeFileSync(sw, source.replace(marker, `'/', ${sheets.map(href => `'${href}'`).join(', ')},`));
      }
    }
  };
}

// 300+ pages × a few classic scripts each would print one "can't be bundled without type=module"
// warning per tag. Those scripts are classic on purpose (see the header), so the warning is noise.
const logger = createLogger();
const warn = logger.warn;
logger.warn = (message, options) => {
  if (/can't be bundled without type="module" attribute/.test(message)) return;
  warn(message, options);
};

export default defineConfig({
  root,
  publicDir: false,
  appType: 'mpa',
  customLogger: logger,
  build: {
    outDir,
    emptyOutDir: true,
    assetsDir: '_build',
    rollupOptions: { input: pages() },
    reportCompressedSize: false,
    // hands-3d (three.js + the hand rig, ~600 KB) is a lazy chunk loaded only when 3D hands turn on.
    chunkSizeWarningLimit: 700
  },
  server: { host: '127.0.0.1' },
  preview: { host: '127.0.0.1' },
  plugins: [copyUnbundled(), serviceWorkerPrecache()]
});

/* tooling/data/sitemap-lastmod.mjs — `<lastmod>` in public/sitemap.xml (job 3 of the old
 * tooling/build/transforms.mjs; its two HTML jobs are now transforms in tooling/build/transforms.mjs).
 *
 *   node tooling/data/sitemap-lastmod.mjs                     write public/sitemap.xml
 *   node tooling/data/sitemap-lastmod.mjs --check             every <url> has a <lastmod> and a page; exit 1 if not
 *   node tooling/data/sitemap-lastmod.mjs --built <dir>       built site to check generated URLs against
 *                                                             (default .generated/site, skipped when absent)
 *
 * Date of a HAND-WRITTEN page (11ty/site/<url>/index.html): the last commit of that file when it is
 * unchanged from HEAD, otherwise its modification date on disk. Never invent a date: Google ignores
 * the lastmod of sites that get it wrong.
 * GENERATED pages have no source file of their own in git, so their <lastmod> is kept as it is (the
 * date the old in-place pipeline committed them); a generated URL that has none yet gets the last
 * commit date of content/ + tooling/pages/ (the newest date its inputs can have).
 * In --check mode dates are not compared (they depend on git and the clock).
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import paths from '../lib/paths.cjs';
import { ORIGIN } from '../lib/seo-head.mjs';

const args = process.argv.slice(2);
const CHECK = args.includes('--check');
const builtAt = args.indexOf('--built');
const BUILT = builtAt >= 0 ? path.resolve(args[builtAt + 1]) : paths.GENERATED;
const SITEMAP = path.join(paths.PUBLIC, 'sitemap.xml');

const git = gitArgs => execFileSync('git', gitArgs, { cwd: paths.ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
const today = new Date();
const ymd = date => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
const relOf = file => path.relative(paths.ROOT, file).split(path.sep).join('/');
const lastmodOf = file => {
  const rel = relOf(file);
  try {
    const tracked = git(['ls-files', '--', rel]);
    const dirty = git(['status', '--porcelain', '--', rel]);
    if (tracked && !dirty) return git(['log', '-1', '--format=%cs', '--', rel]);
  } catch { /* no git: use the file's modification date */ }
  const mtime = fs.statSync(file).mtime;
  return ymd(mtime > today ? today : mtime);
};
let inputsDate;
const generatedDate = () => {
  if (inputsDate) return inputsDate;
  try { inputsDate = git(['log', '-1', '--format=%cs', '--', 'content', 'tooling/pages']); } catch { /* no git */ }
  return (inputsDate ||= ymd(today));
};

const before = fs.readFileSync(SITEMAP, 'utf8');
const haveBuilt = fs.existsSync(BUILT);
let missing = 0, noPage = 0, hand = 0, generated = 0;
const after = before.replace(/<url><loc>([^<]+)<\/loc>(?:<lastmod>([^<]*)<\/lastmod>)?<\/url>/g, (whole, loc, lastmod) => {
  const url = loc.replace(ORIGIN, '');
  const source = paths.sourcePage(url);
  const isHand = fs.existsSync(source);
  isHand ? hand += 1 : generated += 1;
  if (!isHand && haveBuilt && !fs.existsSync(path.join(BUILT, paths.pageFile(url)))) {
    if ((noPage += 1) <= 10) console.error(`sitemap: ${url} has no page (neither 11ty/site/ nor ${relOf(BUILT)}/)`);
  }
  if (CHECK) { if (!lastmod) missing += 1; return whole; }
  const date = isHand ? lastmodOf(source) : lastmod || generatedDate();
  return `<url><loc>${loc}</loc><lastmod>${date}</lastmod></url>`;
});

if (noPage > 10) console.error(`sitemap: … ${noPage} URLs without a page (is ${relOf(BUILT)}/ a full build?)`);
const counts = `${hand} hand-written + ${generated} generated URLs${haveBuilt ? '' : ` (no ${relOf(BUILT)}/: generated URLs not checked for a page)`}`;
if (CHECK) {
  if (missing) console.log(`sitemap: ${missing} <url> without <lastmod>`);
  console.log(missing || noPage ? 'STALE — run node tooling/data/sitemap-lastmod.mjs' : `sitemap OK — ${counts}, all with lastmod`);
  process.exit(missing || noPage ? 1 : 0);
}
if (noPage) process.exit(1);
if (after !== before) fs.writeFileSync(SITEMAP, after);
console.log(`sitemap: ${counts} · ${after !== before ? 'written' : 'unchanged'}`);

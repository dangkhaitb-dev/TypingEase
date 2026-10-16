/* tooling/lib/stamp.mjs — content hashes for the course data URLs (typekute's scheme).
 *
 * Two levels, child before parent, so a parent's hash follows its children's:
 *   1. Each lesson `content/data/lessons/<course>/<id>.json` → `?v=<first 16 hex of sha256(bytes)>`,
 *      written into the `lessonUrls` block at the end of `content/data/curriculum.<course>.js`
 *      (tooling/data/stamp-data.mjs writes it; this module only computes it).
 *   2. Each `content/data/curriculum.<course>.js` WITH that block → `?v=<hash>` on every
 *      <script src=".../data/curriculum.<course>.js"> tag (the `stamp-data` transform of
 *      tooling/build/transforms.mjs, applied to every built page).
 * The hash of level 2 is taken over the curriculum file as level 1 would write it, so a page is
 * stamped exactly as the old in-place script did even before the data file itself is re-stamped.
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import paths from './paths.cjs';

export const hash16 = bytes => crypto.createHash('sha256').update(bytes).digest('hex').slice(0, 16);

export const BEGIN = '/* <auto:lesson-urls> — SINH TỰ ĐỘNG bởi scripts/stamp-data.mjs, ĐỪNG SỬA TAY */';
export const END = '/* </auto:lesson-urls> */';

/** Course ids that have a `content/data/curriculum.<id>.js`, sorted. */
export const curriculumIds = () => fs.readdirSync(paths.DATA)
  .map(name => /^curriculum\.([a-z0-9-]+)\.js$/.exec(name)?.[1])
  .filter(Boolean)
  .sort();

export const curriculumFile = code => paths.dataFile(`curriculum.${code}.js`);

/** The curriculum file of `code` with its lessonUrls block (re)computed from the lesson files. */
export function stampedCurriculum(code) {
  let source = fs.readFileSync(curriculumFile(code), 'utf8');
  const at = source.indexOf(BEGIN);
  if (at >= 0) source = source.slice(0, at).replace(/\s*$/, '\n');
  const lessonDir = paths.dataFile('lessons', code);
  const urls = {};
  if (fs.existsSync(lessonDir)) {
    for (const name of fs.readdirSync(lessonDir).filter(name => name.endsWith('.json')).sort()) {
      const id = name.slice(0, -5);
      urls[id] = `/data/lessons/${code}/${name}?v=${hash16(fs.readFileSync(path.join(lessonDir, name)))}`;
    }
  }
  const block = `${BEGIN}\nwindow.TypingEaseCurriculum.lessonUrls = {\n`
    + Object.entries(urls).map(([id, url]) => `  ${JSON.stringify(id)}: ${JSON.stringify(url)}`).join(',\n')
    + `\n};\n${END}\n`;
  return `${source}\n${block}`;
}

/** `?v=` hash of the curriculum script of `code` (null when there is no such file). */
export const curriculumHash = code => fs.existsSync(curriculumFile(code)) ? hash16(Buffer.from(stampedCurriculum(code), 'utf8')) : null;

export const SCRIPT_SRC = /(src=["'])((?:\.\.\/)*\/?data\/curriculum\.([a-z0-9-]+)\.js)(?:\?v=[a-f0-9]*)?(["'])/g;

/** Stamp every curriculum <script src> of `html`; `hashOf(code)` gives the hash (or null to leave it). */
export const stampScripts = (html, hashOf = curriculumHash) =>
  html.replace(SCRIPT_SRC, (all, open, src, code, close) => {
    const hash = hashOf(code);
    return hash ? `${open}${src}?v=${hash}${close}` : all;
  });

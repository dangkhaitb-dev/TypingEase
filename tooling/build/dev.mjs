/* npm run dev — Eleventy in watch mode writes .generated/site, Vite serves it.
 *
 * Eleventy runs once before Vite starts, so the first request never hits an empty folder. After
 * that, editing a page, CSS, browser JS or content/ makes Eleventy rewrite the affected output and
 * Vite reloads the page (CSS hot-swaps). Extra arguments go to Vite: `npm run dev -- --port 4180`.
 */
import { spawn, spawnSync } from 'node:child_process';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..', '..');
const bin = name => path.join(root, 'node_modules', '.bin', name);

const first = spawnSync(bin('eleventy'), ['--quiet'], { cwd: root, stdio: 'inherit' });
if (first.status !== 0) process.exit(first.status ?? 1);

const children = [
  spawn(bin('eleventy'), ['--watch', '--quiet'], { cwd: root, stdio: 'inherit' }),
  spawn(bin('vite'), ['--config', 'vite.config.mjs', ...process.argv.slice(2)], { cwd: root, stdio: 'inherit' })
];
const stop = code => { for (const child of children) child.kill(); process.exit(code); };
for (const child of children) child.on('exit', code => stop(code ?? 0));
process.on('SIGINT', () => stop(0));
process.on('SIGTERM', () => stop(0));

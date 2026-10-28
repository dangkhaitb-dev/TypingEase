/* npm run dev — Eleventy in watch mode writes .generated/site, Vite serves it.
 *
 * Eleventy runs once before Vite starts, so the first request never hits an empty folder. After
 * that, editing a page, CSS, browser JS or content/ makes Eleventy rewrite the affected output and
 * Vite reloads the page (CSS hot-swaps). Extra arguments go to Vite: `npm run dev -- --port 4180`.
 */
import { spawn, spawnSync } from 'node:child_process';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..', '..');
// Run each CLI's JS entry with this Node binary: node_modules/.bin holds .cmd shims on Windows,
// which spawn() cannot start without a shell.
const bins = {
  eleventy: path.join(root, 'node_modules', '@11ty', 'eleventy', 'cmd.cjs'),
  vite: path.join(root, 'node_modules', 'vite', 'bin', 'vite.js')
};
const run = (name, args) => [process.execPath, [bins[name], ...args], { cwd: root, stdio: 'inherit' }];

const first = spawnSync(...run('eleventy', ['--quiet']));
if (first.error) console.error(first.error.message);
if (first.status !== 0) process.exit(first.status ?? 1);

const children = [
  spawn(...run('eleventy', ['--watch', '--quiet'])),
  spawn(...run('vite', ['--config', 'vite.config.mjs', ...process.argv.slice(2)]))
];
const stop = code => { for (const child of children) child.kill(); process.exit(code); };
for (const child of children) child.on('exit', code => stop(code ?? 0));
process.on('SIGINT', () => stop(0));
process.on('SIGTERM', () => stop(0));

// npm run clean — remove the two build outputs (.generated/ from Eleventy, dist/ from Vite).
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..', '..');
for (const dir of ['.generated', 'dist']) fs.rmSync(path.join(root, dir), { recursive: true, force: true });

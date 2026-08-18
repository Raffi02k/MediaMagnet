import { access } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, '..');
const required = [
  path.join(root, 'frontend', 'dist', 'index.html'),
  path.join(root, 'frontend', 'dist', 'assets'),
  path.join(root, 'OPEN_WEBSITE.html'),
];

for (const file of required) {
  await access(file, constants.F_OK);
}

console.log('Build check passed.');

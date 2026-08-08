import { readdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const docsDirectory = join(projectRoot, 'public', 'docs');
const indexFile = 'index.json';
const files = (await readdir(docsDirectory))
  .filter((file) => file.endsWith('.json') && file !== indexFile)
  .sort((left, right) => left.localeCompare(right));

await writeFile(
  join(docsDirectory, indexFile),
  `${JSON.stringify({ files }, null, 2)}\n`,
  'utf8',
);

console.log(`Indexed ${files.length} API documentation file(s).`);

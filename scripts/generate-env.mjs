import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

function parseEnvFile(filePath) {
  const env = {};
  const content = readFileSync(filePath, 'utf8');

  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }

    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex <= 0) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();
    env[key] = value;
  }

  return env;
}

const envPath = resolve(process.cwd(), '.env');
const env = parseEnvFile(envPath);
const appServer = env['app.server'] ?? '';

mkdirSync(resolve(process.cwd(), 'public'), { recursive: true });

const outputPath = resolve(process.cwd(), 'public', 'env.js');
const outputContent = `window.__env = Object.assign({}, window.__env, {\n  "app.server": ${JSON.stringify(appServer)}\n});\n`;

writeFileSync(outputPath, outputContent, 'utf8');
console.log(`Generated ${outputPath} with app.server=${appServer || '(empty)'}`);

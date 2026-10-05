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
const googleAnalytics = (env.GoogleAnalytics ?? '').replace(/^['\" ]|['\" ]$/g, '').trim();

mkdirSync(resolve(process.cwd(), 'public'), { recursive: true });

const outputPath = resolve(process.cwd(), 'public', 'env.js');
const outputContent = `window.__env = Object.assign({}, window.__env, {\n  "app.server": ${JSON.stringify(appServer)},\n  "GoogleAnalytics": ${JSON.stringify(googleAnalytics)}\n});\n`;

writeFileSync(outputPath, outputContent, 'utf8');
console.log(`Generated ${outputPath} with app.server=${appServer || '(empty)'}`);

// Keep the tag in the source HTML so every distribution includes it.
const indexPath = resolve(process.cwd(), 'src', 'index.html');
const startMarker = '<!-- Google Analytics: generated from .env -->';
const endMarker = '<!-- /Google Analytics -->';
const analyticsTag = /^G-[A-Z0-9]+$/.test(googleAnalytics) ? `${startMarker}
  <script async src="https://www.googletagmanager.com/gtag/js?id=${googleAnalytics}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', '${googleAnalytics}');
  </script>
  ${endMarker}` : `${startMarker}\n  ${endMarker}`;
const index = readFileSync(indexPath, 'utf8');
const existingTag = /<!-- Google Analytics: generated from \.env -->[\s\S]*?<!-- \/Google Analytics -->/;
const updatedIndex = existingTag.test(index)
  ? index.replace(existingTag, analyticsTag)
  : index.replace('</head>', `  ${analyticsTag}\n</head>`);
if (index !== updatedIndex) writeFileSync(indexPath, updatedIndex, 'utf8');
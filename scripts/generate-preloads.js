import fs from 'node:fs';
import path from 'node:path';

const clientAstroDir = path.join(process.cwd(), 'dist', 'client', '_astro');
const outputFile = path.join(process.cwd(), 'dist', 'client', 'preloads.json');

try {
  if (!fs.existsSync(clientAstroDir)) {
    console.error('Client Astro directory does not exist:', clientAstroDir);
    process.exit(1);
  }

  const files = fs.readdirSync(clientAstroDir);
  const criticalPrefixes = ['App.', 'client.', 'preact.module.', 'env.', 'signals.module.'];
  
  const preloads = files
    .filter(file => {
      return file.endsWith('.js') && criticalPrefixes.some(prefix => file.startsWith(prefix));
    })
    .map(file => `/_astro/${file}`);

  fs.writeFileSync(outputFile, JSON.stringify(preloads, null, 2), 'utf-8');
  console.log(`Successfully generated critical preloads manifest at ${outputFile}`);
  console.log('Preloaded files:', preloads);
} catch (e) {
  console.error('Failed to generate preloads manifest:', e);
  process.exit(1);
}

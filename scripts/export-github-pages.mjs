import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const projectRoot = path.resolve(import.meta.dirname, '..');
const outputDir = path.join(projectRoot, 'work', 'github-pages');
const previewUrl = 'http://127.0.0.1:3091/arseniy?publish=github-pages';

const response = await fetch(previewUrl);
if (!response.ok) {
  throw new Error(`Preview request failed with ${response.status}`);
}

let html = await response.text();

html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
  .replace(/<link\b[^>]*rel="(?:modulepreload|preload)"[^>]*\/?>(?:<\/link>)?/gi, '')
  .replace(/\sdata-rsc-css-href="[^"]*"/gi, '')
  .replace(/\sdata-precedence="[^"]*"/gi, '')
  .replace(/href="\/_next\//g, 'href="./_next/')
  .replace(/<img\b[^>]*>/gi, (tag) => {
    const decoded = tag.replaceAll('&amp;', '&');
    const match = decoded.match(/[?&]url=%2F([^&"]+)/i);
    if (!match) return tag;

    const filename = decodeURIComponent(match[1]);
    return tag
      .replace(/\ssrcSet="[^"]*"/gi, '')
      .replace(/\ssrc="[^"]*"/i, ` src="./assets/${filename}"`)
      .replace(/\sdata-nimg="[^"]*"/gi, '');
  })
  .replace('<head>', '<head><link rel="icon" href="./favicon.svg"/>');

await mkdir(outputDir, { recursive: true });
for (const entry of await readdir(outputDir)) {
  if (entry !== '.git') {
    await rm(path.join(outputDir, entry), { recursive: true, force: true });
  }
}
await mkdir(path.join(outputDir, 'assets'), { recursive: true });

await cp(
  path.join(projectRoot, 'dist', 'client', '_next'),
  path.join(outputDir, '_next'),
  { recursive: true },
);

for (const filename of ['demo-hero.png', 'demo-stage.png', 'demo-audience.png']) {
  await cp(
    path.join(projectRoot, 'public', filename),
    path.join(outputDir, 'assets', filename),
  );
}

await cp(
  path.join(projectRoot, 'public', 'favicon.svg'),
  path.join(outputDir, 'favicon.svg'),
);

await writeFile(path.join(outputDir, 'index.html'), html, 'utf8');
await writeFile(path.join(outputDir, '.nojekyll'), '', 'utf8');
await writeFile(
  path.join(outputDir, 'README.md'),
  '# Арсений Клишев — ведущий событий\n\nГотовая статическая версия сайта для GitHub Pages.\n',
  'utf8',
);

const exportedHtml = await readFile(path.join(outputDir, 'index.html'), 'utf8');
if (!exportedHtml.includes('Демо-шаблон сайта ведущего')) {
  throw new Error('Export validation failed: title is missing');
}

console.log(outputDir);

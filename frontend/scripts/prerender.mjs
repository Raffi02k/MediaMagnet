import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'vite';

const output = resolve('dist');
const serverOutput = resolve('dist/.prerender');
const escape = value => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

try {
  await build({
    build: { ssr: 'src/prerender.tsx', outDir: serverOutput, copyPublicDir: false }
  });
  const { render, routes } = await import(pathToFileURL(resolve(serverOutput, 'prerender.js')).href);
  const template = await readFile(resolve(output, 'index.html'), 'utf8');

  for (const route of [...routes, '/404']) {
    const { html, metadata } = render(route);
    const { title, description, url, noIndex } = metadata;
    const head = [
      `<title>${escape(title)}</title>`,
      `<meta name="description" content="${escape(description)}" />`,
      `<meta property="og:title" content="${escape(title)}" />`,
      `<meta property="og:description" content="${escape(description)}" />`,
      `<meta property="og:url" content="${escape(url)}" />`,
      `<meta name="twitter:title" content="${escape(title)}" />`,
      `<meta name="twitter:description" content="${escape(description)}" />`,
      noIndex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${escape(url)}" />`
    ].join('\n  ');
    const page = template
      .replace(/<title>[\s\S]*?<\/title>/g, '')
      .replace(/<meta\s+(?:name|property)="(?:description|og:title|og:description|og:url|twitter:title|twitter:description)"[^>]*>/g, '')
      .replace('</head>', `${head}\n</head>`)
      .replace('<div id="root"></div>', () => `<div id="root">${html}</div>`);
    if (!page.includes('<h1') || !page.includes('<a ')) throw new Error(`Missing content for ${route}`);
    const filename = resolve(output, route === '/' ? 'index.html' : `${route.slice(1)}.html`);
    await mkdir(dirname(filename), { recursive: true });
    await writeFile(filename, page);
    console.log(`Prerendered ${route}`);
  }
} finally {
  await rm(serverOutput, { recursive: true, force: true });
}

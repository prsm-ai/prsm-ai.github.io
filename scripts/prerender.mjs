import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const indexPath = path.join(root, 'index.html');
const startMarker = '<!-- prerender:start -->';
const endMarker = '<!-- prerender:end -->';

const server = await createServer({
  root,
  logLevel: 'error',
  optimizeDeps: { disabled: true },
  server: { middlewareMode: true, hmr: false, ws: false },
  appType: 'custom',
  configFile: false,
});

try {
  const appModule = await server.ssrLoadModule('/src/App.tsx');
  const App = appModule.default;
  const appHtml = ReactDOMServer.renderToStaticMarkup(React.createElement(App));
  const formattedHtml = appHtml.replace(/></g, '>\n<');

  const indexHtml = await readFile(indexPath, 'utf-8');
  const startIndex = indexHtml.indexOf(startMarker);
  const endIndex = indexHtml.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
    throw new Error('Missing prerender markers in index.html.');
  }

  const before = indexHtml.slice(0, startIndex + startMarker.length);
  const after = indexHtml.slice(endIndex);
  const nextHtml = `${before}\n${formattedHtml}\n${after}`;

  await writeFile(indexPath, nextHtml);
} finally {
  await server.close();
}

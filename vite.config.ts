import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { prerenderPlugin } from 'vite-prerender-plugin';

export default defineConfig({
  build: {
    outDir: 'docs',
    target: 'es2019'
  },
  plugins: [
    react(),
    prerenderPlugin({
      routes: ['/'],
      staticDir: 'docs',
      renderTarget: '#root',
    }),
  ],
});

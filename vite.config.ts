import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    outDir: 'docs',
    target: 'es2019'
  },
  plugins: [react()],
});

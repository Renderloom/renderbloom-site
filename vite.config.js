// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: './public', // or wherever your index.html lives
  build: {
    outDir: '../dist',
  },
});

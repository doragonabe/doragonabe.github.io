import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  root: 'src',
  publicDir: '../public',
  build: {
    emptyOutDir: true,
    outDir: '../docs',
    assetsDir: 'assets',
    minify: true,
  },
  plugins: [
    vue(),
    checker({
      typescript: true,
      vueTsc: true,
    }),
  ],
});

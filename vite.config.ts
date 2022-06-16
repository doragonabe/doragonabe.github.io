import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    root: 'src',
    build: {
        outDir: '../docs',
        emptyOutDir: true,
    },
    plugins: [vue()],
});

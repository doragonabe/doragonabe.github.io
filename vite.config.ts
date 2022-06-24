import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {viteStaticCopy} from 'vite-plugin-static-copy';
import {createHtmlPlugin} from 'vite-plugin-html';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    root: 'src',
    build: {
        outDir: '../docs',
        emptyOutDir: true,
    },
    plugins: [
        vue(),
        viteStaticCopy({
            targets: [{
                src: path.resolve(__dirname, './static') + '/[!.]*',
                dest: './',
            }],
        }),
        createHtmlPlugin({
            minify: true,
        }),
    ],
});

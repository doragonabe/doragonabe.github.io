import {createApp} from 'vue';
import router from './router';
import App from './App.vue';

// GitHub Pages での SPA アドレス解決用
const query = new URLSearchParams(window.location.search);
if (query.has('p')) {
    const route = decodeURIComponent(query.get('p'));
    window.history.replaceState(null, '', route);
}

createApp(App).use(router).mount('#app');

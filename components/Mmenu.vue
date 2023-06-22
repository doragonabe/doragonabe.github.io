<template>
    <nav id="menu">
        <ul>
            <li><NuxtLink to="/" class="mm-listitem__text" @click="menuClose">トップ</NuxtLink></li>
            <li><NuxtLink to="/server_rules" class="mm-listitem__text" @click="menuClose">サーバールール</NuxtLink></li>
            <li><NuxtLink to="/server_introduction" class="mm-listitem__text" @click="menuClose">サーバー紹介</NuxtLink></li>
            <li><NuxtLink to="/server_specifications" class="mm-listitem__text" @click="menuClose">サーバー仕様</NuxtLink></li>
            <li><NuxtLink to="/q_and_a" class="mm-listitem__text" @click="menuClose">Q & A</NuxtLink></li>
        </ul>
    </nav>
</template>
<script>
import 'mmenu-js/dist/mmenu.css';

export default {
    data() {
        return {
            menu: null,
        };
    },
    async mounted() {
        if (process.client) {
            const Mmenu = (await import('mmenu-js')).default;
            this.initializeMenu(Mmenu);
        }
    },
    beforeUnmount() {
        this.destroyMenu();
    },
    methods: {
        initializeMenu(Mmenu) {
            this.menu = new Mmenu('#menu', {
                extensions: [
                    'position-right',
                ],
            });
        },
        destroyMenu() {
            if (this.menu) {
                this.menu.destroy();
            }
        },
        menuClose() {
            this.menu.API.close();
        },
    },
};
</script>

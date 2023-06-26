<template>
    <nav id="menu">
        <ul>
            <li>
                <NuxtLink to="/" class="mm-listitem__text" @click="menuClose">トップ</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/server_rules" class="mm-listitem__text" @click="menuClose">サーバールール</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/server_introduction" class="mm-listitem__text" @click="menuClose">サーバー紹介</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/server_specifications" class="mm-listitem__text" @click="menuClose">サーバー仕様</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/q_and_a" class="mm-listitem__text" @click="menuClose">Q & A</NuxtLink>
            </li>
        </ul>
    </nav>
</template>
<script setup>
import 'mmenu-js/dist/mmenu.css';

let menu = ref(null);

onMounted(async () => {
    const {default: Mmenu} = await import('mmenu-js');
    initializeMenu(Mmenu);
});

onBeforeUnmount(() => {
    destroyMenu();
});

const initializeMenu = Mmenu => {
    menu.value = new Mmenu('#menu', {
        'offCanvas': {
            'position': 'right',
        },
    });
};

const destroyMenu = () => {
    if (menu.value) {
        menu.value.destroy();
    }
};

const menuClose = () => {
    menu.value.API.close();
};
</script>

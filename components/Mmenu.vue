<template>
    <nav id="menu">
        <ul>
            <li>
                <NuxtLink class="mm-listitem__text" to="/" @click="menuClose">トップ</NuxtLink>
            </li>
            <li>
                <NuxtLink class="mm-listitem__text" to="/server_rules" @click="menuClose">サーバールール</NuxtLink>
            </li>
            <li>
                <NuxtLink class="mm-listitem__text" to="/server_introduction" @click="menuClose">サーバー紹介</NuxtLink>
            </li>
            <li>
                <NuxtLink class="mm-listitem__text" to="/server_specifications" @click="menuClose">サーバー仕様</NuxtLink>
            </li>
            <li>
                <NuxtLink class="mm-listitem__text" to="/q_and_a" @click="menuClose">Q & A</NuxtLink>
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

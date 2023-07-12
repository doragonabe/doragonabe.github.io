<template>
    <h3>ページを跨る値の保持</h3>
    <h4>ページ2</h4>
    <NuxtLink to="/test/use_state1">use_state1へ</NuxtLink>
    <div>
        count: {{ counter }}
        <button @click="--counter">-</button>
        <button @click="++counter">+</button>
    </div>
</template>
<script lang="ts" setup>
const counter = useState('counter', () => 0);
</script>

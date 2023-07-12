<template>
    <h3>タイトルの動的変更サンプル</h3>
    <div>
        <p>count: {{ count }}</p>
        <p>doubled: {{ doubled }}</p>
        <p>random: {{ random }}</p>
        <button @click="--count">-</button>
        <button @click="++count">+</button>
    </div>
</template>
<script lang="ts" setup>
const count = ref(0);
const doubled = computed(() => count.value * 2);
const random = Math.round(Math.random() * 1000);

watchEffect(() => {
  document.title = `Count is ${count.value}`;
});
</script>

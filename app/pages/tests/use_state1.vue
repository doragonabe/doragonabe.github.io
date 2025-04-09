<template>
  <h3>ページを跨る値保持のサンプル1 useState</h3>
  <NuxtLink :to="{ name: 'tests' }">戻る</NuxtLink>
  <br />
  <p>count: {{ counter }}</p>
  <button @click="--counter">-</button>
  <button @click="++counter">+</button>
  <br />
  <NuxtLink :to="{ name: 'tests-use_state2' }">use_state2へ</NuxtLink>
</template>
<script lang="ts" setup>
const counter = useState("counter", () => 0);
</script>

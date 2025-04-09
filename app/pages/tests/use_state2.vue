<template>
  <h3>ページを跨る値保持のサンプル2 useState</h3>
  <NuxtLink :to="{ name: 'tests' }">戻る</NuxtLink>
  <br />
  <p>count: {{ counter }}</p>
  <button @click="--counter">-</button>
  <button @click="++counter">+</button>
  <br />
  <NuxtLink :to="{ name: 'tests-use_state1' }">use_state1へ</NuxtLink>
</template>
<script lang="ts" setup>
const counter = useState("counter", () => 0);
</script>

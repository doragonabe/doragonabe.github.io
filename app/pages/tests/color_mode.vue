<template>
  <h3>カラーモード切り替え</h3>
  <NuxtLink :to="{ name: 'tests' }">戻る</NuxtLink>
  <br />
  <ColorMode />
  <p>{{ useColorMode() }}</p>
</template>

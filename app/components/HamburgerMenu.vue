<template>
  <button type="button" class="drawer_open" :class="{ test: isActive }" aria-controls="h_nav" :aria-expanded="isActive"
    :aria-label="isActive ? 'メニューを閉じる' : 'メニューを開く'">
    <div></div>
  </button>
</template>
<script lang="ts" setup>
const isActive = defineModel<boolean>({
  default: false,
});
</script>

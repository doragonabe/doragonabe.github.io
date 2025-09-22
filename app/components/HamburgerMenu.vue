<template>
  <button
    class="drawer_open flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-blue-500"
    :aria-expanded="isActive"
    :aria-label="isActive ? 'メニューを閉じる' : 'メニューを開く'"
    :class="{ is_open: isActive }"
    aria-controls="h_nav"
    type="button"
  >
    <div
      class="absolute block h-1 w-7 rounded-sm bg-white duration-500 before:absolute before:bottom-2.5 before:block before:h-1 before:w-7 before:rounded-sm before:bg-white before:duration-500 after:absolute after:top-2.5 after:block after:h-1 after:w-7 after:rounded-sm after:bg-white after:duration-500"
      :class="{
        '!bg-transparent': isActive,
        'before:!bottom-0': isActive,
        'after:!top-0': isActive,
        'before:!rotate-45': isActive,
        'after:!-rotate-45': isActive,
      }"
    ></div>
  </button>
</template>
<script lang="ts" setup>
const isActive = defineModel<boolean>({
  default: false,
});
</script>

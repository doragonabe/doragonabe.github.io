<template>
  <section>
    <H3 class="mb-2">{{ title }}</H3>
    <div class="px-5 pb-5">
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup>
const { title } = defineProps<{
  title: string;
}>();
</script>

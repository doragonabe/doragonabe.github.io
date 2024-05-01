<template>
  <section>
    <h2 class="p-7 pl-14 mb-5">{{ h2 }}</h2>
    <slot />
  </section>
</template>
<script lang="ts" setup>
interface Props {
  h2: string;
}
defineProps<Props>();
</script>

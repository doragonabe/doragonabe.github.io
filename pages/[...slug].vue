<template>404</template>
<script lang="ts" setup>
definePageMeta({
  layout: "app",
});

// SSR用の設定
const event = useRequestEvent();
if (event) {
  setResponseStatus(event, 404);
}
</script>

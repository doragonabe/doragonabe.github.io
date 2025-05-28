<template>
  <Title>404</Title>

  <div>404</div>
</template>
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

<template>
  <form @submit.prevent="handleSubmit">
    <input
      name="aaa"
      v-model="qqq"
    />
    <input
      name="bbb"
      v-model="www"
    />
    <button type="submit">Submit</button>
  </form>
  <NuxtLink :to="{ name: 'api_test1' }">to test1</NuxtLink>
</template>
<script lang="ts" setup>
const { start } = useLoadingIndicator();
//start({ force: true });
//start();

const qqq = ref("");
const www = ref("");

const { execute } = await useAsyncData(
  () =>
    $fetch("/api/test", {
      method: "POST",
      body: {},
    }),
  {
    immediate: false,
    deep: false,
    dedupe: "defer",
    async transform(data) {
      return data;
    },
  }
);

const handleSubmit = async () => {
  //start();
  await execute();
  await navigateTo({ name: "api_test1" });
};
</script>

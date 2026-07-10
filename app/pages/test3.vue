<template>
  <form @submit.prevent="handleSubmit">
    <FormText
      name="aaa"
      required
      v-model="qqq"
    />
    <FormText
      name="bbb"
      required
      v-model="www"
    />
    <button type="submit">Submit</button>
  </form>
</template>
<script lang="ts" setup>
const qqq = ref("");
const www = ref("");

// const form = ref({ email: "" });
const handleSubmit = () => {
  console.log("aaaaa");
};

/*
const invalidateForm = () => {
  console.log("qqqqq");
};
*/
</script>

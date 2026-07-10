<template>
  <form @submit.prevent="handleSubmit">
    <input
      @invalid="invalidateForm"
      required
      v-model="form.email"
    />
    <button type="submit">Submit</button>
  </form>
</template>
<script lang="ts" setup>
const form = ref({ email: "" });
const handleSubmit = () => {
  console.log("aaaaa");
};

const invalidateForm = () => {
  console.log("qqqqq");
};
</script>

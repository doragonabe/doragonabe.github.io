<template>
  <form @submit.prevent="handleSubmit">
    <FormText
      name="test1"
      :schema="yup.string().required().notOneOf(['123'])"
      required
      v-model="test1"
    />

    <FormText
      name="test2"
      :schema="yup.string().required().notOneOf(['456'])"
      required
      v-model="test2"
    />

    <button type="submit">Submit</button>
  </form>
</template>
<script lang="ts" setup>
import * as yup from "yup";

const test1 = ref("");
const test2 = ref("");

const handleSubmit = () => {
  console.log("Form submitted!");
};
</script>

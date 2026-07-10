<template>
  <input
    :name="name"
    type="text"
    v-model="modelValue"
  />
</template>
<script lang="ts" setup>
defineOptions({
  name: "FormNumberInput",
});

interface Props {
  name?: string;
}

const { name } = defineProps<Props>();

const modelValue = defineModel<string | number>({
  required: true,
  default: "",
  set: (value) => {
    if (value === "" || typeof value === "number") {
      return value;
    }

    const parsedValue = Number.parseInt(value, 10);
    return !Number.isNaN(parsedValue) && value === parsedValue.toString()
      ? parsedValue
      : value;
  },
});
</script>

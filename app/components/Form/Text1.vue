<template>
  <input
    :type="type"
    v-model="modelValue"
  />
</template>
<script lang="ts" setup>
defineOptions({
  name: "FormTextBasic",
});

type TypeKey = "text" | "tel" | "email";

interface Props {
  type?: TypeKey;
}

withDefaults(defineProps<Props>(), {
  type: "text",
});

const modelValue = defineModel<string>({
  default: "",
});
</script>

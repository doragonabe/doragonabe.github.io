<template>
  <input
    :type="type"
    :value="modelValue"
    @input="updateValue"
  />
</template>
<script lang="ts" setup>
type TypeKey = "text" | "tel" | "email";

interface Props {
  type?: TypeKey;
  modelValue?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  modelValue: "",
});

const emit = defineEmits(["update:modelValue"]);
const updateValue = (event: Event): void => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};

onMounted(() => {
  if (props.modelValue === "") {
    emit("update:modelValue", props.modelValue);
  }
});
</script>

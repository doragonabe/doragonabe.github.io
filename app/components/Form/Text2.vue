<template>
  <input
    :type="type"
    v-model="updateValue"
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
const updateValue = ref(props.modelValue);
watch(updateValue, (newValue) => {
  emit("update:modelValue", newValue);
});

onMounted(() => {
  emit("update:modelValue", props.modelValue);
});
</script>

<template>
  <input
    ref="inputRef"
    :name="name"
    :type="type"
    v-model="modelValue"
  />
</template>
<script lang="ts" setup>
import * as yup from "yup";

defineOptions({
  name: "FormTextInput",
});

type TypeKey = "text" | "tel" | "email" | "password" | "radio" | "date";

interface Props {
  type?: TypeKey;
  name: string;
  validate?: (value: string) => string | undefined;
  schema?: yup.StringSchema;
}

const { type = "text", name, validate, schema } = defineProps<Props>();

const inputRef = ref<HTMLInputElement | null>(null);

const modelValue = defineModel<string>({
  default: "",
});

const validateInput = () => {
  const input = inputRef.value;
  if (!input) {
    return;
  }

  input.setCustomValidity("");

  if (!input.checkValidity()) {
    return;
  }

  let message = "";
  if (schema) {
    try {
      schema.validateSync(modelValue.value);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        message = err.message;
      }
    }
  }

  if (validate && message === "") {
    message = validate(modelValue.value) ?? "";
  }

  input.setCustomValidity(message);
};

onMounted(validateInput);
watch(modelValue, validateInput, { flush: "post" });
</script>

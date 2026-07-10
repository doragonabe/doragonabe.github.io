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
  required: true,
  default: "",
  get: (value) => {
    if (inputRef.value) {
      inputRef.value.setCustomValidity("");

      let message = "";
      if (inputRef.value.checkValidity()) {
        if (schema) {
          try {
            schema.validateSync(value);
          } catch (err) {
            if (err instanceof yup.ValidationError) {
              message = err.message;
            }
          }
        }

        if (validate && message === "") {
          message = validate(value) ?? "";
        }

        if (message) {
          inputRef.value.setCustomValidity(message);
        }
      }
    }

    return value;
  },
});
</script>

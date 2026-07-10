<template>
  <input
    :type="type"
    :value="modelValue"
    v-bind="validationBind"
  />
</template>

<script lang="ts" setup>
defineOptions({
  name: "FormTextValidated",
});

type ValidationKey =
  | "numeric3"
  | "numeric4"
  | "tel1"
  | "tel2"
  | "tel3"
  | "zip1"
  | "zip2"
  | "auth-code";

type ValidationAttributes = {
  type?: "tel";
  inputmode?: "numeric";
  maxlength?: number;
  pattern?: string;
  title?: string;
  placeholder?: string;
};

interface Props {
  type?: "text" | "tel";
  validation?: ValidationKey | "";
}

const { type = "text", validation = "" } = defineProps<Props>();

const modelValue = defineModel<string>();

const validationLists = {
  numeric3: {
    type: "tel",
    inputmode: "numeric",
    maxlength: 3,
    pattern: "^\\d{3}$",
    title: "3桁の数字を入力してください。",
  },
  numeric4: {
    type: "tel",
    inputmode: "numeric",
    maxlength: 4,
    pattern: "^\\d{4}$",
    title: "4桁の数字を入力してください。",
  },
  tel1: {
    type: "tel",
    inputmode: "numeric",
    maxlength: 5,
    pattern: "^\\d{2,5}$",
    title: "2桁以上の数字を入力してください。",
  },
  tel2: {
    type: "tel",
    inputmode: "numeric",
    maxlength: 4,
    pattern: "^\\d{1,4}$",
    title: "数字を入力してください。",
  },
  tel3: {
    type: "tel",
    inputmode: "numeric",
    maxlength: 4,
    pattern: "^\\d{3,4}$",
    title: "3桁以上の数字を入力してください。",
  },
  zip1: {
    inputmode: "numeric",
    maxlength: 3,
    pattern: "^\\d{3}$",
    title: "3桁の数字を入力してください。",
  },
  zip2: {
    inputmode: "numeric",
    maxlength: 4,
    pattern: "^\\d{4}$",
    title: "4桁の数字を入力してください。",
  },
  "auth-code": {
    inputmode: "numeric",
    maxlength: 6,
    placeholder: "000000",
    pattern: "^\\d{6}$",
    title: "6桁の数字を入力してください。",
  },
} as const satisfies Record<ValidationKey, ValidationAttributes>;

const validationBind = computed((): ValidationAttributes => {
  if (validation === "") {
    return {};
  }

  return validationLists[validation];
});
</script>

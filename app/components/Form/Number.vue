<template>
  <input
    :name="name"
    type="text"
    v-model="modelValue"
  />
</template>
<script lang="ts" setup>
interface Props {
  name?: string;
}

const { name } = defineProps<Props>();

const modelValue = defineModel<string | number>({
  required: true,
  default: "",
  get: (value) => {
    if (value === "") {
      return value;
    }

    console.log(value);
    // 数値に変換できるか確認
    const parsed = Number.parseInt(value as string, 10);
    // NaN かどうかをチェック
    if (!Number.isNaN(parsed) && value === parsed.toString()) {
      console.log(value);
      return parsed;
    }

    return value;
  },
});
</script>

<template>
  <form class="my-6 space-y-6">
    <div
      class="grid items-center gap-3"
      v-for="group in textFieldGroups"
      :class="group.gridClass"
      :key="group.label"
    >
      <label class="text-sm font-semibold text-gray-700">
        {{ group.label }}
      </label>

      <div
        class="flex rounded-lg shadow-sm"
        v-for="(field, index) in group.fields"
        :class="field.columnClass"
        :key="field.id"
      >
        <span :class="inputPrefixClass">
          {{ field.prefix ?? index + 1 }}
        </span>
        <input
          class="block w-full rounded-r-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          :id="field.id"
          :placeholder="field.placeholder"
          :type="field.type ?? 'text'"
          v-model="userInfo[field.key]"
        />
      </div>
    </div>

    <div class="flex flex-wrap items-center gap-4">
      <span class="text-sm font-semibold text-gray-700">
        ストレングスファインダー
      </span>

      <div class="flex flex-wrap gap-2">
        <label
          class="relative"
          v-for="option in STRENGTHS_FINDER_POSITION_OPTIONS"
          :key="option.value || 'none'"
        >
          <input
            class="peer hidden"
            :id="`sf-position-${option.value || 'none'}`"
            :value="option.value"
            type="radio"
            v-model="userInfo.sf_position"
          />
          <span :class="radioLabelClass">
            {{ option.label }}
          </span>
        </label>
      </div>

      <div class="flex flex-wrap gap-2">
        <label
          class="relative"
          v-for="option in STRENGTHS_FINDER_LANGUAGE_OPTIONS"
          :key="option.value"
        >
          <input
            class="peer hidden"
            :id="`sf-lang-${option.value}`"
            :value="option.value"
            type="radio"
            v-model="userInfo.sf_lang"
          />
          <span :class="radioLabelClass">
            {{ option.label }}
          </span>
        </label>
      </div>
    </div>

    <div
      class="grid gap-2 sm:grid-cols-2 md:grid-cols-5"
      v-for="(indexes, rowIndex) in strengthRows"
      :key="`strength-row-${rowIndex}`"
    >
      <div
        class="w-full"
        v-for="index in indexes"
        :key="`strength-${index}`"
      >
        <select
          class="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          v-model="userInfo.sf[index]"
        >
          <option value=""></option>
          <option
            v-for="trait in STRENGTHS_FINDER_TRAITS"
            :key="trait.id"
            :value="trait.name"
          >
            {{ trait.name }}
          </option>
        </select>
      </div>
    </div>

    <div class="max-w-3xl">
      <label
        class="mb-1 block text-sm font-semibold text-gray-700"
        for="url"
      >
        URL (QRコード)
      </label>
      <input
        class="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        id="url"
        placeholder="URLを入力"
        type="url"
        v-model="userInfo.url"
      />
    </div>
  </form>
</template>

<script lang="ts" setup>
import type { VirtualBackgroundUserInfo } from "~/utils/virtualBackground";
import {
  STRENGTHS_FINDER_LANGUAGE_OPTIONS,
  STRENGTHS_FINDER_POSITION_OPTIONS,
  STRENGTHS_FINDER_TRAITS,
} from "~/utils/virtualBackground";

type TextFieldKey = Extract<
  keyof VirtualBackgroundUserInfo,
  | "department"
  | "section"
  | "group"
  | "role"
  | "role2"
  | "role3"
  | "other1"
  | "other2"
  | "other3"
  | "name"
  | "name_alpha"
  | "slack"
  | "email"
  | "phone"
>;

interface TextFieldConfig {
  id: TextFieldKey;
  key: TextFieldKey;
  placeholder: string;
  prefix?: string;
  type?: "email" | "tel" | "text";
  columnClass?: string;
}

interface TextFieldGroup {
  label: string;
  gridClass: string;
  fields: TextFieldConfig[];
}

const oneThirdColumnClass = "md:col-span-1";
const inputPrefixClass =
  "inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 px-3 text-sm text-gray-600";
const radioLabelClass =
  "cursor-pointer rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 select-none peer-checked:bg-gray-900 peer-checked:text-white hover:bg-gray-50";

const textFieldGroups: TextFieldGroup[] = [
  {
    label: "所属",
    gridClass: "md:grid-cols-4",
    fields: [
      {
        id: "department",
        key: "department",
        placeholder: "事業部を入力",
        columnClass: oneThirdColumnClass,
      },
      {
        id: "section",
        key: "section",
        placeholder: "セクションを入力",
        columnClass: oneThirdColumnClass,
      },
      {
        id: "group",
        key: "group",
        placeholder: "グループを入力",
        columnClass: oneThirdColumnClass,
      },
    ],
  },
  {
    label: "役職",
    gridClass: "md:grid-cols-4",
    fields: [
      {
        id: "role",
        key: "role",
        placeholder: "役職を入力",
        columnClass: oneThirdColumnClass,
      },
      {
        id: "role2",
        key: "role2",
        placeholder: "役職(2)",
        columnClass: oneThirdColumnClass,
      },
      {
        id: "role3",
        key: "role3",
        placeholder: "役職(3)",
        columnClass: oneThirdColumnClass,
      },
    ],
  },
  {
    label: "(予備)",
    gridClass: "md:grid-cols-4",
    fields: [
      {
        id: "other1",
        key: "other1",
        placeholder: "(予備1)",
        columnClass: oneThirdColumnClass,
      },
      {
        id: "other2",
        key: "other2",
        placeholder: "(予備2)",
        columnClass: oneThirdColumnClass,
      },
      {
        id: "other3",
        key: "other3",
        placeholder: "(予備3)",
        columnClass: oneThirdColumnClass,
      },
    ],
  },
  {
    label: "名前",
    gridClass: "md:grid-cols-3",
    fields: [
      {
        id: "name",
        key: "name",
        placeholder: "名前を入力",
        prefix: "大",
      },
      {
        id: "name_alpha",
        key: "name_alpha",
        placeholder: "名前(alphabet)を入力",
        prefix: "小",
      },
    ],
  },
  {
    label: "連絡先",
    gridClass: "md:grid-cols-4",
    fields: [
      {
        id: "slack",
        key: "slack",
        placeholder: "slackを入力",
        prefix: "Slack",
        columnClass: oneThirdColumnClass,
      },
      {
        id: "email",
        key: "email",
        placeholder: "メールアドレスを入力",
        prefix: "Mail",
        type: "email",
        columnClass: oneThirdColumnClass,
      },
      {
        id: "phone",
        key: "phone",
        placeholder: "電話番号を入力",
        prefix: "Tel",
        type: "tel",
        columnClass: oneThirdColumnClass,
      },
    ],
  },
];

const strengthRows = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
] as const;

const userInfo = defineModel<VirtualBackgroundUserInfo>({
  required: true,
});
</script>

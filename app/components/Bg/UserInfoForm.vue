<template>
  <form class="my-6 space-y-6">
    <!-- 所属 -->
    <div class="grid items-center gap-3 md:grid-cols-4">
      <label class="text-sm font-semibold text-gray-700">所属</label>

      <div class="flex rounded-lg shadow-sm md:col-span-1">
        <span
          class="inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 px-3 text-sm text-gray-600"
          >1</span
        >
        <input
          class="block w-full rounded-r-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          id="department"
          placeholder="事業部を入力"
          type="text"
          v-model="userInfo.department"
        />
      </div>

      <div class="flex rounded-lg shadow-sm md:col-span-1">
        <span
          class="inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 px-3 text-sm text-gray-600"
          >2</span
        >
        <input
          class="block w-full rounded-r-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          id="section"
          placeholder="セクションを入力"
          type="text"
          v-model="userInfo.section"
        />
      </div>

      <div class="flex rounded-lg shadow-sm md:col-span-1">
        <span
          class="inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 px-3 text-sm text-gray-600"
          >3</span
        >
        <input
          class="block w-full rounded-r-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          id="group"
          placeholder="グループを入力"
          type="text"
          v-model="userInfo.group"
        />
      </div>
    </div>

    <!-- 役職 -->
    <div class="grid items-center gap-3 md:grid-cols-4">
      <label class="text-sm font-semibold text-gray-700">役職</label>

      <div class="flex rounded-lg shadow-sm md:col-span-1">
        <span
          class="inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 px-3 text-sm text-gray-600"
          >1</span
        >
        <input
          class="block w-full rounded-r-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          id="role"
          placeholder="役職を入力"
          type="text"
          v-model="userInfo.role"
        />
      </div>

      <div class="flex rounded-lg shadow-sm md:col-span-1">
        <span
          class="inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 px-3 text-sm text-gray-600"
          >2</span
        >
        <input
          class="block w-full rounded-r-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          id="role2"
          placeholder="役職(2)"
          type="text"
          v-model="userInfo.role2"
        />
      </div>

      <div class="flex rounded-lg shadow-sm md:col-span-1">
        <span
          class="inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 px-3 text-sm text-gray-600"
          >3</span
        >
        <input
          class="block w-full rounded-r-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          id="role3"
          placeholder="役職(3)"
          type="text"
          v-model="userInfo.role3"
        />
      </div>
    </div>

    <!-- 予備 -->
    <div class="grid items-center gap-3 md:grid-cols-4">
      <label class="text-sm font-semibold text-gray-700">(予備)</label>

      <div class="flex rounded-lg shadow-sm md:col-span-1">
        <span
          class="inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 px-3 text-sm text-gray-600"
          >1</span
        >
        <input
          class="block w-full rounded-r-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          id="other1"
          placeholder="(予備1)"
          type="text"
          v-model="userInfo.other1"
        />
      </div>

      <div class="flex rounded-lg shadow-sm md:col-span-1">
        <span
          class="inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 px-3 text-sm text-gray-600"
          >2</span
        >
        <input
          class="block w-full rounded-r-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          id="other2"
          placeholder="(予備2)"
          type="text"
          v-model="userInfo.other2"
        />
      </div>

      <div class="flex rounded-lg shadow-sm md:col-span-1">
        <span
          class="inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 px-3 text-sm text-gray-600"
          >3</span
        >
        <input
          class="block w-full rounded-r-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          id="other3"
          placeholder="(予備3)"
          type="text"
          v-model="userInfo.other3"
        />
      </div>
    </div>

    <!-- 名前 -->
    <div class="grid items-center gap-3 md:grid-cols-3">
      <label class="text-sm font-semibold text-gray-700">名前</label>

      <div class="flex rounded-lg shadow-sm">
        <span
          class="inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 px-3 text-xs text-gray-600"
          >大</span
        >
        <input
          class="block w-full rounded-r-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          id="name"
          placeholder="名前を入力"
          type="text"
          v-model="userInfo.name"
        />
      </div>

      <div class="flex rounded-lg shadow-sm">
        <span
          class="inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 px-3 text-xs text-gray-600"
          >小</span
        >
        <input
          class="block w-full rounded-r-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          id="name_alpha"
          placeholder="名前(alphabet)を入力"
          type="text"
          v-model="userInfo.name_alpha"
        />
      </div>
    </div>

    <!-- 連絡先 -->
    <div class="grid items-center gap-3 md:grid-cols-4">
      <label class="text-sm font-semibold text-gray-700">連絡先</label>

      <div class="flex rounded-lg shadow-sm md:col-span-1">
        <span
          class="inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 px-3 text-sm text-gray-600"
          >Slack</span
        >
        <input
          class="block w-full rounded-r-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          id="slack"
          placeholder="slackを入力"
          type="text"
          v-model="userInfo.slack"
        />
      </div>

      <div class="flex rounded-lg shadow-sm md:col-span-1">
        <span
          class="inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 px-3 text-sm text-gray-600"
          >✉️</span
        >
        <input
          class="block w-full rounded-r-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          id="email"
          placeholder="メールアドレスを入力"
          type="email"
          v-model="userInfo.email"
        />
      </div>

      <div class="flex rounded-lg shadow-sm md:col-span-1">
        <span
          class="inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 px-3 text-sm text-gray-600"
          >☎️</span
        >
        <input
          class="block w-full rounded-r-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          id="phone"
          placeholder="電話番号を入力"
          type="tel"
          v-model="userInfo.phone"
        />
      </div>
    </div>

    <!-- ストレングスファインダー（位置＆言語） -->
    <div class="flex flex-wrap items-center gap-4">
      <span class="text-sm font-semibold text-gray-700"
        >ストレングスファインダー</span
      >

      <!-- 位置 -->
      <div class="flex flex-wrap gap-2">
        <label class="relative">
          <input
            class="peer hidden"
            id="position0"
            type="radio"
            v-model="userInfo.sf_position"
            value=""
          />
          <span
            class="cursor-pointer rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 select-none peer-checked:bg-gray-900 peer-checked:text-white hover:bg-gray-50"
          >
            表示なし
          </span>
        </label>
        <label class="relative">
          <input
            class="peer hidden"
            id="position1"
            type="radio"
            v-model="userInfo.sf_position"
            value="1"
          />
          <span
            class="cursor-pointer rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 select-none peer-checked:bg-gray-900 peer-checked:text-white hover:bg-gray-50"
          >
            ↖ 左上
          </span>
        </label>
        <label class="relative">
          <input
            class="peer hidden"
            id="position2"
            type="radio"
            v-model="userInfo.sf_position"
            value="2"
          />
          <span
            class="cursor-pointer rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 select-none peer-checked:bg-gray-900 peer-checked:text-white hover:bg-gray-50"
          >
            ↗ 右上
          </span>
        </label>
        <label class="relative">
          <input
            class="peer hidden"
            id="position3"
            type="radio"
            v-model="userInfo.sf_position"
            value="3"
          />
          <span
            class="cursor-pointer rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 select-none peer-checked:bg-gray-900 peer-checked:text-white hover:bg-gray-50"
          >
            ↙ 左下
          </span>
        </label>
        <label class="relative">
          <input
            class="peer hidden"
            id="position4"
            type="radio"
            v-model="userInfo.sf_position"
            value="4"
          />
          <span
            class="cursor-pointer rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 select-none peer-checked:bg-gray-900 peer-checked:text-white hover:bg-gray-50"
          >
            ↘ 右下
          </span>
        </label>
      </div>

      <!-- 言語 -->
      <div class="flex flex-wrap gap-2">
        <label class="relative">
          <input
            class="peer hidden"
            id="sf_lang_ja"
            type="radio"
            v-model="userInfo.sf_lang"
            value="ja"
          />
          <span
            class="cursor-pointer rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 select-none peer-checked:bg-gray-900 peer-checked:text-white hover:bg-gray-50"
          >
            Ja
          </span>
        </label>
        <label class="relative">
          <input
            class="peer hidden"
            id="sf_lang_en"
            type="radio"
            v-model="userInfo.sf_lang"
            value="en"
          />
          <span
            class="cursor-pointer rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 select-none peer-checked:bg-gray-900 peer-checked:text-white hover:bg-gray-50"
          >
            En
          </span>
        </label>
      </div>
    </div>

    <!-- ストレングス選択（1〜10） -->
    <div class="grid gap-2 sm:grid-cols-2 md:grid-cols-5">
      <div
        class="w-full"
        v-for="i in 5"
        :key="'sf-top-' + i"
      >
        <select
          class="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          v-model="userInfo.sf[i - 1]"
        >
          <option
            selected
            value=""
          ></option>
          <option
            v-for="row in strengthsList"
            :key="row.id"
          >
            {{ row.name }}
          </option>
        </select>
      </div>
    </div>

    <div class="grid gap-2 sm:grid-cols-2 md:grid-cols-5">
      <div
        class="w-full"
        v-for="i in 5"
        :key="'sf-bottom-' + i"
      >
        <select
          class="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          v-model="userInfo.sf[i + 4]"
        >
          <option
            selected
            value=""
          ></option>
          <option
            v-for="row in strengthsList"
            :key="row.id"
          >
            {{ row.name }}
          </option>
        </select>
      </div>
    </div>

    <!-- URL（QRコード） -->
    <div class="max-w-3xl">
      <label
        class="mb-1 block text-sm font-semibold text-gray-700"
        for="url"
        >URL (QRコード)</label
      >
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
interface StrengthsFinder {
  id: number;
  name: string;
  bg_color: string;
  color: string;
  english: string;
}

const strengthsList: StrengthsFinder[] = [
  {
    id: 1,
    name: "分析思考",
    bg_color: "#419262",
    color: "#000",
    english: "Analytical",
  },
  {
    id: 2,
    name: "原点思考",
    bg_color: "#419262",
    color: "#000",
    english: "Context",
  },
  {
    id: 3,
    name: "未来志向",
    bg_color: "#419262",
    color: "#000",
    english: "Futuristic",
  },
  {
    id: 4,
    name: "着想",
    bg_color: "#419262",
    color: "#000",
    english: "Ideation",
  },
  {
    id: 5,
    name: "収集心",
    bg_color: "#419262",
    color: "#000",
    english: "Input",
  },
  {
    id: 6,
    name: "内省",
    bg_color: "#419262",
    color: "#000",
    english: "Intellection",
  },
  {
    id: 7,
    name: "学習欲",
    bg_color: "#419262",
    color: "#000",
    english: "Learner",
  },
  {
    id: 8,
    name: "戦略性",
    bg_color: "#419262",
    color: "#000",
    english: "Strategic",
  },
  {
    id: 9,
    name: "適応性",
    bg_color: "#2f6ec4",
    color: "#fff",
    english: "Adaptability",
  },
  {
    id: 10,
    name: "運命思考",
    bg_color: "#2f6ec4",
    color: "#fff",
    english: "Connectedness",
  },
  {
    id: 11,
    name: "成長促進",
    bg_color: "#2f6ec4",
    color: "#fff",
    english: "Developer",
  },
  {
    id: 12,
    name: "共感性",
    bg_color: "#2f6ec4",
    color: "#fff",
    english: "Empathy",
  },
  {
    id: 13,
    name: "調和性",
    bg_color: "#2f6ec4",
    color: "#fff",
    english: "Harmony",
  },
  {
    id: 14,
    name: "包含",
    bg_color: "#2f6ec4",
    color: "#fff",
    english: "Includer",
  },
  {
    id: 15,
    name: "個別化",
    bg_color: "#2f6ec4",
    color: "#fff",
    english: "Individualization",
  },
  {
    id: 16,
    name: "ポジティブ",
    bg_color: "#2f6ec4",
    color: "#fff",
    english: "Positivity",
  },
  {
    id: 17,
    name: "親密性",
    bg_color: "#2f6ec4",
    color: "#fff",
    english: "Relator",
  },
  {
    id: 18,
    name: "活発性",
    bg_color: "#da792d",
    color: "#000",
    english: "Activator",
  },
  {
    id: 19,
    name: "指令性",
    bg_color: "#da792d",
    color: "#000",
    english: "Command",
  },
  {
    id: 20,
    name: "コミュニケーション",
    bg_color: "#da792d",
    color: "#000",
    english: "Communication",
  },
  {
    id: 21,
    name: "競争性",
    bg_color: "#da792d",
    color: "#000",
    english: "Competition",
  },
  {
    id: 22,
    name: "最上志向",
    bg_color: "#da792d",
    color: "#000",
    english: "Maximizer",
  },
  {
    id: 23,
    name: "自己確信",
    bg_color: "#da792d",
    color: "#000",
    english: "Self-Assurance",
  },
  {
    id: 24,
    name: "自我",
    bg_color: "#da792d",
    color: "#000",
    english: "Significance",
  },
  {
    id: 25,
    name: "社交性",
    bg_color: "#da792d",
    color: "#000",
    english: "Woo",
  },
  {
    id: 26,
    name: "達成欲",
    bg_color: "#712a7d",
    color: "#fff",
    english: "Achiever",
  },
  {
    id: 27,
    name: "アレンジ",
    bg_color: "#712a7d",
    color: "#fff",
    english: "Arranger",
  },
  {
    id: 28,
    name: "信念",
    bg_color: "#712a7d",
    color: "#fff",
    english: "Belief",
  },
  {
    id: 29,
    name: "公平性",
    bg_color: "#712a7d",
    color: "#fff",
    english: "Consistency",
  },
  {
    id: 30,
    name: "慎重さ",
    bg_color: "#712a7d",
    color: "#fff",
    english: "Deliberative",
  },
  {
    id: 31,
    name: "規律性",
    bg_color: "#712a7d",
    color: "#fff",
    english: "Discipline",
  },
  {
    id: 32,
    name: "目標志向",
    bg_color: "#712a7d",
    color: "#fff",
    english: "Focus",
  },
  {
    id: 33,
    name: "責任感",
    bg_color: "#712a7d",
    color: "#fff",
    english: "Responsibility",
  },
  {
    id: 34,
    name: "回復志向",
    bg_color: "#712a7d",
    color: "#fff",
    english: "Restorative",
  },
];

const userInfo = defineModel<{
  name: string;
  name_alpha: string;
  department: string;
  section: string;
  group: string;
  role: string;
  role2: string;
  role3: string;
  other1: string;
  other2: string;
  other3: string;
  email: string;
  phone: string;
  slack: string;
  url: string;
  sf_position: string;
  sf_lang: string;
  sf: string[];
}>({
  required: true,
});
</script>

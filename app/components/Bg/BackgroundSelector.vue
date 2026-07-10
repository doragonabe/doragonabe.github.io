<template>
  <div class="my-6">
    <div class="grid gap-6 md:grid-cols-3">
      <!-- 背景タイプ -->
      <div>
        <div class="flex flex-col gap-2">
          <button
            class="inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium transition"
            v-for="backgroundType in backgroundTypes"
            :class="
              backgroundType === selectedBackgroundType
                ? 'border-blue-600 bg-blue-600 text-white shadow'
                : 'border-blue-600 bg-white text-blue-600 hover:bg-blue-50'
            "
            :key="backgroundType"
            @click="selectedBackgroundType = backgroundType"
            type="button"
          >
            {{ backgroundType }}
          </button>
        </div>
      </div>

      <!-- ロゴタイプ -->
      <div>
        <div class="flex flex-col gap-2">
          <button
            class="inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium transition"
            v-for="logoType in logoTypes"
            :class="
              logoType === selectedLogoType
                ? 'border-rose-600 bg-rose-600 text-white shadow'
                : 'border-rose-600 bg-white text-rose-600 hover:bg-rose-50'
            "
            :key="logoType"
            @click="selectedLogoType = logoType"
            type="button"
          >
            {{ logoType }}
          </button>
        </div>
      </div>

      <!-- プレビュー（サムネイル） -->
      <div>
        <div class="flex flex-wrap items-start justify-center gap-2">
          <img
            class="m-1 h-auto w-[400px] cursor-pointer rounded-lg border-2 border-transparent bg-gray-100 p-2"
            alt="背景"
            :src="`/background/${selectedBackgroundType}-${selectedLogoType}.png`"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const backgroundTypes = ref(["tate", "yoko", "naname"]);
const logoTypes = ref(["iret", "cloudpack"]);

const selectedBackgroundType = defineModel<string>("selectedBackgroundType", {
  required: true,
});

const selectedLogoType = defineModel<string>("selectedLogoType", {
  required: true,
});
</script>

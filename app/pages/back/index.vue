<template>
  <div
    class="min-h-screen bg-white text-gray-900"
    id="app"
  >
    <header
      class="fixed inset-x-0 top-0 z-50 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/80"
    >
      <div class="mx-auto max-w-7xl px-4">
        <div class="flex h-16 items-center">
          <h1
            class="text-base font-semibold tracking-wide text-white sm:text-lg"
          >
            オンライン会議背景画像ジェネレータ
          </h1>
        </div>
      </div>
    </header>

    <!-- ヘッダー分の余白（固定ヘッダーのため） -->
    <main class="pt-24 pb-10">
      <div class="mx-auto max-w-7xl px-4">
        <BgBackgroundSelector
          v-model:selectedBackgroundType="selectedBackgroundType"
          v-model:selectedLogoType="selectedLogoType"
        />

        <BgUserInfoForm v-model="userInfo" />

        <BgPreview
          :backgroundType="selectedBackgroundType"
          :logoType="selectedLogoType"
          v-model="userInfo"
        />
      </div>
    </main>
  </div>
</template>
<script lang="ts" setup>
import type {
  BackgroundType,
  LogoType,
  VirtualBackgroundUserInfo,
} from "~/utils/virtualBackground";
import {
  DEFAULT_BACKGROUND_TYPE,
  DEFAULT_LOGO_TYPE,
  createInitialVirtualBackgroundUserInfo,
} from "~/utils/virtualBackground";

const selectedBackgroundType = ref<BackgroundType>(DEFAULT_BACKGROUND_TYPE);
const selectedLogoType = ref<LogoType>(DEFAULT_LOGO_TYPE);
const userInfo = ref<VirtualBackgroundUserInfo>(
  createInitialVirtualBackgroundUserInfo(),
);
</script>

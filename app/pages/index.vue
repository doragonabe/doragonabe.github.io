<template>
  <Title>トップ</Title>
  <section class="mb-8">
    <H2 class="mb-5">トップ</H2>
    <EyeCatchMenu />
  </section>
  <section class="mb-8">
    <H2 class="mb-5"> 更新情報・お知らせ </H2>
    <div class="px-5">
      <dl class="border-b border-[#ccc] sm:flex">
        <dt class="pr-12 tracking-[0.1em]">2022/06/18</dt>
        <dd class="[overflow-wrap:anywhere]">
          <span>ページ構成をNuxt3に変更</span>
          <span
            class="m-1 rounded-sm bg-red-500 px-1 py-0.5 align-middle text-xs text-white"
            >NEW</span
          >
        </dd>
      </dl>
      <dl class="border-b border-[#ccc] sm:flex">
        <dt class="pr-12 tracking-[0.1em]">2022/06/18</dt>
        <dd class="[overflow-wrap:anywhere]">
          <span>ページ構成をVue.jsに変更</span>
          <NuxtLink
            to="https://github.com/doragonabe/doragonabe.github.io/compare/5fde8318920d0dd67297f684704ac0a45730bb23%E2%80%A6b52b4158ddc941e75da9cf02ff9ac3bbafb88f47"
            target="_blank"
            external
            class="underline transition duration-500 hover:text-blue-500"
            >github差分</NuxtLink
          >
        </dd>
      </dl>
      <dl class="mt-5 border-b border-[#ccc] sm:flex">
        <dt class="pr-12 tracking-[0.1em]">2022/01/01</dt>
        <dd class="[overflow-wrap:anywhere]">
          <span>Q&Aページ更新</span>
          <NuxtLink
            to="https://github.com/doragonabe/doragonabe.github.io/compare/e425fb2614fee376f09b32289e02ad84ab2b13a3%E2%80%A62e6500ea1762ece0cc360e56e6411ca07dd4819f"
            target="_blank"
            external
            class="underline transition duration-500 hover:text-blue-500"
            >github差分</NuxtLink
          >
        </dd>
      </dl>
      <dl class="mt-5 border-b border-[#ccc] sm:flex">
        <dt class="pr-12 tracking-[0.1em]">2022/01/01</dt>
        <dd class="[overflow-wrap:anywhere]">
          <span>negaiサーバー紹介サイト限定URL公開</span>
        </dd>
      </dl>
    </div>
  </section>
  <section>
    <H2 class="mb-5">X</H2>
    <TwitterTimeline
      v-if="useIncludes(['github'], useRuntimeConfig().public.appEnv)"
      url="minecraftjapan"
      :dataChrome="['noheader', 'nofooter', 'noborders', 'transparent']"
      :dataTweetLimit="4"
    />
  </section>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "app",
});
</script>

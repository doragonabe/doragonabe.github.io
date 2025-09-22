<template>
  <div class="h2_contents grid grid-cols-3 gap-x-4 gap-y-4 px-4">
    <div
      class="list h-full w-full rounded-sm border border-stone-400/55 bg-white p-[6%] shadow-[0.1875rem_0.25rem_0.125rem_rgba(0,0,0,0.1)]"
    >
      <NuxtLink
        class="block hover:relative hover:top-px hover:left-px"
        :to="{ name: 'index' }"
        @click="useScrollTo('#main')"
      >
        <figure class="aspect-1000/665">
          <img
            src="~/assets/images/1000x665.png"
            alt=""
          />
        </figure>
        <p class="text-center text-[clamp(1rem,3vw,1.375rem)] text-blue-600">
          トップ
        </p>
        <p
          class="relative min-h-15 text-[clamp(0.625rem,3vw,1rem)] break-all text-black/80"
        >
          <img
            class="absolute right-0 bottom-0 h-10 w-10"
            src="~/assets/images/arrow1.svg"
            alt=""
          />
        </p>
      </NuxtLink>
    </div>

    <div
      class="list h-full w-full rounded-sm border border-stone-400/55 bg-white p-[6%] shadow-[0.1875rem_0.25rem_0.125rem_rgba(0,0,0,0.1)]"
    >
      <NuxtLink
        class="block hover:relative hover:top-px hover:left-px"
        :to="{ name: 'server_rules' }"
        @click="useScrollTo('#main')"
      >
        <figure class="aspect-1000/665">
          <img
            src="~/assets/images/1000x665.png"
            alt=""
          />
        </figure>
        <p class="text-center text-[clamp(1rem,3vw,1.375rem)] text-blue-600">
          サーバールール
        </p>
        <p
          class="relative min-h-15 text-[clamp(0.625rem,3vw,1rem)] break-all text-black/80"
        >
          <img
            class="absolute right-0 bottom-0 h-10 w-10"
            src="~/assets/images/arrow1.svg"
            alt=""
          />
        </p>
      </NuxtLink>
    </div>

    <div
      class="list h-full w-full rounded-sm border border-stone-400/55 bg-white p-[6%] shadow-[0.1875rem_0.25rem_0.125rem_rgba(0,0,0,0.1)]"
    >
      <NuxtLink
        class="block hover:relative hover:top-px hover:left-px"
        :to="{ name: 'server_introduction' }"
        @click="useScrollTo('#main')"
      >
        <figure class="aspect-1000/665">
          <img
            src="~/assets/images/1000x665.png"
            alt=""
          />
        </figure>
        <p class="text-center text-[clamp(1rem,3vw,1.375rem)] text-blue-600">
          サーバー紹介
        </p>
        <p
          class="relative min-h-15 text-[clamp(0.625rem,3vw,1rem)] break-all text-black/80"
        >
          <img
            class="absolute right-0 bottom-0 h-10 w-10"
            src="~/assets/images/arrow1.svg"
            alt=""
          />
        </p>
      </NuxtLink>
    </div>

    <div
      class="list h-full w-full rounded-sm border border-stone-400/55 bg-white p-[6%] shadow-[0.1875rem_0.25rem_0.125rem_rgba(0,0,0,0.1)]"
    >
      <NuxtLink
        class="block hover:relative hover:top-px hover:left-px"
        :to="{ name: 'server_specifications' }"
        @click="useScrollTo('#main')"
      >
        <figure class="aspect-1000/665">
          <img
            src="~/assets/images/1000x665.png"
            alt=""
          />
        </figure>
        <p class="text-center text-[clamp(1rem,3vw,1.375rem)] text-blue-600">
          サーバー仕様
        </p>
        <p
          class="relative min-h-15 text-[clamp(0.625rem,3vw,1rem)] break-all text-black/80"
        >
          <img
            class="absolute right-0 bottom-0 h-10 w-10"
            src="~/assets/images/arrow1.svg"
            alt=""
          />
        </p>
      </NuxtLink>
    </div>

    <div
      class="list h-full w-full rounded-sm border border-stone-400/55 bg-white p-[6%] shadow-[0.1875rem_0.25rem_0.125rem_rgba(0,0,0,0.1)]"
    >
      <NuxtLink
        class="block hover:relative hover:top-px hover:left-px"
        :to="{ name: 'q_and_a' }"
        @click="useScrollTo('#main')"
      >
        <figure class="aspect-1000/665">
          <img
            src="~/assets/images/1000x665.png"
            alt=""
          />
        </figure>
        <p class="text-center text-[clamp(1rem,3vw,1.375rem)] text-blue-600">
          Q & A
        </p>
        <p
          class="relative min-h-15 text-[clamp(0.625rem,3vw,1rem)] break-all text-black/80"
        >
          <img
            class="absolute right-0 bottom-0 h-10 w-10"
            src="~/assets/images/arrow1.svg"
            alt=""
          />
        </p>
      </NuxtLink>
    </div>

    <div
      class="list h-full w-full rounded-sm border border-stone-400/55 bg-white p-[6%] shadow-[0.1875rem_0.25rem_0.125rem_rgba(0,0,0,0.1)]"
    >
      <NuxtLink
        class="block hover:relative hover:top-px hover:left-px"
        to="http://soarerserver.mydns.jp:8123/"
        target="_blank"
        external
      >
        <figure class="aspect-1000/665">
          <img
            src="~/assets/images/1000x665.png"
            alt=""
          />
        </figure>
        <p class="text-center text-[clamp(1rem,3vw,1.375rem)] text-blue-600">
          dynmap
        </p>
        <p
          class="relative min-h-15 text-[clamp(0.625rem,3vw,1rem)] break-all text-black/80"
        >
          ※外部リンク
          <img
            class="absolute right-0 bottom-0 h-10 w-10"
            src="~/assets/images/arrow1.svg"
            alt=""
          />
        </p>
      </NuxtLink>
    </div>

    <div
      class="list h-full w-full rounded-sm border border-stone-400/55 bg-white p-[6%] shadow-[0.1875rem_0.25rem_0.125rem_rgba(0,0,0,0.1)]"
    >
      <NuxtLink
        class="block hover:relative hover:top-px hover:left-px"
        :to="{ name: 'unique_function' }"
        @click="useScrollTo('#main')"
      >
        <figure class="aspect-1000/665">
          <img
            src="~/assets/images/1000x665.png"
            alt=""
          />
        </figure>
        <p class="text-center text-[clamp(1rem,3vw,1.375rem)] text-blue-600">
          独自機能
        </p>
        <p
          class="relative min-h-15 text-[clamp(0.625rem,3vw,1rem)] break-all text-black/80"
        >
          <img
            class="absolute right-0 bottom-0 h-10 w-10"
            src="~/assets/images/arrow1.svg"
            alt=""
          />
        </p>
      </NuxtLink>
    </div>

    <div
      class="list h-full w-full rounded-sm border border-stone-400/55 bg-white p-[6%] shadow-[0.1875rem_0.25rem_0.125rem_rgba(0,0,0,0.1)]"
    >
      <NuxtLink
        class="block hover:relative hover:top-px hover:left-px"
        :to="{ name: 'original_recipes' }"
        @click="useScrollTo('#main')"
      >
        <figure class="aspect-1000/665">
          <img
            src="~/assets/images/1000x665.png"
            alt=""
          />
        </figure>
        <p class="text-center text-[clamp(1rem,3vw,1.375rem)] text-blue-600">
          独自レシピ
        </p>
        <p
          class="relative min-h-15 text-[clamp(0.625rem,3vw,1rem)] break-all text-black/80"
        >
          <img
            class="absolute right-0 bottom-0 h-10 w-10"
            src="~/assets/images/arrow1.svg"
            alt=""
          />
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<template>
  <div class="h2_contents grid grid-cols-3 gap-x-4 gap-y-4 px-4">
    <div
      class="list h-full w-full rounded-sm border border-[#ccc] bg-white p-[6%] shadow-[0.1875rem_0.25rem_0.125rem_rgba(0,0,0,0.1)]"
    >
      <NuxtLink
        :to="{ name: 'index' }"
        @click="useScrollTo('#main')"
        class="block hover:relative hover:top-px hover:left-px"
      >
        <figure class="aspect-[1000/665]">
          <img
            alt="トップ"
            src="~/assets/images/1000x665.png"
          />
        </figure>
        <h4 class="text-center text-[clamp(1rem,3vw,1.375rem)] text-blue-500">
          トップ
        </h4>
        <p
          class="relative min-h-15 text-[clamp(0.625rem,3vw,1rem)] break-all text-[#333]"
        >
          <img
            alt=""
            src="~/assets/images/arrow1.svg"
            class="absolute right-0 bottom-0 h-10 w-10"
          />
        </p>
      </NuxtLink>
    </div>

    <div
      class="list h-full w-full rounded-sm border border-[#ccc] bg-white p-[6%] shadow-[0.1875rem_0.25rem_0.125rem_rgba(0,0,0,0.1)]"
    >
      <NuxtLink
        :to="{ name: 'server_rules' }"
        @click="useScrollTo('#main')"
        class="block hover:relative hover:top-px hover:left-px"
      >
        <figure class="aspect-[1000/665]">
          <img
            alt="サーバールール"
            src="~/assets/images/1000x665.png"
          />
        </figure>
        <h4 class="text-center text-[clamp(1rem,3vw,1.375rem)] text-blue-500">
          サーバールール
        </h4>
        <p
          class="relative min-h-15 text-[clamp(0.625rem,3vw,1rem)] break-all text-[#333]"
        >
          <img
            alt=""
            src="~/assets/images/arrow1.svg"
            class="absolute right-0 bottom-0 h-10 w-10"
          />
        </p>
      </NuxtLink>
    </div>

    <div
      class="list h-full w-full rounded-sm border border-[#ccc] bg-white p-[6%] shadow-[0.1875rem_0.25rem_0.125rem_rgba(0,0,0,0.1)]"
    >
      <NuxtLink
        :to="{ name: 'server_introduction' }"
        @click="useScrollTo('#main')"
        class="block hover:relative hover:top-px hover:left-px"
      >
        <figure class="aspect-[1000/665]">
          <img
            alt="サーバー紹介"
            src="~/assets/images/1000x665.png"
          />
        </figure>
        <h4 class="text-center text-[clamp(1rem,3vw,1.375rem)] text-blue-500">
          サーバー紹介
        </h4>
        <p
          class="relative min-h-15 text-[clamp(0.625rem,3vw,1rem)] break-all text-[#333]"
        >
          <img
            alt=""
            src="~/assets/images/arrow1.svg"
            class="absolute right-0 bottom-0 h-10 w-10"
          />
        </p>
      </NuxtLink>
    </div>

    <div
      class="list h-full w-full rounded-sm border border-[#ccc] bg-white p-[6%] shadow-[0.1875rem_0.25rem_0.125rem_rgba(0,0,0,0.1)]"
    >
      <NuxtLink
        :to="{ name: 'server_specifications' }"
        @click="useScrollTo('#main')"
        class="block hover:relative hover:top-px hover:left-px"
      >
        <figure class="aspect-[1000/665]">
          <img
            alt="サーバー仕様"
            src="~/assets/images/1000x665.png"
          />
        </figure>
        <h4 class="text-center text-[clamp(1rem,3vw,1.375rem)] text-blue-500">
          サーバー仕様
        </h4>
        <p
          class="relative min-h-15 text-[clamp(0.625rem,3vw,1rem)] break-all text-[#333]"
        >
          <img
            alt=""
            src="~/assets/images/arrow1.svg"
            class="absolute right-0 bottom-0 h-10 w-10"
          />
        </p>
      </NuxtLink>
    </div>

    <div
      class="list h-full w-full rounded-sm border border-[#ccc] bg-white p-[6%] shadow-[0.1875rem_0.25rem_0.125rem_rgba(0,0,0,0.1)]"
    >
      <NuxtLink
        :to="{ name: 'q_and_a' }"
        @click="useScrollTo('#main')"
        class="block hover:relative hover:top-px hover:left-px"
      >
        <figure class="aspect-[1000/665]">
          <img
            alt="Q & A"
            src="~/assets/images/1000x665.png"
          />
        </figure>
        <h4 class="text-center text-[clamp(1rem,3vw,1.375rem)] text-blue-500">
          Q & A
        </h4>
        <p
          class="relative min-h-15 text-[clamp(0.625rem,3vw,1rem)] break-all text-[#333]"
        >
          <img
            alt=""
            src="~/assets/images/arrow1.svg"
            class="absolute right-0 bottom-0 h-10 w-10"
          />
        </p>
      </NuxtLink>
    </div>

    <div
      class="list h-full w-full rounded-sm border border-[#ccc] bg-white p-[6%] shadow-[0.1875rem_0.25rem_0.125rem_rgba(0,0,0,0.1)]"
    >
      <NuxtLink
        to="http://soarerserver.mydns.jp:8123/"
        target="_blank"
        external
        class="block hover:relative hover:top-px hover:left-px"
      >
        <figure class="aspect-[1000/665]">
          <img
            alt="dynmap"
            src="~/assets/images/1000x665.png"
          />
        </figure>
        <h4 class="text-center text-[clamp(1rem,3vw,1.375rem)] text-blue-500">
          dynmap
        </h4>
        <p
          class="relative min-h-15 text-[clamp(0.625rem,3vw,1rem)] break-all text-[#333]"
        >
          ※外部リンク
          <img
            alt=""
            src="~/assets/images/arrow1.svg"
            class="absolute right-0 bottom-0 h-10 w-10"
          />
        </p>
      </NuxtLink>
    </div>

    <div
      class="list h-full w-full rounded-sm border border-[#ccc] bg-white p-[6%] shadow-[0.1875rem_0.25rem_0.125rem_rgba(0,0,0,0.1)]"
    >
      <NuxtLink
        :to="{ name: 'unique_function' }"
        @click="useScrollTo('#main')"
        class="block hover:relative hover:top-px hover:left-px"
      >
        <figure class="aspect-[1000/665]">
          <img
            alt="独自機能"
            src="~/assets/images/1000x665.png"
          />
        </figure>
        <h4 class="text-center text-[clamp(1rem,3vw,1.375rem)] text-blue-500">
          独自機能
        </h4>
        <p
          class="relative min-h-15 text-[clamp(0.625rem,3vw,1rem)] break-all text-[#333]"
        >
          <img
            alt=""
            src="~/assets/images/arrow1.svg"
            class="absolute right-0 bottom-0 h-10 w-10"
          />
        </p>
      </NuxtLink>
    </div>

    <div
      class="list h-full w-full rounded-sm border border-[#ccc] bg-white p-[6%] shadow-[0.1875rem_0.25rem_0.125rem_rgba(0,0,0,0.1)]"
    >
      <NuxtLink
        :to="{ name: 'original_recipes' }"
        @click="useScrollTo('#main')"
        class="block hover:relative hover:top-px hover:left-px"
      >
        <figure class="aspect-[1000/665]">
          <img
            alt="独自レシピ"
            src="~/assets/images/1000x665.png"
          />
        </figure>
        <h4 class="text-center text-[clamp(1rem,3vw,1.375rem)] text-blue-500">
          独自レシピ
        </h4>
        <p
          class="relative min-h-15 text-[clamp(0.625rem,3vw,1rem)] break-all text-[#333]"
        >
          <img
            alt=""
            src="~/assets/images/arrow1.svg"
            class="absolute right-0 bottom-0 h-10 w-10"
          />
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

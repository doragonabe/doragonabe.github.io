<template>
  <div class="h2_contents grid grid-cols-3 gap-[2%] px-[2%]">
    <div
      class="list h-full w-full rounded-sm border border-[#ccc] bg-white p-[6%] shadow-[0.1875rem_0.25rem_0.125rem_rgba(0,0,0,0.1)]"
    >
      <NuxtLink
        to="http://soarerserver.mydns.jp:8123/"
        target="_blank"
        external
        class="block hover:relative hover:left-px hover:top-px"
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
        <p class="min-h-12 text-[clamp(0.625rem,3vw,1rem)] text-[#333]">
          ※外部リンク
        </p>
        <figure style="text-align: -webkit-right">
          <img
            alt=""
            src="~/assets/images/arrow1.svg"
            class="h-10 w-10"
          />
        </figure>
      </NuxtLink>
    </div>
    <div
      class="list h-full w-full rounded-sm border border-[#ccc] bg-white p-[6%] shadow-[0.1875rem_0.25rem_0.125rem_rgba(0,0,0,0.1)]"
    >
      <NuxtLink
        :to="{ name: 'unique_function' }"
        @click="useScrollTo('#main')"
        class="block hover:relative hover:left-px hover:top-px"
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
        <p class="min-h-12 text-[clamp(0.625rem,3vw,1rem)] text-[#333]"></p>
        <figure style="text-align: -webkit-right">
          <img
            alt=""
            src="~/assets/images/arrow1.svg"
            class="h-10 w-10"
          />
        </figure>
      </NuxtLink>
    </div>
    <div
      class="list h-full w-full rounded-sm border border-[#ccc] bg-white p-[6%] shadow-[0.1875rem_0.25rem_0.125rem_rgba(0,0,0,0.1)]"
    >
      <NuxtLink
        :to="{ name: 'original_recipes' }"
        @click="useScrollTo('#main')"
        class="block hover:relative hover:left-px hover:top-px"
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
        <p class="min-h-12 text-[clamp(0.625rem,3vw,1rem)] text-[#333]"></p>
        <figure style="text-align: -webkit-right">
          <img
            alt=""
            src="~/assets/images/arrow1.svg"
            class="h-10 w-10"
          />
        </figure>
      </NuxtLink>
    </div>
  </div>
</template>

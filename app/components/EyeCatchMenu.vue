<template>
  <div class="h2_contents px-[2%] grid">
    <div class="list p-[6%] w-full h-full">
      <NuxtLink to="http://soarerserver.mydns.jp:8123/" target="_blank" external>
        <figure class="aspect-[1000/665]">
          <img alt="dynmap" src="~/assets/images/1000x665.png" loading="lazy" />
        </figure>
        <h4>dynmap</h4>
        <p class="h-12">※外部リンク</p>
        <figure style="text-align: -webkit-right;">
          <img alt="arrow1" src="~/assets/images/arrow1.png" loading="lazy" width="40" height="40" />
        </figure>
      </NuxtLink>
    </div>
    <div class="list p-[6%] w-full h-full">
      <NuxtLink :to="{ name: 'unique_function' }" @click="useScrollTo('#main')">
        <figure class="aspect-[1000/665]">
          <img alt="独自機能" src="~/assets/images/1000x665.png" loading="lazy" />
        </figure>
        <h4>独自機能</h4>
        <p class="h-12"></p>
        <figure style="text-align: -webkit-right;">
          <img alt="arrow1" src="~/assets/images/arrow1.png" loading="lazy" width="40" height="40" />
        </figure>
      </NuxtLink>
    </div>
    <div class="list p-[6%] w-full h-full">
      <NuxtLink :to="{ name: 'original_recipes' }" @click="useScrollTo('#main')">
        <figure class="aspect-[1000/665]">
          <img alt="独自レシピ" src="~/assets/images/1000x665.png" loading="lazy" />
        </figure>
        <h4>独自レシピ</h4>
        <p class="h-12"></p>
        <figure style="text-align: -webkit-right;">
          <img alt="arrow1" src="~/assets/images/arrow1.png" loading="lazy" width="40" height="40" />
        </figure>
      </NuxtLink>
    </div>
  </div>
</template>

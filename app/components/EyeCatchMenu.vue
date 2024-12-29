<template>
  <div class="h2_contents px-[2%] grid">
    <div class="list p-[6%] w-full h-full">
      <NuxtLink
        to="http://soarerserver.mydns.jp:8123/"
        target="_blank"
        external
      >
        <figure class="aspect-[1000/665]">
          <img
            alt="dynmap"
            src="~/assets/images/1000x665.png"
          />
        </figure>
        <h4>dynmap</h4>
        <p class="h-24">※外部リンク</p>
      </NuxtLink>
    </div>
    <div class="list p-[6%] w-full h-full">
      <NuxtLink
        :to="{ name: 'unique_function' }"
        @click="useScrollTo('#main')"
      >
        <figure class="aspect-[1000/665]">
          <img
            alt="独自機能"
            src="~/assets/images/1000x665.png"
          />
        </figure>
        <h4>独自機能</h4>
        <p class="h-24"></p>
      </NuxtLink>
    </div>
    <div class="list p-[6%] w-full h-full">
      <NuxtLink
        :to="{ name: 'original_recipes' }"
        @click="useScrollTo('#main')"
      >
        <figure class="aspect-[1000/665]">
          <img
            alt="独自レシピ"
            src="~/assets/images/1000x665.png"
          />
        </figure>
        <h4>独自レシピ</h4>
        <p class="h-24"></p>
      </NuxtLink>
    </div>
  </div>
</template>

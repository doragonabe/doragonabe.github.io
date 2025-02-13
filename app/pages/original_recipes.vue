<template>
  <Title>独自レシピ</Title>
  <section class="mb-8">
    <H2 class="mb-5">独自レシピ</H2>
    <EyeCatchMenu />
  </section>
  <section>
    <H2 class="mb-5">レシピ一覧</H2>
    <H3 class="mb-2">バンドル</H3>
    <div class="pb-5 px-5">
      <p>
        <span>1.19のバージョン時点では、アイテムID自体は存在するものの、</span><br />
        <span>レシピが実装されていないため作りました。</span>
      </p>
      <RecipesBundle />
    </div>

    <H3 class="mb-2">エンチャントの瓶</H3>
    <div class="pb-5 px-5">
      <p>
        <span>経験値を10消費して、エンチャントの瓶を作ることができます。</span>
      </p>
      <RecipesXpBottle />
    </div>
    <H3 class="mb-2">牛肉</H3>
    <div class="pb-5 px-5">
      <p>ゾンビ肉を焼くと、40%の確率で牛肉になります。</p>
    </div>
  </section>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "app",
});
</script>

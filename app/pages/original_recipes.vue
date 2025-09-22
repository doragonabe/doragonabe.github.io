<template>
  <Title>独自レシピ</Title>

  <section class="mb-3 pt-5">
    <H2 class="mb-5">メニュー</H2>
    <EyeCatchMenu />
  </section>

  <section
    class="mb-3 pt-5"
    id="main"
  >
    <H2 class="mb-5">レシピ一覧</H2>
    <SubSection
      class="mb-2"
      title="バンドル"
    >
      <p>
        <span>1.19のバージョン時点では、アイテムID自体は存在するものの、</span
        ><br />
        <span>レシピが実装されていないため作りました。</span>
      </p>
      <RecipesBundle />
    </SubSection>

    <SubSection
      class="mb-2"
      title="エンチャントの瓶"
    >
      <p>
        <span>経験値を10消費して、エンチャントの瓶を作ることができます。</span>
      </p>
      <RecipesXpBottle />
    </SubSection>

    <SubSection
      class="mb-2"
      title="牛肉"
    >
      <p>ゾンビ肉を焼くと、40%の確率で牛肉になります。</p>
    </SubSection>
  </section>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "app",
});
</script>

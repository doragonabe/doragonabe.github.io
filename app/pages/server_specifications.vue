<template>
  <Title>サーバー仕様</Title>

  <section
    id="main"
    class="mb-3 pt-5"
  >
    <H2 class="mb-5">メニュー</H2>
    <EyeCatchMenu />
  </section>

  <section class="mb-3 pt-5">
    <H2 class="mb-5">サーバー仕様</H2>
    <SubSection
      title="サーバー設定"
      class="mb-2"
    >
      <p>植物などの成長速度が3倍</p>
    </SubSection>
  </section>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "app",
});
</script>

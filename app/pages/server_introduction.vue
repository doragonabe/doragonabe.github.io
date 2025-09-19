<template>
  <Title>サーバー紹介</Title>

  <section class="mb-8">
    <H2 class="mb-5">メニュー</H2>
    <EyeCatchMenu />
  </section>

  <section>
    <H2 class="mb-5">サーバー紹介</H2>
    <p class="px-5 pb-5">
      <span>とてもつよいnegaiサーバーだよ</span><br />
      <span>1.19に更新</span>
    </p>

    <SubSection
      title="無限化施設素材一覧"
      class="mb-2"
    >
      <p>
        <span>サトウキビ</span><br />
        <span>鉄</span>
        <!--
          <span>丸石</span><br>
          <span>羊毛</span><br>
          <span>砂</span><br>
          <span>サボテン</span><br>
          <span>エンダーパール</span><br>
          <span>ウィザーローズ</span><br>
          <span>金</span>
        -->
      </p>
    </SubSection>

    <SubSection
      title="取引可能村人一覧"
      class="mb-2"
    >
      <table>
        <tbody>
          <tr>
            <td>耐久Ⅲ</td>
            <td>エメラルド45個</td>
          </tr>
        </tbody>
      </table>
    </SubSection>
  </section>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "app",
});
</script>

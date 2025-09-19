<template>
  <Title>Q & A</Title>

  <section class="mb-3 pt-5">
    <H2 class="mb-5">メニュー</H2>
    <EyeCatchMenu />
  </section>

  <section
    id="main"
    class="mb-3 pt-5"
  >
    <H2 class="mb-5">Q & A</H2>
    <SubSection
      title="入ったらまず何をすればいい？"
      class="mb-2"
    >
      <p>
        <span>メインワールドではお好きなところに建築してOK</span><br />
        <span>採掘や敵MOBとの戦闘が行いたければ採掘ワールドへ(現在削除)</span
        ><br />
        <span>採掘ワールドでは、不定期でリセットされる可能性があるため、</span
        ><br />
        <span>採掘ワールドでの建築やログアウトは非推奨です。</span>
      </p>
    </SubSection>

    <SubSection
      title="活動予定について"
      class="mb-2"
    >
      <p>
        <span>現在メインワールドの整地作業を行っています。</span><br />
        <span>作業員募集中。</span><br />
        <span
          >メインワールドの整地終了後はTTワールドの整地作業を行う予定です。</span
        >
      </p>
    </SubSection>

    <SubSection
      title="このサイトについて"
      class="mb-2"
    >
      <p>
        <span>本サイトはGitHub Pagesを使用して作成されています。</span><br />
        <NuxtLink
          to="https://github.com/doragonabe/doragonabe.github.io"
          target="_blank"
          external
          class="break-all underline transition duration-500 hover:text-blue-500"
        >
          https://github.com/doragonabe/doragonabe.github.io</NuxtLink
        >
        <span
          >にアップロードされたソースコードがそのまま反映されているので、</span
        >
        <span
          >このサイト自体がどうやって作られているのか気になる方はどうぞ。</span
        ><br />
        <span
          >デザイン崩れや、誤字などを見つけましたらいつものdiscordにてご連絡ください。</span
        >
      </p>
    </SubSection>

    <SubSection
      title="サイト仕様"
      class="mb-2"
    >
      <ol>
        <li>
          <h4>シングルページ構造</h4>
          <span
            >本サイトはシングルページ構造を基盤に作成しています。そのため、画面遷移することなくサクサクと画面切り替えができます。</span
          ><br />
        </li>
        <li>
          <h4>レスポンシブ対応</h4>
          <span
            >本サイトは画面幅のサイズに応じてデザイン構成を少し変えています。</span
          ><br />
          <span
            >そのため、PC、モバイル環境問わず自然な形になるようなデザインを意識しています。</span
          >
        </li>
        <li>
          <h4>サイドメニュー一覧について</h4>
          <span
            >PCサイズ表示ではサイドメニューは左側に設置しており、スクロール時に追従するようになっております。</span
          ><br />
          <span
            >もしサイドメニューの高さよりも、ブラウザのウィンドウ縦幅が低かった場合のケースにも対応しております。</span
          >
          <br />
          <br />
          <span
            >スマホ、タブレットサイズ表示では、右上に追従式のハンバーガーメニューを設置しており、</span
          ><br />
          <span>そこから画面切り替えが行えるようになっております。</span>
        </li>
      </ol>
    </SubSection>
  </section>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "app",
});
</script>

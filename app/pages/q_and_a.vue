<template>
  <Title>Q & A</Title>
  <section>
    <H2 class="mb-5">Q & A</H2>
    <H3 class="mb-2">入ったらまず何をすればいい？</H3>
    <div class="px-5 pb-5">
      <p>
        <span>メインワールドではお好きなところに建築してOK</span><br />
        <span>採掘や敵MOBとの戦闘が行いたければ採掘ワールドへ(現在削除)</span
        ><br />
        <span>採掘ワールドでは、不定期でリセットされる可能性があるため、</span
        ><br />
        <span>採掘ワールドでの建築やログアウトは非推奨です。</span>
      </p>
    </div>

    <H3 class="mb-2">活動予定について</H3>
    <div class="px-5 pb-5">
      <p>
        <span>現在メインワールドの整地作業を行っています。</span><br />
        <span>作業員募集中。</span><br />
        <span
          >メインワールドの整地終了後はTTワールドの整地作業を行う予定です。</span
        >
      </p>
    </div>

    <H3 class="mb-2">このサイトについて</H3>
    <div class="px-5 pb-5">
      <p>
        <span>本サイトはGitHub Pagesを使用して作成されています。</span><br />
        <NuxtLink
          to="https://github.com/doragonabe/doragonabe.github.io"
          target="_blank"
          external
          class="underline transition duration-500 hover:text-blue-500"
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
    </div>

    <H3 class="mb-2">サイト仕様</H3>
    <div class="px-5 pb-5">
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
    </div>
  </section>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "app",
});
</script>

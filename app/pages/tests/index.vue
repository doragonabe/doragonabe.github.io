<template>
  <h3>各機能に役立ちそうなサンプルの一覧</h3>
  <ul>
    <li>
      <NuxtLink :to="{ name: 'tests-use_state1' }"
        >ページを跨る値保持のサンプル1 useState</NuxtLink
      >
    </li>
    <li>
      <NuxtLink :to="{ name: 'tests-use_state2' }"
        >ページを跨る値保持のサンプル2 useState</NuxtLink
      >
    </li>
    <li>
      <NuxtLink :to="{ name: 'tests-twitter_timeline' }"
        >Twitterタイムライン表示サンプル</NuxtLink
      >
    </li>
    <li>
      <NuxtLink :to="{ name: 'tests-audio' }"
        >音声認識 SpeechRecognition</NuxtLink
      >
    </li>
    <li>
      <NuxtLink :to="{ name: 'tests-color_mode' }"
        >カラーモード切り替え</NuxtLink
      >
    </li>
    <li>
      <NuxtLink :to="{ name: 'tests-mermaid' }"
        >Markdownテキストチャート・グラフ Mermaid</NuxtLink
      >
    </li>
  </ul>
</template>

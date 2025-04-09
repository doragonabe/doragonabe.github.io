<template>
  <h3>Markdownテキストチャート・グラフ Mermaid</h3>
  <NuxtLink :to="{ name: 'tests' }">戻る</NuxtLink>
  <br />
  <Mermaid
    v-html="
      `
      sequenceDiagram
      クライアント->>Skript: ブロックを破壊
      Skript-->Skript: 変数がtrueかどうか
      Skript-->Skript: トリガーのブロックからy-1のブロックを削除
      Skript-->Skript: 削除したブロックをドロップ
      Skript->>クライアント: 処理終了
    `
    "
  />
</template>

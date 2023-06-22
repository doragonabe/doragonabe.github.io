# 初期環境構築メモ

nuxt3インストール
```bash
npx nuxi init nuxt3-app

cd nuxt3-app

pnpm install
```

package.jsonに追加（間違ってnpmやyarnでインストールされないようにするため）
```
"scripts": {
"preinstall": "npx only-allow pnpm",
}
```

app.vueを以下に修正
```html
<template>
  <div>
    <NuxtPage />
  </div>
</template>
```

Twitterウィジェット用
```bash
pnpm add @vueuse/core
```

スライド画像用
```bash
pnpm add nuxt-swiper
```

モバイル表示 ハンバーガーメニュー用
```bash
pnpm add mmenu-js
```

GitHub Pages公開用
```bash
pnpm add -D gh-pages
```

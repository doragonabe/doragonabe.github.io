# 環境初期構築メモ

## 1. mise インストール

```bash
brew install mise
echo 'eval "$(~/.local/bin/mise activate zsh)"' >> ~/.zshrc
echo 'eval "$(mise activate zsh --shims)"' >> ~/.zprofile
```

## 2. Nuxt3 インストール

```bash
pnpx nuxi init nuxt3-app --packageManager pnpm --gitInit false
cd nuxt3-app
pnpm install
```

## 3. package.json 修正

package.json に追加（間違って npm や yarn でインストールされないようにするため）

```json
{
  "scripts": {
    "preinstall": "pnpx only-allow pnpm"
  }
}
```

## 6. app.vue 修正

app.vue を以下に修正

```html
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
```

## 7. パッケージ追加

### 初期パッケージ

```text
nuxt
vue
vue-router
```

### 自動コードフォーマッター

```bash
pnpm add -D prettier @biomejs/biome
```

### 静的解析用

```bash
pnpm add -D vue-tsc
```

### SCSS

```bash
pnpm add -D sass-embedded
```

### ブラウザ判定に使用

```bash
pnpm add bowser
```

### bignumber.js

```bash
pnpm add bignumber.js
```

### yup

```bash
pnpm add yup
```

### sanitize-html

```bash
pnpm add -D sanitize-html @types/sanitize-html
```

### VueUse

<https://vueuse.org/functions.html>
<https://vueuse.org/nuxt/README.html>

```bash
pnpm add -D @vueuse/core @vueuse/nuxt
```

nuxt.config.tsに追加

```ts
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt"],
});
```

### Lodash

```bash
pnpm add -D nuxt-lodash
```

nuxt.config.tsに追加

```ts
export default defineNuxtConfig({
  modules: ["nuxt-lodash"],
});
```

### dayjs

```bash
pnpm add dayjs dayjs-nuxt
```

```ts
export default defineNuxtConfig({
  modules: ["dayjs-nuxt"],
});
```

### ルーター型安全 IDE 補完 不要？

```bash
pnpm add -D nuxt-typed-router
```

nuxt.config.tsに追加

```ts
export default defineNuxtConfig({
  modules: ["nuxt-typed-router"],
});
```

### Nuxt UI

```bash
pnpm add -D @nuxt/ui
```

nuxt.config.tsに追加

```ts
export default defineNuxtConfig({
  modules: ["@nuxt/ui"],
});
```

### nuxt-swiper

```bash
pnpm add swiper nuxt-swiper
```

nuxt.config.tsに追加

```ts
export default defineNuxtConfig({
  modules: ["nuxt-swiper"],
});
```

### Nuxt Security

```bash
pnpm add -D nuxt-security
```

nuxt.config.tsに追加

```ts
export default defineNuxtConfig({
  modules: ["nuxt-security"],
});
```

### Testing

```bash
pnpm add -D @nuxt/test-utils @playwright/test
pnpm add -D tailwindcss @tailwindcss/forms @tailwindcss/aspect-ratio @tailwindcss/typography @tailwindcss/container-queries @headlessui/tailwindcss
pnpx playwright install
```

nuxt.config.tsに追加

```ts
export default defineNuxtConfig({
  modules: ["@nuxt/test-utils/module"],
});
```

# 環境初期構築メモ

## 1. mise インストール

```bash
brew install mise
echo 'eval "$(~/.local/bin/mise activate zsh)"' >> ~/.zshrc
echo 'eval "$(mise activate zsh --shims)"' >> ~/.zprofile
```

```bash
touch .mise.toml # nodeとpnpm記入
mise i
```

## 2. Nuxt3 インストール

```bash
pnpm create nuxt --packageManager pnpm --gitInit false

cd nuxt3-app
pnpm install
```

## 3. package.json 修正

package.json に追加（間違って npm や yarn でインストールされないようにするため）

```json
{
  "scripts": {
    "preinstall": "pnpm dlx only-allow pnpm"
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

### tsconfig.json IDEエラー対策用

```bash
pnpm add -D vite
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

[https://vueuse.org/functions.html](https://vueuse.org/functions.html)
[https://vueuse.org/nuxt/README.html](https://vueuse.org/nuxt/README.html)

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

pnpx nuxi@latest module add @selemondev/nuxt-es-tool-kit

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

pnpm exec playwright install
```

nuxt.config.tsに追加

```ts
export default defineNuxtConfig({
  modules: ["@nuxt/test-utils/module"],
});
```

aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

```bash
pnpm add nuxt-vue3-google-signin
```

pnpm add pinia @pinia/nuxt

pnpm add -D vitest @vue/test-utils happy-dom playwright-core @vitejs/plugin-vue @vitejs/plugin-vue @vue/test-utils playwright-core nuxt-vitest

pnpm add -D unplugin-auto-import

[https://github.com/nuxt/nuxt/issues/20040](https://github.com/nuxt/nuxt/issues/20040)
pnpm add -D @types/node

[https://github.com/nuxt/nuxt/issues/20851](https://github.com/nuxt/nuxt/issues/20851)

```bash
pnpm add -D vite-plugin-checker @types/node
```

pnpm add -D @headlessui/tailwindcss

```text
    "nuxt-swiper": "^2.0.0",
```

### ✕ unmet peer vue-tsc@~2.1.6: found 2.2.0 対策

```text
 WARN  Issues with peer dependencies found
.
└─┬ nuxt 3.14.1592
  └─┬ @nuxt/vite-builder 3.14.1592
    └─┬ vite-plugin-checker 0.8.0
      └── ✕ unmet peer vue-tsc@~2.1.6: found 2.2.0
```

[https://github.com/fi3ework/vite-plugin-checker/issues/427](https://github.com/fi3ework/vite-plugin-checker/issues/427)

```text
"vue-tsc": "2.1.6"
```

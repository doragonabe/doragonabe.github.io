// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  /**
   * https://nuxt.com/docs/getting-started/seo-meta
   */
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "doragonabe site",
      meta: [
        { name: "robots", content: "noindex,nofollow,noarchive" },
        { "http-equiv": "cache-control", content: "no-store" },
      ],
      link: [{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
      noscript: ["JavaScriptを有効にしてください。"],
      htmlAttrs: { lang: "ja" },
    },
  },

  /**
   * https://nuxt.com/docs/getting-started/styling#the-css-property
   */
  css: ["assets/css/style.scss", "assets/css/craft.scss"],

  modules: ["@vueuse/nuxt", "nuxt-swiper", "nuxt-lodash", "@nuxt/ui"],

  /**
   * https://devtools.nuxt.com/guide/getting-started#auto-install
   */
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  /**
   * 実験的なVue機能の有効化
   * https://nuxt.com/docs/getting-started/configuration#enabling-experimental-vue-features
   */
  vue: {
    propsDestructure: true,
  },

  typescript: {
    typeCheck: true,
    strict: true,
  },
});

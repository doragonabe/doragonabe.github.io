// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'doragonabe site',
      link: [
        {rel: 'icon', href: '/favicon.ico'},
      ],
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {name: 'robots', content: 'noindex,nofollow,noarchive'},
        {name: 'referrer', content: 'no-referrer'},
        //{name: 'description', content: 'Nuxt 3 for beginners'},
      ],
      noscript: [
        'JavaScriptを有効にしてください。',
      ],
      htmlAttrs: {
        lang: 'ja',
      },
    },
  },

  /**
   * https://go.nuxtjs.dev/config-css
   */
  css: [
    //'/assets/css/reset.css',
    //'/assets/css/style.css',
    //'/assets/css/craft.css',
  ],

  modules: ['nuxt-swiper'],

  devtools: {enabled: true},
});

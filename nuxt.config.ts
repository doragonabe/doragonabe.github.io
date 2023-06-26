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
        // {name: 'referrer', content: 'no-referrer'},
        // {name: 'description', content: 'Nuxt 3 for beginners'},
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
    //'/assets/css/reset2.css',
    //'/assets/css/ress.min.css',
    //'sanitize.css',
  ],

  modules: [
    'nuxt-swiper',
    'nuxt-vue3-google-signin',
    // '@sidebase/nuxt-auth',
  ],

  router: {
    trailingSlash: false,
  },

  googleSignIn: {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },

  devtools: {
    enabled: true,
  },
});

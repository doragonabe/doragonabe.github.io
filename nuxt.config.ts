// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/doragonabe.github.io/',
    head: {
      title: 'Nuxt 3 basic',
      htmlAttrs: {
        lang: 'ja',
      },
      meta: [
        {name: 'description', content: 'Nuxt 3 for beginners'},
      ],
      link: [
        {rel: 'icon', href: '/icon.png'},
      ],
    },
  },

  /**
   * https://go.nuxtjs.dev/config-css
   */
  css: [
    '/assets/css/reset.css',
    '/assets/css/style.css',
    '/assets/css/craft.css',
  ],

  modules: ['nuxt-swiper'],

  devtools: {enabled: true},
});

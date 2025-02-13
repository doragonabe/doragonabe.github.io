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
      meta: [
        { name: "robots", content: "noindex,nofollow,noarchive" },
        { "http-equiv": "cache-control", content: "no-store" },
      ],
      link: [{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
      noscript: ["JavaScriptを有効にしてください。"],
      htmlAttrs: { lang: "ja" },
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },

  /**
   * https://nuxt.com/docs/getting-started/styling#the-css-property
   */
  css: [
    "assets/css/style.scss",
    "assets/css/menu.scss",
    "assets/css/craft.scss",
  ],

  /**
   * https://nuxt.com/docs/api/nuxt-config#modules-1
   */
  modules: [
    "@vueuse/nuxt",
    "nuxt-lodash",
    "dayjs-nuxt",
    "nuxt-typed-router",
    "@nuxt/ui",
    "nuxt-swiper",
    "nuxt-security",
    "@nuxt/test-utils/module",
  ],

  /**
   * https://devtools.nuxt.com/guide/getting-started#auto-install
   */
  devtools: {
    enabled: false,
    timeline: {
      enabled: true,
    },
  },

  /**
   * 最終チェック用
   */
  /*
  typescript: {
    typeCheck: true,
    strict: true,
  },
  */

  /**
   * https://nuxt.com/docs/api/nuxt-config#runtimeconfig-1
   */
  runtimeConfig: {
    public: {
      appEnv: "local",
    },
  },

  future: {
    /**
     * https://nuxt.com/docs/api/nuxt-config#compatibilityversion
     */
    compatibilityVersion: 4,
  },

  /**
   * https://nuxt.com/docs/guide/going-further/experimental-features#typedpages
   */
  experimental: {
    typedPages: true,
  },

  /**
   * https://nuxt-security.vercel.app/getting-started/setup
   */
  /*
  security: {
    headers: {
      contentSecurityPolicy: {
        "default-src": ["'self'"],
        "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        "script-src-elem": ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        "script-src-attr": ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        "style-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        "style-src-elem": [
          "'self'",
          "'unsafe-inline'",
          "'unsafe-eval'",
          "https://fonts.googleapis.com",
        ],
        "style-src-attr": ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        "connect-src": ["'self'", "http://localhost:*", "ws://localhost:*"],
        "object-src": ["'none'"],
        "base-uri": ["'none'"],
        "form-action": ["'none'"],
        "frame-ancestors": ["'none'"],
      },
      permissionsPolicy: {
        camera: ["()"],
        "display-capture": ["()"],
        fullscreen: ["()"],
        geolocation: ["()"],
        microphone: ["()"],
      },

      // nuxt-securityをdevtoolsで使うための設定
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp",
    },
  },
  */

  compatibilityDate: "2025-02-13",
});

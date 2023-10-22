const mode = 'production'
const isDev = mode !== "production"
import {defineNuxtConfig} from "@nuxt/bridge"

export default defineNuxtConfig({
  mode: 'universal',
  // Конфигурация
  bridge: {
    nitro: false,
    typescript: true
  },

  ssr: false,
  components: true,

  server: {
    host: '0.0.0.0',
    port: 3000
  },

  // head
  head: {
    title: 'Polyana Group - отдых на красной поляне',
    htmlAttrs: {
      lang: 'ru'
    },

    meta: [
      {charset: 'utf-8'},
      {'http-equiv': 'cleartype', content: 'on'},
      {'http-equiv': 'imagetoolbar', content: 'no'},
      {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      {name: 'theme-color', content: '#32343A'},
      {name: 'HandheldFriendly', content: 'True'},
      {name: 'format-detection', content: 'address=no'},
      {name: 'format-detection', content: 'telephone=no'},
      {hid: 'robots', name: 'robots', content: 'index, follow'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
    ],

    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://ztgxmhicyraofyrgiitp.supabase.co/storage/v1/object/public/publicimg/logo/logo.svg?t=2023-10-14T11%3A13%3A29.296Z'
      }
    ]
  },

  css: [
    '~/assets/styles/screen/desktop.less',
    '~/assets/styles/screen/mobile.less',
    '~/assets/styles/travel-line.css',
    '~/assets/styles/fontSize.css',
    '~/assets/styles/footer.css',
    '~/assets/styles/header.less',
    '~/assets/styles/main.css',
    '~/assets/styles/animations.css',
    '~/assets/styles/ui-styles.less'
  ],

  plugins: [
    '~/plugins/v_mask.js',
    '~/plugins/vue-slick-carousel.js'
  ],

  // modules
  buildModules: [
    "nuxt-storm",
    '@nuxt/image',
    '@nuxtjs/dotenv',
    '@nuxtjs/vuetify'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: process.env.BASE_URL || 'http://localhost:3000'
  },

  robots: {
    UserAgent: '*',
    Disallow: ''
  },

  axios: {baseURL: '/'},
  image: {inject: true},

  vuetify: {
    defaultAssets: {
      font: false,
      icons: {
        defaultSet: 'custom'
      }
    }
  },

  build: {
    optimizeCss: false,
  }
})

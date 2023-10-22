const mode = 'production'
const isDev = mode !== "production"
import {defineNuxtConfig} from "@nuxt/bridge"

export default defineNuxtConfig({
  // Конфигурация
  bridge: {
    nitro: false,
    typescript: true
  },

  ssr: false,
  debug: false,
  devtool: 'none',
  components: true,
  server: {host: '0.0.0.0'},

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
      {'http-equiv': 'msthemecompatible', content: 'no'},
      {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      {'http-equiv': 'http-equiv', content: 'text/html; charset=UTF-8'},
      {'http-equiv': 'Cache-Control', content: 'max-age=3600, must-revalidate'},
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
    filenames: {
      app: ({isDev}) => isDev ? '[name].js' : 'js/[contenthash].js',
      chunk: ({isDev, isModern}) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `[contenthash:7]${isModern ? '.modern' : ''}.js`
    },

    optimization: {
      minimize: false,
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        minSize: 0,
        maxSize: 300000,
        maxInitialRequests: Infinity,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1]
              return `npm.${packageName.replace('@', '')}`
            }
          }
        }
      }
    }
  }
})

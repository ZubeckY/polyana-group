const mode = 'production'
const isDev = mode !== "production"
import {defineNuxtConfig} from "@nuxt/bridge"

export default defineNuxtConfig({
  // Конфигурация
  bridge: {
    nitro: false,
    typescript: true
  },
  alias: {
    tslib: 'tslib/tslib.es6.js'
  },
  ssr: false,
  debug: false,
  devtool: 'none',
  components: true,
  server: {host: '0.0.0.0'},

  // head
  head: {
    title: 'Polyana group - отдых на красной поляне',
    htmlAttrs: {
      lang: 'ru',
      manifest: 'default.appcache'
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
    '~/assets/styles/fontSize.less',
    '~/assets/styles/footer.less',
    '~/assets/styles/header.less',
    '~/assets/styles/main.less',
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
    '@nuxtjs/sitemap',
    'nuxt-ssr-cache',
    'cookie-universal-nuxt',
    '@drozd/nuxt-performance'
  ],

  //
  sitemap: {
    hostname: process.env.BASE_URL || 'http://localhost:3000'
  },

  robots: {
    UserAgent: '*',
    Disallow: ''
  },

  axios: {baseURL: '/'},
  image: {inject: true},
  render: {resourceHints: false},
  router: {
    prefetchLinks: false
  },

  vuetify: {
    defaultAssets: {
      font: false,
      icons: {
        defaultSet: 'custom'
      }
    }
  },

  cache: {
    useHostPrefix: false,
    pages: [
      '*',
      /^\/*\/\d+$/,
      /^\/$/
    ],
    key(route, context) {
    },
    store: {
      type: 'memory',
      max: 100,
      ttl: 60
    }
  },

  performance: {
    // логирование времени запросов
    renderRouteTimeCallback: (route, ms) => {
      console.log(`time render route: ${route} ${ms} ms`);
    },
    // отключаем SSR на нужных нам роутах
    isOnlySPA: (route, _context) => {
      return route === '/personal';
    },
    // кол-во допустимых мс для рендера при SSR
    maxRenderTime: 1000,
    // кол-во попыток отрисовать SSR если рендер медленный,
    // дальше выключаем на указнное время timeDisabledSsrWithRoute
    maxAttemptSsr: 5,
    // RegExp страниц исключения для модуля в целом
    excludeRoutes: /healthcheck/,
    // на какое время выключаем сср для страницы
    timeDisabledSsrWithRoute: 1000 * 60,
    // интервал очистки общего счётчика, когда выключили SSR на всём сайте
    clearSlowCounterIntervalTime: 1000 * 60 * 5,
    // Общее кол-во медленных запросов на сайте, потом отключаем SSR везде
    maxSlowCount: 100
  },

  build: {
    optimizeCss: false,
    filenames: {
      app: ({isDev}) => isDev ? '[name].js' : 'js/[contenthash].js',
      chunk: ({
                isDev,
                isModern
              }) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `[contenthash:7]${isModern ? '.modern' : ''}.js`
    },

    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
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

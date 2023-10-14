const mode = 'production'
const isDev = mode !== "production"
import {defineNuxtConfig} from "@nuxt/bridge"

export default defineNuxtConfig({
  bridge: {
    typescript: true,
    nitro: false
  },
  alias: {
    tslib: 'tslib/tslib.es6.js'
  },
  ssr: false,
  components: true,
  server: {host: '0.0.0.0'},
  head: {
    title: 'client',
    titleTemplate: '%s - отдых на красной поляне',
    htmlAttrs: {lang: 'ru'},
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'Polyana group, ultima club hotel & SPA, country hills resort, ikos polyana'
      },
      {name: 'format-detection', content: 'telephone=no'},
      {name: 'theme-color', content: '#32343A'},
      {
        hid: 'description',
        name: 'description',
        content: 'Polyana group, ultima club hotel & SPA, country hills resort, ikos polyana'
      },
      {hid: 'og:title', property: 'og:title', content: 'Polyana group - отдых на красной поляне'},
      {hid: 'og:url', property: 'og:url', content: process.env.BASE_URL},
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Polyana group, ultima club hotel & SPA, country hills resort, ikos polyana'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://cloud.mail.ru/public/DWvM/gXMjkb9TC/Country%20Hills%20Resort%202/1%20%D0%AD%D0%BA%D1%81%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80%20%2B%20Ikos/_MG_2407.jpg'
      },
      {hid: 'og:image:width', property: 'og:image:width', content: '400'},
      {hid: 'og:image:height', property: 'og:image:height', content: '300'},
      {hid: 'og:locale ', property: 'og:locale ', content: 'ru_RU'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: 'https://ztgxmhicyraofyrgiitp.supabase.co/storage/v1/object/public/publicimg/logo/logo.svg?t=2023-10-14T11%3A13%3A29.296Z'},
      {rel: 'canonical', href: '/'}
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
    '~/plugins/travelline.js'
  ],
  buildModules: [
    "nuxt-storm",
    '@nuxt/image',
    '@nuxtjs/dotenv',
    '@nuxtjs/vuetify'
    // 'nuxt-webpack-optimisations'
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
  dotenv: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  sitemap: {
    hostname: process.env.BASE_URL || 'http://localhost:3000'
  },
  axios: {
    baseURL: '/'
  },
  robots: {
    UserAgent: '*',
    Disallow: ''
  },
  render: {
    resourceHints: false
  },
  image: {
    inject: true
  },
  vuetify: {
    defaultAssets: {
      font: false,
      icons: {
        defaultSet: 'custom'
      }
    }
  },
  // webpackOptimisations: {
  //   esbuildLoaderOptions: {
  //     client: {
  //       minifyIdentifiers: false,
  //       target: 'es2015'
  //     }
  //   }
  // },
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
    maxSlowCount: 50
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
      minimize: true
    },
    transpile: ["swiper"]
  }
})

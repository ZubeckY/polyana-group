const mode = 'production'
const isDev = mode !== "production"
import { defineNuxtConfig } from "@nuxt/bridge"
const main_base_URL =  'http://81.200.119.121:3000/';


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
  server: { host: '0.0.0.0' },
  head: {
    title: 'client',
    titleTemplate: '%s - отдых на красной поляне',
    htmlAttrs: { lang: 'ru' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Polyana group, ultima club hotel & SPA, country hills resort, ikos polyana' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#32343A' },
      { property: 'og:title', content: 'Polyana group - отдых на красной поляне' },
      { property: 'og:description', content: 'Polyana group, ultima club hotel & SPA, country hills resort, ikos polyana' },
      { property: 'og:image', content: 'https://cloud.mail.ru/public/DWvM/gXMjkb9TC/Country%20Hills%20Resort%202/1%20%D0%AD%D0%BA%D1%81%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80%20%2B%20Ikos/_MG_2407.jpg' },
      { property: 'og:image:width', content: '400' },
      { property: 'og:image:height', content: '300' },
      { property: 'og:type', content: 'profile' },
      { property: 'og:locale ', content: 'ru_RU' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: '/' }
    ]
  },
  css: [
    '~/assets/styles/screen/desktop.less',
    '~/assets/styles/screen/mobile.less',
    '~/assets/styles/fontSize.less',
    '~/assets/styles/footer.less',
    '~/assets/styles/header.less',
    '~/assets/styles/main.less',
    '~/assets/styles/ui-styles.less'
  ],
  plugins: [
    '~/plugins/v_mask.js'
  ],
  buildModules: [
    "nuxt-storm",
    '@nuxt/image',
    '@nuxtjs/vuetify',
    // '@nuxt/typescript-build'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    "cookie-universal-nuxt"
  ],
  sitemap: {
    hostname: main_base_URL
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
    // optionsPath: './vuetify.options.js',
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
      app: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
      css: ({ isDev }) => isDev ? '[name].css' : 'css/[contenthash].css',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]'
    },
    ...(!isDev && {
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
      }
    }),
    optimization: {
      minimize: true
    },
    transpile: ["swiper"]
  }
})

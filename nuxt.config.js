import colors from 'vuetify/es5/util/colors'
export default {
  server: { host: '0.0.0.0' },
  head: {
    titleTemplate: '%s - client',
    title: 'client',
    htmlAttrs: { lang: 'ru' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', hid: 'description', content: 'Тестовое описание' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  components: true,
  css: [
    '~/assets/styles/screen/960px.less',
    '~/assets/styles/screen/1100px.less',
    '~/assets/styles/screen/1200px.less',
    '~/assets/styles/screen/1360px.less',
    '~/assets/styles/screen/1400px.less',
    '~/assets/styles/cornerCard.less',
    '~/assets/styles/fontSize.less',
    '~/assets/styles/footer.less',
    '~/assets/styles/header.less',
    '~/assets/styles/items.less',
    '~/assets/styles/main.less',
    '~/assets/styles/ui-styles.less'
  ],
  plugins: [
    '~/plugins/v_mask.js'
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    "nuxt-storm"
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    "cookie-universal-nuxt"
  ],
  axios: {baseURL:'/', proxy:true},
  vuetify: {
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  build: {
    html:{
      minify:{
        minifyURLs: true,
        minifyJS: true,
        minifyCSS: true,
        decodeEntities: true,
        useShortDoctype: true,
        collapseWhitespace: true,
        trimCustomFragments: true,
        preserveLineBreaks: false,
        collapseBooleanAttributes: true,
        processConditionalComments: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        removeEmptyElements: true,
        removeComments: true
      }
    },
    transpile: ["swiper"],
    optimization: {
      minimize: true
    },
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
      cacheGroups: {
        styles: {name: 'styles', test: /\.(css|less|vue)$/, chunks: 'all', enforce: true}
      }
    },
  }
}

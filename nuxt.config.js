import colors from 'vuetify/es5/util/colors'
const mode = 'production'
const isDev = mode !== "production"

export default {
  server: { host: '0.0.0.0' },

  head: {
    titleTemplate: '%s - client',
    title: 'client',
    htmlAttrs: { lang: 'ru' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  components: true,

  css: [
    '~/assets/styles/screen/desktop.less',
    '~/assets/styles/screen/mobile.less',
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
    '@nuxtjs/vuetify',
    'nuxt-webpack-optimisations',
    '@nuxt/typescript-build',
    "nuxt-storm"
  ],

  modules: [
    '@nuxt/image',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    "cookie-universal-nuxt"
  ],

  axios: { baseURL:'/' },

  vuetify: {
    optionsPath: './vuetify.options.js',
    defaultAssets: false,
    treeShake: true
    // theme: {
    //   dark: false,
    //   themes: {
    //     dark: {
    //       primary: colors.blue.darken2,
    //       accent: colors.grey.darken3,
    //       secondary: colors.amber.darken3,
    //       info: colors.teal.lighten1,
    //       warning: colors.amber.base,
    //       error: colors.deepOrange.accent4,
    //       success: colors.green.accent3
    //     }
    //   }
    // }
  },

  webpackOptimisations: {
    esbuildLoaderOptions: {
      client: {
        minifyIdentifiers: false,
        target: 'es2015'
      },
      server: {
        minifyIdentifiers: false,
        target: 'node14'
      },
      modern: {
        target: 'es2018'
      }
    }
  },

  build: {
    filenames: {
      chunk: ({ isDev, isModern }) => isDev ? `[name]${isModern ? '.modern' : ''}.js` : `[contenthash:7]${isModern ? '.modern' : ''}.js`,
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[name].[contenthash:7].[ext]',
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

    // extractCSS: true,
    // cssSourceMap: false,

    optimization: {
      minimize: true
    },
    //   splitChunks: {
    //     cacheGroups: {
    //       styles: {
    //         name: 'styles',
    //         test: /\.(css|less|vue)$/,
    //         chunks: 'all',
    //         enforce: true
    //       }
    //     }
    //   }
    // },

    transpile: ["swiper"]

  }
}

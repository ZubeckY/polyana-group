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
    "nuxt-storm",
    '@nuxt/image',
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
    'nuxt-webpack-optimisations',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    "cookie-universal-nuxt",
    'nuxt-webfontloader',
  ],

  webfontloader: {
    google: {
      families: [
        'Montserrat:100,200,300,400,500,600,700,800,900&display=swap'
      ]
    }
  },

  axios: { baseURL: '/' },

  image: {
    quality: 80,
    inject: true,
    format: ['webp'],
    sets: "300,300:600,600:900"
  },

  vuetify: {
    optionsPath: './vuetify.options.js',
    defaultAssets: {
      font: { family: 'Montserrat' },
    },
    // theme: { dark: false, },
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
}

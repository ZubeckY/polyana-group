const mode = 'production'
const isDev = mode !== "production"

export default {
  cache: true,
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
      { name: 'format-detection', content: 'telephone=no' }
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
    '@nuxt/typescript-build',
    'nuxt-webpack-optimisations'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    "cookie-universal-nuxt",
    '@drozd/nuxt-performance'
  ],
  axios: {
    baseURL: '/'
  },
  render: {
    resourceHints: false
  },
  image: {
    inject: true
  },
  vuetify: {
    optionsPath: './vuetify.options.js',
    defaultAssets: {
      font: false,
      icons: {
        defaultSet: 'custom'
      }
    }
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
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    optimization: {
      minimize: true
    },
    postcss: {
      plugins: {
        ...(!isDev && {
          cssnano: {
            preset: ['advanced', {
              autoprefixer: false,
              cssDeclarationSorter: false,
              zindex: false,
              discardComments: {
                removeAll: true
              }
            }]
          }
        })
      },
      ...(!isDev && {
        preset: {
          browsers: 'cover 99.5%',
          autoprefixer: true
        }
      }),
      order: 'cssnanoLast'
    },
    transpile: ["swiper"]
  }
}

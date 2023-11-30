const mode = 'production'
const isDev = mode !== "production"
import supaBase from './assets/scripts/supaBase'

const ImageminPlugin = require('imagemin-webpack-plugin').default

export default {

  target: 'static',

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
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {hid: 'keywords', name: 'keywords', content: ''}
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
    '~/assets/styles/header.css',
    '~/assets/styles/main.css',
    '~/assets/styles/animations.css',
    '~/assets/styles/ui-styles.less'
  ],

  rootDir: __dirname,
  serverMiddleware: [
  ],

  plugins: [
    '~/plugins/v_mask.js',
    '~/plugins/vue-slick-carousel.js'
  ],

  // modules

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
    "nuxt-storm"
  ],

  components: true,

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    // 'nuxt-webfontloader',
    '@nuxtjs/sitemap',
    ['nuxt-mail', {
      message: [
        {name: 'polyana', to: process.env.POLYANA_MAIL},
        {name: 'ultima', to: process.env.ULTIMA_MAIL},
        {name: 'country', to: process.env.COUNTRY_MAIL},
        {name: 'ikos', to: process.env.IKOS_MAIL}
      ],
      smtp: {
        host: 'smtp.beget.com',
        port: 2525,
        auth: {
          user: process.env.POLYANA_MAILER_LOGIN,
          pass: process.env.POLYANA_MAILER_PASSWORD
        }
      }
    }]

  ],

  sitemap: {
    hostname: process.env.BASE_URL,
    cacheTime: 100 * 60 * 15,
    gzip: true,
    sitemaps: [
      {
        path: '/sitemap.xml',
        routes: async () => {
          let result = []

          const hotels = await supaBase
            .from('hotels').select('travellineid')
          const hotelsArray = hotels.data.map(v => `/hotel?hotel_id=${v.travellineid}`)

          const services = await supaBase
            .from('services').select('id, travellineid')
          const servicesArray = services.data.map(v => `/services/${v.id}/?hotel_id=${v.travellineid}`)

          const specialOffers = await supaBase
            .from('specialoffer').select('id')
          const specialOffersArray = specialOffers.data.map(v => `/promo/${v.id}`)
          console.log(specialOffersArray)

          result = [...servicesArray, ...hotelsArray, ...specialOffersArray];
          return result
        }
      }

    ]
  },

  axios: {baseURL: '/'},

  vuetify: {
    defaultAssets: {
      font: false,
      icons: {
        defaultSet: 'custom'
      }
    }
  },


  image: {
    inject: true
  },

  render: {
    resourceHints: false,
    etag: false,
    static: {
      etag: false
    }
  },

  build: {
    optimizeCss: false,
    optimization: {
      minimize: !isDev
    },
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    ...(!isDev && {
      extractCSS: {
        ignoreOrder: true
      }
    }),
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
    extend (config, ctx) {
      const ORIGINAL_TEST = '/\\.(png|jpe?g|gif|svg|webp)$/i'
      const vueSvgLoader = [
        {
          loader: 'vue-svg-loader',
          options: {
            svgo: false
          }
        }
      ]
      const imageMinPlugin = new ImageminPlugin({
        pngquant: {
          quality: '5-30',
          speed: 7,
          strip: true
        },
        jpegtran: {
          progressive: true

        },
        gifsicle: {
          interlaced: true
        }
      })
      if (!ctx.isDev) config.plugins.push(imageMinPlugin)

      config.module.rules.forEach(rule => {
        if (rule.test.toString() === ORIGINAL_TEST) {
          rule.test = /\.(png|jpe?g|gif|webp)$/i
          rule.use = [
            {
              loader: 'url-loader',
              options: {
                limit: 1000,
                name: ctx.isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]'
              }
            }
          ]
        }
      })

      const svgRule = {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            use: vueSvgLoader
          },
          {
            resourceQuery: /data/,
            loader: 'url-loader'
          },
          {
            resourceQuery: /raw/,
            loader: 'raw-loader'
          },
          {
            loader: 'file-loader' // By default, always use file-loader
          }
        ]
      }
      config.module.rules.push(svgRule) // Actually add the rule
    }
  }
}

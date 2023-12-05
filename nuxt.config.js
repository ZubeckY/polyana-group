const mode = 'production'
const isDev = false
import supaBase from './assets/scripts/supaBase'

export default {
  // head
  head: {
    title: 'Polyana Group - отдых на красной поляне',
    htmlAttrs: {lang: 'ru'},
    meta: [
      {charset: 'utf-8'},
      {'http-equiv': 'cleartype', content: 'on'},
      {'http-equiv': 'imagetoolbar', content: 'no'},
      {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      {'http-equiv': 'Content-Security-Policy', content: 'upgrade-insecure-requests'},
      {name: 'theme-color', content: '#32343A'},
      {name: 'HandheldFriendly', content: 'True'},
      {name: 'format-detection', content: 'address=no'},
      {name: 'format-detection', content: 'telephone=no'},
      {hid: 'robots', name: 'robots', content: 'index, follow'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://polyanagroup.ru/public_image/logo/logo.svg?t=2023-10-14T11%3A13%3A29.296Z'
      }
    ]
  },
  // modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
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
  components: true,
  buildModules: [
    "@nuxtjs/pwa",
    "@nuxtjs/dotenv",
    "@nuxtjs/vuetify",
    "@nuxt/typescript-build"
  ],
  css: [
    '~/assets/styles/screen/desktop.less',
    '~/assets/styles/screen/mobile.less',
    '~/assets/styles/travel-line.css',
    '~/assets/styles/fontSize.css',
    '~/assets/styles/footer.css',
    '~/assets/styles/header.css',
    '~/assets/styles/main.css',
    '~/assets/styles/animations.css',
    '~/assets/styles/ui-styles.css'
  ],
  plugins: [
    '~/plugins/v_mask.js',
    '~/plugins/vue-slick-carousel.js'
  ],
  server: {
    host: '0.0.0.0',
    port: 3000
  },

  generate: {
    routes: async () => {
      let result = []

      const services = await supaBase
        .from('services').select('id')
      const servicesArray = services.data.map(v => `/services/${v.id}`)

      const specialOffers = await supaBase
        .from('specialoffer').select('id')
      const specialOffersArray = specialOffers.data.map(v => `/promo/${v.id}`)

      result = [...servicesArray, ...specialOffersArray];
      return result
    }
  },

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
          const hotelsArray = hotels.data.map(v => `/hotel/?hotel_id=${v.travellineid}`)

          const services = await supaBase
            .from('services').select('id')
          const servicesArray = services.data.map(v => `/services/${v.id}`)

          const specialOffers = await supaBase
            .from('specialoffer').select('id')
          const specialOffersArray = specialOffers.data.map(v => `/promo/${v.id}`)

          result = [...servicesArray, ...hotelsArray, ...specialOffersArray];
          return result
        }
      }

    ]
  },

  axios: {
    baseURL: '/',
    proxy: true
  },

  proxy: {
    '/api/v1/data-base/': { target: process.env.SUPA_BASE_URL, pathRewrite: {'^/api/v1/data-base/': ''} },
  },

  vuetify: {
    defaultAssets: {
      font: false,
      icons: {
        defaultSet: 'custom'
      }
    }
  },

  build: {}
}

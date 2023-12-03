const mode = 'production'
const isDev = false
import supaBase from './assets/scripts/supaBase'

const _ = require('lodash')

export default {
  components: true,

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
    '~/assets/styles/ui-styles.css'
  ],

  plugins: [
    '~/plugins/v_mask.js',
    '~/plugins/vue-slick-carousel.js'
  ],

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

  buildModules: [
    "@nuxtjs/pwa",
    "@nuxtjs/dotenv",
    "@nuxtjs/vuetify",
    "@nuxt/typescript-build"
  ],


  generate: {
    routes:
      async function () {
        let {data, error} = await supaBase
          .from('promo')
          .select('id')
          .order('id')

        return _.map(data, function (promo, key) {
          return `/promo/${promo.id}`
        })
      }
    // return axios.get('https://jsonplaceholder.typicode.com/posts')
    //   .then((res) => {
    //     return _.map(res.data, function(post, key) {
    //       return `/posts/${post.id}`
    //     })
    //   })
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
          const hotelsArray = hotels.data.map(v => `/hotel?hotel_id=${v.travellineid}`)

          const services = await supaBase
            .from('services').select('id')
          const servicesArray = services.data.map(v => `/services/${v.id}`)

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

  build: {}
}

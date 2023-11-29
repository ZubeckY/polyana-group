<template>
  <div>
    <header class="header header-inside">
      <div class="header-inside-container">
        <div class="header-inside-container-inner">
          <header-nav-inside/>
        </div>
      </div>
    </header>

    <div class="breadcrumbs">
      <div class="breadcrumbs-container">
        <breadcrumbs-button/>
        <breadcrumbs-content/>
      </div>
    </div>

    <section class="restInPolyana">
      <v-lazy>
        <div class="restInPolyana-container">
          <div class="restInPolyana-head">
            <h1 class="restInPolyana-title" v-html="hotel.offer"></h1>
          </div>

          <div class="restInPolyana-body">
            <div class="restInPolyana-body-container" @click="dialog = true">
              <div class="restInPolyana-pictures-large grid-item">
                <div @click.stop style="position:absolute;">
                  <watch-dialog :link="hotel.youtube">
                    <watch-inside/>
                  </watch-dialog>
                </div>
                <div class="restInPolyana-pictures-large-img">
                  <img loading="lazy" :src="getImageByIndex(0)" alt="big-pic"/>
                </div>
                <div class="restInPolyana-pictures-large-body" @click.stop>
                  <header-booking-ultima/>
                </div>
              </div>
              <div class="restInPolyana-pictures-small-img grid-item" v-if="getImageByIndex(1)">
                <img loading="lazy" :src="getImageByIndex(1)" alt="pic-1"/>
              </div>
              <div class="restInPolyana-pictures-small-img grid-item" v-if="getImageByIndex(2)">
                <img loading="lazy" :src="getImageByIndex(2)" alt="pic-3"/>
              </div>
              <div class="restInPolyana-pictures-small-img grid-item" v-if="getImageByIndex(3)">
                <img loading="lazy" :src="getImageByIndex(3)" alt="pic-2"/>
              </div>
              <div class="restInPolyana-pictures-small-img grid-item" v-if="getImageByIndex(4)">
                <img loading="lazy" :src="getImageByIndex(4)" alt="pic-4"/>
                <div class="restInPolyana-pictures-small-img-more">
                  +{{ data ? data.length : 99 }} фото
                </div>
              </div>
              <gallery-dialog @changeDialog="changeDialog" :dialog="dialog" :data="data"/>
            </div>
          </div>
        </div>
      </v-lazy>
    </section>

    <section class="luxHoliday" id="services">
      <v-lazy>
        <div class="luxHoliday-container flexbox-wrapper">

          <div class="luxHoliday-head">
            <div class="luxHoliday-head-container">
              <h3 class="luxHoliday-title section-title fontSize-xl--s text-uppercase">Роскошный
                горный отдых
                с комфортом!
              </h3>
              <div class="luxHoliday-text">
                <p v-html="hotel.description"></p>

                <div class="d-flex mt-4">
                  <b>Спрашивайте,
                    отвечаем онлайн</b>
                  <div class="d-flex ml-4">
                    <contact-button-whatsapp class="mr-2"/>
                    <contact-button-telegram/>
                  </div>
                </div>
              </div>
              <v-btn class="luxHoliday-btn shimmer-effect rounded-xxl mx-auto" href="/booking/?hotel_id=32513"
                     color="golden-gradient" elevation="0" width="254px" height="47px" dark>
                <div class="shimmer"></div>
                <div class="text">Забронировать</div>
              </v-btn>
            </div>
          </div>

          <div class="luxHoliday-body">
            <div class="luxHoliday-body-container">
              <article class="luxHoliday-slide slider" v-for="(slider, i) in sliders" :key="'luxHoliday-slide'+i">
                <v-carousel class="luxHoliday-slide" :show-arrows="slider.imgs.length > 1" style="height: 391px"
                            hide-delimiters>

                  <template v-slot:prev="{ on, attrs }">
                    <div v-bind="attrs" v-on="on">
                      <carousel-button-prev/>
                    </div>
                  </template>
                  <template v-slot:next="{ on, attrs }">
                    <div v-bind="attrs" v-on="on">
                      <carousel-button-next/>
                    </div>
                  </template>
                  <v-carousel-item v-for="(image, j) in slider.imgs"
                                   :href="'/services/'+slider.id+'?hotel_id='+slider.travellineid"
                                   class="luxHoliday-slide" :key="'lux-slide-'+j">
                    <img class="luxHoliday-slide-image" :src="image" alt="#" loading="lazy"/>
                  </v-carousel-item>
                </v-carousel>

                <a class="luxHoliday-slide-body" :href="'/services/'+slider.id">
                  <img :class="'luxHoliday-slide-mask ' + slider.classelement" :src="slider.titlesvg" alt="#"
                       loading="lazy"/>
                  <h4 class="luxHoliday-slide-title">{{ slider.title }}</h4>
                </a>
              </article>

            </div>
          </div>

        </div>
      </v-lazy>
    </section>

    <!-- TL Booking form script -->
    <section class="tl-section" id="tl-section">
      <div class="tl-section-container">
        <div id="tl-booking-form">&nbsp;</div>
      </div>
    </section>

    <!-- Специальные предложения -->
    <special-offers id="promo"/>

    <!-- Эксклюзивная скидка за звонок -->
    <exclusive/>

    <!-- Наши гости делятся своими впечатлениями об отдыхе -->
    <reviews :hotelId="hotelId" id="reviews"/>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import supaBase from "~/assets/scripts/supaBase";

@Component({
  head(this: Hotel): object {
    return {
      title: this.OG_CONTENT_CURRENT.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.OG_CONTENT_CURRENT.description
        },

        // og:tags
        {
          hid: "og:url",
          property: "og:url",
          content: this.OG_CONTENT_CURRENT.url
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website"
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.OG_CONTENT_CURRENT.title
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.OG_CONTENT_CURRENT.description
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.OG_CONTENT_CURRENT.image
        }
      ]
    }
  }
})
export default class Hotel extends Vue {
  hotelId: any = 0
  data: any = []
  hotel: any = {}
  sliders: any = []
  type: string = 'desktop'
  dialog: boolean = false
  OG_CONTENT_CURRENT: any = {}
  OG_CONTENT_DATA: any = [
    {
      title: 'Отель Ultima Club | Hotel & Spa - группа отелей Polyana group',
      description: 'Отдых на Красной Поляне в отеле 5* с кинотеатром и панорамным видом на горы на открытой терассе — идеальный способ расслабиться и насладиться природой',
      url: '/hotel?hotel_id=32513',
      image: 'https://ztgxmhicyraofyrgiitp.supabase.co/storage/v1/object/public/publicimg/hotels/Ultima/main/main4.webp'
    },
    {
      title: 'Отель Country Hills | Resort - группа отелей Polyana group',
      description: 'Откройте для себя идеальное место для отдыха и релаксации на Красной Поляне. Наслаждайтесь беззаботным отдыхом в 5* отеле Country Hills со СПА-пространством и бассейном в окружении природы',
      url: '/hotel?hotel_id=22866',
      image: 'https://ztgxmhicyraofyrgiitp.supabase.co/storage/v1/object/public/publicimg/hotels/Country%20Hills/main/main1.webp'
    },
    {
      title: 'Отель Ikos Polyana - группа отелей Polyana group',
      description: 'Насладитесь роскошью и красотой гор в Ikos Polyana! Вас ждет авторский 4* отель с дизайнерским интерьером и незабываемый горный отдых.',
      url: '/hotel?hotel_id=23660',
      image: 'https://ztgxmhicyraofyrgiitp.supabase.co/storage/v1/object/public/publicimg/hotels/Ikos%20Polyana/main/main1.webp'
    }
  ]

  async created() {
    if (process.client) {
      this.hotelId = this.$router.currentRoute.query.hotel_id
      await this.getHotelInfo()
      await this.getHotelSliders()
      this.getMetaData()
    }
  }

  mounted() {
    if (process.client) {
      switch (this.hotelId) {
        case '32513':
        case '22866':
        case '23660':
          return true
        default:
          return window.location.href = '/hotel?hotel_id=32513'
      }
    }
  }

  changeDialog(dialog: boolean) {
    this.dialog = dialog
  }

  async getHotelSliders() {
    try {
      let {data, error} = await supaBase
        .from('services')
        .select('')
        .eq('travellineid', this.hotelId)
        .order('sortingfactor, id')

      this.sliders = data
    } catch (e) {
      console.log(e)
    }
  }

  getImageByIndex(i: number): string {
    return this.data.length > 1 ? this.data[i] : 'https://placehold.co/900x600/dddddd/dddddd'
  }

  async getHotelInfo() {
    try {
      let {data, error}: any = await supaBase
        .from('hotels')
        .select('id, offer, description, youtube, travellineid, imgshotel')
        .eq('travellineid', this.hotelId)
        .order('id')
      this.hotel = data[0]
      this.data = data[0].imgshotel
    } catch (e) {
      console.log(e)
    }
  }

  getMetaData() {
    if (process.client) {
      let link = window.location.pathname + window.location.search
      let DATA: any = this.OG_CONTENT_DATA.filter((data: any) => data.url == link)[0]
      DATA.url = window.location.href
      this.OG_CONTENT_CURRENT = DATA
    }
  }
}
</script>

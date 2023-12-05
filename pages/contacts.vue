<template>
  <div>
    <header class="header header-promo">
      <div class="header-container conditions" :style="slide">
        <div class="header-container-inner">
          <header-nav-polyana/>
          <div class="header-promo-body">
            <div class="header-promo-body-container general-container">
              <breadcrumbs-button class="header-promo-back"/>
              <h1 class="header-promo-title mt-2">Контакты</h1>
            </div>
          </div>
        </div>
      </div>
    </header>

    <v-lazy>
      <div class="contacts d-flex justify-space-between mt-14">
        <div class="contacts-map">
          <v-lazy>
            <div v-html="getYandexMap"></div>
          </v-lazy>
          <div class="contacts-btn-group">
            <div class="contacts-btn-group-container">
              <v-btn class="contacts-btn golden-gradient shimmer-effect white--text rounded-xl"
                     width="296px" height="40px" min-width="0" elevation="0" target="_blank" :href="getYandexRoute">
                <div class="shimmer"></div>
                <div class="text">ПОСМОТРЕТЬ МАРШРУТ</div>
              </v-btn>

              <v-btn class="contacts-btn golden-gradient shimmer-effect white--text rounded-xl"
                     width="296px" height="40px" min-width="0" elevation="0" href="/booking/?hotel_id=32513"
                     :href="linkToBooking">
                <div class="shimmer"></div>
                <div class="text">Забронировать номер</div>
              </v-btn>
            </div>
          </div>
        </div>

        <div class="seeYouAtHotel contacts-comp">
          <div class="seeYouAtHotel-container">
            <!-- До встречи в наших отелях -->
            <h4 class="seeYouAtHotel-title footer-title pa-1 pb-3">До встречи в наших отелях</h4>
            <v-chip-group class="seeYouAtHotel-group mb-2" mandatory column
                          v-model="activeChip" active-class="golden-gradient white--text">
              <see-you-at-hotel-chip v-for="(item, i) in localMapping"
                                     :key="'see-you-at-hotel'+i" :value="i" :item="item"/>
            </v-chip-group>

            <div class="seeYouAtHotel-address d-flex">
              <!-- Контакты адрес -->
              <div class="seeYouAtHotel-address-container">
                <h4 class="seeYouAtHotel-address-title footer-title my-3">Контакты</h4>
                <div class="seeYouAtHotel-address-text"><h4 class="text-uppercase">Адрес:</h4>
                  <div>{{ getAddressItem }}</div>
                </div>
                <div class="seeYouAtHotel-address-text text-uppercase mt-2"><a
                  :href="'tel:'+getTelBronItem">{{ getTelBronItem }}</a>
                  <span style="font-size: 12px">
                    Отдел бронирования
                    (09:00 - 21:00)</span>
                </div>
                <div class="seeYouAtHotel-address-text text-uppercase mt-2"><a
                  :href="'tel:'+getTelTelReceptionItem">{{ getTelTelReceptionItem }}</a>
                  <span style="color: #000; font-size: 12px; font-weight: 400;line-height: 126.9%;">
                    Рецепция (круглосуточно)</span>
                </div>
              </div>

              <!-- Слайдер -->
              <div class="seeYouAtHotel-photo">
                <v-carousel class="footer-carousel" style="height: 247px"
                            v-model="activeSlide" hide-delimiters>
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
                  <v-carousel-item class="footer-slide" style="position: relative"
                                   v-for="(item, j) in getImgSHotel" :key="'photo-'+j">
                    <footer-slide :item="item" :isKey="j" :hotel="localMapping[activeChip]"/>
                  </v-carousel-item>
                </v-carousel>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="requisites">
        <div class="requisites-container">
          <div class="requisites-title mb-8 mt-10">
            РЕКВИЗИТЫ
          </div>
          <div class="d-flex flex-wrap justify-space-between">
            <div
              style="width: 352px; height: 66px; color: #000; font-size: 13.6px; font-weight: 500; line-height: 20.825px;">
              {{ getYandexNameBusiness }}
            </div>
            <div
              style="width: 773px; height: 66px; color: #000; font-size: 13.6px; font-weight: 500; line-height: 20.825px;">
              {{ getYandexBankDetails }}
            </div>
          </div>
        </div>
      </div>
    </v-lazy>
  </div>
</template>
<script>
import supaBase from "~/assets/scripts/supaBase";

export default {
  head() {
    return {
      title: 'Контакты - группа отелей Polyana group',
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Polyana Group – группа курортных отелей на Красной поляне, где вы сможете полностью расслабиться и насладиться окружающей природой. Наши отели Ultima club hotel&spa, Country hills resort и Ikos Polyana предлагают широкий спектр услуг, чтобы сделать ваш отдых незабываемым."
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "красная поляна отели контакты, красная поляна отели телефон, ultima club телефон, ultima club контакты, ultima club адрес, country hills телефон, country hills контакты, country hills адрес, ikos polyana телефон, ikos polyana контакты, ikos polyana адрес"
        },

        // og:tags
        {
          hid: "og:url",
          property: "og:url",
          content: process.client ? window.location.href : ''
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website"
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Контакты - группа отелей Polyana group"
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Polyana Group – группа курортных отелей на Красной поляне, где вы сможете полностью расслабиться и насладиться окружающей природой. Наши отели Ultima club hotel&spa, Country hills resort и Ikos Polyana предлагают широкий спектр услуг, чтобы сделать ваш отдых незабываемым."
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://polyanagroup.ru/public_image/hotels/Ultima/main/main6.webp"
        }
      ],
    }
  },

  data: () => ({
    activeChip: 0,
    activeSlide: 0,
    slide: `background-image: url("/img/promo/background.webp")`,
    localMapping: []
  }),

  async created() {
    try {
      let {data, error} = await supaBase
        .from('hotels')
        .select('')
        .order('id')
      this.localMapping = data
      this.getCurrentHotel()
    } catch (e) {
      console.log(e)
    }
  },

  watch: {
    activeChip: 'emptyActiveSlide'
  },

  methods: {
    getCurrentHotel() {
      let {hotel_id} = this.$router.currentRoute.query
      if (!hotel_id) return
      let restId = {
        32513: 0,
        22866: 1,
        23660: 2,
      }
      return this.activeChip = restId[hotel_id]
    },

    emptyActiveSlide() {
      return this.activeSlide = -1
    }
  },

  computed: {
    getYandexMap() {
      return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip].yandexmap : ''
    },

    getYandexRoute() {
      return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip].yandexroute : ''
    },

    getYandexNameBusiness() {
      return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip].namebusiness : ''
    },

    getYandexBankDetails() {
      return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip].bankdetails : ''
    },

    getAddressItem() {
      return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip]['adress'] : ''
    },

    getTelBronItem() {
      return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip]['telbron'] : ''
    },

    getTelTelReceptionItem() {
      return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip]['telreception'] : ''
    },

    linkToBooking() {
      return this.localMapping[this.activeChip] ? '/booking/?hotel_id=' + this.localMapping[this.activeChip].travellineid : '/booking/?hotel_id=32513'
    },

    getImgSHotel() {
      return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip]['imgshotel'] : []
    }
  }
}
</script>

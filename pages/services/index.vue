<template>
  <div>
    <header class="header header-promo">
      <div class="header-container conditions" :style="activeSlide">
        <div class="header-container-inner">
          <header-nav-polyana/>
          <div class="header-promo-body">
            <div class="header-promo-body-container general-container">
              <breadcrumbs-button class="header-promo-back"/>
              <h1 class="header-promo-title mt-2">Услуги</h1>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="specialOffers-promo">
      <v-lazy>
        <div class="specialOffers-promo-container general-container">

          <div class="specialOffers-promo-chips">
            <div class="specialOffers-promo-chips-container">
              <div class="specialOffers-promo-chips-title">Отели:</div>
              <div class="specialOffers-promo-chips-body">
                <v-chip-group v-model="hotel" column active-class="golden-gradient white--text" mandatory>
                  <v-chip class="white" style="font-size: 12px; height: 31px;" v-for="(item, i) in hotels"
                          @click="returnCurrentHash(item)" :key="i" :value="item.id">
                    {{ item.title }}
                  </v-chip>
                </v-chip-group>
              </div>
            </div>
          </div>

          <div v-if="loading">Загрузка</div>
          <div v-else>

            <section class="luxHoliday" v-if="data.length >= 1">
              <v-lazy>
                <div class="luxHoliday-container flexbox-wrapper">

                  <div class="luxHoliday-head" style="max-width: 400px">
                    <div class="luxHoliday-head-container">
                      <h3 class="luxHoliday-title section-title fontSize-xl--s text-uppercase">Роскошный
                        горный отдых
                        с комфортом!
                      </h3>
                      <div class="luxHoliday-text">
                        <p v-html="getDescription"></p>

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
                      <article class="luxHoliday-slide slider" v-for="(slider, i) in data" :key="'luxHoliday-slide'+i">
                        <v-carousel class="luxHoliday-slide" :show-arrows="slider['imgs'] && slider['imgs'].length > 1" style="height: 391px"
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

                          <v-carousel-item v-for="(image, j) in slider['imgs']"
                                           :href="'/services/'+slider.id+'?hotel_id='+slider.travellineid"
                                           class="luxHoliday-slide" :key="'lux-slide-'+j">
                            <img class="luxHoliday-slide-image" :src="image" alt="#" loading="lazy"/>
                          </v-carousel-item>
                        </v-carousel>

                        <div class="corner-card-header-container d-flex flex-row flex-wrap px-3 py-3"
                             style="position:absolute; top: 0">
                          <services-chip :item="slider"/>
                        </div>

                        <a class="luxHoliday-slide-body" :href="'/services/'+slider.id">
                          <img :class="'luxHoliday-slide-mask ' + slider['classelement']"
                               :src="slider['titlesvg']" alt="#" loading="lazy"/>
                          <h4 class="luxHoliday-slide-title">{{ slider.title }}</h4>
                        </a>
                      </article>

                    </div>
                  </div>

                </div>
              </v-lazy>
            </section>

            <div v-else>Ничего нет</div>
          </div>
        </div>
      </v-lazy>
    </section>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';
import supaBase from "~/assets/scripts/supaBase";

@Component({
  head: {
    title: 'Услуги - группа отелей Polyana group',
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Добро пожаловать в Polyana Group – группу курортных отелей на Красной поляне, где вы сможете полностью расслабиться и насладиться окружающей природой. Наши отели Ultima club hotel&spa, Country hills resort и Ikos Polyana предлагают широкий спектр услуг, чтобы сделать ваш отдых незабываемым."
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "спа отель красная поляна, спа центр красная поляна, кинотеатр красная поляна, отели красная поляна рестораны, бассейн красная поляна, спортзал красная поляна, красная поляна горнолыжные отели"
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
        content: "Услуги - группа отелей Polyana group"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Добро пожаловать в Polyana Group – группу курортных отелей на Красной поляне, где вы сможете полностью расслабиться и насладиться окружающей природой. Наши отели Ultima club hotel&spa, Country hills resort и Ikos Polyana предлагают широкий спектр услуг, чтобы сделать ваш отдых незабываемым."
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://polyanagroup.ru/public_image/hotels/Country%20Hills/skiroom/skiroom1.webp"
      }
    ]
  }
})
export default class Services extends Vue {
  data: any = []
  hotel: any = 0
  hotels: any = [
    {
      title: 'Все',
      description: 'Добро пожаловать в Polyana Group – группу курортных отелей на Красной поляне, где вы сможете полностью расслабиться и насладиться окружающей природой. Наши отели Ultima club hotel&spa, Country hills resort и Ikos Polyana предлагают широкий спектр услуг, чтобы сделать ваш отдых незабываемым.\n' +
        '\n' +
        'Одни из главных акцентов:\n' +
        '<b>\n' +
        '— открытый сезонный бассейн с детской зоной \n' +
        '— спа-центр с теплым бассейном, хамамом и сауной; (Ultima Club Hotel&SPA, Country Hills | Resort)\n' +
        '— SKI-ROOM;\n' +
        '— кинотеатр на террасе с кальянной зоной; (Ultima club Hotel&SPA)\n' +
        '— тренажерный зал; (Ultima club Hotel&SPA)\n' +
        '— детская площадка.\n' +
        '</b>\n' +
        '\n' +
        'Наши номера оформлены с изыском и предлагают вам великолепный вид на величественные горы. Вы сможете насладиться прекрасными панорамами и погрузиться в атмосферу расслабления и уюта.\n' +
        '\n' +
        'Мы также предоставляем выгодное бронирование для наших гостей. Забронируйте номер заранее и получите специальные предложения и скидки, чтобы сделать свой отдых еще более приятным и доступным.\n' +
        '\n' +
        'Наша команда профессионалов стремится обеспечить вам незабываемый отдых в уникальном курортном отеле. Посетите наш сайт или свяжитесь с нами по телефону: <b>+7 989 009 5577</b>, чтобы получить больше информации о наших предложениях и услугах. Не упустите возможность провести незабываемый отдых в Polyana Group – месте, где роскошь и комфорт сочетаются с природной красотой Красной поляны.',
      travellineid: 0,
    },
  ]
  loading: boolean = true
  activeSlide: string = `background-image: url("/img/promo/background.webp")`

  async created() {
    await this.getHotels()
    await this.getData()
    this.getCurrentHotel()
  }

  returnCurrentHash(item: any) {
    if (!item || item.travellineid == 0) return this.$router.push('/services')
    return this.$router.push('?hotel_id=' + item.travellineid)
  }

  getCurrentHotel() {
    let {hotel_id}: any = this.$router.currentRoute.query
    if (!hotel_id) return

    let restId: any = {
      32513: 1,
      22866: 2,
      23660: 3,
    }

    return this.hotel = restId[hotel_id]
  }

  get getDescription() {
    return this.hotels[this.hotel].description
  }

  async getHotels() {
    try {
      let {data, error}: any = await supaBase
        .from('hotels')
        .select('id, title, description, travellineid')
        .order('id')
      this.hotels.push(...data)
    } catch (e) {
      console.log(e)
    }
  }

  @Watch('hotel')
  async getData() {
    try {
      this.loading = true
      if (this.hotel == 0) {
        let {data, error} = await supaBase
          .from('services')
          .select('')
          .order('sortingfactor, id')
        this.data = data
      } else {
        let {data, error} = await supaBase
          .from('services')
          .select('')
          .eq('travellineid', this.hotels[this.hotel].travellineid)
          .order('sortingfactor, id')
        this.data = data
      }
    } catch (e) {
      console.log(e)
    } finally {
      this.loading = false
    }
  }
}
</script>

<template>
  <div>
    <header class="header header-promo">
      <div class="header-container conditions" :style="activeSlide">
        <div class="header-container-inner">
          <header-nav-polyana/>
          <div class="header-promo-body">
            <div class="header-promo-body-container general-container">
              <breadcrumbs-button class="header-promo-back"/>
              <h1 class="header-promo-title mt-2">ОТЗЫВЫ</h1>
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
              <div class="specialOffers-promo-chips-title">Отели</div>
              <div class="specialOffers-promo-chips-body">
                <v-chip-group v-model="hotel" column active-class="golden-gradient white--text">
                  <v-chip class="white" v-for="(item, i) in hotels" :key="i"
                          :value="item.travellineid" style="font-size: 12px; height: 31px;">
                    {{ item.title }}
                  </v-chip>
                </v-chip-group>
              </div>
            </div>
          </div>

          <div v-if="loading">Загрузка</div>
          <div v-else>
            <div class="specialOffers-promo-reviews mt-3" v-if="data.length >= 1">
              <div class="specialOffers-promo-reviews-container">
                <reviews-card class="specialOffers-promo-reviews-card"
                              v-for="(item, i) in data" :key="'review'+i" :item="item"/>
              </div>
            </div>
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
    title: 'Отзывы на отели - группа отелей Polyana group',
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Гости наших отелей группы Polyana Group остаются впечатлены высоким уровнем сервиса, комфортом номеров и прекрасной территорией в окружении гор. Отзывы на Яндексе подтверждают высокую оценку гостей и рекомендуют эти отели для великолепного отдыха."
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "Отзывы Ultima Club Ikos Polyana Country Hills"
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
        content: "Отзывы на отели - группа отелей Polyana group"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Гости наших отелей группы Polyana Group остаются впечатлены высоким уровнем сервиса, комфортом номеров и прекрасной территорией в окружении гор. Отзывы на Яндексе подтверждают высокую оценку гостей и рекомендуют эти отели для великолепного отдыха."
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://avatars.mds.yandex.net/get-altay/3935166/2a00000189acec0329037e5937c9615a03fd/XXXL"
      }
    ]
  }
})
export default class Reviews extends Vue {
  data: any = []
  hotel: any = 0
  hotels: any = [
    {
      title: 'Все',
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

  getCurrentHotel() {
    let {hotel_id}: any = this.$router.currentRoute.query
    if (!hotel_id) return
    this.hotel = Number(hotel_id)
  }

  async getHotels() {
    try {
      let {data, error}: any = await supaBase
        .from('hotels')
        .select('id, title, travellineid')
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
          .from('reviews')
          .select('')
          .order('created_at', {ascending: false})
        this.data = data
      } else {
        let {data, error} = await supaBase
          .from('reviews')
          .select('')
          .eq('hoteltlid', this.hotel)
          .order('created_at', {ascending: false})
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

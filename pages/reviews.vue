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

          <div>
            <div class="specialOffers-promo-reviews mt-3">
              <div class="specialOffers-promo-reviews-container">
                <reviews-card class="specialOffers-promo-reviews-card"
                              v-for="(item, i) in data" :key="'review'+i" :item="item"/>
              </div>
              <div>
                <v-progress-linear v-if="isFullData && isLoading" indeterminate color="grey"/>
              </div>
            </div>
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
        content: "красная поляна отели отзывы, ultima club отзывы, country hills отзывы, ikos polyana отзывы, отели роза хутор отзывы"
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
  activeSlide: string = `background-image: url("/img/promo/background.webp")`
  isLoading: boolean = false
  isFullData: boolean = false
  isNeedLoading: boolean = false
  page: number = 1
  limit: number = 20

  async mounted() {
    window.addEventListener('scroll', this.handleScroll)
    await this.getHotels()
    await this.loadItems()
    this.getCurrentHotel()
  }

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
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
  async loadItemsByHotel() {
    this.page = 1
    this.data = []

    await this.loadItems()
  }

  async loadItems() {
    this.isLoading = true
    this.isNeedLoading = false

    if (this.hotel == 0) {
      return await this.getItemsWithOutHotelId()
    } else {
      return await this.getItemsWithHotelId()
    }
  }

  async getItemsWithHotelId() {
    const {data, error} = await supaBase
      .from('reviews')
      .select()
      .order('id')
      .eq('hoteltlid', this.hotel)
      .range(this.page * this.limit - this.limit, this.page * this.limit - 1)

    if (error) {
      console.error(error)
    } else {
      if (!this.isFullData) {
        if (data.length) {
          this.data = [...this.data, ...data]
        }
        this.isLoading = false
        this.isNeedLoading = true
        return
      }
      return this.isFullData = true
    }
  }

  async getItemsWithOutHotelId() {
    const {data, error} = await supaBase
      .from('reviews')
      .select()
      .order('id')
      .range(this.page * this.limit - this.limit, this.page * this.limit - 1)

    if (error) {
      console.error(error)
    } else {
      if (!this.isFullData) {
        if (data.length) {
          this.data = [...this.data, ...data]
        }
        this.isLoading = false
        this.isNeedLoading = true
        return
      }
      return this.isFullData = true
    }
  }


  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    const clientHeight = window.innerHeight || document.documentElement.clientHeight

    if (scrollTop + clientHeight >= (scrollHeight > 1200 ? scrollHeight - 1900 : scrollHeight - 1000)) {
      if (this.isNeedLoading) {
        this.page += 1
        this.loadItems()
      }
    }
  }
}
</script>

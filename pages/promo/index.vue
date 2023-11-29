<template>
  <div>
    <header class="header header-promo">
      <div class="header-container conditions" :style="activeSlide">
        <div class="header-container-inner">
          <header-nav-polyana/>
          <div class="header-promo-body">
            <div class="header-promo-body-container general-container">
              <breadcrumbs-button class="header-promo-back"/>
              <h1 class="header-promo-title mt-2">СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ И АКЦИИ</h1>
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
              <div class="specialOffers-promo-chips-title">По отелям:</div>
              <div class="specialOffers-promo-chips-body">
                <v-chip-group v-model="hotel" column multiple
                              active-class="golden-gradient white--text">
                  <v-chip class="white" style="font-size: 12px; height: 31px;"
                          v-for="(item, i) in hotels"
                          :key="i" :value="item.id">
                    {{ item.title }}
                  </v-chip>
                </v-chip-group>
              </div>
            </div>
          </div>

          <div class="specialOffers-promo-chips">
            <div class="specialOffers-promo-chips-container">
              <div class="specialOffers-promo-chips-title">По КАТЕГОРИЯМ:</div>
              <div class="specialOffers-promo-chips-body">
                <v-chip-group v-model="category" column multiple
                              active-class="golden-gradient white--text">
                  <v-chip class="white" style="font-size: 12px; height: 31px"
                          v-for="(item, i) in categories"
                          :key="i" :value="item.id">
                    {{ item.title }}
                  </v-chip>
                </v-chip-group>
              </div>
            </div>
          </div>

          <div v-if="loading">Загрузка</div>
          <div v-else>
            <div class="d-flex flex-wrap" v-if="data.length >= 1">
              <div class="specialOffers-slide d-flex" v-for="(item, i) in data" :key="'cornerCard'+i">
                <corner-card class="specialOffers-slide-promo" :item="item"/>
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
    title: 'Специальные предложения и акции - группа отелей Polyana group',
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Наша группа отелей предлагает множество специальных предложений и акций, таких как раннее бронирование со скидкой до 20%, программу лояльности для постоянных гостей, специальные пакеты с завтраками, ужинами и спа-услугами, а также скидки для групп."
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "Ключевые слова для поиска"
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
        content: "Специальные предложения и акции - группа отелей Polyana group"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Наша группа отелей предлагает множество специальных предложений и акций, таких как раннее бронирование со скидкой до 20%, программу лояльности для постоянных гостей, специальные пакеты с завтраками, ужинами и спа-услугами, а также скидки для групп."
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://ztgxmhicyraofyrgiitp.supabase.co/storage/v1/object/public/publicimg/hotels/Ultima/sauna/spa9.webp"
      }
    ]
  }
})
export default class Promo extends Vue {
  data: any = []
  hotel: any = [0]
  category: any = [0]
  hotels: any = [
    {
      id: 0,
      title: 'Все'
    },
  ]
  categories: any = []
  loading: boolean = true
  activeSlide: string = `background-image: url("/img/promo/background.webp")`

  async created() {
    await this.getHotels()
    await this.getCategories()
    await this.getData()
    this.getCurrentHotel()
  }

  getCurrentHotel() {
    let {hotel_id}: any = this.$router.currentRoute.query
    if (!hotel_id) return

    let restId: any = {
      32513: 1,
      22866: 2,
      23660: 3,
    }

    return this.hotel = [restId[hotel_id]]
  }

  async getCategories() {
    try {
      let {data, error}: any = await supaBase
        .from('categoryspecialoffer')
        .select('id, title')
        .order('id')
      this.categories.push(...data)
    } catch (e) {
      console.log(e)
    }
  }

  async getHotels() {
    try {
      let {data, error}: any = await supaBase
        .from('hotels')
        .select('id, title')
        .order('id')
      this.hotels.push(...data)
    } catch (e) {
      console.log(e)
    }
  }

  @Watch('hotel')
  @Watch('category')
  changeHotelAndCategoryList() {
    // category
    if (!this.category.length) {
      this.category.push(0)
    } else if (this.category.length > 1) {
      let item = this.category[this.category.length - 1]
      this.category = [item]
    }

    // hotel
    if (!this.hotel.length) {
      this.hotel.push(0)
    } else if (this.hotel.length > 1) {
      let item = this.hotel[this.hotel.length - 1]
      this.hotel = [item]
    }
  }

  @Watch('hotel')
  @Watch('category')
  async getData() {
    try {
      this.loading = true
      let {data, error} = await supaBase
        .from('specialoffer')
        .select('')
        .contains('idhotel', [...this.hotel])
        .contains('idcategory', [...this.category])
        .order('id')

      this.data = data
    } catch (e) {
      console.log(e)
    } finally {
      this.loading = false
    }
  }
}
</script>

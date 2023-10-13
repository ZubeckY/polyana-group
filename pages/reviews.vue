<template>
  <div>
    <header class="header header-promo">
      <div class="header-container" :style="activeSlide">
        <div class="header-container-inner">
          <header-nav-polyana/>
          <div class="header-promo-body">
            <div class="header-promo-body-container general-container">
              <breadcrumbs-button class="header-promo-back"/>
              <div class="header-promo-title mt-2">ОТЗЫВЫ</div>
            </div>
          </div>

        </div>
      </div>
    </header>

    <section class="specialOffers-promo">
      <div class="specialOffers-promo-container general-container">

        <div class="specialOffers-promo-chips">
          <div class="specialOffers-promo-chips-container">
            <div class="specialOffers-promo-chips-title">По отелям:</div>
            <div class="specialOffers-promo-chips-body">
              <v-chip-group v-model="hotel" column
                            active-class="golden-gradient white--text">
                <v-chip class="white" style="font-size: 12px; height: 31px;"
                        v-for="(item, i) in hotels"
                        :key="i" :value="item.travellineid">
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
    </section>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';
import supaBase from "~/assets/scripts/supaBase";

@Component({})
export default class Promo extends Vue {
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
  }

  async getHotels() {
    try {
      let {data, error} = await supaBase
        .from('hotels')
        .select('id, title, travellineid')
        .order('id')

      let array: any = data
      this.hotels.push(...array)
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

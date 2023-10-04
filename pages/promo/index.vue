<template>
  <div>
    <header class="header header-promo">
      <div class="header-container" :style="activeSlide">
        <div class="header-container-inner">
          <header-nav-polyana/>
          <div class="header-promo-body">
            <div class="header-promo-body-container general-container">
              <breadcrumbs-button class="header-promo-back"/>
              <div class="header-promo-title mt-2">СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ И АКЦИИ</div>
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
              <v-chip-group v-model="hotel" mandatory column
                            active-class="golden-gradient white--text">
                <v-chip class="white" style="font-size: 12px; height: 31px;"
                        v-for="(item, i) in hotels" :key="i"
                        :value="item.value ? item.value : item.title">
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
              <v-chip-group v-model="category" mandatory column
                            active-class="golden-gradient white--text">
                <v-chip class="white" style="font-size: 12px; height: 31px"
                        v-for="(item, i) in categories" :key="i"
                        :value="item.value ? item.value : item.title">
                  {{ item.title }}
                </v-chip>
              </v-chip-group>
            </div>
          </div>
        </div>

        <div v-if="loading">Загрузка</div>
        <div v-else>
          <div class="d-flex" v-if="data.length >= 1">
            <div class="specialOffers-slide flex-wrap" v-for="(item, i) in data" :key="'cornerCard'+i">
              <corner-card class="specialOffers-slide-promo" :item="item"/>
            </div>
          </div>
          <div v-else>Ничего нет</div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import supaBase from "~/assets/scripts/supaBase";

@Component({})
export default class Promo extends Vue {
  data: any = []
  hotel: string = '*'
  category: string = '*'
  hotels: any = [
    {
      title: 'Все',
      value: '*'
    },
  ]
  categories: any = [
    {
      title: 'Все',
      value: '*'
    },
  ]
  loading: boolean = true
  activeSlide: string = `background-image: url("/img/promo/background.webp")`

  async created() {
    await this.getHotels()
    await this.getCategories()
    await this.getData()
  }

  async getCategories() {
    try {
      let {data, error} = await supaBase
        .from('categoryspecialoffer')
        .select('id, title')
        .order('id')

      let array: any = data
      this.categories.push(...array)
    } catch (e) {
      console.log(e)
    } finally {
      this.loading = false
    }
  }

  async getHotels() {
    try {
      let {data, error} = await supaBase
        .from('hotels')
        .select('id, title')
        .order('id')

      let array: any = data
      this.hotels.push(...array)
    } catch (e) {
      console.log(e)
    } finally {
      this.loading = false
    }
  }

  async getData() {
    try {
      let {data, error} = await supaBase
        .from('specialoffer')
        .select('')
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

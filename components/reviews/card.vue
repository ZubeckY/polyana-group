<template>
  <v-card class="reviews-slider-card" elevation="0">
    <div class="reviews-slider-card-container">
      <div class="reviews-slider-card-header">
        <div class="reviews-slider-card-header-user">
          <div class="reviews-slider-card-header-logo">
            <img :src="item.photouser" alt="#">
          </div>
          <div class="reviews-slider-card-header-context">
            <div class="reviews-slider-card-header-name">
              {{ item.nameuser }}
            </div>
          </div>
        </div>
        <div class="reviews-slider-card-header-hotel">{{ hotelTitle }}</div>
      </div>

      <div class="reviews-slider-card-body">
        <div class="reviews-slider-card-stars">
          <rating-yandex-star class="reviews-slider-card-stars-star"
                              v-for="j in item.starrating" :key="'reviewIndexStar'+j"/>
          <div class="reviews-slider-card-date">{{ getElementDate(item.created_at) }}</div>
        </div>
        <div class="reviews-slider-card-description">{{ item.description }}</div>
        <div class="reviews-slider-card-images" @click="dialog = true">
          <img class="reviews-slider-card-images-img" v-for="(imgs, k) in item.imgurls"
               :key="'reviewIndexImage'+k" :src="imgs" alt="#"/>
        </div>
        <gallery-dialog @changeDialog="changeDialog"
                        :dialog="dialog" :data="item.imgurls"/>
      </div>

    </div>
  </v-card>
</template>
<script lang="ts">
import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
import supaBase from "~/assets/scripts/supaBase";

@Component({})
export default class Card extends Vue {
  @Prop() item: any
  hotelTitle: string = ''
  dialog: boolean = false

  async created() {
    await this.getItemHotelTitle()
  }

  @Watch('item')
  async getItemHotelTitle() {
    try {
      let {data, error} = await supaBase
        .from('hotels')
        .select('id, title, travellineid')
        .eq('travellineid', this.item.hoteltlid)

      const DATA: any = data
      this.hotelTitle = DATA[0].title
    } catch (e) {
      console.log(e)
    }
  }

  changeDialog(dialog: boolean) {
    this.dialog = dialog
  }

  getElementDate(date: any) {
    const DATE = new Date(date)
    return ((DATE.getDate() > 8) ? (DATE.getDate() + 1) : ('0' + (DATE.getDate() + 1))) + '.' + ((DATE.getMonth() > 9) ? DATE.getMonth() : ('0' + DATE.getMonth())) + '.' + DATE.getFullYear()
  }
}
</script>

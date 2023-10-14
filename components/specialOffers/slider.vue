<template>
  <div class="specialOffers-slider swiper overflow-hidden" ref="container">
    <div class="swiper-wrapper d-flex flex-row">
      <div class="specialOffers-slide swiper-slide"
           v-if="slides.length > 0" v-for="(item, i) in slides" :key="'cornerCard'+i">
        <corner-card :item="item"/>
      </div>
    </div>
    <v-btn class="specialOffers-slider-prev swiper-button-prev"
           min-height="0" min-width="0" width="34px" height="34px"
           elevation="0" rounded color="#ffffffb8" title="Назад">
      <chevron-left/>
    </v-btn>
    <v-btn class="specialOffers-slider-next swiper-button-next"
           min-height="0" min-width="0" width="34px" height="34px"
           elevation="0" rounded color="#ffffffb8" title="Вперёд">
      <chevron-right/>
    </v-btn>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Ref} from 'vue-property-decorator';
import supaBase from "~/assets/scripts/supaBase";
import {Swiper, Navigation} from 'swiper/core';

@Component({})
export default class SpecialOffersSlider extends Vue {
  @Ref()
  readonly container!: HTMLDivElement;
  swiper: any = Swiper
  slides: any = []

  async mounted() {
    await this.getData()
    await this.initSwiper()
  }

  async initSwiper() {
    Swiper.use([Navigation])
    this.swiper = new Swiper(this.container, {
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }

  async getData() {
    try {
      let {data, error} = await supaBase
        .from('specialoffer')
        .select('id, title, imgvertical, idcategory, created_at')
        .order('id')
      this.slides = data
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<template>
  <div class="header-slider">
    <div class="header-slider-container">

      <v-btn @click="prev" color="rgba(255, 255, 255, 0.72)"
             class="header-slider-arrow" title="Слайд назад" elevation="0" fab>
        <chevron-up class="header-slider-arrow--desktop"/>
        <chevron-left class="header-slider-arrow--mobile"/>
      </v-btn>

      <v-btn-toggle class="header-slider__slider" v-model="slide"
                    color="rgba(255, 255, 255, 0.85)" mandatory>
        <v-btn v-for="(item, i) in small" :key="'header-slide' + i"
               class="header-slider__slide d-flex justify-center align-center"
               title="Слайд 1" color="rgba(255, 255, 255, 0.32)" fab :value="i">
          <nuxt-img width="51px" height="51px" style="border-radius: 100px" loading="lazy"
                    :src="item" alt="Маленькое изображение со слайдера"/>
        </v-btn>
      </v-btn-toggle>

      <v-btn @click="next" color="rgba(255, 255, 255, 0.72)"
             class="header-slider-arrow" title="Слайд вперёд" elevation="0" fab>
        <chevron-down class="header-slider-arrow--desktop"/>
        <chevron-right class="header-slider-arrow--mobile"/>
      </v-btn>

    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';

@Component({})
export default class Slider extends Vue {
  slide: number = 0
  slider: any = [
    "https://thumb.cloud.mail.ru/weblink/thumb/xw1/DWvM/gXMjkb9TC/Country%20Hills%20Resort%202/1%20%D0%AD%D0%BA%D1%81%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80%20%2B%20Ikos/_MG_2455.jpg",
    "https://ztgxmhicyraofyrgiitp.supabase.co/storage/v1/object/public/publicimg/hotels/Country%20Hills/main/main1.webp",
    "https://thumb.cloud.mail.ru/weblink/thumb/xw1/DWvM/gXMjkb9TC/%D0%9E%D1%82%D0%B5%D0%BB%D1%8C%20Ultima%20Club%202/%D1%8D%D0%BA%D1%81%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80/_MG_7748.jpg"
  ]

  small: any = [
    'https://ztgxmhicyraofyrgiitp.supabase.co/storage/v1/object/public/publicimg/mainbanner/small/Frame-16.webp',
    "https://ztgxmhicyraofyrgiitp.supabase.co/storage/v1/object/public/publicimg/hotels/Country%20Hills/main/main1.webp",
    'https://ztgxmhicyraofyrgiitp.supabase.co/storage/v1/object/public/publicimg/mainbanner/small/Frame-13.webp'
  ]

  @Watch('slide')
  changeMainSlide() {
    return this.$emit('changeActiveSlide', this.slider[this.slide])
  }

  prev() {
    this.slide--;
    if (this.slide < 0) {
      this.slide = this.slider.length - 1
    }
  }

  next() {
    this.slide++;
    if (this.slide > this.slider.length - 1) {
      this.slide = 0
    }
  }
}
</script>

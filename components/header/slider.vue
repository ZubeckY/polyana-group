<template>
  <div class="header-slider">
    <div class="header-slider-container">

      <v-btn @click="prev" color="rgba(255, 255, 255, 0.72)"
             class="header-slider-arrow" title="Слайд назад" elevation="0" fab>
        <chevron-up class="header-slider-arrow--desktop"/>
        <chevron-left class="header-slider-arrow--mobile"/>
      </v-btn>

      <v-btn-toggle class="header-slider__slider" v-model="slide"
                    color="rgba(255, 255, 255, 0.75)" mandatory>
        <v-btn v-for="(item, i) in slider" :key="'header-slide' + i"
               class="header-slider__slide d-flex justify-center align-center"
               title="Слайд 1" color="rgba(255, 255, 255, 0.32)" fab :value="i">
          <nuxt-img width="51px" height="51px" style="border-radius: 100px"
                    loading="lazy" quality="80" :placeholder="[50]" format="webp"
                    :src="'img/header/slider/' + item " alt="#"/>
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
    "_MG_2185_1.webp",
    "_MG_2327.webp",
    "_MG_7748.webp"
  ]

  @Watch('slide')
  changeMainSlide () {
    return this.$emit('changeActiveSlide', this.slider[this.slide])
  }

  prev () {
    this.slide --; if (this.slide < 0) { this.slide = this.slider.length - 1 }
  }
  next () {
    this.slide ++; if (this.slide > this.slider.length - 1) { this.slide = 0 }
  }
}
</script>

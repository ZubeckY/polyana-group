<template>
  <div class="header-slider">
    <div class="header-slider-container">

      <button class="header-slider-arrow" title="Слайд назад" @click="prev">
        <chevron-up class="header-slider-arrow--desktop"/>
        <chevron-left class="header-slider-arrow--mobile"/>
      </button>

      <v-btn-toggle class="header-slider__slider" v-model="slide"
                    color="rgba(255, 255, 255, 0.85)" mandatory>
        <v-btn v-for="(item, i) in small" :key="'header-slide' + i"
               class="header-slider__slide d-flex justify-center align-center"
               title="Слайд 1" color="rgba(255, 255, 255, 0.32)" fab :value="i">
          <img width="51px" height="51px" style="border-radius: 100px" loading="lazy"
               :src="item ? item : 'https://placehold.co/900x600/dddddd/dddddd'"
               alt="Маленькое изображение со слайдера"/>
        </v-btn>
      </v-btn-toggle>

      <button class="header-slider-arrow" title="Слайд вперёд" @click="next">
        <chevron-down class="header-slider-arrow--desktop"/>
        <chevron-right class="header-slider-arrow--mobile"/>
      </button>

    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    slide: 0,
    slider: [
      "https://ztgxmhicyraofyrgiitp.supabase.co/storage/v1/object/public/publicimg/mainbanner/large/MG_7748-_1_.webp",
      "https://ztgxmhicyraofyrgiitp.supabase.co/storage/v1/object/public/publicimg/hotels/Country%20Hills/main/main1.webp",
      "https://ztgxmhicyraofyrgiitp.supabase.co/storage/v1/object/public/publicimg/mainbanner/large/MG_2455-_1_.webp"
    ],
    small: [
      'https://ztgxmhicyraofyrgiitp.supabase.co/storage/v1/object/public/publicimg/mainbanner/small/Frame-13.webp',
      'https://ztgxmhicyraofyrgiitp.supabase.co/storage/v1/object/public/publicimg/mainbanner/small/Frame-14.webp',
      'https://ztgxmhicyraofyrgiitp.supabase.co/storage/v1/object/public/publicimg/mainbanner/small/Frame-16.webp'
    ]
  }),

  watch: {
    slide: 'changeMainSlide'
  },

  methods: {
    changeMainSlide() {
      return this.$emit('changeActiveSlide', this.slider[this.slide])
    },

    prev() {
      this.slide--;
      if (this.slide < 0) {
        this.slide = this.slider.length - 1
      }
    },

    next() {
      this.slide++;
      if (this.slide > this.slider.length - 1) {
        this.slide = 0
      }
    }
  }
}
</script>

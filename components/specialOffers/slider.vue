<template>
  <div class="specialOffers-slider swiper overflow-hidden" ref="container">
    <div class="swiper-wrapper d-flex flex-row">
      <div class="specialOffers-slide swiper-slide" v-for="(item, i) in slides" :key="'cornerCard'-i">
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
import {Swiper, Navigation} from 'swiper'
@Component({})
export default class SpecialOffersSlider extends Vue {
  @Ref()
  readonly container!: HTMLDivElement;
  swiper: any = Swiper
  slides: any = [
    {
      id: 'corner-card-1',
      text: 'Дети до 5 лет  — бесплатно \n (если не требуется спальное \n место)',
      img: '/img/specialOffers/1.webp',
    },
    {
      id: 'corner-card-2',
      text: 'Скидки от 5 до 10 %\n при бронировании по телефону или от стойки',
      img: '/img/specialOffers/2.webp',
    },
    {
      id: 'corner-card-3',
      text: 'Трансфер',
      img: '/img/specialOffers/3.webp'
    },
  ]
  mounted () {
    Swiper.use([Navigation])
    this.swiper = new Swiper (this.container, {
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }
}
</script>

<template>
  <div class="specialOffers-slider">
    <div class="swiper overflow-hidden" ref="container">
      <div class="swiper-wrapper d-flex flex-row">
        <div class="swiper-slide" v-for="(item, i) in slides" :key="'corner-card'-i">
          <lazy-corner-card :item="item"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Ref} from 'vue-property-decorator';
import {Swiper} from "swiper";
@Component({})
export default class SpecialOffersSlider extends Vue {
  @Ref()
  readonly container!: HTMLDivElement;
  swiper: any = Swiper
  mounted () {
    this.swiper = new Swiper (this.container, {
      slidesPerView: 'auto',
      spaceBetween: 15,
    })
  }

  slides: any = [
    {
      id: 'corner-card-1',
      text: 'Дети до 5 лет  — бесплатно \n (если не требуется спальное \n место)',
      img: 'img/specialOffers/1.webp',
    },
    {
      id: 'corner-card-2',
      text: 'Скидки от 5 до 10 %\n при бронировании по телефону или от стойки',
      img: 'img/specialOffers/2.webp',
    },
    {
      id: 'corner-card-3',
      text: 'Трансфер',
      img: 'img/specialOffers/3.webp'
    },
  ]

}
</script>

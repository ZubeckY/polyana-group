<template>
  <div class="specialOffers-slider">
    <div class="swiper overflow-hidden" ref="container">
      <div class="swiper-wrapper d-flex flex-row">
        <div class="swiper-slide" v-for="i in 3" :key="'corner-card'-i">
          <lazy-corner-card/>
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
  mounted () {this.swiper = new Swiper (this.container, {slidesPerView: 'auto', spaceBetween: 25,})}
}
</script>

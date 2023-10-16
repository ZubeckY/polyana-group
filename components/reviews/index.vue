<template>
  <section class="reviews">
    <div class="reviews-container general-container">

      <div class="reviews-cards">
        <div class="reviews-title text-uppercase fontSize-xl--s pa-0">Наши гости делятся своими
          впечатлениями об отдыхе
        </div>

        <div class="reviews-cards-group d-flex mt-4">
          <div class="reviews-cards-group-gradient">
            <div class="reviews-cards-group-gradient-card golden-gradient d-flex align-center rounded-xl">
              <div class="reviews-cards-group-gradient-card-round d-flex justify-center align-center mr-3">
                <v-img class="reviews-cards-group-gradient-card-round-img d-block" alt="Я"
                       contain src="/img/reviews/yandex.webp"/>
              </div>
              <div class="reviews-cards-group-gradient-title text-uppercase pa-0">Смотреть отзывы
                в Яндекс
              </div>
            </div>
          </div>

          <div class="reviews-cards-group-transparent ml-6 pt-1">
            <div class="reviews-cards-group-transparent-title pa-0"><b>5,0</b> рейтинг в Яндекс
              на основе 1300+ отзывов
            </div>
            <v-btn class="reviews-cards-group-transparent-button pa-0 mt-1"
                   color="#CCAC6C" height="auto" min-width="0" min-height="0"
                   text>ОСТАВИТЬ ОТЗЫВ
              <div class="button-arrow">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </v-btn>
          </div>
        </div>
      </div>

      <div class="reviews-slider" v-if="data.length > 1">
        <VueSlickCarousel v-bind="settings">
          <div v-for="(item, i) in data" :key="'reviewIndex'+i" class="px-1">
            <reviews-card :item="item"/>
          </div>
          <template #prevArrow="arrowOption">
            <v-btn style="left: -40px; z-index: 1000" min-height="0" min-width="0" width="34px" height="34px"
                   elevation="0" rounded color="#ffffffb8" title="Назад">
              <div class="reviews-slider-arrow prev">&nbsp;</div>
            </v-btn>
          </template>
          <template #nextArrow="arrowOption">
            <v-btn style="right: -40px; z-index: 1000" min-height="0" min-width="0" width="34px" height="34px"
                   elevation="0" rounded color="#ffffffb8" title="Назад">
              <div class="reviews-slider-arrow next">&nbsp;</div>
            </v-btn>
          </template>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import supaBase from "~/assets/scripts/supaBase";
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import {eq} from "dom7";
@Component
export default class Reviews extends Vue {
  @Prop() hotelId: any = null

  settings: any = {
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    touchThreshold: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }
  data: any = []

  async created() {
    await this.getData()
  }

  async getData() {
    if (!this.hotelId) {
      try {
        let {data, error} = await supaBase
          .from('reviews')
          .select('')
          .order('created_at', {ascending: false})
          .limit(10)

        this.data = data
      } catch (e) {
        console.log(e)
      }
    } else {
      try {
        let {data, error} = await supaBase
          .from('reviews')
          .select('')
          .eq('hoteltlid', this.hotelId)
          .order('created_at', {ascending: false})
          .limit(10)

        this.data = data
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

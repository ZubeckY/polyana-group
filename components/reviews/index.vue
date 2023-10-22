<template>
  <section class="reviews">
    <div class="reviews-container general-container">

      <div class="reviews-cards">
        <h3 class="reviews-title section-title text-uppercase fontSize-xl--s pa-0">Наши гости делятся своими
          впечатлениями об отдыхе
        </h3>

        <div class="reviews-cards-group d-flex mt-4">
          <a class="reviews-cards-group-gradient text-decoration-none" :href="viewReviewLink">
            <div class="reviews-cards-group-gradient-card golden-gradient d-flex align-center rounded-xl">
              <div class="reviews-cards-group-gradient-card-round d-flex justify-center align-center mr-3">
                <v-img class="reviews-cards-group-gradient-card-round-img d-block" alt="Я"
                       contain src="/img/reviews/yandex.webp"/>
              </div>
              <div class="reviews-cards-group-gradient-title text-uppercase pa-0">Смотреть отзывы
                Яндекс
              </div>
            </div>
          </a>

          <div class="reviews-cards-group-transparent ml-6 pt-1">
            <div class="reviews-cards-group-transparent-title pa-0"><b>5,0</b> рейтинг в Яндекс
              на основе 1300+ отзывов
            </div>
            <v-btn class="reviews-cards-group-transparent-button pa-0 mt-1" color="#CCAC6C" height="auto"
                   min-width="0" min-height="0" target="_blank" :href="addReviewLink" text>ОСТАВИТЬ ОТЗЫВ
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
            <v-btn style="left: -40px; z-index: 200" min-height="0" min-width="0" width="34px" height="34px"
                   elevation="0" rounded color="#ffffffb8" title="Назад">
              <div class="reviews-slider-arrow prev">&nbsp;</div>
            </v-btn>
          </template>
          <template #nextArrow="arrowOption">
            <v-btn style="right: -40px; z-index: 200" min-height="0" min-width="0" width="34px" height="34px"
                   elevation="0" rounded color="#ffffffb8" title="Вперёд">
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
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

@Component
export default class Reviews extends Vue {
  @Prop() hotelId!: number
  data: any = []
  addReviewLink: string = ''
  viewReviewLink: string = ''
  settings: any = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    touchThreshold: 5,
    lazyLoad: 'progressive',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          centerMode: true,
          speed: 1000,
          autoplaySpeed: 3000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          arrows: false,
          centerMode: false,
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

  async created() {
    await this.getData()
    await this.getReviewLink()
  }

  async getReviewLink() {
    try {
      let {hotel_id}: any = this.$router.currentRoute.query
      if (!hotel_id) {
        this.viewReviewLink = '/reviews'
        this.addReviewLink = 'https://yandex.ru/maps/org/ultima_klab/30635971283/reviews/?add-review=true&ll=40.258516%2C43.684815&mode=search&sll=40.258516%2C43.684815&source=serp_navig&tab=reviews&text=ultima%20club%20hotel&z=16'
        return
      }
      let {data, error}: any = await supaBase
        .from('hotels')
        .select('travellineid, yandexaddreview')
        .eq('travellineid', hotel_id)
      this.viewReviewLink = '/reviews?hotel_id=' + hotel_id
      this.addReviewLink = data[0].yandexaddreview
    } catch (e) {
      console.log(e)
    }
  }

  async getData() {
    try {
      if (!this.hotelId) {
        let {data, error} = await supaBase
          .from('reviews')
          .select('*')
          .order('created_at', {ascending: false})
          .limit(10)

        this.data = data
      } else {
        let {data, error} = await supaBase
          .from('reviews')
          .select('*')
          .eq('hoteltlid', this.hotelId)
          .order('created_at', {ascending: false})
          .limit(6)

        this.data = data
      }
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

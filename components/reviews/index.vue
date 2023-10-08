<template>
  <section class="reviews">
    <div class="reviews-container general-container d-flex">

      <div class="reviews-cards">
        <v-card-title class="reviews-title text-uppercase fontSize-xl--s pa-0">Наши гости делятся
          своими впечатлениями
          об отдыхе
        </v-card-title>

        <!-- -->
        <div class="reviews-cards-group d-flex mt-9">
          <div class="reviews-cards-group-gradient">
            <v-card class="reviews-cards-group-gradient-card d-flex align-center rounded-xl"
                    elevation="0" color="golden-gradient">

              <v-card class="reviews-cards-group-gradient-card-round d-flex justify-center align-center mr-3"
                      rounded="circle" elevation="0">
                <v-img class="reviews-cards-group-gradient-card-round-img d-block" alt="Я"
                       contain src="/img/reviews/yandex.webp"/>
              </v-card>
              <div class="reviews-cards-group-gradient-title text-uppercase pa-0">Смотреть отзывы
                в Яндекс
              </div>

            </v-card>

            <v-card class="reviews-cards-group-gradient-card d-flex align-center rounded-xl mt-4"
                    elevation="0" color="golden-gradient">

              <v-card class="reviews-cards-group-gradient-card-round d-flex justify-center align-center mr-3"
                      rounded="circle" elevation="0">
                <v-img class="reviews-cards-group-gradient-card-round-img d-block" alt="TL"
                       contain src="/img/reviews/tl-rep.webp"/>
              </v-card>
              <div class="reviews-cards-group-gradient-title text-uppercase pa-0">Смотреть отзывы
                в TL: REPUTATION
              </div>

            </v-card>
          </div>

          <div class="reviews-cards-group-transparent">
            <div>
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

            <div class="mt-4">
              <div class="reviews-cards-group-transparent-title pa-0"><b>9,6</b> рейтинг в TravelLine
                на основе 800+ отзывов
              </div>
              <v-btn class="reviews-cards-group-transparent-button pa-0 mt-1"
                     color="#CCAC6C" height="auto" in-width="0" min-height="0" text>ОСТАВИТЬ ОТЗЫВ
              </v-btn>
            </div>
          </div>
        </div>
      </div>

      <div class="reviews-slider">
        <v-carousel hide-delimiters style="height: 301px; border-radius: 19.55px">
          <template v-slot:prev="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on"
                   min-height="0" min-width="0"
                   width="34px" height="34px"
                   elevation="0" rounded
                   color="#ffffffb8" title="Назад">
              <chevron-left/>
            </v-btn>
          </template>
          <template v-slot:next="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on"
                   min-height="0" min-width="0"
                   width="34px" height="34px"
                   elevation="0" rounded
                   color="#ffffffb8" title="Вперёд">
              <chevron-right/>
            </v-btn>
          </template>
          <v-carousel-item v-for="(item, i) in data" :key="'reviewIndex'+i">
            <v-card class="reviews-slider-card" elevation="0">
              <div class="reviews-slider-card-container">
                <div class="reviews-slider-card-header">
                  <div class="reviews-slider-card-header-logo">
                    <img :src="item.photouser" alt="#">
                  </div>
                  <div class="reviews-slider-card-header-context">
                    <div class="reviews-slider-card-header-name">
                      {{ item.nameuser }}
                    </div>
                  </div>
                </div>

                <div class="reviews-slider-card-body">
                  <div class="reviews-slider-card-stars">
                    <rating-yandex-star v-for="j in item.starrating" :key="'reviewIndexStar'+j"/>
                    <div class="reviews-slider-card-date">{{ getElementDate(item.created_at) }}</div>
                  </div>
                  <div class="reviews-slider-card-description">{{ item.description }}</div>
                  <div class="reviews-slider-card-images">
                    <img class="reviews-slider-card-images-img" v-for="(imgs, k) in item.imgurls"
                         :key="'reviewIndexImage'+k" :src="imgs" alt="#"/>
                  </div>
                </div>

              </div>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </div>

    </div>
  </section>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import supaBase from "~/assets/scripts/supaBase";

@Component({})
export default class Reviews extends Vue {
  data: any = []

  async created() {
    await this.getData()
  }

  async getData() {
    try {
      let {data, error} = await supaBase
        .from('reviews')
        .select('')
        .order('id')

      this.data = data
    } catch (e) {
      console.log(e)
    }
  }

  getElementDate(date: any) {
    const DATE = new Date(date)
    return ((DATE.getMonth() > 8) ? (DATE.getMonth() + 1) : ('0' + (DATE.getMonth() + 1))) + '.' + ((DATE.getDate() > 9) ? DATE.getDate() : ('0' + DATE.getDate())) + '.' + DATE.getFullYear()
  }
}
</script>

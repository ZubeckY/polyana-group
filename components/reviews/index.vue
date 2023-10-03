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
                       contain src="img/reviews/yandex.webp"/>
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
                       contain src="img/reviews/tl-rep.webp"/>
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
                <!--                <div class="button-arrow">-->
                <!--                  <span></span>-->
                <!--                  <span></span>-->
                <!--                  <span></span>-->
                <!--                </div>-->
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
        <v-card-actions class="reviews-slider-buttons px-0">
          <v-spacer/>

          <v-btn elevation="0" rounded width="40px" height="40px" min-height="0" min-width="0" title="Назад">
            <chevron-left/>
          </v-btn>

          <v-btn elevation="0" rounded width="40px" height="40px" min-height="0" min-width="0" title="Вперёд">
            <chevron-right/>
          </v-btn>
        </v-card-actions>

        <div class="">
          <v-card class="reviews-slider-card rounded-xxl" elevation="0" width="558px" height="289px"></v-card>
        </div>
      </div>

    </div>
  </section>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class Reviews extends Vue {
}
</script>

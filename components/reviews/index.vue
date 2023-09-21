<template>
  <section class="reviews">
    <div class="reviews-container general-container d-flex">

      <div class="reviews-cards">
        <v-card-title class="reviews-title text-uppercase fontSize-xl--l pa-0">Наши гости делятся
          своими впечатлениями
          об отдыхе
        </v-card-title>

        <!-- -->
        <div class="reviews-cards-group d-flex mt-9">
          <div class="reviews-cards-group-gradient">
            <v-card class="reviews-cards-group-gradient-card d-flex align-center rounded-xl px-4"
                    elevation="0" color="golden-gradient">

              <v-card class="reviews-cards-group-gradient-card-round d-flex justify-center align-center mr-3"
                      rounded="circle" elevation="0">
                <v-img class="reviews-cards-group-gradient-card-round-img d-block" alt="Я"
                       contain src="img/reviews/yandex.png" />
              </v-card>
              <v-card-title class="reviews-cards-group-gradient-title text-uppercase pa-0">Смотреть отзывы
                в Яндекс</v-card-title>

            </v-card>

            <v-card class="reviews-cards-group-gradient-card d-flex align-center rounded-xl mt-4 px-4"
                    elevation="0" color="golden-gradient">

              <v-card class="reviews-cards-group-gradient-card-round d-flex justify-center align-center mr-3"
                      rounded="circle" elevation="0">
                <v-img class="reviews-cards-group-gradient-card-round-img d-block" alt="TL"
                       contain src="img/reviews/tl-rep.png"/>
              </v-card>
              <v-card-title class="reviews-cards-group-gradient-title text-uppercase pa-0">Смотреть отзывы
                в TL: REPUTATION</v-card-title>

            </v-card>
          </div>

          <div class="reviews-cards-group-transparent ml-8">
            <v-card elevation="0" height="78px" color="transparent">
              <v-card-title class="reviews-cards-group-transparent-title pa-0">5,0 рейтинг в Яндекс
                на основе 1300+ отзывов
              </v-card-title>
              <v-btn class="reviews-cards-group-transparent-button pa-0 mt-1"
                     color="#CCAC6C" height="auto" min-width="0" min-height="0"
                     text>ОСТАВИТЬ ОТЗЫВ</v-btn>
            </v-card>

            <v-card class="mt-4" elevation="0" height="78px" color="transparent">
              <v-card-title class="reviews-cards-group-transparent-title pa-0">5,0 рейтинг в TravelLine
                на основе 800+ отзывов
              </v-card-title>
              <v-btn class="reviews-cards-group-transparent-button pa-0 mt-1"
                     color="#CCAC6C" height="auto" in-width="0" min-height="0" text>ОСТАВИТЬ ОТЗЫВ</v-btn>
            </v-card>
          </div>
        </div>
      </div>

      <div class="reviews-slider">
        <v-card-actions class="reviews-slider-buttons px-0">
          <v-spacer/>

          <v-btn elevation="0" rounded width="40px" height="40px" min-height="0" min-width="0" title="Назад">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>

          <v-btn elevation="0" rounded width="40px" height="40px" min-height="0" min-width="0" title="Вперёд">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>

        </v-card-actions>

        <div class="">
          <v-card class="reviews-slider-card rounded-xxl" elevation="0" width="558px" height="289px">
          </v-card>
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

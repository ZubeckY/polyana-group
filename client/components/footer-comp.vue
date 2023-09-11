<template>
  <footer class="footer">
    <v-card class="footer-card d-flex align-center rounded-xxl"
            elevation="0" height="520px"
            color="var(--card-grey)">
      <div class="footer-container general-container">
        <div class="d-flex">

          <div class="footer-seeYouAtHotel">
            <v-card-title class="footer-title">До встречи в наших отелях</v-card-title>
            <v-chip-group v-model="activeChip" mandatory column
                          active-class="golden-gradient white--text">
              <v-chip class="text-uppercase"
                      v-for="(item, i) in localMapping"
                      :key="item.id" :value="i"
                      color="#FAFAFD"
                      style="font-size: 14px; font-weight: 400; height: 38px;">
                {{ item.title }}
              </v-chip>
            </v-chip-group>

            <v-row class="">
              <v-col cols="auto">
                <v-card-title class="footer-title">Контакты</v-card-title>
                <v-card-text style="white-space: pre-line"><span class="text-uppercase">Адрес:</span>
                  Краснодарский край,
                  Красная поляна,
                  с. Эсто-Садок,
                  Автомобильный
                  переулок, 4
                </v-card-text>
                <v-card-text class="text-uppercase" style="white-space: pre-line"><span class="text-decoration-underline">8 938 555 5552</span>
                  Отдел бронирования
                  (09:00 - 21:00)
                </v-card-text>
                <v-card-text class="text-uppercase" style="white-space: pre-line"><span class="text-decoration-underline">8 938 555 5551</span>
                  Рецепция (круглосуточно)
                </v-card-text>
              </v-col>
              <v-col>
                <v-carousel v-model="activeSlide"
                            style="width: 364px;border-radius: 50px"
                            height="290px"
                            hide-delimiters>
                  <v-carousel-item style="border-radius: 50px"
                                   v-for="(item, i) in localMapping[activeChip]['photos']"
                                   :key="'photo-' + item.id">
                    <footer-slide :item="item"/>
                  </v-carousel-item>
                </v-carousel>

              </v-col>
            </v-row>

          </div>

          <div class="footer-helpInfo">
            <v-card-title class="footer-title">помощь и информация</v-card-title>
            <v-card-subtitle class="my-2 pb-0 text-uppercase" style="color: #000;font-size: 17px;font-weight: 700;">О Комплексе</v-card-subtitle>

            <v-card-actions class="d-flex flex-column align-start pt-0 pl-2">
              <v-btn class="text-none pl-2 pa-0 mb-1"
                     width="auto"
                     height="auto"
                     min-width="0"
                     min-height="0"
                     color="black"
                     text style="font-size: 16px">
                О нас
              </v-btn>
              <v-btn class="text-none pa-0 mb-1"
                     width="auto"
                     height="auto"
                     min-width="0"
                     min-height="0"
                     color="black"
                     text style="font-size: 16px">
                Блог
              </v-btn>
              <v-btn class="text-none pa-0 mb-1"
                     width="auto"
                     height="auto"
                     min-width="0"
                     min-height="0"
                     color="black"
                     text style="font-size: 16px">
                Размещение
              </v-btn>
              <v-btn class="text-none pa-0 mb-1"
                     width="auto"
                     height="auto"
                     min-width="0"
                     min-height="0"
                     color="black"
                     text style="font-size: 16px">
                Услуги
              </v-btn>
              <v-btn class="text-none pa-0 mb-1"
                     width="auto"
                     height="auto"
                     min-width="0"
                     min-height="0"
                     color="black"
                     text style="font-size: 16px">
                Специальные предложения
              </v-btn>
              <v-btn class="text-none pa-0 mb-1"
                     width="auto"
                     height="auto"
                     min-width="0"
                     min-height="0"
                     color="black"
                     text style="font-size: 16px">
                Как добраться
              </v-btn>
              <v-btn class="text-none pa-0 mb-1"
                     width="auto"
                     height="auto"
                     min-width="0"
                     min-height="0"
                     color="black"
                     text style="font-size: 16px">
                Трансфер
              </v-btn>
              <v-btn class="text-none pa-0 mb-1"
                     width="auto"
                     height="auto"
                     min-width="0"
                     min-height="0"
                     color="black"
                     text style="font-size: 16px">
                Реквизиты
              </v-btn>
              <v-btn class="text-none pa-0"
                     width="auto"
                     height="auto"
                     min-width="0"
                     min-height="0"
                     color="black"
                     text style="font-size: 16px">
                Контакты
              </v-btn>
            </v-card-actions>

            <v-card-actions class="d-flex flex-column align-start pl-2">
              <v-btn class="text-none pa-0 pl-2 mb-1"
                     width="auto"
                     height="auto"
                     min-width="0"
                     min-height="0"
                     color="black"
                     text style="font-size: 16px">
                Частые вопросы
              </v-btn>
              <v-btn class="text-none pa-0 mb-1"
                     width="auto"
                     height="auto"
                     min-width="0"
                     min-height="0"
                     color="black"
                     text style="font-size: 16px">
                Инфраструктура
              </v-btn>
              <v-btn class="text-none pa-0"
                     width="auto"
                     height="auto"
                     min-width="0"
                     min-height="0"
                     color="black"
                     text style="font-size: 16px">
                Активности на Красной поляне
              </v-btn>
            </v-card-actions>
          </div>

          <v-spacer/>

          <v-card class="footer-booking d-flex flex-column justify-center rounded-xxl"
                  width="318px" height="439px" color="#454850" elevation="0">

            <logo/>

            <v-card-actions class="pa-0 mt-10">
              <v-btn class="footer-booking-btn rounded-xxl mx-auto" width="237px" height="37px"
                     color="golden-gradient" elevation="0" dark v-text="'Забронировать'"></v-btn>
            </v-card-actions>

            <v-card-text class="footer-booking-text text-center mt-3">Забронируйте номер
              через удобный для вас
              мессенджер на прямую:
            </v-card-text>

            <v-card-actions class="d-flex justify-center pa-0 mt-3">
              <v-btn class="rounded-lg"
                     width="36px" height="36px"
                     min-width="0" min-height="0"
                     elevation="0" color="#2787f5">
                ВК
              </v-btn>
              <v-btn class="rounded-lg"
                     width="36px" height="36px"
                     min-width="0" min-height="0"
                     elevation="0" color="#24A2DF">
                ТГ
              </v-btn>
              <v-btn class="rounded-lg"
                     width="36px" height="36px"
                     min-width="0" min-height="0"
                     elevation="0" color="#60a55f">
                ВА
              </v-btn>

            </v-card-actions>

          </v-card>
        </div>
      </div>
    </v-card>

    <div class="footer-mazur">
      <div class="footer-mazur-container general-container d-flex align-end justify-space-between">
        <div class="footer-mazur-polyana text-uppercase">Ⓒpolyana group | 2023</div>
        <div class="footer-mazur-text text-right text-uppercase">
          <div>
            РАЗРАБОТАНО <a class="text-decoration-none" href="" target="_blank">mazurgroup.ru</a>
          </div>
          <div>Политика конфиденциальности</div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';

@Component({})
export default class footerComp extends Vue {
  activeChip: number = 0
  activeSlide: number = 0
  localMapping: any = [
    {
      id: 1,
      priority: 1,
      title: 'ULTIMA CLUB | HOTEL & SPA',
      photos: [
        {
          id: 11,
          priority: 1,
          url: 'https://via.placeholder.com/1024x768/eee?text=4:3',
        },
        {
          id: 12,
          priority: 2,
          url: 'https://via.placeholder.com/1024x768/eee?text=4:3',
        },
      ]
    },
    {
      id: 2,
      priority: 2,
      title: 'IKOS POLYANA',
      photos: [
        {
          id: 2,
          priority: 1,
          url: 'https://via.placeholder.com/1024x768/eee?text=4:3',
        },
      ]
    },
    {
      id: 3,
      priority: 3,
      title: 'COUNTRY hills resort',
      photos: [
        {
          id: 3,
          priority: 1,
          url: 'https://via.placeholder.com/1024x768/eee?text=4:3',
        },
      ]
    },
  ]

  @Watch('activeChip')
  changeController () {
    this.changeMapping()
    this.emptyActiveSlide ()
  }

  changeMapping () {
    this.$emit('changeMapping', this.localMapping[this.activeChip]['htmltagyandexmap'])
  }

  emptyActiveSlide () {
    return this.activeSlide = -1
  }
}
</script>

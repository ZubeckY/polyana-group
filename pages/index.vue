<template>
  <div>

    <!-- хедер -->
    <header-main :activeImage="activeImage"
                      @changeActiveSlide="changeActiveSlide"/>

    <!-- рейтинг карточки -->
    <section class="rating mt-5">
      <div class="rating-container justify-space-between d-flex">
        <!-- Яндекс -->
        <rating-yandex/>
        <!-- Высокий рейтинг -->
        <rating-tl-rep/>
        <!-- Отели 4-5 звёзд -->
        <rating-we-care/>
        <!-- Удобное бронирование -->
        <rating-booking-comfort/>
        <!-- Актуальное (погода) -->
        <rating-weather/>
      </div>
    </section>

    <!-- пинтерест -->
    <section class="pinterest mt-8">
      <div class="pinterest-container">

        <v-card class="pinterest-card" height="485px"
                elevation="0" color="var(--card-grey)">
          <div class="pinterest-card-container general-container">
            <v-card-title class="pinterest-card-title fontSize-xl--l d-inline-block mt-4">ДИЗАЙНЕРСКИЕ ОТЕЛИ
              КАК С КАРТИНОК <span><img src="img/pinterest/index.png" alt="#"/></span>
            </v-card-title>

            <v-card class="pinterest-card-welcome general-container mt-6" color="transparent" elevation="0">
              <div class="pinterest-card-welcome-container d-flex justify-end">
                <div class="pinterest-card-welcome-wrapper">
                  <v-card-text class="pinterest-card-text">Добро пожаловать в нашу группу отелей на Красной
                    Поляне, где комфорт и неповторимые виды сливаются
                    воедино. Насладитесь шикарными номерами,
                    удивительной кухней, расслабляющим спа-центром и
                    невероятными панорамными видами на окружающие
                    горы. Погрузитесь в атмосферу уюта и природной
                    красоты!</v-card-text>
                </div>
              </div>

              <v-card class="pinterest-video rounded-xxl"
                      elevation="0" width="100%" height="485px"
                      img="img/pinterest/video.png">
                <v-card class="pinterest-video-aboutHotels d-flex justify-center align-center"
                        color="var(--dark-color)"
                        elevation="0" rounded="circle"
                        width="160px" height="160px">
                  <pinterest-rotate/>
                  <v-img class="pinterest-video-aboutHotels-play" contain
                         src="img/top-right-arrow.png"/>
                </v-card>
              </v-card>
            </v-card>
          </div>
        </v-card>

      </div>
    </section>

    <!-- Группа отелей -->
    <section class="hotelGroup">
      <div class="hotelGroup-container general-container">

        <v-card-title class="hotelGroup-title section-title fontSize-xl--l text-uppercase">ГРУППА ОТЕЛЕЙ
          POLYANA GROUP на КРАСНОЙ ПОЛЯНЕ
        </v-card-title>

        <div class="hotelGroup-line"></div>

        <v-expansion-panels class="hotelGroup-accordion" v-model="hotels" accordion>
          <v-expansion-panel class="hotelGroup-accordion-item transparent"
                             v-for="item in hotelList" :key="item.id">
            <v-expansion-panel-header class="hotelGroup-accordion-item--header ma-0 pa-0" disable-icon-rotate>
              <div class="hotelGroup-accordion-item--header-container d-flex align-center my-2">

                <div class="hotelGroup-accordion-item--header-count fontSize-m--xl d-flex justify-center align-center golden-gradient--text">
                  {{ item.id }}
                </div>

                <v-card-title class="hotelGroup-accordion-item--header-title fontSize-xxl text-uppercase golden-gradient--text">
                  {{ item.title }}
                </v-card-title>

                <v-card-title class="hotelGroup-accordion-item--header-price fontSize-xl--s text-uppercase mr-8">
                  От {{ getItemPrice(item) }} руб.
                </v-card-title>
              </div>

              <template v-slot:actions>
                <div class="hotelGroup-accordion-item--header-arrow d-flex justify-center align-center">
                  <v-img src="img/top-right-arrow-2.png" alt="#"/>
                </div>
              </template>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              содержание вкладки
            </v-expansion-panel-content>

          </v-expansion-panel>
        </v-expansion-panels>
        <div class="hotelGroup-line"></div>
      </div>
    </section>

    <!-- Специальные предложения -->
    <special-offers/>

    <!-- Развлекуха летом/зимой-->
    <section class="seasonPrograms">
      <div class="seasonPrograms-container">

        <!-- Летом  -->
        <div class="seasonPrograms-group d-flex justify-space-between">
          <v-card class="seasonPrograms-summer seasonPrograms-item"
                  elevation="0" rounded="xxl"
                  width="63px" height="165px"
                  color="transparent">
            <div class="seasonPrograms-item-container">
              <div class="seasonPrograms-item-text summer d-flex justify-center align-center rounded-xxl">Летом</div>
            </div>
          </v-card>

          <!-- Бесплатный трансфер до пляжа -->
          <v-card class="seasonPrograms-card free-transfer"
                  rounded="xxl" height="165px"
                  elevation="0" color="var(--card-grey)">
            <div class="seasonPrograms-card-container">
              <div class="seasonPrograms-card-header">
                <div class="seasonPrograms-card-image mt-4 mr-2">
                  <v-img class="d-block" alt="sunbed" width="60px" height="60px"
                         contain src="img/seasonPrograms/summer/sunbed.png"/>
                </div>
                <v-card-title class="seasonPrograms-card-title pt-1">БЕСПЛАТНЫЙ
                  ТРАНСФЕР
                  ДО ПЛЯЖА</v-card-title>
              </div>
              <v-vertical-spacer/>
              <v-card-text class="pa-0">Наши гости могут воспользоваться
                бесплатным трансфером до пляжа
              </v-card-text>
            </div>
          </v-card>

          <!-- Живая музыка в баре у бассейна -->
          <v-card class="seasonPrograms-card live-music"
                  rounded="xxl" height="165px"
                  elevation="0" color="var(--card-grey)">
            <div class="seasonPrograms-card-container">
              <div class="seasonPrograms-card-header">
                <div class="seasonPrograms-card-image mt-4 mr-2">
                  <v-img class="d-block" alt="music" width="67px" height="67px"
                         contain src="img/seasonPrograms/summer/music.png"/>
                </div>
                <v-card-title class="seasonPrograms-card-title pt-1">Живая музыка
                  В БАРЕ У бассейна</v-card-title>
              </div>
              <v-vertical-spacer/>
              <v-card-text class="pa-0">Живая музыка в баре у бассейна
                создает идеальную атмосферу
              </v-card-text>
            </div>
          </v-card>

          <!-- Анимация для детей: веселье и игры -->
          <v-card class="seasonPrograms-card fun-for-kids"
                  rounded="xxl" height="165px"

                  elevation="0" color="var(--card-grey)">
            <div class="seasonPrograms-card-container">
              <div class="seasonPrograms-card-header">
                <div class="seasonPrograms-card-image mt-4 mr-2">
                  <v-img class="d-block" alt="party" width="67px" height="67px"
                         contain src="img/seasonPrograms/summer/party.png"/>
                </div>
                <v-card-title class="seasonPrograms-card-title pt-1">Анимация для
                  детей: веселье
                  и ИГРЫ</v-card-title>
              </div>
              <v-vertical-spacer/>
              <v-card-text class="pa-0">Наши маленькие гости не соскучатся благодаря
                увлекательной детской анимации с играми и развлечениями
              </v-card-text>
            </div>
          </v-card>

          <!-- Ещё -->
          <v-btn class="seasonPrograms-more rounded-xxl"
                 width="63px" height="165px" elevation="0" color="transparent">
            <div class="seasonPrograms-more-container">
              <div class="seasonPrograms-more-text summer d-flex justify-center align-center rounded-xxl">Ещё</div>
            </div>
          </v-btn>

        </div>

        <!-- Зимой -->
        <div class="seasonPrograms-group d-flex justify-space-between mt-8">

          <v-card class="seasonPrograms-winter seasonPrograms-item"
                  rounded="xxl" width="63px" height="165px"
                  elevation="0" color="transparent">
            <div class="seasonPrograms-item-container">
              <div class="seasonPrograms-item-text winter d-flex justify-center align-center rounded-xxl">Зимой</div>
            </div>
          </v-card>

          <!-- бесплатный трансфер до подъёмников -->
          <v-card class="seasonPrograms-card free-transfer"
                  rounded="xxl" height="165px"
                  elevation="0" color="var(--cold-grey)">
            <div class="seasonPrograms-card-container">
              <div class="seasonPrograms-card-header">
                <div class="seasonPrograms-card-image mt-4 mr-2">
                  <v-img class="d-block" alt="#" width="60px" height="60px"
                         contain src="img/seasonPrograms/winter/cable-car.png"/>
                </div>
                <v-card-title class="seasonPrograms-card-title pt-1">БЕСПЛАТНЫЙ
                  ТРАНСФЕР
                  ДО ПОДЪЕМНИКОВ</v-card-title>
              </div>
              <v-vertical-spacer/>
              <v-card-text class="pa-0">Воспользуйтесь бесплатным
                трансфером до горнолыжных трасс
              </v-card-text>
            </div>
          </v-card>

          <!-- ski-room хранилище для зимнего спортивного снаряжения -->
          <v-card class="seasonPrograms-card ski-room"
                  rounded="xxl" height="165px"
                  elevation="0" color="var(--cold-grey)">
            <div class="seasonPrograms-card-container">
              <div class="seasonPrograms-card-header">
                <div class="seasonPrograms-card-image mt-4 mr-2">
                  <v-img class="d-block" alt="#" width="60px" height="60px"
                         contain src="img/seasonPrograms/winter/skis.png"/>
                </div>
                <v-card-title class="seasonPrograms-card-title pt-1">ski-room хранилище для
                  зимнего спортивного
                  снаряжения</v-card-title>
              </div>
              <v-vertical-spacer/>
              <v-card-text class="pa-0">Обеспечим безопасное хранение вашего зимнего
                снаряжения с функцией эффективной сушки.
              </v-card-text>
            </div>
          </v-card>

          <!-- подогреваемый бассеин -->
          <v-card class="seasonPrograms-card heated-pool"
                  rounded="xxl" height="165px"
                  elevation="0" color="var(--cold-grey)">
            <div class="seasonPrograms-card-container">
              <div class="seasonPrograms-card-header">
                <div class="seasonPrograms-card-image mt-4 mr-2">
                  <v-img class="d-block" alt="#" width="63px" height="63px"
                         contain src="img/seasonPrograms/winter/pool.png"/>
                </div>
                <v-card-title class="seasonPrograms-card-title pt-1">ПОДОГРЕВАЕМЫй
                  БАССЕЙН</v-card-title>
              </div>
              <v-vertical-spacer/>
              <v-card-text class="pa-0">Насладитесь всегда теплым бассейном:
                +30 градусов круглый год! *
              </v-card-text>
            </div>
          </v-card>

          <!-- Ещё -->
          <v-btn class="seasonPrograms-more rounded-xxl"
                 width="63px" height="165px" elevation="0" color="transparent">
            <div class="seasonPrograms-more-container">
              <div class="seasonPrograms-more-text winter d-flex justify-center align-center rounded-xxl">Ещё</div>
            </div>
          </v-btn>

        </div>

      </div>
    </section>
    <!-- Эксклюзивная скидка за звонок -->
    <exclusive/>
    <!-- Наши гости делятся своими впечатлениями об отдыхе -->
    <reviews/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import thousandSeparator from "assets/scripts/thousandSeparator";
@Component({
  methods: {thousandSeparator}
})
export default class Pages extends Vue {
  activeImage: string = '_MG_2185_1.jpg'
  hotels: number = 0
  hotelList: any = [
    {
      id: '001',
      title: 'ULTIMA CLUB | HOTEL & SPA',
      price: 8_600,
    },
    {
      id: '002',
      title: 'COUNTRY HILLS | RESORT',
      price: 10_600,
    },
    {
      id: '003',
      title: 'IKOS POLYANA',
      price: 5_900,
    },
  ]

  getItemPrice (item: any) {
    return item ? thousandSeparator (item['price']) : 0
  }

  changeActiveSlide (value: string) {return this.activeImage = value}
}
</script>

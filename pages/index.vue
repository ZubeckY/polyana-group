<template>
  <div>

    <!-- хедер -->
    <header class="header header-main">
      <div class="header-container" :style="activeSlide">
        <div class="header-container-inner">
          <nav class="header-nav">
            <div class="header-nav-container general-container d-flex align-center flex-row">
              <v-btn class="header-nav__menu mr-auto pa-0" text
                     min-width="0" min-height="0" width="auto" height="0">
                <div class="header-nav__menu-container d-flex justify-center align-center flex-column">
                  <div class="d-flex justify-center align-center flex-column">
                    <div v-for="i in 3" :key="'image'+i" class="header-nav__menu-line"></div>
                  </div>
                  <div class="header-nav__menu-title">Меню</div>
                </div>
              </v-btn>

              <link-component class="header-nav__link mx-auto" v-for="(item,i) in firstLinks" :key="i" :item="item"/>
              <logo class="mx-auto"/>
              <link-component class="header-nav__link mx-auto" v-for="(item,i) in secondLinks" :key="i" :item="item"/>

              <div class="header-nav__reservation ml-auto">
                <div class="header-nav__reservation-container d-flex flex-column">
                  <v-btn class="header-nav__reservation-booking font-weight-bold" elevation="0" color="var(--golden-2)">Забронировать</v-btn>
                  <v-btn class="header-nav__reservation-phone font-weight-bold" elevation="0" dark>+7 989 009 5577</v-btn>
                </div>
              </div>
            </div>
          </nav>

          <div class="header-body">
            <div class="header-body-container general-container">
              <div class="header-content d-flex">
                <div class="header-content__season">
                  <div class="header-content__season-container">
                    <v-btn-toggle active-class="season-active" mandatory
                                  class="header-content__season-switch ma-0 pa-0">
                      <v-btn class="header-content__season-switch-button pa-0 ma-0"
                             elevation="0" min-height="0" min-width="0" value="summer" text>Лето</v-btn>
                      <v-btn class="header-content__season-switch-button pa-0 ma-0"
                             elevation="0" min-height="0" min-width="0" value="winter" text>Зима</v-btn>
                    </v-btn-toggle>
                  </div>
                </div>
                <div class="header-content__title">
                  <div class="header-content__title-container">
                    <div class="section-title fontSize-xl--l text-uppercase white--text text-pre-line pa-0">Отдыхайте с комфортом
                      и наслаждайтесь<span class="golden-gradient--text"> красотами
                        Красной Поляны</span> в наших
                      уникальных отелях!
                    </div>
                  </div>
                </div>
              </div>

              <div class="header-slider">
                <div class="header-slider-container">

                  <v-btn class="header-slider-arrow" elevation="0" fab>
                    <v-icon>mdi-chevron-up</v-icon>
                  </v-btn>

                  <v-btn-toggle class="header-slider__slider"
                                color="rgba(255, 255, 255, 0.75)" mandatory>
                    <v-btn class="header-slider__slide"
                           color="rgba(255, 255, 255, 0.32)"
                           min-height="0" min-width="0" fab>
                    </v-btn>
                    <v-btn class="header-slider__slide"
                           color="rgba(255, 255, 255, 0.32)"
                           min-height="0" min-width="0" fab>
                    </v-btn>
                    <v-btn class="header-slider__slide"
                           color="rgba(255, 255, 255, 0.32)"
                           min-height="0" min-width="0" fab>
                    </v-btn>
                  </v-btn-toggle>

                  <v-btn class="header-slider-arrow" elevation="0" fab>
                    <v-icon>mdi-chevron-down</v-icon>
                  </v-btn>

                </div>
              </div>

            </div>
          </div>

          <div class="header-booking">
            <div class="header-booking-container d-flex">

              <div class="header-booking__card hotel">
                <div class="header-booking__card-container">
                  <div class="header-booking__card-head d-flex align-center flex-row">
                    <v-spacer/>
                    <div>&nbsp;</div>
                  </div>
                  <div class="header-booking__card-title hotel">Ultima Club Hotel&...</div>
                </div>
              </div>

              <div class="header-booking-delimiter"></div>

              <div class="header-booking__card">
                <div class="header-booking__card-container">
                  <div class="header-booking__card-head d-flex align-center flex-row">
                    <div>Заезд</div>
                    <v-spacer/>
                    <div>&nbsp;</div>
                    <nuxt-img loading="lazy" sizes="sm:355px md:320px lg:480px"
                              class="d-block" alt="#" width="23px" height="23px"
                              src="img/top-right-arrow.png" quality="80" :placeholder="[50]"/>
                  </div>
                  <div class="header-booking__card-title">4 августа 2023</div>
                </div>
              </div>

              <div class="header-booking-delimiter"></div>

              <div class="header-booking__card">
                <div class="header-booking__card-container">
                  <div class="header-booking__card-head d-flex align-center flex-row">
                    <div>Выезд</div>
                    <v-spacer/>
                    <div>&nbsp;</div>
                    <nuxt-img loading="lazy" sizes="sm:355px md:320px lg:480px"
                              class="d-block" alt="#" width="23px" height="23px"
                              src="img/top-right-arrow.png" quality="80" :placeholder="[50]"/>
                  </div>
                  <div class="header-booking__card-title">7 августа 2023</div>
                </div>
              </div>

              <div class="header-booking-delimiter"></div>

              <div class="header-booking__card">
                <div class="header-booking__card-container">
                  <div class="header-booking__card-head d-flex align-center flex-row">
                    <div>Гости</div>
                    <v-spacer/>
                    <div>&nbsp;</div>
                    <nuxt-img loading="lazy" sizes="sm:355px md:320px lg:480px"
                              class="d-block" alt="#" width="23px" height="23px"
                              src="img/top-right-arrow.png" quality="80" :placeholder="[50]"/>
                  </div>
                  <div class="header-booking__card-title">2</div>
                </div>
              </div>

              <div class="header-booking-delimiter"></div>

              <div class="header-booking__card search">
                <div class="header-booking__card-container d-flex justify-center align-center">
                  <v-btn class="header-booking__card-button text-none"
                         elevation="0" color="var(--dark-color)"
                         min-height="0" min-width="0" dark>
                    <nuxt-img loading="lazy" sizes="sm:355px md:320px lg:480px"
                              class="d-block mr-2" alt="#" width="20px" height="20px"
                              src="img/search.png" quality="80" :placeholder="[50]"/>
                    <div>Найти номер</div>
                  </v-btn>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </header>

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
                  <nuxt-img loading="lazy" sizes="sm:355px md:320px lg:480px" class="pinterest-video-aboutHotels-play"
                            src="img/top-right-arrow.png" fit="contain" quality="80" :placeholder="[50]"/>
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
                  <nuxt-img loading="lazy" sizes="sm:355px md:320px lg:480px" src="img/top-right-arrow.png" quality="80" :placeholder="[50]"/>
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
                <div class="seasonPrograms-card-image mt-2 mr-2">
                  <nuxt-img loading="lazy" sizes="sm:355px md:320px lg:480px" class="d-block" alt="sunbed" width="60px" height="60px"
                            src="img/seasonPrograms/summer/sunbed.png" quality="80" :placeholder="[50]"/>
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
                <div class="seasonPrograms-card-image mt-1 mr-2">
                  <nuxt-img loading="lazy" sizes="sm:355px md:320px lg:480px" class="d-block" alt="music" width="67px" height="67px"
                            src="img/seasonPrograms/summer/music.png" quality="80" :placeholder="[50]"/>
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
                <div class="seasonPrograms-card-image mt-2 mr-2">
                  <nuxt-img loading="lazy" sizes="sm:355px md:320px lg:480px" class="d-block" alt="party" width="67px" height="67px"
                            src="img/seasonPrograms/summer/party.png"
                            quality="80" :placeholder="[50]"/>
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
                  <nuxt-img loading="lazy" sizes="sm:355px md:320px lg:480px" class="d-block" alt="#" width="60px" height="60px"
                            src="img/seasonPrograms/winter/cable-car.png" quality="80" :placeholder="[50]"/>
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
                  <nuxt-img loading="lazy" sizes="sm:355px md:320px lg:480px" class="d-block" alt="#" width="60px" height="60px"
                            src="img/seasonPrograms/winter/skis.png" quality="80" :placeholder="[50]"/>
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
                  <nuxt-img loading="lazy" sizes="sm:355px md:320px lg:480px" class="d-block" alt="#" width="63px" height="63px"
                            src="img/seasonPrograms/winter/pool.png" quality="80" :placeholder="[50]"/>
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
  activeImage: string = '_MG_2185_1.webp'
  hotels: number = 0
  links: any = [
    {
      title: 'Главная'
    },
    {
      title: 'Отели'
    },
    {
      title: 'Номера'
    },
    {
      title: 'SPA'
    },
    {
      title: 'Услуги'
    },
    {
      title: 'Ресторан'
    },
    {
      title: 'Контакты'
    },
  ]

  get activeSlide () {
    return `background-image: url('img/header/slider/${this.activeImage}')`
  }

  get firstLinks () {
    let array = []
    for (let i = 0; i < this.links.length; i++) {
      array.push(this.links[i])
      if (this.links[i]['title'] === 'SPA') break
    }
    return array
  }

  get secondLinks () {
    let array = []
    for (let i = 0; i < this.links.length; i++) {
      if (i >= 4) {
        array.push(this.links[i])
      }
    }
    return array
  }

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

  changeActiveSlide (value: string) {
    return this.activeImage = value
  }
}
</script>

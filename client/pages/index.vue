<template>
  <div>
    <!-- хедер -->
    <header class="header mt-3">
      <!-- Картинка -->
      <v-img class="header-container" elevation="0" position="top right" contain
             :src="require('assets/img/header/slider/' + activeImage)">
        <!-- Градиент -->
        <v-card class="header-wrapper" color="transparent">
          <div class="header-wrapper-inner general-container">
            <!-- Навигация -->
            <nav-polyana/>
            <!-- Контент -->
            <div class="header-wrapper d-flex flex-row">
              <div class="header-wrapper-container d-flex flex-column">
                <v-vertical-spacer v-if="showButtons"/>
                <!-- Отдыхайте с комфортом, ( Лето/Зима ) -->
                <section class="header-info">
                  <div class="header-info-container general-container d-flex">
                    <div class="d-flex flex-row">
                      <!-- Лето/Зима -->
                      <header-switch v-if="showButtons"/>
                      <!-- Отдыхайте с комфортом -->
                      <div class="relax-in-comfort">
                        Отдыхайте с комфортом и наслаждайтесь
                        <span class="golden">красотами Красной Поляны</span>
                        в наших уникальных отелях!
                      </div>
                    </div>
                  </div>
                </section>
                <v-vertical-spacer/>
                <!-- Панель бронирования -->
                <header-booking/>
              </div>
              <v-spacer/>
              <!-- Слайдер -->
              <header-slider @changeActiveSlide="changeActiveSlide"/>
            </div>
          </div>
        </v-card>
      </v-img>
    </header>

    <!-- рейтинг карточки -->
    <section class="rating mt-5">
      <div class="rating-container general-container d-flex">
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
              КАК С КАРТИНОК <span>
                <img :src="require(`~/assets/img/pinterest.png`)" alt="#"/>
              </span>
            </v-card-title>

            <v-card class="pinterest-card-welcome general-container mt-6"
                    color="transparent" elevation="0">
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
                      :img="require(`~/assets/img/pinterest-video.png`)">

                <v-card class="pinterest-video-aboutHotels d-flex justify-center align-center"
                        color="var(--dark-color)"
                        elevation="0" rounded="circle"
                        width="160px" height="160px">
                  <pinterest-rotate/>
                  <v-img class="pinterest-video-aboutHotels-play" :src="require(`~/assets/img/top-right-arrow.png`)"/>
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
                             active-class=""
                             v-for="item in hotelList"
                             :key="item.id">
            <v-expansion-panel-header class="hotelGroup-accordion-item--header ma-0 pa-0" disable-icon-rotate>
              <div class="hotelGroup-accordion-item--header-container d-flex align-center my-2">
                <div class="hotelGroup-accordion-item--header-count d-flex justify-center align-center golden-gradient--text">
                  {{ item.id }}
                </div>

                <v-card-title class="hotelGroup-accordion-item--header-title text-uppercase golden-gradient--text">
                  {{ item.title }}
                </v-card-title>

                <v-spacer/>

                <v-card-title class="hotelGroup-accordion-item--header-price text-uppercase mr-8">
                  От {{ thousandSeparator(item.price) }} руб.
                </v-card-title>
              </div>

              <template v-slot:actions>
                <div class="hotelGroup-accordion-item--header-arrow d-flex justify-center align-center">
                  <img :src="require(`~/assets/img/top-right-arrow-2.png`)" alt="#">
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
    <section class="specialOffers">
      <div class="specialOffers-container general-container d-flex flex-row">

        <v-card class="specialOffers-info" color="transparent" elevation="0">
          <v-card-title class="specialOffers-info-title section-title fontSize-xl--l text-uppercase">Специальные
            предложения и
            АКЦИИ отелЕЙ!
          </v-card-title>

          <div class="specialOffers-info-text">
            <v-card-text> &nbsp; Наша группа отелей предлагает множество
              специальных предложений и акций, таких как
              раннее бронирование со скидкой до 20%, программу
              лояльности для постоянных гостей, специальные
              пакеты с завтраками, ужинами и спа-услугами, а
              также скидки для групп.


              &nbsp; Следите за нашими предложениями на сайте или
              свяжитесь с нами для получения большей
              информации по телефону: <b>+7 989 009 5577.</b>
            </v-card-text>
          </div>

          <v-card-actions class="mt-4 pa-0">
            <v-btn class="font-weight-regular white--text rounded-xxl"
                   width="300px" height="55px"
                   elevation="0" color="golden-gradient">
              СМОТРЕТЬ ВСЕ АКЦИИ
            </v-btn>
          </v-card-actions>
        </v-card>

        <div class="specialOffers-slider">
          <div class="swiper overflow-hidden" ref="container">
            <div class="swiper-wrapper d-flex flex-row">
              <div class="swiper-slide" v-for="i in 3">
                <corner-card/>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>


    <!-- Развлекуха летом/зимой-->
    <section class="seasonPrograms">
      <div class="seasonPrograms-container general-container">

        <div class="seasonPrograms-group d-flex justify-space-between">
          <v-card class="seasonPrograms-summer seasonPrograms-item"
                  elevation="0" rounded="xxl"
                  width="63px" height="165px"
                  color="transparent">
            <div class="seasonPrograms-item-container">
              <div class="seasonPrograms-item-text summer d-flex justify-center align-center rounded-xxl">Летом</div>
            </div>
          </v-card>

          <v-card class="mx-2" rounded="xxl"
                  width="380px" height="165px"
                  elevation="0" color="var(--card-grey)">

          </v-card>

          <v-card class="mx-1" rounded="xxl"
                  width="380px" height="165px"
                  elevation="0" color="var(--card-grey)">

          </v-card>

          <v-card class="mx-1" rounded="xxl"
                  width="570px" height="165px"
                  elevation="0" color="var(--card-grey)">

          </v-card>

          <v-btn class="seasonPrograms-more ml-1 rounded-xxl"
                 width="63px" height="165px" elevation="0" color="transparent">
            <div class="seasonPrograms-more-container">
              <div class="seasonPrograms-more-text summer d-flex justify-center align-center rounded-xxl">Ещё</div>
            </div>
          </v-btn>
        </div>

        <div class="seasonPrograms-group d-flex mt-8">

          <v-card class="seasonPrograms-winter seasonPrograms-item"
                  elevation="0" rounded="xxl"
                  width="63px" height="165px"
                  color="transparent">
            <div class="seasonPrograms-item-container">
              <div class="seasonPrograms-item-text winter d-flex justify-center align-center rounded-xxl">Зимой</div>
            </div>
          </v-card>

          <v-card class="mx-2" rounded="xxl"
                  width="380px" height="165px"
                  elevation="0" color="var(--cold-grey)">

          </v-card>

          <v-card class="mx-1" rounded="xxl"
                  width="570px" height="165px"
                  elevation="0" color="var(--cold-grey)">

          </v-card>

          <v-card class="mx-1" rounded="xxl"
                  width="392px" height="165px"
                  elevation="0" color="var(--cold-grey)">

          </v-card>

          <v-btn class="seasonPrograms-more ml-1 rounded-xxl"
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

    <section class="reviews">
      <div class="reviews-container general-container">

      </div>
    </section>

  </div>
</template>
<script lang="ts">
import {Swiper} from "swiper";
import {Component, Ref, Vue} from "vue-property-decorator"
import thousandSeparator from "../assets/scripts/thousandSeparator";
@Component({
  methods: {thousandSeparator}
})
export default class Pages extends Vue {
  @Ref()
  readonly container!: HTMLDivElement;
  showButtons: boolean = true
  activeImage: string = '_MG_2185_1.png'
  hotels: number = 0
  swiper: any = Swiper
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

  mounted () {
    this.resizer ()
    this.swiper = new Swiper (this.container, {
      slidesPerView: 'auto',
      spaceBetween: 25,
    })
    window.addEventListener('resize', () => {
      this.resizer()
    })
  }

  changeActiveSlide (value: string) {
    return this.activeImage = value
  }

  resizer () {
    return this.showButtons = window.innerWidth >= 960
  }

}
</script>

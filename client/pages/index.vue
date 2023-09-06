<template>
  <div>
    <header class="header">
      <v-card class="header-container ma-4 mt-0"
              elevation="0" height="800px"
              :img="require('assets/img/_MG_2185_1.png')">
        <v-card class="header-wrapper" height="inherit"
                color="transparent" elevation="0">
          <div style="padding: 23px 55px">
            <nav class="nav">
              <div class="nav-container d-flex flex-row">
                <div class="nav-button-group d-flex justify-space-between">
                  <v-btn v-show="true"
                         text dark
                         class="px-0"
                         width="auto"
                         height="auto"
                         min-width="0"
                         min-height="0">
                    <div class="d-flex flex-column align-center justify-center">
                      <div class="d-flex flex-column">
                        <div v-for="i in 3"
                             style="
                           width: 38px;
                           height: 3.5px;
                           margin: 2.75px 0;
                           border-radius: 1px;
                           background: white">
                        </div>
                      </div>
                      <div class="font-weight-regular"
                           style="
                       color: #FFF;
                       font-family: 'Gals';
                       font-size: 12.5px;
                       font-style: normal;
                       line-height: normal;">
                        Меню
                      </div>
                    </div>
                  </v-btn>

                  <nav-btn>Главная</nav-btn>
                  <nav-btn>Отели</nav-btn>
                  <nav-btn>Номера</nav-btn>
                  <nav-btn>SPA</nav-btn>
                </div>

                <div class="logo">
                  <v-img class="logo-img"
                         width="80px" height="60px"
                         :src="require(`~/assets/img/g10.png`)">
                  </v-img>
                  <div class="logo-text">
                    Polyana group
                  </div>
                </div>

                <div class="nav-button-group d-flex justify-space-between">

                  <nav-btn>Услуги</nav-btn>
                  <nav-btn>Ресторан</nav-btn>
                  <nav-btn>Контакты</nav-btn>

                  <div class="d-flex flex-column">
                    <v-btn class="nav-button-group--book" width="173px" height="40px" color="var(--golden-2)">Забронировать</v-btn>
                    <v-btn class="nav-button-group--phone" width="173px" height="40px" dark>+7 989 009 5577</v-btn>
                  </div>
                </div>
              </div>
            </nav>

            <div class="header-wrapper d-flex">
              <div class="header-wrapper-container">
                <section class="header-info">

                  <div class="header-info-container d-flex flex-row">
                    <div class="d-flex flex-row">

                      <div class="align-self-center mr-16"
                           style="position:relative; height: 40px; width: 27px;">

                        <div style="position: absolute; left: 0;
                                    width: 132px; height: 27px;
                                    transform: rotate(-90deg) translate(0, -53px);
                                    margin-right: 80px; border-radius: 100px;
                                    background: linear-gradient(0deg, rgba(217, 217, 217, 0.60) 0%, rgba(217, 217, 217, 0.60) 100%);
                                    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.30);
                                    backdrop-filter: blur(5px);
                                    border: 2px solid rgba(212, 211, 218, 0.60);">
                          кнопка-кнопка
                        </div>

                      </div>

                      <div class="relax-in-comfort">
                        Отдыхайте с комфортом и наслаждайтесь
                        <span class="golden">красотами Красной Поляны</span>
                        в наших уникальных отелях!
                      </div>
                    </div>

                  </div>
                </section>

                <section class="header-booking mx-auto">
                  <div class="header-booking-container d-flex flex-row">

                    <v-card class="header-booking-card white--text ml-9 mr-4"
                            elevation="0" color="transparent" dark>
                      <v-card-subtitle class="header-booking-card-subtitle d-flex align-center justify-space-between ma-0 mt-3 pa-0">
                        <div>Заезд</div>
                        <v-icon style="font-size: 23px">mdi-arrow-top-right</v-icon>
                      </v-card-subtitle>

                      <v-card-title class="header-booking-card-title ma-0 mt-1 pa-0">
                        Ultima Club Hotel&...
                      </v-card-title>
                    </v-card>

                    <div class="header-booking-delimiter"></div>

                    <v-card class="header-booking-card white--text ml-6 mr-4"
                            elevation="0" color="transparent" dark>
                      <v-card-subtitle class="header-booking-card-subtitle d-flex align-center justify-space-between ma-0 mt-3 pa-0">
                        <div>Заезд</div>
                        <v-icon style="font-size: 23px">mdi-arrow-top-right</v-icon>
                      </v-card-subtitle>

                      <v-card-title class="header-booking-card-title ma-0 mt-1 pa-0">4 августа 2023</v-card-title>
                    </v-card>

                    <div class="header-booking-delimiter"></div>

                    <v-card class="header-booking-card white--text ml-6 mr-4"
                            elevation="0" color="transparent" dark>
                      <v-card-subtitle class="header-booking-card-subtitle d-flex align-center justify-space-between ma-0 mt-3 pa-0">
                        <div>Выезд</div>
                        <v-icon style="font-size: 23px">mdi-arrow-top-right</v-icon>
                      </v-card-subtitle>

                      <v-card-title class="header-booking-card-title ma-0 mt-1 pa-0">7 августа 2023 </v-card-title>
                    </v-card>

                    <div class="header-booking-delimiter"></div>

                    <v-card class="header-booking-card white--text ml-6 mr-4"
                            elevation="0" color="transparent" dark>
                      <v-card-subtitle class="header-booking-card-subtitle d-flex align-center justify-space-between ma-0 mt-3 pa-0">
                        <div>Гости</div>
                        <v-icon style="font-size: 23px">mdi-arrow-top-right</v-icon>
                      </v-card-subtitle>

                      <v-card-title class="header-booking-card-title ma-0 mt-1 pa-0">2</v-card-title>
                    </v-card>

                    <div class="header-booking-delimiter"></div>

                    <v-card class="header-booking-card white--text"
                            elevation="0" color="transparent" dark>
                      <v-card-actions class="d-flex justify-center align-center pa-0">
                        <v-btn class="header-booking-card-button text-none my-4 mx-2 pa-0"
                               elevation="0"
                               width="204px"
                               height="57px"
                               min-height="0"
                               min-width="0"
                               color="var(--dark-color)">
                          <v-icon>mdi-magnify</v-icon>
                          Найти номер
                        </v-btn>
                      </v-card-actions>
                    </v-card>


                  </div>
                </section>
              </div>

              <section class="header-slider d-flex align-center">
                <div class="header-slider-container d-flex flex-column justify-center align-center">
                  <v-btn class="mb-1" width="40px" height="40px" fab>
                    <v-icon>
                      mdi-chevron-up
                    </v-icon>
                  </v-btn>

                  <v-btn class="my-1" width="60px" height="60px" fab color="rgba(255, 255, 255, 0.75);">a</v-btn>
                  <v-btn class="my-1" width="60px" height="60px" fab color="rgba(255, 255, 255, 0.32);">b</v-btn>
                  <v-btn class="my-1" width="60px" height="60px" fab color="rgba(255, 255, 255, 0.32);">c</v-btn>

                  <v-btn class="mt-1" width="40px" height="40px" fab>
                    <v-icon>
                      mdi-chevron-down
                    </v-icon>
                  </v-btn>
                </div>
              </section>
            </div>

          </div>
        </v-card>
      </v-card>
    </header>

    <section class="rating">
      <div class="rating-container d-flex justify-space-between mx-4 mt-8 mb-0">
        <v-card class="rating-card rating-yandex"
                height="165px" elevation="0"
                color="var(--card-grey)">
          <div class="rating-card-container">
            <div class="d-flex justify-space-between align-center">
              <rating-yandex-icon/>
              <rating-yandex-arrow/>
            </div>
            <div>
              <rating-yandex-star v-for="i in 5" :key="'star'+i"/>
            </div>
            <v-card-text class="d-inline rating-card-text ma-0 pa-0">
              <span class="font-weight-black mr-1">5,0</span>
              рейтинг в Яндекс <br> на основе 1300+ отзывов
            </v-card-text>
          </div>
        </v-card>

        <v-card class="rating-card rating-tl-rep"
                height="165px" elevation="0"
                color="var(--card-grey)">
          <div class="rating-card-container">
            <div class="d-flex">
              <div class="d-flex">
                <rating-tl-rep-wreath-left/>
                <div>
                  <v-card-title class="ma-0 mt-2 pa-0" style="color: #000;
                                                         font-size: 26px;
                                                         font-style: normal;
                                                         font-weight: 700;
                                                         line-height: normal;">
                    9.60
                  </v-card-title>
                  <v-card-text class="ma-0 pa-0 text-center">из 10</v-card-text>
                </div>
                <rating-tl-rep-wreath-right/>
              </div>
              <v-card-title class="rating-card-title ma-0 ml-2 pa-0">Высокий <br> рейтинг</v-card-title>
            </div>

            <v-card-text class="rating-card-text ma-0 pa-0">
              Средний рейтинг отелей по оценкам
              <br> гостей в TL: Reputation
            </v-card-text>
          </div>
        </v-card>

        <v-card class="rating-card rating-we-care"
                height="165px" elevation="0"
                color="var(--card-grey)">
          <div class="rating-card-container">
            <div class="d-flex">

              <div class="d-flex rating-we-care-star justify-center align-center text-center" style="width: 50px; height: 50px; border-radius: 50%; background: var(--golden-1)">
                *
              </div>

              <v-card-title class="rating-card-title ma-0 ml-2 pa-0">
                Отели <br> 4-5 звёзд
              </v-card-title>
            </div>

            <v-card-text class="rating-card-text ma-0 pa-0">
              Заботимся о вашем <br> отдыхе в каждой детали
            </v-card-text>
          </div>
        </v-card>

        <v-card class="rating-card rating-booking-comfort"
                height="165px" elevation="0"
                color="var(--card-grey)">
          <div class="rating-card-container">
            <div class="d-flex">

              <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
                <path d="M29.5635 1.56925C30.0821 0.951201 31.0331 0.951201 31.5518 1.56925L34.4306 4.99967C34.8291 5.47438 35.5075 5.60119 36.0505 5.30246L39.9742 3.14367C40.6811 2.75473 41.5679 3.09825 41.8282 3.86194L43.2736 8.10069C43.4736 8.68726 44.0603 9.0506 44.6746 8.96817L49.1132 8.37258C49.9128 8.26527 50.6156 8.90591 50.5825 9.7121L50.399 14.1867C50.3737 14.8059 50.7895 15.3567 51.3921 15.5017L55.7461 16.5497C56.5305 16.7385 56.9544 17.5898 56.6324 18.3296L54.8449 22.4358C54.5975 23.004 54.7863 23.6679 55.2959 24.0208L58.9773 26.5708C59.6405 27.0303 59.7282 27.9772 59.1607 28.5507L56.0105 31.7339C55.5747 32.1744 55.5109 32.8616 55.8585 33.3747L58.3701 37.0824C58.8226 37.7505 58.5624 38.6652 57.8259 38.9949L53.7387 40.8251C53.1731 41.0785 52.8653 41.6962 53.0041 42.3003L54.0067 46.6649C54.1874 47.4513 53.6144 48.2101 52.8085 48.2517L48.336 48.4818C47.7171 48.5136 47.2071 48.9786 47.1182 49.592L46.4764 54.0241C46.3608 54.8227 45.5524 55.3233 44.786 55.0708L40.5323 53.6698C39.9437 53.4759 39.3001 53.7252 38.9958 54.265L36.7963 58.166C36.3999 58.8689 35.4652 59.0436 34.8418 58.5313L31.3815 55.6883C30.9028 55.295 30.2125 55.295 29.7336 55.6883L26.2735 58.5313C25.65 59.0436 24.7153 58.8689 24.319 58.166L22.1194 54.265C21.8151 53.7252 21.1714 53.4759 20.5829 53.6698L16.3292 55.0708C15.5629 55.3233 14.7544 54.8227 14.6387 54.0241L13.9969 49.592C13.9082 48.9786 13.3981 48.5136 12.7792 48.4818L8.3067 48.2517C7.50091 48.2101 6.92783 47.4513 7.10847 46.6649L8.11106 42.3003C8.2498 41.6962 7.94217 41.0785 7.37654 40.8251L3.28923 38.9949C2.55283 38.6652 2.2926 37.7505 2.74511 37.0824L5.25672 33.3747C5.60429 32.8616 5.5406 32.1744 5.10467 31.7339L1.95453 28.5507C1.38697 27.9772 1.4747 27.0303 2.13798 26.5708L5.8194 24.0208C6.32884 23.6679 6.51772 23.004 6.27035 22.4358L4.48281 18.3296C4.16075 17.5898 4.58463 16.7385 5.36909 16.5497L9.72311 15.5017C10.3256 15.3567 10.7416 14.8059 10.7162 14.1867L10.5326 9.7121C10.4996 8.90591 11.2023 8.26527 12.002 8.37258L16.4407 8.96817C17.0548 9.0506 17.6416 8.68726 17.8416 8.10069L19.2869 3.86194C19.5474 3.09825 20.4341 2.75473 21.1411 3.14367L25.0648 5.30246C25.6077 5.60119 26.2861 5.47438 26.6845 4.99967L29.5635 1.56925Z" fill="#DEC799"/>
                <path d="M29.1723 44.0523C27.6201 44.0523 26.3378 43.7037 25.3254 43.0062C24.3355 42.3089 23.5932 41.3527 23.0983 40.1379C22.6259 38.9231 22.3896 37.5396 22.3896 35.9873V24.2104C22.3896 22.6133 22.6259 21.2184 23.0983 20.0261C23.5707 18.8113 24.3018 17.8664 25.2917 17.1915C26.304 16.5166 27.5975 16.1792 29.1723 16.1792C30.747 16.1792 32.0293 16.5166 33.0192 17.1915C34.009 17.8664 34.7402 18.8113 35.2126 20.0261C35.6851 21.2184 35.9213 22.6133 35.9213 24.2104V35.9873C35.9213 37.5622 35.6738 38.9569 35.1789 40.1717C34.7065 41.3865 33.9752 42.3426 32.9855 43.04C31.9956 43.7149 30.7246 44.0523 29.1723 44.0523ZM29.1723 41.0828C30.0271 41.0828 30.6683 40.8354 31.0958 40.3404C31.5456 39.8455 31.8493 39.2157 32.0069 38.4507C32.1868 37.6634 32.2768 36.8535 32.2768 36.0211V24.1767C32.2768 23.2993 32.1981 22.4783 32.0406 21.7133C31.8831 20.926 31.5794 20.2961 31.1295 19.8236C30.702 19.3512 30.0497 19.115 29.1723 19.115C28.295 19.115 27.6312 19.3512 27.1814 19.8236C26.7314 20.2961 26.4277 20.926 26.2703 21.7133C26.1127 22.4783 26.0341 23.2993 26.0341 24.1767V36.0211C26.0341 36.8535 26.1127 37.6634 26.2703 38.4507C26.4502 39.2157 26.7652 39.8455 27.2151 40.3404C27.6876 40.8354 28.3399 41.0828 29.1723 41.0828ZM38.5918 46.2146V36.2469H39.5392V36.8699C39.695 36.6796 39.8896 36.5109 40.1233 36.3637C40.3569 36.208 40.6424 36.1301 40.9799 36.1301C41.3433 36.1301 41.6331 36.2167 41.8494 36.3897C42.0743 36.5541 42.2475 36.779 42.3686 37.0646C42.4897 37.3501 42.572 37.6703 42.6152 38.025C42.6584 38.3798 42.6801 38.7432 42.6801 39.1152V40.6986C42.6801 41.339 42.6282 41.8971 42.5243 42.3729C42.4205 42.8401 42.2345 43.2079 41.9662 43.476C41.7067 43.7356 41.3433 43.8654 40.876 43.8654C40.5732 43.8654 40.3092 43.7875 40.0843 43.6318C39.868 43.4761 39.6863 43.316 39.5392 43.1516V46.2146H38.5918ZM40.7333 43.1126C41.0188 43.1126 41.2307 43.0218 41.3692 42.8401C41.5163 42.6584 41.6115 42.3903 41.6547 42.0354C41.7067 41.672 41.7326 41.2351 41.7326 40.7246V39.1152C41.7326 38.6307 41.7067 38.2241 41.6547 37.8952C41.6115 37.5578 41.5163 37.3026 41.3692 37.1295C41.2222 36.9564 41.0015 36.8699 40.7073 36.8699C40.465 36.8699 40.2401 36.9348 40.0324 37.0646C39.8334 37.1943 39.669 37.3241 39.5392 37.4539V42.5675C39.6777 42.7147 39.8464 42.8445 40.0454 42.9569C40.253 43.0607 40.4824 43.1126 40.7333 43.1126Z" fill="black"/>
              </svg>

              <v-card-title class="rating-card-title ma-0 pa-0">
                Удобное <br> бронирование
              </v-card-title>
            </div>

            <v-card-text class="rating-card-text ma-0 pa-0">
              Прямая цена без наценок <br> агенств и партнерских <br> комиссий
            </v-card-text>
          </div>
        </v-card>

        <v-card class="rating-card rating-weather"
                height="165px" elevation="0"
                color="var(--card-grey)">
          <div class="rating-card-container">

            <div class="d-flex justify-space-between align-center">
              <v-card-title class="rating-card-title ma-0 pa-0">
                <div>Актуальное</div>
                <rating-yandex-arrow/>
              </v-card-title>
            </div>

            <v-card-text class="rating-card-text ma-0 pa-0">
              29 августа, Малооблачно, <br>
              без осадков.
            </v-card-text>

            <div class="d-flex justify-space-between align-center">
              <v-card class="mr-1"
                      color="var(--golden-1)"
                      elevation="0"
                      width="73px"
                      height="35px">

              </v-card>
              <v-card class="mx-1"
                      color="var(--golden-1)"
                      elevation="0"
                      width="73px"
                      height="35px">

              </v-card>
              <v-card class="ml-1"
                      color="var(--golden-1)"
                      elevation="0"
                      width="73px"
                      height="35px">

              </v-card>
            </div>
          </div>
        </v-card>

      </div>
    </section>

    <!--    <section>-->
    <!--      <v-card elevation="0"-->
    <!--              color="transparent"-->
    <!--              :img="require('assets/img/exclusive-background.png')">-->
    <!--      </v-card>-->
    <!--    </section>-->



    <!--    <section>-->
    <!--      <v-card elevation="0"-->
    <!--              color="transparent"-->
    <!--              :img="require('assets/img/line-background.png')">-->
    <!--      </v-card>-->
    <!--    </section>-->


    <!-- <div class="font-weight-black golden-gradient&#45;&#45;text" style="font-size: 40px"></div> -->

  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component
export default class Pages extends Vue {
}
</script>

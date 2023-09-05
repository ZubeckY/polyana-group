<template>
  <div>
    <header class="header">
      <v-card class="header-container ma-4"
              elevation="0" height="800px"
              :img="require('assets/img/_MG_2185_1.png')">
        <v-card class="header-wrapper"
                elevation="0" height="inherit"
                style="background: linear-gradient(90deg, #313339 26.72%, rgba(0, 0, 0, 0.00) 63.37%);">
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
                    <v-btn width="173px" height="40px" style=" margin-bottom: 12px;
                  border-radius: 4px; background: #FFBF7B; backdrop-filter: blur(2px);
                  color: #32343A; font-family: Gals; font-size: 14px;
                  font-style: normal; font-weight: 700; line-height: normal;">
                      Забронировать
                    </v-btn>
                    <v-btn width="173px" height="40px" style="
                  border-radius: 4px;
                  background: linear-gradient(93deg, rgba(255, 255, 255, 0.10) -3.44%, rgba(255, 255, 255, 0.06) 113.56%);
                  backdrop-filter: blur(25px);
                  color: #FFF; font-family: Gals; font-size: 18px;
                  font-style: normal; font-weight: 700; line-height: normal;">
                      +7 989 009 5577
                    </v-btn>

                  </div>

                </div>
              </div>
            </nav>

            <section class="header-info">
              <div class="header-info-container d-flex flex-row">
                <div class="d-flex flex-row">
                  <div class="align-self-center mb-10" style="
                     width: 27px; height: 132px;
                     margin-right: 80px; border-radius: 100px;
                     border: 2px solid rgba(212, 211, 218, 0.60);
                     background: linear-gradient(0deg, rgba(217, 217, 217, 0.60) 0%, rgba(217, 217, 217, 0.60) 100%);
                     box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.30);
                     backdrop-filter: blur(5px);">
                    <div></div>
                  </div>

                  <div class="relax-in-comfort">
                    Отдыхайте с комфортом и наслаждайтесь
                    <span class="golden">красотами Красной Поляны</span>
                    в наших уникальных отелях!
                  </div>
                </div>

                <v-spacer/>

                <div class="d-flex flex-column justify-center align-center">
                  <v-btn fab width="40px" height="40px">
                    <v-icon>
                      mdi-chevron-up
                    </v-icon>
                  </v-btn>

                  <v-btn class="my-2" width="60px" height="60px" fab>a</v-btn>
                  <v-btn class="my-2" width="60px" height="60px" fab>b</v-btn>
                  <v-btn class="my-2" width="60px" height="60px" fab>c</v-btn>

                  <v-btn fab width="40px" height="40px">
                    <v-icon>
                      mdi-chevron-down
                    </v-icon>
                  </v-btn>

                </div>
              </div>
            </section>

            <section class="header-booking mx-auto">
              <div class="header-booking-container">

              </div>
            </section>

          </div>
        </v-card>
      </v-card>
    </header>

    <!-- <div class="font-weight-black golden-gradient&#45;&#45;text" style="font-size: 40px"></div> -->

  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component
export default class Pages extends Vue {
}
</script>

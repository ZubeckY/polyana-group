<template>
  <footer class="footer">
    <v-card class="footer-card d-flex align-center rounded-xxl"
            elevation="0" height="520px"
            color="var(--card-grey)">
      <div class="footer-container general-container">
        <div class="d-flex">

          <div class="footer-seeYouAtHotel">
            <v-card-title class="footer-title">До встречи в наших отелях</v-card-title>
            <div class="d-flex"></div>

            <v-row class="">
              <v-col cols="auto">
                <v-card-title class="footer-title">Контакты</v-card-title>
                <v-card-text></v-card-text>
                <v-card-text></v-card-text>
                <v-card-text></v-card-text>
              </v-col>
              <v-col></v-col>
            </v-row>

          </div>

          <div class="footer-helpInfo">
            <v-card-title class="footer-title">помощь и информация</v-card-title>
            <v-card-subtitle>О Комплексе</v-card-subtitle>

            О нас
            Блог
            Размещение
            Услуги
            Специальные предложения
            Как добраться
            Трансфер
            Реквизиты
            Контакты

            Частые вопросы
            Инфраструктура
            Активности на Красной поляне



          </div>

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
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class footerComp extends Vue {

}
</script>

<template>
  <section class="header-booking mx-auto">
    <div class="header-booking-container d-flex">

      <!-- Название отеля -->
      <v-card class="header-booking-card white--text ml-9 mr-4"
              elevation="0" color="transparent" dark>
        <v-card-subtitle class="header-booking-card-subtitle ma-0 mt-3 pa-0"></v-card-subtitle>
        <v-card-title class="header-booking-card-title ma-0 mt-1 pa-0">
          Ultima Club Hotel&...
        </v-card-title>
      </v-card>

      <div class="header-booking-delimiter"></div>

      <!-- Дата заезда -->
      <v-card class="header-booking-card white--text ml-6 mr-4"
              elevation="0" color="transparent" dark>
        <v-card-subtitle class="header-booking-card-subtitle d-flex align-center justify-space-between ma-0 mt-3 pa-0">
          <div>Заезд</div>
          <v-icon>mdi-arrow-top-right</v-icon>
        </v-card-subtitle>

        <v-card-title class="header-booking-card-title ma-0 mt-1 pa-0">4 августа 2023</v-card-title>
      </v-card>

      <div class="header-booking-delimiter"></div>

      <!-- Дата выезда -->
      <v-card class="header-booking-card white--text ml-6 mr-4"
              elevation="0" color="transparent" dark>
        <v-card-subtitle class="header-booking-card-subtitle d-flex align-center justify-space-between ma-0 mt-3 pa-0">
          <div>Выезд</div>
          <v-icon>mdi-arrow-top-right</v-icon>
        </v-card-subtitle>

        <v-card-title class="header-booking-card-title ma-0 mt-1 pa-0">7 августа 2023 </v-card-title>
      </v-card>

      <div class="header-booking-delimiter"></div>

      <!-- Количество гостей -->
      <v-card class="header-booking-card white--text ml-6 mr-4"
              elevation="0" color="transparent" dark>
        <v-card-subtitle class="header-booking-card-subtitle d-flex align-center justify-space-between ma-0 mt-3 pa-0">
          <div>Гости</div>
          <v-icon>mdi-arrow-top-right</v-icon>
        </v-card-subtitle>
        <v-card-title class="header-booking-card-title ma-0 mt-1 pa-0">2</v-card-title>
      </v-card>

      <div class="header-booking-delimiter"></div>

      <!-- Кнопка найти номер -->
      <v-card class="header-booking-card white--text"
              elevation="0" color="transparent" dark>
        <v-card-actions class="d-flex justify-center align-center pa-0">
          <v-btn class="header-booking-card-button text-none my-4 mx-2 pa-0"
                 elevation="0" color="var(--dark-color)">
            <v-icon>mdi-magnify</v-icon>
            Найти номер
          </v-btn>
        </v-card-actions>
      </v-card>

    </div>
  </section>
</template>
<script lang="ts">
import {Component, Ref, Vue} from "vue-property-decorator"
@Component({})
export default class HeaderBooking extends Vue {
}
</script>
<style lang="less" scoped>
.header-booking {
  height: 90px;
  width: 1202px;
  border-radius: 12px;
  background: linear-gradient(270deg,
  rgba(217, 217, 217, 0.40) 2.1%,
  rgba(217, 217, 217, 0.20) 103.66%);
  backdrop-filter: blur(25px);
  &-delimiter {width: 0; height: 90px; border: thin solid rgba(255, 255, 255, 0.20);}
  &-card {
    &-button {
      width: 204px !important;
      height: 57px !important;
      color: white;
      min-width: 0;
      min-height: 0;
      font-size: 22px;
      font-weight: 400;
      border-radius: 8px !important;
    }
    &-title {color: white; font-size: 22px !important; font-weight: 400;}
    &-subtitle{
      width: 100vw;
      height: 20px;
      max-width: 200px;
      color: white;
      font-size: 16px;
      font-weight: 400;
      &v-icon {font-size: 23px !important;}
    }
  }
}
</style>


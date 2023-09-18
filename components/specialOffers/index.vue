<template>
  <section class="specialOffers">
    <div class="specialOffers-container d-flex">

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

        <v-card-actions class="mt-4 ml-2 pa-0">
          <v-btn class="font-weight-regular white--text rounded-xxl"
                 width="300px" height="55px"
                 elevation="0" color="golden-gradient">
            СМОТРЕТЬ ВСЕ АКЦИИ
          </v-btn>
        </v-card-actions>
      </v-card>

      <!-- Слайдер -->
      <lazy-special-offers-slider/>

    </div>
  </section>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class SpecialOffers extends Vue {
  showButtons: boolean = true

  mounted () {
    this.resizer ()
    window.addEventListener('resize', () => {
      this.resizer()
    })
  }
  resizer () {
    return this.showButtons = window.innerWidth > 960
  }

}
</script>

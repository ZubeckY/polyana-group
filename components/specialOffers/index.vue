<template>
  <section class="specialOffers">
    <v-lazy>
      <div class="specialOffers-container d-flex">

        <div class="specialOffers-info">
          <h3 class="specialOffers-info-title section-title fontSize-xl--s text-uppercase">Специальные
            предложения и
            акции отелей!
          </h3>
          
          <p class="specialOffers-info-text my-7">Наша группа отелей предлагает множество
            специальных предложений и акций, таких как
            раннее бронирование со скидкой до 15%, программу
            лояльности для постоянных гостей, специальные
            пакеты с завтраками, ужинами и спа-услугами, а
            также скидки для групп.

            Следите за нашими предложениями на сайте или
            свяжитесь с нами для получения полной
            информации по телефону: <a class="text-decoration-none black--text" href="tel:+7 938 555-55-52"><b>+7 938 555-55-52.</b></a>
          </p>

          <v-btn class="font-weight-regular shimmer-effect white--text" style="border-radius: 14px; font-size: 14px"
                 :href="currentLink" width="255px" height="47px" elevation="0" color="golden-gradient">
            <div class="shimmer"></div>
            <div class="text">СМОТРЕТЬ ВСЕ АКЦИИ</div>
          </v-btn>
        </div>

        <!-- Слайдер -->
        <special-offers-slider/>

      </div>
    </v-lazy>
  </section>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({})
export default class SpecialOffers extends Vue {
  currentLink: string = '/promo'

  created() {
    this.getCurrentHotel()
  }

  getCurrentHotel() {
    let {hotel_id}: any = this.$router.currentRoute.query
    return hotel_id ? this.currentLink += '?hotel_id=' + hotel_id : ''
  }
}
</script>

<template>
  <section class="specialOffers">
    <div class="specialOffers-container d-flex">

      <div class="specialOffers-info">
        <h3 class="specialOffers-info-title section-title fontSize-xl--s text-uppercase">Специальные
          предложения и
          акции отелей!
        </h3>

        <p class="specialOffers-info-text my-7">&nbsp; Наша группа отелей предлагает множество
          специальных предложений и акций, таких как
          раннее бронирование со скидкой до 20%, программу
          лояльности для постоянных гостей, специальные
          пакеты с завтраками, ужинами и спа-услугами, а
          также скидки для групп.

          &nbsp; Следите за нашими предложениями на сайте или
          свяжитесь с нами для получения большей
          информации по телефону: <b>+7 989 009 5577.</b>
        </p>

        <v-btn class="font-weight-regular shimmer-effect white--text" style="border-radius: 14px; font-size: 14px"
               href="/promo" width="255px" height="47px" elevation="0" color="golden-gradient">
          <div class="shimmer"></div>
          <div class="text">СМОТРЕТЬ ВСЕ АКЦИИ</div>
        </v-btn>
      </div>

      <!-- Слайдер -->
      <special-offers-slider/>

    </div>
  </section>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class SpecialOffers extends Vue {
}
</script>

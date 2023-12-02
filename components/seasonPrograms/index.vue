<template>
  <section class="seasonPrograms">
    <v-lazy>
      <div class="seasonPrograms-container">

        <!-- Летом  -->
        <div class="seasonPrograms-group d-flex justify-space-between">
          <div class="seasonPrograms-summer seasonPrograms-item">
            <div class="seasonPrograms-item-container">
              <div class="seasonPrograms-item-text summer d-flex justify-center align-center rounded-xxl">Летом</div>
            </div>
          </div>
          <!-- Бесплатный трансфер до пляжа -->
          <!-- <season-programs-free-transfer-beach/>-->

          <!-- Живая музыка в баре у бассейна -->
          <season-programs-live-music/>
          <!-- Подогреваемый бассеин -->
          <season-programs-heated-pool-summer/>
          <!-- Спа-комплекс: место Идеальное для отдыха -->
          <season-programs-spa-complex/>

          <!-- Анимация для детей: веселье и игры -->
          <!-- <season-programs-fun-for-kids/>-->
          <!-- Ещё -->
          <season-programs-show-more-summer/>
        </div>

        <!-- Зимой -->
        <div class="seasonPrograms-group d-flex justify-space-between mt-8">

          <div class="seasonPrograms-winter seasonPrograms-item">
            <div class="seasonPrograms-item-container">
              <div class="seasonPrograms-item-text winter d-flex justify-center align-center">Зимой</div>
            </div>
          </div>
          <!-- бесплатный трансфер до подъёмников -->
          <season-programs-free-transfer-lift/>
          <!-- ski-room хранилище для зимнего спортивного снаряжения -->
          <season-programs-ski-room/>
          <!-- подогреваемый бассеин -->
          <season-programs-heated-pool/>
          <!-- Ещё -->
          <season-programs-show-more-winter/>
        </div>
      </div>
    </v-lazy>
  </section>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class SeasonPrograms extends Vue {

}
</script>

<style>
/* seasonPrograms */
.seasonPrograms {
  margin-top: 50px;
}

.seasonPrograms-item {
  width: 63px;
  height: 140px;
  margin-right: 5px;
  border-radius: 23px !important;
}

.seasonPrograms-item-container {
  position: relative;
  width: inherit;
  height: inherit;
}

.seasonPrograms-item-text {
  position: absolute;
  left: -37px;
  top: 40px;
  width: 140px;
  height: 63px;
  background: rgba(217, 217, 217, 1);
  transform: rotate(-90deg);
  font-weight: 700;
  border-radius: 23px !important;
}

.seasonPrograms-item-text.summer {
  background: rgba(217, 217, 217, 1);
}

.seasonPrograms-item-text.winter {
  background: var(--cold-grey);
}

.seasonPrograms-card {
  display: flex;
  margin: 0 5px;
  height: 150px;
  align-items: center;
  justify-content: center;
  border-radius: 19.55px;
}

.seasonPrograms-card-container {
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 75%;
}

.seasonPrograms-card-header {
  display: flex;
}

.seasonPrograms-card-title {
  color: black;
  font-size: 15px;
  font-weight: 700;
  margin-left: 23px;
  white-space: pre-line;
  text-transform: uppercase;
}

.seasonPrograms-card-text {
  display: block;
  color: black;
  margin: 0 !important;
  font-size: 14px;
  font-weight: 400;
}

.seasonPrograms-card.small {
  width: 323px;
}

.seasonPrograms-card.medium {
  width: 336px
}

.seasonPrograms-card.large {
  width: 485px;
}

.seasonPrograms-card.superLarge {
  width: 664px;
}

.seasonPrograms-card.summer {
  background: rgba(217, 217, 217, 1);
}

.seasonPrograms-card.winter {
  background: var(--cold-grey);
}

.seasonPrograms-more {
  margin-left: 5px;
  width: 63px;
  height: 165px;
}

.seasonPrograms-more-container {
  position: relative;
  width: inherit;
  height: inherit;
}

.seasonPrograms-more-text {
  position: absolute;
  left: -83px;
  top: -32px;
  width: 165px;
  height: 63px;
  transform: rotate(-90deg);
  font-weight: 700;
}

.seasonPrograms-more-text.summer {
  background: rgba(217, 217, 217, 1);
}

.seasonPrograms-more-text.winter {
  background: var(--cold-grey);
}
</style>

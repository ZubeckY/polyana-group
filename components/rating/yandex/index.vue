<template>
  <v-card class="rating-card rating-yandex"
          height="165px" elevation="0"
          color="var(--card-grey)">
    <div class="rating-card-container d-flex flex-column">
      <div class="d-flex justify-space-between align-center">
        <lazy-rating-yandex-icon/>
        <lazy-rating-yandex-arrow/>
      </div>
      <lazy-v-vertical-spacer/>
      <div>
        <lazy-rating-yandex-star v-for="i in 5" :key="'star'+i"/>
      </div>
      <lazy-v-vertical-spacer/>
      <v-card-text class="d-inline rating-card-text ma-0 pa-0">
        <span class="rating-card-text font-weight-black mr-1">5,0</span>рейтинг в Яндекс
        на основе 1300+ отзывов
      </v-card-text>
    </div>
  </v-card>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({})
export default class RatingYandex extends Vue {
}
</script>

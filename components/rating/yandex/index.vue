<template>
  <a class="rating-card text-decoration-none rating-yandex" href="/reviews">
    <div class="rating-card-container d-flex flex-column">
      <div class="d-flex justify-space-between align-center">
        <rating-yandex-icon/>
        <rating-yandex-arrow/>
      </div>
      <v-vertical-spacer/>
      <div>
        <rating-yandex-star v-for="i in 5" :key="'star'+i"/>
      </div>
      <v-vertical-spacer/>
      <div class="d-inline rating-card-text ma-0 pa-0">
        <span class="rating-card-text font-weight-black mr-1">5,0</span>рейтинг в Яндекс
        на основе 1300+ отзывов
      </div>
    </div>
  </a>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({})
export default class Yandex extends Vue {
}
</script>

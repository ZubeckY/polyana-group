<template>
  <v-card class="rating-card rating-tl-rep"
          height="165px" elevation="0"
          color="var(--card-grey)">
    <div class="rating-card-container d-flex flex-column">
      <div class="d-flex">
        <div class="d-flex">
          <rating-tl-rep-wreath-left class="rating-tl-rep-left"/>
          <div class="mt-1">
            <v-card-title class="rating-tl-rep-title fontSize-l--xl font-weight-bold ma-0 mt-2 pa-0">9.60</v-card-title>
            <v-card-text class="rating-tl-rep-text ma-0 pa-0 text-center">из 10</v-card-text>
          </div>
          <rating-tl-rep-wreath-right class="rating-tl-rep-right"/>
        </div>
        <v-card-title class="rating-card-title ma-0 ml-2 pa-0">Высокий
          рейтинг
        </v-card-title>
      </div>
      <v-vertical-spacer/>
      <v-card-text class="rating-card-text ma-0 pa-0">Средний рейтинг отелей по оценкам
        гостей в TL: Reputation
      </v-card-text>
    </div>
  </v-card>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({})
export default class RatingTLRep extends Vue {

}
</script>

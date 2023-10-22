<template>
  <article class="rating-card rating-tl-rep">
    <div class="rating-card-container d-flex flex-column">
      <div class="d-flex">
        <div class="d-flex">
          <rating-tl-rep-wreath-left class="rating-tl-rep-left"/>
          <div class="mt-1">
            <div class="rating-tl-rep-title fontSize-m--l font-weight-bold ma-0 mt-2 pa-0">9.60</div>
            <div class="rating-tl-rep-text ma-0 pa-0 text-center">из 10</div>
          </div>
          <rating-tl-rep-wreath-right class="rating-tl-rep-right"/>
        </div>
        <div class="rating-card-title ma-0 ml-2 pa-0">Высокий
          рейтинг
        </div>
      </div>
      <v-vertical-spacer/>
      <div class="rating-card-text ma-0 pa-0">Средний рейтинг отелей по оценкам
        гостей в TL: Reputation
      </div>
    </div>
  </article>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({})
export default class RatingTLRep extends Vue {

}
</script>

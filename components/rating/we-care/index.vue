<template>
  <v-card class="rating-card rating-we-care"
          height="165px" elevation="0"
          color="var(--card-grey)">
    <div class="rating-card-container d-flex flex-column pt-1">
      <div class="d-flex">
        <div class="rating-we-care-star text-center pt-2">*</div>
        <v-card-title class="rating-card-title ma-0 ml-2 pa-0">Отели
          4-5 звёзд
        </v-card-title>
      </div>
      <v-vertical-spacer/>
      <v-card-text class="rating-card-text ma-0 pa-0">Заботимся о вашем
        отдыхе в каждой детали
      </v-card-text>
    </div>
  </v-card>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class RatingWeCare extends Vue {

}
</script>

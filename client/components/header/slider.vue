<template>
  <section class="header-slider d-flex align-center">
    <div class="header-slider-container d-flex flex-column justify-center align-center">
      <!-- Кнопка назад -->
      <v-btn class="mb-1" width="40px" height="40px" fab>
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>

      <!-- Слайды -->
      <v-btn class="d-flex justify-center align-center my-1"
             width="70px" height="70px" fab
             color="rgba(255, 255, 255, 0.75);">
        <img :src="require(`~/assets/img/header/slider/Rectangle91.png`)" alt="#"/>
      </v-btn>
      <v-btn class="d-flex justify-center align-center my-1"
             width="70px" height="70px" fab
             color="rgba(255, 255, 255, 0.32);">
        <img :src="require(`~/assets/img/header/slider/Rectangle92.png`)" alt="#"/>
      </v-btn>
      <v-btn class="d-flex justify-center align-center my-1"
             width="70px" height="70px" fab
             color="rgba(255, 255, 255, 0.32);">
        <img :src="require(`~/assets/img/header/slider/Rectangle93.png`)" alt="#"/>
      </v-btn>

      <!-- Кнопка вперёд -->
      <v-btn class="mt-1" width="40px" height="40px" fab>
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </div>
  </section>
</template>
<script lang="ts">
import {Component, Ref, Vue} from "vue-property-decorator"
@Component({})
export default class HeaderSlider extends Vue {


}
</script>


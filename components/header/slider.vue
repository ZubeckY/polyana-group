<template>
  <section class="header-slider d-flex align-center">
    <div class="header-slider-container d-flex flex-column justify-center align-center">
      <!-- Кнопка назад -->
      <v-btn @click="activeItem--" class="mb-1" width="40px" height="40px" fab>
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>


      <v-slide-group v-model="activeItem" mandatory>
        <div class="d-flex flex-column">
          <v-slide-item v-for="(item, i) in images" :key="i"
                        v-slot="{ active, toggle }">
            <v-btn class="d-flex justify-center align-center my-1"
                   @click="toggle"
                   :input-value="active"
                   width="70px" height="70px" fab
                   color="rgba(255, 255, 255, 0.75);">
              <img :src="require('@/assets/img/header/slider/' + item['small'])" alt="img"/>
            </v-btn>

          </v-slide-item>
        </div>
      </v-slide-group>


      <!-- Кнопка вперёд -->
      <v-btn @click="activeItem++" class="mt-1" width="40px" height="40px" fab>
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </div>
  </section>
</template>
<script lang="ts">
import {Component, Ref, Vue, Watch} from "vue-property-decorator"
@Component({})
export default class HeaderSlider extends Vue {
  activeItem: number = 0
  images: any = [
    {
      small: `Rectangle91.png`,
      big: `_MG_2185_1.png`,
    },
    {
      small: `Rectangle92.png`,
      big: `_MG_2327.jpg`,
    },
    {
      small: `Rectangle93.png`,
      big: `_MG_7748.jpg`,
    }
  ]

  created () {
    this.changeActiveSlide ()
  }

  @Watch ('activeItem')
  changeActiveSlide () {
    let i = this.activeItem
    if (this.activeItem > 2 || this.activeItem < 0) i = 0
    this.$emit('changeActiveSlide', this.images[i]['big'])
  }

}
</script>


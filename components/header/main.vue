<template>
  <header class="header mt-3">
    <!-- Картинка -->
    <v-img class="header-container" elevation="0"
           :position="position" :contain="showButtons"
           :srcset="`img/header/slider/${activeImage} 360w`"
           :src="'img/header/slider/' + activeImage">
      <!-- Градиент -->
      <div class="header-wrapper">
        <div class="header-wrapper-inner general-container">
          <!-- Навигация -->
          <lazy-nav-polyana/>
          <!-- Контент -->
          <div class="header-wrapper d-flex">
            <div class="header-wrapper-container d-flex flex-column">
              <lazy-v-vertical-spacer v-if="showButtons"/>
              <!-- Отдыхайте с комфортом, ( Лето/Зима ) -->
              <header-info v-if="showButtons"/>
              <div v-else class="relax-in-comfort fontSize-xl--l">Отдыхайте с комфортом
                и наслаждайтесь <span class="golden">красотами
                              Красной Поляны</span> в наших
                уникальных отелях!
              </div>

              <lazy-v-vertical-spacer v-if="showButtons"/>
              <!-- Панель бронирования -->
              <lazy-header-booking/>
            </div>

            <v-spacer v-if="showButtons"/>

            <!-- Слайдер -->
            <lazy-header-slider @changeActiveSlide="changeActiveSlide"/>

          </div>
        </div>
      </div>
    </v-img>



  </header>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
@Component({})
export default class HeaderMain extends Vue {
  @Prop () activeImage!: string;
  showButtons: boolean = true
  position: string = 'top right'

  mounted () {
    this.resizer ()
    window.addEventListener('resize', () => {
      this.resizer()
      this.changePosition()
    })
  }
  changeActiveSlide (slide: string) {this.$emit('changeActiveSlide', slide)}
  resizer ():boolean {return this.showButtons = window.innerWidth > 1100}
  changePosition () {
    return this.position = window.innerWidth > 1100 ? 'top right' : 'bottom center'
  }
}
</script>


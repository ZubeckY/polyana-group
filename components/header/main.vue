<template>
  <header class="header mt-3">
    <!-- Картинка -->
    <v-img class="header-container" elevation="0"
           position="top right" :contain="showButtons"
           :src="require('@/assets/img/header/slider/' + activeImage)">
      <!-- Градиент -->
      <div class="header-wrapper">
        <div class="header-wrapper-inner general-container">
          <!-- Навигация -->
          <lazy-nav-polyana/>
          <!-- Контент -->
          <div class="header-wrapper d-flex flex-row">
            <div class="header-wrapper-container d-flex flex-column">
              <lazy-v-vertical-spacer/>
              <!-- Отдыхайте с комфортом, ( Лето/Зима ) -->
              <section class="header-info">
                <div class="header-info-container general-container d-flex">
                  <div class="d-flex flex-row mt-4">
                    <!-- Лето/Зима -->
                    <lazy-header-switch v-if="showButtons"/>
                    <!-- Отдыхайте с комфортом -->
                    <div class="relax-in-comfort fontSize-xl--l">Отдыхайте с комфортом
                      и наслаждайтесь <span class="golden">красотами
                        Красной Поляны</span> в наших
                      уникальных отелях!
                    </div>
                  </div>
                </div>
              </section>
              <lazy-v-vertical-spacer/>
              <!-- Панель бронирования -->
              <lazy-header-booking/>
            </div>
            <v-spacer/>
            <!-- Слайдер -->
            <lazy-header-slider v-if="showButtons"
                                @changeActiveSlide="changeActiveSlide"/>
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

  mounted () {
    this.resizer ()
    window.addEventListener('resize', () => {this.resizer()})
  }
  changeActiveSlide (slide: string) {this.$emit('changeActiveSlide', slide)}
  resizer () {return this.showButtons = window.innerWidth > 960}

}
</script>

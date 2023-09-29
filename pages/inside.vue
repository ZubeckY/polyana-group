<template>
  <div>
    <header class="header header-inside">
      <div class="header-inside-container">
        <div class="header-inside-container-inner">
          <header-nav-ultima/>
        </div>
      </div>
    </header>

    <section class="restInPolyana">
      <div class="restInPolyana-container">

        <div class="restInPolyana-head">
          <div class="restInPolyana-title">Отдых на Красной Поляне в <span class="restInPolyana-title-chip golden-gradient">отеле 5*</span> с кинотеатром и панорамным видом на
            горы — идеальный способ <span class="restInPolyana-title-chip golden-gradient">расслабиться и насладиться</span> природой!
          </div>
        </div>

        <div class="restInPolyana-body">
          <div class="restInPolyana-body-container d-flex flex-row">
            <div class="restInPolyana-pictures-large">
              <nuxt-img class="restInPolyana-pictures-large-img" width="866px" height="391px"
                        src="img/images/big-image.webp" alt="big-pic"/>
            </div>
            <div class="restInPolyana-pictures-small d-flex flex-row flex-wrap">
              <nuxt-img class="restInPolyana-pictures-small-img" width="191px" height="191px"
                        src="img/images/rectangle-167.webp" alt="pic-1"/>
              <nuxt-img class="restInPolyana-pictures-small-img" width="191px" height="191px"
                        src="img/images/rectangle-169.webp" alt="pic-3"/>
              <nuxt-img class="restInPolyana-pictures-small-img" width="191px" height="191px"
                        src="img/images/rectangle-168.webp" alt="pic-2"/>
              <nuxt-img class="restInPolyana-pictures-small-img" width="191px" height="191px"
                        src="img/images/rectangle-170.webp" alt="pic-4"/>
            </div>
          </div>
        </div>

      </div>
    </section>


    <!-- Специальные предложения -->
    <special-offers/>

    <!-- Эксклюзивная скидка за звонок -->
    <exclusive/>

    <!-- Наши гости делятся своими впечатлениями об отдыхе -->
    <reviews/>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({
  head: {
    title: 'Ultima Club'
  }
})
export default class Inside extends Vue {
}
</script>

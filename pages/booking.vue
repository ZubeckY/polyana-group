<template>
  <div>
    <header class="header header-inside">
      <div class="header-inside-container">
        <div class="header-inside-container-inner">
          <header-nav-inside/>
        </div>
      </div>
    </header>

    <div class="breadcrumbs">
      <div class="breadcrumbs-container">
        <breadcrumbs-button/>
        <breadcrumbs-content/>
      </div>
    </div>


    <section class="tl-section">
      <div class="tl-section-container">
        <div class="tl-select-wrap">
          <div id="tl-block-select">
            <select id="tl-hotel-select"></select>
          </div>
          <div id="tl-booking-form">&nbsp;</div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({
  head: {
    title: 'Бронирование',
  },
})
export default class Booking extends Vue {
}
</script>

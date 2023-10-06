<template>
  <div>
    <header class="header header-inside">
      <div class="header-inside-container">
        <div class="header-inside-container-inner">
          <header-nav-ultima/>
        </div>
      </div>
    </header>

    <section class="tl-section">
      <div class="tl-section-container">
        <!-- start TL Booking form script -->
        <div id="tl-booking-form">&nbsp;</div>
        <!-- end TL Booking form script -->
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class Booking extends Vue {
}
</script>

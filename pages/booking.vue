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
    title: 'Бронирование - группа отелей Polyana group',
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Спешите забронировать номер в наших отелях Polyana group"
      },

      // og:tags
      {
        hid: "og:url",
        property: "og:url",
        content: process.client ? window.location.href : ''
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Бронирование - группа отелей Polyana group"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Спешите забронировать номер в наших отелях Polyana group"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://ztgxmhicyraofyrgiitp.supabase.co/storage/v1/object/public/publicimg/hotels/Country%20Hills/main/main3.webp"
      }
    ]
  }
})
export default class Booking extends Vue {
}
</script>

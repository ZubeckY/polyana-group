<template>
  <div class="header-booking ultima">
    <!-- start TL Search form script -->
    <div id='block-search'>
      <div :id='TL_ID' class='tl-container'>
        <a href='https://www.travelline.ru/products/tl-hotel/' target='_blank'>TravelLine</a>
      </div>
    </div>
    <!-- end TL Search form script -->
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({})
export default class BookingUltima extends Vue {
  TL_ID: any = 'tl-search-form-32513'

  created () {
    let {hotel_id}:any = this.$router.currentRoute.query
    return this.TL_ID = 'tl-search-form-' + hotel_id
  }
}
</script>
<style>
#block-search, #block-search * {
  box-sizing: border-box;
}

#block-search {
  border-radius: 12px;
  background: linear-gradient(270deg, rgba(217, 217, 217, 0.40) 2.1%, rgba(217, 217, 217, 0.20) 103.66%);
  backdrop-filter: blur(25px);
}


</style>

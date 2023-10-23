<template>
  <section class="hotelGroup">
    <v-lazy>
      <div class="hotelGroup-container">
        <div class="hotelGroup-head">
          <h3 class="hotelGroup-title section-title fontSize-xl--s text-uppercase">Группа отелей
            POLYANA GROUP на красной поляне
          </h3>
        </div>
        <div class="hotelGroup-body">
          <hotel-group-item v-for="(item, i) in hotelList"
                            :key="'hotel-'+i" :item="item"/>
        </div>
      </div>
    </v-lazy>
  </section>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import thousandSeparator from "~/assets/scripts/thousandSeparator";
import supaBase from "~/assets/scripts/supaBase";

@Component({
  methods: {thousandSeparator}
})
export default class HotelGroup extends Vue {
  hotels: number = 0
  hotelList: any = []

  async created() {
    try {
      let {data, error} = await supaBase
        .from('hotels')
        .select('id, title, logohotel, imgshotel, travellineid, pricefrom, hotelrating, hotelreviews, hoteldescription, hoteltags')
        .order('id')
      this.hotelList = data
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

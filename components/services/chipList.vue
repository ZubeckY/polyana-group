<template>
  <div class="mb-3">
    <div class="conditions-title mb-2">Отель</div>
    <div class="d-flex flex-wrap">
      <div class="mr-2" v-for="(hotel, j) in hotelList" :key="'hotelList'+j">
        <lazy-services-chip :item="hotel" :isValue="true" style="margin-left: -5px;"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
import supaBase from "~/assets/scripts/supaBase";

@Component({})
export default class ChipList extends Vue {
  @Prop() data: any
  hotelList: any = []

  async created () {
    await this.getHotels()
  }

  @Watch('data')
  async getHotels() {
    try {
      let {data, error} = await supaBase
        .from('hotels')
        .select('id, title')
        .in('id', this.data[0].idhotel)
      this.hotelList = data
    } catch (e) {
      console.log(e)
    }
  }

}
</script>

<template>
  <v-chip :href="hotelLink" class="corner-card-header-chip font-weight-medium mr-1 mb-1" color="var(--dark-color)" dark>
    {{ hotelTitle }}
  </v-chip>
</template>
<script lang="ts">
import {Vue, Component, Watch, Prop} from 'vue-property-decorator';
import supaBase from "~/assets/scripts/supaBase";

@Component({})
export default class Chip extends Vue {
  @Prop() item: any
  @Prop() isValue?: boolean
  hotelTitle: string = 'Загрузка...'
  hotelLink: any = ''

  async created() {
    await this.getItemHotelTitle()
  }

  @Watch('item')
  async getItemHotelTitle() {
    try {
      this.hotelTitle = 'Загрузка...'

      if (!this.isValue) {
        let {data, error}: any = await supaBase
          .from('hotels')
          .select('id, title, travellineid')
          .eq('travellineid', this.item.travellineid)
        this.hotelTitle = data[0].title
        this.hotelLink = '/hotel?hotel_id=' + data[0].travellineid
      } else {
        this.hotelTitle = this.item.title
      }

    } catch (e) {
      console.log(e)
    }
  }
}
</script>

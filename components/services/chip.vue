<template>
  <v-chip class="corner-card-header-chip font-weight-medium mr-1 mb-1" color="var(--dark-color)" dark>
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

  async created() {
    await this.getItemHotelTitle()
  }

  @Watch('item')
  async getItemHotelTitle() {
    try {
      this.hotelTitle = 'Загрузка...'

      if (!this.isValue) {
        let {data, error} = await supaBase
          .from('hotels')
          .select('id, title, travellineid')
          .eq('travellineid', this.item.travellineid)

        const DATA: any = data
        this.hotelTitle = DATA[0].title
      } else {
        this.hotelTitle = this.item.title
      }

    } catch (e) {
      console.log(e)
    }
  }
}
</script>

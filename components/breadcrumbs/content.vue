<template>
  <div class="breadcrumbs-content">
    <a class="breadcrumbs-content-link" href="/">Главная</a>
    <span class="breadcrumbs-content-delimiter">/</span>
    <hotels-menu>
      <div class="d-flex align-center">
        <chevron-down class="mt-1 mr-1"/>
        <div>Отели</div>
      </div>
    </hotels-menu>
    <span class="breadcrumbs-content-delimiter">/</span>
    <div class="breadcrumbs-content-link">{{ currentTitle }}</div>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import supaBase from "~/assets/scripts/supaBase";

@Component({})
export default class Content extends Vue {

  currentTitle: string = ''
  async created () {
    try {
      let {hotel_id} = this.$router.currentRoute.query
      let {data, error} = await supaBase
          .from('hotels')
          .select('id, title, travellineid')
          .eq('travellineid', hotel_id)

      let currentData: any = data
      this.currentTitle = '' + currentData[0].title
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

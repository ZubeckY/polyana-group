<template>
  <article class="breadcrumbs-content">
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
  </article>
</template>
<script>
import supaBase from "~/assets/scripts/supaBase";

export default {
  name: "Content",
  data: () => ({
    currentTitle: ''
  }),
  async created() {
    try {
      let {hotel_id} = this.$router.currentRoute.query
      if (!hotel_id) {
        this.currentTitle = 'Бронирование'
      } else {
        let {data, error} = await supaBase
          .from('hotels')
          .select('id, title, travellineid')
          .eq('travellineid', hotel_id)
        this.currentTitle = '' + data[0].title
      }
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

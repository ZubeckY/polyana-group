<template>
  <div>
    <header class="header header-promo">
      <div class="header-container conditions" :style="activeSlide">
        <div class="header-container-inner">
          <header-nav-polyana/>

          <div class="header-promo-body">
            <div class="header-promo-body-container general-container">
              <breadcrumbs-button class="header-promo-back"/>
              <h1 class="header-promo-title">{{ activeTitle }}</h1>
            </div>
          </div>

        </div>
      </div>
    </header>

    <section class="conditions mt-8">
      <div class="conditions-container general-container">
        <div class="conditions-head">
          <h2 class="conditions-title">Условия акции</h2>
        </div>
        <div v-if="loading">Загрузка</div>
        <div v-else>
          <div v-if="data.length >= 1">
            <div class="conditions-body">
              <div class="conditions-body-container">
                <p class="conditions-text" v-html="activeDescription"></p>
                <div class="conditions-form">
                  <feedback-form/>
                </div>
              </div>
            </div>
          </div>
          <div v-else>Ничего нет</div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import supaBase from "~/assets/scripts/supaBase";

@Component({
  head: {
    title: 'Акция',
  },
})
export default class Promo extends Vue {
  data: any = {}
  loading: boolean = true

  async created() {
    await this.getData()
  }

  async getData() {
    try {
      this.loading = true
      let currentRoute = this.$router.currentRoute.path
      let getIdFromRoute = currentRoute.split('/')
      let currentId = getIdFromRoute[getIdFromRoute.length - 1]

      let {data, error} = await supaBase
        .from('specialoffer')
        .select('')
        .match({id: currentId})

      this.data = data
    } catch (e) {
      console.log(e)
    } finally {
      this.loading = false
    }
  }

  get activeSlide() {
    return `background-image: url('${this.data.length >= 1 ? this.data[0]['imghorisontal'] : ''}')`
  }

  get activeTitle() {
    return this.loading ? 'Загрузка...' : this.data.length >= 1 ? this.data[0].title : ''
  }

  get activeDescription() {
    return this.loading ? 'Загрузка...' : this.data.length >= 1 ? this.data[0].description : ''
  }

}
</script>

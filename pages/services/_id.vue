<template>
  <div>
    <header class="header header-promo">
      <div class="header-container conditions" :style="activeSlide">
        <div class="header-container-inner">
          <header-nav-polyana/>

          <div class="header-promo-body">
            <div class="header-promo-body-container general-container">
              <breadcrumbs-button class="header-promo-back"/>
              <div class="header-promo-title">{{ activeTitle }}</div>
            </div>
          </div>

        </div>
      </div>
    </header>

    <section class="conditions mt-8">
      <div class="conditions-container general-container">
        <div class="conditions-head">
          <div class="conditions-title">Об услуге</div>
        </div>
        <div v-if="loading">Загрузка</div>
        <div v-else>
          <div v-if="data.length >= 1">
            <div class="conditions-body">
              <div class="conditions-body-container">
                <div class="conditions-text" v-html="activeDescription"></div>
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
    title: 'Услуга',
  },
})
export default class Services extends Vue {
  data: any = []
  loading: boolean = false

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
        .from('services')
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
    return `background-image: url('${this.data.length >= 1 ? this.data[0]['imgs'][0] : ''}')`
  }

  get activeTitle() {
    return this.loading ? 'Загрузка...' : this.data.length >= 1 ? this.data[0].title : ''
  }

  get activeDescription() {
    return this.loading ? 'Загрузка...' : this.data.length >= 1 ? this.data[0].description : ''
  }

}
</script>

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

    <section class="conditions mt-6">
      <v-lazy>
        <div class="conditions-container general-container">
          <div class="conditions-head">
            <services-chip-list :data="data.length >= 1 ? data : []"/>
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
      </v-lazy>
    </section>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import supaBase from "~/assets/scripts/supaBase";

@Component({
  head(this: Promo): object {
    return {
      title: this.data.length >= 1 ? this.data[0].title : 'Загрузка...',
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.data.length >= 1 ? this.data[0].description.substring(0,250) : ''
        },

        // og:tags
        {
          hid: "og:url",
          property: "og:url",
          content: window.location.href
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website"
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.data.length >= 1 ? this.data[0].title : ''
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.data.length >= 1 ? this.data[0].description.substr(0,250) : ''
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.data.length ? this.data[0]['imghorisontal'] : ''
        }
      ]
    }
  }
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

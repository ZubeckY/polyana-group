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
      <div class="conditions-container general-container">
        <div class="conditions-head">

          <div class="mb-3">
            <div class="conditions-title mb-2">Отель</div>
            <services-chip :item="data" style="margin-left: -5px"/>
          </div>

          <h2 class="conditions-title">Об услуге</h2>
        </div>
        <div v-if="loading">Загрузка</div>
        <div v-else>
          <div v-if="data.id">
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

    <section class="restInPolyana mt-8">
      <div class="restInPolyana-container general-container">
        <div class="restInPolyana-body">
          <div class="restInPolyana-body-container" @click="dialog = true">
            <div class="restInPolyana-pictures-large grid-item">
              <div class="restInPolyana-pictures-large-img" v-if="getImageByIndex(0)">
                <img sizes="xs:200px md:500px lg:1024" loading="lazy" :src="getImageByIndex(0)" alt="big-pic"/>
              </div>
            </div>
            <div class="restInPolyana-pictures-small-img grid-item" v-if="getImageByIndex(1)">
              <img sizes="xs:200px md:500px lg:1024" loading="lazy" :src="getImageByIndex(1)" alt="pic-1"/>
            </div>
            <div class="restInPolyana-pictures-small-img grid-item" v-if="getImageByIndex(2)">
              <img sizes="xs:200px md:500px lg:1024" loading="lazy" :src="getImageByIndex(2)" alt="pic-3"/>
            </div>
            <div class="restInPolyana-pictures-small-img grid-item" v-if="getImageByIndex(3)">
              <img sizes="xs:200px md:500px lg:1024" loading="lazy" :src="getImageByIndex(3)" alt="pic-2"/>
            </div>
            <div class="restInPolyana-pictures-small-img grid-item" v-if="getImageByIndex(4)">
              <img sizes="xs:200px md:500px lg:1024" loading="lazy" :src="getImageByIndex(4)" alt="pic-4"/>
              <div class="restInPolyana-pictures-small-img-more">+{{ data.imgs ? data.imgs.length : 99 }} фото</div>
            </div>
            <gallery-dialog @changeDialog="changeDialog" :dialog="dialog" :data="data.imgs"/>
          </div>
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
    title: 'Услуги',
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Услуги"
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "Ключевые слова для поиска"
      },
    ],
  }
})
export default class Services extends Vue {
  data: any = []
  dialog: boolean = false
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

      let {data, error}:any = await supaBase
        .from('services')
        .select('')
        .match({id: currentId})
      this.data = data[0]
    } catch (e) {
      console.log(e)
    } finally {
      this.loading = false
    }
  }

  getImageByIndex(i: number): string {
    return this.data.id ? this.data['imgs'][i] : 'https://placehold.co/900x600/dddddd/dddddd'
  }

  changeDialog(dialog: boolean) {
    this.dialog = dialog
  }

  get activeSlide() {
    return `background-image: url('${this.data.id ? this.data['imgs'][0] : ''}')`
  }

  get activeTitle() {
    return this.loading ? 'Загрузка...' : this.data.id ? this.data.title : ''
  }

  get activeDescription() {
    return this.loading ? 'Загрузка...' : this.data.id ? this.data.description : ''
  }

}
</script>

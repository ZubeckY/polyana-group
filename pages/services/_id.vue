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
          <div v-if="data.id">
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

<!--    <section class="service-gallery" @click="dialog = true">-->
<!--      <div class="service-gallery-container general-container">-->
<!--        <div class="service-gallery-img-1">-->
<!--          <nuxt-img :src="getImageByIndex(0)"-->
<!--                    sizes="xs:200px md:500px lg:1024" alt="#"-->
<!--                    loading="lazy" quality="80" :placeholder="[50]"/>-->
<!--        </div>-->
<!--        <div class="service-gallery-img-2">-->
<!--          <nuxt-img :src="getImageByIndex(1)"-->
<!--                    sizes="xs:200px md:500px lg:1024" alt="#"-->
<!--                    loading="lazy" quality="80" :placeholder="[50]"/>-->
<!--        </div>-->
<!--        <div class="service-gallery-img-3">-->
<!--          <nuxt-img :src="getImageByIndex(2)"-->
<!--                    sizes="xs:200px md:500px lg:1024" alt="#"-->
<!--                    loading="lazy" quality="80" :placeholder="[50]"/>-->
<!--        </div>-->
<!--        <div class="service-gallery-img-4">-->
<!--          <nuxt-img :src="getImageByIndex(3)"-->
<!--                    sizes="xs:200px md:500px lg:1024" alt="#"-->
<!--                    loading="lazy" quality="80" :placeholder="[50]"/>-->
<!--        </div>-->
<!--        <div class="service-gallery-img-5">-->
<!--          <nuxt-img :src="getImageByIndex(4)"-->
<!--                    sizes="xs:200px md:500px lg:1024" alt="#"-->
<!--                    loading="lazy" quality="80" :placeholder="[50]"/>-->
<!--        </div>-->
<!--        <div class="service-gallery-img-6">-->
<!--          <nuxt-img :src="getImageByIndex(5)"-->
<!--                    sizes="xs:200px md:500px lg:1024" alt="#"-->
<!--                    loading="lazy" quality="80" :placeholder="[50]"/>-->
<!--        </div>-->
<!--      </div>-->
<!--      <gallery-dialog @changeDialog="changeDialog" :dialog="dialog" :data="data.imgs"/>-->
<!--    </section>-->

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

      let {data, error} = await supaBase
        .from('services')
        .select('')
        .match({id: currentId})

      let DATA: any = data
      this.data = DATA[0]
      console.log(this.data)
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

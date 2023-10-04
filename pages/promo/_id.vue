<template>
  <div>
    <header class="header header-promo">
      <div class="header-container" :style="activeSlide">
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

    <section class="conditions">
      <div class="conditions-container general-container">
        <div class="conditions-head">
          <div class="conditions-title">Условия акции</div>
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

@Component({})
export default class Promo extends Vue {
  data: any = {}
  loading: boolean = true

  async mounted() {
    await this.getData()
  }

  async getData() {
    try {
      let currentRoute = this.$router.currentRoute.path
      let getIdFromRoute = currentRoute.split('/')
      let currentId = getIdFromRoute[getIdFromRoute.length - 1]

      let {data, error} = await supaBase.from('specialoffer')
        .select('')
        .match({id: currentId})

      console.log(data)

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
<style lang="less" scoped>
.conditions {
  margin-top: 45px;

  &-head {
    margin-bottom: 23px;
  }

  &-body {
    width: 100%;

    &-container {
      display: flex;
      justify-content: space-between;
    }
  }

  &-title {
    color: black;
    font-size: 17px;
    font-weight: 700;
    text-transform: uppercase;
  }

  &-text {
    color: black;
    width: 100%;
    max-width: 800px;
    font-size: 15.3px;
    line-height: normal;
    white-space: pre-line;
  }
}
</style>

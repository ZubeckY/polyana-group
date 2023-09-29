<template>
  <nav class="header-nav">
    <div class="header-nav-container general-container d-flex align-center flex-row">
      <div class="header-nav-container-inner d-flex align-center w-100">
        <header-nav-menu/>
        <link-component class="header-nav__link mx-auto" v-for="(item, i) in firstLinks" :key="'f_link'+i" :item="item"/>
        <logo-small class="header-nav__logo"/>
        <link-component class="header-nav__link mx-auto" v-for="(item, i) in secondLinks" :key="'s_link'+i" :item="item"/>
      </div>

      <div class="header-nav__reservation ml-auto">
        <div class="header-nav__reservation-container d-flex flex-column">
          <v-btn class="header-nav__reservation-booking font-weight-bold" elevation="0" color="var(--golden-2)">Забронировать</v-btn>
          <v-btn class="header-nav__reservation-phone font-weight-bold" elevation="0" dark>+7 989 009 5577</v-btn>
        </div>
      </div>

    </div>
  </nav>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class Polyana extends Vue {
  links: any = [
    {
      title: 'Главная'
    },
    {
      title: 'Отели'
    },
    {
      title: 'Номера'
    },
    {
      title: 'SPA'
    },
    {
      title: 'Услуги'
    },
    {
      title: 'Ресторан'
    },
    {
      title: 'Контакты'
    },
  ]

  get firstLinks () {
    let array = []
    for (let i = 0; i < this.links.length; i++) {
      array.push(this.links[i])
      if (this.links[i]['title'] === 'SPA') break
    }
    return array
  }

  get secondLinks () {
    let array = []
    for (let i = 0; i < this.links.length; i++) {
      if (i >= 4) {
        array.push(this.links[i])
      }
    }
    return array
  }

}
</script>

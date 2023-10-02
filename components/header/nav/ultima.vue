<template>
  <nav class="header-nav">
    <div class="header-nav-container general-container d-flex align-center flex-row">
      <div class="header-nav-container-inner d-flex align-center w-100">
        <header-nav-menu/>
        <logo-ultima-dark class="header-nav__logo"/>
        <link-component class="header-nav__link mx-auto" v-for="(item, i) in links" :key="'u_link'+i" :item="item"/>
      </div>
      <div class="header-nav__reservation ml-auto">
        <div class="header-nav__reservation-container d-flex flex-column">
          <v-btn class="header-nav__reservation-phone-ultima font-weight-bold" elevation="0" dark>+7 989 009 5577</v-btn>
        </div>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({})
export default class Ultima extends Vue {
  links: any = [
    {
      title: 'Главная'
    },
    {
      title: 'Номера'
    },
    {
      title: 'Ресторан'
    },
    {
      title: 'Услуги'
    },
    {
      title: 'Акции'
    },
    {
      title: 'Отзывы'
    },
    {
      title: 'Контакты'
    },
  ]
}
</script>

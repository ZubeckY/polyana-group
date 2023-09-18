<template>
  <nav class="nav pt-4">
    <div v-if="showButtons" class="nav-container general-container d-flex flex-row">
      <div class="nav-button-group d-flex align-center justify-space-between">
        <lazy-nav-menu class="mr-auto"/>
        <lazy-nav-btn class="mx-auto">Главная</lazy-nav-btn>
        <lazy-nav-btn class="mx-auto">Отели</lazy-nav-btn>
        <lazy-nav-btn class="mx-auto">Номера</lazy-nav-btn>
        <lazy-nav-btn class="mx-auto">SPA</lazy-nav-btn>
        <lazy-logo class="mx-auto"/>
        <lazy-nav-btn class="mx-auto">Услуги</lazy-nav-btn>
        <lazy-nav-btn class="mx-auto">Ресторан</lazy-nav-btn>
        <lazy-nav-btn class="mx-auto">Контакты</lazy-nav-btn>
        <lazy-nav-buttons class="ml-auto"/>
      </div>
    </div>
    <div v-else class="nav-container general-container d-flex flex-row justify-space-between align-center">
      <lazy-logo/>
      <lazy-nav-menu/>
      <lazy-nav-buttons/>
    </div>
  </nav>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
@Component({})
export default class NavPolyana extends Vue {
  showButtons: boolean = true
  mounted () {
    this.resizer ()
    window.addEventListener('resize', () => {this.resizer()})
  }
  resizer () {return this.showButtons = window.innerWidth > 960}
}
</script>

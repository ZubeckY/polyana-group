<template>
  <nav class="nav pt-4">
    <div v-if="showButtons" class="nav-container general-container d-flex flex-row">
      <div class="nav-button-group d-flex align-center justify-space-between">
        <nav-menu class="mr-auto"/>
        <nav-btn class="mx-auto">Главная</nav-btn>
        <nav-btn class="mx-auto">Отели</nav-btn>
        <nav-btn class="mx-auto">Номера</nav-btn>
        <nav-btn class="mx-auto">SPA</nav-btn>
        <logo class="mx-auto"/>
        <nav-btn class="mx-auto">Услуги</nav-btn>
        <nav-btn class="mx-auto">Ресторан</nav-btn>
        <nav-btn class="mx-auto">Контакты</nav-btn>
        <nav-buttons class="ml-auto"/>
      </div>
    </div>
    <div v-else class="nav-container general-container d-flex flex-row justify-space-between align-center">
      <logo/>
      <nav-menu/>
      <nav-buttons/>
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
    window.addEventListener('resize', () => {
      this.resizer()
    })
  }

  resizer () {
    return this.showButtons = window.innerWidth >= 960
  }
}
</script>

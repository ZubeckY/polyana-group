<template>
  <nav class="nav">
    <div class="nav-container general-container d-flex flex-row">

      <div class="nav-button-group d-flex justify-space-between">
        <v-btn v-show="true"
               text dark
               class="nav-menu px-0"
               width="auto"
               height="auto"
               min-width="0"
               min-height="0">
          <div class="nav-menu-lineGroup d-flex flex-column align-center justify-center">
            <div class="nav-menu-lineGroup-container d-flex flex-column">
              <div v-for="i in 3" class="nav-menu-lineGroup-line"></div>
            </div>
            <div class="nav-menu-lineGroup-text font-weight-regular mt-1">Меню</div>
          </div>
        </v-btn>

        <nav-btn>Главная</nav-btn>
        <nav-btn>Отели</nav-btn>
        <nav-btn>Номера</nav-btn>
        <nav-btn>SPA</nav-btn>
      </div>

      <logo/>

      <div class="nav-button-group d-flex justify-space-between">
        <nav-btn>Услуги</nav-btn>
        <nav-btn>Ресторан</nav-btn>
        <nav-btn>Контакты</nav-btn>

        <div class="d-flex flex-column">
          <v-btn class="nav-button-group--book" width="173px" height="40px" color="var(--golden-2)">Забронировать</v-btn>
          <v-btn class="nav-button-group--phone" width="173px" height="40px" dark>+7 989 009 5577</v-btn>
        </div>
      </div>

    </div>
  </nav>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class NavPolyana extends Vue {

}
</script>

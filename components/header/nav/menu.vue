<template>
  <v-btn class="header-nav__menu pa-0" text
         min-width="0" min-height="0" width="auto" height="0">
    <div class="header-nav__menu-container d-flex justify-center align-center flex-column">
      <div class="d-flex justify-center align-center flex-column">
        <div v-for="i in 3" :key="'image'+i" class="header-nav__menu-line"></div>
      </div>
      <div class="header-nav__menu-title">Меню</div>
    </div>
  </v-btn>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({})
export default class Menu extends Vue {
}
</script>

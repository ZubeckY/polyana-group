<template>
  <v-btn class="nav-menu px-0" text dark
         width="auto" height="auto"
         min-width="0" min-height="0">
    <div class="nav-menu-lineGroup d-flex flex-column align-center justify-center">
      <div class="nav-menu-lineGroup-container d-flex flex-column">
        <div v-for="i in 3" class="nav-menu-lineGroup-line"></div>
      </div>
      <div class="nav-menu-lineGroup-text font-weight-regular mt-1">Меню</div>
    </div>
  </v-btn>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component({})
export default class NavMenu extends Vue {
}
</script>

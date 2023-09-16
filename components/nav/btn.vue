<template>
  <v-btn text dark
         class="nav-btn text-none px-0"
         width="auto"
         height="auto"
         min-width="0"
         min-height="0">
    <slot></slot>
  </v-btn>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({})
export default class NavBtn extends Vue {

}
</script>

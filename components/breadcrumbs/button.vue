<template>
  <v-btn class="breadcrumbs-button" elevation="0" @click="getBack"
         width="34px" height="34px" min-width="0" min-height="0" color="var(--card-grey)">
    <chevron-left/>
  </v-btn>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class Button extends Vue {
  getBack() {
    if (!document.referrer) {
      location.href = '/'
    }
    if (document.referrer.split('?')[0] == window.location.href.split('?')[0]) {
      location.href = document.referrer
    }
    location.href = document.referrer
  }
}
</script>

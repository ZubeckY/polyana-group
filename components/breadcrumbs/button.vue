<template>
  <v-btn @click="$router.push('/')" class="breadcrumbs-button"
         elevation="0" width="34px" height="34px"
         min-width="0" min-height="0" color="var(--card-grey)">
    <chevron-left/>
  </v-btn>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class Button extends Vue {
}
</script>

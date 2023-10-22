<template>
  <v-btn min-height="0" min-width="0"
         width="34px" height="34px" elevation="0"
         color="#ffffffb8" title="Назад" rounded>
    <lazy-chevron-left/>
  </v-btn>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({})
export default class Prev extends Vue {

}
</script>

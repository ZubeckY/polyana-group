<template>
  <v-alert v-model="show" outlined class="my-4" elevation="0" rounded="xxl" type="error">
    <div class="d-flex justify-space-between">
      <div>
        <v-card-title class="fontSize-m--xl pa-0">Внимание!</v-card-title>
        <v-card-text class="fontSize-m--s pa-0 mt-2">На сайте ведутся работы!</v-card-text>
        <v-card-text class="fontSize-m--s pa-0 mt-1">Данная версия является демонстрационной, и не является конечным результатом.</v-card-text>
      </div>
      <v-card-actions class="pa-0">
        <v-btn @click="show=false" icon color="error">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-actions>
    </div>
  </v-alert>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({})
export default class IsDemo extends  Vue {
  show: boolean = true
}
</script>

<template>
  <v-btn :class="'link-component text-none pa-0 mb-1 ' + elemClass" text
         min-width="0" min-height="0" width="auto" height="16px">
    {{ elemTitle }}
  </v-btn>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
@Component({})
export default class LinkComponent extends Vue {
  @Prop() item?: any
  get elemTitle () {
    if (!this.item) {return ''}
    return this.item['title'] ? this.item['title'] : ''
  }
  get elemClass () {
    if (!this.item) {return ''}
    return this.item['class'] ? this.item['class'] : ''
  }
}
</script>

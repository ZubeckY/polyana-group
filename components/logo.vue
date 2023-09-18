<template>
  <div class="logo">
    <v-img class="logo-img" width="80px" height="60px"
           :lazy-src="require(`~/assets/img/g10.png`)"
           :src="require(`~/assets/img/g10.png`)"/>
    <div class="logo-text">Polyana group</div>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({})
export default class logo extends Vue {

}
</script>

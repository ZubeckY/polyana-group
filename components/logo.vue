<template>
  <div class="logo">
    <v-img class="logo-img" width="80px" height="60px"
           contain src="img/g10.webp" alt="logo"/>
    <div class="logo-text">Polyana group</div>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({}) export default class logo extends Vue {}
</script>
<style lang="less" scoped>
/* logo */
.logo {
  &-img {position: relative !important; z-index: 100 !important;}
  &-text {
    color: white; padding-top: 7px; font-size: 15px; font-weight: 400;
    position: relative; width: 80px; height: 45px; top: -5px; z-index: 50;
    text-align: center; text-transform: uppercase; border: 2px solid white;
    border-top: none; background: rgba(217, 217, 217, 0.33); backdrop-filter: blur(25px);
  }
}
</style>

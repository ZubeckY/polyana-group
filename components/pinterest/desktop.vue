<template>
  <div class="pinterest-card-welcome--desktop">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         style="max-width: 1200px; width: 100%" height="412" viewBox="0 0 1416 485" fill="none">
      <path d="M705 23C705 10.2975 694.703 0 682 0H23C10.2975 0 0 10.2975 0 23V462C0 474.703 10.2974 485 23 485H1393C1405.7 485 1416 474.703 1416 462V142C1416 129.297 1405.7 119 1393 119H728C715.297 119 705 108.703 705 96V23Z" fill="url(#pinterestDesktop)"/>
      <defs>
        <pattern id="pinterestDesktop" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#imagePinterestDesktop" transform="matrix(0.000285003 0 0 0.000832092 -0.115113 -0.539295)"/>
        </pattern>
        <image id="imagePinterestDesktop" width="4096" height="2731" href="img/pinterest/desktop.webp"/>
      </defs>
    </svg>
    <watch-play/>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({})
export default class desktop extends Vue {
}
</script>

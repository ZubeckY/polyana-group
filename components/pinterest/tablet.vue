<template>
  <div class="pinterest-card-welcome--tablet">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         width="100%" height="370" viewBox="0 0 525 370" fill="none">
      <path d="M22 0C9.84971 0 0 9.84977 0 22V336.911C0 355.185 14.8146 370 33.0894 370H491.829C510.104 370 524.919 355.185 524.919 336.911V103.78C524.919 85.5059 510.104 70.6911 491.829 70.6911H297.805C279.53 70.6911 264.715 55.8762 264.715 37.6016V22C264.715 9.84973 254.866 0 242.715 0H22Z" fill="url(#pinterestTablet)"/>
      <defs>
        <pattern id="pinterestTablet" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#imagePinterestTablet" transform="matrix(0.000283521 0 0 0.000402232 -0.0882993 -0.044192)"/>
        </pattern>
        <image id="imagePinterestTablet" width="4096" height="2731" href="/img/pinterest/mobile.webp"/>
      </defs>
    </svg>
    <watch-play/>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({})
export default class Tablet extends Vue {
}
</script>

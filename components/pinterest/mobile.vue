<template>
  <div class="pinterest-card-welcome--mobile">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         width="100%" height="246" viewBox="0 0 349 246" fill="none">
      <path d="M22 0C9.84974 0 0 9.84973 0 22V224C0 236.15 9.84974 246 22 246H327C339.15 246 349 236.15 349 224V69C349 56.8499 339.15 47 327 47H198C185.85 47 176 37.1501 176 25V22C176 9.84974 166.15 0 154 0H22Z" fill="url(#pinterestMobile)"/>
      <defs>
        <pattern id="pinterestMobile" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#imagePinterestMobile" transform="matrix(0.000283521 0 0 0.000402232 -0.0882993 -0.044192)"/>
        </pattern>
        <image id="imagePinterestMobile" width="4096" height="2731" href="img/pinterest/Subtract.png"/>
      </defs>
    </svg>
    <watch-play/>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({})
export default class Mobile extends Vue {
}
</script>

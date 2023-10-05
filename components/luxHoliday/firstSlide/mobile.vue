<template>
  <div class="luxHoliday-slide">
    <svg class="luxHoliday-slide-body" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 373 263" fill="none">
      <path
        d="M0 12C0 5.37258 5.37259 0 12 0H361C367.627 0 373 5.37258 373 12V251C373 257.627 367.627 263 361 263H250C243.373 263 238 257.627 238 251V241C238 234.373 232.627 229 226 229H204C197.373 229 192 223.627 192 217V214C192 207.373 186.627 202 180 202H12C5.37258 202 0 196.627 0 190V12Z"
        :fill="'url(#luxHolPatternMobile'+id+')'"/>
      <defs>
        <pattern :id="'luxHolPatternMobile'+id" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use :href="'#luxHolPhotoMobile'+id" transform="matrix(0.000258182 0 0 0.000366166 -0.0287558 0)"/>
        </pattern>
        <image :id="'luxHolPhotoMobile'+id" :href="image.url" width="4096" height="2731"/>
      </defs>
    </svg>
    <div class="luxHoliday-slide-head">
      <div class="luxHoliday-slide-title">{{ title }}<svg class="luxHoliday-slide-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 26" fill="none">
          <path opacity="0.8"
                d="M19.0317 4.39662C18.9219 4.46503 18.7941 4.51665 18.7038 4.60571C12.7379 10.5633 6.77598 16.5247 0.812743 22.4861C0.597572 22.7013 0.596281 22.9146 0.80887 23.1263C1.58348 23.902 2.35939 24.6776 3.1353 25.4533C3.33497 25.6529 3.53336 25.6542 3.73046 25.4572C9.70145 19.4893 15.6711 13.5201 21.6421 7.55223C21.7325 7.46188 21.8267 7.3767 21.9765 7.23344C21.9933 7.43736 22.014 7.57675 22.014 7.71614C22.0152 12.5986 22.0152 17.4811 22.0152 22.3635C22.0152 22.6664 22.1667 22.8178 22.4697 22.8178C23.589 22.8178 24.707 22.8101 25.8263 22.823C26.0845 22.8256 26.1504 22.743 26.1504 22.4926C26.1439 15.1373 26.1452 7.78067 26.1452 0.425346C26.1452 0.331129 26.1336 0.236914 26.1259 0.103979H25.7644C18.4494 0.103979 11.1345 0.105268 3.81954 0.0975246C3.51744 0.0975246 3.41287 0.163347 3.41803 0.483423C3.4374 1.59079 3.42578 2.69815 3.42578 3.8068C3.42578 4.08988 3.56521 4.23185 3.84407 4.23271C8.73834 4.23271 13.6339 4.23271 18.5282 4.23271C18.6637 4.23271 18.7993 4.23271 18.9349 4.23271C18.9671 4.28692 18.9994 4.34242 19.0317 4.39662Z"
                fill="black"/>
        </svg>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component({})
export default class FirstSlide extends Vue {
  @Prop() id: any
  @Prop() image: any
  @Prop() title: any
}
</script>

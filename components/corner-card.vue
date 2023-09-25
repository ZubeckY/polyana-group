<template>
  <v-card class="corner-card" elevation="0" width="333px" height="493px" color="transparent">
    <div class="corner-card-header d-flex justify-space-between">
      <div class="corner-card-header-container d-flex flex-row flex-wrap px-3 py-3">
        <v-chip class="font-weight-thin mr-1 mb-1" color="var(--dark-color)" dark></v-chip>
      </div>
      <v-card class="corner-card-header--arrow d-flex justify-center align-center rounded-xxl"
              width="72px" height="72px" elevation="0" color="golden-gradient">
        <svg fill="#ffffff" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier"> <g data-name="Layer 2"> <g data-name="diagonal-arrow-right-up"> <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
            <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"></path></g></g>
          </g>
        </svg>
      </v-card>
    </div>

    <v-lazy>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333 493">
        <defs>
          <mask id='mask-1' x='0' y='0'>
            <path d="M251 23C251 10.2975 240.703 0 228 0H23C10.2975 0 0 10.2975 0 23V470C0 482.703 10.2975 493 23 493H310C322.703 493 333 482.703 333 470V103C333 90.2975 322.703 80 310 80H274C261.297 80 251 69.7025 251 57V23Z" fill="#D9D9D9"/>
          </mask>
        </defs>
        <image class="corner-card-image d-block" mask='url(#mask-1)'
               xlink:href='https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'/>
        <!--             xlink:href=''/>-->
      </svg>
    </v-lazy>

    <v-card class="d-flex justify-center align-center" width="100%" color="transparent">
      <v-card class="corner-card-text d-flex justify-center align-center"
              elevation="0" color="transparent" width="289px" height="82px">
        <v-card-text class="text-center px-6 pt-1">

        </v-card-text>
      </v-card>
    </v-card>
  </v-card>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
@Component({})
export default class CornerCard extends Vue {
  @Prop () model: any
}
</script>
<style lang="less" scoped>
.corner-card {
  position: relative;
  &-header {
    position: absolute; width: 100%;
    &-container { width: calc(100% - 72px) }
    &--arrow {position: relative;top: 0; right: 0;}
  }
  &-image {width: 333px;height: 493px;object-fit: contain;}
  &-text {
    position: absolute !important;
    bottom: 26px; color: var(--dark-color);
    font-size: 16px !important;
    font-weight: 500 !important;
    white-space: pre-line !important;
    border-radius: 12px !important;
    backdrop-filter: blur(25px);
    background: linear-gradient(270deg,
    rgba(217, 217, 217, 0.40) 2.1%,
    rgba(217, 217, 217, 0.20) 103.66%);
  }
}
</style>

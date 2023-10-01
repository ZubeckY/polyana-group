<template>
  <v-card class="corner-card" elevation="0" width="283px" height="420px" color="transparent">
    <div class="corner-card-header d-flex justify-space-between">
      <div class="corner-card-header-container d-flex flex-row flex-wrap px-3 py-3">
        <v-chip class="font-weight-thin mr-1 mb-1" color="var(--dark-color)" dark></v-chip>
      </div>
      <v-card class="corner-card-header--arrow d-flex justify-center align-center rounded-xxl"
              width="61px" height="61px" elevation="0" color="golden-gradient">
        <svg fill="#ffffff" width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier"> <g data-name="Layer 2"> <g data-name="diagonal-arrow-right-up"> <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
            <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"></path></g></g>
          </g>
        </svg>
      </v-card>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg"  width="284" height="420" viewBox="0 0 284 420" fill="none">
      <path d="M19.9504 0.899902C9.15323 0.899902 0.400391 9.65274 0.400391 20.4499V400.4C0.400391 411.197 9.15323 419.95 19.9504 419.95H263.9C274.698 419.95 283.45 411.197 283.45 400.4V88.5099C283.45 77.7127 274.698 68.9599 263.9 68.9599H233.09C222.293 68.9599 213.54 60.2071 213.54 49.4099V20.4499C213.54 9.65274 204.788 0.899902 193.99 0.899902H19.9504Z"
            :fill="'url(#patternCorner'+item.id+')'"/>
      <defs>
        <pattern :id="'patternCorner'+item.id" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use :href="'#photoCorner'+item.id" transform="matrix(0.00190784 0 0 0.00128866 -0.0113 0)"/>
        </pattern>
      </defs>
      <image :id="'photo'+item.id" height="100%" :href='item.img'/>
    </svg>

    <v-card class="d-flex justify-center align-center" width="100%" color="transparent">
      <v-card class="corner-card-text d-flex justify-center align-center"
              elevation="0" color="transparent" width="246px" height="70px">
        <div class="text-center">{{ item.text }}</div>
      </v-card>
    </v-card>

  </v-card>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
@Component({})
export default class CornerCard extends Vue {
  @Prop () item!: any
}
</script>
<style lang="less" scoped>
.corner-card {
  position: relative;
  border-radius: 19.55px;
  &-header {
    position: absolute; width: 100%;
    &-container { width: calc(100% - 72px) }
    &--arrow { position: relative; top: 0; right: 0; }
  }
  &-image {
    width: 283px;
    height: 420px;
    object-fit: contain;
  }
  &-text {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute !important;
    bottom: 26px; color: var(--dark-color);
    border-radius: 12px !important;
    backdrop-filter: blur(25px);
    background: linear-gradient(270deg,
    rgba(217, 217, 217, 0.40) 2.1%,
    rgba(217, 217, 217, 0.20) 103.66%);
    & * {
      color: var(--dark-color);
      font-size: 13px !important;
      font-weight: 500 !important;
      line-height: normal;
      white-space: pre-line !important;
    }
  }
}
</style>

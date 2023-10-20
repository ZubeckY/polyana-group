<template>
  <div class="corner-card">
    <div class="corner-card-header d-flex justify-space-between">
      <corner-card-chips :item="item"/>
      <a class="corner-card-header--arrow golden-gradient" :href="goToPromo">
        <svg fill="#ffffff" width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g data-name="Layer 2">
              <g data-name="diagonal-arrow-right-up">
                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"></path>
              </g>
            </g>
          </g>
        </svg>
      </a>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" width="284" height="420" viewBox="0 0 284 420" fill="none">
      <path
        d="M20.2004 0.950195C9.40322 0.950195 0.650391 9.70303 0.650391 20.5002V400.45C0.650391 411.247 9.40323 420 20.2004 420H264.15C274.948 420 283.7 411.247 283.7 400.45V88.5602C283.7 77.763 274.948 69.0102 264.15 69.0102H233.34C222.543 69.0102 213.79 60.2574 213.79 49.4602V20.5002C213.79 9.70303 205.038 0.950195 194.24 0.950195H20.2004Z"
        :fill="'url(#patternCorner'+item.id+')'"/>
      <defs>
        <pattern :id="'patternCorner'+item.id" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use :href="'#photoCorner'+item.id" transform="matrix(0.00190784 0 0 0.00128866 -0.0113 0)"/>
        </pattern>
        <image :id="'photoCorner'+item.id" :href='item.imgvertical'/>
      </defs>
    </svg>

    <v-card class="d-flex justify-center align-center" width="100%" color="transparent">
      <div class="corner-card-text d-flex justify-center align-center">
        <h4 class="text-center"> {{ item.title }}</h4>
      </div>
    </v-card>

  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({})
export default class CornerCard extends Vue {
  @Prop() item!: any

  get goToPromo() {
    return `/promo/${this.item.id}`
  }
}
</script>
<style lang="less">
.corner-card {
  width: 283px;
  height: 420px;
  position: relative;
  border-radius: 19.55px;

  &-header {
    position: absolute;
    width: 100%;

    &-chip {
      height: 25px;
      font-size: 12px !important;
    }

    &-container {
      width: calc(100% - 72px)
    }

    &--arrow {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
      top: 0;
      right: 0;
      width: 61px;
      height: 61px;
      border-radius: 19.55px;
    }
  }

  &-image {
    width: 283px;
    height: 420px;
    object-fit: contain;
  }

  &-text {
    display: flex;
    position: absolute;
    width: 246px;
    height: 70px;
    bottom: 26px;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    color: var(--dark-color);
    backdrop-filter: blur(25px);
    background: linear-gradient(270deg,
    rgba(217, 217, 217, 0.40) 2.1%,
    rgba(217, 217, 217, 0.20) 103.66%);

    & * {
      color: var(--dark-color);
      font-size: 13px;
      font-weight: 500;
      line-height: normal;
      white-space: pre-line;
    }
  }
}
</style>

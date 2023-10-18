<template>
  <div class="footer-slide-container">
    <img class="footer-slide-image" :src="item" alt="#"/>
    <a :href="getHotelLink" class="footer-slide-svg">
      <svg viewBox="0 0 82 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1807_236)">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M0 79.5H2.53888C12.8666 79.5 21.2389 71.1277 21.2389 60.8V38.7C21.2389 28.3723 29.7042 20 40.1467 20H62.7C73.0277 20 81.4 11.6277 81.4 1.29999V0H82V80H0V79.5Z"
                fill="#D9D9D9"/>
          <rect x="27" y="26" width="53" height="53" rx="13.6" :fill="'url(#paint0_linear_1807_236'+isKey+')'"/>
          <path
            d="M57.4167 45.371C57.3306 45.4246 57.2304 45.4651 57.1595 45.5349C52.4804 50.2063 47.8044 54.8808 43.1273 59.5552C42.9586 59.7239 42.9576 59.8912 43.1243 60.0572C43.7318 60.6654 44.3404 61.2736 44.9489 61.8818C45.1056 62.0384 45.2612 62.0394 45.4157 61.8849C50.0989 57.2054 54.781 52.5248 59.4641 47.8453C59.535 47.7745 59.6089 47.7077 59.7264 47.5954C59.7395 47.7553 59.7557 47.8646 59.7557 47.9739C59.7567 51.8023 59.7567 55.6307 59.7567 59.4591C59.7567 59.6966 59.8756 59.8153 60.1132 59.8153C60.9911 59.8153 61.8679 59.8093 62.7458 59.8194C62.9484 59.8214 63 59.7566 63 59.5603C62.9949 53.7929 62.996 48.0245 62.996 42.257C62.996 42.1832 62.9868 42.1093 62.9808 42.0051H62.6972C56.96 42.0051 51.2228 42.0061 45.4856 42C45.2487 42 45.1666 42.0516 45.1707 42.3026C45.1859 43.1709 45.1768 44.0392 45.1768 44.9085C45.1768 45.1305 45.2861 45.2418 45.5048 45.2425C49.3435 45.2425 53.1832 45.2425 57.0218 45.2425C57.1281 45.2425 57.2344 45.2425 57.3408 45.2425C57.3661 45.285 57.3914 45.3285 57.4167 45.371Z"
            fill="white"/>
        </g>
        <defs>
          <linearGradient :id="'paint0_linear_1807_236'+isKey" x1="23.613" y1="52.5001" x2="89.471" y2="52.5001"
                          gradientUnits="userSpaceOnUse">
            <stop stop-color="#CCAB6A"/>
            <stop offset="0.808606" stop-color="#B2A07E"/>
          </linearGradient>
          <clipPath id="clip0_1807_236">
            <rect width="81.4" height="79.51" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </a>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component({})
export default class Slide extends Vue {
  @Prop() item!: string
  @Prop() isKey!: string
  @Prop() hotel!: string

  get getHotelLink () {
    return '/hotel?hotel_id=' + this.hotel.travellineid
  }
}
</script>

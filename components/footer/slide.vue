<template>
  <div class="footer-slide">
    <svg class="footer-slide-svg"
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 364 290" fill="none">
      <path d="M12.1333 0C5.43228 0 0 5.37259 0 12V278C0 284.627 5.43229 290 12.1333 290H271.222C283.372 290 293.222 280.15 293.222 268V242C293.222 229.85 303.181 220 315.467 220H342C354.15 220 364 210.15 364 198V12C364 5.37258 358.568 0 351.867 0H12.1333Z"
            :fill="'url(#pattern'+item.id+')'"/>
      <defs>
        <pattern :id="'pattern'+item.id" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use :href="'#photo'+item.id" transform="matrix(0.000366166 0 0 0.000459602 0 -0.441264)"/>
        </pattern>
      </defs>

      <image :id="'photo'+item.id" width="2731" height="4096" :href="item.url"/>
    </svg>

    <div class="footer-slide-corner">
      <div class="footer-slide-corner--arrow d-flex justify-center align-center golden-gradient">
        <svg fill="#ffffff" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g data-name="Layer 2">
              <g data-name="diagonal-arrow-right-up">
                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
@Component({})
export default class FooterSlide extends Vue {
  @Prop() item!: any
}
</script>

<template>
  <v-card class="footer-slide"
          width="364px" height="290px"
          elevation="0" color="transparent">

    <svg xmlns="http://www.w3.org/2000/svg"
         width="364" height="290"
         viewBox="0 0 364 290" fill="none">
      <path d="M12.1333 0C5.43228 0 0 5.37259 0 12V278C0 284.627 5.43229 290 12.1333 290H271.222C283.372 290 293.222 280.15 293.222 268V242C293.222 229.85 303.181 220 315.467 220H342C354.15 220 364 210.15 364 198V12C364 5.37258 358.568 0 351.867 0H12.1333Z"
            :fill="'url(#pattern'+item.id+')'"/>
      <defs>
        <pattern :id="'pattern'+item.id" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use :href="'#photo'+item.id" transform="matrix(0.000366166 0 0 0.000459602 0 -0.441264)"/>
        </pattern>
      </defs>

      <image :id="'photo'+item.id"
             width="2731" height="4096"
             :href="item.url"/>
    </svg>

    <div class="footer-slide-corner">
      <v-card class="footer-slide-corner--arrow d-flex justify-center align-center rounded-xxl"
              width="62px" height="62px" elevation="0" color="golden-gradient">
        <img width="35px" height="35px" alt="#" :src="require('~/assets/img/top-right-arrow-2.png')">
      </v-card>
    </div>
  </v-card>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
@Component({})
export default class footerSlide extends Vue {
  @Prop() item!: any
}
</script>

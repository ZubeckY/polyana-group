<template>
  <v-card elevation="0" color="transparent">
    <div class=" d-flex justify-space-between">
      <div class=" d-flex flex-row flex-wrap px-3 py-3">
        <v-chip class="font-weight-thin mr-1 mb-1" color="var(--dark-color)" dark></v-chip>
      </div>
      <v-card class=" d-flex justify-center align-center rounded-xxl"
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

    <svg xmlns="http://www.w3.org/2000/svg"
         width="890" height="460" viewBox="0 0 890 460" fill="none">
      <path d="M867 0C879.703 0 890 10.2975 890 23V437C890 449.703 879.703 460 867 460H515C502.297 460 492 449.703 492 437V421C492 408.297 481.703 398 469 398H397C384.297 398 374 387.703 374 375V373C374 360.297 363.703 350 351 350H23C10.2975 350 0 339.703 0 327V23C0 10.2975 10.2975 0 23 0H867Z" :fill="'url(#pattern'+item.id+')'"/>
      <defs>
        <pattern :id="'pattern'+item.id" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use :href="'#photo'+item.id" transform="matrix(0.000244141 0 0 0.000472359 0 -0.145006)"/>
        </pattern>
      </defs>
      <image :id="'photo'+item.id" width="2731" height="4096" :href="item.url"/>
    </svg>

    <div>
      <v-card elevation="0" color="golden-gradient">
      </v-card>
    </div>
  </v-card>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
@Component({})
export default class RestInComfortSlide extends Vue {
  @Prop() item!: any
}
</script>

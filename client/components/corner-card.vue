<template>
  <v-card class="corner-card"
          elevation="0"
          width="333px"
          height="493px"
          color="transparent">
    <div class="corner-card-header d-flex justify-space-between">
      <div class="corner-card-header-container d-flex flex-row flex-wrap px-3 py-3">
        <v-chip class="font-weight-thin mr-1 mb-1" color="var(--dark-color)" dark></v-chip>
      </div>
      <v-card class="d-flex justify-center align-center rounded-xxl"
              elevation="0"
              width="72px"
              height="72px"
              color="golden-gradient"
              style="position: relative; top: 0; right: 0">
        <img width="41px" height="41px" alt="#"
             :src="require('~/assets/img/top-right-arrow-2.png')"></img>
      </v-card>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 333 493">
      <defs>
        <mask id='mask-1' x='0' y='0' width='inherit' height='inherit'>
          <path d="M251 23C251 10.2975 240.703 0 228 0H23C10.2975 0 0 10.2975 0 23V470C0 482.703 10.2975 493 23 493H310C322.703 493 333 482.703 333 470V103C333 90.2975 322.703 80 310 80H274C261.297 80 251 69.7025 251 57V23Z" fill="#D9D9D9"/>
        </mask>
      </defs>
      <image class="corner-card-image d-block" mask='url(#mask-1)'
             xlink:href='https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'/>
    </svg>

    <v-card class="corner-card-text d-flex justify-center align-center"
            elevation="0" color="transparent"
            width="289px" height="82px">
      <v-card-text class="text-center px-6 pt-1">

      </v-card-text>
    </v-card>
  </v-card>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
@Component({})
export default class cornerCard extends Vue {
  @Prop () model: any
}
</script>

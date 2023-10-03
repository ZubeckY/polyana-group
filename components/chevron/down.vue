<template>
  <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
       :stroke="dark ? '#fff' : color">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M6 9L12 15L18 9" :stroke="dark ? '#fff' : color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </g>
  </svg>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
@Component({})
export default class Down extends Vue {
  @Prop() dark?: boolean
  color: string = '#32343A'
}
</script>

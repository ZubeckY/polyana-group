<template>
  <div class="logo">
    <v-img class="logo-img"
           width="80px" height="60px"
           contain src="img/g10.png" alt="logo"/>
    <div class="logo-text">Polyana group</div>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({}) export default class logo extends Vue {}
</script>

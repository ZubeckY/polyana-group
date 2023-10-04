<template>
  <div class="breadcrumbs-content">
    Главная
    <span class="breadcrumbs-content-delimiter">/</span>
    <hotels-menu>
      <div class="d-flex align-center">
        <chevron-down class="mt-1 mr-1"/>
        <div>Отели</div>
      </div>
    </hotels-menu>
    <span class="breadcrumbs-content-delimiter">/</span>
    Ultima Club Hotel & SPA
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class Content extends Vue {}
</script>

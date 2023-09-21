<template>
  <section class="header-info">
    <div class="header-info-container general-container d-flex">
      <div class="d-flex flex-row mt-4">
        <!-- Лето/Зима -->
        <lazy-header-switch/>
        <!-- Отдыхайте с комфортом -->
        <div class="relax-in-comfort fontSize-xl--l">Отдыхайте с комфортом
          и наслаждайтесь <span class="golden">красотами
                        Красной Поляны</span> в наших
          уникальных отелях!
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({})
export default class info extends Vue {
}
</script>

<template>
  <article class="rating-card rating-we-care">
    <div class="rating-card-container d-flex flex-column pt-1">
      <div class="d-flex">
        <div class="rating-we-care-star text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <path d="M15.9436 5.56436L10.1636 8.79436V7.98686L15.9436 11.2169L14.6261 13.5544L9.0161 10.2819L9.48359 9.98436L9.52609 16.3169H6.97609L7.01859 9.98436L7.48609 10.2819L1.87609 13.5544L0.558594 11.2169L6.38109 7.98686V8.79436L0.558594 5.56436L1.87609 3.18436L7.48609 6.49936L7.01859 6.79686L6.97609 0.464355H9.52609L9.48359 6.79686L9.0161 6.49936L14.6261 3.18436L15.9436 5.56436Z" fill="black"/>
          </svg>
        </div>
        <div class="rating-card-title ma-0 ml-2 pa-0">Отели
          4-5 звёзд
        </div>
      </div>
      <lazy-v-vertical-spacer/>
      <div class="rating-card-text ma-0 pa-0">Заботимся о вашем
        отдыхе в каждой детали
      </div>
    </div>
  </article>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({})
export default class RatingWeCare extends Vue {
}
</script>

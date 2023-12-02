<template>
  <section class="rating">
    <div class="rating-container justify-space-between d-flex">
      <!-- Яндекс -->
      <rating-yandex/>
      <!-- Высокий рейтинг -->
      <rating-tl-rep/>
      <!-- Отели 4-5 звёзд -->
      <rating-we-care/>
      <!-- Удобное бронирование -->
      <rating-booking-comfort/>
      <!-- Актуальное (погода) -->
      <rating-weather/>
    </div>
  </section>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component({})
export default class Rating extends Vue {
}
</script>
<style>
/* rating */
.rating {
  display: flex;
  margin-top: 40px;
  justify-content: center;
}

.rating-container {
  width: 100%;
  justify-content: space-between;
}

.rating-card {
  height: 145px;
  padding: 16px;
  margin-right: 5px;
  background: var(--card-grey);
  border-radius: var(--bordrad23);
}

.rating-card:last-child {
  margin-right: 0;
}

.rating-card-container {
  height: 100%;
}

.rating-card-title {
  display: flex;
  align-items: center;
  color: black;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  white-space: pre-line;
}

.rating-card-text {
  color: black;
  white-space: pre-line;
  font-size: 14px !important;
}

.rating-yandex {
  width: 257px;
}

.rating-tl-rep {
  width: 371px;
}

.rating-tl-rep-title {
  color: black;
}

.rating-tl-rep-text {
  position: relative;
  top: -5px;
  color: black;
  font-size: 17px;
  font-weight: 400;
}

.rating-tl-rep-left,
.rating-tl-rep-right {
  position: relative;
  top: 3px;
}

.rating-tl-rep-left {
  left: 5px;
}

.rating-tl-rep-right {
  right: 5px;
}

.rating-we-care {
  width: 257px;
}

.rating-we-care-star {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 43px;
  height: 43px;
  border-radius: 50%;
  background: var(--golden-1)
}

.rating-booking-comfort {
  width: 285px;
}

.rating-weather {
  width: 280px;
}

.rating-weather-text {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 30px;
  color: black;
  padding: 0 10px;
  margin-right: 3px;
  min-width: 62px;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  border-radius: 8px;
  background: var(--golden-1);
}

.rating-weather-text:last-child {
  margin-right: 0;
}
</style>

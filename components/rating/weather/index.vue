<template>
  <v-card class="rating-card rating-weather" height="150px" elevation="0" color="var(--card-grey)">
    <div class="rating-card-container d-flex flex-column pt-1">
      <div class="d-flex justify-space-between align-center">
        <v-card-title class="rating-card-title d-flex justify-space-between ma-0 pa-0 w-100">
          <div>Актуальное</div>
          <lazy-rating-yandex-arrow/>
        </v-card-title>
      </div>
      <lazy-v-vertical-spacer/>
      <v-card-text class="rating-card-text ma-0 pa-0">29 августа, Малооблачно,
        без осадков.
      </v-card-text>
      <lazy-v-vertical-spacer/>
      <div class="d-flex align-center">
        <v-card class="rating-weather-text py-2 mr-1 mr-1"
                color="var(--golden-1)" elevation="0"
                width="82px" height="35px">
          <div class="d-flex flex-row justify-center align-center">
            <v-img width="12px" height="12px" position="center center" contain src="img/weather/Sunrise.webp" alt="day"/>
            <div>{{ weather['main'] ? weather['main']['temp'] : 0 }} °</div>
          </div>
        </v-card>
        <v-card class="rating-weather-text py-2 mx-1"
                color="var(--golden-1)" elevation="0"
                width="82px" height="35px">
          <div class="d-flex flex-row justify-center align-center">
            <v-img width="12px" height="12px" position="center center" contain src="img/weather/SleepMode.webp" alt="night"/>
            <div>{{ weather['main'] ? weather['main']['feels_like'] : 0 }} °</div>
          </div>
        </v-card>
        <v-card class="rating-weather-text py-2 ml-1"
                color="var(--golden-1)" elevation="0"
                width="82px" height="35px">
          <div class="d-flex flex-row justify-center align-center">
            <v-img width="12px" height="12px" position="center center" contain src="img/weather/Wind.webp" alt="wind"/>
            <div>{{ weather['wind'] ? weather['wind']['speed'] : 0 }} м/с</div>
          </div>
        </v-card>
      </div>
    </div>
  </v-card>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import openWeatherAPI from "~/assets/scripts/openWeatherAPI";
@Component({})
export default class Weather extends Vue {
  weather: any = {}
  async mounted () {this.weather = await this.getWeather ()}
  async getWeather () {return await openWeatherAPI.getWeather()}
}
</script>

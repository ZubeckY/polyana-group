import axios from 'axios'
class OpenWeatherAPI {
  API_KEY = "af97b29b0ebce13fce8c899da674260a"; GEO_COORDINATES = {LAT: 43.685056, LON: 40.256059};
  API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${this.GEO_COORDINATES["LAT"]}&lon=${this.GEO_COORDINATES["LON"]}&lang=ru&units=metric&appid=${this.API_KEY}`
  async getWeather () {try {let result = await axios.get(this.API_URL); return result.data} catch (e) {return e}}
}
export default new OpenWeatherAPI ()

<template>
  <section class="hotelGroup">
    <v-lazy>
      <div class="hotelGroup-container">
        <div class="hotelGroup-head">
          <h3 class="hotelGroup-title section-title fontSize-xl--s text-uppercase">Группа отелей
            POLYANA GROUP на красной поляне
          </h3>
        </div>
        <div class="hotelGroup-body">
          <hotel-group-item v-for="(item, i) in hotelList"
                            :key="'hotel-'+i" :item="item"/>
        </div>
      </div>
    </v-lazy>
  </section>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import thousandSeparator from "~/assets/scripts/thousandSeparator";
import supaBase from "~/assets/scripts/supaBase";

@Component({
  methods: {thousandSeparator}
})
export default class HotelGroup extends Vue {
  hotels: number = 0
  // hotelList: any = []

  created() {
    this.$store.dispatch('getHotels')
    // .then(() => {
    //   this.hotelList = this.$store.state.hotels
    // })
    // .catch((e: any) => {
    //   console.log(e)
    // })
  }

  get hotelList() {
    return this.$store.state.hotels
  }

  // async created() {
  //   try {
  //     let {data, error} = await supaBase
  //       .from('hotels')
  //       .select('id, title, logohotel, imgshotel, travellineid, pricefrom, hotelrating, hotelreviews, hoteldescription, hoteltags')
  //       .order('id')
  //     this.hotelList = data
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
}
</script>

<style>
.hotelGroup {
  margin-top: 150px;
}

.hotelGroup-title {
  margin-bottom: 20px;
}

.hotelGroup-panel + .hotelGroup-panel {
  padding-top: 15px;
  margin-top: 15px;
  border-top: 1px solid var(--card-grey);
}

.hotelGroup-panel-head {
  display: flex;
  flex-direction: column;
}

.hotelGroup-panel-head-container {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}

.hotelGroup-panel-head-container::before {
  position: absolute;
  content: '';
  height: 100px;
}

.hotelGroup-panel-count {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 67px;
  height: 36px;
  font-size: 18px;
  color: transparent;
  border-radius: 85px;
  background-clip: text;
  text-transform: uppercase;
  border: .85px solid var(--text-golden-1);
  background-image: var(--gradiend-golden);
}

.hotelGroup-panel-title {
  font-size: 50px;
  font-weight: 400;
  color: transparent;
  background-clip: text;
  text-transform: uppercase;
  font-family: 'CharterC', sans-serif;
  background-image: var(--gradiend-golden);
}

.hotelGroup-panel-title.desktop {
  display: block;
  margin-left: 23px;
}

.hotelGroup-panel-title.mobile {
  display: none;
  margin-top: 15px;
}

.hotelGroup-panel-price {
  color: #B6B6B6;
  font-size: 30px;
  margin-left: auto;
  text-transform: uppercase;
}

.hotelGroup-panel-card {
  display: flex;
  cursor: pointer;
  width: 56px;
  height: 56px;
  margin-left: 70px;
  border-radius: 13px;
  align-items: center;
  justify-content: center;
  background: var(--gradiend-golden);
}

.hotelGroup-panel-card-svg {
  width: 34px;
  height: 34px;
  transform: rotate(0deg);
}

.hotelGroup-panel-body-container {
  display: flex;
}

.hotelGroup-panel-info-head {
  display: flex;
  width: 100%;
  max-width: 432px;
  align-items: center;
}

.hotelGroup-panel-info-logo {
  margin-right: 46px;
}

.hotelGroup-panel-info-group {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.hotelGroup-panel-info-title {
  color: black;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
}

.hotelGroup-panel-info-text {
  color: black;
  font-size: 12px;
  font-weight: 400;
  text-transform: lowercase;
}

.hotelGroup-panel-info-delimiter {
  width: 2.55px;
  height: 32.3px;
  margin: 0 25px;
  background: var(--gradiend-golden);
}

.hotelGroup-panel-info-body {
  color: black;
  width: 100%;
  margin-top: 13px;
  padding-right: 20px;
  margin-bottom: 0 !important;
  font-weight: 400;
  font-size: 13.6px;
  max-width: 650px;
  font-style: normal;
  line-height: normal;
  white-space: pre-line;
}

.hotelGroup-panel-info-footer {
  width: 100%;
  max-width: 650px;
  margin-top: 20px;
}

.hotelGroup-panel-info-footer.desktop {
  display: block;
}

.hotelGroup-panel-info-footer.mobile {
  display: none;
  margin-bottom: 20px;
}

.hotelGroup-panel-info-button {
  height: 34px;
  min-width: 0;
  min-height: 0;
  margin-right: 10px;
  margin-bottom: 8px;
  color: var(--dark-color);
  font-size: 12px !important;
  font-weight: 700 !important;
  background: var(--card-grey) !important;
}

.hotelGroup-panel-info-button:first-child {
  color: white !important;
  background: var(--gradiend-golden) !important;
}

.hotelGroup-panel-gallery {
  margin-top: 25px;
  margin-left: auto;
}

.hotelGroup-panel-gallery-group {
  max-width: 420px;
  margin-right: 8px;
  flex-direction: column;
}

.hotelGroup-panel-gallery-group-large {
  cursor: pointer;
  width: 100%;
  height: auto;
  max-width: 420px;
  max-height: 238px;
  border-radius: 10.2px;
}

.hotelGroup-panel-gallery-group-small {
  cursor: pointer;
  width: 49%;
  height: auto;
  max-width: 204px;
  max-height: 172px;
  border-radius: 10.2px;
}

.hotelGroup-panel-gallery-image {
  cursor: pointer;
  width: 100%;
  height: auto;
  max-width: 306px;
  max-height: 420px;
  object-fit: cover;
  border-radius: 10.2px;
}

.hotelGroup-panel-gallery-footer {
  display: none;
  margin-top: 8px;
}

.hotelGroup-panel-gallery-button {
  position: relative;
  width: 100%;
  height: 68px;
  cursor: pointer;
  border-radius: 12px;
  background: url("static/img/hotelGroup/background.webp") center no-repeat;
  background-size: 100% 100%;
}

.hotelGroup-panel-gallery-button-container {
  display: flex;
  width: inherit;
  height: inherit;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  align-items: center;
  border-radius: 12px;
  justify-content: center;
  color: var(--dark-color);
  background: rgba(217, 217, 217, 0.80);
}
</style>

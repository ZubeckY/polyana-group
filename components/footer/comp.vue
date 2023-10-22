<template>
  <footer class="footer mb-8">
    <v-card class="footer-card d-flex align-center rounded-xxl"
            elevation="0" color="var(--card-grey)">
      <div class="footer-container general-container">
        <div class="footer-inner d-flex">

          <div class="seeYouAtHotel">
            <div class="seeYouAtHotel-container">
              <!-- До встречи в наших отелях -->
              <h4 class="seeYouAtHotel-title footer-title pa-1 pb-3">До встречи в наших отелях</h4>
              <v-chip-group class="seeYouAtHotel-group mb-2" v-model="activeChip"
                            mandatory column active-class="golden-gradient white--text">
                <lazy-see-you-at-hotel-chip v-for="(item, i) in localMapping"
                                            :key="'see-you-at-hotel'+i" :value="i" :item="item"/>
              </v-chip-group>

              <div class="seeYouAtHotel-address d-flex">
                <!-- Контакты адрес -->
                <div class="seeYouAtHotel-address-container">
                  <h4 class="seeYouAtHotel-address-title footer-title my-3">Контакты</h4>
                  <div class="seeYouAtHotel-address-text"><h4 class="font-weight-medium text-uppercase">Адрес:</h4>
                    <div>{{ getAddressItem }}</div>
                  </div>
                  <div class="seeYouAtHotel-address-text text-uppercase mt-2"><a
                    :href="'tel:'+getTelBronItem">{{ getTelBronItem }}</a>
                    <span style="font-size: 12px">
                    Отдел бронирования
                    (09:00 - 21:00)</span>
                  </div>
                  <div class="seeYouAtHotel-address-text text-uppercase mt-2"><a
                    :href="'tel:'+getTelTelReceptionItem">{{ getTelTelReceptionItem }}</a>
                    <span style="color: #000; font-size: 12px; font-weight: 400;line-height: 126.9%;">
                    Рецепция (круглосуточно)</span>
                  </div>
                </div>

                <!-- Слайдер -->
                <div class="seeYouAtHotel-photo">
                  <v-carousel class="footer-carousel" style="height: 247px"
                              v-model="activeSlide" hide-delimiters>
                    <template v-slot:prev="{ on, attrs }">
                      <div v-bind="attrs" v-on="on">
                        <lazy-carousel-button-prev/>
                      </div>
                    </template>
                    <template v-slot:next="{ on, attrs }">
                      <div v-bind="attrs" v-on="on">
                        <lazy-carousel-button-next/>
                      </div>
                    </template>
                    <v-carousel-item class="footer-slide" style="position: relative"
                                     v-for="(item, j) in getImgSHotel" :key="'photo-'+j">
                      <lazy-footer-slide :item="item" :isKey="j" :hotel="localMapping[activeChip]"/>
                    </v-carousel-item>
                  </v-carousel>
                </div>

              </div>
            </div>
          </div>

          <div class="footer-service d-flex">
            <!-- помощь и информация, кнопки -->
            <div class="footer-helpInfo">
              <h5 class="footer-helpInfo-title footer-title pa-1">помощь и информация</h5>
              <h6 class="footer-helpInfo-subtitle pa-1 text-uppercase">О Комплексе</h6>
              <!-- Ссылки -->
              <lazy-footer-links/>
            </div>
            <v-spacer/>
            <!-- Забронировать -->
            <lazy-footer-booking/>
          </div>
        </div>
      </div>
    </v-card>
    <!-- <footer-mazur/> -->
  </footer>
</template>
<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';
import supaBase from "~/assets/scripts/supaBase";

@Component({})
export default class Comp extends Vue {
  activeChip: number = 0
  activeSlide: number = 0
  localMapping: any = []

  async created() {
    try {
      let {data, error} = await supaBase
        .from('hotels')
        .select('')
        .order('id')
      this.localMapping = data
      this.getCurrentHotel()
    } catch (e) {
      console.log(e)
    }
  }

  getCurrentHotel() {
    let {hotel_id}: any = this.$router.currentRoute.query
    if (!hotel_id) return

    let restId: any = {
      32513: 0,
      22866: 1,
      23660: 2,
    }

    return this.activeChip = restId[hotel_id]
  }

  @Watch('activeChip')
  changeController() {
    this.emptyActiveSlide()
  };

  get getAddressItem() {
    return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip]['adress'] : ''
  }

  get getTelBronItem() {
    return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip]['telbron'] : ''
  }

  get getTelTelReceptionItem() {
    return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip]['telreception'] : ''
  }

  get getImgSHotel() {
    return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip]['imgshotel'] : []
  }

  emptyActiveSlide() {
    return this.activeSlide = -1
  };
}
</script>

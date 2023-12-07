<template>
  <footer class="footer">
    <v-lazy>
      <div>
        <div class="footer-card d-flex align-center rounded-xxl">
          <div class="footer-container general-container">
            <div class="footer-inner d-flex">

              <div class="seeYouAtHotel">
                <div class="seeYouAtHotel-container">
                  <!-- До встречи в наших отелях -->
                  <h4 class="seeYouAtHotel-title footer-title pa-1 pb-3">До встречи в наших отелях</h4>
                  <v-chip-group class="seeYouAtHotel-group mb-2" v-model="activeChip"
                                mandatory column active-class="golden-gradient white--text">
                    <see-you-at-hotel-chip v-for="(item, i) in localMapping"
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
                            <carousel-button-prev/>
                          </div>
                        </template>
                        <template v-slot:next="{ on, attrs }">
                          <div v-bind="attrs" v-on="on">
                            <carousel-button-next/>
                          </div>
                        </template>
                        <v-carousel-item class="footer-slide" style="position: relative"
                                         v-for="(item, j) in getImgSHotel" :key="'photo-'+j">
                          <footer-slide :item="item" :isKey="j" :hotel="localMapping[activeChip]"/>
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
                  <footer-links/>
                </div>
                <v-spacer/>
                <!-- Забронировать -->
                <footer-booking/>
              </div>
            </div>
          </div>
        </div>
        <footer-mazur/>
      </div>
    </v-lazy>
  </footer>
</template>
<script>
import supaBase from "~/assets/scripts/supaBase";

export default {
  name: "FooterComp",
  data: () => ({
    activeChip: 0,
    activeSlide: 0,
    localMapping: [],
  }),

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
  },

  watch: {
    activeChip: 'emptyActiveSlide'
  },

  methods: {
    emptyActiveSlide() {
      return this.activeSlide = -1
    },
    getCurrentHotel() {
      let {hotel_id} = this.$router.currentRoute.query
      if (!hotel_id) return

      let restId = {
        32513: 0,
        22866: 1,
        23660: 2,
      }
      return this.activeChip = restId[hotel_id]
    }
  },

  computed: {
    getAddressItem() {
      return this.localMapping.length ? this.localMapping[this.activeChip]['adress'] : ''
    },
    getTelBronItem() {
      return this.localMapping.length ? this.localMapping[this.activeChip]['telbron'] : ''
    },
    getTelTelReceptionItem() {
      return this.localMapping.length ? this.localMapping[this.activeChip]['telreception'] : ''
    },
    getImgSHotel() {
      return this.localMapping.length ? this.localMapping[this.activeChip]['imgshotel'] : []
    }
  }
}
</script>

<template>
  <footer class="footer mb-8">
    <v-card class="footer-card d-flex align-center rounded-xxl"
            elevation="0" color="var(--card-grey)">
      <div class="footer-container general-container">
        <div class="footer-inner d-flex">

          <div class="footer-seeYouAtHotel">
            <div class="footer-seeYouAtHotel-container">
              <!-- До встречи в наших отелях -->
              <div class="footer-seeYouAtHotel-title footer-title pa-1 pb-3">До встречи в наших отелях</div>
              <v-chip-group class="footer-seeYouAtHotel-group mb-2" v-model="activeChip"
                            mandatory column active-class="golden-gradient white--text">
                <footer-see-you-at-hotel-chip v-for="(item, i) in localMapping"
                                              :key="'see-you-at-hotel'+i" :value="i" :item="item"/>
              </v-chip-group>

              <div class="footer-seeYouAtHotel-address d-flex">
                <!-- Контакты адрес -->
                <div class="footer-seeYouAtHotel-address-container">
                  <div class="footer-seeYouAtHotel-address-title footer-title my-3">Контакты</div>
                  <div class="footer-seeYouAtHotel-address-text"><span class="text-uppercase">Адрес:</span>
                    <div>{{ getAddressItem }}</div>
                  </div>
                  <div class="footer-seeYouAtHotel-address-text text-uppercase mt-2"><a :href="'tel:'+getTelBronItem">{{getTelBronItem}}</a>
                    <span style="font-size: 12px">
                    Отдел бронирования
                    (09:00 - 21:00)</span>
                  </div>
                  <div class="footer-seeYouAtHotel-address-text text-uppercase mt-2"><a
                      :href="'tel:'+getTelTelReceptionItem" >{{getTelTelReceptionItem}}</a>
                    <span style="color: #000; font-size: 12px; font-weight: 400;line-height: 126.9%;">
                    Рецепция (круглосуточно)</span>
                  </div>
                </div>

                <!-- Слайдер -->
                <div class="footer-seeYouAtHotel-photo">
                  <v-carousel class="footer-carousel" style="height: 247px"
                              v-model="activeSlide" hide-delimiters>
                    <template v-slot:prev="{ on, attrs }">
                      <v-btn v-bind="attrs" v-on="on"
                             min-height="0" min-width="0"
                             width="34px" height="34px"
                             elevation="0" rounded
                             color="#ffffffb8" title="Назад">
                        <chevron-left/>
                      </v-btn>
                    </template>
                    <template v-slot:next="{ on, attrs }">
                      <v-btn v-bind="attrs" v-on="on"
                             min-height="0" min-width="0"
                             width="34px" height="34px"
                             elevation="0" rounded
                             color="#ffffffb8" title="Вперёд">
                        <chevron-right/>
                      </v-btn>
                    </template>
                    <v-carousel-item class="footer-slide" style="position: relative"
                                     v-for="(item, j) in getImgSHotel" :key="'photo-'+j" >
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
              <div class="footer-helpInfo-title footer-title pa-1">помощь и информация</div>
              <div class="footer-helpInfo-subtitle pa-1 text-uppercase">О Комплексе</div>
              <!-- Ссылки -->
              <footer-links/>
            </div>
            <v-spacer/>
            <!-- Забронировать -->
            <lazy-footer-booking/>
          </div>
        </div>
      </div>
    </v-card>

<!--    <div class="footer-mazur">-->
<!--      <div class="footer-mazur-container general-container d-flex align-end justify-space-between">-->
<!--        <div class="footer-mazur-polyana text-uppercase">Ⓒ polyana group | 2023</div>-->
<!--        <div class="footer-mazur-text text-right text-uppercase">-->
<!--          <div> РАЗРАБОТАНО <a class="text-decoration-none"-->
<!--                               href="https://mazurgroup.ru/"-->
<!--                               target="_blank">mazurgroup.ru</a>-->
<!--          </div>-->
<!--          <div>Политика конфиденциальности</div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

  </footer>
</template>
<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';
import supaBase from "~/assets/scripts/supaBase";

@Component({})
export default class FooterComp extends Vue {
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
    } catch (e) {
      console.log(e)
    }
  }

  @Watch('activeChip')
  changeController() {
    this.emptyActiveSlide()
  };

  get getAddressItem () {
    return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip]['adress'] : ''
  }

  get getTelBronItem () {
    return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip]['telbron'] : ''
  }

  get getTelTelReceptionItem () {
    return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip]['telreception'] : ''
  }

  get getImgSHotel () {
    return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip]['imgshotel'] : []
  }

  emptyActiveSlide() {
    return this.activeSlide = -1
  };
}
</script>

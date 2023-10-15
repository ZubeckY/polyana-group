<template>
  <div>
    <header class="header header-promo">
      <div class="header-container conditions" :style="slide">
        <div class="header-container-inner">
          <header-nav-polyana/>
          <div class="header-promo-body">
            <div class="header-promo-body-container general-container">
              <breadcrumbs-button class="header-promo-back"/>
              <div class="header-promo-title mt-2">Контакты</div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="contacts d-flex justify-space-between mt-14">
      <div class="contacts-map">
        <div v-html="getYandexMap"></div>
        <div class="contacts-btn-group">
          <div class="contacts-btn-group-container">
            <v-btn class="contacts-btn golden-gradient shimmer-effect white--text rounded-xl"
                   width="296px" height="40px" min-width="0" elevation="0" target="_blank" :href="getYandexRoute">
              <div class="shimmer"></div>
              <div class="text">ПОСМОТРЕТЬ МАРШРУТ</div>
            </v-btn>

            <v-btn class="contacts-btn golden-gradient shimmer-effect white--text rounded-xl"
                   width="296px" height="40px" min-width="0" elevation="0" href="/booking/?hotel_id=32513" :href="linkToBooking">
              <div class="shimmer"></div>
              <div class="text">Забронировать номер</div>
            </v-btn>
          </div>
        </div>
      </div>

      <div class="seeYouAtHotel contacts-comp">
        <div class="seeYouAtHotel-container">
          <!-- До встречи в наших отелях -->
          <div class="seeYouAtHotel-title footer-title pa-1 pb-3">До встречи в наших отелях</div>
          <v-chip-group class="seeYouAtHotel-group mb-2" v-model="activeChip"
                        mandatory column active-class="golden-gradient white--text">
            <footer-see-you-at-hotel-chip v-for="(item, i) in localMapping"
                                          :key="'see-you-at-hotel'+i" :value="i" :item="item"/>
          </v-chip-group>

          <div class="seeYouAtHotel-address d-flex">
            <!-- Контакты адрес -->
            <div class="seeYouAtHotel-address-container">
              <div class="seeYouAtHotel-address-title footer-title my-3">Контакты</div>
              <div class="seeYouAtHotel-address-text"><span class="text-uppercase">Адрес:</span>
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
                  <v-btn v-bind="attrs" v-on="on" min-height="0" min-width="0"
                         width="34px" height="34px" elevation="0"
                         color="#ffffffb8" title="Назад" rounded>
                    <chevron-left/>
                  </v-btn>
                </template>
                <template v-slot:next="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" min-height="0" min-width="0"
                         width="34px" height="34px" elevation="0"
                         color="#ffffffb8" title="Вперёд" rounded>
                    <chevron-right/>
                  </v-btn>
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
    </div>

    <div class="requisites">
      <div class="requisites-container">
        <div class="requisites-title mb-8 mt-10">
          РЕКВИЗИТЫ
        </div>
        <div class="d-flex flex-wrap justify-space-between">
          <div style="width: 352px; height: 66px; color: #000; font-size: 13.6px; font-weight: 500; line-height: 20.825px;">
            {{ getYandexNameBusiness }}
          </div>
          <div style="width: 773px; height: 66px; color: #000; font-size: 13.6px; font-weight: 500; line-height: 20.825px;">
            {{ getYandexBankDetails }}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';
import supaBase from "~/assets/scripts/supaBase";

@Component({
  head: {
    title: 'Контакты'
  },
})
export default class Contacts extends Vue {
  activeChip: number = 0
  activeSlide: number = 0
  slide: string = `background-image: url("/img/promo/background.webp")`
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

  get getYandexMap() {
    return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip].yandexmap : ''
  }

  get getYandexRoute() {
    return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip].yandexroute : ''
  }

  get getYandexNameBusiness() {
    return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip].namebusiness : ''
  }

  get getYandexBankDetails() {
    return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip].bankdetails : ''
  }

  get getAddressItem() {
    return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip]['adress'] : ''
  }

  get getTelBronItem() {
    return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip]['telbron'] : ''
  }

  get getTelTelReceptionItem() {
    return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip]['telreception'] : ''
  }

  get linkToBooking() {
    return this.localMapping[this.activeChip] ? '/booking/?hotel_id=' + this.localMapping[this.activeChip].travellineid : '/booking/?hotel_id=32513'
  }

  get getImgSHotel() {
    return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip]['imgshotel'] : []
  }

  emptyActiveSlide() {
    return this.activeSlide = -1
  };
}
</script>

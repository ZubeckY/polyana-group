<template>
  <section class="hotelGroup">
    <div class="hotelGroup-container">
      <div class="hotelGroup-head">
        <h3 class="hotelGroup-title section-title fontSize-xl--s text-uppercase">Группа отелей
          POLYANA GROUP на красной поляне
        </h3>
      </div>
      <div class="hotelGroup-body">
        <v-expansion-panels class="hotelGroup-accordion" v-model="hotels" accordion>
          <v-expansion-panel class="hotelGroup-accordion-panel" v-for="(item, i) in hotelList"
                             :key="'hotel-'+i" :id="'hotel'+item.travellineid"
                             @click="$router.push('#hotel'+item.travellineid)">
            <v-expansion-panel-header class="hotelGroup-accordion-head">
              <div class="hotelGroup-accordion-head-container">
                <div class="hotelGroup-accordion-count">{{ getItemID(item) }}</div>
                <h4 class="hotelGroup-accordion-title desktop">{{ item.title }}</h4>
                <div class="hotelGroup-accordion-price">от {{ getItemPrice(item) }} руб.</div>
                <div class="hotelGroup-accordion-card">
                  <svg class="hotelGroup-accordion-card-svg" fill="#ffffff" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <g data-name="Layer 2">
                        <g data-name="diagonal-arrow-right-up">
                          <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                          <path
                            d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <h4 class="hotelGroup-accordion-title mobile">{{ item.title }}</h4>
              <template v-slot:actions>
                <div></div>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="hotelGroup-accordion-body">
              <div class="hotelGroup-accordion-body-container">

                <div class="hotelGroup-accordion-info">
                  <div class="hotelGroup-accordion-info-container">
                    <div class="hotelGroup-accordion-info-head">

                      <div class="hotelGroup-accordion-info-logo">
                        <v-img :lazy-src="item.logohotel" :src="item.logohotel" alt="#" style="filter: invert(1);"/>
                      </div>

                      <div class="hotelGroup-accordion-info-group">
                        <div class="hotelGroup-accordion-info-title">{{ item.hotelrating }}</div>
                        <div class="hotelGroup-accordion-info-text">рейтинг отеля</div>
                      </div>

                      <div class="hotelGroup-accordion-info-delimiter"></div>

                      <div class="hotelGroup-accordion-info-group">
                        <div class="hotelGroup-accordion-info-title">{{ item.hotelreviews }}</div>
                        <div class="hotelGroup-accordion-info-text">отзывов</div>
                      </div>
                    </div>
                    <p class="hotelGroup-accordion-info-body">{{ item.hoteldescription }}</p>
                    <div class="hotelGroup-accordion-info-footer desktop">
                      <v-btn v-for="(button, j) in item.hoteltags"
                             class="hotelGroup-accordion-info-button"
                             :key="'linkToInsidePage'+j" elevation="0"
                             :href="getLinkToHref(button, item)">{{ button.title }}
                      </v-btn>
                    </div>
                  </div>
                </div>

                <div class="hotelGroup-accordion-gallery" @click="dialog = true">
                  <div class="hotelGroup-accordion-gallery-container d-flex">
                    <div class="hotelGroup-accordion-gallery-group d-flex">
                      <nuxt-img :src="item.imgshotel[0]"
                                sizes="xs:200px md:500px lg:1024" alt="#"
                                loading="lazy" quality="80" :placeholder="[50]"
                                class="hotelGroup-accordion-gallery-group-large mb-2"/>
                      <div class="d-flex flex-row">
                        <nuxt-img :src="item.imgshotel[1]"
                                  sizes="xs:200px md:500px lg:1024" alt="#"
                                  loading="lazy" quality="80" :placeholder="[50]"
                                  class="hotelGroup-accordion-gallery-group-small mr-2"/>
                        <nuxt-img :src="item.imgshotel[2]"
                                  sizes="xs:200px md:500px lg:1024" alt="#"
                                  loading="lazy" quality="80" :placeholder="[50]"
                                  class="hotelGroup-accordion-gallery-group-small"/>
                      </div>
                    </div>
                    <nuxt-img :src="item.imgshotel[3]"
                              sizes="xs:200px md:500px lg:1024" alt="#"
                              loading="lazy" quality="80" :placeholder="[50]"
                              class="hotelGroup-accordion-gallery-image"/>

                    <div class="hotelGroup-accordion-gallery-footer">
                      <div class="hotelGroup-accordion-gallery-button">
                        <div class="hotelGroup-accordion-gallery-button-container">
                          Смотреть ещё +35 фото
                        </div>
                      </div>
                      <div class="hotelGroup-accordion-info-footer mobile" @click.stop>
                        <v-btn v-for="(button, j) in item.hoteltags"
                               class="hotelGroup-accordion-info-button"
                               :key="'linkToInsidePage'+j" elevation="0"
                               :href="getLinkToHref(button, item)">{{ button.title }}
                        </v-btn>
                      </div>
                    </div>
                  </div>
                  <gallery-dialog @changeDialog="changeDialog" :dialog="dialog" :data="item.imgshotel"/>
                </div>

              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
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
  hotelList: any = []
  dialog: boolean = false

  changeDialog (dialog: boolean) {
    this.dialog = dialog
  }

  async created() {
    try {
      let {data, error} = await supaBase
        .from('hotels')
        .select('id, title, logohotel, imgshotel, travellineid, pricefrom, hotelrating, hotelreviews, hoteldescription, hoteltags')
        .order('id')
      this.hotelList = data
    } catch (e) {
      console.log(e)
    }
  }

  getItemID(item: any) {
    return item ? '00' + item.id : '000'
  }

  getItemPrice(item: any) {
    return item ? thousandSeparator(item['pricefrom']) : 0
  }

  getLinkToHref(button: any, item: any) {
    return button.link + item.travellineid
  }

}
</script>

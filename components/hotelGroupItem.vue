<template>
  <article class="hotelGroup-panel">
    <div class="hotelGroup-panel-container">
      <a class="hotelGroup-panel-head text-decoration-none" :href="'/hotel?hotel_id='+item.travellineid">
        <div class="hotelGroup-panel-head-container" :id="'hotel-'+item.travellineid">
          <div class="hotelGroup-panel-count">{{ getItemID(item) }}</div>
          <h4 class="hotelGroup-panel-title desktop">{{ item.title }}</h4>
          <div class="hotelGroup-panel-price">от {{ getItemPrice(item) }} руб.</div>
          <div class="hotelGroup-panel-card">
            <svg class="hotelGroup-panel-card-svg" fill="#ffffff" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g data-name="Layer 2">
                  <g data-name="diagonal-arrow-right-up">
                    <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                    <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <h4 class="hotelGroup-panel-title mobile">{{ item.title }}</h4>
      </a>
      <div class="hotelGroup-panel-body">
        <div class="hotelGroup-panel-body-container">

          <div class="hotelGroup-panel-info">
            <div class="hotelGroup-panel-info-container">
              <div class="hotelGroup-panel-info-head">

                <div class="hotelGroup-panel-info-logo">
                  <v-img :lazy-src="item.logohotel" :src="item.logohotel" alt="логотип отеля"
                         style="filter: invert(1);"/>
                </div>

                <div class="hotelGroup-panel-info-group">
                  <div class="hotelGroup-panel-info-title">{{ item.hotelrating }}</div>
                  <div class="hotelGroup-panel-info-text">рейтинг отеля</div>
                </div>

                <div class="hotelGroup-panel-info-delimiter"></div>

                <div class="hotelGroup-panel-info-group">
                  <div class="hotelGroup-panel-info-title">{{ item.hotelreviews }}</div>
                  <div class="hotelGroup-panel-info-text">отзывов</div>
                </div>
              </div>
              <p class="hotelGroup-panel-info-body" v-html="item.hoteldescription"></p>
              <div class="hotelGroup-panel-info-footer desktop">
                <v-btn v-for="(button, j) in item.hoteltags" class="hotelGroup-panel-info-button"
                       :key="'linkToInsidePage'+j" elevation="0" :href="button.link">
                  {{ button.title }}
                </v-btn>
              </div>
            </div>
          </div>

          <div class="hotelGroup-panel-gallery" @click="dialog = true">
            <div class="hotelGroup-panel-gallery-container d-flex">
              <div class="hotelGroup-panel-gallery-group d-flex">
                <nuxt-img :src="item ? item.imgshotel[0] : 'https://placehold.co/900x600/dddddd/dddddd'"
                          sizes="xs:200px md:500px lg:1024" alt="изображение отеля"
                          loading="lazy" quality="80" :placeholder="[50]"
                          class="hotelGroup-panel-gallery-group-large mb-2"/>
                <div class="d-flex flex-row">
                  <nuxt-img :src="item ? item.imgshotel[1] : 'https://placehold.co/900x600/dddddd/dddddd'"
                            sizes="xs:200px md:500px lg:1024" alt="изображение отеля"
                            loading="lazy" quality="80" :placeholder="[50]"
                            class="hotelGroup-panel-gallery-group-small mr-2"/>
                  <nuxt-img :src="item ? item.imgshotel[2] : 'https://placehold.co/900x600/dddddd/dddddd'"
                            sizes="xs:200px md:500px lg:1024" alt="изображение отеля"
                            loading="lazy" quality="80" :placeholder="[50]"
                            class="hotelGroup-panel-gallery-group-small"/>
                </div>
              </div>
              <nuxt-img :src="item ? item.imgshotel[3] : 'https://placehold.co/900x600/dddddd/dddddd'"
                        sizes="xs:200px md:500px lg:1024" alt="изображение отеля"
                        loading="lazy" quality="80" :placeholder="[50]"
                        class="hotelGroup-panel-gallery-image"/>

              <div class="hotelGroup-panel-gallery-footer">
                <div class="hotelGroup-panel-gallery-button">
                  <div class="hotelGroup-panel-gallery-button-container">
                    Смотреть ещё +35 фото
                  </div>
                </div>
                <div class="hotelGroup-panel-info-footer mobile" @click.stop>
                  <v-btn v-for="(button, j) in item.hoteltags"
                         class="hotelGroup-panel-info-button"
                         :key="'linkToInsidePage'+j" elevation="0"
                         :href="button.link">{{ button.title }}
                  </v-btn>
                </div>
              </div>
            </div>
            <gallery-dialog @changeDialog="changeDialog" :dialog="dialog" :data="item.imgshotel"/>
          </div>

        </div>
      </div>
    </div>
  </article>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import thousandSeparator from "~/assets/scripts/thousandSeparator";

@Component({})
export default class HotelGroupItem extends Vue {
  @Prop() item: any
  dialog: boolean = false

  changeDialog(dialog: boolean) {
    this.dialog = dialog
  }

  getItemID(item: any) {
    return item ? '00' + item.id : '000'
  }

  getItemPrice(item: any) {
    return item ? thousandSeparator(item['pricefrom']) : 0
  }
}
</script>

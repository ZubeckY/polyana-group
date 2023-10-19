<template>
  <div>
    <header class="header header-inside">
      <div class="header-inside-container">
        <div class="header-inside-container-inner">
          <header-nav-inside/>
        </div>
      </div>
    </header>

    <div class="breadcrumbs">
      <div class="breadcrumbs-container">
        <breadcrumbs-button/>
        <breadcrumbs-content/>
      </div>
    </div>

    <section class="restInPolyana">
      <div class="restInPolyana-container">
        <div class="restInPolyana-head">
          <h1 class="restInPolyana-title" v-html="hotel.offer"></h1>
        </div>

        <div class="restInPolyana-body">
          <div class="restInPolyana-body-container" @click="dialog = true">
            <div class="restInPolyana-pictures-large grid-item">
              <div @click.stop>
                <watch-dialog :link="hotel.youtube">
                  <watch-inside/>
                </watch-dialog>
              </div>
              <div class="restInPolyana-pictures-large-img">
                <img sizes="xs:200px md:500px lg:1024" loading="lazy" :src="getImageByIndex(0)" alt="big-pic"/>
              </div>
              <div class="restInPolyana-pictures-large-body" @click.stop>
                <header-booking-ultima/>
              </div>
            </div>
            <div class="restInPolyana-pictures-small-img grid-item" v-if="getImageByIndex(1)">
              <img sizes="xs:200px md:500px lg:1024" loading="lazy" :src="getImageByIndex(1)" alt="pic-1"/>
            </div>
            <div class="restInPolyana-pictures-small-img grid-item" v-if="getImageByIndex(2)">
              <img sizes="xs:200px md:500px lg:1024" loading="lazy" :src="getImageByIndex(2)" alt="pic-3"/>
            </div>
            <div class="restInPolyana-pictures-small-img grid-item" v-if="getImageByIndex(3)">
              <img sizes="xs:200px md:500px lg:1024" loading="lazy" :src="getImageByIndex(3)" alt="pic-2"/>
            </div>
            <div class="restInPolyana-pictures-small-img grid-item" v-if="getImageByIndex(4)">
              <img sizes="xs:200px md:500px lg:1024" loading="lazy" :src="getImageByIndex(4)" alt="pic-4"/>
              <div class="restInPolyana-pictures-small-img-more">
                +{{ data ? data.length : 99 }} фото
              </div>
            </div>
            <gallery-dialog @changeDialog="changeDialog" :dialog="dialog" :data="data"/>
          </div>
        </div>
      </div>
    </section>

    <section class="luxHoliday" id="services">
      <div class="luxHoliday-container flexbox-wrapper">

        <div class="luxHoliday-head">
          <div class="luxHoliday-head-container">
            <h3 class="luxHoliday-title section-title fontSize-xl--s text-uppercase">Роскошный
              горный отдых
              с комфортом!
            </h3>
            <div class="luxHoliday-text">
              <p v-html="hotel.description"></p>

              <div class="d-flex mt-4">
                <b>Спрашивайте,
                  отвечаем онлайн</b>
                <div class="d-flex ml-4">
                  <contact-button-whatsapp class="mr-2"/>
                  <contact-button-telegram/>
                </div>
              </div>
            </div>
            <v-btn class="luxHoliday-btn shimmer-effect rounded-xxl mx-auto" href="/booking/?hotel_id=32513"
                   color="golden-gradient" elevation="0" width="254px" height="47px" dark>
              <div class="shimmer"></div>
              <div class="text">Забронировать</div>
            </v-btn>
          </div>
        </div>

        <div class="luxHoliday-body">
          <div class="luxHoliday-body-container">
            <div class="luxHoliday-slide slider"
                 v-for="(slider, i) in sliders"
                 :key="'luxHoliday-slide'+i">

              <v-carousel class="luxHoliday-slide"
                          style="height: 391px" hide-delimiters>

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
                <v-carousel-item v-for="(image, j) in slider.imgs" :href="'/services/'+slider.id"
                                 class="luxHoliday-slide" :key="'lux-slide-'+j">
                  <img class="luxHoliday-slide-image" :src="image" alt="#"/>
                </v-carousel-item>
              </v-carousel>

              <a class="luxHoliday-slide-body" :href="'/services/'+slider.id">
                <img :class="'luxHoliday-slide-mask ' + slider.classelement" :src="slider.titlesvg"/>
                <h4 class="luxHoliday-slide-title">{{ slider.title }}</h4>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- TL Booking form script -->
    <section class="tl-section" id="tl-section">
      <div class="tl-section-container">
        <div id="tl-booking-form">&nbsp;</div>
      </div>
    </section>

    <!-- Специальные предложения -->
    <special-offers id="promo"/>

    <!-- Эксклюзивная скидка за звонок -->
    <exclusive/>

    <!-- Наши гости делятся своими впечатлениями об отдыхе -->
    <reviews :hotelId="hotelId" id="reviews"/>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import supaBase from "~/assets/scripts/supaBase";

@Component({
  head: {
    title: 'Отель'
  }
})
export default class Inside extends Vue {
  data: any = []
  hotel: any = {}
  hotelId: any = this.$router.currentRoute.query.hotel_id
  sliders: any = []
  type: string = 'desktop'
  dialog: boolean = false

  async created() {
    await this.getHotelInfo()
    await this.getHotelSliders()
  }

  mounted() {
    let {hotel_id} = this.$router.currentRoute.query
    if (!hotel_id) {
      window.location.href = '/hotel?hotel_id=32513'
    }

    window.addEventListener('DOMContentLoaded', function () {
      let hotel_id = "hotel_id";
      let regex = new RegExp(/hotel_id=\d+/g);
      let getParams = window.location.search;
      let params_str = hotel_id + "=" + this.value;
      let path = "";
      if (getParams.indexOf(hotel_id) != -1) {
        path = getParams.replace(regex, params_str);
      } else {
        if (getParams == "") {
          path = getParams + '?' + params_str;
        } else {
          path = getParams + '&' + params_str;
        }
      }
      window.history.pushState(false, false, path);
    });
  }

  changeDialog(dialog: boolean) {
    this.dialog = dialog
  }

  async getHotelSliders() {
    try {
      let {hotel_id} = this.$router.currentRoute.query
      let {data, error} = await supaBase
        .from('services')
        .select('')
        .eq('travellineid', hotel_id)
        .order('id')

      this.sliders = data
    } catch (e) {
      console.log(e)
    }
  }

  getImageByIndex(i: number): string {
    return this.data.length > 1 ? this.data[i] : 'https://placehold.co/900x600'
  }

  async getHotelInfo() {
    try {
      let {hotel_id} = this.$router.currentRoute.query
      let {data, error} = await supaBase
        .from('hotels')
        .select('id, offer, description, youtube, travellineid, imgshotel')
        .eq('travellineid', hotel_id)
        .order('id')
      const DATA: any = data
      this.hotel = DATA[0]

      this.data = DATA[0].imgshotel
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

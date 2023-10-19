<template>
  <nav class="header-nav">
    <div class="header-nav-container ultima d-flex align-center flex-row">
      <div class="header-nav-container-inner d-flex align-center w-100">
        <header-nav-menu/>
        <hotels-menu>
          <div class="d-flex align-center">
            <div class="header-nav__logo ml-2">
              <v-img :src="currentLogo" :lazy-src="currentLogo" alt="Загрузка..."/>
            </div>
          </div>
        </hotels-menu>

        <div class="header-nav__link mx-auto" v-for="(item, i) in links" :key="'f_link'+i">

          <div v-if="item.title === 'Отели'">
            <hotels-menu>
              <div class="d-flex align-center">
                <link-component :item="{title: 'Отели'}"/>
                <chevron-down class="ml-1" :dark="true"/>
              </div>
            </hotels-menu>
          </div>

          <div v-else-if="item.title === 'Ресторан'">
            <link-component v-if="isHotelPage" :item="{title: 'Ресторан', link: getCurrentLink('restaurant')}"/>
            <hotels-menu v-else mode="restaurant">
              <div class="d-flex align-center">
                <link-component :item="{title: 'Ресторан'}"/>
                <chevron-down class="ml-1" :dark="true"/>
              </div>
            </hotels-menu>
          </div>

          <div v-else-if="item.title === 'Номера'">
            <link-component v-if="isHotelPage" :item="{title: 'Номера', link: getCurrentLink('booking')}"/>
            <link-component :item="item" v-else/>
          </div>

          <div v-else-if="item.title === 'Услуги'">
            <link-component v-if="isHotelPage" :item="{title: 'Услуги', link: getCurrentLink('services')}"/>
            <link-component :item="item" v-else/>
          </div>

          <div v-else-if="item.title === 'Акции'">
            <link-component v-if="isHotelPage" :item="{title: 'Акции', link: getCurrentLink('promo')}"/>
            <link-component :item="item" v-else/>
          </div>

          <div v-else-if="item.title === 'Отзывы'">
            <link-component v-if="isHotelPage" :item="{title: 'Отзывы', link: getCurrentLink('reviews')}"/>
            <link-component :item="item" v-else/>
          </div>

          <div v-else-if="item.title === 'Контакты'">
            <link-component v-if="isHotelPage" :item="{title: 'Контакты', link: getCurrentLink('contacts')}"/>
            <link-component :item="item" v-else/>
          </div>

          <link-component :item="item" v-else/>
        </div>
      </div>

      <contact-button-whatsapp class="header-nav__link_social"/>
      <contact-button-telegram class="header-nav__link_social mx-3"/>

      <div class="header-nav__reservation ml-auto">
        <div class="header-nav__reservation-container d-flex flex-column">
          <v-btn class="header-nav__reservation-phone-ultima font-weight-bold"
                 :href="'tel:'+currentPhone" elevation="0" dark>{{ currentPhone }}
          </v-btn>
        </div>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';
import supaBase from "~/assets/scripts/supaBase";

@Component({})
export default class Ultima extends Vue {
  currentLogo: any = ''
  currentPhone: string = 'Загрузка...'
  isHotelPage: boolean = true
  hotelId: any = this.$router.currentRoute.query.hotel_id

  async created() {
    try {
      let {path, query} = this.$router.currentRoute
      let {hotel_id} = query
      this.isHotelPage = !!path.includes('/hotel')

      this.currentLogo = ''
      this.currentPhone = 'Загрузка...'

      if (path.includes('/booking') || path.includes('/contacts')) {
        this.currentLogo = 'https://ztgxmhicyraofyrgiitp.supabase.co/storage/v1/object/public/publicimg/logo/logo.svg?t=2023-10-14T11%3A13%3A29.296Z'
        this.currentPhone = '+7 989 009 55 77'
      } else {
        let {data, error} = await supaBase
          .from('hotels')
          .select('id, logohotel, travellineid, telbron')
          .eq('travellineid', hotel_id)

        let currentData: any = data
        this.currentLogo = '' + currentData[0]['logohotel']
        this.currentPhone = currentData[0]['telbron']
      }
    } catch (e) {
      console.log(e)
    }
  }

  links: any = [
    {
      title: 'Главная',
      link: '/'
    },
    {
      title: 'Отели',
    },
    {
      title: 'Номера',
      link: '/booking'
    },
    {
      title: 'Ресторан',
      link: '/restaurant'
    },
    {
      title: 'Услуги',
      link: '/services'
    },
    {
      title: 'Акции',
      link: '/promo'
    },
    {
      title: 'Отзывы',
      link: '/reviews'
    },
    {
      title: 'Контакты',
      link: '/contacts'
    },
  ]


  getCurrentLink(to: string) {
    let {hotel_id}: any = this.$router.currentRoute.query
    let restId: any = {
      32513: 3,
      22866: 10,
      23660: 14,
    }

    switch (to) {
      case 'booking':
        return this.isHotelPage ? '#tl-section' : '/booking'
      case 'restaurant':
        return this.isHotelPage ? '/services/' + restId[hotel_id] : ''
      case 'services':
        return this.isHotelPage ? '#services' : '/services'
      case 'promo':
        return this.isHotelPage ? '#promo' : '/promo'
      case 'reviews':
        return this.isHotelPage ? '#reviews' : '/reviews'
      case 'contacts':
        return this.isHotelPage ? '/contacts?hotel_id=' + hotel_id : '/contacts'
    }
  }
}
</script>

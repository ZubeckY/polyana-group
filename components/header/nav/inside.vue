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
          <hotels-menu v-if="item.title === 'Ресторан'" mode="restaurant">
            <div class="d-flex align-center">
              <link-component :item="{title: 'Ресторан'}"/>
              <chevron-down class="ml-1" :dark="true"/>
            </div>
          </hotels-menu>

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

  async created() {
    try {
      let {path, query} = this.$router.currentRoute
      let {hotel_id} = query


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
}
</script>

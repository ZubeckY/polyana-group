<template>
  <div>
    <header class="header header-inside">
      <div class="header-inside-container">
        <div class="header-inside-container-inner">
          <header-nav-ultima/>
        </div>
      </div>
    </header>

    <section class="restInPolyana">
      <div class="restInPolyana-container">

        <div class="restInPolyana-head">
          <div class="restInPolyana-title">Отдых на Красной Поляне в <span class="restInPolyana-title-chip golden-gradient">отеле 5*</span> с кинотеатром и панорамным видом на
            горы — идеальный способ <span class="restInPolyana-title-chip golden-gradient">расслабиться и насладиться</span> природой!
          </div>
        </div>

        <div class="restInPolyana-body">
          <div class="restInPolyana-body-container d-flex flex-row">
            <div class="restInPolyana-pictures-large">
              <watch class="ultima"/>
              <nuxt-img class="restInPolyana-pictures-large-img"
                        loading="lazy" quality="80" :placeholder="[50]"
                        src="img/images/big-image.webp" alt="big-pic"/>
              <header-booking-ultima/>
            </div>
            <div class="restInPolyana-pictures-small d-flex flex-row flex-wrap">
              <nuxt-img class="restInPolyana-pictures-small-img"
                        loading="lazy" quality="80" :placeholder="[50]"
                        src="img/images/rectangle-167.webp" alt="pic-1"/>
              <nuxt-img class="restInPolyana-pictures-small-img"
                        loading="lazy" quality="80" :placeholder="[50]"
                        src="img/images/rectangle-169.webp" alt="pic-3"/>
              <nuxt-img class="restInPolyana-pictures-small-img"
                        loading="lazy" quality="80" :placeholder="[50]"
                        src="img/images/rectangle-168.webp" alt="pic-2"/>
              <nuxt-img class="restInPolyana-pictures-small-img"
                        loading="lazy" quality="80" :placeholder="[50]"
                        src="img/images/rectangle-170.webp" alt="pic-4"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <style>
      .flexbox-wrapper {
        display: flex;
        justify-content: space-between;
        min-height: 1500px;  //<-
        overflow: auto;  //<-
      }
    </style>

    <section class="luxHoliday">
      <div class="luxHoliday-container flexbox-wrapper">

        <div class="luxHoliday-head ">
          <div class="luxHoliday-head-container">
            <div class="luxHoliday-title fontSize-xl--s text-uppercase">Роскошный
              горный отдых
              с комфортом!
            </div>
            <div class="luxHoliday-text">&nbsp; <b>ULTIMA CLUB HOTEL & SPA</b> на Красной поляне - идеальное
              место для тех, кто ищет комфорт и роскошь. Мы предлагаем
              широкий выбор удобств, включая бассейн, спа-центр, хамам
              и ski room, кинотеатр на крыше с кальяной зоной. Наши
              номера оформлены с уникальным дизайном и предлагают
              великолепный вид на горы. Ресторан отеля предлагают
              блюда местной и мировой кухни, чтобы удовлетворить
              любой вкус.

              &nbsp; Также мы рады предложить нашим гостям выгодное
              бронирование. Забронируйте номер заранее и получите
              специальные предложения и скидки. Насладитесь
              роскошью и комфортом в нашем 5-звездочном отеле на
              Красной поляне!

              &nbsp; Следите за нашими предложениями на сайте или
              свяжитесь с нами для получения большей информации по
              телефону: <b>+7 989 009 5577.</b>
            </div>
            <v-btn class="luxHoliday-btn rounded-xxl mx-auto"
                   color="golden-gradient" elevation="0"
                   width="254px" height="47px" dark>
              Забронировать
            </v-btn>
          </div>
        </div>

        <div class="luxHoliday-body">
          <div class="luxHoliday-body-container">
            <v-carousel class="luxHoliday-slide slider" v-for="slider in sliders"
                        :key="slider.numSlider" hide-delimiters>
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
              <v-carousel-item v-for="item in getNumSlider(slider.numSlider)"
                               :key="'lux-slide-'+item.id">
                <component v-bind:is="slider.component" :item="item"></component>
              </v-carousel-item>
            </v-carousel>
          </div>
        </div>
      </div>
    </section>

    <!-- Специальные предложения -->
    <special-offers/>

    <!-- Эксклюзивная скидка за звонок -->
    <exclusive/>

    <!-- Наши гости делятся своими впечатлениями об отдыхе -->
    <reviews/>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({
  head: {
    title: 'Ultima Club'
  }
})
export default class Inside extends Vue {
  sliders: any = [
    {
      numSlider: 'firstSlider',
      component: 'lux-holiday-first-slide',
    },
    {
      numSlider: 'secondSlider',
      component: 'lux-holiday-second-slide',
    },
    {
      numSlider: 'thirdSlider',
      component: 'lux-holiday-third-slide',
    },
    {
      numSlider: 'fourthSlider',
      component: 'lux-holiday-fourth-slide',
    },
  ]
  firstSlider: any = [
    {
      id: 11,
      title: 'СПА С БАССЕЙНОМ \n ХАМАМОМ И САУНОЙ',
      img: 'img/restInPolyana/pool.webp',
      chip: ['Входит в стоимость',]
    },
  ]
  secondSlider: any = [
    {
      id: 21,
      title: 'ОТКРЫТАЯ ТЕРРАСА: \n КИНОТЕАТР И\n КАЛЬЯННАЯ ЗОНА',
      img: 'img/restInPolyana/open-area.webp',
      chip: ['Входит в стоимость',]
    },
  ]
  thirdSlider: any = [
    {
      id: 31,
      title: 'РЕСТОРАН: \n МЕСТНАЯ и\n ЕВРОПЕЙСКАЯ КУХНЯ',
      img: 'img/restInPolyana/restaurant.webp',
      chip: []
    },
  ]
  fourthSlider: any = [
    {
      id: 41,
      title: 'SKI-ROOM \n с ФУНКЦИЕЙ СУШКИ',
      img: 'img/restInPolyana/ski-dryer.webp',
      chip: ['Входит в стоимость',]
    },
  ]

   getNumSlider (numSlider: string) {
    // @ts-ignore
    return this[numSlider]
   }
}
</script>

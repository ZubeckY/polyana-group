<template>
  <div>
    <!-- хедер -->
    <header class="header header-main">
      <div class="header-container" :style="activeSlide">
        <div class="header-container-inner">

          <header-nav-polyana/>

          <div class="header-body">
            <div class="header-body-container general-container">
              <div class="header-content d-flex">
                <!-- Скрываем блок -->
                <div class="header-content__season d-none">
                  <div class="header-content__season-container">
                    <v-btn-toggle active-class="season-active" mandatory
                                  class="header-content__season-switch ma-0 pa-0">
                      <v-btn class="header-content__season-switch-button pa-0 ma-0"
                             elevation="0" min-height="0" min-width="0" value="summer" text>Лето
                      </v-btn>
                      <v-btn class="header-content__season-switch-button pa-0 ma-0"
                             elevation="0" min-height="0" min-width="0" value="winter" text>Зима
                      </v-btn>
                    </v-btn-toggle>
                  </div>
                </div>
                <div class="header-content__title">
                  <h1 class="section-title fontSize-xl--s text-uppercase white--text pa-0">Отдыхайте с комфортом
                    и наслаждайтесь<span class="golden-gradient--text section-title"> красотами
                    Красной Поляны</span> в наших
                    уникальных отелях!
                  </h1>
                </div>
              </div>
              <header-slider class="header-slider--desktop"
                             @changeActiveSlide="changeActiveSlide"/>
            </div>
          </div>
          <header-booking/>
          <header-slider class="header-slider--mobile"
                         @changeActiveSlide="changeActiveSlide"/>
        </div>
      </div>
    </header>

    <!-- рейтинг карточки -->
    <rating/>

    <!-- пинтерест -->
    <pinterest/>

    <!-- Группа отелей -->
    <hotel-group/>

    <!-- Специальные предложения -->
    <special-offers/>

    <!-- Развлекуха летом/зимой-->
    <season-programs/>

    <!-- Эксклюзивная скидка за звонок -->
    <exclusive/>

    <!-- Что посетить на КП -->
    <what-visit/>

    <!-- Наши гости делятся своими впечатлениями об отдыхе -->
    <reviews/>
  </div>
</template>
<script>
export default {
  name: 'Index',
  head() {
    return {
      title: 'Polyana Group - группа курортных отелей на Красной поляне',
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Polyana Group – группа курортных отелей на Красной поляне, где вы сможете полностью расслабиться и насладиться окружающей природой. Наши отели Ultima club hotel&spa, Country hills resort и Ikos Polyana предлагают широкий спектр услуг, чтобы сделать ваш отдых незабываемым."
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "красная поляна отели, красная поляна сочи отели, красная поляна отели цены, красная поляна отели 5 звезд, сочи красная поляна отели, отели polyana group, отель ultima club, отель country hills, отель ikos polyana"
        },

        // og:tags
        {
          hid: "og:url",
          property: "og:url",
          content: process.client ? window.location.href : ''
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website"
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Polyana Group - группа курортных отелей на Красной поляне"
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Polyana Group – группа курортных отелей на Красной поляне, где вы сможете полностью расслабиться и насладиться окружающей природой. Наши отели Ultima club hotel&spa, Country hills resort и Ikos Polyana предлагают широкий спектр услуг, чтобы сделать ваш отдых незабываемым."
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://polyanagroup.ru/public_image/hotels/Ultima/main/main6.webp"
        },
      ],
    }
  },

  data: () => ({
    activeImage: "https://polyanagroup.ru/public_image/mainbanner/large/MG_7748-_1_.webp",
  }),

  computed: {
    activeSlide() {
      return `background-image: url('${this.activeImage}')`
    },
  },

  methods: {
    changeActiveSlide(value) {
      return this.activeImage = value
    }
  }
}
</script>

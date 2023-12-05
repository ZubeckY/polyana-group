<template>
  <nav class="header-nav">
    <div class="header-nav-container general-container d-flex align-center flex-row">
      <div class="header-nav-container-inner d-flex align-center w-100">
        <header-nav-menu/>
        <div class="header-nav__link mx-auto" v-for="(item, i) in firstLinks" :key="'f_link'+i">
          <hotels-menu v-if="item.title === 'Отели'">
            <div class="d-flex align-center">
              <link-component :item="{title: 'Отели'}"/>
              <chevron-down class="ml-1" :dark="true"/>
            </div>
          </hotels-menu>

          <hotels-menu v-else-if="item.title === 'Ресторан'" mode="restaurant">
            <div class="d-flex align-center">
              <link-component :item="{title: 'Ресторан'}"/>
              <chevron-down class="ml-1" :dark="true"/>
            </div>
          </hotels-menu>

          <link-component :item="item" v-else/>
        </div>

        <logo-small class="header-nav__logo"/>

        <div class="header-nav__link mx-auto" v-for="(item, i) in secondLinks" :key="'s_link'+i">
          <link-component :item="item"/>
        </div>
      </div>

      <div class="header-nav__reservation ml-auto">
        <div class="header-nav__reservation-container d-flex flex-column">
          <a class="header-nav__reservation-booking shimmer-effect" href="/booking">
            <div class="shimmer"></div>
            <div class="text">Забронировать</div>
          </a>
          <a class="header-nav__reservation-phone" href="tel:+7 938 555-55-52">
            +7 938 555-55-52
          </a>
        </div>
      </div>

    </div>
  </nav>
</template>
<script>
export default {
  name: "HeaderNavPolyana",
  data: () => ({
    links: [
      {
        title: 'Главная',
        link: '/'
      },
      {
        title: 'Отели'
      },
      {
        title: 'Номера',
        link: '/booking'
      },
      {
        title: 'Ресторан',
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
  }),

  computed: {
    firstLinks() {
      let array = []
      for (let i = 0; i < this.links.length; i++) {
        array.push(this.links[i])
        if (this.links[i]['title'] === 'Ресторан') break
      }
      return array
    },
    secondLinks() {
      let array = []
      for (let i = 0; i < this.links.length; i++) {
        if (i >= 4) {
          array.push(this.links[i])
        }
      }
      return array
    }
  }
}
</script>

<template>
  <div class="pa-0 pl-1 mt-2">
    <div class="d-flex flex-column align-start pt-3">
      <link-component class="mb-3" v-for="(item, i) in links" :key="itemLink(item, i)" :item="item"/>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterLinks",
  data: () => ({
    links: [
      {link: '/services', title: 'О нас',},
      {link: 'https://vk.com/ultimaclub', title: 'Блог',},
      {link: '/booking', title: 'Размещение',},
      {link: '/services', title: 'Услуги',},
      {link: '/promo', title: 'Специальные предложения',},
      {link: '/contacts', title: 'Как добраться',},
      // { link: '/', title: 'Трансфер', },
      {link: '/contacts', title: 'Реквизиты',},
      {link: '/contacts', title: 'Контакты',},
      // { link: '/', title: 'Частые вопросы', class: 'mt-5' },
      // { link: '/', title: 'Инфраструктура', },
      {link: '/#actives', title: 'Активности на Красной поляне',},
    ]
  }),
  methods: {
    itemLink(item, i) {
      return item.link + '-' + i
    }
  }
}
</script>

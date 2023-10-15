<template>
  <v-card-actions class="pa-0 pl-1 mt-2">
    <div class="d-flex flex-column align-start">
      <link-component v-for="(item, i) in links" :key="itemLink(item, i)" :item="item"/>
    </div>
  </v-card-actions>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({})
export default class Links extends Vue {
  links: any = [
    { link: '/', title: 'О нас', },
    { link: '/', title: 'Блог', },
    { link: '/', title: 'Размещение', },
    { link: '/services', title: 'Услуги', },
    { link: '/promo', title: 'Специальные предложения', },
    { link: '/contacts', title: 'Как добраться', },
    { link: '/', title: 'Трансфер', },
    { link: '/contacts', title: 'Реквизиты', },
    { link: '/contacts', title: 'Контакты', },
    { link: '/', title: 'Частые вопросы', class: 'mt-5' },
    { link: '/', title: 'Инфраструктура', },
    { link: '/', title: 'Активности на Красной поляне', },
  ]
  itemLink (item: any, i: any) {return item.link+'-'+i}
}
</script>

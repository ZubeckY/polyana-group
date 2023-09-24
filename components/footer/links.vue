<template>
  <v-card-actions class="pa-0 ml-4">
    <div class="d-flex flex-column align-start">
      <link-component v-for="(item, i) in links" :key="itemLink(item, i)" :item="item"/>
    </div>
  </v-card-actions>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({})
export default class links extends Vue {
  links: any = [
    { link: '/', title: 'О нас', },
    { link: '/', title: 'Блог', },
    { link: '/', title: 'Размещение', },
    { link: '/', title: 'Услуги', },
    { link: '/', title: 'Специальные предложения', },
    { link: '/', title: 'Как добраться', },
    { link: '/', title: 'Трансфер', },
    { link: '/', title: 'Реквизиты', },
    { link: '/', title: 'Контакты', },
    { link: '/', title: 'Частые вопросы', class: 'mt-3' },
    { link: '/', title: 'Инфраструктура', },
    { link: '/', title: 'Активности на Красной поляне', },
  ]
  itemLink (item: any, i: any) {return item.link+'-'+i}
}
</script>

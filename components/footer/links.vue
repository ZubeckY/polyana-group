<template>
  <v-card-actions class="pa-0 ml-4">
    <div class="d-flex flex-column align-start">
      <v-btn class="footer-helpInfo-link text-none pa-0 mb-1"
             v-for="(item, i) in links"
             :key="itemLink(item, i)"
             :disabled="itemDisabled(item)"
             min-width="0" min-height="0"
             width="auto" height="auto"
             v-html="item['title']"
             color="black" text>
      </v-btn>
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
    { link: '',  title: '&nbsp;', disabled: true },
    { link: '/', title: 'Частые вопросы', },
    { link: '/', title: 'Инфраструктура', },
    { link: '/', title: 'Активности на Красной поляне', },
  ]
  itemLink (item: any, i: any) {return item.link+'-'+i}
  itemDisabled (item: any) {return item.disabled}
}
</script>

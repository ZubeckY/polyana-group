<template>
  <footer class="footer">
    <v-card class="footer-card d-flex align-center rounded-xxl"
            elevation="0" color="var(--card-grey)">
      <div class="footer-container general-container">
        <div class="footer-inner d-flex">

          <div class="footer-seeYouAtHotel">
            <!-- До встречи в наших отелях -->
            <v-card-title class="footer-seeYouAtHotel-title footer-title pb-3">До встречи в наших отелях</v-card-title>
            <v-chip-group class="footer-seeYouAtHotel-group ml-3 mb-2"
                          v-model="activeChip" mandatory column
                          active-class="golden-gradient white--text">
              <v-chip class="footer-seeYouAtHotel-chip text-uppercase py-3 px-4"
                      v-for="(item, i) in localMapping"
                      :key="item.id" :value="i" color="#FAFAFD">
                {{ item.title }}
              </v-chip>
            </v-chip-group>

            <div class="footer-seeYouAtHotel-address d-flex">
              <!-- Контакты адрес -->
              <div>
                <v-card-title class="footer-seeYouAtHotel-address-title footer-title pt-0 pb-3">Контакты</v-card-title>
                <v-card-text class="footer-seeYouAtHotel-address-text py-1"><span class="text-uppercase">Адрес:</span>
                  Краснодарский край,
                  Красная поляна,
                  с. Эсто-Садок,
                  Автомобильный
                  переулок, 4
                </v-card-text>
                <v-card-text class="footer-seeYouAtHotel-address-text text-uppercase py-1"><span class="text-decoration-underline">8 938 555 5552</span>
                  Отдел бронирования
                  (09:00 - 21:00)
                </v-card-text>
                <v-card-text class="footer-seeYouAtHotel-address-text text-uppercase py-1"><span class="text-decoration-underline">8 938 555 5551</span>
                  Рецепция (круглосуточно)
                </v-card-text>
              </div>

              <!-- Слайдер -->
              <div class="footer-seeYouAtHotel-photo">
                <v-carousel class="footer-carousel" style="height: 290px"
                            v-model="activeSlide" hide-delimiters>
                  <v-carousel-item class="footer-slide"
                                   v-for="(item, i) in localMapping[activeChip]['photos']"
                                   :key="'photo-' + item.id">
                    <lazy-footer-slide :item="item"/>
                  </v-carousel-item>
                </v-carousel>
              </div>

            </div>
          </div>

          <div class="footer-service d-flex">
            <!-- помощь и информация, кнопки -->
            <div class="footer-helpInfo">
              <v-card-title class="footer-helpInfo-title footer-title">помощь и информация</v-card-title>
              <v-card-subtitle class="footer-helpInfo-subtitle my-2 pb-0 text-uppercase">О Комплексе</v-card-subtitle>

              <v-card-actions class="pa-0 ml-4">
                <div class="d-flex flex-column align-start">
                  <v-btn v-for="(item, i) in links"
                         color="black" v-html="item['title']" text
                         :key="item.link+'-'+i" :disabled="item.disabled"
                         class="footer-helpInfo-link text-none pa-0 mb-1"
                         width="auto" height="auto" min-width="0" min-height="0"/>
                </div>
              </v-card-actions>
            </div>
            <v-spacer/>
            <!-- Забронировать -->
            <lazy-footer-booking/>
          </div>
        </div>
      </div>
    </v-card>

    <div class="footer-mazur">
      <div class="footer-mazur-container general-container d-flex align-end justify-space-between">
        <div class="footer-mazur-polyana text-uppercase">Ⓒ polyana group | 2023</div>
        <div class="footer-mazur-text text-right text-uppercase">
          <div> РАЗРАБОТАНО <a class="text-decoration-none"
                               href="https://mazurgroup.ru/"
                               target="_blank">mazurgroup.ru</a>
          </div>
          <div>Политика конфиденциальности</div>
        </div>
      </div>
    </div>

  </footer>
</template>
<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';
@Component({})
export default class FooterComp extends Vue {
  activeChip: number = 0
  activeSlide: number = 0
  localMapping: any = [
    {
      id: 1,
      priority: 1,
      title: 'ULTIMA CLUB | HOTEL & SPA',
      photos: [
        {
          id: 11,
          priority: 1,
          url: 'https://via.placeholder.com/1024x1024/eee?text=Бла_бла_бла',
        },
        {
          id: 12,
          priority: 2,
          url: 'https://via.placeholder.com/1024x1024/eee?text=4:3',
        },
      ]
    },
    {
      id: 2,
      priority: 2,
      title: 'IKOS POLYANA',
      photos: [
        {
          id: 2,
          priority: 1,
          url: 'https://via.placeholder.com/1024x1024/eee?text=4:3',
        },
      ]
    },
    {
      id: 3,
      priority: 3,
      title: 'COUNTRY hills resort',
      photos: [
        {
          id: 3,
          priority: 1,
          url: 'https://via.placeholder.com/1024x1024/eee?text=4:3',
        },
      ]
    },
  ]

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

  @Watch('activeChip')
  changeController () {this.changeMapping(); this.emptyActiveSlide ()};
  changeMapping () {this.$emit('changeMapping', this.localMapping[this.activeChip]['htmltagyandexmap'])};
  emptyActiveSlide () {return this.activeSlide = -1};
}
</script>

<template>
  <footer class="footer">
    <v-card class="footer-card d-flex align-center rounded-xxl"
            elevation="0" color="var(--card-grey)">
      <div class="footer-container general-container">
        <div class="footer-inner d-flex">

          <div class="footer-seeYouAtHotel">
            <!-- До встречи в наших отелях -->
            <div class="footer-seeYouAtHotel-title footer-title pa-1 pb-3">До встречи в наших отелях</div>
            <v-chip-group class="footer-seeYouAtHotel-group mb-2" v-model="activeChip"
                          mandatory column active-class="golden-gradient white--text">
              <footer-see-you-at-hotel-chip v-for="(item, i) in localMapping" :key="'see-you-at-hotel'+i" :value="i"
                                            :item="item"/>
            </v-chip-group>

            <div class="footer-seeYouAtHotel-address d-flex">
              <!-- Контакты адрес -->
              <div class="footer-seeYouAtHotel-address-container">
                <div class="footer-seeYouAtHotel-address-title footer-title my-3">Контакты</div>
                <div class="footer-seeYouAtHotel-address-text"><span class="text-uppercase">Адрес:</span>
                  Краснодарский край,
                  Красная поляна,
                  с. Эсто-Садок,
                  Автомобильный
                  переулок, 4
                </div>
                <div class="footer-seeYouAtHotel-address-text text-uppercase mt-2"><span
                  class="text-decoration-underline">8 938 555 5552</span>
                  Отдел бронирования
                  (09:00 - 21:00)
                </div>
                <div class="footer-seeYouAtHotel-address-text text-uppercase mt-2"><span
                  class="text-decoration-underline">8 938 555 5551</span>
                  Рецепция (круглосуточно)
                </div>
              </div>

              <!-- Слайдер -->
              <div class="footer-seeYouAtHotel-photo">
                <v-carousel class="footer-carousel" style="height: 290px"
                            v-model="activeSlide" hide-delimiters>
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
                  <v-carousel-item class="footer-slide"
                                   v-for="item in localMapping[activeChip]['photos']"
                                   :key="'photo-'+item.id">
                    <lazy-footer-slide :item="item"/>
                  </v-carousel-item>
                </v-carousel>
              </div>

            </div>
          </div>

          <div class="footer-service d-flex">
            <!-- помощь и информация, кнопки -->
            <div class="footer-helpInfo">
              <div class="footer-helpInfo-title footer-title pa-1">помощь и информация</div>
              <div class="footer-helpInfo-subtitle pa-1 text-uppercase">О Комплексе</div>
              <!-- Ссылки -->
              <footer-links/>
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
          url: '/img/footer/subtract.webp',
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
          id: 21,
          priority: 1,
          url: '/img/footer/subtract.webp',
        },
        {
          id: 22,
          priority: 2,
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
          id: 31,
          priority: 1,
          url: '/img/footer/subtract.webp',
        },
        {
          id: 32,
          priority: 2,
          url: 'https://via.placeholder.com/1024x1024/eee?text=4:3',
        },
      ]
    },
  ]

  @Watch('activeChip')
  changeController() {
    this.changeMapping();
    this.emptyActiveSlide()
  };

  changeMapping() {
    this.$emit('changeMapping', this.localMapping[this.activeChip]['htmltagyandexmap'])
  };

  emptyActiveSlide() {
    return this.activeSlide = -1
  };
}
</script>

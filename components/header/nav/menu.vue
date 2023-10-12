<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay
            transition="fade-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="header-nav__menu pa-0" text
             v-bind="attrs" v-on="on"
             min-width="0" min-height="0" width="auto" height="0">
        <div class="header-nav__menu-container d-flex justify-center align-center flex-column">
          <div class="d-flex justify-center align-center flex-column">
            <div v-for="i in 3" :key="'image'+i" class="header-nav__menu-line"></div>
          </div>
          <div class="header-nav__menu-title">Меню</div>
        </div>
      </v-btn>

    </template>

    <div class="header-nav__menu-content">
      <div class="header-nav__menu-content-blur">
        <div class="header-nav__menu-content-container">
          <div class="header-nav__menu-content-body general-container">
            <div class="header-nav__menu-content-body-container">

              <div class="header-nav__menu-content-close" @click="dialog = false">
                <v-btn class="header-nav__menu-content-close-button"
                       color="white" text>╳
                </v-btn>
                <div class="header-nav__menu-content-close-text">Закрыть</div>
              </div>

              <a class="header-nav__menu-content-link"
                 v-for="(item, j) in menu" :key="'hotMenu'+j" :href="item.link">
                <div class="header-nav__menu-content-link-container">
                  <div class="header-nav__menu-content-link-count">{{ '00' + Number(j + 1) }}</div>
                  <div class="header-nav__menu-content-link-title">{{ item.title }}</div>
                  <v-spacer/>
                  <div class="header-nav__menu-content-link-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                      <path
                        d="M20.1834 5.27492C20.0629 5.35001 19.9225 5.40668 19.8233 5.50445C13.2726 12.0444 6.72614 18.5887 0.178269 25.1329C-0.0579969 25.369 -0.0594145 25.6033 0.174016 25.8356C1.02457 26.6871 1.87655 27.5386 2.72852 28.3901C2.94778 28.6093 3.16562 28.6107 3.38204 28.3944C9.93841 21.8431 16.4934 15.2903 23.0498 8.73902C23.149 8.63984 23.2525 8.54633 23.4169 8.38906C23.4353 8.61292 23.458 8.76593 23.458 8.91895C23.4594 14.2787 23.4594 19.6385 23.4594 24.9983C23.4594 25.3308 23.6258 25.497 23.9584 25.497C25.1875 25.497 26.4151 25.4885 27.6442 25.5027C27.9277 25.5055 28 25.4148 28 25.14C27.9929 17.0656 27.9943 8.98979 27.9943 0.915409C27.9943 0.811981 27.9816 0.708557 27.9731 0.562626H27.5761C19.544 0.562626 11.5119 0.564041 3.47985 0.55554C3.14813 0.55554 3.03331 0.627796 3.03898 0.979164C3.06024 2.19478 3.04748 3.4104 3.04748 4.62744C3.04748 4.93819 3.20058 5.09404 3.50678 5.09499C8.88089 5.09499 14.2564 5.09499 19.6305 5.09499C19.7794 5.09499 19.9282 5.09499 20.0771 5.09499C20.1125 5.15449 20.1479 5.21542 20.1834 5.27492Z"
                        fill="#FDE6B9"/>
                    </svg>
                  </div>
                </div>
              </a>

            </div>
          </div>
          <v-vertical-spacer/>
          <div class="header-nav__menu-content-footer">
            <div class="header-nav__menu-content-footer-container general-container">

              <!-- До встречи в наших отелях -->
              <v-chip-group class="header-nav__menu-content-group mb-2" v-model="activeChip"
                            mandatory column active-class="golden-gradient white--text">
                <footer-see-you-at-hotel-chip v-for="(item, i) in localMapping"
                                              :key="'see-you-at-hotel'+i" :value="i" :item="item"/>
              </v-chip-group>

              <div class="header-nav__menu-content-contacts">
                <div class="header-nav__menu-content-contacts-container">
                  <!-- Контакты адрес -->
                  <div class="header-nav__menu-content-contacts-address">
                    <div class="header-nav__menu-content-contacts-address-title">Контакты</div>
                    <div class="mt-2"><span class="header-nav__menu-content-contacts-address-subtitle text-uppercase">Адрес:</span>
                      <div class="header-nav__menu-content-contacts-address-text">{{ getAddressItem }}</div>
                    </div>
                  </div>


                  <div style="margin-left: 40px">
                    <div class="-container">
                      <div class="text-pre-line"><a style="color: #FFF !important;font-size: 12.75px;font-weight: 500;line-height: 126.9%;text-decoration-line: underline;text-transform: uppercase;"
                                                    :href="'tel:'+getTelBronItem">{{ getTelBronItem }}</a>
                        <span style="color: #FFF;font-size: 10.2px;font-style: normal;font-weight: 400;line-height: 126.9%;">
                    Отдел бронирования
                    (09:00 - 21:00)</span>
                      </div>
                      <div class="text-pre-line"><a style="color: #FFF !important;font-size: 12.75px;font-weight: 500;line-height: 126.9%;text-decoration-line: underline;text-transform: uppercase;"
                                                    :href="'tel:'+getTelTelReceptionItem">{{ getTelTelReceptionItem }}</a>
                        <span style="color: #FFF;font-size: 10.2px;font-style: normal;font-weight: 400;line-height: 126.9%;">
                    Рецепция (круглосуточно)</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </v-dialog>
</template>
<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';
import supaBase from "~/assets/scripts/supaBase";

@Component({})
export default class Menu extends Vue {
  dialog: boolean = false
  activeChip: number = 0
  localMapping: any = []
  menu: any = [
    {
      title: 'ULTIMA CLUB | HOTEL & SPA',
      link: '/inside?hotel_id=32513'
    },
    {
      title: 'COUNTRY HILLS | RESORT',
      link: '/inside?hotel_id=22866'
    },
    {
      title: 'IKOS POLYANA',
      link: '/inside?hotel_id=23660'
    },
    {
      title: 'СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ',
      link: '/'
    },
    {
      title: 'УСЛУГИ',
      link: '/services'
    },
    {
      title: 'ОТЗЫВЫ',
      link: '/reviews'
    },
  ]

  async created() {
    try {
      let {data, error} = await supaBase
        .from('hotels')
        .select('')
        .order('id')
      this.localMapping = data
    } catch (e) {
      console.log(e)
    }
  }

  get getAddressItem() {
    return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip]['adress'] : ''
  }

  get getTelBronItem() {
    return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip]['telbron'] : ''
  }

  get getTelTelReceptionItem() {
    return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip]['telreception'] : ''
  }

  get getImgSHotel() {
    return this.localMapping[this.activeChip] ? this.localMapping[this.activeChip]['imgshotel'] : []
  }


}
</script>

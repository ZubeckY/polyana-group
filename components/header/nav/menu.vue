<template>
  <v-dialog v-model="dialog" hide-overlay fullscreen transition="fade-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="header-nav__menu pa-0" v-bind="attrs" v-on="on"
             min-width="0" min-height="0" width="auto" height="0" text>
        <div class="header-nav__menu-container d-flex justify-center align-center flex-column">
          <div class="d-flex justify-center align-center flex-column">
            <span v-for="i in 3" :key="'image'+i" class="header-nav__menu-line"></span>
          </div>
          <span class="header-nav__menu-title">Меню</span>
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
                       width="49px" height="49px" color="white" text>
                  <svg class="header-nav__menu-content-close-button-svg"
                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" fill="none">
                    <g clip-path="url(#clip0_2014_148)">
                      <path d="M20.48 40.9998C9.13596 40.9708 -0.0281349 31.7836 6.49083e-05 20.4686C0.0282647 9.11776 9.21543 -0.0429139 20.527 -0.000186835C31.8778 0.0425402 41.0676 9.26132 41.0001 20.537C40.9326 31.875 31.7531 41.028 20.48 40.999V40.9998ZM3.19007 20.49C3.18408 30.0079 10.939 37.7637 20.48 37.7833C30.0073 37.8021 37.7622 30.0617 37.7819 20.5156C37.8015 10.9883 30.0696 3.2257 20.5261 3.19067C11.0134 3.15478 3.19519 10.9567 3.19007 20.4908V20.49Z"
                            fill="white"/>
                      <path d="M29.4314 13.7504C29.4049 13.906 29.2819 13.9692 29.1964 14.0546C27.1549 16.1004 25.116 18.1479 23.0617 20.18C22.8139 20.4244 22.7968 20.544 23.0548 20.7987C25.1109 22.8299 27.1447 24.8825 29.1981 26.9155C29.4365 27.1513 29.4374 27.2735 29.1964 27.5C28.6153 28.0452 28.0522 28.6109 27.5053 29.1903C27.284 29.4253 27.1626 29.4441 26.9208 29.1988C24.8887 27.1436 22.8361 25.1098 20.8048 23.0547C20.5544 22.8017 20.4348 22.8034 20.1853 23.0555C18.1532 25.1107 16.1014 27.1453 14.0668 29.1971C13.8514 29.4142 13.7361 29.4552 13.5071 29.2082C12.9653 28.6246 12.3996 28.0606 11.8176 27.5162C11.569 27.2838 11.5408 27.1616 11.804 26.9018C13.8608 24.8714 15.8946 22.8188 17.9464 20.7841C18.1737 20.5594 18.1985 20.444 17.9549 20.2031C15.8904 18.1607 13.8454 16.0987 11.7826 14.0546C11.5587 13.8325 11.5408 13.7214 11.7792 13.4983C12.3714 12.9446 12.9448 12.3686 13.5011 11.7781C13.7164 11.55 13.8266 11.5406 14.0574 11.773C16.0997 13.8367 18.1626 15.8816 20.2058 17.9454C20.4408 18.1829 20.5562 18.1778 20.7877 17.9445C22.8318 15.8816 24.8938 13.8367 26.9362 11.7722C27.1677 11.538 27.278 11.5568 27.4899 11.7807C28.0565 12.3806 28.6512 12.954 29.2349 13.5385C29.3041 13.6077 29.369 13.6812 29.4331 13.7496L29.4314 13.7504Z"
                            fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_2014_148">
                        <rect width="41" height="41" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </v-btn>
                <div class="header-nav__menu-content-close-text">Закрыть</div>
              </div>

              <a class="header-nav__menu-content-link"
                 v-for="(item, j) in menu" :key="'hotMenu'+j" :href="item.link">
                <div class="header-nav__menu-content-link-container">
                  <div class="header-nav__menu-content-link-head">
                    <div class="header-nav__menu-content-link-count">{{ '00' + Number(j + 1) }}</div>
                    <div class="header-nav__menu-content-link-title">
                      {{ mobileTitle ? item.title.split('|')[0] : item.title }}
                    </div>
                    <v-spacer/>
                    <svg class="header-nav__menu-content-link-arrow" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 28 29" fill="none">
                      <path
                        d="M20.1834 5.27492C20.0629 5.35001 19.9225 5.40668 19.8233 5.50445C13.2726 12.0444 6.72614 18.5887 0.178269 25.1329C-0.0579969 25.369 -0.0594145 25.6033 0.174016 25.8356C1.02457 26.6871 1.87655 27.5386 2.72852 28.3901C2.94778 28.6093 3.16562 28.6107 3.38204 28.3944C9.93841 21.8431 16.4934 15.2903 23.0498 8.73902C23.149 8.63984 23.2525 8.54633 23.4169 8.38906C23.4353 8.61292 23.458 8.76593 23.458 8.91895C23.4594 14.2787 23.4594 19.6385 23.4594 24.9983C23.4594 25.3308 23.6258 25.497 23.9584 25.497C25.1875 25.497 26.4151 25.4885 27.6442 25.5027C27.9277 25.5055 28 25.4148 28 25.14C27.9929 17.0656 27.9943 8.98979 27.9943 0.915409C27.9943 0.811981 27.9816 0.708557 27.9731 0.562626H27.5761C19.544 0.562626 11.5119 0.564041 3.47985 0.55554C3.14813 0.55554 3.03331 0.627796 3.03898 0.979164C3.06024 2.19478 3.04748 3.4104 3.04748 4.62744C3.04748 4.93819 3.20058 5.09404 3.50678 5.09499C8.88089 5.09499 14.2564 5.09499 19.6305 5.09499C19.7794 5.09499 19.9282 5.09499 20.0771 5.09499C20.1125 5.15449 20.1479 5.21542 20.1834 5.27492Z"
                        fill="#FDE6B9"/>
                    </svg>
                  </div>

                  <div class="header-nav__menu-content-link-body" v-if="item.type === 'hotel' && isNeedCondition(item)">
                    <a class="header-nav__menu-content-link-body-sub_link text-decoration-none"
                       v-for="(subLink, i) in item.subLinks" :key="'subLink'+i" :href="subLink.link">
                      <div class="header-nav__menu-content-link-line"></div>
                      <div class="header-nav__menu-content-link-subtitle">
                        {{ subLink.title }}
                      </div>
                      <v-spacer/>
                      <svg class="header-nav__menu-content-link-arrow" xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 28 29" fill="none">
                        <path
                          d="M20.1834 5.27492C20.0629 5.35001 19.9225 5.40668 19.8233 5.50445C13.2726 12.0444 6.72614 18.5887 0.178269 25.1329C-0.0579969 25.369 -0.0594145 25.6033 0.174016 25.8356C1.02457 26.6871 1.87655 27.5386 2.72852 28.3901C2.94778 28.6093 3.16562 28.6107 3.38204 28.3944C9.93841 21.8431 16.4934 15.2903 23.0498 8.73902C23.149 8.63984 23.2525 8.54633 23.4169 8.38906C23.4353 8.61292 23.458 8.76593 23.458 8.91895C23.4594 14.2787 23.4594 19.6385 23.4594 24.9983C23.4594 25.3308 23.6258 25.497 23.9584 25.497C25.1875 25.497 26.4151 25.4885 27.6442 25.5027C27.9277 25.5055 28 25.4148 28 25.14C27.9929 17.0656 27.9943 8.98979 27.9943 0.915409C27.9943 0.811981 27.9816 0.708557 27.9731 0.562626H27.5761C19.544 0.562626 11.5119 0.564041 3.47985 0.55554C3.14813 0.55554 3.03331 0.627796 3.03898 0.979164C3.06024 2.19478 3.04748 3.4104 3.04748 4.62744C3.04748 4.93819 3.20058 5.09404 3.50678 5.09499C8.88089 5.09499 14.2564 5.09499 19.6305 5.09499C19.7794 5.09499 19.9282 5.09499 20.0771 5.09499C20.1125 5.15449 20.1479 5.21542 20.1834 5.27492Z"
                          fill="#FDE6B9"/>
                      </svg>
                    </a>
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
                <see-you-at-hotel-chip v-for="(item, i) in localMapping"
                                              :key="'see-you-at-hotel'+i" :value="i" :item="item"/>
              </v-chip-group>

              <div class="header-nav__menu-content-contacts">
                <div class="header-nav__menu-content-contacts-container">
                  <!-- Контакты адрес -->
                  <div class="header-nav__menu-content-contacts-address">
                    <h4 class="header-nav__menu-content-contacts-address-title">Контакты</h4>
                    <div class="mt-2"><h4 class="header-nav__menu-content-contacts-address-subtitle text-uppercase">
                      Адрес:</h4>
                      <div class="header-nav__menu-content-contacts-address-text">{{ getAddressItem }}</div>
                    </div>
                  </div>

                  <div class="header-nav__menu-content-bookingInfo">
                    <div class="header-nav__menu-content-bookingInfo-container">
                      <div class="header-nav__menu-content-bookingInfo-department text-pre-line">
                        <a :href="'tel:'+getTelBronItem">{{ getTelBronItem }}</a>
                        <span>
                          Отдел бронирования
                          (09:00 - 21:00)</span>
                      </div>
                      <div class="header-nav__menu-content-bookingInfo-reception text-pre-line">
                        <a :href="'tel:'+getTelTelReceptionItem">{{ getTelTelReceptionItem }}</a>
                        <span>
                          Рецепция (круглосуточно)</span>
                      </div>
                    </div>
                  </div>

                  <v-spacer/>

                  <div class="header-nav__menu-content-footer-askUs">
                    <div class="header-nav__menu-content-footer-weAreOnline d-flex mb-4">
                      <b class="white--text text-pre-line">Спрашивайте,
                        отвечаем онлайн</b>
                      <div class="d-flex ml-5">
                        <contact-button-whatsapp class="header-nav__menu-content-footer-whatsapp mr-2"/>
                        <contact-button-telegram class="header-nav__menu-content-footer-telegram"/>
                      </div>
                    </div>

                    <v-btn class="header-nav__menu-content-footer-bookingBtn shimmer-effect white--text"
                           color="golden-gradient" elevation="0" width="254.15px" href="/booking"
                           height="46.75px" style=";font-size: 13.6px; border-radius: 13.6px;">
                      <div class="shimmer"></div>
                      <div class="text">Забронировать</div>
                    </v-btn>
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
import {Component, Vue, Watch} from 'vue-property-decorator';
import supaBase from "~/assets/scripts/supaBase";

@Component({})
export default class Menu extends Vue {
  dialog: boolean = false
  activeChip: number = 0
  mobileTitle: boolean = false
  localMapping: any = []
  menu: any = [
    {
      title: 'ULTIMA CLUB | HOTEL & SPA',
      link: '/hotel?hotel_id=32513',
      type: 'hotel',
      subLinks: [
        {
          title: 'Номера',
          link: 'booking?hotel_id=32513',
        },
        {
          title: 'Ресторан',
          link: '/services/3',
        },
        {
          title: 'Услуги',
          link: '/services?hotel_id=32513',
        },
        {
          title: 'Акции',
          link: '/promo?hotel_id=32513',
        },
        {
          title: 'Отзывы',
          link: '/reviews?hotel_id=32513',
        },
        {
          title: 'Контакты',
          link: '/contacts?hotel_id=32513',
        },
      ]
    },
    {
      title: 'COUNTRY HILLS | RESORT',
      link: '/hotel?hotel_id=22866',
      type: 'hotel',
      subLinks: [
        {
          title: 'Номера',
          link: 'booking?hotel_id=22866',
        },
        {
          title: 'Ресторан',
          link: '/services/10',
        },
        {
          title: 'Услуги',
          link: '/services?hotel_id=22866',
        },
        {
          title: 'Акции',
          link: '/promo?hotel_id=22866',
        },
        {
          title: 'Отзывы',
          link: '/reviews?hotel_id=22866',
        },
        {
          title: 'Контакты',
          link: '/contacts?hotel_id=22866',
        },
      ]
    },
    {
      title: 'IKOS POLYANA',
      link: '/hotel?hotel_id=23660',
      type: 'hotel',
      subLinks: [
        {
          title: 'Номера',
          link: 'booking?hotel_id=23660',
        },
        {
          title: 'Ресторан',
          link: '/services/13',
        },
        {
          title: 'Услуги',
          link: '/services?hotel_id=23660',
        },
        {
          title: 'Акции',
          link: '/promo?hotel_id=23660',
        },
        {
          title: 'Отзывы',
          link: '/reviews?hotel_id=23660',
        },
        {
          title: 'Контакты',
          link: '/contacts?hotel_id=23660',
        },
      ]
    },
    {
      title: 'АКЦИИ',
      link: '/promo',
      type: 'link'
    },
    {
      title: 'УСЛУГИ',
      link: '/services',
      type: 'link'
    },
    {
      title: 'ОТЗЫВЫ',
      link: '/reviews',
      type: 'link'
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

  mounted() {
    this.getNormalTitle()
    window.addEventListener('resize', () => {
      this.getNormalTitle()
    })
  }

  isNeedCondition(item: any) {
    if (window.location.pathname == '/hotel') {
      let link = window.location.pathname + window.location.search
      if (link === item.link) {
        if (window.innerWidth <= 800) {
          return true
        }
      }
    }
  }

  getNormalTitle() {
    return this.mobileTitle = window.innerWidth < 800
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

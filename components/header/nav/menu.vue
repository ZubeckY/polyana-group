<template>
  <v-dialog v-model="dialog" hide-overlay  fullscreen transition="fade-transition">
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
                       width="49px" height="49px" color="white" text>
                  <svg class="header-nav__menu-content-close-button-svg"
                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" fill="none">
                    <g clip-path="url(#clip0_2014_148)">
                      <path d="M20.48 40.9998C9.13596 40.9708 -0.0281349 31.7836 6.49083e-05 20.4686C0.0282647 9.11776 9.21543 -0.0429139 20.527 -0.000186835C31.8778 0.0425402 41.0676 9.26132 41.0001 20.537C40.9326 31.875 31.7531 41.028 20.48 40.999V40.9998ZM3.19007 20.49C3.18408 30.0079 10.939 37.7637 20.48 37.7833C30.0073 37.8021 37.7622 30.0617 37.7819 20.5156C37.8015 10.9883 30.0696 3.2257 20.5261 3.19067C11.0134 3.15478 3.19519 10.9567 3.19007 20.4908V20.49Z" fill="white"/>
                      <path d="M29.4314 13.7504C29.4049 13.906 29.2819 13.9692 29.1964 14.0546C27.1549 16.1004 25.116 18.1479 23.0617 20.18C22.8139 20.4244 22.7968 20.544 23.0548 20.7987C25.1109 22.8299 27.1447 24.8825 29.1981 26.9155C29.4365 27.1513 29.4374 27.2735 29.1964 27.5C28.6153 28.0452 28.0522 28.6109 27.5053 29.1903C27.284 29.4253 27.1626 29.4441 26.9208 29.1988C24.8887 27.1436 22.8361 25.1098 20.8048 23.0547C20.5544 22.8017 20.4348 22.8034 20.1853 23.0555C18.1532 25.1107 16.1014 27.1453 14.0668 29.1971C13.8514 29.4142 13.7361 29.4552 13.5071 29.2082C12.9653 28.6246 12.3996 28.0606 11.8176 27.5162C11.569 27.2838 11.5408 27.1616 11.804 26.9018C13.8608 24.8714 15.8946 22.8188 17.9464 20.7841C18.1737 20.5594 18.1985 20.444 17.9549 20.2031C15.8904 18.1607 13.8454 16.0987 11.7826 14.0546C11.5587 13.8325 11.5408 13.7214 11.7792 13.4983C12.3714 12.9446 12.9448 12.3686 13.5011 11.7781C13.7164 11.55 13.8266 11.5406 14.0574 11.773C16.0997 13.8367 18.1626 15.8816 20.2058 17.9454C20.4408 18.1829 20.5562 18.1778 20.7877 17.9445C22.8318 15.8816 24.8938 13.8367 26.9362 11.7722C27.1677 11.538 27.278 11.5568 27.4899 11.7807C28.0565 12.3806 28.6512 12.954 29.2349 13.5385C29.3041 13.6077 29.369 13.6812 29.4331 13.7496L29.4314 13.7504Z" fill="white"/>
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
                        <v-btn class="header-nav__menu-content-footer-whatsapp mr-2"
                               min-width="0" min-height="0" width="35px"
                               height="35px" color="var(--card-grey)"
                               elevation="0" style="border-radius: 100px">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19"
                               fill="none">
                            <g clip-path="url(#clip0_1622_571)">
                              <path
                                d="M8.9259 0H10.0162C10.0461 0.0861951 10.1224 0.0489025 10.1763 0.053828C14.1761 0.395794 17.4898 3.62758 17.9352 7.61824C17.9486 7.73926 17.9222 7.8719 17.9993 7.98343V9.31998C17.9609 9.32877 17.9648 9.36044 17.9623 9.38858C17.9405 9.64541 17.9095 9.90118 17.8606 10.1545C17.329 12.9134 15.8314 14.9923 13.3486 16.2831C10.7152 17.6524 8.03088 17.6017 5.3736 16.2814C5.25363 16.2219 5.15442 16.2131 5.02777 16.2578C3.43052 16.8214 1.83116 17.3805 0.231097 17.936C0.158623 17.9613 0.0724281 18.0552 0.0133229 17.9944C-0.0345242 17.9451 0.0509673 17.8533 0.0759463 17.7812C0.625484 16.2012 1.17643 14.6219 1.73511 13.0454C1.79422 12.8783 1.78965 12.747 1.70732 12.5866C0.836926 10.8901 0.54527 9.09376 0.870349 7.21682C1.33299 4.54512 2.77368 2.53765 5.09426 1.15079C5.50765 0.903817 5.95199 0.721224 6.39282 0.531243C6.56978 0.488322 6.74287 0.433086 6.90928 0.358149C6.96522 0.365889 7.01483 0.349002 7.06092 0.319098C7.0866 0.328245 7.10841 0.322264 7.126 0.301507C7.15133 0.294471 7.17666 0.287786 7.20199 0.28075C7.22733 0.290249 7.24843 0.283916 7.26567 0.263863C7.29136 0.257882 7.31704 0.252253 7.34237 0.246272C7.36735 0.256474 7.38916 0.251549 7.40746 0.231495C7.43279 0.225866 7.45777 0.219885 7.4831 0.214256C7.51969 0.223404 7.55276 0.217423 7.5816 0.19174C7.60729 0.186111 7.63332 0.180834 7.659 0.175205C7.69454 0.184352 7.72796 0.181186 7.75716 0.156558C7.79727 0.165706 7.83491 0.159373 7.87009 0.13756C7.89437 0.14917 7.91618 0.1453 7.93483 0.12595C7.97423 0.135098 8.01117 0.128413 8.0453 0.106952C8.09209 0.1161 8.13748 0.112933 8.17969 0.088306C8.23071 0.0995641 8.27996 0.0935833 8.32675 0.0703634C8.3739 0.0830288 8.41893 0.0791588 8.4615 0.053828C8.53503 0.0629752 8.6075 0.059457 8.67857 0.0358853C8.76512 0.0552352 8.84674 0.038348 8.92484 0L8.9259 0ZM11.8052 13.1287C12.1348 13.1323 12.4318 13.0489 12.6713 12.81C12.9827 12.4997 13.2958 12.1912 13.6033 11.8773C13.8552 11.6205 13.8548 11.3271 13.6012 11.0699C13.2103 10.6734 12.8163 10.2801 12.4201 9.88886C12.1651 9.63696 11.8695 9.63696 11.6127 9.8864C11.4027 10.0905 11.1948 10.2973 10.9921 10.5088C10.9253 10.5784 10.876 10.5932 10.7835 10.5464C9.31923 9.80373 8.21488 8.7036 7.47254 7.23828C7.42329 7.14118 7.43419 7.087 7.51019 7.01452C7.71811 6.81645 7.9197 6.61169 8.12024 6.40623C8.37706 6.14307 8.37741 5.84825 8.11883 5.58685C7.73535 5.1995 7.34976 4.81426 6.96276 4.43043C6.68377 4.1539 6.39422 4.15355 6.11734 4.42726C5.82991 4.71153 5.54986 5.00389 5.25786 5.28323C5.00982 5.52036 4.89056 5.80674 4.88528 6.14413C4.87754 6.65954 5.03375 7.13766 5.24308 7.59819C5.76904 8.75566 6.5441 9.73618 7.43877 10.6259C8.3169 11.4995 9.28193 12.2562 10.4187 12.7717C10.8591 12.9715 11.3151 13.1171 11.8045 13.1277L11.8052 13.1287Z"
                                fill="#010101"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_1622_571">
                                <rect width="18" height="18.0141" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </v-btn>

                        <v-btn class="header-nav__menu-content-footer-telegram"
                               min-width="0" min-height="0" width="35px"
                               height="35px" color="var(--card-grey)"
                               elevation="0" style="border-radius: 100px">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14"
                               fill="none">
                            <g clip-path="url(#clip0_1622_578)">
                              <path
                                d="M15.9997 0.331816V0.579228C15.9453 0.628402 15.9519 0.698914 15.9387 0.761077C15.6936 1.9233 15.4504 3.08613 15.2062 4.24866C14.7104 6.60898 14.2142 8.96898 13.718 11.3293C13.573 12.0186 13.4288 12.7083 13.2816 13.3974C13.2269 13.6537 13.0193 13.8099 12.7929 13.7728C12.6879 13.7555 12.6013 13.6989 12.5162 13.638C11.3423 12.794 10.1674 11.9512 8.99279 11.1082C8.62575 10.8447 8.39002 10.8512 8.0408 11.1329C7.41177 11.6407 6.78242 12.1482 6.15308 12.6557C5.82387 12.9211 5.49841 12.8255 5.37273 12.4269C4.91877 10.9857 4.46419 9.54483 4.0143 8.10242C3.98335 8.00376 3.93739 7.94933 3.83891 7.91346C2.71466 7.50214 1.59322 7.08401 0.468335 6.67485C0.273248 6.60372 0.0997323 6.51991 0 6.33002V6.05168C0.109424 5.9054 0.248236 5.80767 0.42394 5.74056C5.38273 3.85126 10.3403 1.95855 15.2981 0.066157C15.6567 -0.0708477 15.8387 -0.00219071 15.9997 0.331507V0.331816ZM4.81904 7.86893C4.82779 7.92212 4.83217 7.98985 4.85062 8.05387C5.10448 8.93806 5.36116 9.82163 5.61502 10.7058C5.64722 10.8175 5.70037 10.8957 5.82981 10.8818C5.95205 10.8688 5.98581 10.78 5.99957 10.6752C6.05272 10.2722 6.11806 9.87018 6.15839 9.46597C6.20247 9.02341 6.39162 8.6758 6.72458 8.3721C8.60418 6.65784 10.4731 4.93214 12.3459 3.21015C12.4068 3.15417 12.4675 3.09758 12.5263 3.03944C12.575 2.99119 12.57 2.93552 12.5319 2.88542C12.4937 2.83501 12.4393 2.818 12.3796 2.84645C12.3377 2.86656 12.2993 2.89377 12.2596 2.91789C10.6091 3.92301 8.9584 4.92812 7.30797 5.93354C6.60891 6.3594 5.91141 6.78773 5.21078 7.21143C4.96442 7.36049 4.8328 7.57079 4.81904 7.86862V7.86893Z"
                                fill="#010101"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_1622_578">
                                <rect width="16" height="13.7778" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </v-btn>
                      </div>
                    </div>

                    <v-btn class="header-nav__menu-content-footer-bookingBtn white--text"
                           color="golden-gradient" elevation="0" width="254.15px"
                           height="46.75px" style=";font-size: 13.6px; border-radius: 13.6px;">
                      Забронировать
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
      link: '/inside/?hotel_id=32513'
    },
    {
      title: 'COUNTRY HILLS | RESORT',
      link: '/inside/?hotel_id=22866'
    },
    {
      title: 'IKOS POLYANA',
      link: '/inside/?hotel_id=23660'
    },
    {
      title: 'АКЦИИ',
      link: '/promo'
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

  mounted() {
    this.getNormalTitle()
    window.addEventListener('resize', () => {
      this.getNormalTitle()
    })
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

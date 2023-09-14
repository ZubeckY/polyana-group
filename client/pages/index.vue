<template>
  <div>
    <!-- хедер -->
    <header class="header mt-3">
      <!-- Картинка -->
      <v-card class="header-container" elevation="0" height="750px">
        <!-- Градиент -->
        <v-card class="header-wrapper" color="transparent" elevation="0">
          <div class="header-wrapper-inner general-container">
            <!-- Навигация -->
            <nav-polyana/>
            <!-- Контент -->
            <div class="header-wrapper d-flex flex-row">
              <div class="header-wrapper-container d-flex flex-column">
                <v-vertical-spacer v-if="showButtons"/>
                <!-- Отдыхайте с комфортом, ( Лето/Зима ) -->
                <section class="header-info">
                  <div class="header-info-container general-container d-flex">
                    <div class="d-flex flex-row">
                      <!-- Лето/Зима -->
                      <header-switch v-if="showButtons"/>
                      <!-- Отдыхайте с комфортом -->
                      <div class="relax-in-comfort">
                        Отдыхайте с комфортом и наслаждайтесь
                        <span class="golden">красотами Красной Поляны</span>
                        в наших уникальных отелях!
                      </div>
                    </div>
                  </div>
                </section>
                <v-vertical-spacer/>
                <!-- Панель бронирования -->
                <header-booking/>
              </div>
              <v-spacer/>
              <!-- Слайдер -->
              <header-slider/>
            </div>
          </div>
        </v-card>
      </v-card>
    </header>

    <!-- рейтинг карточки -->
    <section class="rating mt-5">
      <div class="rating-container general-container d-flex">
        <!-- Яндекс -->
        <v-card class="rating-card rating-yandex"
                height="165px" elevation="0"
                color="var(--card-grey)">
          <div class="rating-card-container d-flex flex-column">
            <div class="d-flex justify-space-between align-center">
              <rating-yandex-icon/>
              <rating-yandex-arrow/>
            </div>
            <v-vertical-spacer/>
            <div>
              <rating-yandex-star v-for="i in 5" :key="'star'+i"/>
            </div>
            <v-vertical-spacer/>
            <v-card-text class="d-inline rating-card-text ma-0 pa-0">
              <span class="rating-card-text font-weight-black mr-1">5,0</span>рейтинг в Яндекс
              на основе 1300+ отзывов
            </v-card-text>
          </div>
        </v-card>
        <!-- Высокий рейтинг -->
        <v-card class="rating-card rating-tl-rep"
                height="165px" elevation="0"
                color="var(--card-grey)">
          <div class="rating-card-container d-flex flex-column">
            <div class="d-flex">
              <div class="d-flex">
                <rating-tl-rep-wreath-left class="rating-tl-rep-left"/>
                <div class="mt-1">
                  <v-card-title class="rating-tl-rep-title ma-0 mt-2 pa-0">9.60</v-card-title>
                  <v-card-text class="rating-tl-rep-text ma-0 pa-0 text-center">из 10</v-card-text>
                </div>
                <rating-tl-rep-wreath-right class="rating-tl-rep-right"/>
              </div>
              <v-card-title class="rating-card-title ma-0 ml-2 pa-0">Высокий
                рейтинг
              </v-card-title>
            </div>
            <v-vertical-spacer/>
            <v-card-text class="rating-card-text ma-0 pa-0">Средний рейтинг отелей по оценкам
              гостей в TL: Reputation
            </v-card-text>
          </div>
        </v-card>
        <!-- Отели 4-5 звёзд -->
        <v-card class="rating-card rating-we-care"
                height="165px" elevation="0"
                color="var(--card-grey)">
          <div class="rating-card-container d-flex flex-column pt-1">
            <div class="d-flex">
              <div class="rating-we-care-star text-center pt-2">*</div>
              <v-card-title class="rating-card-title ma-0 ml-2 pa-0">Отели
                4-5 звёзд
              </v-card-title>
            </div>
            <v-vertical-spacer/>
            <v-card-text class="rating-card-text ma-0 pa-0">Заботимся о вашем
              отдыхе в каждой детали
            </v-card-text>
          </div>
        </v-card>
        <!-- Удобное бронирование -->
        <v-card class="rating-card rating-booking-comfort"
                height="165px" elevation="0"
                color="var(--card-grey)">
          <div class="rating-card-container d-flex flex-column">
            <div class="d-flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
                <path d="M29.5635 1.56925C30.0821 0.951201 31.0331 0.951201 31.5518 1.56925L34.4306 4.99967C34.8291 5.47438 35.5075 5.60119 36.0505 5.30246L39.9742 3.14367C40.6811 2.75473 41.5679 3.09825 41.8282 3.86194L43.2736 8.10069C43.4736 8.68726 44.0603 9.0506 44.6746 8.96817L49.1132 8.37258C49.9128 8.26527 50.6156 8.90591 50.5825 9.7121L50.399 14.1867C50.3737 14.8059 50.7895 15.3567 51.3921 15.5017L55.7461 16.5497C56.5305 16.7385 56.9544 17.5898 56.6324 18.3296L54.8449 22.4358C54.5975 23.004 54.7863 23.6679 55.2959 24.0208L58.9773 26.5708C59.6405 27.0303 59.7282 27.9772 59.1607 28.5507L56.0105 31.7339C55.5747 32.1744 55.5109 32.8616 55.8585 33.3747L58.3701 37.0824C58.8226 37.7505 58.5624 38.6652 57.8259 38.9949L53.7387 40.8251C53.1731 41.0785 52.8653 41.6962 53.0041 42.3003L54.0067 46.6649C54.1874 47.4513 53.6144 48.2101 52.8085 48.2517L48.336 48.4818C47.7171 48.5136 47.2071 48.9786 47.1182 49.592L46.4764 54.0241C46.3608 54.8227 45.5524 55.3233 44.786 55.0708L40.5323 53.6698C39.9437 53.4759 39.3001 53.7252 38.9958 54.265L36.7963 58.166C36.3999 58.8689 35.4652 59.0436 34.8418 58.5313L31.3815 55.6883C30.9028 55.295 30.2125 55.295 29.7336 55.6883L26.2735 58.5313C25.65 59.0436 24.7153 58.8689 24.319 58.166L22.1194 54.265C21.8151 53.7252 21.1714 53.4759 20.5829 53.6698L16.3292 55.0708C15.5629 55.3233 14.7544 54.8227 14.6387 54.0241L13.9969 49.592C13.9082 48.9786 13.3981 48.5136 12.7792 48.4818L8.3067 48.2517C7.50091 48.2101 6.92783 47.4513 7.10847 46.6649L8.11106 42.3003C8.2498 41.6962 7.94217 41.0785 7.37654 40.8251L3.28923 38.9949C2.55283 38.6652 2.2926 37.7505 2.74511 37.0824L5.25672 33.3747C5.60429 32.8616 5.5406 32.1744 5.10467 31.7339L1.95453 28.5507C1.38697 27.9772 1.4747 27.0303 2.13798 26.5708L5.8194 24.0208C6.32884 23.6679 6.51772 23.004 6.27035 22.4358L4.48281 18.3296C4.16075 17.5898 4.58463 16.7385 5.36909 16.5497L9.72311 15.5017C10.3256 15.3567 10.7416 14.8059 10.7162 14.1867L10.5326 9.7121C10.4996 8.90591 11.2023 8.26527 12.002 8.37258L16.4407 8.96817C17.0548 9.0506 17.6416 8.68726 17.8416 8.10069L19.2869 3.86194C19.5474 3.09825 20.4341 2.75473 21.1411 3.14367L25.0648 5.30246C25.6077 5.60119 26.2861 5.47438 26.6845 4.99967L29.5635 1.56925Z" fill="#DEC799"/>
                <path d="M29.1723 44.0523C27.6201 44.0523 26.3378 43.7037 25.3254 43.0062C24.3355 42.3089 23.5932 41.3527 23.0983 40.1379C22.6259 38.9231 22.3896 37.5396 22.3896 35.9873V24.2104C22.3896 22.6133 22.6259 21.2184 23.0983 20.0261C23.5707 18.8113 24.3018 17.8664 25.2917 17.1915C26.304 16.5166 27.5975 16.1792 29.1723 16.1792C30.747 16.1792 32.0293 16.5166 33.0192 17.1915C34.009 17.8664 34.7402 18.8113 35.2126 20.0261C35.6851 21.2184 35.9213 22.6133 35.9213 24.2104V35.9873C35.9213 37.5622 35.6738 38.9569 35.1789 40.1717C34.7065 41.3865 33.9752 42.3426 32.9855 43.04C31.9956 43.7149 30.7246 44.0523 29.1723 44.0523ZM29.1723 41.0828C30.0271 41.0828 30.6683 40.8354 31.0958 40.3404C31.5456 39.8455 31.8493 39.2157 32.0069 38.4507C32.1868 37.6634 32.2768 36.8535 32.2768 36.0211V24.1767C32.2768 23.2993 32.1981 22.4783 32.0406 21.7133C31.8831 20.926 31.5794 20.2961 31.1295 19.8236C30.702 19.3512 30.0497 19.115 29.1723 19.115C28.295 19.115 27.6312 19.3512 27.1814 19.8236C26.7314 20.2961 26.4277 20.926 26.2703 21.7133C26.1127 22.4783 26.0341 23.2993 26.0341 24.1767V36.0211C26.0341 36.8535 26.1127 37.6634 26.2703 38.4507C26.4502 39.2157 26.7652 39.8455 27.2151 40.3404C27.6876 40.8354 28.3399 41.0828 29.1723 41.0828ZM38.5918 46.2146V36.2469H39.5392V36.8699C39.695 36.6796 39.8896 36.5109 40.1233 36.3637C40.3569 36.208 40.6424 36.1301 40.9799 36.1301C41.3433 36.1301 41.6331 36.2167 41.8494 36.3897C42.0743 36.5541 42.2475 36.779 42.3686 37.0646C42.4897 37.3501 42.572 37.6703 42.6152 38.025C42.6584 38.3798 42.6801 38.7432 42.6801 39.1152V40.6986C42.6801 41.339 42.6282 41.8971 42.5243 42.3729C42.4205 42.8401 42.2345 43.2079 41.9662 43.476C41.7067 43.7356 41.3433 43.8654 40.876 43.8654C40.5732 43.8654 40.3092 43.7875 40.0843 43.6318C39.868 43.4761 39.6863 43.316 39.5392 43.1516V46.2146H38.5918ZM40.7333 43.1126C41.0188 43.1126 41.2307 43.0218 41.3692 42.8401C41.5163 42.6584 41.6115 42.3903 41.6547 42.0354C41.7067 41.672 41.7326 41.2351 41.7326 40.7246V39.1152C41.7326 38.6307 41.7067 38.2241 41.6547 37.8952C41.6115 37.5578 41.5163 37.3026 41.3692 37.1295C41.2222 36.9564 41.0015 36.8699 40.7073 36.8699C40.465 36.8699 40.2401 36.9348 40.0324 37.0646C39.8334 37.1943 39.669 37.3241 39.5392 37.4539V42.5675C39.6777 42.7147 39.8464 42.8445 40.0454 42.9569C40.253 43.0607 40.4824 43.1126 40.7333 43.1126Z" fill="black"/>
              </svg>
              <v-card-title class="rating-card-title ma-0 pa-0">Удобное
                бронирование
              </v-card-title>
            </div>
            <v-vertical-spacer/>
            <v-card-text class="rating-card-text ma-0 pa-0">Прямая цена без наценок
              агенств и партнерских
              комиссий
            </v-card-text>
          </div>
        </v-card>
        <!-- Актуальное (погода) -->
        <v-card class="rating-card rating-weather"
                height="165px" elevation="0"
                color="var(--card-grey)">
          <div class="rating-card-container d-flex flex-column pt-1">
            <div class="d-flex justify-space-between align-center">
              <v-card-title class="rating-card-title d-flex justify-space-between ma-0 pa-0 w-100">
                <div>Актуальное</div>
                <rating-yandex-arrow/>
              </v-card-title>
            </div>
            <v-vertical-spacer/>
            <v-card-text class="rating-card-text ma-0 pa-0">29 августа, Малооблачно,
              без осадков.
            </v-card-text>
            <v-vertical-spacer/>
            <div class="d-flex align-center">
              <v-card class="rating-weather-text py-2 mr-1 mr-1"
                      color="var(--golden-1)" elevation="0"
                      width="81px" height="35px">
                <div class="d-flex flex-row justify-center align-center">
                  <img :src="require(`~/assets/img/weather/Sunrise.png`)" alt="day"/>
                  <div>{{ weather['main'] ? weather['main']['temp'] : 0 }} °</div>
                </div>

              </v-card>
              <v-card class="rating-weather-text py-2 mx-1"
                      color="var(--golden-1)" elevation="0"
                      width="81px" height="35px">
                <div class="d-flex flex-row justify-center align-center mt-1">
                  <img :src="require(`~/assets/img/weather/SleepMode.png`)" alt="night"/>
                  <div>{{ weather['main'] ? weather['main']['feels_like'] : 0 }} °</div>
                </div>
              </v-card>
              <v-card class="rating-weather-text py-2 ml-1"
                      color="var(--golden-1)" elevation="0"
                      width="81px" height="35px">
                <div class="d-flex flex-row justify-center align-center">
                  <img :src="require(`~/assets/img/weather/Wind.png`)" alt="wind"/>
                  <div>{{ weather['wind'] ? weather['wind']['speed'] : 0 }} м/с</div>
                </div>
              </v-card>
            </div>
          </div>
        </v-card>
      </div>
    </section>

    <!-- пинтерест -->
    <section class="pinterest mt-8">
      <div class="pinterest-container">

        <v-card class="pinterest-card" height="485px"
                elevation="0" color="var(--card-grey)">
          <div class="pinterest-card-container general-container">
            <v-card-title class="pinterest-card-title d-inline-block mt-4">ДИЗАЙНЕРСКИЕ ОТЕЛИ
              КАК С КАРТИНОК <span class="mt-2">
                <img :src="require(`~/assets/img/pinterest.png`)" alt="#"/>
              </span>
            </v-card-title>

            <v-card class="pinterest-card-welcome general-container mt-6"
                    color="transparent" elevation="0">
              <div class="pinterest-card-welcome-container d-flex justify-end">
                <div class="pinterest-card-welcome-wrapper">
                  <v-card-text class="pinterest-card-text">Добро пожаловать в нашу группу отелей на Красной
                    Поляне, где комфорт и неповторимые виды сливаются
                    воедино. Насладитесь шикарными номерами,
                    удивительной кухней, расслабляющим спа-центром и
                    невероятными панорамными видами на окружающие
                    горы. Погрузитесь в атмосферу уюта и природной
                    красоты!</v-card-text>
                </div>
              </div>

              <v-card class="pinterest-video rounded-xxl"
                      elevation="0" width="100%" height="485px"
                      :img="require(`~/assets/img/pinterest-video.png`)">

                <v-card class="pinterest-video-aboutHotels d-flex justify-center align-center"
                        color="var(--dark-color)"
                        elevation="0" rounded="circle"
                        width="160px" height="160px">
                  <pinterest-rotate/>
                  <v-img class="pinterest-video-aboutHotels-play" :src="require(`~/assets/img/top-right-arrow.png`)"/>
                </v-card>
              </v-card>
            </v-card>
          </div>
        </v-card>

      </div>
    </section>

    <!-- Группа отелей -->
    <section class="hotelGroup">
      <div class="hotelGroup-container general-container">

        <v-card-title class="hotelGroup-title text-uppercase">ГРУППА ОТЕЛЕЙ
          POLYANA GROUP на КРАСНОЙ ПОЛЯНЕ
        </v-card-title>

        <div class="hotelGroup-line"></div>

        <v-expansion-panels class="hotelGroup-accordion" v-model="hotels" accordion>
          <v-expansion-panel class="hotelGroup-accordion-item transparent"
                             active-class=""
                             v-for="item in hotelList"
                             :key="item.id">
            <v-expansion-panel-header class="hotelGroup-accordion-item--header ma-0 pa-0" disable-icon-rotate>
              <div class="hotelGroup-accordion-item--header-container d-flex align-center my-2">
                <div class="hotelGroup-accordion-item--header-count d-flex justify-center align-center golden-gradient--text">
                  {{ item.id }}
                </div>

                <v-card-title class="hotelGroup-accordion-item--header-title text-uppercase golden-gradient--text">
                  {{ item.title }}
                </v-card-title>

                <v-spacer/>

                <v-card-title class="hotelGroup-accordion-item--header-price text-uppercase mr-8">
                  От {{ thousandSeparator(item.price) }} руб.
                </v-card-title>
              </div>

              <template v-slot:actions>
                <div class="hotelGroup-accordion-item--header-arrow d-flex justify-center align-center">
                  <img :src="require(`~/assets/img/top-right-arrow-2.png`)" alt="#">
                </div>
              </template>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              содержание вкладки
            </v-expansion-panel-content>

          </v-expansion-panel>
        </v-expansion-panels>

        <div class="hotelGroup-line"></div>

      </div>
    </section>


    <!-- Специальные предложения -->
    <section class="specialOffers">
      <div class="specialOffers-container general-container d-flex flex-row">

        <v-card class="specialOffers-info" color="transparent" elevation="0">
          <v-card-title class="specialOffers-info-title text-uppercase text-break">Специальные
            предложения и
            АКЦИИ отелЕЙ!
          </v-card-title>

          <div class="specialOffers-info-text">
            <v-card-text> &nbsp; Наша группа отелей предлагает множество
              специальных предложений и акций, таких как
              раннее бронирование со скидкой до 20%, программу
              лояльности для постоянных гостей, специальные
              пакеты с завтраками, ужинами и спа-услугами, а
              также скидки для групп.


              &nbsp; Следите за нашими предложениями на сайте или
              свяжитесь с нами для получения большей
              информации по телефону: <b>+7 989 009 5577.</b>
            </v-card-text>
          </div>

          <v-card-actions class="mt-4 pa-0">
            <v-btn class="font-weight-regular white--text rounded-xxl"
                   width="300px" height="55px"
                   elevation="0" color="golden-gradient">
              СМОТРЕТЬ ВСЕ АКЦИИ
            </v-btn>
          </v-card-actions>
        </v-card>

        <div class="specialOffers-slider">
          <div class="swiper overflow-hidden" ref="container">
            <div class="swiper-wrapper d-flex flex-row">
              <div class="swiper-slide" v-for="i in 3">
                <corner-card/>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>


    <!-- Развлекуха летом/зимой-->
    <section class="seasonPrograms">
      <div class="seasonPrograms-container general-container">

        <div class="seasonPrograms-group d-flex justify-space-between">
          <v-card class="seasonPrograms-summer seasonPrograms-item"
                  elevation="0" rounded="xxl"
                  width="63px" height="165px"
                  color="transparent">
            <div class="seasonPrograms-item-container">
              <div class="seasonPrograms-item-text summer d-flex justify-center align-center rounded-xxl">Летом</div>
            </div>
          </v-card>

          <v-card class="mx-2" rounded="xxl"
                  width="380px" height="165px"
                  elevation="0" color="var(--card-grey)">

          </v-card>

          <v-card class="mx-1" rounded="xxl"
                  width="380px" height="165px"
                  elevation="0" color="var(--card-grey)">

          </v-card>

          <v-card class="mx-1" rounded="xxl"
                  width="570px" height="165px"
                  elevation="0" color="var(--card-grey)">

          </v-card>

          <v-btn class="seasonPrograms-more ml-1 rounded-xxl"
                 width="63px" height="165px" elevation="0" color="transparent">
            <div class="seasonPrograms-more-container">
              <div class="seasonPrograms-more-text summer d-flex justify-center align-center rounded-xxl">Ещё</div>
            </div>
          </v-btn>
        </div>

        <div class="seasonPrograms-group d-flex mt-8">

          <v-card class="seasonPrograms-winter seasonPrograms-item"
                  elevation="0" rounded="xxl"
                  width="63px" height="165px"
                  color="transparent">
            <div class="seasonPrograms-item-container">
              <div class="seasonPrograms-item-text winter d-flex justify-center align-center rounded-xxl">Зимой</div>
            </div>
          </v-card>

          <v-card class="mx-2" rounded="xxl"
                  width="380px" height="165px"
                  elevation="0" color="var(--cold-grey)">

          </v-card>

          <v-card class="mx-1" rounded="xxl"
                  width="570px" height="165px"
                  elevation="0" color="var(--cold-grey)">

          </v-card>

          <v-card class="mx-1" rounded="xxl"
                  width="392px" height="165px"
                  elevation="0" color="var(--cold-grey)">

          </v-card>

          <v-btn class="seasonPrograms-more ml-1 rounded-xxl"
                 width="63px" height="165px" elevation="0" color="transparent">
            <div class="seasonPrograms-more-container">
              <div class="seasonPrograms-more-text winter d-flex justify-center align-center rounded-xxl">Ещё</div>
            </div>
          </v-btn>
        </div>

      </div>
    </section>

    <!-- Эксклюзивная скидка за звонок -->
    <section class="exclusive">
      <v-card class="exclusive-background d-flex justify-center align-center rounded-xxl"
              elevation="0" height="736px" color="transparent"
              :img="require('assets/img/exclusive-background.png')">

        <v-card class="exclusive-container d-flex align-center"
                width="100%" height="500px"
                max-width="1075px" elevation="0">

          <v-row class="ma-0 py-0 pr-10 pl-15">
            <v-col class="ma-0 pa-0">

              <v-card color="transparent" elevation="0" max-width="540px">
                <v-card-title class="exclusive-title text-uppercase ma-0 pt-3 pa-0">Эксклюзивная скидка
                  за быстрое бронирование
                </v-card-title>

                <div class="exclusive-text-container">
                  <v-card-text class="exclusive-text ma-0 mt-5 pa-0">Спешите забронировать номер в нашем отеле
                    и получите эксклюзивную скидку до 10% на
                    проживание.
                  </v-card-text>

                  <v-card-text class="exclusive-text ma-0 my-5 pa-0">
                    Просто оставьте свой номер в форме
                    бронирования и наслаждайтесь комфортом
                    по выгодной цене. Не упустите возможность
                    сэкономить и провести незабываемый отдых
                    в нашем уютном отеле.
                  </v-card-text>

                  <v-card-text class="exclusive-text-promotion ma-0 mt-4 pa-0">
                    <div>Акция действует до 11.11.2023 г .</div>
                    <div>Уточняйте условия акции по телефону:   <b>+7 989 009 5577.</b></div>
                  </v-card-text>
                </div>
              </v-card>
            </v-col>

            <v-col class="ma-0 pa-0" cols="auto">
              <feedback-form/>
            </v-col>

          </v-row>
        </v-card>

      </v-card>
    </section>

    <!-- Что посетить на красной поляне -->
    <section class="routeMap overflow-hidden">
      <v-card class="routeMap-background"
              elevation="0"
              height="904px"
              color="transparent"
              :img="require('assets/img/line-background.png')">

        <div class="routeMap-gradient up"></div>

        <div class="routeMap-container general-container">
          <v-card-title class="routeMap-title text-uppercase">ЧТО ПОСЕТИТЬ
            НА КРАСНОЙ ПОЛЯНЕ</v-card-title>

          <div class="d-flex justify-space-between">

            <div class="routeMap-line">
              <div class="routeMap-gradient up"></div>

              <route-map-line/>

            </div>

            <div>
              <v-card-subtitle class="routeMap-subtitle">ЛОКАЦИИ, ЭКСКУРСИИ</v-card-subtitle>
              <ul class="routeMap-text list">
                <li>Горный курорт «Красная Поляна»</li>
                <li>Поляна 540</li>
                <li>Казино Сочи</li>
                <li>Аквапарк Mountain Beach</li>
                <li>Музей друзей</li>
                <li>RED arena</li>
                <li>Парк «Времена года»</li>
                <li>Скейт-парк</li>
                <li>Байк-парк</li>
                <li>Поляна 960</li>
                <li>Веревочный парк</li>
                <li>Водопад Поликаря - высота 1600 метров</li>
                <li>Поляна 2200</li>
                <li>Маршрут Черная Пирамида</li>
                <li>Маршрут в Цирк-2</li>
                <li>Маршрут на перевал Седой и озеро Айсберг</li>
                <li>Поход на перевал Аигба</li>
                <li>Перевал Седой</li>
              </ul>
            </div>

            <v-card class="rounded-xxl pa-5"
                    width="415px" height="412px"
                    elevation="0" color="var(--card-grey)">
              <v-card-title class="routeMap-title--card text-uppercase py-3">ПОЛУЧИТЕ&nbsp;<b>ПОЛНЫЙ</b>
                СПИСОК АКТИВНОСТЕЙ </v-card-title>

              <div class="d-flex justify-space-between">
                <v-card-text class="routeMap-text pt-2 pb-5">37 страниц в формате
                  PDF (подробно о
                  ЛОКАЦИЯХ С
                  ОПИСАНИЕМ,
                  ЭКСКУРСИЯХ, чек-
                  листе перед
                  поездкой и т.д)
                </v-card-text>
                <div class="routeMap-phone">
                  <img class="d-block" alt="phone"
                       :src="require('assets/img/0da12411fb92130097858e070b805526.gif')">
                </div>
              </div>

              <v-card-actions class="pa-0">
                <v-btn class="routeMap-button rounded-xxl mx-auto"
                       width="359px" height="66px"
                       elevation="0" dark
                       color="golden-gradient">
                  СКАЧАТЬ PDF ФАЙЛ
                </v-btn>
              </v-card-actions>
            </v-card>

          </div>
        </div>

        <div class="routeMap-gradient down"></div>

      </v-card>
    </section>

    <section class="reviews">
      <div class="reviews-container general-container">

      </div>
    </section>

  </div>
</template>
<script lang="ts">
import {Component, Ref, Vue} from "vue-property-decorator"
import thousandSeparator from "../assets/scripts/thousandSeparator";
import {Swiper} from "swiper";
import openWeatherAPI from "~/assets/scripts/openWeatherAPI";
@Component({
  methods: {thousandSeparator}
})
export default class Pages extends Vue {
  @Ref()
  readonly container!: HTMLDivElement;
  weather: any = {}
  showButtons: boolean = true
  hotels: number = 0
  swiper: any = Swiper
  hotelList: any = [
    {
      id: '001',
      title: 'ULTIMA CLUB | HOTEL & SPA',
      price: 8_600,
    },
    {
      id: '002',
      title: 'COUNTRY HILLS | RESORT',
      price: 10_600,
    },
    {
      id: '003',
      title: 'IKOS POLYANA',
      price: 5_900,
    },
  ]

  async mounted () {
    this.resizer ()
    this.weather = await this.getWeather ()
    this.swiper = new Swiper (this.container, {
      slidesPerView: 'auto',
      spaceBetween: 25,
    })
    window.addEventListener('resize', () => {
      this.resizer()
    })
  }

  resizer () {
    return this.showButtons = window.innerWidth >= 960
  }

  getWeather () {
    return openWeatherAPI.getWeather()
  }
}
</script>

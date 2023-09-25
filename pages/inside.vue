<template>
  <div>

<!-- <nuxt-img src=""/> -->



    <section>
      <div>
        <v-card-title>
          Отдых на Красной Поляне <div class="golden-gradient">в отеле 5</div> с кинотеатром и панорамным видом на
          горы — идеальный способ  <div class="golden-gradient">расслабиться и насладиться</div> природой!
        </v-card-title>
      </div>
    </section>

    <section>
      <div>
        <div class="d-flex flex-row">

          <div class="example-element-container">
            <div class="example-element">

              <v-card-title class="section-title fontSize-xl--s text-uppercase" style="color: var(--dark-color);white-space: pre-line">Роскошный
                горный отдых
                с комфортом!</v-card-title>

              <v-card-text style="white-space: pre-line">&nbsp; <b>ULTIMA CLUB HOTEL & SPA</b> на Красной поляне - идеальное место для тех, кто ищет комфорт и роскошь. Мы предлагаем широкий выбор удобств, включая бассейн, спа-центр, хамам
                и ski room, кинотеатр на крыше с кальяной зоной. Наши
                номера оформлены с уникальным дизайном и предлагают великолепный вид на горы. Ресторан отеля предлагают
                блюда местной и мировой кухни, чтобы удовлетворить
                любой вкус.

                &nbsp;Также мы рады предложить нашим гостям выгодное бронирование. Забронируйте номер заранее и получите специальные предложения и скидки. Насладитесь
                роскошью и комфортом в нашем 5-звездочном отеле на
                Красной поляне!

                &nbsp;Следите за нашими предложениями на сайте или
                свяжитесь с нами для получения большей информации по телефону: <b>+7 989 009 5577.</b>
              </v-card-text>

              <v-card-actions>
                <v-btn elevation="0"
                       width="100%"
                       height="55px"
                       max-width="299px"
                       style="border-radius: 16px"
                       color="golden-gradient" dark>
                  ЗАБРОНИРОВАТЬ
                </v-btn>
              </v-card-actions>


            </div>
          </div>

          <div>

          </div>


          <style>
            .example-element-container { height: 2000px }
            .example-element {
              position: sticky; position: -webkit-sticky;
              top: 20px; z-index: 1; width: 100%; max-width: 520px;
            }
          </style>

        </div>
      </div>
    </section>

    <!-- Специальные предложения -->
    <special-offers/>

    <!-- Эксклюзивная скидка за звонок -->
    <exclusive/>

    <!-- Наши гости делятся своими впечатлениями об отдыхе -->
    <reviews/>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({})
export default class inside extends Vue {

}
</script>

<template>
  <section class="exclusive">
    <v-card class="exclusive-background d-flex flex-column align-center justify-center rounded-xxl pa-4"
            elevation="0" min-height="736px" color="transparent"
            :img="require('assets/img/exclusive-background.png')">

      <v-card class="exclusive-container d-flex justify-center align-center"
              width="100%" height="500px"
              max-width="1075px" elevation="0">

        <v-card class="exclusive-content pa-4" color="transparent" elevation="0" max-width="560px">
          <v-card-title class="exclusive-title section-title fontSize-xl--m text-uppercase ma-0 pt-3 pa-0">Эксклюзивная скидка
            за быстрое бронирование
          </v-card-title>

          <div class="exclusive-text-container">
            <v-card-text class="exclusive-text fontSize-m--l ma-0 mt-5 pa-0">Спешите забронировать номер в нашем отеле
              и получите эксклюзивную скидку до 10% на
              проживание.
            </v-card-text>

            <v-card-text class="exclusive-text fontSize-m--l ma-0 my-5 pa-0">
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

        <feedback-form class="exclusive-form inside"/>

      </v-card>

      <feedback-form class="exclusive-form outside"/>

    </v-card>
  </section>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class Exclusive extends Vue {

}
</script>

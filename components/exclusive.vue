<template>
  <section class="exclusive">
    <v-lazy>
      <v-card class="exclusive-background d-flex flex-column align-center justify-center rounded-xxl pa-4"
              elevation="0" min-height="626px" color="transparent" img="/img/exclusive/background.webp">

        <div class="exclusive-container d-flex justify-center align-center">
          <v-card class="exclusive-content pa-4" color="transparent" elevation="0" max-width="560px">
            <h3 class="exclusive-title section-title fontSize-xl--s text-uppercase">Эксклюзивная скидка
              за быстрое бронирование</h3>

            <div class="exclusive-text-container">
              <p class="exclusive-text my-4">Спешите забронировать номер в нашем отеле
                и получите эксклюзивную скидку до 10% на
                проживание.

                Просто оставьте свой номер в форме
                бронирования и наслаждайтесь комфортом
                по выгодной цене. Не упустите возможность
                сэкономить и провести незабываемый отдых
                в нашем уютном отеле.
              </p>

              <div class="exclusive-text-promotion">
                <span>Акция действует до 11.11.2023 г .</span>
                <span>Уточняйте условия акции по телефону: <b>+7 989 009 5577.</b></span>
              </div>
            </div>
          </v-card>

          <feedback-form class="exclusive-form inside"/>
        </div>
        <feedback-form class="exclusive-form outside"/>
      </v-card>
    </v-lazy>
  </section>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component export default class Exclusive extends Vue {
}
</script>
<style scoped>
/* exclusive */
.exclusive {
  margin-top: 70px;
}

.exclusive-container {
  width: 100%;
  height: 425px;
  max-width: 914px;
  border-radius: 23px;
  background: linear-gradient(268deg,
  rgba(217, 217, 217, 0.40) 3.77%,
  rgba(217, 217, 217, 0.20) 98.84%) !important;
  backdrop-filter: blur(35px) !important;
}

.exclusive-title {
  color: white;
  font-weight: 400;
  line-height: normal;
  white-space: pre-line;
}

.exclusive-text {
  color: white;
  font-size: 17px;
  font-weight: 400;
  line-height: 136.4%;
  white-space: pre-line;
  margin-bottom: 0 !important;
}

.exclusive-text-container {
  max-width: 492px;
}

.exclusive-text-promotion {
  display: flex;
  color: white;
  margin-top: 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 136.4%;
  white-space: pre-line;
  flex-direction: column;
}

.exclusive-text-promotion * {
  margin-top: 3px;
}

.exclusive-content {
  margin-right: 50px;
}

.exclusive-form.inside {
  display: block;
}

.exclusive-form.outside {
  display: none;
  margin-top: 40px;
}
</style>

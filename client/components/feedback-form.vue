<template>
  <v-card class="feedbackForm px-4 py-6" elevation="0"
          max-width="372px" color="var(--dark-color)">
    <v-form class="feedbackForm-container">
      <v-card-title class="feedbackForm-title ma-0 pa-0">
        В течение 5 минут перезвоним, сориентируем по стоимости  и предоставим скидку
      </v-card-title>

      <div class="feedbackForm-inputGroup mt-5">
        <label class="feedbackForm-inputGroup-label d-block mb-2" for="phone">Телефон</label>
        <v-text-field class="feedbackForm-inputGroup-input" solo
                      id="phone" placeholder="+7 (9XX) XXX-XX-XX"/>
      </div>

      <div class="feedbackForm-inputGroup mt-4">
        <label class="feedbackForm-inputGroup-label d-block mb-2" for="date">Дата заезда</label>
        <v-text-field class="feedbackForm-inputGroup-input" solo
                      id="date" placeholder="03.09.2023"/>
      </div>

      <v-card-actions class="feedbackForm-actions mt-4 pa-0">
        <v-btn class="feedbackForm-button" width="325px" height="55px" elevation="0" dark>
          Забронировать
        </v-btn>
      </v-card-actions>

      <v-card-text class="feedbackForm-conditions ma-0 mt-3 ml-1 pa-0">
        Нажимая кнопку вы соглашаетесь с условиями Политики конфиденциальности
      </v-card-text>

    </v-form>
  </v-card>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({})
export default class feedbackForm extends Vue {

}
</script>

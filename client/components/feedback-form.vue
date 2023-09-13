<template>
  <v-card class="feedbackForm px-4 py-6" elevation="0"
          max-width="372px" color="var(--dark-color)">
    <v-form class="feedbackForm-container">

      <v-card-title class="feedbackForm-title ma-0 pa-0">В течение 5 минут перезвоним,
        сориентируем по стоимости и
        предоставим скидку
      </v-card-title>

      <div class="feedbackForm-inputGroup mt-5">
        <label class="feedbackForm-inputGroup-label d-block mb-2" for="phone">Телефон</label>
        <v-text-field v-model="model.phone"
                      v-mask="'+7 (###) ###-##-##'"
                      id="phone" solo
                      class="feedbackForm-inputGroup-input"
                      prepend-inner-icon="mdi-phone"
                      placeholder="+7 (9XX) XXX-XX-XX"/>
      </div>

      <div class="feedbackForm-inputGroup mt-4">
        <label class="feedbackForm-inputGroup-label d-block mb-2" for="date">Дата заезда</label>
        <v-menu v-model="menu" ref="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                min-width="auto" offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-text-field v-model="model.date"
                          v-bind="attrs" v-on="on"
                          :placeholder="maxDate"
                          id="date" solo readonly clearable
                          class="feedbackForm-inputGroup-input"
                          prepend-inner-icon="mdi-calendar-month-outline"
                          placeholder="03.09.2023"/>
          </template>
          <v-date-picker v-model="model.date"
                         @change="save"
                         locale="ru-ru"
                         :max="maxDate"
                         min="1950-01-01"
                         no-title scrollable
                         :first-day-of-week="1"
                         :active-picker.sync="activePicker"/>
        </v-menu>
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
import {Vue, Component, Watch} from 'vue-property-decorator';
@Component({})
export default class FeedbackForm extends Vue {
  menu: boolean = false
  activePicker: any = null
  model: object = {
    phone: '',
    date: ''
  }

  get maxDate () {
    return (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000))
      .toISOString().substring(0, 10)
  }

  @Watch('menu')
  changeMenu (val: any) {
    val && setTimeout(() => (this.activePicker = 'YEAR'))
  }

  save (date: any) {
    // @ts-ignore
    this.$refs.menu.save(date)
  }

}
</script>

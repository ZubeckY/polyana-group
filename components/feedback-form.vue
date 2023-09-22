<template>
  <v-card class="feedbackForm px-4 py-6" elevation="0" max-width="372px" color="var(--dark-color)">
    <v-form class="feedbackForm-container">

      <v-card-title class="feedbackForm-title ma-0 pa-0">В течение 5 минут перезвоним,
        сориентируем по стоимости и
        предоставим скидку
      </v-card-title>

      <div class="feedbackForm-inputGroup mt-5">
        <label class="feedbackForm-inputGroup-label d-block mb-2" for="phone">Телефон</label>
        <v-text-field v-model="model.phone"
                      v-mask="'+7 (###) ###-##-##'" id="phone" solo
                      class="feedbackForm-inputGroup-input"
                      placeholder="+7 (9XX) XXX-XX-XX"
                      prepend-inner-icon="mdi-phone"/>
      </div>

      <div class="feedbackForm-inputGroup mt-4">
        <label class="feedbackForm-inputGroup-label d-block mb-2" for="date">Дата заезда</label>
        <v-menu v-model="menu" ref="menu" :close-on-content-click="false"
                transition="scale-transition" min-width="auto" offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-text-field v-model="model.date" v-bind="attrs" v-on="on"
                          :placeholder="maxDate" id="date" solo readonly clearable
                          class="feedbackForm-inputGroup-input"
                          prepend-inner-icon="mdi-calendar-month-outline"
                          placeholder="03.09.2023"/>
          </template>
          <v-date-picker v-model="model.date"
                         @change="save" locale="ru-ru"
                         :max="maxDate" min="1950-01-01"
                         no-title scrollable :first-day-of-week="1"
                         :active-picker.sync="activePicker"/>
        </v-menu>
      </div>

      <v-card-actions class="feedbackForm-actions mt-4 pa-0">
        <v-btn class="feedbackForm-button" width="325px" height="55px" elevation="0" dark>Забронировать</v-btn>
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
  model: object = {phone: '', date: ''}

  @Watch('menu')
  changeMenu (val: any) {val && setTimeout(() => (this.activePicker = 'YEAR'))}
  get maxDate () {return (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substring(0, 10)}
  save (date: any) {
    // @ts-ignore
    this.$refs.menu.save(date)
  }
}
</script>
<style lang="less" scoped>
/* feedbackForm */
.feedbackForm {
  border-radius: var(--bordrad23) !important;
  &-title {
    color: white; font-size: 16px !important; font-weight: 400 !important;
    text-transform: uppercase; white-space: pre-line !important;
  }
  &-inputGroup {
    &-label {color: white; font-size: 14px; font-style: normal; font-weight: 400; line-height: normal;}
    &-input {
      width: 325px;height: 50px;
      border-radius: 12px !important;
      background: #D9D9D9 !important;
      & * {box-shadow: none !important;}
    }
  }
  &-button {
    font-size: 16px; font-weight: 500; border-radius: 16px !important;
    background: linear-gradient(90deg,#CCAB6A -1.19%, #C1B397 177.44%) !important;
  }
  &-conditions {color: white; font-size: 12px !important; font-weight: 400 !important;}
}
</style>

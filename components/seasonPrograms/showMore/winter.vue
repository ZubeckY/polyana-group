<template>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <div class="seasonPrograms-summer seasonPrograms-item" v-bind="attrs" v-on="on">
        <div class="seasonPrograms-item-container">
          <div class="seasonPrograms-item-text winter d-flex justify-center align-center text-uppercase">ещё
          </div>
        </div>
      </div>
    </template>

    <div style="width: 100%; margin: 0 auto; max-width: 1240px;">
      <div class="py-4 px-5" style="background: #E8E8E8; border-radius: 16px;">
        <div>
          <div class="d-flex justify-space-between mx-3 mt-2 mb-6">
            <div style="color: #000;
                  font-size: 36px;
                  font-weight: 700;
                  line-height: normal;
                  text-transform: uppercase;">Зимой</div>
            <v-btn min-width="0" min-height="0" elevation="0"
                   color="var(--card-grey)" @click="dialog = false"
                   style="border-radius: 100px; width: 45px; height: 45px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M17.824 2.14761C17.7975 2.30314 17.6744 2.36637 17.589 2.45183C15.5475 4.4976 13.5086 6.54507 11.4542 8.57717C11.2064 8.82157 11.1893 8.94121 11.4474 9.19586C13.5034 11.2271 15.5372 13.2797 17.5907 15.3127C17.8291 15.5485 17.83 15.6707 17.589 15.8972C17.0079 16.4424 16.4448 17.0081 15.8979 17.5874C15.6765 17.8224 15.5552 17.8412 15.3134 17.596C13.2813 15.5408 11.2286 13.507 9.19741 11.4518C8.94703 11.1989 8.82739 11.2006 8.57786 11.4527C6.54577 13.5079 4.49401 15.5425 2.45935 17.5943C2.24401 17.8113 2.12865 17.8524 1.89963 17.6054C1.35785 17.0217 0.792144 16.4577 0.210202 15.9134C-0.0384693 15.681 -0.0666681 15.5588 0.19653 15.299C2.25341 13.2686 4.28721 11.216 6.33897 9.18133C6.56627 8.95659 6.59106 8.84122 6.34751 8.60024C4.28294 6.55789 2.23803 4.49589 0.175167 2.45183C-0.0487228 2.22965 -0.0666688 2.11856 0.171748 1.89552C0.763945 1.34178 1.33734 0.765818 1.89365 0.17533C2.10899 -0.0528319 2.21923 -0.0622316 2.44995 0.170203C4.49231 2.23392 6.55517 4.27883 8.59837 6.34255C8.83337 6.58011 8.94873 6.57498 9.18031 6.34169C11.2244 4.27883 13.2864 2.23392 15.3287 0.169348C15.5603 -0.064796 15.6706 -0.0459956 15.8825 0.177894C16.449 0.777781 17.0438 1.35118 17.6274 1.93568C17.6967 2.0049 17.7616 2.07839 17.8257 2.14675L17.824 2.14761Z"
                  fill="black"/>
              </svg>
            </v-btn>
          </div>
          <div class="d-flex justify-space-between flex-wrap">
            <!-- бесплатный трансфер до подъёмников -->
            <season-programs-free-transfer-lift/>
            <!-- ski-room хранилище для зимнего спортивного снаряжения -->
            <season-programs-ski-room/>
            <!-- подогреваемый бассеин -->
            <season-programs-heated-pool/>
          </div>
          <div class="d-flex justify-space-between flex-wrap mt-2">
            <season-programs-leisure/>
            <season-programs-atmosphere/>
          </div>
        </div>
      </div>
    </div>
  </v-dialog>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class Summer extends Vue {
  dialog: boolean = false
}
</script>

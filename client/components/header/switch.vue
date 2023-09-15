<template>
  <div class="header-info-wrapper align-self-center mr-16">
    <div class="header-info-switch">
      <v-btn-toggle v-model="season" active-class="active" mandatory
                    class="header-info-switch-container ma-0 pa-0">
        <v-btn class="header-info-switch--button font-weight-thin ma-0 pa-0"
               width="68px" height="27px" min-width="0" min-height="0" value="summer">
          <div>Лето</div>
          <img class="ml-1" width="15px" height="15px"
               :src="require(`~/assets/img/header/season/sun_1.png`)" alt="#"/>
        </v-btn>

        <v-btn class="header-info-switch--button font-weight-thin ma-0 pa-0"
               width="68px" height="27px" min-width="0" min-height="0" value="winter">
          <div>Зима</div>
          <img class="ml-1" width="15px" height="15px"
               :src="require(`~/assets/img/header/season/snowflake_1.png`)" alt="#"/>
        </v-btn>
      </v-btn-toggle>
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Ref, Vue} from "vue-property-decorator"
@Component({})
export default class HeaderSwitch extends Vue {
  season: string = 'summer'
}
</script>

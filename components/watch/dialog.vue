<template>
  <v-dialog class="watch-video-dialog"
            persistent
            v-model="dialog" max-width="800px"
            transition="scale-transition">
    <template v-slot:activator="{ on, attrs }">
      <div class="hotelsMenu-activator" v-bind="attrs" v-on="on">
        <slot></slot>
      </div>
    </template>
    <div class="watch-video-player">
      <div style="position:relative;  height: 480px">
        <v-btn @click="dialog = false"
               class="watch-video-player-close"
               min-height="0" min-width="0"
               width="34px" height="34px"
               elevation="0" rounded
               color="#ffffffb8" title="Назад">
          ╳
        </v-btn>
        <div class="watch-video-player-container">
          <iframe width="95%" height="450px"
                  style="border-radius: 19.55px;"
                  src="https://www.youtube.com/embed/igFTm9rzAco?si=CcV-gj-Wqr9eYJ1r"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </v-dialog>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class Dialog extends Vue {
  dialog: boolean = false
}
</script>
<style scoped lang="less">

</style>

<template>
  <v-dialog class="watch-video-dialog" persistent
            v-model="dialog" max-width="800px"
            transition="scale-transition">
    <template v-slot:activator="{ on, attrs }">
      <button class="hotelsMenu-activator" title="Смотреть видео" v-bind="attrs" v-on="on">
        <slot></slot>
      </button>
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
          <iframe width="95%" height="450px" style="border-radius: 19.55px;" :src="link"
                  title="YouTube video player" frameborder="0" allowfullscreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </div>
    </div>
  </v-dialog>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component({})
export default class Dialog extends Vue {

  @Prop() link!: string
  dialog: boolean = false
}
</script>

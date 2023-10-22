<template>
  <v-dialog class="gallery-dialog" v-model="localDialog" max-width="1240">
    <v-carousel class="gallery-carousel" hide-delimiters height="85vh">
      <v-btn @click="localDialog = false" class="gallery-carousel-close"
             min-height="0" min-width="0" width="34px" height="34px"
             elevation="0" color="#ffffffb8" title="Назад" rounded>
        ╳
      </v-btn>
      <template v-slot:prev="{ on, attrs }">
        <div v-bind="attrs" v-on="on">
          <carousel-button-prev/>
        </div>
      </template>
      <template v-slot:next="{ on, attrs }">
        <div v-bind="attrs" v-on="on">
          <carousel-button-next/>
        </div>
      </template>
      <v-carousel-item class="gallery-slide" v-for="(image, i) in data" :key="'sliderImage'+i">
        <div class="gallery-slide-wrapper">
          <nuxt-img class="gallery-slide-img" :src="image ? image : 'https://placehold.co/900x600/dddddd/dddddd'" alt="#"
                    loading="lazy" quality="80" :placeholder="[50]"/>
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-dialog>
</template>
<script lang="ts">
import {Vue, Component, Prop, Watch} from 'vue-property-decorator';

@Component({})
export default class Dialog extends Vue {
  @Prop() data: any
  @Prop() dialog!: boolean
  localDialog: boolean = false

  @Watch('dialog')
  changeLocalDialog() {
    if (this.localDialog !== this.dialog) {
      this.localDialog = this.dialog
    }
  }

  @Watch('localDialog')
  closeDialog () {
    if (this.localDialog !== this.dialog) {
      this.$emit('changeDialog', this.localDialog)
    }
  }
}
</script>

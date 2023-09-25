<template>
  <div class="footer-seeYouAtHotel-photo">
    <v-carousel class="footer-carousel" style="height: 290px"
                v-model="activeSlide" hide-delimiters>
<!--      <template v-slot:prev="{ on, attrs }">-->
<!--        <chevron-left  v-bind="attrs"-->
<!--                       v-on="on"/>-->
<!--      </template>-->
<!--      <template v-slot:next="{ on, attrs }">-->
<!--        <chevron-right v-bind="attrs"-->
<!--                       v-on="on"/>-->
<!--      </template>-->

      <v-carousel-item class="footer-slide"
                       v-for="(item, i) in activeChipPhotos"
                       :key="'photo-'+i">
        <lazy-footer-slide :item="item"/>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
@Component({})
export default class slider extends Vue {
  @Prop() activeChip!: any

  activeSlide: number = 0
  localMapping: any = [
    {
      id: 1,
      priority: 1,
      title: 'ULTIMA CLUB | HOTEL & SPA',
      photos: [
        {
          id: 11,
          priority: 1,
          url: 'https://via.placeholder.com/1024x1024/eee?text=4:3',
        },
        {
          id: 12,
          priority: 2,
          url: 'https://via.placeholder.com/1024x1024/eee?text=4:3',
        },
      ]
    },
    {
      id: 2,
      priority: 2,
      title: 'IKOS POLYANA',
      photos: [
        {
          id: 2,
          priority: 1,
          url: 'https://via.placeholder.com/1024x1024/eee?text=4:3',
        },
      ]
    },
    {
      id: 3,
      priority: 3,
      title: 'COUNTRY hills resort',
      photos: [
        {
          id: 3,
          priority: 1,
          url: 'https://via.placeholder.com/1024x1024/eee?text=4:3',
        },
      ]
    },
  ]

  @Watch('activeChip')
  changeController () {
    this.changeMapping();
    this.emptyActiveSlide ()
  };

  emptyActiveSlide () {return this.activeSlide = -1};
  get activeChipPhotos () {return this.localMapping[this.activeChip]['photos']}
  changeMapping () {this.$emit('changeMapping', this.localMapping[this.activeChip]['htmltagyandexmap'])};
}
</script>

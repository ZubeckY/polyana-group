<template>
  <div>
    <v-card-title class="footer-seeYouAtHotel-title footer-title pb-3">До встречи в наших отелях</v-card-title>
    <v-chip-group class="footer-seeYouAtHotel-group ml-3 mb-2"
                  v-model="activeChip" mandatory column
                  active-class="golden-gradient white--text">
      <v-chip class="footer-seeYouAtHotel-chip text-uppercase py-3 px-4"
              v-for="(item, i) in localMapping"
              :key="item.id" :value="i"
              color="#FAFAFD">
        {{ item ? item.title : '' }}
      </v-chip>
    </v-chip-group>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component({})
export default class SeeYouAtHotel extends Vue {
  activeChip: number = 0
  localMapping: any = [
    {
      id: 1,
      priority: 1,
      title: 'ULTIMA CLUB | HOTEL & SPA',
      photos: [
        {
          id: 11,
          priority: 1,
          url: 'https://via.placeholder.com/1024x1024/eee?text=Бла_бла_бла',
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
}
</script>

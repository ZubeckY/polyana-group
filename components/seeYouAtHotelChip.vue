<template>
  <v-chip class="seeYouAtHotel-chip text-uppercase py-3 px-4" color="#FAFAFD">{{ item['title'] ?? '' }}</v-chip>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
@Component({})
export default class SeeYouAtHotelChip extends Vue {
  @Prop() item: any
}
</script>

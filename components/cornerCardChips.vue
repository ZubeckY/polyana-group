<template>
  <div class="corner-card-header-container d-flex flex-row flex-wrap px-3 py-3">
    <v-chip class="corner-card-header-chip font-weight-medium mr-1 mb-1" color="var(--dark-color)" dark
            v-for="(category, j) in chips" :key="'cornerCardChip'+j">
      {{ category.title }}
    </v-chip>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
import supaBase from "~/assets/scripts/supaBase";
@Component({})
export default class CornerCardChips extends Vue {
  @Prop() item: any
  chips: any = []

  async created () {
    await this.getCategoriesToData ()
  }

  @Watch('item')
  async getCategoriesToData() {
    try {
      this.chips = []
      let {data, error} = await supaBase
        .from('categoryspecialoffer')
        .select('id, title')
        .in('id', [...this.item.idcategory])
        .order('id')
      this.chips = data
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

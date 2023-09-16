<template>
  <div class="d-flex flex-column">
    <v-btn class="nav-button-group--book" width="173px" height="40px" elevation="0" color="var(--golden-2)">Забронировать</v-btn>
    <v-btn class="nav-button-group--phone" width="173px" height="40px" elevation="0" dark>+7 989 009 5577</v-btn>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
@Component({})
export default class NavButtons extends Vue {
}
</script>

<template>
  <v-app>
    <v-main style="background-color: var(--background); min-height: 100vh">
      <div class="d-flex flex-column total-container mx-auto px-4">
        <nuxt/>
        <v-vertical-spacer/>
        <footer-comp/>
      </div>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component ({})
export default class Default extends Vue {
}
</script>

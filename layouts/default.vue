<template>
  <v-app>
    <v-main>
      <v-card color="var(--background)" elevation="0" rounded="0" min-height="100vh">
        <div class="d-flex flex-column total-container mx-auto px-4">
          <lazy-is-demo/>
          <nuxt/>
          <lazy-v-vertical-spacer/>
          <lazy-footer-comp/>
        </div>
      </v-card>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component ({})
export default class Default extends Vue {
}
</script>

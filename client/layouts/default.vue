<template>
  <v-app>
    <v-main>
      <v-card class="mt-0 pt-4" color="var(--background)"
              elevation="0" rounded="0" min-height="100vh">
        <div class="total-container mx-auto">

          <nuxt />
          <footer-comp/>

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

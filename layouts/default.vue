<template>
  <v-app>
    <v-main style="background-color: var(--background);">
      <div class="d-flex flex-column total-container mx-auto px-4">
        <nuxt/>
        <v-vertical-spacer/>
        <footer-comp/>
      </div>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import travelline from "~/assets/scripts/travelline";

if (process.client) {
  (function (m, e, t, r, i, k, a) {
    travelline(window)

    m[i] = m[i] || function () {
      (m[i].a = m[i].a || []).push(arguments)
    };
    m[i].l = 1 * new Date();
    for (let j = 0; j < document.scripts.length; j++) {
      if (document.scripts[j].src === r) {
        return;
      }
    }
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
  })
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  ym(95763245, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true
  });
}

export default {
  name: 'Default',
  layout: 'empty'
}
</script>
<noscript>
<div><img src="https://mc.yandex.ru/watch/95763245" style="position:absolute; left:-9999px;" alt=""/></div>
</noscript>
<!-- /Yandex.Metrika counter -->

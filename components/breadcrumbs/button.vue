<template>
  <button class="breadcrumbs-button" @click="getBack" title="Назад">
    <chevron-left/>
  </button>
</template>
<script>
export default {
  name: 'Button',
  methods: {
    getBack() {
      if (process.client) {
        if (!document.referrer) {
          return location.href = '/'
        } else if (document.referrer.split('?')[0] === window.location.href.split('?')[0]) {
          return location.href = '/'
        } else {
          return location.href = document.referrer
        }
      }
    }
  }
}
</script>

<template>
  <button class="carousel-button-prev" title="Назад">
    <chevron-left/>
  </button>
</template>
<script>
export default {
  name: "Prev"
}
</script>
<style scoped>
.carousel-button-prev {
  display: flex;
  width: 34px;
  height: 34px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background: #ffffffb8;
  border-radius: 50%;
}
</style>

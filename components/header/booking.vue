<template>
  <div class="header-booking">
    <!-- start TL Search form script -->
    <div id='block-search'>
      <div id='tl-search-form' class='tl-container'>
        <a href='https://www.travelline.ru/products/tl-hotel/' target='_blank'>TravelLine</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderBooking"
}
</script>
<style>
#block-search, #block-search * {
  box-sizing: border-box;
}

#block-search {
  border-radius: 12px;
  background: linear-gradient(270deg, rgba(217, 217, 217, 0.40) 2.1%, rgba(217, 217, 217, 0.20) 103.66%);
  backdrop-filter: blur(25px);
}
</style>

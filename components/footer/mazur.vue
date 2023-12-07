<template>
  <div class="footer-mazur">
    <div class="footer-mazur-container general-container">
      <div class="footer-mazur-copyright">Ⓒpolyana group | {{ getTodayYear }}</div>
      <a class="footer-mazur-privacyPolicy" href="/files/fz152.pdf" download>Политика конфиденциальности</a>
      <a class="footer-mazur-mailPolyana" href="mailto:info@polyanagroup.ru">info@polyanagroup.ru</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterMazur",
  computed: {
    getTodayYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<script setup lang="ts">
defineProps<{
  lang: 'en' | 'es'
}>()
</script>

<template>
  <footer class="site-footer">
    <div class="footer-main">
      <div>
        <div class="footer-brand">L&B</div>
        <p class="footer-title">LASHES & BROWS<br />MONTRÉAL</p>
      </div>

      <div class="footer-copy">
        <p>{{ lang === 'en' ? 'Personalized lash & brow artistry.' : 'Diseño personalizado de pestañas y cejas.' }}</p>
        <a href="tel:+14384627248">+1 (438) 462-7248</a>
      </div>

      <div class="footer-links">
        <a href="#services">{{ lang === 'en' ? 'Services' : 'Servicios' }}</a>
        <a href="#gallery">{{ lang === 'en' ? 'Gallery' : 'Galería' }}</a>
        <a href="#contact">{{ lang === 'en' ? 'Book' : 'Reservar' }}</a>
        <NuxtLink :to="lang === 'en' ? '/es' : '/'">{{ lang === 'en' ? 'Español' : 'English' }}</NuxtLink>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© {{ new Date().getFullYear() }} Lashes & Brows Montréal</span>
      <span>MONTRÉAL · QUÉBEC</span>
    </div>
<!-- Developer Credit -->
<div class="footer-credit">

  <span class="footer-credit-label">
    Website crafted by
  </span>

  <a
    href="https://www.ingeniumbright.com/fr"
    target="_blank"
    rel="noopener noreferrer"
    class="ingenium-credit"
    aria-label="IngeniumBright - Technology and Web Development"
  >
    <span class="ingenium-mark">
      <img
        src="/images/LogoIB.png"
        alt="IngeniumBright"
      >
    </span>

    <span class="ingenium-name">
      IngeniumBright
    </span>

    <span class="ingenium-arrow">
      ↗
    </span>
  </a>

</div>
  </footer>
</template>
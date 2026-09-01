<script setup lang="ts">
defineProps<{
  lang: 'en' | 'es'
}>()
</script>

<template>
  <footer class="site-footer">

    <div class="footer-main">

      <!-- BRAND -->
      <div>
        <div class="footer-brand">L&B</div>

        <p class="footer-title">
          LASHES & BROWS<br />
          MONTRÉAL
        </p>
      </div>


      <!-- CONTACT -->
      <div class="footer-copy">

        <p>
          {{
            lang === 'en'
              ? 'Personalized lash & brow artistry.'
              : 'Diseño personalizado de pestañas y cejas.'
          }}
        </p>

        <a href="tel:+14384627248">
          +1 (438) 462-7248
        </a>

      </div>


      <!-- NAVIGATION -->
      <div class="footer-links">

        <a href="#services">
          {{ lang === 'en' ? 'Services' : 'Servicios' }}
        </a>

        <a href="#gallery">
          {{ lang === 'en' ? 'Gallery' : 'Galería' }}
        </a>

        <a href="#contact">
          {{ lang === 'en' ? 'Book' : 'Reservar' }}
        </a>

        <NuxtLink :to="lang === 'en' ? '/es' : '/'">
          {{ lang === 'en' ? 'Español' : 'English' }}
        </NuxtLink>

      </div>

    </div>


    <!-- SOCIAL MEDIA -->
<!-- SOCIAL MEDIA -->
<div class="footer-social">

  <span class="footer-social-label">
    {{ lang === 'en' ? 'Follow us' : 'Síguenos' }}
  </span>

  <div class="footer-social-links">

    <!-- Instagram -->
    <a
      href="https://www.instagram.com/lashes_browsmontreal"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      class="group inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
    >
      <span
        class="social-icon flex h-9 w-9 items-center justify-center rounded-full border border-current/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-current/10 group-hover:shadow-sm"
        aria-hidden="true"
      >
        <svg
          class="h-5 w-5 transition-transform duration-300 group-hover:scale-105"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            stroke-width="1.7"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            stroke-width="1.7"
          />
          <circle
            cx="17.5"
            cy="6.5"
            r="1"
            fill="currentColor"
          />
        </svg>
      </span>

      <span>Instagram</span>
    </a>


    <!-- TikTok -->
    <a
      href="https://www.tiktok.com/@lashesbrowsmontreal"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="TikTok"
      class="group inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
    >
      <span
        class="social-icon flex h-9 w-9 items-center justify-center rounded-full border border-current/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-current/10 group-hover:shadow-sm"
        aria-hidden="true"
      >
        <svg
          class="h-5 w-5 transition-transform duration-300 group-hover:scale-105"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5 4C15.8 6.1 17 7.5 19 7.7V10.5C17.7 10.4 16.5 10 15.5 9.3V15.1C15.5 18.2 13.4 20 10.7 20C8.1 20 6 18.3 6 15.7C6 13.1 8 11.2 10.8 11.2C11.2 11.2 11.6 11.3 12 11.4V14.3C11.6 14.1 11.2 14 10.8 14C9.7 14 8.9 14.7 8.9 15.7C8.9 16.7 9.6 17.3 10.6 17.3C11.8 17.3 12.5 16.5 12.5 15V4H15.5Z"
            fill="currentColor"
          />
        </svg>
      </span>

      <span>TikTok</span>
    </a>


    <!-- Facebook -->
    <a
      href="https://www.facebook.com/arteentumiradaoficial"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      class="group inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
    >
      <span
        class="social-icon flex h-9 w-9 items-center justify-center rounded-full border border-current/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-current/10 group-hover:shadow-sm"
        aria-hidden="true"
      >
        <svg
          class="h-5 w-5 transition-transform duration-300 group-hover:scale-105"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 8H16V5H14C11.8 5 10 6.8 10 9V11H8V14H10V20H13V14H16L16.5 11H13V9C13 8.4 13.4 8 14 8Z"
            fill="currentColor"
          />
        </svg>
      </span>

      <span>Facebook</span>
    </a>

  </div>

</div>

    <!-- FOOTER BOTTOM -->
    <div class="footer-bottom">

      <span>
        © {{ new Date().getFullYear() }} Lashes & Brows Montréal
      </span>

      <span>
        MONTRÉAL · QUÉBEC
      </span>

    </div>


    <!-- DEVELOPER CREDIT -->
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
          />

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

<style scoped>
.site-footer {
  position: relative;
  overflow: hidden;
}

/* =========================
   SOCIAL MEDIA
========================= */

.footer-social-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.footer-social-links a {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  text-decoration: none;
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    color 0.3s ease,
    opacity 0.3s ease;
  transform-origin: center;
}

.footer-social-links a:hover {
  transform: translateY(-4px) scale(1.06);
}

/* =========================
   ICON
========================= */

.social-icon {
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.35s ease;
}

.social-icon svg {
  width: 100%;
  height: 100%;
  display: block;
}

.footer-social-links a:hover .social-icon {
  transform: scale(1.28);
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.18));
}

/* =========================
   TEXT GROW
========================= */

.footer-social-links a > span:last-child {
  display: inline-block;

  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    letter-spacing 0.35s ease;
}

.footer-social-links a:hover > span:last-child {
  transform: translateX(2px);
  letter-spacing: 0.04em;
}

/* =========================
   INDIVIDUAL SOCIAL HOVER
========================= */

.footer-social-links a:nth-child(1):hover {
  color: #c13584;
}

.footer-social-links a:nth-child(2):hover {
  color: #74636b;
}

.footer-social-links a:nth-child(3):hover {
  color: #1877f2;
}

/* =========================
   NAVIGATION GROW
========================= */

.footer-links a,
.footer-links :deep(a) {
  display: inline-block;

  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    letter-spacing 0.35s ease,
    opacity 0.3s ease;
}

.footer-links a:hover,
.footer-links :deep(a:hover) {
  transform: translateX(5px);
  letter-spacing: 0.035em;
}

/* =========================
   PHONE
========================= */

.footer-copy a {
  display: inline-block;

  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    letter-spacing 0.35s ease;
}

.footer-copy a:hover {
  transform: translateX(4px);
  letter-spacing: 0.025em;
}

/* =========================
   INGENIUM CREDIT
========================= */

.ingenium-credit {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;

  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    letter-spacing 0.35s ease;
}

.ingenium-credit:hover {
  transform: translateY(-3px) scale(1.035);
  letter-spacing: 0.025em;
}

.ingenium-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.35s ease;
}

.ingenium-credit:hover .ingenium-mark {
  transform: scale(1.15) rotate(-3deg);
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.2));
}

.ingenium-mark img {
  width: 28px;
  height: 28px;
  object-fit: contain;
  display: block;
}

.ingenium-arrow {
  display: inline-block;

  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.ingenium-credit:hover .ingenium-arrow {
  transform: translate(3px, -3px) scale(1.15);
}

/* =========================
   BRAND
========================= */

.footer-brand {
  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    letter-spacing 0.4s ease;
}

.footer-brand:hover {
  transform: scale(1.08);
  letter-spacing: 0.08em;
}

/* =========================
   ACCESSIBILITY
========================= */

@media (prefers-reduced-motion: reduce) {
  .site-footer *,
  .site-footer *::before,
  .site-footer *::after {
    transition: none !important;
    animation: none !important;
  }
}
</style>
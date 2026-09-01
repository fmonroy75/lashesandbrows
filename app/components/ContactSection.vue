<script setup lang="ts">
import { common } from '~/composables/useSite'

const props = defineProps<{
  lang: 'en' | 'es'
}>()
</script>

<template>

  <section
    id="contact"
    class="booking-section dark-section"
  >

    <div class="booking-inner">

      <p class="eyebrow">
        07 / {{ lang === 'es' ? 'TU PRÓXIMO LOOK' : 'YOUR NEXT LOOK' }}
      </p>

      <h2>
        {{ lang === 'es' ? '¿Lista para resaltar' : 'Ready to define' }}<br />
        <em>{{ lang === 'es' ? 'tu mirada?' : 'your look?' }}</em>
      </h2>

      <p>
        {{ lang === 'es' ? 'Diseñemos un estilo completamente único para ti.' : "Let's create something that feels completely yours." }}
      </p>

      <div class="booking-actions">

        <!-- WHATSAPP -->
        <a
          class="booking-button light"
          :href="`https://wa.me/${common.whatsapp}?text=${lang === 'es' ? 'Hola%20Lashes%20%26%20Brows%20Montr%C3%A9al%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita.' : 'Hello%20Lashes%20%26%20Brows%20Montr%C3%A9al%2C%20I%27d%20like%20to%20book%20an%20appointment.'}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            {{ lang === 'es' ? 'Reservar por WhatsApp' : 'Book via WhatsApp' }}
          </span>
          <span class="arrow">
            ↗
          </span>
        </a>

        <!-- PHONE -->
        <a
          class="contact-phone"
          :href="`tel:${common.phone.replace(/[^0-9+]/g, '')}`"
        >
          {{ common.phone }}
        </a>

        <!-- GET DIRECTIONS LINK -->
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=120+Av+Duranceau,+Lachine,+QC,+Canada"
          target="_blank"
          rel="noopener noreferrer"
          class="directions-link"
        >
          📍 {{ lang === 'es' ? 'Cómo llegar (120 Av Duranceau, Lachine)' : 'Get directions (120 Av Duranceau, Lachine)' }} ↗
        </a>

      </div>

      <!-- EMBEDDED MAP -->
      <div class="contact-map-wrap">
        <iframe
          src="https://maps.google.com/maps?q=120+Av+Duranceau,+Lachine,+QC,+Canada&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="280"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Google Maps - 120 Av Duranceau, Lachine, QC"
          class="contact-map-iframe"
        ></iframe>
      </div>

    </div>

  </section>

</template>

<style scoped>
.directions-link {
  color: #fff;
  font-size: .75rem;
  letter-spacing: .08em;
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: opacity 0.2s ease;
  margin-left: auto;
}

.directions-link:hover {
  opacity: 0.8;
}

.contact-map-wrap {
  margin-top: 2.5rem;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: #111;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.contact-map-iframe {
  display: block;
  filter: grayscale(40%) contrast(1.05);
  transition: filter 0.3s ease;
}

.contact-map-wrap:hover .contact-map-iframe {
  filter: grayscale(0%);
}

@media (max-width: 768px) {
  .directions-link {
    margin-left: 0;
    width: 100%;
  }
}
</style>
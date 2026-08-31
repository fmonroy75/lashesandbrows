<script setup lang="ts">

import { common } from '~/composables/useSite'

</script>

<template>

  <section
    id="contact"
    class="booking-section dark-section"
  >

    <div class="booking-inner">

      <p class="eyebrow">
        07 / YOUR NEXT LOOK
      </p>

      <h2>
        Ready to define<br />
        <em>your look?</em>
      </h2>

      <p>
        Let's create something that feels completely yours.
      </p>

      <div class="booking-actions">

        <!-- =====================================================
             WHATSAPP
        ====================================================== -->

        <a
          class="booking-button light"
          :href="`https://wa.me/${common.whatsapp}?text=Hello%20Lashes%20%26%20Brows%20Montr%C3%A9al%2C%20I%27d%20like%20to%20book%20an%20appointment.`"
          target="_blank"
          rel="noopener noreferrer"
        >

          <span>
            Book via WhatsApp
          </span>

          <span class="arrow">
            ↗
          </span>

        </a>


        <!-- =====================================================
             PHONE
        ====================================================== -->

        <a
          class="contact-phone"
          :href="`tel:${common.phone.replace(/[^0-9+]/g, '')}`"
        >
          {{ common.phone }}
        </a>

      </div>

    </div>

  </section>

</template>
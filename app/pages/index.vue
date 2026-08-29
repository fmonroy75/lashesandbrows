<script setup lang="ts">
import { common, studioImage } from '~/composables/useSite'

const lang = 'en' as const

/* =========================================================
   SEO
========================================================= */

useHead({
  title: 'Lashes & Brows Montréal | Luxury Lash & Brow Artistry',

  link: [
    {
      rel: 'canonical',
      href: `${common.domain}/`
    },
    {
      rel: 'alternate',
      hreflang: 'en',
      href: `${common.domain}/`
    },
    {
      rel: 'alternate',
      hreflang: 'es',
      href: `${common.domain}/es`
    }
  ],

  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BeautySalon',
        '@id': `${common.domain}/#business`,

        name: 'Lashes & Brows Montréal',

        url: common.domain,

        telephone: common.phone,

        image: `${common.domain}${studioImage.src}`,

        description:
          'Personalized lash and brow artistry in Montréal, specializing in customized eyelash extensions, lash lifts, brow lamination and professional brow design.',

        areaServed: {
          '@type': 'City',
          name: 'Montréal'
        },

        serviceType: [
          'Eyelash Extensions',
          'Classic Eyelash Extensions',
          'Hybrid Eyelash Extensions',
          'Volume Eyelash Extensions',
          'Mega Volume Eyelash Extensions',
          'Lash Lift',
          'Brow Lamination',
          'Brow Design',
          'Brow Shaping',
          'Visagism'
        ]
      })
    },

    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${common.domain}/#website`,
        name: 'Lashes & Brows Montréal',
        url: common.domain,
        inLanguage: 'en'
      })
    }
  ]
})

useSeoMeta({
  description:
    'Personalized eyelash extensions, lash lift, brow design and brow lamination in Montréal. Elegant lash and brow artistry tailored to your features and style.',

  ogTitle: 'Lashes & Brows Montréal',

  ogDescription:
    'Personalized lash & brow artistry in Montréal.',

  ogUrl: `${common.domain}/`,

  ogType: 'website',

  twitterCard: 'summary_large_image'
})


/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    number: '01',
    title: 'Classic Lashes',
    text: 'Natural, refined and timeless definition.'
  },
  {
    number: '02',
    title: 'Hybrid Lashes',
    text: 'The perfect balance between softness and volume.'
  },
  {
    number: '03',
    title: 'Volume Lashes',
    text: 'Fuller, dimensional and beautifully expressive.'
  },
  {
    number: '04',
    title: 'Mega Volume',
    text: 'A bold, sophisticated statement for a dramatic look.'
  },
  {
    number: '05',
    title: 'Lash Lift',
    text: 'A beautifully lifted effect using your natural lashes.'
  },
  {
    number: '06',
    title: 'Brow Artistry',
    text: 'Design, definition, lamination and personalized shaping.'
  }
]


/* =========================================================
   SIGNATURE STYLES
========================================================= */

const styles = [
  'Wispy',
  'Foxy',
  'Anime',
  'Medusa',
  'Custom Design'
]


/* =========================================================
   FAQ
========================================================= */

const faq = [
  {
    q: 'How do I choose the right lash style?',

    a:
      'Your lash style can be adapted to your eye shape, natural lashes, facial features and desired level of definition. A personalized consultation helps determine the most harmonious result.'
  },

  {
    q: 'What is the difference between classic, hybrid and volume lashes?',

    a:
      'Classic lashes create a clean, natural effect. Hybrid combines classic and volume techniques for texture and balance. Volume creates a fuller, softer and more dimensional appearance.'
  },

  {
    q: 'What is brow visagism?',

    a:
      'Brow visagism is a personalized approach to brow design that considers facial proportions, eye shape and natural brow structure to create balance and harmony.'
  }
]
</script>


<template>

  <div class="site">

    <!-- =====================================================
         HEADER
    ====================================================== -->

    <SiteHeader :lang="lang" />


    <main>

      <!-- ===================================================
           HERO
      ==================================================== -->

      <section class="hero">

        <div class="hero-copy">

          <p class="eyebrow reveal">
            LASHES & BROWS · MONTRÉAL
          </p>

          <h1 class="hero-title reveal reveal-delay-1">
            Your look.<br />
            <em>Your signature.</em>
          </h1>

          <p class="hero-text reveal reveal-delay-2">
            Personalized lash and brow artistry created to complement
            your eyes, your features and your style.
          </p>

          <div class="reveal reveal-delay-3">

            <BookingButton
              label="Book an appointment"
            />

          </div>

        </div>


        <div class="hero-image-wrap">

          <img
            src="/images/lash-01.jpg"
            alt="Luxury eyelash extension result"
            class="hero-image"
            fetchpriority="high"
          />

          <div class="hero-caption">
            PERSONALIZED BEAUTY<br />
            IN MONTRÉAL
          </div>

          <div class="hero-number">
            01 / 04
          </div>

        </div>

      </section>



      <!-- ===================================================
           INTRO
      ==================================================== -->

      <section class="intro section-pad">

        <div class="intro-grid">

          <div>

            <p class="eyebrow">
              THE ART OF PERSONALIZATION
            </p>

            <h2>
              Beauty should feel<br />
              <em>uniquely yours.</em>
            </h2>

          </div>


          <div class="intro-text">

            <p class="large-copy">
              Every face is different. Every set should be too.
            </p>

            <p>
              From refined classics to expressive volume and
              signature lash styles, every design is considered
              around your natural features and the look you want
              to create.
            </p>

          </div>

        </div>

      </section>



      <!-- ===================================================
           SERVICES
      ==================================================== -->

      <section
        id="services"
        class="services section-pad"
      >

        <SectionTitle
          eyebrow="01 / SERVICES"
          title="Precision. <em>Elegance.</em>"
          text="A curated range of lash and brow services designed around you."
        />


        <div class="service-list">

          <article
            v-for="service in services"
            :key="service.number"
            class="service-row"
          >

            <span class="service-number">
              {{ service.number }}
            </span>

            <h3>
              {{ service.title }}
            </h3>

            <p>
              {{ service.text }}
            </p>

            <span class="service-arrow">
              ↗
            </span>

          </article>

        </div>

      </section>



      <!-- ===================================================
           SIGNATURE STYLES
      ==================================================== -->

      <section
        id="styles"
        class="styles-section dark-section section-pad"
      >

        <div class="styles-layout">

          <div>

            <p class="eyebrow">
              02 / SIGNATURE STYLES
            </p>

            <h2>
              One eye.<br />
              <em>Many possibilities.</em>
            </h2>

            <p class="dark-copy">
              Choose a signature direction or create a completely
              customized look. Your features are the starting point.
            </p>

          </div>


          <div class="style-list">

            <div
              v-for="(style, index) in styles"
              :key="style"
              class="style-item"
            >

              <span>
                0{{ index + 1 }}
              </span>

              <strong>
                {{ style }}
              </strong>

              <span>
                ↗
              </span>

            </div>

          </div>

        </div>

      </section>



      <!-- ===================================================
           GALLERY
      ==================================================== -->

      <section
        id="gallery"
        class="gallery-section section-pad"
      >

        <SectionTitle
          eyebrow="03 / OUR WORK"
          title="The result speaks <em>for itself.</em>"
          text="A selection of lash artistry from Lashes & Brows Montréal."
        />

        <LashesGallery />

      </section>



      <!-- ===================================================
           VISAGISM
      ==================================================== -->

      <section class="visagism section-pad">

        <div class="visagism-image">

          <img
            src="/images/lash-04.jpg"
            alt="Detailed lash design from a side profile"
            loading="lazy"
          />

        </div>


        <div class="visagism-copy">

          <p class="eyebrow">
            04 / VISAGISM
          </p>

          <h2>
            Your face is unique.<br />
            <em>Your brows should be too.</em>
          </h2>

          <p>
            Brow design is more than following a trend.
            Through a personalized approach to proportions,
            eye shape and natural brow structure, the goal is
            to create balance and harmony with your features.
          </p>

          <a
            href="#contact"
            class="text-link"
          >
            Discover personalized brow design
            <span>↗</span>
          </a>

        </div>

      </section>



      <!-- ===================================================
           STUDIO
      ==================================================== -->

      <section
        id="studio"
        class="studio dark-section"
      >

        <div class="studio-image">

          <img
            :src="studioImage.src"
            :alt="studioImage.alt"
            loading="lazy"
          />

        </div>


        <div class="studio-copy">

          <p class="eyebrow">
            05 / THE STUDIO
          </p>

          <h2>
            A private space<br />
            <em>for your beauty ritual.</em>
          </h2>

          <p>
            A calm, intimate studio in Montréal where precision,
            comfort and personalized beauty come together.
          </p>

          <a
            href="#contact"
            class="text-link light-link"
          >
            Book your experience
            <span>↗</span>
          </a>

        </div>

      </section>



      <!-- ===================================================
           FAQ
      ==================================================== -->

      <section
        class="faq section-pad"
      >

        <SectionTitle
          eyebrow="06 / QUESTIONS"
          title="Good to <em>know.</em>"
          text="Answers to common questions about lashes and brows."
        />


        <div class="faq-list">

          <details
            v-for="item in faq"
            :key="item.q"
          >

            <summary>

              <span>
                {{ item.q }}
              </span>

              <span>
                +
              </span>

            </summary>


            <p>
              {{ item.a }}
            </p>

          </details>

        </div>

      </section>



      <!-- ===================================================
           BOOKING
      ==================================================== -->

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


            <a
              class="contact-phone"
              :href="`tel:${common.phone.replace(/[^0-9+]/g, '')}`"
            >
              {{ common.phone }}
            </a>

          </div>

        </div>

      </section>

    </main>


    <!-- =====================================================
         FOOTER
    ====================================================== -->

    <SiteFooter :lang="lang" />

  </div>

</template>
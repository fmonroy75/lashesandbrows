<script setup lang="ts">
import { common, studioImage } from '~/composables/useSite'

const lang = 'es' as const

/* =========================================================
   SEO
========================================================= */

useHead({
  title: 'Lashes & Brows Montréal | Pestañas y Cejas',

  link: [
    {
      rel: 'canonical',
      href: `${common.domain}/es`
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
        '@id': `${common.domain}/es#business`,
        name: 'Lashes & Brows Montréal',
        url: `${common.domain}/es`,
        telephone: common.phone,
        image: `${common.domain}${studioImage.src}`,
        description:
          'Extensiones de pestañas, lifting, laminación y diseño profesional de cejas personalizado en Montréal.',
        areaServed: {
          '@type': 'City',
          name: 'Montréal'
        },
        serviceType: [
          'Extensiones de pestañas',
          'Extensiones Classic',
          'Extensiones Hybrid',
          'Extensiones Volume',
          'Extensiones Mega Volume',
          'Lash Lift',
          'Laminación de cejas',
          'Diseño de cejas',
          'Definición de cejas',
          'Visagismo'
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
        url: `${common.domain}/es`,
        inLanguage: 'es'
      })
    }
  ]
})

useSeoMeta({
  description:
    'Extensiones de pestañas, lash lift, laminación y diseño profesional de cejas en Montréal. Resultados elegantes y personalizados según tus facciones y tu estilo.',

  ogTitle: 'Lashes & Brows Montréal',

  ogDescription:
    'Pestañas y cejas personalizadas en Montréal.',

  ogUrl: `${common.domain}/es`,

  ogType: 'website',

  twitterCard: 'summary_large_image'
})


/* =========================================================
   SERVICIOS
========================================================= */

const services = [
  {
    number: '01',
    title: 'Pestañas Classic',
    text: 'Una definición natural, elegante y atemporal.'
  },
  {
    number: '02',
    title: 'Pestañas Hybrid',
    text: 'El equilibrio perfecto entre suavidad y volumen.'
  },
  {
    number: '03',
    title: 'Pestañas Volume',
    text: 'Mayor densidad, dimensión y una mirada expresiva.'
  },
  {
    number: '04',
    title: 'Mega Volume',
    text: 'Una mirada intensa y sofisticada para un resultado impactante.'
  },
  {
    number: '05',
    title: 'Lash Lift',
    text: 'Una curvatura elegante utilizando tus propias pestañas.'
  },
  {
    number: '06',
    title: 'Diseño de Cejas',
    text: 'Diseño, definición, laminación y forma personalizada.'
  }
]


/* =========================================================
   ESTILOS
========================================================= */

const styles = [
  'Wispy',
  'Foxy',
  'Anime',
  'Medusa',
  'Diseño personalizado'
]


/* =========================================================
   FAQ
========================================================= */

const faq = [
  {
    q: '¿Cómo elegir el estilo de pestañas adecuado?',

    a:
      'El estilo puede adaptarse a la forma de tus ojos, tus pestañas naturales, tus facciones y el nivel de definición que deseas. Una evaluación personalizada permite encontrar el resultado más armonioso para ti.'
  },

  {
    q: '¿Cuál es la diferencia entre Classic, Hybrid y Volume?',

    a:
      'Las pestañas Classic crean un efecto limpio y natural. Hybrid combina técnicas Classic y Volume para aportar textura y equilibrio. Volume ofrece una mirada más llena, suave y dimensional.'
  },

  {
    q: '¿Qué es el visagismo de cejas?',

    a:
      'El visagismo es un enfoque personalizado del diseño de cejas que considera las proporciones del rostro, la forma de los ojos y la estructura natural de las cejas para crear equilibrio y armonía.'
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
            Tu mirada.<br />
            <em>Tu esencia.</em>
          </h1>

          <p class="hero-text reveal reveal-delay-2">
            Diseño personalizado de pestañas y cejas creado para
            realzar tus ojos, tus facciones y tu estilo.
          </p>

          <div class="reveal reveal-delay-3">

            <BookingButton
              label="Reservar una cita"
            />

          </div>

        </div>


        <div class="hero-image-wrap">

          <img
            src="/images/lash-01.jpg"
            alt="Resultado de extensiones de pestañas"
            class="hero-image"
            fetchpriority="high"
          />

          <div class="hero-caption">
            BELLEZA PERSONALIZADA<br />
            EN MONTRÉAL
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
              EL ARTE DE LA PERSONALIZACIÓN
            </p>

            <h2>
              La belleza debe sentirse<br />
              <em>completamente tuya.</em>
            </h2>

          </div>


          <div class="intro-text">

            <p class="large-copy">
              Cada rostro es diferente. Cada diseño también debería serlo.
            </p>

            <p>
              Desde estilos Classic refinados hasta volúmenes expresivos
              y diseños personalizados, cada trabajo se adapta a tus
              facciones naturales y al resultado que deseas conseguir.
            </p>

          </div>

        </div>

      </section>



      <!-- ===================================================
           SERVICIOS
      ==================================================== -->
<ServicesSection :lang="lang" />

      <!-- ===================================================
           ESTILOS
      ==================================================== -->

      <section
        id="styles"
        class="styles-section dark-section section-pad"
      >

        <div class="styles-layout">

          <div>

            <p class="eyebrow">
              02 / ESTILOS PERSONALIZADOS
            </p>

            <h2>
              Una mirada.<br />
              <em>Muchas posibilidades.</em>
            </h2>

            <p class="dark-copy">
              Puedes elegir un estilo definido o crear un diseño
              completamente personalizado. Tus facciones son siempre
              el punto de partida.
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
           GALERÍA
      ==================================================== -->

      <section
        id="gallery"
        class="gallery-section section-pad"
      >

        <SectionTitle
          eyebrow="03 / NUESTRO TRABAJO"
          title="El resultado habla <em>por sí solo.</em>"
          text="Una selección de trabajos de Lashes & Brows Montréal."
        />

        <LashesGallery />

      </section>



      <!-- ===================================================
           VISAGISMO
      ==================================================== -->

      <section class="visagism section-pad">

        <div class="visagism-image">

          <img
            src="/images/lash-04.jpg"
            alt="Diseño personalizado de pestañas"
            loading="lazy"
          />

        </div>


        <div class="visagism-copy">

          <p class="eyebrow">
            04 / VISAGISMO
          </p>

          <h2>
            Tu rostro es único.<br />
            <em>Tus cejas también deberían serlo.</em>
          </h2>

          <p>
            Diseñar unas cejas bonitas es mucho más que seguir una
            tendencia. A través de un enfoque personalizado basado
            en las proporciones del rostro, la forma de los ojos y
            la estructura natural de las cejas, buscamos crear
            equilibrio y armonía con tus facciones.
          </p>

          <a
            href="#contact"
            class="text-link"
          >
            Descubrir el diseño personalizado
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
            05 / EL STUDIO
          </p>

          <h2>
            Un espacio privado<br />
            <em>para tu ritual de belleza.</em>
          </h2>

          <p>
            Un estudio tranquilo e íntimo en Montréal donde la
            precisión, el confort y la belleza personalizada
            se encuentran.
          </p>

          <a
            href="#contact"
            class="text-link light-link"
          >
            Reserva tu experiencia
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
          eyebrow="06 / PREGUNTAS"
          title="Todo lo que necesitas <em>saber.</em>"
          text="Respuestas a algunas de las preguntas más frecuentes."
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
           RESERVA
      ==================================================== -->
<ContactSection :lang="lang"/>
    </main>


    <!-- =====================================================
         FOOTER
    ====================================================== -->

    <SiteFooter :lang="lang" />

  </div>

</template>
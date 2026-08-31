<script setup lang="ts">

const services = [
  {
    number: '01',
    title: 'Classic Lashes',
    text: 'Natural, refined and timeless definition.',
    images: [
      {
        src: '/images/services/clasica.jpg',
        alt: 'Classic eyelash extensions'
      },
      {
        src: '/images/services/clasica2.jpg',
        alt: 'Classic eyelash extension result'
      }
    ]
  },

  {
    number: '02',
    title: 'Hybrid Lashes',
    text: 'The perfect balance between softness and volume.',
    images: [
      {
        src: '/images/services/hibrida.jpg',
        alt: 'Hybrid eyelash extensions'
      },
      {
        src: '/images/services/hibida.jpg',
        alt: 'Hybrid eyelash extension result'
      }
    ]
  },

  {
    number: '03',
    title: 'Volume Lashes',
    text: 'Fuller, dimensional and beautifully expressive.',
    images: [
      {
        src: '/images/services/megavolumen.jpg',
        alt: 'Volume eyelash extensions'
      }
    ]
  },

  {
    number: '04',
    title: 'Mega Volume',
    text: 'A bold, sophisticated statement for a dramatic look.',
    images: [
      {
        src: '/images/services/megavolumen.jpg',
        alt: 'Mega volume eyelash extensions'
      }
    ]
  },

  {
    number: '05',
    title: 'Lash Lift',
    text: 'A beautifully lifted effect using your natural lashes.',
    images: [
      {
        src: '/images/services/lash-lift.jpg',
        alt: 'Lash lift result'
      }
    ]
  },

  {
    number: '06',
    title: 'Brow Artistry',
    text: 'Design, definition, lamination and personalized shaping.',
    images: [
      {
        src: '/images/services/brows.jpg',
        alt: 'Professional brow design'
      },
      {
        src: '/images/services/brows2.jpg',
        alt: 'Brow artistry result'
      },
      {
        src: '/images/services/visagismo.jpg',
        alt: 'Personalized brow visagism'
      }
    ]
  }
]

</script>


<template>

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

        <!-- NUMBER -->

        <span class="service-number">
          {{ service.number }}
        </span>


        <!-- SERVICE INFORMATION -->

        <div class="service-content">

          <h3>
            {{ service.title }}
          </h3>

          <p>
            {{ service.text }}
          </p>

        </div>


        <!-- SERVICE IMAGES -->

        <div
          v-if="service.images && service.images.length"
          class="service-images"
        >

          <div
            v-for="(image, index) in service.images"
            :key="`${service.number}-${index}`"
            class="service-image"
          >

            <img
              :src="image.src"
              :alt="image.alt"
              loading="lazy"
            />

          </div>

        </div>


        <!-- ARROW -->

        <span class="service-arrow">
          ↗
        </span>

      </article>

    </div>

  </section>

</template>


<style scoped>

.service-row {
  position: relative;
  display: grid;
  grid-template-columns: 60px minmax(220px, 1fr) auto 40px;
  align-items: center;
  gap: 30px;
}


/* =========================================================
   SERVICE CONTENT
========================================================= */

.service-content {
  min-width: 0;
}

.service-content h3 {
  margin: 0;
}

.service-content p {
  margin-top: 8px;
}


/* =========================================================
   SERVICE IMAGES
========================================================= */

.service-images {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: nowrap;
}

.service-image {
  width: 82px;
  height: 82px;
  overflow: hidden;
  flex-shrink: 0;
  background: #eee;
}

.service-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.service-image:hover img {
  transform: scale(1.06);
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 900px) {

  .service-row {
    grid-template-columns: 42px 1fr 30px;
    gap: 16px;
  }

  .service-images {
    grid-column: 2 / -1;
    width: 100%;
    overflow-x: auto;
    padding-top: 8px;
    padding-bottom: 4px;
    scrollbar-width: none;
  }

  .service-images::-webkit-scrollbar {
    display: none;
  }

  .service-image {
    width: 90px;
    height: 90px;
  }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 500px) {

  .service-row {
    grid-template-columns: 32px 1fr 24px;
    gap: 12px;
  }

  .service-image {
    width: 78px;
    height: 78px;
  }

}

</style>
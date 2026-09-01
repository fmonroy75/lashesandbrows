<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps<{
  lang: 'en' | 'es'
}>()

const services = [
  {
    number: '01',
    title: {
      en: 'Classic Lashes',
      es: 'Pestañas Clásicas'
    },
    text: {
      en: 'Natural, refined and timeless definition.',
      es: 'Una definición natural, refinada y atemporal.'
    },
    images: [
      {
        src: '/images/services/clasica.jpg',
        alt: {
          en: 'Classic eyelash extensions',
          es: 'Extensiones de pestañas clásicas'
        }
      },
      {
        src: '/images/services/clasica2.jpg',
        alt: {
          en: 'Classic eyelash extension result',
          es: 'Resultado de extensiones de pestañas clásicas'
        }
      }
    ]
  },
  {
    number: '02',
    title: {
      en: 'Hybrid Lashes',
      es: 'Pestañas Híbridas'
    },
    text: {
      en: 'The perfect balance between softness and volume.',
      es: 'El equilibrio perfecto entre suavidad y volumen.'
    },
    images: [
      {
        src: '/images/services/hibrida.jpg',
        alt: {
          en: 'Hybrid eyelash extensions',
          es: 'Extensiones de pestañas híbridas'
        }
      },
      {
        src: '/images/services/hibida.jpg',
        alt: {
          en: 'Hybrid eyelash extension result',
          es: 'Resultado de extensiones de pestañas híbridas'
        }
      }
    ]
  },
  {
    number: '03',
    title: {
      en: 'Volume Lashes',
      es: 'Pestañas Volumen'
    },
    text: {
      en: 'Fuller, dimensional and beautifully expressive.',
      es: 'Más densas, dimensionales y bellamente expresivas.'
    },
    images: [
      {
        src: '/images/services/megavolumen.jpg',
        alt: {
          en: 'Volume eyelash extensions',
          es: 'Extensiones de pestañas volumen'
        }
      }
    ]
  },
  {
    number: '04',
    title: {
      en: 'Mega Volume',
      es: 'Mega Volumen'
    },
    text: {
      en: 'A bold, sophisticated statement for a dramatic look.',
      es: 'Un resultado audaz y sofisticado para una mirada más dramática.'
    },
    images: [
      {
        src: '/images/services/megavolumen.jpg',
        alt: {
          en: 'Mega volume eyelash extensions',
          es: 'Extensiones de pestañas mega volumen'
        }
      }
    ]
  },
  {
    number: '05',
    title: {
      en: 'Lash Lift',
      es: 'Lifting de Pestañas'
    },
    text: {
      en: 'A beautifully lifted effect using your natural lashes.',
      es: 'Un hermoso efecto de elevación utilizando tus pestañas naturales.'
    },
    images: [
      {
        src: '/images/services/lash-lift.jpg',
        alt: {
          en: 'Lash lift result',
          es: 'Resultado de lifting de pestañas'
        }
      }
    ]
  },
  {
    number: '06',
    title: {
      en: 'Brow Artistry',
      es: 'Arte de Cejas'
    },
    text: {
      en: 'Design, definition, lamination and personalized shaping.',
      es: 'Diseño, definición, laminado y modelado personalizado.'
    },
    images: [
      {
        src: '/images/services/brows.jpg',
        alt: {
          en: 'Professional brow design',
          es: 'Diseño profesional de cejas'
        }
      },
      {
        src: '/images/services/brows2.jpg',
        alt: {
          en: 'Brow artistry result',
          es: 'Resultado de diseño de cejas'
        }
      },
      {
        src: '/images/services/visagismo.jpg',
        alt: {
          en: 'Personalized brow visagism',
          es: 'Visagismo personalizado de cejas'
        }
      }
    ]
  }
]

/* =========================================================
   LIGHTBOX & ZOOM LOGIC
========================================================= */
interface FlatImage {
  src: string
  alt: string
  serviceTitle: string
  serviceNumber: string
  localIndex: number
  localTotal: number
}

const allImages = computed<FlatImage[]>(() => {
  const list: FlatImage[] = []
  services.forEach(service => {
    service.images.forEach((img, idx) => {
      list.push({
        src: img.src,
        alt: img.alt[props.lang],
        serviceTitle: service.title[props.lang],
        serviceNumber: service.number,
        localIndex: idx + 1,
        localTotal: service.images.length
      })
    })
  })
  return list
})

const activeIndex = ref<number | null>(null)
const currentImage = computed(() => {
  if (activeIndex.value === null) return null
  return allImages.value[activeIndex.value] || null
})

// Zoom and Pan state
const zoomLevel = ref(1)
const panX = ref(0)
const panY = ref(0)
const isDragging = ref(false)
const dragStart = ref({ x: 0, y: 0 })
const startPan = ref({ x: 0, y: 0 })

const resetZoom = () => {
  zoomLevel.value = 1
  panX.value = 0
  panY.value = 0
}

const openLightbox = (src: string) => {
  const idx = allImages.value.findIndex(img => img.src === src)
  if (idx !== -1) {
    activeIndex.value = idx
    resetZoom()
  }
}

const closeLightbox = () => {
  activeIndex.value = null
  resetZoom()
}

const nextImage = () => {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value + 1) % allImages.value.length
  resetZoom()
}

const prevImage = () => {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value - 1 + allImages.value.length) % allImages.value.length
  resetZoom()
}

const zoomIn = () => {
  if (zoomLevel.value < 4) {
    zoomLevel.value = Math.min(4, Math.round((zoomLevel.value + 0.5) * 10) / 10)
  }
}

const zoomOut = () => {
  if (zoomLevel.value > 1) {
    zoomLevel.value = Math.max(1, Math.round((zoomLevel.value - 0.5) * 10) / 10)
    if (zoomLevel.value === 1) {
      panX.value = 0
      panY.value = 0
    }
  }
}

const toggleZoom = () => {
  if (zoomLevel.value > 1) {
    resetZoom()
  } else {
    zoomLevel.value = 2.2
  }
}

const handleWheel = (e: WheelEvent) => {
  if (activeIndex.value === null) return
  const delta = e.deltaY < 0 ? 0.25 : -0.25
  const newZoom = Math.min(4, Math.max(1, Math.round((zoomLevel.value + delta) * 10) / 10))
  zoomLevel.value = newZoom
  if (newZoom === 1) {
    panX.value = 0
    panY.value = 0
  }
}

// Drag / Pan mouse handlers
const onMouseDown = (e: MouseEvent) => {
  if (zoomLevel.value <= 1) return
  isDragging.value = true
  dragStart.value = { x: e.clientX, y: e.clientY }
  startPan.value = { x: panX.value, y: panY.value }
}

const onMouseMove = (e: MouseEvent) => {
  if (!isDragging.value) return
  const dx = e.clientX - dragStart.value.x
  const dy = e.clientY - dragStart.value.y
  panX.value = startPan.value.x + dx
  panY.value = startPan.value.y + dy
}

const onMouseUp = () => {
  isDragging.value = false
}

// Touch events for mobile drag/pan
const onTouchStart = (e: TouchEvent) => {
  if (zoomLevel.value <= 1 || e.touches.length !== 1) return
  isDragging.value = true
  const touch = e.touches[0]
  dragStart.value = { x: touch.clientX, y: touch.clientY }
  startPan.value = { x: panX.value, y: panY.value }
}

const onTouchMove = (e: TouchEvent) => {
  if (!isDragging.value || e.touches.length !== 1) return
  const touch = e.touches[0]
  const dx = touch.clientX - dragStart.value.x
  const dy = touch.clientY - dragStart.value.y
  panX.value = startPan.value.x + dx
  panY.value = startPan.value.y + dy
}

const onTouchEnd = () => {
  isDragging.value = false
}

// Keyboard controls
const onKeydown = (e: KeyboardEvent) => {
  if (activeIndex.value === null) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === '+' || e.key === '=') zoomIn()
  if (e.key === '-' || e.key === '_') zoomOut()
  if (e.key === '0' || e.key.toLowerCase() === 'r') resetZoom()
}

watch(activeIndex, (val) => {
  if (typeof document !== 'undefined') {
    if (val !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', onKeydown)
    window.addEventListener('mouseup', onMouseUp)
  }
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', onKeydown)
    window.removeEventListener('mouseup', onMouseUp)
  }
})
</script>


<template>

  <section
    id="services"
    class="services section-pad"
  >

    <SectionTitle
      :eyebrow="lang === 'en' ? '01 / SERVICES' : '01 / SERVICIOS'"
      :title="
        lang === 'en'
          ? 'Precision. <em>Elegance.</em>'
          : 'Precisión. <em>Elegancia.</em>'
      "
      :text="
        lang === 'en'
          ? 'A curated range of lash and brow services designed around you.'
          : 'Una selección de servicios de pestañas y cejas diseñados especialmente para ti.'
      "
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
            {{ service.title[lang] }}
          </h3>

          <p>
            {{ service.text[lang] }}
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
            role="button"
            tabindex="0"
            :aria-label="lang === 'en' ? 'Click to zoom photo' : 'Haz clic para ver la foto en detalle'"
            @click="openLightbox(image.src)"
            @keydown.enter="openLightbox(image.src)"
          >

            <img
              :src="image.src"
              :alt="image.alt[lang]"
              loading="lazy"
            />

            <div class="zoom-overlay">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </div>

          </div>

        </div>


        <!-- ARROW -->

        <span class="service-arrow">
          ↗
        </span>

      </article>

    </div>

    <!-- =========================================================
         FULLSCREEN ZOOM LIGHTBOX MODAL
    ========================================================= -->
    <Teleport to="body">
      <Transition name="lightbox-fade">
        <div
          v-if="currentImage !== null"
          class="zoom-lightbox"
          role="dialog"
          aria-modal="true"
          @click.self="closeLightbox"
        >
          <!-- HEADER BAR -->
          <div class="lightbox-bar">
            <div class="lightbox-meta">
              <span class="lightbox-num">{{ currentImage.serviceNumber }}</span>
              <span class="lightbox-title">{{ currentImage.serviceTitle }}</span>
              <span class="lightbox-count">({{ currentImage.localIndex }}/{{ currentImage.localTotal }})</span>
            </div>

            <!-- ZOOM CONTROLS -->
            <div class="lightbox-controls">
              <button
                type="button"
                class="zoom-btn"
                :disabled="zoomLevel <= 1"
                :aria-label="lang === 'en' ? 'Zoom Out' : 'Reducir Zoom'"
                @click="zoomOut"
              >
                −
              </button>

              <span class="zoom-indicator">{{ Math.round(zoomLevel * 100) }}%</span>

              <button
                type="button"
                class="zoom-btn"
                :disabled="zoomLevel >= 4"
                :aria-label="lang === 'en' ? 'Zoom In' : 'Aumentar Zoom'"
                @click="zoomIn"
              >
                +
              </button>

              <button
                v-if="zoomLevel > 1"
                type="button"
                class="zoom-reset-btn"
                @click="resetZoom"
              >
                Reset
              </button>
            </div>

            <!-- CLOSE BUTTON -->
            <button
              type="button"
              class="lightbox-close"
              :aria-label="lang === 'en' ? 'Close' : 'Cerrar'"
              @click="closeLightbox"
            >
              ✕
            </button>
          </div>

          <!-- MAIN STAGE -->
          <div
            class="lightbox-stage"
            :class="{ 'is-zoomed': zoomLevel > 1, 'is-dragging': isDragging }"
            @wheel.prevent="handleWheel"
            @mousedown="onMouseDown"
            @mousemove="onMouseMove"
            @mouseup="onMouseUp"
            @mouseleave="onMouseUp"
            @touchstart.passive="onTouchStart"
            @touchmove.prevent="onTouchMove"
            @touchend="onTouchEnd"
            @dblclick="toggleZoom"
          >
            <img
              :src="currentImage.src"
              :alt="currentImage.alt"
              class="lightbox-img"
              :style="{
                transform: `translate3d(${panX}px, ${panY}px, 0) scale(${zoomLevel})`,
                transition: isDragging ? 'none' : 'transform 0.25s cubic-bezier(0.2, 0.65, 0.2, 1)'
              }"
            />
          </div>

          <!-- PREV / NEXT NAV BUTTONS -->
          <button
            type="button"
            class="lightbox-arrow prev"
            :aria-label="lang === 'en' ? 'Previous image' : 'Imagen anterior'"
            @click="prevImage"
          >
            ‹
          </button>

          <button
            type="button"
            class="lightbox-arrow next"
            :aria-label="lang === 'en' ? 'Next image' : 'Siguiente imagen'"
            @click="nextImage"
          >
            ›
          </button>

          <!-- BOTTOM HINT -->
          <div class="lightbox-hint">
            <span v-if="zoomLevel === 1">
              {{ lang === 'en' ? 'Click image or scroll to zoom in' : 'Haz clic sobre la imagen o usa la rueda para hacer zoom' }}
            </span>
            <span v-else>
              {{ lang === 'en' ? 'Click & drag to explore photo details' : 'Haz clic y arrastra para explorar los detalles de la foto' }}
            </span>
          </div>
        </div>
      </Transition>
    </Teleport>

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
  position: relative;
  width: 145px;
  height: 145px;
  overflow: hidden;
  flex-shrink: 0;
  background: #eee;
  cursor: pointer;
  border: 1px solid rgba(8, 8, 8, 0.08);
  transition: border-color 0.3s ease, transform 0.3s ease;
}

.service-image:hover {
  border-color: var(--black, #080808);
}

.service-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.service-image:hover img {
  transform: scale(1.08);
}

.zoom-overlay {
  position: absolute;
  inset: 0;
  background: rgba(8, 8, 8, 0.45);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-image:hover .zoom-overlay {
  opacity: 1;
}


/* =========================================================
   FULLSCREEN ZOOM LIGHTBOX MODAL
========================================================= */

.zoom-lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(8, 8, 8, 0.94);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  user-select: none;
  overflow: hidden;
}

.lightbox-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  color: #fff;
  z-index: 10;
}

.lightbox-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.lightbox-num {
  color: rgba(255, 255, 255, 0.5);
  font-weight: 600;
}

.lightbox-title {
  font-family: var(--serif, serif);
  font-size: 1.1rem;
  text-transform: none;
  font-style: italic;
}

.lightbox-count {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.75rem;
}

.lightbox-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.06);
  padding: 0.25rem 0.5rem;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.zoom-btn {
  width: 32px;
  height: 32px;
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  display: grid;
  place-items: center;
  border-radius: 50%;
  transition: background 0.2s ease;
}

.zoom-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.15);
}

.zoom-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.zoom-indicator {
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  min-width: 42px;
  text-align: center;
  font-weight: 600;
  color: #fff;
}

.zoom-reset-btn {
  border: 0;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: 0.68rem;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: background 0.2s ease;
}

.zoom-reset-btn:hover {
  background: rgba(255, 255, 255, 0.25);
}

.lightbox-close {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.1rem;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: #fff;
}

.lightbox-stage {
  flex: 1;
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  cursor: zoom-in;
}

.lightbox-stage.is-zoomed {
  cursor: grab;
}

.lightbox-stage.is-dragging {
  cursor: grabbing;
}

.lightbox-img {
  max-width: 95vw;
  max-height: 86vh;
  object-fit: contain;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  transform-origin: center center;
  will-change: transform;
}

.lightbox-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 2rem;
  line-height: 1;
  display: grid;
  place-items: center;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.lightbox-arrow:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: #fff;
}

.lightbox-arrow.prev {
  left: 2rem;
}

.lightbox-arrow.next {
  right: 2rem;
}

.lightbox-hint {
  text-align: center;
  padding: 1.25rem;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  z-index: 10;
}

/* Transitions */
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
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
    width: 150px;
    height: 150px;
  }

}


/* =========================================================
   SMALL MOBILE & LIGHTBOX RESPONSIVE
========================================================= */

@media (max-width: 768px) {

  .lightbox-bar {
    padding: 1rem;
  }

  .lightbox-title {
    display: none;
  }

  .lightbox-arrow.prev {
    left: 0.75rem;
  }

  .lightbox-arrow.next {
    right: 0.75rem;
  }

  .lightbox-arrow {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }

}

@media (max-width: 500px) {

  .service-row {
    grid-template-columns: 32px 1fr 24px;
    gap: 12px;
  }

  .service-image {
    width: 135px;
    height: 135px;
  }

}

</style>
<script setup lang="ts">
import { siteImages } from '~/composables/useSite'

const active = ref<number | null>(null)

const close = () => { active.value = null }
const next = () => {
  if (active.value === null) return
  active.value = (active.value + 1) % siteImages.length
}
const prev = () => {
  if (active.value === null) return
  active.value = (active.value - 1 + siteImages.length) % siteImages.length
}

const onKey = (e: KeyboardEvent) => {
  if (active.value === null) return
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <div class="gallery-grid">
    <button
      v-for="(image, index) in siteImages"
      :key="image.src"
      class="gallery-item"
      :class="{ 'gallery-feature': index === 0, 'gallery-wide': index === 3 }"
      type="button"
      @click="active = index"
    >
      <img :src="image.src" :alt="image.alt" loading="lazy" />
      <span class="gallery-overlay">
        <span>{{ image.category }}</span>
        <span>View ↗</span>
      </span>
    </button>
  </div>

  <Teleport to="body">
    <div v-if="active !== null" class="lightbox" role="dialog" aria-modal="true" @click.self="close">
      <button class="lightbox-close" type="button" aria-label="Close" @click="close">×</button>
      <button class="lightbox-prev" type="button" aria-label="Previous" @click="prev">←</button>
      <img :src="siteImages[active].src" :alt="siteImages[active].alt" />
      <button class="lightbox-next" type="button" aria-label="Next" @click="next">→</button>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
const props = defineProps<{
  lang: 'en' | 'es'
}>()

const open = ref(false)

const links = computed(() =>
  props.lang === 'en'
    ? [
        { label: 'Services', href: '#services' },
        { label: 'Styles', href: '#styles' },
        { label: 'Our Work', href: '#gallery' },
        { label: 'The Studio', href: '#studio' },
        { label: 'Contact', href: '#contact' }
      ]
    : [
        { label: 'Servicios', href: '#services' },
        { label: 'Estilos', href: '#styles' },
        { label: 'Trabajos', href: '#gallery' },
        { label: 'El Studio', href: '#studio' },
        { label: 'Contacto', href: '#contact' }
      ]
)

const switchHref = computed(() => props.lang === 'en' ? '/es' : '/')
const switchLabel = computed(() => props.lang === 'en' ? 'ES' : 'EN')

const close = () => { open.value = false }
</script>

<template>
  <header class="site-header" :class="{ 'is-open': open }">
    <div class="nav-wrap">
      <NuxtLink class="brand" :to="lang === 'es' ? '/es' : '/'" @click="close" aria-label="Lashes & Brows Montréal">
        <span class="brand-mark">L&B</span>
        <span class="brand-name">LASHES & BROWS</span>
      </NuxtLink>

      <nav class="desktop-nav" aria-label="Primary navigation">
        <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
      </nav>

      <div class="nav-actions">
        <NuxtLink class="language" :to="switchHref">{{ switchLabel }}</NuxtLink>
        <a class="nav-book" href="#contact">{{ lang === 'en' ? 'Book now' : 'Reservar' }}</a>
        <button class="menu-button" type="button" :aria-expanded="open" aria-label="Open menu" @click="open = !open">
          <span></span><span></span>
        </button>
      </div>
    </div>

    <div v-if="open" class="mobile-menu">
      <a v-for="link in links" :key="link.href" :href="link.href" @click="close">{{ link.label }}</a>
      <NuxtLink :to="switchHref" @click="close">{{ switchLabel }}</NuxtLink>
      <a class="mobile-book" href="#contact" @click="close">{{ lang === 'en' ? 'Book an appointment' : 'Reservar una cita' }}</a>
    </div>
  </header>
</template>
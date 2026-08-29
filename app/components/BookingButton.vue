<script setup lang="ts">
defineProps<{
  label: string
  light?: boolean
}>()
</script>

<template>
  <a class="booking-button" :class="{ light }" href="#contact">
    <span>{{ label }}</span>
    <span class="arrow">↗</span>
  </a>
</template>
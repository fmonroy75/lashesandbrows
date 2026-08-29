<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  text?: string
  light?: boolean
}>()
</script>

<template>
  <div class="section-heading" :class="{ light }">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h2 v-html="title"></h2>
    <p v-if="text" class="section-lead">{{ text }}</p>
  </div>
</template>
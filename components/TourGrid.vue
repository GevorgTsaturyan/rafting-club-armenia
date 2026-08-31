<script setup lang="ts">
import type { TourCard } from '~/types/content'

defineProps<{ tours: TourCard[] }>()

const { t } = useI18n()
const localePath = useLocalePath()
const contactPath = computed(() => localePath('contact'))
</script>

<template>
  <div class="grid grid--3 tours-grid">
    <TourCard
      v-for="tour in tours"
      :key="tour.id"
      :tour="tour"
      :cta-label="t('cta.book')"
      :cta-to="contactPath"
      :duration-label="t('common.duration')"
      :pending-label="t('common.onRequest')"
    />
  </div>
</template>

<style scoped>
.tours-grid { align-items: stretch; }
</style>

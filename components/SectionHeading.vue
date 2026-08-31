<script setup lang="ts">
import type { SectionHeading } from '~/types/content'

withDefaults(
  defineProps<{
    heading: SectionHeading
    align?: 'left' | 'center'
    as?: 'h2' | 'h1'
  }>(),
  { align: 'left', as: 'h2' }
)
</script>

<template>
  <div class="heading reveal" :class="`heading--${align}`">
    <span v-if="heading.eyebrow" class="eyebrow">{{ heading.eyebrow }}</span>
    <component :is="as" class="heading__title">{{ heading.title }}</component>
    <p v-if="heading.intro" class="heading__intro">{{ heading.intro }}</p>
  </div>
</template>

<style scoped>
.heading { max-width: 62ch; }
.heading--center { margin-inline: auto; text-align: center; }
.heading__title { font-size: var(--fs-h2); margin-top: 0.9rem; }
.heading__intro {
  margin-top: 1rem;
  font-size: var(--fs-lead);
  color: var(--text-muted);
}
.section--deep .heading__intro { color: rgba(234, 244, 245, 0.82); }
</style>

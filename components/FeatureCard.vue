<script setup lang="ts">
import type { FeatureItem } from '~/types/content'

defineProps<{ feature: FeatureItem; variant?: 'card' | 'plain' }>()
</script>

<template>
  <div class="feature reveal" :class="variant === 'plain' ? 'feature--plain' : 'feature--card'">
    <span class="feature__icon">
      <UiAppIcon :name="feature.icon" :size="24" />
    </span>
    <h3 class="feature__title">{{ feature.title }}</h3>
    <p class="feature__text">{{ feature.text }}</p>
  </div>
</template>

<style scoped>
.feature { height: 100%; }
.feature--card {
  padding: clamp(1.4rem, 2.5vw, 1.9rem);
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease);
}
.feature--card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
.feature__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  color: var(--river);
  background: linear-gradient(135deg, rgba(14, 124, 134, 0.12), rgba(79, 185, 194, 0.18));
  margin-bottom: 1.1rem;
}
.feature__title { font-size: var(--fs-h3); }
.feature__text { margin-top: 0.55rem; color: var(--text-muted); }

.section--deep .feature__title { color: #fff; }
.section--deep .feature__text { color: rgba(234, 244, 245, 0.8); }
.section--deep .feature__icon {
  color: #fff;
  background: rgba(255, 255, 255, 0.12);
}
</style>

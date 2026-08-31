<script setup lang="ts">
import type { TourCard } from '~/types/content'

defineProps<{ tour: TourCard; ctaLabel: string; ctaTo: string; durationLabel: string; pendingLabel: string }>()
</script>

<template>
  <article class="tour reveal">
    <div class="tour__media">
      <UiAppImage :src="tour.image" :alt="tour.imageAlt" ratio="4 / 3" :rounded="false" />
      <span class="tour__badge">{{ tour.difficulty }}</span>
    </div>
    <div class="tour__body">
      <h3 class="tour__name">{{ tour.name }}</h3>
      <p class="tour__tagline">{{ tour.tagline }}</p>
      <p class="tour__desc">{{ tour.description }}</p>

      <ul class="tour__highlights">
        <li v-for="h in tour.highlights" :key="h">
          <UiAppIcon name="check" :size="17" />
          <span>{{ h }}</span>
        </li>
      </ul>

      <dl class="tour__meta">
        <div>
          <dt><UiAppIcon name="clock" :size="16" /> {{ durationLabel }}</dt>
          <dd>{{ tour.duration ?? pendingLabel }}</dd>
        </div>
        <div>
          <dt><UiAppIcon name="target" :size="16" /> {{ tour.bestFor }}</dt>
        </div>
      </dl>

      <NuxtLink :to="ctaTo" class="btn btn--block tour__cta">{{ ctaLabel }}</NuxtLink>
    </div>
  </article>
</template>

<style scoped>
.tour {
  display: flex;
  flex-direction: column;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease);
}
.tour:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
.tour__media { position: relative; }
.tour__badge {
  position: absolute;
  left: 1rem; top: 1rem;
  padding: 0.35rem 0.75rem;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.92);
  color: var(--deep);
  font-size: 0.78rem;
  font-weight: 700;
  box-shadow: var(--shadow-sm);
}
.tour__body { display: flex; flex-direction: column; gap: 0.7rem; padding: clamp(1.3rem, 2.5vw, 1.7rem); flex: 1; }
.tour__name { font-size: var(--fs-h3); }
.tour__tagline { color: var(--accent-600); font-weight: 600; font-size: 0.95rem; margin-top: -0.3rem; }
.tour__desc { color: var(--text-muted); font-size: 0.95rem; }
.tour__highlights { display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.2rem; }
.tour__highlights li { display: flex; align-items: flex-start; gap: 0.55rem; font-size: 0.92rem; }
.tour__highlights svg { color: var(--river); flex: none; margin-top: 2px; }
.tour__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  margin-top: auto;
  padding-top: 0.9rem;
  border-top: 1px solid var(--line);
}
.tour__meta dt {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--slate);
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.tour__meta dt svg { color: var(--river); }
.tour__meta dd { font-weight: 600; font-size: 0.95rem; }
.tour__cta { margin-top: 1rem; }
</style>

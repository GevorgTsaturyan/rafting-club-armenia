<script setup lang="ts">
import type { StepItem } from '~/types/content'

defineProps<{ steps: StepItem[] }>()
</script>

<template>
  <ol class="steps">
    <li v-for="(step, i) in steps" :key="i" class="steps__item reveal">
      <span class="steps__num">{{ (i + 1).toString().padStart(2, '0') }}</span>
      <div class="steps__body">
        <h3 class="steps__title">{{ step.title }}</h3>
        <p class="steps__text">{{ step.text }}</p>
      </div>
      <span v-if="i < steps.length - 1" class="steps__line" aria-hidden="true" />
    </li>
  </ol>
</template>

<style scoped>
.steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: clamp(1.2rem, 3vw, 2rem); }
.steps__item { position: relative; }
.steps__num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px; height: 56px;
  border-radius: 16px;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.25rem;
  color: #fff;
  background: linear-gradient(135deg, var(--river) 0%, var(--deep) 100%);
  box-shadow: var(--shadow-sm);
}
.steps__body { margin-top: 1.1rem; }
.steps__title { font-size: var(--fs-h3); }
.steps__text { margin-top: 0.45rem; color: var(--text-muted); font-size: 0.95rem; }
.steps__line {
  position: absolute;
  top: 28px;
  left: calc(56px + 0.6rem);
  right: calc(-1 * clamp(1.2rem, 3vw, 2rem));
  height: 2px;
  background: repeating-linear-gradient(90deg, var(--river-300) 0 8px, transparent 8px 16px);
  opacity: 0.6;
}

@media (max-width: 900px) {
  .steps { grid-template-columns: repeat(2, 1fr); }
  .steps__line { display: none; }
}
@media (max-width: 520px) {
  .steps { grid-template-columns: 1fr; }
}
</style>

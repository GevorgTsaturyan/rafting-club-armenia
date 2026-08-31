<script setup lang="ts">
import { ref } from 'vue'

/**
 * Responsive image with a branded gradient placeholder.
 *
 * - `ratio` reserves space via CSS aspect-ratio → zero layout shift (CLS).
 * - Below-the-fold images lazy-load; hero images pass `priority` for eager,
 *   high-priority fetch and better LCP.
 * - If the real photo isn't in /public yet, the gradient placeholder shows,
 *   so the design still looks intentional before assets are added.
 */
const props = withDefaults(
  defineProps<{
    src: string
    alt: string
    ratio?: string
    priority?: boolean
    sizes?: string
    rounded?: boolean
  }>(),
  { ratio: '16 / 10', priority: false, rounded: true }
)

const loaded = ref(false)
const failed = ref(false)
</script>

<template>
  <div
    class="img"
    :class="{ 'img--rounded': rounded, 'is-loaded': loaded }"
    :style="{ aspectRatio: ratio }"
  >
    <img
      :src="src"
      :alt="alt"
      :loading="priority ? 'eager' : 'lazy'"
      :fetchpriority="priority ? 'high' : 'auto'"
      :decoding="priority ? 'auto' : 'async'"
      :sizes="sizes"
      class="img__el"
      :class="{ 'is-hidden': failed }"
      @load="loaded = true"
      @error="failed = true"
    />
    <span class="img__shine" aria-hidden="true" />
  </div>
</template>

<style scoped>
.img {
  position: relative;
  width: 100%;
  overflow: hidden;
  background:
    linear-gradient(135deg, var(--deep) 0%, var(--river) 60%, var(--river-300) 100%);
  isolation: isolate;
}
.img--rounded { border-radius: var(--radius-lg); }
.img__el {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.6s var(--ease), transform 0.9s var(--ease);
}
.is-loaded .img__el { opacity: 1; }
.img__el.is-hidden { opacity: 0; }

/* Subtle sheen so empty placeholders read as intentional, not broken. */
.img__shine {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(80% 60% at 20% 10%, rgba(255, 255, 255, 0.18), transparent 60%),
    radial-gradient(60% 60% at 90% 90%, rgba(255, 106, 61, 0.22), transparent 60%);
  pointer-events: none;
  z-index: -1;
}
</style>

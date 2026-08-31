<script setup lang="ts">
/**
 * Inline SVG icon set. Stroke-based, 24×24, currentColor.
 * Keeping icons inline avoids an icon-font dependency and extra requests.
 */
const props = withDefaults(
  defineProps<{ name: string; size?: number | string; label?: string }>(),
  { size: 24 }
)

const paths: Record<string, string> = {
  shield: '<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
  mountain: '<path d="M3 20l6-11 4 6 2-3 6 8z"/><path d="M9 9l1.5 2.5"/>',
  users: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5"/><path d="M16 6a3 3 0 0 1 0 6"/><path d="M21 20c0-2.5-1.8-4.2-4-4.8"/>',
  wave: '<path d="M3 8c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2"/><path d="M3 14c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2"/>',
  canyon: '<path d="M4 4v9l3 3 3-3V4"/><path d="M14 4v9l3 3 3-3V4"/><path d="M2 21h20"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  leaf: '<path d="M5 20c0-8 6-14 15-14 0 9-6 15-14 15"/><path d="M5 20c3-4 6-6 10-8"/>',
  landmark: '<path d="M3 21h18"/><path d="M5 21V10m4 11V10m6 11V10m4 11V10"/><path d="M12 3l8 5H4z"/>',
  heart: '<path d="M12 20s-7-4.5-9-9c-1.3-3 .6-6 3.5-6 2 0 3.5 1.5 5.5 3.5C19 6.5 20.5 5 22.5 5"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  'arrow-right': '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>',
  'chevron-down': '<path d="M6 9l6 6 6-6"/>',
  'chevron-left': '<path d="M15 6l-6 6 6 6"/>',
  'chevron-right': '<path d="M9 6l6 6-6 6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  phone: '<path d="M4 5c0 8 7 15 15 15l0-3.5-4-1.5-2 2c-2-1-4-3-5-5l2-2-1.5-4L5 5z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 7l8 6 8-6"/>',
  whatsapp: '<path d="M4 20l1.5-4.5A8 8 0 1 1 9 19.5z"/><path d="M9 9c0 4 2 6 6 6l1.5-1.5-2.5-1-1 1c-1.2-.5-2-1.3-2.5-2.5l1-1-1-2.5z"/>',
  'map-pin': '<path d="M12 21c5-5.5 7-8.5 7-11a7 7 0 0 0-14 0c0 2.5 2 5.5 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  instagram: '<rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.5"/><circle cx="17" cy="7" r="1"/>',
  facebook: '<path d="M14 8h2V5h-2c-2 0-3 1.3-3 3v2H9v3h2v6h3v-6h2l.5-3H14V8.5c0-.3.2-.5.5-.5z"/>',
  youtube: '<rect x="3" y="6" width="18" height="12" rx="4"/><path d="M10 9.5l5 2.5-5 2.5z"/>',
  telegram: '<path d="M21 5L3 12l5 2 2 5 3-3 4 3z"/><path d="M10 14l7-6"/>',
  star: '<path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19l1-5.8L3.5 9.2l5.9-.9z"/>',
  paddle: '<path d="M12 13v8"/><path d="M12 13a5 5 0 1 0-.001-.001z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  signal: '<path d="M4 20v-5m5 5V10m5 10V6m5 14V3"/>',
  target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/>'
}
</script>

<template>
  <svg
    class="app-icon"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    :aria-hidden="label ? undefined : true"
    :role="label ? 'img' : undefined"
    :aria-label="label || undefined"
    v-html="paths[name] || ''"
  />
</template>

<style scoped>
.app-icon { flex: none; display: inline-block; }
</style>

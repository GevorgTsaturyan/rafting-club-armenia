<script setup lang="ts">
/**
 * Brand lockup: an inline SVG mark (mountain + wave) plus the wordmark.
 *
 * This is a clean placeholder identity. To use the real Rafting Club Armenia
 * logo, drop it at `public/images/logo/rafting-club-armenia-logo.svg` and set
 * `useImage` — the component will render the file instead of the inline mark.
 */
withDefaults(
  defineProps<{ variant?: 'dark' | 'light'; useImage?: boolean }>(),
  { variant: 'dark', useImage: false }
)
const { t } = useI18n()
</script>

<template>
  <span class="logo" :class="`logo--${variant}`">
    <img
      v-if="useImage"
      src="/images/logo/rafting-club-armenia-logo.svg"
      alt="Rafting Club Armenia"
      width="150"
      height="40"
      class="logo__img"
    />
    <template v-else>
      <svg class="logo__mark" viewBox="0 0 44 44" width="42" height="42" aria-hidden="true">
        <defs>
          <linearGradient id="rcaMark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#0e7c86" />
            <stop offset="1" stop-color="#0d3b47" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="42" height="42" rx="12" fill="url(#rcaMark)" />
        <path d="M9 26l6-11 4.5 8 3-4.5L30 26z" fill="none" stroke="#fff" stroke-width="2.2"
          stroke-linejoin="round" stroke-linecap="round" />
        <path d="M7 31c2.4 0 2.4 2 4.8 2s2.4-2 4.8-2 2.4 2 4.8 2 2.4-2 4.8-2 2.4 2 4.8 2"
          fill="none" stroke="#ff6a3d" stroke-width="2.4" stroke-linecap="round" />
      </svg>
      <span class="logo__text">
        <span class="logo__line1">{{ t('header.brandLine1') }}</span>
        <span class="logo__line2">{{ t('header.brandLine2') }}</span>
      </span>
    </template>
  </span>
</template>

<style scoped>
.logo { display: inline-flex; align-items: center; gap: 0.65rem; }
.logo__img { height: 40px; width: auto; }
.logo__mark { flex: none; border-radius: 12px; box-shadow: var(--shadow-sm); }
.logo__text {
  display: flex;
  flex-direction: column;
  line-height: 1;
  font-family: var(--font-display);
  font-weight: 800;
  letter-spacing: -0.02em;
}
.logo__line1 { font-size: 1.02rem; }
.logo__line2 {
  font-size: 1.02rem;
  color: var(--accent);
  letter-spacing: 0.02em;
}
.logo--light .logo__line1 { color: #fff; }
.logo--light .logo__line2 { color: var(--accent); }
</style>

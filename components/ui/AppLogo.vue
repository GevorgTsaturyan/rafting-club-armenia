<script setup lang="ts">
/**
 * Brand lockup: the Rafting Club water-drop mark + the wordmark.
 *
 * The mark is the real logo (light-blue drop with paddlers), kept as a
 * transparent PNG so it reads on both the dark hero header and the light
 * scrolled header. `variant` only recolours the wordmark text beside it.
 */
withDefaults(defineProps<{ variant?: 'dark' | 'light' }>(), { variant: 'dark' })
const { t } = useI18n()
</script>

<template>
  <span class="logo" :class="`logo--${variant}`">
    <img
      src="/images/logo/rafting-club-armenia-drop.png"
      alt=""
      width="37"
      height="52"
      class="logo__mark"
      aria-hidden="true"
    />
    <span class="logo__text">
      <span class="logo__line1">{{ t('header.brandLine1') }}</span>
      <span class="logo__line2">{{ t('header.brandLine2') }}</span>
    </span>
  </span>
</template>

<style scoped>
.logo { display: inline-flex; align-items: center; gap: 0.6rem; }
.logo__mark {
  flex: none;
  height: 52px;
  width: auto;
  /* Lift the mark slightly off dark/light backgrounds without a hard box edge. */
  filter: drop-shadow(0 2px 4px rgba(10, 28, 34, 0.18));
}
.logo__text {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
  font-family: var(--font-display);
  font-weight: 800;
  letter-spacing: -0.02em;
}
.logo__line1 { font-size: 1.02rem; color: var(--ink); }
.logo__line2 {
  font-size: 1.02rem;
  color: var(--accent);
  letter-spacing: 0.02em;
}
.logo--light .logo__line1 { color: #fff; }
.logo--light .logo__line2 { color: var(--accent); }
</style>

<script setup lang="ts">
/** Reusable conversion band. Primary → contact/booking, secondary → given route. */
const props = defineProps<{
  title: string
  text: string
  primaryLabel: string
  secondaryLabel?: string
  secondaryTo?: string
}>()

const localePath = useLocalePath()
const primaryTo = computed(() => localePath('contact'))
</script>

<template>
  <section class="cta section--deep">
    <div class="container cta__inner reveal">
      <div class="cta__glow" aria-hidden="true" />
      <div class="cta__content">
        <h2 class="cta__title">{{ title }}</h2>
        <p class="cta__text">{{ text }}</p>
      </div>
      <div class="cta__actions">
        <NuxtLink :to="primaryTo" class="btn btn--lg">{{ primaryLabel }}</NuxtLink>
        <NuxtLink v-if="secondaryLabel && secondaryTo" :to="secondaryTo" class="btn btn--on-dark btn--lg">
          {{ secondaryLabel }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* overflow:hidden clips the decorative glow so it can't cause horizontal scroll on mobile. */
.cta { position: relative; overflow: hidden; }
.cta__inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(1.5rem, 4vw, 3rem);
  flex-wrap: wrap;
}
.cta__glow {
  position: absolute;
  inset: -40% -10% auto auto;
  width: 460px; height: 460px;
  background: radial-gradient(circle, rgba(255, 106, 61, 0.32), transparent 60%);
  filter: blur(20px);
  pointer-events: none;
}
.cta__content { position: relative; max-width: 46ch; }
.cta__title { font-size: var(--fs-h2); color: #fff; }
.cta__text { margin-top: 0.9rem; font-size: var(--fs-lead); color: rgba(234, 244, 245, 0.85); }
.cta__actions { position: relative; display: flex; gap: 0.85rem; flex-wrap: wrap; }
</style>

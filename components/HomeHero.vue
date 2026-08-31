<script setup lang="ts">
import type { HomeContent } from '~/types/content'

defineProps<{ hero: HomeContent['hero']; primaryTo: string; secondaryTo: string }>()
</script>

<template>
  <section class="hero">
    <div class="hero__bg">
      <UiAppImage
        src="/images/hero/rafting-in-armenia-debed-river.jpg"
        :alt="hero.title"
        ratio="16 / 9"
        :priority="true"
        :rounded="false"
        sizes="100vw"
      />
    </div>
    <div class="hero__overlay" aria-hidden="true" />

    <div class="container hero__inner">
      <p class="hero__eyebrow">
        <span class="hero__dot" aria-hidden="true" />{{ hero.eyebrow }}
      </p>
      <h1 class="hero__title">{{ hero.title }}</h1>
      <p class="hero__subtitle">{{ hero.subtitle }}</p>
      <div class="hero__actions">
        <NuxtLink :to="primaryTo" class="btn btn--lg">{{ hero.primaryCta }}</NuxtLink>
        <NuxtLink :to="secondaryTo" class="btn btn--on-dark btn--lg">{{ hero.secondaryCta }}</NuxtLink>
      </div>
    </div>

    <a href="#experience" class="hero__scroll" :aria-label="hero.scrollHint">
      <span>{{ hero.scrollHint }}</span>
      <UiAppIcon name="chevron-down" :size="22" />
    </a>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: 100svh;
  padding-top: calc(var(--header-h) + 3rem);
  padding-bottom: clamp(4rem, 9vw, 7rem);
  overflow: hidden;
  background: var(--deep);
  color: #fff;
}
.hero__bg { position: absolute; inset: 0; }
.hero__bg :deep(.img) { height: 100%; border-radius: 0; }
.hero__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(10, 28, 34, 0.5) 0%, rgba(10, 28, 34, 0.18) 35%, rgba(10, 28, 34, 0.9) 100%),
    radial-gradient(120% 80% at 15% 100%, rgba(13, 59, 71, 0.65), transparent 60%);
}
.hero__inner { position: relative; z-index: 2; max-width: 62rem; }

.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.92);
  animation: rise 0.7s var(--ease) both;
}
.hero__dot {
  width: 9px; height: 9px; border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 5px rgba(255, 106, 61, 0.28);
}
.hero__title {
  font-size: var(--fs-hero);
  color: #fff;
  margin-top: 1.1rem;
  max-width: 16ch;
  animation: rise 0.7s var(--ease) 0.08s both;
}
.hero__subtitle {
  margin-top: 1.35rem;
  max-width: 54ch;
  font-size: var(--fs-lead);
  color: rgba(255, 255, 255, 0.9);
  animation: rise 0.7s var(--ease) 0.16s both;
}
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 2.1rem;
  animation: rise 0.7s var(--ease) 0.24s both;
}

.hero__scroll {
  position: absolute;
  left: 50%;
  bottom: 1.4rem;
  transform: translateX(-50%);
  z-index: 2;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.hero__scroll:hover { color: #fff; }
.hero__scroll svg { animation: bob 1.8s ease-in-out infinite; }

@keyframes rise {
  from { opacity: 0; transform: translateY(22px); }
  to { opacity: 1; transform: none; }
}
@keyframes bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
}
@media (max-width: 640px) {
  .hero__scroll { display: none; }
}
@media (prefers-reduced-motion: reduce) {
  .hero__eyebrow, .hero__title, .hero__subtitle, .hero__actions { animation: none; }
  .hero__scroll svg { animation: none; }
}
</style>

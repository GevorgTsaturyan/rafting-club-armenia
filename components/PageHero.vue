<script setup lang="ts">
/** Dark hero band for interior pages (article, tours, prices, about, contact). */
defineProps<{
  eyebrow: string
  title: string
  subtitle?: string
  image?: string
  imageAlt?: string
  crumbs?: { label: string; to?: string }[]
}>()
</script>

<template>
  <section class="page-hero">
    <div v-if="image" class="page-hero__bg">
      <UiAppImage :src="image" :alt="imageAlt || ''" ratio="21 / 9" :priority="true" :rounded="false" />
    </div>
    <div class="page-hero__overlay" aria-hidden="true" />
    <div class="container page-hero__inner">
      <Breadcrumbs v-if="crumbs" :items="crumbs" class="page-hero__crumbs" />
      <span class="eyebrow page-hero__eyebrow">{{ eyebrow }}</span>
      <h1 class="page-hero__title">{{ title }}</h1>
      <p v-if="subtitle" class="page-hero__subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: clamp(360px, 52vh, 560px);
  padding-top: calc(var(--header-h) + 2rem);
  padding-bottom: clamp(2.5rem, 5vw, 4rem);
  overflow: hidden;
  background: var(--deep);
  color: #fff;
}
.page-hero__bg { position: absolute; inset: 0; }
.page-hero__bg :deep(.img) { height: 100%; border-radius: 0; }
.page-hero__bg :deep(.img__el) { object-position: center; }
.page-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(10, 28, 34, 0.55) 0%, rgba(10, 28, 34, 0.35) 40%, rgba(10, 28, 34, 0.82) 100%);
}
.page-hero__inner { position: relative; z-index: 2; }
.page-hero__crumbs { margin-bottom: 1.25rem; }
.page-hero__eyebrow { color: var(--river-300); }
.page-hero__title {
  margin-top: 0.9rem;
  font-size: var(--fs-h1);
  color: #fff;
  max-width: 20ch;
}
.page-hero__subtitle {
  margin-top: 1.1rem;
  max-width: 60ch;
  font-size: var(--fs-lead);
  color: rgba(255, 255, 255, 0.9);
}
</style>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()

const { t } = useI18n()
const localePath = useLocalePath()

useHead({ title: `${t('notFound.title')} — Rafting Club Armenia` })

function goHome() {
  clearError({ redirect: localePath('index') })
}
</script>

<template>
  <NuxtLayout>
    <section class="err section--deep">
      <div class="err__bg" aria-hidden="true" />
      <div class="container err__inner">
        <p class="err__code">{{ error?.statusCode || 404 }}</p>
        <h1 class="err__title">{{ t('notFound.title') }}</h1>
        <p class="err__text">{{ t('notFound.text') }}</p>
        <div class="err__actions">
          <button type="button" class="btn btn--lg" @click="goHome">{{ t('notFound.home') }}</button>
          <NuxtLink :to="localePath('tours')" class="btn btn--on-dark btn--lg">{{ t('notFound.tours') }}</NuxtLink>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style scoped>
.err {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 78vh;
  padding-top: calc(var(--header-h) + 3rem);
  overflow: hidden;
  text-align: center;
}
.err__bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(60% 60% at 50% 0%, rgba(14, 124, 134, 0.4), transparent 60%),
    radial-gradient(50% 50% at 80% 100%, rgba(255, 106, 61, 0.25), transparent 60%);
}
.err__inner { position: relative; max-width: 48ch; margin-inline: auto; }
.err__code {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(4rem, 16vw, 9rem);
  line-height: 1;
  color: var(--accent);
  opacity: 0.9;
}
.err__title { font-size: var(--fs-h1); color: #fff; margin-top: 0.5rem; }
.err__text { margin-top: 1rem; font-size: var(--fs-lead); color: rgba(234, 244, 245, 0.85); }
.err__actions { display: flex; gap: 0.9rem; justify-content: center; flex-wrap: wrap; margin-top: 2rem; }
</style>

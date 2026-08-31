<script setup lang="ts">
import { computed } from 'vue'
import { usePageMeta } from '~/composables/usePageMeta'

const { t } = useI18n()
const localePath = useLocalePath()
const content = useContent()
const page = computed(() => content.value.toursPage)
const tours = computed(() => content.value.tours)

const { crumbs } = usePageMeta({
  seo: page.value.seo,
  crumbs: [{ label: t('nav.tours') }]
})
</script>

<template>
  <div>
    <PageHero
      :eyebrow="page.hero.eyebrow"
      :title="page.hero.title"
      :subtitle="page.hero.subtitle"
      image="/images/tours/rafting-tours-armenia.jpg"
      :image-alt="page.hero.imageAlt"
      :crumbs="crumbs"
    />

    <section class="section">
      <div class="container">
        <div class="prose measure reveal intro">
          <p v-for="(p, i) in page.intro" :key="i">{{ p }}</p>
        </div>
        <div class="tours-grid-wrap">
          <TourGrid :tours="tours" />
        </div>
      </div>
    </section>

    <section class="section section--mist">
      <div class="container">
        <div class="two-col">
          <div class="panel reveal">
            <h2 class="panel__title"><UiAppIcon name="check" :size="22" /> {{ page.includedHeading }}</h2>
            <ul class="panel__list">
              <li v-for="item in page.included" :key="item">
                <UiAppIcon name="check" :size="18" /><span>{{ item }}</span>
              </li>
            </ul>
          </div>
          <div class="panel reveal">
            <h2 class="panel__title"><UiAppIcon name="paddle" :size="22" /> {{ page.bringHeading }}</h2>
            <ul class="panel__list">
              <li v-for="item in page.bring" :key="item">
                <UiAppIcon name="check" :size="18" /><span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <BookingCTA
      :title="page.cta.title"
      :text="page.cta.text"
      :primary-label="page.cta.primaryCta"
      :secondary-label="page.cta.secondaryCta"
      :secondary-to="localePath('prices')"
    />
  </div>
</template>

<style scoped>
.intro { margin-bottom: 3rem; }
.tours-grid-wrap { margin-top: 1rem; }
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(1.2rem, 3vw, 2rem); }
.panel {
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: clamp(1.5rem, 3vw, 2.25rem);
}
.panel__title { display: flex; align-items: center; gap: 0.6rem; font-size: var(--fs-h3); margin-bottom: 1.25rem; }
.panel__title svg { color: var(--river); }
.panel__list { display: flex; flex-direction: column; gap: 0.75rem; }
.panel__list li { display: flex; align-items: flex-start; gap: 0.6rem; }
.panel__list svg { color: var(--river); flex: none; margin-top: 3px; }
@media (max-width: 720px) { .two-col { grid-template-columns: 1fr; } }
</style>

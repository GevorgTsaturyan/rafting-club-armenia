<script setup lang="ts">
import { computed } from 'vue'
import { usePageMeta } from '~/composables/usePageMeta'

const { t } = useI18n()
const localePath = useLocalePath()
const content = useContent()
const page = computed(() => content.value.about)

const { crumbs } = usePageMeta({
  seo: page.value.seo,
  crumbs: [{ label: t('nav.about') }]
})
</script>

<template>
  <div>
    <PageHero
      :eyebrow="page.hero.eyebrow"
      :title="page.hero.title"
      :subtitle="page.hero.subtitle"
      image="/images/rafting/about-rafting-club-armenia.jpg"
      :image-alt="page.hero.imageAlt"
      :crumbs="crumbs"
    />

    <section class="section">
      <div class="container">
        <div class="split">
          <div class="split__text">
            <h2 class="story__title reveal">{{ page.story.heading }}</h2>
            <div class="prose reveal">
              <p v-for="(p, i) in page.story.paragraphs" :key="i">{{ p }}</p>
            </div>
          </div>
          <div class="split__media reveal">
            <UiAppImage
              src="/images/rafting/rafting-team-armenia.jpg"
              :alt="page.hero.imageAlt"
              ratio="4 / 5"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="section section--mist">
      <div class="container">
        <SectionHeading :heading="page.values.heading" align="center" />
        <div class="grid grid--4 values__grid">
          <FeatureCard v-for="f in page.values.items" :key="f.title" :feature="f" />
        </div>
      </div>
    </section>

    <section class="section section--deep">
      <div class="container safety">
        <div class="safety__text">
          <span class="eyebrow">{{ t('nav.about') }}</span>
          <h2 class="safety__title">{{ page.safety.heading }}</h2>
          <div class="prose reveal">
            <p v-for="(p, i) in page.safety.paragraphs" :key="i">{{ p }}</p>
          </div>
        </div>
        <ul class="safety__list reveal">
          <li v-for="b in page.safety.bullets" :key="b">
            <UiAppIcon name="shield" :size="20" /><span>{{ b }}</span>
          </li>
        </ul>
      </div>
    </section>

    <BookingCTA
      :title="page.cta.title"
      :text="page.cta.text"
      :primary-label="page.cta.primaryCta"
      :secondary-label="page.cta.secondaryCta"
      :secondary-to="localePath('contact')"
    />
  </div>
</template>

<style scoped>
.split {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: clamp(1.5rem, 5vw, 4rem);
  align-items: center;
}
.story__title { font-size: var(--fs-h2); margin-bottom: 1.25rem; }
.values__grid { margin-top: 3rem; }

.safety { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: clamp(1.5rem, 5vw, 4rem); align-items: center; }
.safety__title { font-size: var(--fs-h2); color: #fff; margin-top: 0.9rem; margin-bottom: 1.25rem; }
.safety .prose p { color: rgba(234, 244, 245, 0.85); }
.safety__list { display: flex; flex-direction: column; gap: 0.85rem; }
.safety__list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius);
  color: #fff;
  font-weight: 500;
}
.safety__list svg { color: var(--river-300); flex: none; }

@media (max-width: 900px) {
  .split { grid-template-columns: 1fr; }
  .split__media { order: -1; }
  .safety { grid-template-columns: 1fr; }
}
</style>

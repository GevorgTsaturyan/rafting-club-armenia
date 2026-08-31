<script setup lang="ts">
import { computed } from 'vue'
import { usePageMeta } from '~/composables/usePageMeta'
import { sportsActivityLd } from '~/composables/useStructuredData'

const { t } = useI18n()
const localePath = useLocalePath()
const content = useContent()

const home = computed(() => content.value.home)
const tours = computed(() => content.value.tours)
const gallery = computed(() => content.value.gallery)

const contactPath = computed(() => localePath('contact'))
const toursPath = computed(() => localePath('tours'))
const debedPath = computed(() => localePath('rafting-debed-river'))
const raftingPath = computed(() => localePath('rafting-in-armenia'))

usePageMeta({
  seo: home.value.seo,
  type: 'website',
  faq: home.value.faq.items,
  extraLd: [sportsActivityLd(home.value.seo.description)]
})
</script>

<template>
  <div>
    <HomeHero :hero="home.hero" :primary-to="contactPath" :secondary-to="toursPath" />

    <!-- Quick facts / trust -->
    <section class="section section--tight quickfacts">
      <div class="container">
        <div class="grid grid--4">
          <FeatureCard v-for="f in home.quickFacts" :key="f.title" :feature="f" />
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section id="experience" class="section">
      <div class="container">
        <div class="split">
          <div class="split__media reveal">
            <UiAppImage
              src="/images/rafting/rafting-experience-debed-armenia.jpg"
              :alt="home.experience.imageAlt"
              ratio="4 / 5"
            />
          </div>
          <div class="split__text">
            <SectionHeading :heading="home.experience.heading" />
            <div class="prose reveal">
              <p v-for="(p, i) in home.experience.paragraphs" :key="i">{{ p }}</p>
            </div>
            <ul class="ticks reveal">
              <li v-for="b in home.experience.bullets" :key="b">
                <UiAppIcon name="check" :size="18" /><span>{{ b }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Armenia -->
    <section class="section section--mist">
      <div class="container">
        <SectionHeading :heading="home.why.heading" align="center" />
        <div class="grid grid--4 why__grid">
          <FeatureCard v-for="f in home.why.features" :key="f.title" :feature="f" />
        </div>
      </div>
    </section>

    <!-- Debed River -->
    <section class="section section--deep debed">
      <div class="container">
        <div class="split split--reverse">
          <div class="split__media reveal">
            <UiAppImage
              src="/images/rafting/debed-river-canyon-lori-armenia.jpg"
              :alt="home.debed.imageAlt"
              ratio="4 / 3"
            />
          </div>
          <div class="split__text">
            <SectionHeading :heading="home.debed.heading" />
            <div class="prose reveal">
              <p v-for="(p, i) in home.debed.paragraphs" :key="i">{{ p }}</p>
            </div>
            <dl class="stats reveal">
              <div v-for="s in home.debed.stats" :key="s.label">
                <dt>{{ s.value }}</dt>
                <dd>{{ s.label }}</dd>
              </div>
            </dl>
            <NuxtLink :to="debedPath" class="link-arrow reveal debed__link">
              {{ home.debed.cta }} <UiAppIcon name="arrow-right" :size="18" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Tours -->
    <section class="section">
      <div class="container">
        <div class="tours-head">
          <SectionHeading :heading="home.tours.heading" />
          <NuxtLink :to="toursPath" class="btn btn--ghost tours-head__cta">{{ home.tours.cta }}</NuxtLink>
        </div>
        <TourGrid :tours="tours" />
        <p class="tours-note reveal">
          <UiAppIcon name="signal" :size="18" /> {{ home.tours.note }}
        </p>
      </div>
    </section>

    <!-- Gallery -->
    <section class="section section--sand">
      <div class="container container--wide">
        <SectionHeading :heading="home.gallery.heading" align="center" />
        <div class="gallery-wrap">
          <Gallery :images="gallery" />
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="section">
      <div class="container">
        <SectionHeading :heading="home.howItWorks.heading" align="center" />
        <div class="steps-wrap">
          <StepsList :steps="home.howItWorks.steps" />
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section section--mist">
      <div class="container faq-layout">
        <div class="faq-layout__intro">
          <SectionHeading :heading="home.faq.heading" />
          <NuxtLink :to="raftingPath" class="link-arrow reveal">
            {{ t('nav.rafting') }} <UiAppIcon name="arrow-right" :size="18" />
          </NuxtLink>
        </div>
        <div class="faq-layout__list">
          <FaqSection :items="home.faq.items" />
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <BookingCTA
      :title="home.finalCta.title"
      :text="home.finalCta.text"
      :primary-label="home.finalCta.primaryCta"
      :secondary-label="home.finalCta.secondaryCta"
      :secondary-to="contactPath"
    />
  </div>
</template>

<style scoped>
.quickfacts { margin-top: -1px; }

.split {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: clamp(1.5rem, 5vw, 4rem);
  align-items: center;
}
.split--reverse .split__media { order: 2; }
.split__text > * + * { margin-top: 1.5rem; }

.ticks { display: grid; grid-template-columns: 1fr 1fr; gap: 0.7rem 1.5rem; }
.ticks li { display: flex; align-items: flex-start; gap: 0.55rem; font-weight: 500; }
.ticks svg { color: var(--river); flex: none; margin-top: 3px; }
.section--deep .ticks svg { color: var(--river-300); }

.why__grid { margin-top: 3rem; }

.stats { display: flex; flex-wrap: wrap; gap: 1.5rem 2.5rem; }
.stats dt { font-family: var(--font-display); font-weight: 800; font-size: 1.9rem; color: var(--accent); }
.stats dd { color: rgba(234, 244, 245, 0.8); font-size: 0.9rem; margin-top: 0.2rem; max-width: 18ch; }
.debed__link { color: #fff; }
.debed__link:hover { color: var(--accent); }

.tours-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}
.tours-note {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.75rem;
  color: var(--text-muted);
  font-size: 0.92rem;
}
.tours-note svg { color: var(--accent-600); flex: none; }

.gallery-wrap, .steps-wrap { margin-top: 3rem; }

.faq-layout { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: clamp(1.5rem, 4vw, 3.5rem); align-items: start; }
.faq-layout__intro { position: sticky; top: calc(var(--header-h) + 1.5rem); }
.faq-layout__intro .link-arrow { margin-top: 1.5rem; }

@media (max-width: 900px) {
  .split { grid-template-columns: 1fr; }
  .split--reverse .split__media { order: 0; }
  .ticks { grid-template-columns: 1fr; }
  .faq-layout { grid-template-columns: 1fr; }
  .faq-layout__intro { position: static; }
}
</style>

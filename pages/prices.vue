<script setup lang="ts">
import { computed } from 'vue'
import { usePageMeta } from '~/composables/usePageMeta'

const { t } = useI18n()
const localePath = useLocalePath()
const content = useContent()
const page = computed(() => content.value.prices)

const { crumbs } = usePageMeta({
  seo: page.value.seo,
  crumbs: [{ label: t('nav.prices') }]
})
</script>

<template>
  <div>
    <PageHero
      :eyebrow="page.hero.eyebrow"
      :title="page.hero.title"
      :subtitle="page.hero.subtitle"
      image="/images/rafting/rafting-prices-armenia.jpg"
      :image-alt="page.hero.title"
      :crumbs="crumbs"
    />

    <section class="section">
      <div class="container measure-wide">
        <div class="prose measure reveal">
          <p v-for="(p, i) in page.intro" :key="i">{{ p }}</p>
        </div>

        <div class="notice reveal">
          <UiAppIcon name="signal" :size="20" />
          <p>{{ page.pendingNotice }}</p>
        </div>

        <div class="pricing reveal">
          <ul class="pricing__rows">
            <li v-for="row in page.rows" :key="row.label" class="pricing__row">
              <div class="pricing__info">
                <span class="pricing__label">{{ row.label }}</span>
                <span v-if="row.note" class="pricing__note">{{ row.note }}</span>
              </div>
              <span class="pricing__price">{{ row.price ?? t('common.onRequest') }}</span>
            </li>
          </ul>
        </div>

        <div class="includes reveal">
          <h2 class="includes__title">{{ page.includesHeading }}</h2>
          <ul class="includes__list">
            <li v-for="item in page.includes" :key="item">
              <UiAppIcon name="check" :size="18" /><span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <BookingCTA
      :title="page.cta.title"
      :text="page.cta.text"
      :primary-label="page.cta.primaryCta"
      :secondary-label="page.cta.secondaryCta"
      :secondary-to="localePath('tours')"
    />
  </div>
</template>

<style scoped>
.measure-wide { max-width: 820px; }
.notice {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  margin: 2rem 0;
  padding: 1.15rem 1.35rem;
  background: var(--accent-100);
  border-radius: var(--radius);
  color: #7a3416;
}
.notice svg { flex: none; margin-top: 2px; color: var(--accent-600); }

.pricing {
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  background: var(--paper);
}
.pricing__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
}
.pricing__row + .pricing__row { border-top: 1px solid var(--line); }
.pricing__label { display: block; font-family: var(--font-display); font-weight: 700; font-size: 1.1rem; }
.pricing__note { display: block; color: var(--text-muted); font-size: 0.9rem; margin-top: 0.2rem; }
.pricing__price {
  flex: none;
  padding: 0.4rem 0.9rem;
  border-radius: var(--radius-pill);
  background: var(--mist);
  color: var(--river);
  font-weight: 700;
  font-size: 0.95rem;
}

.includes { margin-top: 2.75rem; }
.includes__title { font-size: var(--fs-h3); margin-bottom: 1.1rem; }
.includes__list { display: grid; grid-template-columns: 1fr 1fr; gap: 0.7rem 1.5rem; }
.includes__list li { display: flex; align-items: flex-start; gap: 0.55rem; }
.includes__list svg { color: var(--river); flex: none; margin-top: 3px; }
@media (max-width: 620px) { .includes__list { grid-template-columns: 1fr; } }
</style>

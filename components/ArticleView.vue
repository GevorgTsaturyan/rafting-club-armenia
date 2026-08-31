<script setup lang="ts">
import type { ArticlePageContent } from '~/types/content'

defineProps<{
  content: ArticlePageContent
  heroImage: string
  crumbs: { label: string; to?: string }[]
  secondaryTo: string
}>()
</script>

<template>
  <div>
    <PageHero
      :eyebrow="content.hero.eyebrow"
      :title="content.hero.title"
      :subtitle="content.hero.subtitle"
      :image="heroImage"
      :image-alt="content.hero.imageAlt"
      :crumbs="crumbs"
    />

    <article class="section">
      <div class="container article">
        <section
          v-for="(block, i) in content.sections"
          :key="i"
          class="article__block reveal"
        >
          <h2 class="article__h2">{{ block.heading }}</h2>
          <div class="prose">
            <p v-for="(p, pi) in block.paragraphs" :key="pi">{{ p }}</p>
          </div>
          <ul v-if="block.bullets" class="ticks">
            <li v-for="b in block.bullets" :key="b">
              <UiAppIcon name="check" :size="18" /><span>{{ b }}</span>
            </li>
          </ul>
        </section>
      </div>
    </article>

    <section v-if="content.faq" class="section section--mist">
      <div class="container faq-layout">
        <div class="faq-layout__intro">
          <SectionHeading :heading="content.faq.heading" />
        </div>
        <div class="faq-layout__list">
          <FaqSection :items="content.faq.items" />
        </div>
      </div>
    </section>

    <BookingCTA
      :title="content.cta.title"
      :text="content.cta.text"
      :primary-label="content.cta.primaryCta"
      :secondary-label="content.cta.secondaryCta"
      :secondary-to="secondaryTo"
    />
  </div>
</template>

<style scoped>
.article { max-width: 820px; }
.article__block + .article__block { margin-top: 2.75rem; }
.article__h2 { font-size: var(--fs-h2); margin-bottom: 1.1rem; }
.article .ticks { display: flex; flex-direction: column; gap: 0.6rem; margin-top: 1.25rem; }
.article .ticks li { display: flex; align-items: flex-start; gap: 0.55rem; font-weight: 500; }
.article .ticks svg { color: var(--river); flex: none; margin-top: 3px; }

.faq-layout { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: clamp(1.5rem, 4vw, 3.5rem); align-items: start; }
.faq-layout__intro { position: sticky; top: calc(var(--header-h) + 1.5rem); }
@media (max-width: 900px) {
  .faq-layout { grid-template-columns: 1fr; }
  .faq-layout__intro { position: static; }
}
</style>

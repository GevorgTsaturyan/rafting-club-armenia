<script setup lang="ts">
import { computed } from 'vue'
import { usePageMeta } from '~/composables/usePageMeta'

const { t } = useI18n()
const content = useContent()
const page = computed(() => content.value.privacy)

// This page is intentionally excluded from the sitemap (see nuxt.config).
useHead({ meta: [{ name: 'robots', content: 'noindex, follow' }] })

const { crumbs } = usePageMeta({
  seo: page.value.seo,
  crumbs: [{ label: page.value.title }]
})
</script>

<template>
  <div>
    <PageHero :eyebrow="t('footer.privacy')" :title="page.title" :crumbs="crumbs" />
    <section class="section">
      <div class="container legal">
        <p class="legal__updated">{{ page.updatedLabel }}: 2025</p>
        <section v-for="(s, i) in page.sections" :key="i" class="legal__block">
          <h2>{{ s.heading }}</h2>
          <div class="prose">
            <p v-for="(p, pi) in s.paragraphs" :key="pi">{{ p }}</p>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<style scoped>
.legal { max-width: 760px; }
.legal__updated { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 2rem; }
.legal__block + .legal__block { margin-top: 2.25rem; }
.legal__block h2 { font-size: var(--fs-h3); margin-bottom: 0.9rem; }
</style>

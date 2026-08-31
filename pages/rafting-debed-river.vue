<script setup lang="ts">
import { computed } from 'vue'
import { usePageMeta } from '~/composables/usePageMeta'

const { t } = useI18n()
const localePath = useLocalePath()
const content = useContent()
const page = computed(() => content.value.debedRiver)

const { crumbs } = usePageMeta({
  seo: page.value.seo,
  type: 'article',
  crumbs: [{ label: t('nav.debed') }],
  faq: page.value.faq?.items
})
</script>

<template>
  <ArticleView
    :content="page"
    hero-image="/images/rafting/debed-river-canyon-lori-armenia.jpg"
    :crumbs="crumbs"
    :secondary-to="localePath('tours')"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePageMeta } from '~/composables/usePageMeta'

const { t } = useI18n()
const localePath = useLocalePath()
const content = useContent()
const page = computed(() => content.value.raftingInArmenia)

const { crumbs } = usePageMeta({
  seo: page.value.seo,
  type: 'article',
  crumbs: [{ label: t('nav.rafting') }],
  faq: page.value.faq?.items
})
</script>

<template>
  <ArticleView
    :content="page"
    hero-image="/images/rafting/rafting-in-armenia-guide.jpg"
    :crumbs="crumbs"
    :secondary-to="localePath('tours')"
  />
</template>

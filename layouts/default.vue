<script setup lang="ts">
import { computed } from 'vue'
import { organizationLd, websiteLd, useJsonLd } from '~/composables/useStructuredData'

const { t } = useI18n()

/**
 * i18n SEO head: sets <html lang/dir>, canonical URL, hreflang alternates
 * (en / hy / ru) and x-default, plus og:locale — applied to every page so we
 * never duplicate this per-page.
 */
const i18nHead = useLocaleHead({ addDirAttribute: true, addSeoAttributes: true, identifierAttribute: 'id' })
useHead({
  htmlAttrs: computed(() => i18nHead.value.htmlAttrs ?? {}),
  link: computed(() => i18nHead.value.link ?? []),
  meta: computed(() => i18nHead.value.meta ?? [])
})

// Site-wide structured data (Organization + WebSite graph).
useJsonLd([organizationLd(), websiteLd()])
</script>

<template>
  <div class="site">
    <a class="skip-link" href="#main">{{ t('header.skip') }}</a>
    <AppHeader />
    <main id="main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.site { display: flex; flex-direction: column; min-height: 100vh; }
main { flex: 1; }
</style>

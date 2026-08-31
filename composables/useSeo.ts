import { toValue, type MaybeRefOrGetter } from 'vue'
import type { SeoBlock } from '~/types/content'
import { siteConfig } from '~/config/site'

interface SeoOptions {
  /** Path under /public for the social image, or absolute URL. */
  image?: string
  /** OpenGraph type. Articles use "article", everything else "website". */
  type?: 'website' | 'article'
}

/**
 * Sets per-page title, description and social metadata.
 *
 * Canonical URLs, hreflang alternates and og:locale are injected once in the
 * default layout via `useLocaleHead()` from @nuxtjs/i18n, so they are not
 * duplicated here.
 */
export function usePageSeo(seo: MaybeRefOrGetter<SeoBlock>, opts: SeoOptions = {}) {
  const image = opts.image ?? siteConfig.ogImage
  const absoluteImage = image.startsWith('http') ? image : `${siteConfig.url}${image}`

  useSeoMeta({
    title: () => toValue(seo).title,
    description: () => toValue(seo).description,
    ogTitle: () => toValue(seo).title,
    ogDescription: () => toValue(seo).description,
    ogType: opts.type ?? 'website',
    ogSiteName: siteConfig.brand,
    ogImage: absoluteImage,
    ogImageAlt: () => toValue(seo).title,
    twitterCard: 'summary_large_image',
    twitterTitle: () => toValue(seo).title,
    twitterDescription: () => toValue(seo).description,
    twitterImage: absoluteImage
  })
}

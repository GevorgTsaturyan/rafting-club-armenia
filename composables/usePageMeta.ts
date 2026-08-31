import { computed } from 'vue'
import type { SeoBlock, FaqItem } from '~/types/content'
import { siteConfig } from '~/config/site'
import { usePageSeo } from '~/composables/useSeo'
import {
  webPageLd,
  breadcrumbLd,
  faqLd,
  useJsonLd
} from '~/composables/useStructuredData'

interface CrumbSpec {
  label: string
  /** i18n route name; omit for the current (last) crumb. */
  route?: string
}

interface PageMetaOptions {
  seo: SeoBlock
  type?: 'website' | 'article'
  image?: string
  /** Visible + structured breadcrumb trail (home is prepended automatically). */
  crumbs?: CrumbSpec[]
  faq?: FaqItem[]
  extraLd?: (object | null)[]
}

/**
 * One call per page: sets title/description/OG, builds the WebPage +
 * BreadcrumbList (+ FAQPage when eligible) JSON-LD, and returns the resolved
 * visible breadcrumb items. Each locale is prerendered separately, so reading
 * values at setup is correct for static generation.
 */
export function usePageMeta(opts: PageMetaOptions) {
  const { t } = useI18n()
  const localePath = useLocalePath()
  const route = useRoute()

  usePageSeo(opts.seo, { type: opts.type, image: opts.image })

  const absolute = (path: string) => `${siteConfig.url}${path}`
  const currentUrl = absolute(route.path)

  // Visible breadcrumb items (home first).
  const homeCrumb: CrumbSpec = { label: t('breadcrumb.home'), route: 'index' }
  const crumbSpecs = [homeCrumb, ...(opts.crumbs ?? [])]
  const visibleCrumbs = crumbSpecs.map((c, i) => ({
    label: c.label,
    to: i < crumbSpecs.length - 1 && c.route ? localePath(c.route) : undefined
  }))

  // Structured breadcrumb (absolute URLs).
  const ldCrumbs = crumbSpecs.map((c, i) => ({
    name: c.label,
    url: i === crumbSpecs.length - 1 ? currentUrl : absolute(localePath(c.route ?? 'index'))
  }))

  useJsonLd([
    webPageLd({ url: currentUrl, name: opts.seo.title, description: opts.seo.description }),
    breadcrumbLd(ldCrumbs),
    opts.faq ? faqLd(opts.faq) : null,
    ...(opts.extraLd ?? [])
  ])

  return {
    crumbs: computed(() => visibleCrumbs)
  }
}

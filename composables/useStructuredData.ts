import { siteConfig } from '~/config/site'
import type { FaqItem } from '~/types/content'

/** Recursively drop null / undefined / empty-string / empty-array values so
 *  we never emit structured data for information the business hasn't provided. */
function clean<T>(input: T): T {
  if (Array.isArray(input)) {
    const arr = input.map(clean).filter((v) => v !== undefined)
    return arr as unknown as T
  }
  if (input && typeof input === 'object') {
    const out: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(input as Record<string, unknown>)) {
      const cleaned = clean(value)
      const isEmpty =
        cleaned === null ||
        cleaned === undefined ||
        cleaned === '' ||
        (Array.isArray(cleaned) && cleaned.length === 0)
      if (!isEmpty) out[key] = cleaned
    }
    return out as T
  }
  return input
}

/** Only real, non-null social profiles become sameAs entries. */
function sameAs(): string[] {
  return Object.values(siteConfig.social).filter((v): v is string => Boolean(v))
}

export function organizationLd() {
  return clean({
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.brand,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo/rafting-club-armenia-logo.svg`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    description:
      'Guided whitewater rafting on the Debed River in Lori, Armenia.',
    areaServed: { '@type': 'Country', name: 'Armenia' },
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    sameAs: sameAs()
  })
}

export function websiteLd() {
  return clean({
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.brand,
    inLanguage: ['en', 'hy', 'ru'],
    publisher: { '@id': `${siteConfig.url}/#organization` }
  })
}

/** Rafting operator as a sports activity location (no fabricated address/phone). */
export function sportsActivityLd(description: string) {
  const { lat, lng } = siteConfig.geo
  return clean({
    '@type': 'SportsActivityLocation',
    '@id': `${siteConfig.url}/#rafting`,
    name: siteConfig.brand,
    url: siteConfig.url,
    description,
    sport: 'Rafting',
    areaServed: { '@type': 'AdministrativeArea', name: 'Lori Province, Armenia' },
    parentOrganization: { '@id': `${siteConfig.url}/#organization` },
    geo:
      lat != null && lng != null
        ? { '@type': 'GeoCoordinates', latitude: lat, longitude: lng }
        : undefined,
    address: siteConfig.contact.address
      ? {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.contact.address,
          addressRegion: siteConfig.contact.region,
          addressCountry: 'AM'
        }
      : undefined
  })
}

export function webPageLd(opts: {
  url: string
  name: string
  description: string
  isPartOf?: boolean
}) {
  return clean({
    '@type': 'WebPage',
    '@id': `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    about: { '@id': `${siteConfig.url}/#organization` }
  })
}

export function breadcrumbLd(items: { name: string; url: string }[]) {
  return clean({
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url
    }))
  })
}

/** Only FAQ answers that are NOT flagged needsConfirmation qualify. */
export function faqLd(items: FaqItem[]) {
  const eligible = items.filter((i) => !i.needsConfirmation)
  if (eligible.length === 0) return null
  return clean({
    '@type': 'FAQPage',
    mainEntity: eligible.map((i) => ({
      '@type': 'Question',
      name: i.question,
      acceptedAnswer: { '@type': 'Answer', text: i.answer }
    }))
  })
}

/**
 * Emit a JSON-LD graph into <head>. Falsy entries are skipped so pages only
 * publish schema for content that genuinely exists.
 */
export function useJsonLd(nodes: (object | null | undefined)[]) {
  const graph = nodes.filter(Boolean)
  if (graph.length === 0) return
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
      }
    ]
  })
}

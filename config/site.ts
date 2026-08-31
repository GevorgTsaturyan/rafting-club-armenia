/**
 * Canonical site + business configuration.
 *
 * This is the single source of truth for business-specific values.
 * Everything the business still needs to confirm is marked `null` or with a
 * `PLACEHOLDER_` prefix so it is trivial to find and replace — search the repo
 * for "PLACEHOLDER_" before launch.
 *
 * Nothing here is invented: prices, phone numbers, emails, addresses, ratings,
 * certifications and review counts are intentionally left empty.
 */

export const SITE_URL = 'https://raftingclubarmenia.com'

export type LocaleCode = 'en' | 'hy' | 'ru'

export interface BusinessContact {
  /** E.164 phone number, e.g. "+37400000000". Leave null until confirmed. */
  phone: string | null
  /** Public contact email. Leave null until confirmed. */
  email: string | null
  /** WhatsApp number (digits only, international). Leave null until confirmed. */
  whatsapp: string | null
  /** Human readable address. Leave null until confirmed. */
  address: string | null
  /** Region / marz. Debed River runs through Lori Province. */
  region: string
  /** Country. */
  country: string
  /** Google Maps place URL. Leave null until confirmed. */
  mapUrl: string | null
}

export interface SocialLinks {
  instagram: string | null
  facebook: string | null
  youtube: string | null
  tripadvisor: string | null
  telegram: string | null
}

export interface SiteConfig {
  url: string
  brand: string
  /** Latitude/longitude of the primary meeting point. Null until confirmed. */
  geo: { lat: number | null; lng: number | null }
  contact: BusinessContact
  social: SocialLinks
  /** Analytics — leave null to keep tracking fully disabled. */
  analytics: {
    googleAnalyticsId: string | null // e.g. "G-XXXXXXXXXX"
  }
  /** Default social sharing image (Open Graph / Twitter). */
  ogImage: string
}

export const siteConfig: SiteConfig = {
  url: SITE_URL,
  brand: 'Rafting Club Armenia',
  geo: {
    // Approximate Debed River / Lori region. Replace with the exact meeting
    // point coordinates before enabling map-based structured data.
    lat: null,
    lng: null
  },
  contact: {
    phone: '+374 33 080524',
    email: null, // PLACEHOLDER_EMAIL — e.g. "info@raftingclubarmenia.com"
    // Digits only, international format (used to build the wa.me link).
    whatsapp: '37433080524',
    address: null, // PLACEHOLDER_ADDRESS
    region: 'Lori Province',
    country: 'Armenia',
    mapUrl: null // PLACEHOLDER_MAP_URL
  },
  social: {
    instagram: 'https://www.instagram.com/rafting.club.armenia/',
    facebook: 'https://www.facebook.com/share/1EiH4QwiWG/',
    youtube: null, // PLACEHOLDER_YOUTUBE
    tripadvisor: null, // PLACEHOLDER_TRIPADVISOR
    telegram: null // PLACEHOLDER_TELEGRAM
  },
  analytics: {
    googleAnalyticsId: null // Set via NUXT_PUBLIC_GA_ID or here once available.
  },
  ogImage: '/images/og/rafting-club-armenia-og.jpg'
}

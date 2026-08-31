/**
 * Content model shared by every locale.
 *
 * The same TypeScript shape is implemented once per language in
 * `content/en.ts`, `content/hy.ts`, `content/ru.ts`. Components consume the
 * localized object via `useContent()` and never hard-code copy.
 */

export interface SeoBlock {
  /** <title> — keep under ~60 chars, one clear primary topic. */
  title: string
  /** Meta description — ~150-160 chars, natural language, no keyword stuffing. */
  description: string
}

export interface SectionHeading {
  eyebrow?: string
  title: string
  intro?: string
}

export interface FeatureItem {
  /** Key of an inline SVG icon (see components/ui/AppIcon.vue). */
  icon: string
  title: string
  text: string
}

export interface StepItem {
  title: string
  text: string
}

export interface FaqItem {
  question: string
  answer: string
  /**
   * When true this answer contains business-specific details that must be
   * confirmed before publishing (kept out of FAQPage structured data).
   */
  needsConfirmation?: boolean
}

export interface GalleryImage {
  /** Path under /public. */
  src: string
  alt: string
  /** Optional caption shown in the lightbox. */
  caption?: string
}

export interface TourCard {
  id: string
  name: string
  tagline: string
  description: string
  /** null until the business confirms the real duration. */
  duration: string | null
  difficulty: string
  bestFor: string
  highlights: string[]
  image: string
  imageAlt: string
}

export interface PriceRow {
  label: string
  /** null until the business confirms the real price. */
  price: string | null
  note?: string
}

export interface HomeContent {
  seo: SeoBlock
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
    scrollHint: string
  }
  quickFacts: FeatureItem[]
  experience: {
    heading: SectionHeading
    paragraphs: string[]
    bullets: string[]
    imageAlt: string
  }
  why: {
    heading: SectionHeading
    features: FeatureItem[]
  }
  debed: {
    heading: SectionHeading
    paragraphs: string[]
    stats: { value: string; label: string }[]
    cta: string
    imageAlt: string
  }
  tours: {
    heading: SectionHeading
    note: string
    cta: string
  }
  gallery: {
    heading: SectionHeading
  }
  howItWorks: {
    heading: SectionHeading
    steps: StepItem[]
  }
  faq: {
    heading: SectionHeading
    items: FaqItem[]
  }
  finalCta: {
    title: string
    text: string
    primaryCta: string
    secondaryCta: string
  }
}

export interface ArticlePageContent {
  seo: SeoBlock
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    imageAlt: string
  }
  /** Ordered content blocks rendered as sections with H2s. */
  sections: {
    heading: string
    paragraphs: string[]
    bullets?: string[]
  }[]
  faq?: {
    heading: SectionHeading
    items: FaqItem[]
  }
  cta: {
    title: string
    text: string
    primaryCta: string
    secondaryCta: string
  }
}

export interface ToursPageContent {
  seo: SeoBlock
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    imageAlt: string
  }
  intro: string[]
  includedHeading: string
  included: string[]
  bringHeading: string
  bring: string[]
  cta: {
    title: string
    text: string
    primaryCta: string
    secondaryCta: string
  }
}

export interface PricesPageContent {
  seo: SeoBlock
  hero: {
    eyebrow: string
    title: string
    subtitle: string
  }
  intro: string[]
  /** Displayed as a note explaining prices are provided on request. */
  pendingNotice: string
  rows: PriceRow[]
  includesHeading: string
  includes: string[]
  cta: {
    title: string
    text: string
    primaryCta: string
    secondaryCta: string
  }
}

export interface AboutPageContent {
  seo: SeoBlock
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    imageAlt: string
  }
  story: {
    heading: string
    paragraphs: string[]
  }
  values: {
    heading: SectionHeading
    items: FeatureItem[]
  }
  safety: {
    heading: string
    paragraphs: string[]
    bullets: string[]
  }
  cta: {
    title: string
    text: string
    primaryCta: string
    secondaryCta: string
  }
}

export interface ContactPageContent {
  seo: SeoBlock
  hero: {
    eyebrow: string
    title: string
    subtitle: string
  }
  intro: string[]
  /** Heading + helper text for the direct-contact section. */
  channelsHeading: string
  channelsNote: string
  /** Localized label for the phone channel (brand names stay literal). */
  phoneLabel: string
  /** Call-to-action caption for each channel (numbers/URLs come from siteConfig). */
  actions: {
    call: string
    whatsapp: string
    instagram: string
    facebook: string
  }
}

export interface PrivacyPageContent {
  seo: SeoBlock
  title: string
  updatedLabel: string
  sections: { heading: string; paragraphs: string[] }[]
}

/** Complete localized content bundle. */
export interface LocaleContent {
  tours: TourCard[]
  gallery: GalleryImage[]
  home: HomeContent
  raftingInArmenia: ArticlePageContent
  debedRiver: ArticlePageContent
  toursPage: ToursPageContent
  prices: PricesPageContent
  about: AboutPageContent
  contact: ContactPageContent
  privacy: PrivacyPageContent
}

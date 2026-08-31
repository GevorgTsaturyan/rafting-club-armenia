/** Primary navigation, defined once and reused by header + footer. */
export interface NavItem {
  /** i18n route name (custom localized paths resolved via localePath). */
  route: string
  /** i18n message key for the label. */
  labelKey: string
}

export const primaryNav: NavItem[] = [
  { route: 'index', labelKey: 'nav.home' },
  { route: 'rafting-in-armenia', labelKey: 'nav.rafting' },
  { route: 'rafting-debed-river', labelKey: 'nav.debed' },
  { route: 'tours', labelKey: 'nav.tours' },
  { route: 'prices', labelKey: 'nav.prices' },
  { route: 'about', labelKey: 'nav.about' },
  { route: 'contact', labelKey: 'nav.contact' }
]

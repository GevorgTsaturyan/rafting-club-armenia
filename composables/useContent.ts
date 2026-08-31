import { computed } from 'vue'
import en from '~/content/en'
import hy from '~/content/hy'
import ru from '~/content/ru'
import type { LocaleContent } from '~/types/content'
import type { LocaleCode } from '~/config/site'

const bundles: Record<LocaleCode, LocaleContent> = { en, hy, ru }

/**
 * Returns the full localized content bundle for the active locale.
 * Components read structured page content from here (long-form copy, lists,
 * FAQ, tours, gallery), while short UI micro-copy lives in i18n JSON messages.
 */
export function useContent() {
  const { locale } = useI18n()
  return computed<LocaleContent>(() => bundles[locale.value as LocaleCode] ?? en)
}

<script setup lang="ts">
import { primaryNav } from '~/composables/useNav'
import { siteConfig } from '~/config/site'

const { t, locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const year = 2025 // Static build stamp; update per release.

const contact = siteConfig.contact
const socials = computed(() =>
  [
    { key: 'instagram', icon: 'instagram', url: siteConfig.social.instagram },
    { key: 'facebook', icon: 'facebook', url: siteConfig.social.facebook },
    { key: 'youtube', icon: 'youtube', url: siteConfig.social.youtube },
    { key: 'telegram', icon: 'telegram', url: siteConfig.social.telegram }
  ].filter((s) => s.url)
)
</script>

<template>
  <footer class="footer section--deep">
    <div class="container container--wide">
      <div class="footer__top">
        <div class="footer__brand">
          <UiAppLogo variant="light" />
          <p class="footer__tagline">{{ t('footer.tagline') }}</p>
          <div v-if="socials.length" class="footer__social">
            <a
              v-for="s in socials"
              :key="s.key"
              :href="s.url!"
              class="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="s.key"
            >
              <UiAppIcon :name="s.icon" :size="20" />
            </a>
          </div>
          <p v-else class="footer__pending">{{ t('footer.socialPending') }}</p>
        </div>

        <nav class="footer__col" :aria-label="t('footer.explore')">
          <h2 class="footer__heading">{{ t('footer.explore') }}</h2>
          <ul>
            <li v-for="item in primaryNav" :key="item.route">
              <NuxtLink :to="localePath(item.route)" class="footer__link">{{ t(item.labelKey) }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="footer__col">
          <h2 class="footer__heading">{{ t('footer.contactHeading') }}</h2>
          <ul class="footer__contact">
            <li>
              <UiAppIcon name="phone" :size="18" />
              <a v-if="contact.phone" :href="`tel:${contact.phone}`" class="footer__link">{{ contact.phone }}</a>
              <span v-else class="footer__muted">{{ t('footer.pending') }}</span>
            </li>
            <li>
              <UiAppIcon name="mail" :size="18" />
              <a v-if="contact.email" :href="`mailto:${contact.email}`" class="footer__link">{{ contact.email }}</a>
              <span v-else class="footer__muted">{{ t('footer.pending') }}</span>
            </li>
            <li>
              <UiAppIcon name="map-pin" :size="18" />
              <span>{{ contact.region }}, {{ contact.country }}</span>
            </li>
          </ul>
        </div>

        <nav class="footer__col" :aria-label="t('footer.languagesHeading')">
          <h2 class="footer__heading">{{ t('footer.languagesHeading') }}</h2>
          <ul>
            <li v-for="l in (locales as any[])" :key="l.code">
              <NuxtLink
                :to="switchLocalePath(l.code)"
                class="footer__link"
                :class="{ 'is-active': l.code === locale }"
                :hreflang="l.code"
              >{{ l.name }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <div class="footer__bottom">
        <p>© {{ year }} {{ siteConfig.brand }}. {{ t('footer.rights') }}</p>
        <div class="footer__legal">
          <NuxtLink :to="localePath('privacy')" class="footer__link">{{ t('footer.privacy') }}</NuxtLink>
        </div>
      </div>
      <p class="footer__disclaimer">{{ t('footer.disclaimer') }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer { padding-block: clamp(3rem, 6vw, 5rem) 2rem; }
.footer__top {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1.2fr 1fr;
  gap: clamp(1.5rem, 4vw, 3rem);
  padding-bottom: 2.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
}
.footer__tagline {
  margin-top: 1.1rem;
  color: rgba(234, 244, 245, 0.8);
  max-width: 34ch;
  font-size: 0.95rem;
}
.footer__social { display: flex; gap: 0.6rem; margin-top: 1.25rem; }
.footer__social-link {
  display: inline-flex;
  padding: 0.55rem;
  border-radius: 10px;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  transition: background 0.2s var(--ease), transform 0.2s var(--ease);
}
.footer__social-link:hover { background: var(--accent); color: #fff; transform: translateY(-2px); }
.footer__pending { margin-top: 1.1rem; font-size: 0.85rem; color: rgba(234, 244, 245, 0.55); }

.footer__heading {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--river-300);
  margin-bottom: 1rem;
}
.footer__col ul { display: flex; flex-direction: column; gap: 0.6rem; }
.footer__link { color: rgba(234, 244, 245, 0.85); font-size: 0.95rem; }
.footer__link:hover { color: #fff; }
.footer__link.is-active { color: var(--accent); font-weight: 600; }
.footer__muted { color: rgba(234, 244, 245, 0.5); font-size: 0.95rem; }
.footer__contact { display: flex; flex-direction: column; gap: 0.7rem; }
.footer__contact li { display: flex; align-items: center; gap: 0.6rem; color: rgba(234, 244, 245, 0.85); font-size: 0.95rem; }
.footer__contact svg { color: var(--river-300); flex: none; }

.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding-top: 1.5rem;
  color: rgba(234, 244, 245, 0.7);
  font-size: 0.9rem;
}
.footer__disclaimer {
  margin-top: 0.75rem;
  font-size: 0.8rem;
  color: rgba(234, 244, 245, 0.45);
}

@media (max-width: 900px) {
  .footer__top { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 560px) {
  .footer__top { grid-template-columns: 1fr; }
}
</style>

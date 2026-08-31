<script setup lang="ts">
import { computed } from 'vue'
import { usePageMeta } from '~/composables/usePageMeta'
import { siteConfig } from '~/config/site'

const { t } = useI18n()
const content = useContent()
const page = computed(() => content.value.contact)
const tours = computed(() => content.value.tours)
const contact = siteConfig.contact

const { crumbs } = usePageMeta({
  seo: page.value.seo,
  crumbs: [{ label: t('nav.contact') }]
})

const details = computed(() => [
  { icon: 'phone', label: page.value.details.phoneLabel, value: contact.phone, href: contact.phone ? `tel:${contact.phone}` : null },
  { icon: 'mail', label: page.value.details.emailLabel, value: contact.email, href: contact.email ? `mailto:${contact.email}` : null },
  { icon: 'whatsapp', label: page.value.details.whatsappLabel, value: contact.whatsapp, href: contact.whatsapp ? `https://wa.me/${contact.whatsapp}` : null },
  { icon: 'map-pin', label: page.value.details.regionLabel, value: `${contact.region}, ${contact.country}`, href: contact.mapUrl }
])
</script>

<template>
  <div>
    <PageHero
      :eyebrow="page.hero.eyebrow"
      :title="page.hero.title"
      :subtitle="page.hero.subtitle"
      image="/images/rafting/contact-rafting-club-armenia.jpg"
      :image-alt="page.hero.title"
      :crumbs="crumbs"
    />

    <section class="section">
      <div class="container contact">
        <div class="contact__aside">
          <div class="prose reveal">
            <p v-for="(p, i) in page.intro" :key="i">{{ p }}</p>
          </div>

          <ul class="details reveal">
            <li v-for="d in details" :key="d.label" class="details__item">
              <span class="details__icon"><UiAppIcon :name="d.icon" :size="20" /></span>
              <span class="details__body">
                <span class="details__label">{{ d.label }}</span>
                <a v-if="d.href && d.value" :href="d.href" class="details__value" target="_blank" rel="noopener noreferrer">{{ d.value }}</a>
                <span v-else-if="d.value" class="details__value">{{ d.value }}</span>
                <span v-else class="details__pending">{{ page.details.pending }}</span>
              </span>
            </li>
          </ul>
        </div>

        <div class="contact__form reveal">
          <ContactForm :copy="page.form" :tours="tours" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: clamp(1.5rem, 5vw, 4rem); align-items: start; }
.contact__aside > * + * { margin-top: 2rem; }
.details { display: flex; flex-direction: column; gap: 1rem; }
.details__item { display: flex; align-items: flex-start; gap: 0.9rem; }
.details__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px; height: 46px;
  border-radius: 12px;
  color: var(--river);
  background: linear-gradient(135deg, rgba(14, 124, 134, 0.12), rgba(79, 185, 194, 0.18));
  flex: none;
}
.details__body { display: flex; flex-direction: column; }
.details__label { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--slate); }
.details__value { font-weight: 600; }
.details__pending { color: var(--text-muted); font-style: italic; }

@media (max-width: 880px) {
  .contact { grid-template-columns: 1fr; }
}
</style>

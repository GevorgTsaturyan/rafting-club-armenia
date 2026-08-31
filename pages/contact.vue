<script setup lang="ts">
import { computed } from 'vue'
import { usePageMeta } from '~/composables/usePageMeta'
import { siteConfig } from '~/config/site'

const { t } = useI18n()
const content = useContent()
const page = computed(() => content.value.contact)
const contact = siteConfig.contact
const social = siteConfig.social

const { crumbs } = usePageMeta({
  seo: page.value.seo,
  crumbs: [{ label: t('nav.contact') }]
})

/** Derive a display handle (e.g. "@raftingclubarmenia") from a social URL. */
function handleFrom(url: string): string {
  try {
    const seg = new URL(url).pathname.split('/').filter(Boolean)[0]
    return seg ? `@${seg}` : new URL(url).hostname
  } catch {
    return ''
  }
}

/**
 * Clickable contact channels, built from siteConfig. Phone + WhatsApp use the
 * confirmed number; Instagram + Facebook appear once their URLs are set in
 * config/site.ts. No form, no backend — just direct links.
 */
const channels = computed(() => {
  const list: {
    key: string
    icon: string
    label: string
    value: string
    action: string
    href: string
    external: boolean
  }[] = []

  if (contact.phone) {
    list.push({
      key: 'phone',
      icon: 'phone',
      label: page.value.phoneLabel,
      value: contact.phone,
      action: page.value.actions.call,
      href: `tel:${contact.phone.replace(/\s+/g, '')}`,
      external: false
    })
  }
  if (contact.whatsapp) {
    list.push({
      key: 'whatsapp',
      icon: 'whatsapp',
      label: 'WhatsApp',
      value: contact.phone ?? `+${contact.whatsapp}`,
      action: page.value.actions.whatsapp,
      href: `https://wa.me/${contact.whatsapp}`,
      external: true
    })
  }
  if (social.instagram) {
    list.push({
      key: 'instagram',
      icon: 'instagram',
      label: 'Instagram',
      value: handleFrom(social.instagram),
      action: page.value.actions.instagram,
      href: social.instagram,
      external: true
    })
  }
  if (social.facebook) {
    list.push({
      key: 'facebook',
      icon: 'facebook',
      label: 'Facebook',
      value: handleFrom(social.facebook),
      action: page.value.actions.facebook,
      href: social.facebook,
      external: true
    })
  }
  return list
})
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
        <div class="contact__intro reveal">
          <span class="eyebrow">{{ page.hero.eyebrow }}</span>
          <h2 class="contact__heading">{{ page.channelsHeading }}</h2>
          <div class="prose">
            <p v-for="(p, i) in page.intro" :key="i">{{ p }}</p>
          </div>
          <p class="contact__note">{{ page.channelsNote }}</p>
        </div>

        <ul class="channels reveal">
          <li v-for="c in channels" :key="c.key">
            <a
              class="channel"
              :href="c.href"
              :target="c.external ? '_blank' : undefined"
              :rel="c.external ? 'noopener noreferrer' : undefined"
              :aria-label="`${c.label}: ${c.action}`"
            >
              <span class="channel__icon" :class="`channel__icon--${c.key}`">
                <UiAppIcon :name="c.icon" :size="24" />
              </span>
              <span class="channel__body">
                <span class="channel__label">{{ c.label }}</span>
                <span class="channel__value">{{ c.value }}</span>
                <span class="channel__action">{{ c.action }}</span>
              </span>
              <UiAppIcon name="arrow-right" :size="20" class="channel__arrow" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: clamp(1.5rem, 5vw, 4rem);
  align-items: start;
}
.contact__intro { position: sticky; top: calc(var(--header-h) + 1.5rem); }
.contact__heading { font-size: var(--fs-h2); margin: 0.9rem 0 1.1rem; }
.contact__note { margin-top: 1.1rem; color: var(--text-muted); font-size: 0.95rem; }

.channels { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(0.9rem, 2vw, 1.25rem); }
.channel {
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 100%;
  padding: 1.2rem 1.35rem;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  color: var(--ink);
  transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease), border-color 0.3s var(--ease);
}
.channel:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--river-300);
  color: var(--ink);
}
.channel__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  color: #fff;
  flex: none;
  background: linear-gradient(135deg, var(--river), var(--deep));
}
.channel__icon--whatsapp { background: linear-gradient(135deg, #25d366, #128c7e); }
.channel__icon--instagram { background: linear-gradient(135deg, #f58529, #dd2a7b 55%, #8134af); }
.channel__icon--facebook { background: linear-gradient(135deg, #1877f2, #0b5fce); }

.channel__body { display: flex; flex-direction: column; min-width: 0; }
.channel__label {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--slate);
}
.channel__value {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.12rem;
  color: var(--ink);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.channel__action { font-size: 0.88rem; color: var(--river); font-weight: 600; }
.channel__arrow { margin-left: auto; color: var(--accent); flex: none; transition: transform 0.2s var(--ease); }
.channel:hover .channel__arrow { transform: translateX(4px); }

@media (max-width: 880px) {
  .contact { grid-template-columns: 1fr; }
  .contact__intro { position: static; }
}
@media (max-width: 520px) {
  .channels { grid-template-columns: 1fr; }
}
</style>

<script setup lang="ts">
import { ref } from 'vue'

/**
 * Language selector. Uses switchLocalePath() so switching language keeps the
 * user on the translated equivalent of the current page. Renders real <a>
 * links, so it works with static generation and is crawlable.
 */
withDefaults(defineProps<{ variant?: 'light' | 'dark'; layout?: 'dropdown' | 'inline' }>(), {
  variant: 'light',
  layout: 'dropdown'
})

const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const open = ref(false)
const root = ref<HTMLElement | null>(null)

const current = computed(
  () => (locales.value as any[]).find((l) => l.code === locale.value)
)

function close() {
  open.value = false
}

onClickOutside(root, close)
</script>

<template>
  <!--
    Inline layout: a flat row of language links. Used inside the mobile menu,
    where an absolutely-positioned dropdown would open off-screen. No toggle,
    no popup — every language is always tappable.
  -->
  <div v-if="layout === 'inline'" class="lang lang--inline" :aria-label="t('header.language')" role="group">
    <NuxtLink
      v-for="l in (locales as any[])"
      :key="l.code"
      :to="switchLocalePath(l.code)"
      class="lang__pill"
      :class="{ 'is-active': l.code === locale }"
      :hreflang="l.code"
      :aria-current="l.code === locale ? 'true' : undefined"
    >
      {{ l.name }}
    </NuxtLink>
  </div>

  <div v-else ref="root" class="lang" :class="`lang--${variant}`">
    <button
      type="button"
      class="lang__toggle"
      :aria-expanded="open"
      aria-haspopup="listbox"
      :aria-label="t('header.language')"
      @click="open = !open"
    >
      <UiAppIcon name="globe" :size="18" />
      <span class="lang__code">{{ locale.toUpperCase() }}</span>
      <UiAppIcon name="chevron-down" :size="16" class="lang__caret" :class="{ 'is-open': open }" />
    </button>

    <ul v-show="open" class="lang__menu" role="listbox">
      <li v-for="l in (locales as any[])" :key="l.code" role="option" :aria-selected="l.code === locale">
        <NuxtLink
          :to="switchLocalePath(l.code)"
          class="lang__item"
          :class="{ 'is-active': l.code === locale }"
          :hreflang="l.code"
          @click="close"
        >
          <span>{{ l.name }}</span>
          <UiAppIcon v-if="l.code === locale" name="check" :size="16" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.lang { position: relative; }
.lang__toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.7rem;
  border-radius: var(--radius-pill);
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--ink);
  box-shadow: inset 0 0 0 1.5px var(--line);
  transition: box-shadow 0.2s var(--ease), background 0.2s var(--ease);
}
.lang__toggle:hover { box-shadow: inset 0 0 0 1.5px var(--river-300); }
.lang__caret { transition: transform 0.2s var(--ease); }
.lang__caret.is-open { transform: rotate(180deg); }

.lang--dark .lang__toggle {
  color: #fff;
  box-shadow: inset 0 0 0 1.5px rgba(255, 255, 255, 0.35);
}
.lang--dark .lang__toggle:hover { background: rgba(255, 255, 255, 0.12); }

.lang__menu {
  position: absolute;
  right: 0;
  top: calc(100% + 0.5rem);
  min-width: 168px;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
  padding: 0.35rem;
  z-index: 60;
}
.lang__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.6rem 0.75rem;
  border-radius: 9px;
  color: var(--ink);
  font-weight: 500;
}
.lang__item:hover { background: var(--mist); color: var(--ink); }
.lang__item.is-active { color: var(--river); font-weight: 700; }

/* Inline layout (mobile menu) --------------------------------------------- */
.lang--inline {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.lang__pill {
  display: inline-flex;
  align-items: center;
  padding: 0.55rem 1rem;
  border-radius: var(--radius-pill);
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--ink);
  box-shadow: inset 0 0 0 1.5px var(--line);
  transition: box-shadow 0.2s var(--ease), background 0.2s var(--ease), color 0.2s var(--ease);
}
.lang__pill:hover { color: var(--ink); box-shadow: inset 0 0 0 1.5px var(--river-300); }
.lang__pill.is-active {
  color: #fff;
  background: var(--river);
  box-shadow: inset 0 0 0 1.5px var(--river);
}
.lang__pill.is-active:hover { color: #fff; background: var(--river-600); }
</style>

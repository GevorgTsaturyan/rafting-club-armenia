<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { primaryNav } from '~/composables/useNav'

/**
 * Premium responsive header.
 * - Transparent over the (always dark) page hero at the top of the page.
 * - Condenses to a solid, shadowed bar once the user scrolls.
 * - Accessible slide-in mobile menu with body-scroll lock + Escape to close.
 */
const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const scrolled = ref(false)
const menuOpen = ref(false)

const bookPath = computed(() => localePath('contact'))

function isActive(name: string) {
  const target = localePath(name)
  if (name === 'index') return route.path === target || route.path === `${target}/`
  return route.path.startsWith(target)
}

let ticking = false
function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    scrolled.value = window.scrollY > 24
    ticking = false
  })
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

// Close the mobile menu on navigation and lock scroll while it's open.
watch(() => route.fullPath, () => (menuOpen.value = false))
watch(menuOpen, (open) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})
onBeforeUnmount(() => {
  if (typeof document !== 'undefined') document.body.style.overflow = ''
})
</script>

<template>
  <header class="header" :class="{ 'is-scrolled': scrolled, 'is-menu': menuOpen }">
    <div class="container container--wide header__inner">
      <NuxtLink :to="localePath('index')" class="header__brand" :aria-label="t('header.brandLine1') + ' ' + t('header.brandLine2')">
        <UiAppLogo :variant="scrolled || menuOpen ? 'dark' : 'light'" />
      </NuxtLink>

      <nav class="header__nav" :aria-label="t('header.brandLine1')">
        <ul>
          <li v-for="item in primaryNav" :key="item.route">
            <NuxtLink :to="localePath(item.route)" class="header__link" :class="{ 'is-active': isActive(item.route) }">
              {{ t(item.labelKey) }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="header__actions">
        <LanguageSwitcher :variant="scrolled || menuOpen ? 'light' : 'dark'" class="header__lang" />
        <NuxtLink :to="bookPath" class="btn header__cta">{{ t('cta.book') }}</NuxtLink>
        <button
          type="button"
          class="header__burger"
          :aria-expanded="menuOpen"
          :aria-label="menuOpen ? t('header.closeMenu') : t('header.openMenu')"
          @click="menuOpen = !menuOpen"
        >
          <UiAppIcon :name="menuOpen ? 'close' : 'menu'" :size="26" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="menu">
      <div v-show="menuOpen" class="mobile" @keydown.esc="menuOpen = false">
        <nav class="mobile__nav" :aria-label="t('header.openMenu')">
          <NuxtLink
            v-for="item in primaryNav"
            :key="item.route"
            :to="localePath(item.route)"
            class="mobile__link"
            :class="{ 'is-active': isActive(item.route) }"
          >
            {{ t(item.labelKey) }}
            <UiAppIcon name="arrow-right" :size="20" />
          </NuxtLink>
        </nav>
        <div class="mobile__footer">
          <NuxtLink :to="bookPath" class="btn btn--lg btn--block">{{ t('cta.book') }}</NuxtLink>
          <LanguageSwitcher variant="light" class="mobile__lang" />
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  height: var(--header-h);
  display: flex;
  align-items: center;
  transition: background 0.3s var(--ease), box-shadow 0.3s var(--ease), backdrop-filter 0.3s var(--ease);
}
.header.is-scrolled,
.header.is-menu {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: saturate(140%) blur(12px);
  box-shadow: 0 1px 0 var(--line), var(--shadow-sm);
}
.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
}
.header__brand { display: inline-flex; }

.header__nav { display: none; }
.header__nav ul { display: flex; align-items: center; gap: 0.35rem; }
.header__link {
  position: relative;
  display: inline-block;
  padding: 0.5rem 0.75rem;
  font-weight: 600;
  font-size: 0.94rem;
  color: rgba(255, 255, 255, 0.92);
  border-radius: 8px;
  transition: color 0.2s var(--ease), background 0.2s var(--ease);
}
.header__link::after {
  content: '';
  position: absolute;
  left: 0.75rem; right: 0.75rem; bottom: 0.32rem;
  height: 2px;
  background: var(--accent);
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s var(--ease);
}
.header__link:hover::after,
.header__link.is-active::after { transform: scaleX(1); }

.is-scrolled .header__link { color: var(--ink); }
.is-scrolled .header__link:hover { color: var(--river); }

.header__actions { display: flex; align-items: center; gap: 0.6rem; }
.header__lang { display: none; }
.header__cta { display: none; }

.header__burger {
  display: inline-flex;
  padding: 0.4rem;
  border-radius: 10px;
  color: #fff;
}
.is-scrolled .header__burger,
.is-menu .header__burger { color: var(--ink); }

/* Mobile menu ------------------------------------------------------------- */
.mobile {
  position: fixed;
  inset: var(--header-h) 0 0 0;
  background: var(--paper);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem var(--gutter) 2rem;
  overflow-y: auto;
}
.mobile__nav { display: flex; flex-direction: column; }
.mobile__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.05rem 0.25rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--ink);
  border-bottom: 1px solid var(--line);
}
.mobile__link.is-active { color: var(--river); }
.mobile__link svg { color: var(--accent); }
.mobile__footer { display: flex; flex-direction: column; gap: 1.1rem; margin-top: 2rem; }
.mobile__lang { align-self: flex-start; }

.menu-enter-active, .menu-leave-active { transition: opacity 0.25s var(--ease), transform 0.25s var(--ease); }
.menu-enter-from, .menu-leave-to { opacity: 0; transform: translateY(-8px); }

@media (min-width: 1024px) {
  .header__nav { display: block; }
  .header__lang { display: inline-flex; }
  .header__cta { display: inline-flex; }
  .header__burger { display: none; }
}
</style>

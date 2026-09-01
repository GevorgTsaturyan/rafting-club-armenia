<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from 'vue'
import type { GalleryImage } from '~/types/content'

const props = defineProps<{ images: GalleryImage[] }>()
const { t } = useI18n()

const activeIndex = ref<number | null>(null)
const isOpen = computed(() => activeIndex.value !== null)

function open(i: number) { activeIndex.value = i }
function close() { activeIndex.value = null }
function prev() {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length
}
function next() {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value + 1) % props.images.length
}

function onKey(e: KeyboardEvent) {
  if (!isOpen.value) return
  if (e.key === 'Escape') close()
  else if (e.key === 'ArrowLeft') prev()
  else if (e.key === 'ArrowRight') next()
}

watch(isOpen, (v) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = v ? 'hidden' : ''
  if (v) document.addEventListener('keydown', onKey)
  else document.removeEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
    document.removeEventListener('keydown', onKey)
  }
})
</script>

<template>
  <div class="gallery">
    <ul class="gallery__grid">
      <li
        v-for="(img, i) in images"
        :key="img.src"
        class="gallery__cell reveal"
        :class="{ 'gallery__cell--tall': i % 5 === 0 }"
      >
        <button type="button" class="gallery__btn" :aria-label="t('gallery.open')" @click="open(i)">
          <UiAppImage :src="img.src" :alt="img.alt" ratio="1 / 1" :rounded="false" />
          <span class="gallery__hover" aria-hidden="true">
            <UiAppIcon name="target" :size="26" />
          </span>
        </button>
      </li>
    </ul>

    <transition name="fade">
      <div v-if="isOpen" class="lightbox" role="dialog" aria-modal="true" @click.self="close">
        <button type="button" class="lightbox__close" :aria-label="t('gallery.close')" @click="close">
          <UiAppIcon name="close" :size="26" />
        </button>
        <button type="button" class="lightbox__nav lightbox__nav--prev" :aria-label="t('gallery.prev')" @click="prev">
          <UiAppIcon name="chevron-left" :size="30" />
        </button>
        <figure class="lightbox__figure">
          <img
            v-if="activeIndex !== null"
            :src="images[activeIndex].src"
            :alt="images[activeIndex].alt"
            class="lightbox__img"
          />
          <figcaption v-if="activeIndex !== null" class="lightbox__cap">
            {{ images[activeIndex].caption || images[activeIndex].alt }}
          </figcaption>
        </figure>
        <button type="button" class="lightbox__nav lightbox__nav--next" :aria-label="t('gallery.next')" @click="next">
          <UiAppIcon name="chevron-right" :size="30" />
        </button>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.gallery__grid {
  display: grid;
  /* minmax(0, 1fr): without the 0 floor, the tall cell's 1/1 aspect-ratio image
     forces its column wider than the viewport → horizontal scroll on mobile. */
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-rows: 1fr;
  gap: clamp(0.6rem, 1.5vw, 1rem);
}
.gallery__cell--tall { grid-row: span 2; }
.gallery__cell--tall :deep(.img) { height: 100%; }
.gallery__btn {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}
.gallery__btn :deep(.img) { height: 100%; transition: transform 0.5s var(--ease); }
.gallery__btn:hover :deep(.img) { transform: scale(1.06); }
.gallery__hover {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: rgba(10, 28, 34, 0.25);
  opacity: 0;
  transition: opacity 0.3s var(--ease);
}
.gallery__btn:hover .gallery__hover { opacity: 1; }

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: clamp(1rem, 4vw, 3rem);
  background: rgba(6, 18, 22, 0.92);
  backdrop-filter: blur(6px);
}
.lightbox__figure { max-width: min(1100px, 92vw); text-align: center; }
.lightbox__img {
  max-height: 82vh;
  width: auto;
  margin-inline: auto;
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
}
.lightbox__cap { margin-top: 0.9rem; color: rgba(255, 255, 255, 0.85); font-size: 0.9rem; }
.lightbox__close {
  position: absolute;
  top: clamp(1rem, 3vw, 2rem);
  right: clamp(1rem, 3vw, 2rem);
  color: #fff;
  padding: 0.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
}
.lightbox__close:hover { background: rgba(255, 255, 255, 0.24); }
.lightbox__nav {
  flex: none;
  color: #fff;
  padding: 0.6rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
}
.lightbox__nav:hover { background: rgba(255, 255, 255, 0.24); }

.fade-enter-active, .fade-leave-active { transition: opacity 0.25s var(--ease); }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 720px) {
  .gallery__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .lightbox__nav { position: absolute; bottom: 1.5rem; }
  .lightbox__nav--prev { left: 25%; }
  .lightbox__nav--next { right: 25%; }
}
</style>

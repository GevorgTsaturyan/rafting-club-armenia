<script setup lang="ts">
import { ref } from 'vue'
import type { FaqItem } from '~/types/content'

defineProps<{ items: FaqItem[] }>()

// Native <details> gives us accessible, keyboard-friendly accordions with zero
// JS required; we only track an id for smooth single-open behaviour on desktop.
const open = ref<number | null>(0)
</script>

<template>
  <div class="faq">
    <details
      v-for="(item, i) in items"
      :key="i"
      class="faq__item reveal"
      :open="open === i"
      @toggle="(e: any) => { if (e.target.open) open = i }"
    >
      <summary class="faq__q">
        <span>{{ item.question }}</span>
        <UiAppIcon name="chevron-down" :size="20" class="faq__chevron" />
      </summary>
      <div class="faq__a">
        <p>{{ item.answer }}</p>
      </div>
    </details>
  </div>
</template>

<style scoped>
.faq { display: flex; flex-direction: column; gap: 0.85rem; }
.faq__item {
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}
.faq__q {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.15rem 1.35rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
  cursor: pointer;
  list-style: none;
}
.faq__q::-webkit-details-marker { display: none; }
.faq__chevron { flex: none; color: var(--river); transition: transform 0.25s var(--ease); }
.faq__item[open] .faq__chevron { transform: rotate(180deg); }
.faq__a { padding: 0 1.35rem 1.25rem; }
.faq__a p { color: var(--text-muted); }
</style>

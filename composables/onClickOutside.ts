import { onBeforeUnmount, onMounted, type Ref } from 'vue'

/**
 * Minimal click-outside helper (avoids pulling in a utility library).
 * Calls `handler` when a pointer/focus event lands outside `target`.
 */
export function onClickOutside(target: Ref<HTMLElement | null>, handler: () => void) {
  if (typeof window === 'undefined') return

  const listener = (e: Event) => {
    const el = target.value
    if (el && !el.contains(e.target as Node)) handler()
  }
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') handler()
  }

  onMounted(() => {
    document.addEventListener('click', listener, true)
    document.addEventListener('keydown', onKey)
  })
  onBeforeUnmount(() => {
    document.removeEventListener('click', listener, true)
    document.removeEventListener('keydown', onKey)
  })
}

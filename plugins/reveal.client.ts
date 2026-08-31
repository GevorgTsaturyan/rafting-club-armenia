/**
 * Lightweight scroll-reveal. Adds `.is-visible` to any `.reveal` element as it
 * enters the viewport — no animation library, no layout shift (elements keep
 * their space; only opacity/transform animate). Re-scans after each navigation.
 */
export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  )

  const scan = () => {
    const els = document.querySelectorAll('.reveal:not(.is-visible)')
    els.forEach((el) => {
      if (reduce) {
        el.classList.add('is-visible')
      } else {
        observer.observe(el)
      }
    })
  }

  nuxtApp.hook('page:finish', () => {
    // Wait a frame so freshly rendered nodes exist in the DOM.
    requestAnimationFrame(scan)
  })

  nuxtApp.hook('app:mounted', () => requestAnimationFrame(scan))
})

/**
 * Google Analytics 4 loader — only activates when a measurement ID is provided
 * via NUXT_PUBLIC_GA_ID (runtimeConfig.public.gaId). With no ID, nothing is
 * loaded and no tracking occurs, keeping the site clean and privacy-friendly
 * by default.
 *
 * Page views are sent manually (send_page_view: false): once for the initial
 * hydrated page, then again on every client-side navigation between the
 * localized routes (/en, /hy/…, /ru/…). A plain gtag `config` only reports the
 * first page in an SPA, so this is what keeps per-route analytics accurate.
 */
export default defineNuxtPlugin(() => {
  const gaId = (useRuntimeConfig().public.gaId as string)?.trim()
  if (!gaId) return

  // Define the gtag stub up front so page views can be queued immediately;
  // they flush once the async library below loads. Kept in JS (not an inline
  // <script>) so no inline-script CSP allowance is needed.
  const w = window as unknown as { dataLayer: unknown[]; gtag: (...args: unknown[]) => void }
  w.dataLayer = w.dataLayer || []
  w.gtag = function gtag() {
    w.dataLayer.push(arguments)
  }
  w.gtag('js', new Date())
  w.gtag('config', gaId, { anonymize_ip: true, send_page_view: false })

  // Load the GA4 library exactly once.
  useHead({
    script: [{ src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`, async: true }]
  })

  const router = useRouter()
  let lastPath = ''

  // Treat "/en/" and "/en" as the same page so trailing-slash normalization on
  // the initial load can't record the first view twice.
  const normalize = (p: string) => (p.length > 1 ? p.replace(/\/+$/, '') : p)

  function trackPageView(rawPath: string) {
    const path = normalize(rawPath)
    if (path === lastPath) return // guard against duplicate fires for one route
    lastPath = path
    w.gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.origin + path,
      page_title: document.title
    })
  }

  // Initial view now, then one per subsequent in-app navigation.
  trackPageView(router.currentRoute.value.fullPath)
  router.afterEach((to) => nextTick(() => trackPageView(to.fullPath)))
})

/**
 * Google Analytics 4 loader — only activates when a measurement ID is provided
 * via NUXT_PUBLIC_GA_ID (or siteConfig). With no ID, nothing is loaded and no
 * tracking occurs, keeping the site clean and privacy-friendly by default.
 */
export default defineNuxtPlugin(() => {
  const gaId = (useRuntimeConfig().public.gaId as string)?.trim()
  if (!gaId) return

  useHead({
    script: [
      { src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`, async: true },
      {
        innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`
      }
    ]
  })
})

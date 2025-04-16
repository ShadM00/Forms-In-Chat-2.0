'use client'

import React, { useEffect, Suspense, useMemo } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import dynamic from "next/dynamic"

const PHProvider = dynamic(
  () => import('posthog-js/react').then(mod => mod.PostHogProvider),
  { ssr: false }
)

let posthogClient: any = null

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    import('posthog-js').then((mod) => {
      posthogClient = mod.default
      const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
      const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com'
      if (key && posthogClient) {
        posthogClient.init(key, {
          api_host: host,
          person_profiles: 'identified_only',
          capture_pageview: false
        })
      }
    })
  }, [])

  return (
    <PHProvider client={posthogClient}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      <>
        {children}
      </>
    </PHProvider>
  )
}

function PostHogPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const posthog = useMemo(() => {
    if (typeof window !== 'undefined' && posthogClient) {
      return posthogClient
    }
    return null
  }, [])

  useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname
      if (searchParams.toString()) {
        url = url + "?" + searchParams.toString();
      }

      posthog.capture('$pageview', { '$current_url': url })
    }
  }, [pathname, searchParams, posthog])

  return null
}
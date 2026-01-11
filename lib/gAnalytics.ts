// Client-only analytics initialization
// Uses dynamic imports to prevent SSR evaluation
let gAnalyticsInstance: any = null
let initPromise: Promise<any> | null = null

async function getAnalytics() {
  // Guard against SSR - return no-op immediately
  if (typeof window === "undefined") {
    return {
      track: () => Promise.resolve(),
      page: () => Promise.resolve(),
      identify: () => Promise.resolve(),
      reset: () => Promise.resolve(),
    }
  }

  // Return existing instance if available
  if (gAnalyticsInstance) {
    return gAnalyticsInstance
  }

  // Return existing promise if initialization in progress
  if (initPromise) {
    return initPromise
  }

  // Initialize using dynamic imports (only executed client-side)
  initPromise = (async () => {
    try {
      const [AnalyticsModule, googleAnalyticsModule] = await Promise.all([
        import("analytics"),
        import("@analytics/google-analytics"),
      ])

      const Analytics = AnalyticsModule.default
      const googleAnalytics = googleAnalyticsModule.default

      gAnalyticsInstance = Analytics({
        app: "ZuAI",
        plugins: [
          googleAnalytics({
            measurementIds: [process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS],
            debug: false,
          }),
        ],
      })

      initPromise = null
      return gAnalyticsInstance
    } catch (error) {
      console.warn("Failed to initialize analytics:", error)
      initPromise = null
      return {
        track: () => Promise.resolve(),
        page: () => Promise.resolve(),
        identify: () => Promise.resolve(),
        reset: () => Promise.resolve(),
      }
    }
  })()

  return initPromise
}

// Export analytics with lazy async initialization
export const gAnalytics = new Proxy({} as any, {
  get(_target, prop) {
    // For SSR, return no-op immediately
    if (typeof window === "undefined") {
      return () => {}
    }

    const analyticsPromise = getAnalytics()

    // Handle async initialization
    if (analyticsPromise instanceof Promise) {
      if (prop === "track") {
        return async (...args: any[]) => {
          const analytics = await analyticsPromise
          return analytics.track(...args)
        }
      }
      if (prop === "page") {
        return async (...args: any[]) => {
          const analytics = await analyticsPromise
          return analytics.page(...args)
        }
      }
      // For other methods, return no-op that resolves the promise
      return () => {}
    }

    // If we have the instance, return the method
    const value = analyticsPromise[prop as keyof typeof analyticsPromise]
    return typeof value === "function" ? value.bind(analyticsPromise) : value
  },
})

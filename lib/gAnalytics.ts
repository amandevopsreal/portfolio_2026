import googleAnalytics from "@analytics/google-analytics"
import Analytics from "analytics"

const gAnalytics = Analytics({
  app: "ZuAI",
  plugins: [
    googleAnalytics({
      measurementIds: [process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS],
      debug: false,
    }),
  ],
})

export { gAnalytics }

import type { Viewport } from "next"

import "./globals.css"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/react"

import { metaDataObject } from "@/config/metadata"
import { OutfitFont } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Header } from "@/components/header/header"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = metaDataObject

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "container mx-auto px-4 font-outfit antialiased",
            OutfitFont.variable
          )}
        >
          <Analytics />
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!} />
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="pt-6 sm:pt-12" id="home">
              <Header />
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

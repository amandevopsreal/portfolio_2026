import { Outfit } from "next/font/google"

export const OutfitFont = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

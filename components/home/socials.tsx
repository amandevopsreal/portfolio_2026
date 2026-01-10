"use client"

import Link from "next/link"
import { DATA } from "@/data/data"
import GithubJson from "@/public/static/lottie/github.json"
import GmailJson from "@/public/static/lottie/gmail.json"
import LinkedinJson from "@/public/static/lottie/linkedin.json"

import { gAnalytics } from "@/lib/gAnalytics"
import { cn } from "@/lib/utils"

import { buttonVariants } from "../ui/button"
import { LottieAnimationPlayer } from "../ui/lottie-animation-player"

export function Socials() {
  return (
    <div className="flex gap-2">
      <Link
        onClick={() => {
          gAnalytics.track("gmail_click", {
            page: "home",
          })
        }}
        aria-label="Send mail to me"
        href={DATA.socials.gmail}
        target="_blank"
        className={cn(
          buttonVariants({ variant: "secondary", size: "sm" }),
          "w-fit"
        )}
      >
        <LottieAnimationPlayer JSON={GmailJson} classes="h-8" />
      </Link>
      <Link
        onClick={() => {
          gAnalytics.track("github_click", {
            page: "home",
          })
        }}
        aria-label="Github"
        href={DATA.socials.github}
        target="_blank"
        className={cn(
          buttonVariants({ variant: "secondary", size: "sm" }),
          "w-fit"
        )}
      >
        <LottieAnimationPlayer JSON={GithubJson} classes="h-8" />
      </Link>
      <Link
        onClick={() => {
          gAnalytics.track("linkedin_click", {
            page: "home",
          })
        }}
        aria-label="Linkedin"
        href={DATA.socials.linkedin}
        target="_blank"
        className={cn(
          buttonVariants({ variant: "secondary", size: "sm" }),
          "w-fit"
        )}
      >
        <LottieAnimationPlayer JSON={LinkedinJson} classes="h-8" />
      </Link>
    </div>
  )
}

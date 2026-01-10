"use client"

import Link from "next/link"
import { DATA } from "@/data/data"

import { gAnalytics } from "@/lib/gAnalytics"
import { buttonVariants } from "@/components/ui/button"

export function ResumeLink() {
  return (
    <>
      <Link
        onClick={() => {
          gAnalytics.track("resume_click", {
            page: "home",
          })
        }}
        target="_blank"
        href={DATA.resume}
        className={buttonVariants({ variant: "default" })}
      >
        Resume
      </Link>
    </>
  )
}

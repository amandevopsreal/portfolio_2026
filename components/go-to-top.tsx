"use client"

import { useElevator } from "@/hook/useScroll"
import { ArrowUp } from "lucide-react"

export function GoToTop() {
  const { startElevating } = useElevator({})
  return (
    <button
      onClick={startElevating}
      className="mx-auto flex w-fit cursor-pointer flex-col items-center gap-0 py-10 text-muted-foreground"
    >
      <p className="flex items-center">
        Elevate to the top
        <ArrowUp className="size-4" />
      </p>
      <p className="flex gap-2 text-xs">Turn on audio !!!</p>
    </button>
  )
}

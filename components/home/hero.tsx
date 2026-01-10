import { DATA } from "@/data/data"

import { ResumeLink } from "./links/resume-link"
import { Socials } from "./socials"

export function Hero() {
  return (
    <section className="pt-12">
      <div className="space-y-2">
        <p className="text-base font-normal text-muted-foreground">
          hi there👋, I&apos;m
        </p>
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-primary/90">
            {DATA.name}
          </h1>
          <h3 className="flex flex-col gap-0 text-base font-normal text-primary/90">
            <p>
              {DATA.age}, {DATA.pronouns}
            </p>
            <p>{DATA.description}</p>
          </h3>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <ResumeLink />
          <Socials />
        </div>
      </div>
    </section>
  )
}

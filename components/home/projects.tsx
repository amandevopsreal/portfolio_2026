import Link from "next/link"
import { DATA } from "@/data/data"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ArrowRightUp } from "@/components/ui/icons"
//import { LinkPreview } from "@/components/ui/link-preview"

export function Projects() {
  return (
    <div id="projects" className="py-10">
      <h2 className="text-base font-medium text-primary/90">projects.</h2>
      <ul className="mt-4 flex flex-col gap-12 text-base font-normal text-primary/90">
        {DATA.projects.map((item, index) => {
          return (
            <li key={index}>
              <div className="size-full border-l border-muted-foreground pl-4 transition-all duration-300 betterhover:hover:border-primary">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-lg text-primary/90">
                      {item.title}
                      <span className="ml-2 rounded bg-secondary px-2 py-1 text-xs">
                        {item.date}
                      </span>
                    </p>
                    <p className="flex items-center gap-1 text-sm">
                      {" "}
                      {/*  */}
                      <Link href={item.github} className="flex items-center">
                        github
                        <ArrowRightUp className="text-muted-foreground" />
                      </Link>{" "}
                    </p>
                  </div>
                </div>
                <ul className="mt-4 list-disc space-y-1 pl-3 text-sm text-muted-foreground">
                  {item.description.map((item, index) => {
                    return <li key={index}>{item}</li>
                  })}
                </ul>
                <ul className="mt-2 flex flex-wrap items-center gap-2 pl-3">
                  {item.skills.map((skill, index) => {
                    return (
                      <li
                        key={index}
                        className="rounded bg-muted px-2 py-1 text-xs"
                      >
                        {skill}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </li>
          )
        })}
      </ul>
      <div className="mt-8 flex justify-center">
        <Link
          href={"https://github.com/amandevopsreal"}
          target="_blank"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "text-sm text-muted-foreground hover:text-muted-foreground"
          )}
        >
          View all projects
        </Link>
      </div>
    </div>
  )
}

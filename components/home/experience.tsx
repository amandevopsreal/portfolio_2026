import Link from "next/link"
import { DATA } from "@/data/data"

import { ArrowRightUp } from "../ui/icons"

export function Experience() {
  return (
    <div id="experience" className="py-10">
      <h2 className="text-base font-medium text-primary/90">experience.</h2>
      <ul className="mt-4 flex flex-col gap-12 text-base font-normal text-primary/90">
        {DATA.experience.map((item, index) => {
          return (
            <li key={index}>
              <div className="size-full border-l border-muted-foreground pl-4 transition-all duration-300 betterhover:hover:border-primary">
                <div className="flex flex-col items-start justify-between sm:flex-row">
                  <div>
                    <p className="text-lg text-primary/90">
                      {item.role}
                      <span className="ml-2 rounded bg-secondary px-2 py-1 text-xs">
                        {item.location}
                      </span>
                    </p>
                    <p className="flex items-center text-sm">
                      at,{" "}
                      <Link
                        href={item.company.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 flex items-center"
                      >
                        {item.company.name}
                        <ArrowRightUp className="text-muted-foreground" />
                      </Link>{" "}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.time}</p>
                </div>
                <ul className="mt-4 list-disc space-y-1 pl-3 text-sm text-muted-foreground">
                  {item.description.map((bulletPoint, index) => {
                    return <li key={index}>{bulletPoint}</li>
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
    </div>
  )
}

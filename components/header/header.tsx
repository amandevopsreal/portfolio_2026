import Link from "next/link"

import ThemeToggler from "../theme/theme-toggler"
import { Draggable } from "../ui/draggable"
import Magnetic from "../ui/magnetic"
import { Nav } from "./nav"

export function Header() {
  return (
    <div className="flex justify-between gap-2">
      <Draggable>
        <Magnetic>
          <Link
            href={"/"}
            className="cursor-pointer rounded-lg py-2 text-2xl font-semibold tracking-[-2px] sm:px-4 betterhover:hover:bg-accent"
          >
            Aman
          </Link>
        </Magnetic>
      </Draggable>
      <div className="flex items-center gap-2">
        <Nav />
        <Magnetic>
          <Draggable>
            <ThemeToggler />
          </Draggable>
        </Magnetic>
      </div>
    </div>
  )
}

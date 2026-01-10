import { NavLink } from "./link"

const links = [
  {
    href: "#experience",
    label: "experience",
  },
  {
    href: "#projects",
    label: "projects",
  },
  {
    href: "#blogs",
    label: "blogs",
  },
]
export function Nav() {
  return (
    <ul className="flex items-center gap-2 sm:gap-0">
      {links.map((link) => (
        <li key={link.href}>
          <NavLink href={link.href} label={link.label} />
        </li>
      ))}
    </ul>
  )
}

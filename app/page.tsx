import { GoToTop } from "@/components/go-to-top"
import { AboutMe } from "@/components/home/about"
import { Blogs } from "@/components/home/blogs"
import { Experience } from "@/components/home/experience"
import { Hero } from "@/components/home/hero"
import { Projects } from "@/components/home/projects"
import { TechnicalSkills } from "@/components/home/technical-skills"

export default function Home() {
  return (
    <main className="min-h-lvh rounded-lg px-4">
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Blogs />
      <TechnicalSkills />
      <GoToTop />
    </main>
  )
}

import { blogs } from "./blogs"
import { experiences } from "./experience"
import { projects } from "./projects"

export const DATA = {
  name: "Aman Kumar Mishra",
  age: 23,
  pronouns: "he/him",
  description:
    "Graduated software engineer focused on building scalable, real-world technology.",
  skills: [
    {
      title: "Languages",
      items: ["C++", "Python", "HTML", "CSS", "SQL", "C", "Javascript", "Typescript"],
    },
    
    {
      title: "Tools",
      items: ["Firebase", "Git & Github", "React", "Next.js", "Node.js", "Express", "MongoDB", "MySQL", "Mongoose", "MongoDB", "REST API", "Postman", "Nest.js"],
    },
  ],
  experience: experiences,
  projects: projects,
  blogs: blogs,
  resume:
    "https://drive.google.com/file/d/1n7WIVZN19CO9qsLG-_kMWysXnWlEGKm8/view?usp=drive_link",
  socials: {
    github: "https://github.com/amandevopsreal",
    linkedin: "https://www.linkedin.com/in/aman-kumar-mishra-97b841226/",
    gmail: "mailto:aman345kumarmishra@gmail.com",
  },
}

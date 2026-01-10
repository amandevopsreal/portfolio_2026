const subscriptionTracker: Project = {
  title: "SUBSCRIPTION TRACKER",
  date: "Nov, 2025",
  github: "https://github.com/amandevopsreal/subscription-tracker",
  description: [
    <span>
      Built a subscription management RESTful API with automated emailreminder
      workflows using Upstash Workflow forintelligent scheduling. Implemented JWT
      authentication with bcryptjs, MongoDB transactions, and custom HTML email
      templates with Nodemailer. Integrated Arcjet security middleware forrate limiting
      and bot detection. Developed with Node.js, Express.js, and Mongoose, featuring
      automated date calculations and scheduled notifications at 7, 5, 2, and 1 days before
      renewal dates.
    </span>,
  ],
  skills: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Nodemailer",
    "Upstash Workflow",
    "JWT",
    "bcryptjs",
    "Arcjet",
  ],
}

const threeDAppleWebsite: Project = {
  title: "3D APPLE WEBSITE",
  date: "Dec, 2025",
  github: "https://github.com/amandevopsreal/apple-clone",
  description: [
    <span>
      Built an interactive product landing page with a 3D MacBook Pro viewer enabling
      real-time color and size customization. Implemented scroll-triggered animations
      using GSAP ScrollTrigger, video texture mapping on 3D models, and dynamic content
      sequencing. Developed with React, Three.js, and GSAP, optimized for responsive
      design and smooth 60fps performance across devices.
    </span>
  ],
  skills: [
    "React",
    "Three.js",
    "GSAP",
  ],
}



export const projects: Project[] = [subscriptionTracker, threeDAppleWebsite]

interface Project {
  title: string
  date: string
  github: string
  description: JSX.Element[]
  skills: string[]
}

type Preview = StaticPreview | DynamicPreview

interface StaticPreview {
  url: string
  isStatic: true
  preview: string
}
interface DynamicPreview {
  url: string
  isStatic: false
}

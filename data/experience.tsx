//import { LinkPreview } from "@/components/ui/link-preview"

const Studio137 = {
  role: "Software Engineer",
  location: "Remote",
  company: {
    url: "https://www.studio137.co.za/",
    name: "Studio137",
  },
  time: "January, 2024 - Present",
  skills: [
    "React",
    "Tailwindcss",
    "Typescript",
    "Git & Github",
    "MySQL",
    "Node.js",
    "Express",
    "Next.js"
  ],
  description: [
    <span>
      Enhanced the Backoffice system with features like account merge, assessment
      count updates, chatbot UI, and coupon-code management.
    </span>,
    <span>
     Generated dynamic results PDFs using EJS integrated with Node.js.
    </span>,
    <span>
      Developed multiple REST APIs for efficient data fetching and project
      operations.
    </span>,
    <span>
      Worked on assessment flow logic across various client assessment projects.
    </span>,
    <span>
      Delivered scalable, responsive UIs with strong error handling across multiple
      projects.
    </span>,
    <span>
      Implemented pagination, API optimizations, and real-time search, enabling
      fasterlarge-data retrieval and improved user experience.
    </span>
  ],
}

type Experience = typeof Studio137

const TrailyticsAI: Experience = {
  role: "Software Developer",
  location: "Gurugram, Haryana",
  company: {
    url: "https://trailytics.com/",
    name: "Trailytics AI",
  },
  time: "February, 2025 - July, 2025",
  skills: ["React", "Tailwindcss", "Bootstrap", "Typescript", "Git & Github", "Next.js"],
  description: [
    <span>
      Led development of core modules in Ad Auto, a performance-marketing
      automation tool; implemented majorfeatures including pausing/activating
      campaigns and keywords, updating budgets and bids, integrating interactive
      graphs, and embedding a Power BI dashboard into the React UI for enhanced
      analytics visualization.
    </span>,
    <span>
      Built an AI-powered chatbot using React that enables clients to retrieve
      real-time insights about their campaigns and keywords; integrated the AI agent
      with a smooth,responsive React interface to improve usability and
      decision-making.
    </span>
  ],
}

// Add Objects to the array to add more experiences
export const experiences = [Studio137, TrailyticsAI]

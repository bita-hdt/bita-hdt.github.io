"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
  location: string
  website?: string
}

const experiences: ExperienceItem[] = [
  {
    title: "Front-End Developer",
    company: "Toparz",
    period: "May 2024 - Present",
    location: "Tehran, Iran (On-site)",
    website: "https://toparz.com",
    description:
      "Developed Toparz mobile application and website from scratch using React Native and React.js for a cryptocurrency exchange platform. Built custom design system, optimized PWA performance, and implemented user-friendly forms with validation. Collaborated in Agile environment and contributed to UX improvements.",
    skills: ["React Native", "React.js", "PWA", "Design System", "Agile"],
  },
  {
    title: "Front-End Web Developer",
    company: "Baran Software Company",
    period: "Dec 2022 - Mar 2024",
    location: "Karaj, Iran (On-site)",
    website: "https://barantm.com",
    description:
      "Developed and maintained 10+ e-commerce websites and dashboards. Automated internal business processes for clients by implementing intuitive management panels. Managed redesigns and production tasks for 5+ academy and e-commerce websites. Mentored and guided 2 junior developers.",
    skills: ["React.js", "E-commerce", "Dashboards", "Mentoring", "Project Management"],
  },
  {
    title: "Front-End Web Developer",
    company: "Malltina",
    period: "Feb 2022 - Sep 2022",
    location: "Fardis, Iran (Remote)",
    website: "https://malltina.com",
    description:
      "Developed and maintained Malltina e-commerce website enabling Iranian users to purchase from Amazon and other retailers. Designed reusable UI component library and built tailored admin dashboard. Researched Next.js and TypeScript for website rebuilding and performance improvements.",
    skills: ["React.js", "Next.js", "TypeScript", "Component Library", "Admin Dashboard"],
  },
  {
    title: "Front-End Web Developer",
    company: "Baran Software Company",
    period: "Feb 2021 - Nov 2021",
    location: "Karaj, Iran (On-site)",
    website: "https://barantm.com",
    description:
      "Built, developed and maintained e-commerce and academy platforms, ensuring functionality and performance. Mentored a team member, guiding her in learning React and improving frontend development skills.",
    skills: ["React.js", "E-commerce", "Academy Platforms", "Mentoring"],
  },
]

export default function Experience() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-2 mb-8"
      >
        <h2 className="text-3xl font-bold tracking-tight">Experiences</h2>
        <p className="text-muted-foreground">My professional journey</p>
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                      <p className="text-muted-foreground font-medium">{exp.company}</p>
                      {exp.website && (
                        <>
                          <span className="hidden md:inline text-muted-foreground">•</span>
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline flex items-center gap-1"
                          >
                            {exp.website.replace("https://", "")}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                    {exp.period}
                  </Badge>
                </div>
                <p className="mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

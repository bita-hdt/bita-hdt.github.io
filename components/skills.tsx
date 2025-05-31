"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const technicalSkills = [
  "React",
  "React Native",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Zustand",
  "Redux",
  "Redux Toolkit",
  "Axios",
  "TanStack Query",
  "SWR",
  "React Hook Form",
  "Yup",
  "Socket.IO",
  "Expo",
  "PWA",
  "Git",
  "Turborepo",
  "SCSS",
  "JSS",
  "Tailwind CSS",
  "Radix UI",
  "Shadcn",
  "MUI",
  "Bootstrap",
  "Reactstrap",
]

const softSkills = [
  "Problem Solving",
  "Time Management",
  "Continuous Learning",
  "Collaboration and Teamwork",
  "Responsibility",
  "Adaptability",
  "Attention to Details",
]

export default function Skills() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-2 mb-8"
      >
        <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
        <p className="text-muted-foreground">My technical expertise and personal strengths</p>
      </motion.div>

      <div className="space-y-8">
        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
          <div className="bg-card rounded-lg">
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Badge variant="secondary" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
          <div className="bg-card rounded-lg">
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Badge variant="outline" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

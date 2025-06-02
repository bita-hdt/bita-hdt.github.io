"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

interface Project {
  title: string;
  description: string;
  duration: string;
}

const projects: Project[] = [
  {
    title: "Steel Assist Website",
    description:
      "A bilingual website for real-time insights, secure trading, and a community of steel industry leaders.",
    duration: "Oct 2024",
  },
  {
    title: "Mall Security System Dashboard",
    description:
      "An admin panel to fully manage the security system of Mother Gold Mall, Kerman-Iran.",
    duration: "Jun 2021 - Aug 2021",
  },
  {
    title: "Infinite Website",
    description:
      "A comprehensive website for selling e-books with user-friendly interface and secure payment system.",
    duration: "Nov 2019 - Mar 2020",
  },
  {
    title: "Shahre Farsh Dashboard",
    description:
      "Admin Panel for delivery and management system of carpet city center with comprehensive tracking features.",
    duration: "Jun 2019 - Aug 2019 & Jan 2020 - Jul 2020",
  },
  {
    title: "CafeeMive Dashboard",
    description:
      "Admin and customer panels for an online market selling fruits and groceries with inventory management.",
    duration: "Feb 2019 - Apr 2020",
  },
];

export default function Projects() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-2 mb-8"
      >
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <p className="text-muted-foreground">Featured projects I've built</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden h-full">
              <CardContent className="p-4">
                <div className="space-y-1">
                  <h3 className="font-bold">{project.title}</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.duration}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

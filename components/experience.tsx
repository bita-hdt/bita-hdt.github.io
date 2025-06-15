"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";

interface ExperienceItem {
  title: string;
  company: string;
  logo?: string;
  period: string;
  description: string;
  items?: string[];
  location: string;
  website?: string;
}

export function formatExperiencePeriod(
  startDateStr: string,
  endDateStr?: string
): string {
  const startDate = new Date(startDateStr);
  const endDate = endDateStr ? new Date(endDateStr) : new Date();

  const formatDate = (date: Date) =>
    date.toLocaleString("default", { month: "short", year: "numeric" });

  // Calculate duration
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const yearPart = years > 0 ? `${years} yr${years > 1 ? "s" : ""}` : "";
  const monthPart = months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : "";

  const duration = [yearPart, monthPart].filter(Boolean).join(" ") || "0 mos";

  return `${formatDate(startDate)} - ${
    endDateStr ? formatDate(endDate) : "Present"
  } (${duration})`;
}

const experiences: ExperienceItem[] = [
  {
    title: "Front-End Developer",
    company: "Toparz",
    logo: "/toparz.jpeg",
    period: formatExperiencePeriod("2024-05-20"),
    location: "Tehran, Iran | Full-time, Hybrid",
    website: "https://toparz.com",
    description: "A cryptocurrency exchange platform",
    items: [
      "Developed Toparz mobile application from scratch using React Native, ensuring a seamless and intuitive user experience.",
      "Developed and maintained Toparz website from scratch with user-friendly functionality, focused on optimized performance and reduced page load time through code optimization and asset management.",
      "Built and optimized PWA to enhance accessibility and performance across devices.",
      "Created a custom design system, developing reusable UI components from scratch to align with company branding and standards and also for reducing future UI development time.",
      "Implemented user-friendly web forms with validation and robust error handling, reducing redundant API calls and enhancing data accuracy.",
      "Collaborated in an Agile environment, working closely with cross-functional teams to ensure smooth development cycles.",
      "Contributed to UX improvements, refining flows and updating layouts to enhance usability and performance.",
      "Researched and integrated emerging web technologies, ensuring the platform remained modern, efficient, and competitive.",
      "Developed new features in Toparz admin panel.",
    ],
  },
  {
    title: "Front-End Web Developer",
    company: "Baran Software Company",
    logo: "/baran.jpeg",
    period: "Dec 2022 - Mar 2024 (1 yr 4 mos)",
    location: "Karaj, Iran | Full-time, On-site",
    website: "https://barantm.com",
    description:
      "A software company specializing in developing customized solutions based on business requirements, including e-commerce platforms, e-school systems, and automation software.",
    items: [
      "Developed and maintained 10+ e-commerce websites and dashboards. https://mehrganayegh.ir, https://avastyle.ir, etc.",
      "Automated internal business processes for clients by implementing intuitive, user-friendly websites and management panels. https://shahr-darb.com, https://shahrak-elahiyeh.ir, https://aa-co.ir",
      "Designed and implemented dynamic web solutions, aligning with clients' requirements and industry best practices.",
      "Managed redesigns, updates, and production tasks for 5+ academy and e-commerce websites, ensuring optimal performance.",
      "Mentored and guided 2 junior developers, supporting their professional growth and onboarding them into projects successfully.",
    ],
  },
  {
    title: "Front-End Web Developer",
    company: "Malltina",
    logo: "/malltina.jpeg",
    period: "Feb 2022 - Sep 2022 (8 mos)",
    location: "Karaj, Iran | Full-time, Remote",
    website: "https://malltina.com",
    description:
      "An e-commerce platform enabling Iranian users to purchase original products from Amazon and other popular online retailers.",
    items: [
      "Developed and maintained Malltina e-commerce website, handling redesigns, code refactoring, updates, and production tasks with a strong focus on clean, maintainable code.",
      "Designed and implemented a reusable UI component library, creating a customized design system in collaboration with a graphic designer to ensure consistency and scalability.",
      "Built a tailored admin dashboard, aligning with company technical requirements to enhance operational efficiency.",
      "Worked in an agile, collaborative environment, gaining hands-on experience with remote teamwork and cross-functional coordination.",
      "Researched and explored Next.js and TypeScript, collaborating with the frontend team in rebuilding key website pages for improved performance and maintainability.",
    ],
  },
  {
    title: "Front-End Web Developer",
    company: "Baran Software Company",
    logo: "/baran.jpeg",
    period: "Feb 2021 - Nov 2021 (10 mos)",
    location: "Karaj, Iran | Part-time, On-site",
    website: "https://barantm.com",
    description:
      "A software company specializing in developing customized solutions based on business requirements, including e-commerce platforms, e-school systems, and automation software.",
    items: [
      "Built, Developed and maintained e-commerce and academy platforms, ensuring functionality and performance.",
      "Mentored a team member, guiding her in learning React and improving her frontend development skills.",
    ],
  },
];

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
        <p className="text-muted-foreground">
          My professional journey and key accomplishments
        </p>
      </motion.div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden">
              {/* Gradient border */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-pink-500 rounded-l" />

              <CardContent className="p-6 pl-5">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      {exp.logo && (
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          width={100}
                          height={100}
                          className="w-11 h-11 rounded-lg"
                        />
                      )}
                      <div>
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                          <h3 className="text-xl font-bold">{exp.company}</h3>
                          {exp.website && (
                            <>
                              <span className="hidden md:inline text-muted-foreground">
                                •
                              </span>
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
                        <div className="">{exp.title}</div>
                      </div>
                    </div>
                    <p className="text-sm mt-1 flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                    {exp.period}
                  </Badge>
                </div>
                <p className="mb-2 text-sm leading-relaxed">
                  {exp.description}
                </p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  {exp.items?.map((item, index) => (
                    <li key={index}>
                      <span className="mr-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {/* <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div> */}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

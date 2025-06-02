"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Globe, GraduationCap } from "lucide-react";
import Image from "next/image";

interface Education {
  degree: string;
  institution: string;
  logo?: string;
  period: string;
  description: string;
}

interface Language {
  name: string;
  level: string;
  color: string;
}

const educationList: Education[] = [
  {
    degree: "Bachelor of Engineering - Computer Engineering",
    institution: "Islamic Azad University - Karaj, Iran",
    logo: "/university.jpeg",
    period: "Sep 2017 - Jul 2021",
    description:
      "Focused on computer engineering fundamentals with emphasis on software development and programming.",
  },
];

const languages: Language[] = [
  { name: "Persian", level: "Native", color: "bg-green-500" },
  { name: "English", level: "Proficient", color: "bg-blue-500" },
];

export default function Education() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-2 mb-8"
      >
        <h2 className="text-3xl font-bold tracking-tight">Education</h2>
        <p className="text-muted-foreground">
          My academic background and languages
        </p>
      </motion.div>

      <div className="space-y-8">
        {/* Academic Education */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Academic Education
          </h3>

          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {edu.logo && (
                      <Image
                        src={edu.logo}
                        alt={edu.institution}
                        width={100}
                        height={100}
                        className="w-11 h-11 rounded-lg"
                      />
                    )}
                    <div className="w-full">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h4 className="text-lg font-bold">{edu.degree}</h4>
                        <Badge variant="outline" className="mt-1 md:mt-0 w-fit">
                          {edu.period}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                  </div>
                  <p>{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Languages
          </h3>

          <div className="flex gap-4">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-4 h-4 rounded-full ${lang.color}`}
                      ></div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{lang.name}</h4>
                        <p className="text-muted-foreground">{lang.level}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card> */}
                <Badge variant="secondary" className="text-sm py-1 px-3">
                  {`${lang.name} - ${lang.level}`}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

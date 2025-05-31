"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Download } from "lucide-react"

export default function Introduction() {
  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/bita-hedayat-resume.pdf"
    link.download = "Bita-Hedayat-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-[80vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <h2 className="text-xl font-medium text-muted-foreground">Hello, I'm</h2>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              Bita Hedayat
            </span>
          </h1>
          <div className="h-16 md:h-20 flex flex-col justify-center">
            <div className="text-2xl md:text-4xl font-bold mb-2">Front-End Developer</div>
            <div className="text-2xl md:text-4xl font-bold text-primary">
              <TypeAnimation
                sequence={["React.js", 1000, "Next.js", 1000, "React Native", 1000]}
                wrapper="span"
                cursor={true}
                repeat={Number.POSITIVE_INFINITY}
              />
            </div>
          </div>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          Enthusiastic Frontend Developer with 6 years of hands-on experience in React.js, Next.js, and React Native.
          Passionate about building innovative, user-friendly, and visually compelling applications. I have successfully
          developed websites, dashboards, and mobile apps, constantly seeking new challenges and adapting to emerging
          technologies.
        </p>

        <div className="pt-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            <a
              href="mailto:bita.hdt@gmail.com"
              className="flex items-center gap-3 hover:text-primary transition-colors"
            >
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Mail className="h-4 w-4" />
              </div>
              <span className="text-sm">bita.hdt@gmail.com</span>
            </a>

            <a
              href="https://linkedin.com/in/bita-hedayat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-primary transition-colors"
            >
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Linkedin className="h-4 w-4" />
              </div>
              <span className="text-sm">linkedin.com/in/bita-hedayat</span>
            </a>
          </div>

          <div className="pt-2">
            <Button onClick={handleDownloadResume} className="group">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

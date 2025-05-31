"use client";

import { useMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "about", name: "About" },
  { id: "experiences", name: "Experience" },
  { id: "projects", name: "Projects" },
  { id: "skills", name: "Skills" },
  { id: "education", name: "Education" },
];

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Find active section
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Don't show on mobile to avoid clutter
  if (isMobile) return null;

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col items-center space-y-4">
        {/* Overall Progress Bar */}
        <div className="relative w-1 h-32 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-primary rounded-full"
            style={{ height: `${scrollProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Section Indicators */}
        <div className="flex flex-col items-center space-y-3">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-primary scale-125"
                    : "bg-muted hover:bg-muted-foreground/50"
                }`}
              />

              {/* Indicator line connecting dots */}
              {section.id !== sections[sections.length - 1].id && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-muted/50" />
              )}

              {/* Tooltip */}
              <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-xs font-medium bg-background px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {section.name}
              </span>

              {/* Animated ring for active section */}
              {activeSection === section.id && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

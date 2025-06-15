"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Briefcase, Code2, Folder, GraduationCap, User } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Experiences", href: "#experiences", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: Folder },
  { name: "Education", href: "#education", icon: GraduationCap },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("about");
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.name.toLowerCase());

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block sticky top-0 z-40 py-4 bg-background/80 backdrop-blur-sm">
        <div className="relative flex justify-center items-center max-w-4xl mx-auto px-4">
          <nav>
            <ul className="flex gap-1 p-1 rounded-full border bg-background/50 backdrop-blur-sm">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "relative rounded-full text-sm",
                      activeSection === item.name.toLowerCase() &&
                        "font-medium bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent"
                    )}
                    onClick={() => scrollToSection(item.href)}
                  >
                    {activeSection === item.name.toLowerCase() && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-muted rounded-full z-[-1]"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    {item.name}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="absolute right-0">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Navigation with Icons */}
      <div className="md:hidden sticky top-0 z-40 py-3 px-2 bg-background/80 backdrop-blur-sm">
        <div className="flex justify-between items-center">
          <nav className="w-full">
            <ul className="flex justify-around">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => scrollToSection(item.href)}
                      className={cn(
                        "rounded-full",
                        activeSection === item.name.toLowerCase()
                          ? "bg-muted"
                          : "!bg-transparent"
                      )}
                      aria-label={item.name}
                    >
                      <Icon className="h-5 w-5" />
                    </Button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </>
  );
}

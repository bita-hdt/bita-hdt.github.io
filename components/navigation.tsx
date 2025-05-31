"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experiences", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
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
                        "text-primary font-medium"
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

          {/* Theme toggle positioned absolutely to the right */}
          <div className="absolute right-0">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden sticky top-0 z-40 py-3 px-2 bg-background/80 backdrop-blur-sm">
        <div className="flex justify-between items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="rounded-full"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>

          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <nav className="py-4">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start",
                          activeSection === item.name.toLowerCase() &&
                            "bg-muted font-medium"
                        )}
                        onClick={() => scrollToSection(item.href)}
                      >
                        {item.name}
                      </Button>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

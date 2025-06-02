"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Calculate stroke dash array for progress circle
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
        >
          <div className="relative">
            {/* Progress Circle */}
            <svg
              className="absolute inset-0 w-11 h-11 md:w-12 md:h-12 transform -rotate-90"
              viewBox="0 0 44 44"
            >
              {/* Background Circle */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-muted/20"
              />
              {/* Progress Circle */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                className="text-primary transition-all duration-300 ease-out"
                strokeLinecap="round"
              />
            </svg>

            <Button
              onClick={scrollToTop}
              size="icon"
              className="h-11 w-11 md:h-12 md:w-12 rounded-full shadow-lg bg-background hover:bg-muted border-2 border-primary/20 text-foreground group relative"
              aria-label="Scroll to top"
            >
              <motion.div
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUp className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:scale-110" />
              </motion.div>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import Education from "@/components/education";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Introduction from "@/components/introduction";
import Navigation from "@/components/navigation";
import Projects from "@/components/projects";
import ScrollIndicator from "@/components/scroll-indicator";
import ScrollToTop from "@/components/scroll-to-top";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollIndicator />
      <ScrollToTop />

      <div className="container mx-auto px-4 py-8 relative">
        <Navigation />

        <main className="max-w-4xl mx-auto space-y-24 py-12">
          <section id="about" className="scroll-mt-24">
            <Introduction />
          </section>

          <section id="experience" className="scroll-mt-24">
            <Experience />
          </section>

          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>

          <section id="skills" className="scroll-mt-24">
            <Skills />
          </section>

          <section id="education" className="scroll-mt-24">
            <Education />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

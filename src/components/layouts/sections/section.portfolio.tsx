import TextGradient from "../../custom-containers/Container-text-gradient";
import { BrainCircuit, CodeIcon, FileArchive, Sparkle } from "lucide-react";
import ProjectsSection from "./portfolio/Projects";
import CertificateSection from "./portfolio/Certificate";
import TechStackSection from "./portfolio/TechStack";
import NavButton from "./portfolio/_components/NavButton";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import AnimatedContainer from "../../animated/AnimatedContainer";

export default function PortfolioSection() {
  const [activeSection, setActiveSection] = useState<
    "projects" | "certificates" | "techstack"
  >("projects");

  return (
    <section
      className="center flex-col lg:mx-32 md:mx-24 sm:mx-12 mx-6 my-68"
      id="portfolio"
    >
      {/* first */}
      <div className="full-center flex-col gap-4">
        <AnimatedContainer direction="zoomIn" delay={0.1}>
          <TextGradient
            text="Portfolio Showcase"
            from="from-purple-800"
            to="to-blue-800"
            className="sm:text-8xl text-5xl font-bold"
          />
        </AnimatedContainer>
        <AnimatedContainer direction="zoomIn" delay={0.15}>
          <p className="center lg:text-xl sm:text-base text-xs text-gray-500">
            <Sparkle className="w-4 h-4" />
            <span className="px-3 text-center">
              Here you can find my projects, completed courses and certificates,
              as well as the tech stack I work with and also created this site.
            </span>
            <Sparkle className="w-4 h-4" />
          </p>
        </AnimatedContainer>
      </div>

      {/* second */}
      <div className="full mt-24 gap-8">
        {/* select case buttons */}
        <div className="bg-white/10 h-32 rounded-xl shadow-lg center gap-4 p-4 text-xl font-bold">
          <NavButton
            icon={CodeIcon}
            label="Projects"
            isActive={activeSection === "projects"}
            onClick={() => setActiveSection("projects")}
          />
          <NavButton
            icon={FileArchive}
            label="Certificates"
            isActive={activeSection === "certificates"}
            onClick={() => setActiveSection("certificates")}
          />
          <NavButton
            icon={BrainCircuit}
            label="Tech Stack"
            isActive={activeSection === "techstack"}
            onClick={() => setActiveSection("techstack")}
          />
        </div>

        {/* showcase section */}
        <AnimatePresence>
          <div>
            {activeSection === "projects" && <ProjectsSection />}
            {activeSection === "certificates" && <CertificateSection />}
            {activeSection === "techstack" && <TechStackSection />}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}

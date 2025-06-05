import TextGradient from "../../custom-containers/Container-text-gradient";
import { BrainCircuit, CodeIcon, FileArchive, Sparkle } from "lucide-react";
import ProjectsSection from "./portfolio/Projects";
import CertificateSection from "./portfolio/Certificate";
import TechStackSection from "./portfolio/TechStack";
import NavButton from "./portfolio/_components/NavButton";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import AnimatedContainer from "../../animated/AnimatedContainer";
import { Directions } from "../../animated/types";

export default function PortfolioSection() {
  const [activeSection, setActiveSection] = useState<
    "projects" | "certificates" | "techstack"
  >("projects");

  return (
    <section className="portfolio-section-main" id="portfolio">
      {/* first */}
      <div className="portfolio-header-container">
        <AnimatedContainer direction={Directions.ZOOMIN} delay={0.1}>
          <TextGradient
            text="Portfolio Showcase"
            from="from-purple-800"
            to="to-blue-800"
            className="portfolio-header-main"
          />
        </AnimatedContainer>
        <AnimatedContainer direction={Directions.ZOOMIN} delay={0.15}>
          <p className="portfolio-header-text-container">
            <Sparkle className="text-sparkle" />
            <span className="px-3 text-center">
              Here you can find my projects, completed courses and certificates,
              as well as the tech stack I work with and also created this site.
            </span>
            <Sparkle className="text-sparkle" />
          </p>
        </AnimatedContainer>
      </div>

      {/* second */}
      <div className="portfolio-container full">
        {/* select case buttons */}
        <div className="portfolio-navigation-container">
          <NavButton
            icon={CodeIcon}
            label="Projects"
            onClick={() => setActiveSection("projects")}
          />
          <NavButton
            icon={FileArchive}
            label="Certificates"
            onClick={() => setActiveSection("certificates")}
          />
          <NavButton
            icon={BrainCircuit}
            label="Tech Stack"
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

import TextGradient from "../../ui/Container-text-gradient";
import { BrainCircuit, CodeIcon, FileArchive, Sparkle } from "lucide-react";
import ProjectsSection from "./portfolio/Projects";
import CertificateSection from "./portfolio/Certificate";
import TechStackSection from "./portfolio/TechStack";
import AnimatedContainer from "../../animations/AnimatedContainer";
import { Directions } from "../../animations/types";

export default function PortfolioSection() {
  return (
    <section className="portfolio-section-main" id="portfolio">
      {/* first */}
      <div className="portfolio-header-container">
        <AnimatedContainer direction={Directions.ZOOMIN} delay={0.1}>
          <TextGradient
            text="Portfolio Showcase"
            from="from-accent"
            to="to-accent/30"
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
        <div className="tabs tabs-lift ">
          <label className="tab [--tab-bg:#1e293b]">
            <input type="radio" name="my_tabs_1" defaultChecked />
            <CodeIcon />
            Projects
          </label>
          <div className="tab-content bg-neutral border-base-300 p-6">
            <ProjectsSection />
          </div>

          <label className="tab [--tab-bg:#1e293b]">
            <input type="radio" name="my_tabs_1" />
            <FileArchive />
            Certificates
          </label>
          <div className="tab-content bg-neutral border-base-300 p-6">
            <CertificateSection />
          </div>

          <label className="tab [--tab-bg:#1e293b]">
            <input type="radio" name="my_tabs_1" />
            <BrainCircuit />
            Tech Stack
          </label>
          <div className="tab-content bg-neutral border-base-300 p-6">
            <TechStackSection />
          </div>
        </div>
      </div>
    </section>
  );
}

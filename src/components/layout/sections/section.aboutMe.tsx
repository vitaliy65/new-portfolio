import TextGradient from "../../ui/Container-text-gradient";
import ContainerGlow from "../../ui/Container-glow";
import AnimatedContainer from "../../animations/AnimatedContainer";
import { Code, File, Sparkle } from "lucide-react";
import ContainerGradient from "../../ui/Container-gradient";
import { Directions } from "../../animations/types";
import { useAppSelector } from "../../../_hooks/hooks";

export default function AboutMeSection() {
  const theme = useAppSelector((s) => s.theme.theme);

  return (
    <section className="about-section-main" id="about">
      {/* first */}
      <div className="about-header-main-container">
        <AnimatedContainer direction={Directions.ZOOMIN} delay={0.1}>
          <TextGradient
            text="About Me"
            from="from-purple-800"
            to="to-blue-800"
            className="about-header-main-text"
          />
        </AnimatedContainer>
        <AnimatedContainer direction={Directions.ZOOMIN} delay={0.15}>
          <p className="about-header-text-container">
            <Sparkle className="w-4 h-4" />
            <span className="px-3">
              Transforming ideas into digital experiences with passion and
              precision.
            </span>
            <Sparkle className="w-4 h-4" />
          </p>
        </AnimatedContainer>
      </div>

      {/* second */}
      <div className="about-section-grid">
        {/* main text */}
        <div className="about-header-container">
          <AnimatedContainer direction={Directions.LEFT} delay={0.1}>
            <TextGradient
              text="Hello, I'm"
              from="from-purple-800"
              to="to-blue-800"
            />
          </AnimatedContainer>
          <AnimatedContainer direction={Directions.LEFT} delay={0.2}>
            <p>Posvistak Vitaliy</p>
          </AnimatedContainer>
        </div>

        {/* about me text */}
        <div className="about-description-container">
          <AnimatedContainer direction={Directions.LEFT} delay={0.4}>
            <p
              className={`${
                theme === "light"
                  ? "about-description-light"
                  : "about-description"
              }`}
            >
              I am a software engineering student who is interested in
              developing as Front-End and Back-End development. I am focused on
              creating engaging digital experiences and always try to find the
              best solution in every project.
            </p>
          </AnimatedContainer>
          <AnimatedContainer direction={Directions.LEFT} delay={0.2}>
            <div className="about-buttons-container">
              <a
                className="full-center"
                href="/CV - Vitaliy Posvistak.pdf"
                download="CV - Vitaliy Posvistak.pdf"
              >
                <ContainerGradient
                  className="button-cv"
                  direction="bottom-right"
                  from="button-cv-gradient-from"
                  to="button-cv-gradient-to"
                  isButton={true}
                >
                  <div className="flex items-center gap-2">
                    <File /> Download CV
                  </div>
                </ContainerGradient>
              </a>
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  const portfolioSection = document.getElementById("portfolio");
                  if (portfolioSection) {
                    portfolioSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`${
                  theme === "light"
                    ? "button-to-projects-light"
                    : "button-to-projects"
                }`}
              >
                <span
                  className={`${
                    theme === "light"
                      ? "button-projects-light"
                      : "button-projects"
                  }`}
                >
                  <Code /> View Projects
                </span>
              </a>
            </div>
          </AnimatedContainer>
        </div>

        {/* my img */}
        <div className="about-img-container">
          <AnimatedContainer direction={Directions.DOWN}>
            <ContainerGlow
              glowColor={`${
                theme === "light" ? "shadow-black" : "shadow-purple-800"
              }`}
              size="32px"
              className="about-img"
            >
              <img
                src="/me.jpg"
                alt="Portfolio my img"
                className="object-cover h-full"
              />
            </ContainerGlow>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}

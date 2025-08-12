import TextGradient from "../../ui/Container-text-gradient";
import ContainerGlow from "../../ui/Container-glow";
import AnimatedContainer from "../../animations/AnimatedContainer";
import { File, Sparkle } from "lucide-react";
import { Directions } from "../../animations/types";
import { useAppSelector } from "../../../_hooks/hooks";
import { InteractiveHoverButton } from "./aboutMe/InteractiveHoverButton";

export default function AboutMeSection() {
  const theme = useAppSelector((s) => s.theme.theme);

  return (
    <section className="about-section-main" id="about">
      {/* first */}
      <div className="about-header-main-container">
        <AnimatedContainer direction={Directions.ZOOMIN} delay={0.1}>
          <TextGradient
            text="About Me"
            from="from-accent"
            to="to-accent/50"
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
              from="from-accent"
              to="to-accent/10"
            />
          </AnimatedContainer>
          <AnimatedContainer direction={Directions.LEFT} delay={0.2}>
            <p>Posvistak Vitaliy</p>
          </AnimatedContainer>
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
        </div>

        {/* buttons */}
        <div className="about-description-container">
          <AnimatedContainer direction={Directions.LEFT} delay={0.2}>
            <div className="about-buttons-container">
              <a
                className="button-cv full-center"
                href="/CV - Vitaliy Posvistak.pdf"
                download="CV - Vitaliy Posvistak.pdf"
              >
                <div className="flex items-center gap-2 z-20">
                  <File /> Download CV
                </div>
              </a>
              <InteractiveHoverButton
                onClick={(e) => {
                  e.preventDefault();
                  const portfolioSection = document.getElementById("portfolio");
                  if (portfolioSection) {
                    portfolioSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              />
            </div>
          </AnimatedContainer>
        </div>

        {/* my img */}
        <div className="about-img-container">
          <AnimatedContainer
            direction={Directions.DOWN}
            className="grid h-fit justify-self-center"
          >
            <ContainerGlow
              glowColor={`shadow-primary`}
              size="32px"
              className="about-img"
            >
              <img
                src="/me.jpg"
                alt="Vitaliy Posvistak - Front-end Developer and UI Designer professional headshot"
                className="object-cover h-full"
                width={512}
                height={512}
              />
            </ContainerGlow>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}

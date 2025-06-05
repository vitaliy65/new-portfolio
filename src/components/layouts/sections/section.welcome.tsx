import TextGradient from "../../custom-containers/Container-text-gradient";
import Typewriter from "typewriter-effect";
import MainTextBanner from "../main/MainTextBanner";
import ContainerGlow from "../../custom-containers/Container-glow";
import { ExternalLink, Contact, Github, Linkedin } from "lucide-react";
import AnimatedIcon from "../../animated/AnimatedIcon";
import Telegram from "../../../assets/component/Telegram";
import Computer from "../../3D_Objects/Computer";
import AnimatedContainer from "../../animated/AnimatedContainer";
import { Directions } from "../../animated/types";

export default function WelcomeSection() {
  return (
    <section className="welcome-section-main" id="welcome">
      {/* left side */}
      <div className="welcome-section-left-side-1">
        <AnimatedContainer delay={0.1} direction={Directions.DOWN}>
          <div className="welcome-section-header">
            <p>Frontend</p>
            <TextGradient
              text="Developer"
              from="from-purple-800"
              to="to-blue-800"
            />
          </div>
        </AnimatedContainer>
        <AnimatedContainer delay={0.4} direction={Directions.DOWN}>
          <p className="welcome-section-header-handwrite">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Software Engineer student").start();
              }}
              options={{
                cursor: "",
              }}
            />
          </p>
        </AnimatedContainer>
      </div>

      <div className="welcome-section-left-side-2">
        <AnimatedContainer delay={0.7} direction={Directions.DOWN}>
          <div className="badges-container">
            <MainTextBanner text="React" />
            <MainTextBanner text="JavaScript" />
            <MainTextBanner text="TypeScript" />
            <MainTextBanner text="Tailwindcss" />
          </div>
        </AnimatedContainer>

        <AnimatedContainer delay={0.9} direction={Directions.DOWN}>
          <div className="welcome-section-buttons-container">
            <ContainerGlow
              glowColor="shadow-purple-800"
              className="welcome-section-button-container"
            >
              <a
                href="https://github.com/vitaliy65"
                target="_blank"
                className="welcome-section-button full-center"
              >
                Projects
                <ExternalLink size={20} />
              </a>
            </ContainerGlow>
            <ContainerGlow
              glowColor="shadow-purple-800"
              className="welcome-section-button-container"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="welcome-section-button full-center"
              >
                Contact
                <Contact size={20} />
              </a>
            </ContainerGlow>
          </div>
        </AnimatedContainer>

        <AnimatedContainer delay={1.2} direction={Directions.DOWN}>
          <div className="welcome-section-links-container">
            <a href="https://github.com/vitaliy65" target="_blank">
              <AnimatedIcon
                icon={<Github size="64px" />}
                delay={0}
                paddingImg="sm:p-4 p-2"
                className="link-box"
                color="link-color"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/vitaliy-posvistak-7887082b8/"
              target="_blank"
            >
              <AnimatedIcon
                icon={<Linkedin size="64px" />}
                delay={0}
                paddingImg="sm:p-4 p-2"
                className="link-box"
                color="link-color"
              />
            </a>
            <a href="https://t.me/Vitalas_P" target="_blank">
              <AnimatedIcon
                icon={<Telegram size="64px" />}
                delay={0}
                paddingImg="sm:p-4 p-2"
                className="link-box"
                color="link-color"
              />
            </a>
          </div>
        </AnimatedContainer>
      </div>

      {/* right side */}
      <div className="welcome-section-right-side">
        <AnimatedContainer
          className="computer-container"
          delay={0.6}
          direction={Directions.RIGHT}
        >
          <Computer />
        </AnimatedContainer>
      </div>
    </section>
  );
}

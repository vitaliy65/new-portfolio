import TextGradient from "../../custom-containers/Container-text-gradient";
import Typewriter from "typewriter-effect";
import MainTextBanner from "../main/MainTextBanner";
import ContainerGlow from "../../custom-containers/Container-glow";
import { ExternalLink, Contact, Github, Linkedin } from "lucide-react";
import AnimatedIcon from "../../animated/AnimatedIcon";
import Telegram from "../../../assets/component/Telegram";
import Computer from "../../3D_Objects/Computer";
import AnimatedContainer from "../../animated/AnimatedContainer";

export default function WelcomeSection() {
  return (
    <div className="mt-32 lg:mx-32 md:mx-24 sm:mx-12 mx-6">
      <section
        className="grid grid-cols-3 grid-rows-2 gap-4 xl:grid-cols-2 xl:grid-rows-2 xl:gap-2"
        id="welcome"
      >
        {/* left side */}
        <div className="full flex-col col-span-3 sm:col-span-2 xl:col-span-1">
          <AnimatedContainer delay={0.1} direction="down">
            <div className="text-7xl font-bold mb-8">
              <p>Frontend</p>
              <TextGradient
                text="Developer"
                from="from-purple-800"
                to="to-blue-800"
              />
            </div>
          </AnimatedContainer>
          <AnimatedContainer delay={0.4} direction="down">
            <div className="text-4xl font-medium mb-8">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Software Engineer student").start();
                }}
                options={{
                  cursor: "",
                }}
              />
            </div>
          </AnimatedContainer>
        </div>

        <div className="col-span-3 row-start-2 xl:col-span-1 full">
          <AnimatedContainer delay={0.7} direction="down">
            <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-4 mb-8 text-lg">
              <MainTextBanner text="React" className="bg-white/10 h-14" />
              <MainTextBanner text="JavaScript" className="bg-white/10 h-14" />
              <MainTextBanner text="TypeScript" className="bg-white/10 h-14" />
              <MainTextBanner text="Tailwindcss" className="bg-white/10 h-14" />
            </div>
          </AnimatedContainer>
          <AnimatedContainer delay={0.9} direction="down">
            <div className="flex flex-row gap-4 text-lg">
              <ContainerGlow
                glowColor="shadow-purple-800"
                className="w-full h-16 center rounded-xl overflow-hidden"
              >
                <a
                  href="https://github.com/vitaliy65"
                  target="_blank"
                  className="bg-black cursor-pointer hover:bg-gray-900 active:bg-gray-950 hover:gap-4 full-center gap-2 transition-all"
                >
                  Projects
                  <ExternalLink size={20} />
                </a>
              </ContainerGlow>
              <ContainerGlow
                glowColor="shadow-purple-800"
                className="w-full h-16 center rounded-xl overflow-hidden"
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-black cursor-pointer hover:bg-gray-900 active:bg-gray-950 hover:gap-4 full-center gap-2 transition-all"
                >
                  Contact
                  <Contact size={20} />
                </a>
              </ContainerGlow>
            </div>
          </AnimatedContainer>
          <AnimatedContainer delay={1.2} direction="down">
            <div className="flex flex-row gap-8 text-lg mt-10 xl:justify-start justify-center">
              <a href="https://github.com/vitaliy65" target="_blank">
                <AnimatedIcon
                  icon={<Github size="64px" />}
                  delay={0}
                  paddingImg="sm:p-4 p-2"
                  className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl cursor-pointer"
                  color="shadow-purple-800 hover:shadow-purple-600 transition-all duration-300 hover:scale-110 active:scale-100 active:shadow-purple-800"
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
                  className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl cursor-pointer"
                  color="shadow-purple-800 hover:shadow-purple-600 transition-all duration-300 hover:scale-110 active:scale-100 active:shadow-purple-800"
                />
              </a>
              <a href="https://t.me/Vitalas_P" target="_blank">
                <AnimatedIcon
                  icon={<Telegram size="64px" />}
                  delay={0}
                  paddingImg="sm:p-4 p-2"
                  className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl cursor-pointer"
                  color="shadow-purple-800 hover:shadow-purple-600 transition-all duration-300 hover:scale-110 active:scale-100 active:shadow-purple-800"
                />
              </a>
            </div>
          </AnimatedContainer>
        </div>

        {/* right side */}
        <div className="sm:w-full sm:h-full flex justify-center items-center w-0 xl:row-span-2 xl:col-start-2">
          <AnimatedContainer className="full" delay={0.6} direction="right">
            <Computer />
          </AnimatedContainer>
        </div>
      </section>
    </div>
  );
}

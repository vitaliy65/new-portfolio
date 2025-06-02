import TextGradient from "../../custom-containers/Container-text-gradient";
import ContainerGlow from "../../custom-containers/Container-glow";
import AnimatedContainer from "../../animated/AnimatedContainer";
import { Code, File, Sparkle } from "lucide-react";
import ContainerGradient from "../../custom-containers/Container-gradient";

export default function AboutMeSection() {
  return (
    <section
      className="center flex-col lg:mx-32 md:mx-24 sm:mx-12 mx-6 my-68"
      id="about"
    >
      {/* first */}
      <div className="full-center flex-col gap-4">
        <AnimatedContainer direction="zoomIn" delay={0.1}>
          <TextGradient
            text="About Me"
            from="from-purple-800"
            to="to-blue-800"
            className="sm:text-8xl text-5xl font-bold"
          />
        </AnimatedContainer>
        <AnimatedContainer direction="zoomIn" delay={0.15}>
          <p className="center lg:text-xl sm:text-base text-xs text-gray-500">
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
      <div className="full grid xl:grid-cols-2 xl:grid-rows-3 grid-cols-3 grid-rows-3  mt-24 xl:gap-8">
        {/* main text */}
        <div className="col-span-2 xl:col-span-1">
          <div className="sm:text-6xl text-3xl font-bold">
            <AnimatedContainer direction="left" delay={0.1}>
              <TextGradient
                text="Hello, I'm"
                from="from-purple-800"
                to="to-blue-800"
              />
            </AnimatedContainer>
            <AnimatedContainer direction="left" delay={0.2}>
              <p>Posvistak Vitaliy</p>
            </AnimatedContainer>
          </div>
        </div>

        {/* about me text */}
        <div className="col-span-3 xl:col-span-1 row-start-2 row-span-2 col-start-1">
          <AnimatedContainer direction="left" delay={0.4}>
            <p className="md:text-2xl mt-8 text-justify leading-relaxed text-gray-400">
              I am a software engineering student who is interested in
              developing as Front-End and Back-End development. I am focused on
              creating engaging digital experiences and always try to find the
              best solution in every project.
            </p>
          </AnimatedContainer>
          <AnimatedContainer direction="left" delay={0.2}>
            <div className="flex xl:h-16 h-12 sm:flex-row flex-col gap-4 mt-8 sm:font-bold sm:text-lg text-sm">
              <a
                className="full-center"
                href="/CV - Vitaliy Posvistak.pdf"
                download="CV - Vitaliy Posvistak.pdf"
              >
                <ContainerGradient
                  className="full-center gap-2 transition-all px-4 py-2 rounded-lg cursor-pointer"
                  direction="bottom-right"
                  from="from-purple-800 hover:from-purple-700 active:from-purple-900"
                  to="to-indigo-400 hover:to-indigo-300 active:to-indigo-500"
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
                className="full-center gap-2 transition-all px-4 py-2 rounded-lg bg-black/20 active:bg-black/40 hover:border-indigo-700 border-1 border-indigo-300 cursor-pointer"
              >
                <span className="flex items-center gap-2 text-indigo-300">
                  <Code /> View Projects
                </span>
              </a>
            </div>
          </AnimatedContainer>
        </div>

        {/* my img */}
        <div className="flex w-full justify-center items-center xl:row-span-3 xl:col-start-2 xl:row-start-1">
          <AnimatedContainer direction="down">
            <ContainerGlow
              glowColor="shadow-purple-800"
              size="32px"
              className="w-full center overflow-hidden rounded-full h-fit xl:w-96 xl:h-96"
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

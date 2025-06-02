import CodeIcon from "../assets/component/Code";
import GithubIcon from "../assets/component/Github";
import UserIcon from "../assets/component/User";
import InternetIcon from "../assets/component/Internet";
import Typewriter from "typewriter-effect";
import AnimatedIcon from "../components/animated/AnimatedIcon";
import AnimatedText from "../components/animated/AnimatedText";
import AnimatedContainer from "../components/animated/AnimatedContainer";
import OptimizedBackground from "../components/background/OptimizedBackground";
import { useState } from "react";
import AnimatedUnload from "../components/animated/AnimatedUnload";
import { AnimatePresence } from "motion/react";
import MainLayout from "../components/layouts/MainLayout";

export default function Main() {
  const [isUnloaded, setIsUnloaded] = useState(false);

  return (
    <AnimatePresence mode="wait">
      <main className="w-full h-full relative overflow-hidden center">
        {!isUnloaded ? (
          <AnimatedUnload
            direction="scaleUP"
            delay={2}
            className="screen-center flex-col bg-[#08002a]"
            onUnload={() => setIsUnloaded(true)}
          >
            <OptimizedBackground
              imageUrl="/bg/InitialLoadBG.webp"
              className="absolute inset-0 -z-10"
            />
            <div className="flex flex-row gap-8 mb-8 text-indigo-100">
              <AnimatedIcon
                icon={<CodeIcon size="64px" />}
                delay={0}
                paddingImg="sm:p-5 p-3 rounded-full"
                color="shadow-purple-800"
                className="sm:w-full sm:h-full w-16 h-16"
              />
              <AnimatedIcon
                icon={<UserIcon size="64px" />}
                delay={0.1}
                paddingImg="sm:p-5 p-3 rounded-full"
                color="shadow-purple-800"
                className="sm:w-full sm:h-full w-16 h-16"
              />
              <AnimatedIcon
                icon={<GithubIcon size="64px" />}
                delay={0.2}
                paddingImg="sm:p-5 p-3 rounded-full"
                color="shadow-purple-800"
                className="sm:w-full sm:h-full w-16 h-16"
              />
            </div>
            <div className="flex flex-col font-bold mb-16">
              <span className="center sm:gap-8 gap-2 flex-row xl:text-9xl sm:text-7xl text-4xl text-center text-shadow-md">
                <AnimatedText text="Welcome" direction="left" />
                <AnimatedText text="To" direction="left" delay={0.2} />
                <AnimatedText text="My" direction="left" delay={0.3} />
              </span>
              <div className="flex sm:gap-10 gap-2 xl:text-9xl sm:text-7xl text-4xl text-shadow-md">
                <AnimatedText
                  text="Portfolio"
                  direction="down"
                  delay={0.3}
                  className="bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent"
                />
                <AnimatedText
                  text="Website"
                  direction="down"
                  delay={0.4}
                  className="bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent"
                />
              </div>
            </div>
            <AnimatedContainer direction="down" delay={0.5} className="center">
              <div className="bg-gradient-to-r from-blue-800/25 to-purple-800/25 blur-xl p-4 sm:w-xl w-2xs h-24 rounded-xl"></div>
              <div className="absolute sm:text-5xl text-xl bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent flex items-center gap-2">
                <InternetIcon size="48px" className="text-blue-800" />
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("www.portfolio-pv.com")
                      .pauseFor(2500)
                      .start();
                  }}
                />
              </div>
            </AnimatedContainer>
          </AnimatedUnload>
        ) : (
          <MainLayout />
        )}
      </main>
    </AnimatePresence>
  );
}

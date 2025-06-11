import CodeIcon from "../assets/component/Code";
import GithubIcon from "../assets/component/Github";
import UserIcon from "../assets/component/User";
import InternetIcon from "../assets/component/Internet";
import Typewriter from "typewriter-effect";
import AnimatedIcon from "../components/animations/AnimatedIcon";
import AnimatedText from "../components/animations/AnimatedText";
import AnimatedContainer from "../components/animations/AnimatedContainer";
import AnimatedBackGround from "../components/background/AnimatedBackGround";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import MainLayout from "../components/layout/MainLayout";
import { Directions, DirectionsUnload } from "../components/animations/types";
import AnimatedUnload from "../components/animations/AnimatedUnload";
import AnimatedThreeBG from "../components/three/AnimatedThreeBG";

export default function Main() {
  const [isUnloaded, setIsUnloaded] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!isUnloaded ? (
        <div className="screen-center overflow-hidden bg-[url('/bg/InitialLoadBG.webp')]">
          <AnimatedBackGround className="starting-section-bg" />
          <AnimatedUnload
            direction={DirectionsUnload.scaleUP}
            delay={2}
            className="screen-center flex-col overflow-hidden"
            onUnload={() => setIsUnloaded(true)}
          >
            <div className="screen-center flex-col overflow-hidden z-10">
              <div className="starting-section-badges-container">
                <AnimatedIcon
                  icon={<CodeIcon size="64px" />}
                  delay={0}
                  paddingImg="starting-section-badge--padding"
                  color="starting-section-badge--color"
                  className="starting-section-badge"
                />
                <AnimatedIcon
                  icon={<UserIcon size="64px" />}
                  delay={0.1}
                  paddingImg="starting-section-badge--padding"
                  color="starting-section-badge--color"
                  className="starting-section-badge"
                />
                <AnimatedIcon
                  icon={<GithubIcon size="64px" />}
                  delay={0.2}
                  paddingImg="starting-section-badge--padding"
                  color="starting-section-badge--color"
                  className="starting-section-badge"
                />
              </div>
              <div className="starting-section-text-container">
                <span className="starting-section-title">
                  <AnimatedText text="Welcome" direction="left" />
                  <AnimatedText text="To" direction="left" delay={0.2} />
                  <AnimatedText text="My" direction="left" delay={0.3} />
                </span>
                <div className="starting-section-title-second">
                  <AnimatedText
                    text="Portfolio"
                    direction="down"
                    delay={0.3}
                    className="starting-section-title-second-word"
                  />
                  <AnimatedText
                    text="Website"
                    direction="down"
                    delay={0.4}
                    className="starting-section-title-second-word"
                  />
                </div>
              </div>
              <AnimatedContainer
                direction={Directions.DOWN}
                delay={0.5}
                className="center"
              >
                <div className="starting-section-handwrite-bg"></div>
                <div className="starting-section-handwrite-text">
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
            </div>
          </AnimatedUnload>
        </div>
      ) : (
        <>
          <AnimatedThreeBG />
          <MainLayout />
        </>
      )}
    </AnimatePresence>
  );
}

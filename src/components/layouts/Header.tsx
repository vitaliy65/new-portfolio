import HeaderButton from "./header/header.button";
import TextGradient from "../custom-containers/Container-text-gradient";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

import "../../style/header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="up w-full h-24 mb-4 bg-black/40 backdrop-blur-3xl bg-cover bg-center lg:px-32 md:px-24 sm:px-12 px-6 fixed z-10">
      <div className="full center-between justify-between py-4">
        <div className="-z-10">
          <HeaderButton
            textObj={
              <TextGradient
                text="Posvistak.Vitaliy"
                direction="right"
                from="from-purple-800"
                to="to-blue-800"
              />
            }
            href="#welcome"
          />
        </div>
        {windowSize.width > 880 ? (
          <div className="flex flex-row gap-12">
            <HeaderButton text="Home" href="#welcome" />
            <HeaderButton text="About" href="#about" />
            <HeaderButton text="Portfolio" href="#portfolio" />
            <HeaderButton text="Contact" href="#contact" />
          </div>
        ) : (
          <div>
            <AnimatePresence>
              {!open ? (
                <motion.button
                  className={`menu-button center`}
                  onClick={toggleMenu}
                  exit={{ rotate: 90 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{
                    type: "linear",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                >
                  {open ? <X /> : <Menu />}
                </motion.button>
              ) : (
                <motion.div
                  className="absolute w-screen h-screen inset-0 bg-black/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setOpen(false)}
                >
                  <motion.div
                    className="absolute top-0 right-0 h-screen w-xs bg-zinc-950 rounded-l-lg shadow-lg p-4 mr-4 flex flex-col gap-2"
                    initial={{ opacity: 0, translateX: "100%" }}
                    animate={{
                      opacity: 1,
                      translateX: "0%",
                    }}
                    transition={{
                      type: "linear",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.2,
                      ease: "easeInOut",
                    }}
                    exit={{ opacity: 0, translateX: "100%" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex flex-col gap-2 mt-2">
                      <motion.button
                        className={`menu-button center z-10`}
                        onClick={toggleMenu}
                        animate={{ rotate: open ? 90 : 0 }}
                        exit={{ rotate: 0 }}
                        whileHover={{ scale: 1.2 }}
                        transition={{
                          type: "linear",
                          stiffness: 300,
                          damping: 30,
                          duration: 0.2,
                          ease: "easeInOut",
                        }}
                      >
                        {open ? <X /> : <Menu />}
                      </motion.button>
                      <HeaderButton
                        text="Home"
                        href="#welcome"
                        onClick={() => setOpen(false)}
                      />
                      <HeaderButton
                        text="About"
                        href="#about"
                        onClick={() => setOpen(false)}
                      />
                      <HeaderButton
                        text="Portfolio"
                        href="#portfolio"
                        onClick={() => setOpen(false)}
                      />
                      <HeaderButton
                        text="Contact"
                        href="#contact"
                        onClick={() => setOpen(false)}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </header>
  );
}

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
    <header className="header-main">
      <div className="header-container">
        <div className="header-logo-box">
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
          <div className="header-navigation-container">
            <HeaderButton text="Home" href="#welcome" />
            <HeaderButton text="About" href="#about" />
            <HeaderButton text="Portfolio" href="#portfolio" />
            <HeaderButton text="Contact" href="#contact" />
          </div>
        ) : (
          <div>
            <AnimatePresence>
              {!open && (
                <motion.button
                  className="header-side-menu-button"
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
              )}
            </AnimatePresence>

            <AnimatePresence>
              {open && (
                <motion.div
                  className="header-side-menu-bg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setOpen(false)}
                >
                  <motion.div
                    className="header-side-menu-container"
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
                    <motion.button
                      className={`header-side-menu-button`}
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

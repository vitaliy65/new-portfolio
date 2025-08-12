import HeaderButton from "./header/header.button";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import HeaderSideButton from "./header/header.side.button";

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
    <header className={`header-main`}>
      <div
        className={`header-container ${
          windowSize.width < 880 ? "main-bg" : ""
        } ${open ? "opened" : ""}`}
      >
        {windowSize.width > 880 ? (
          <div className="header-navigation-container">
            <HeaderButton text="Home" href="#welcome" />
            <HeaderButton text="About" href="#about" />
            <HeaderButton text="Portfolio" href="#portfolio" />
            <HeaderButton text="Contact" href="#contact" />
          </div>
        ) : (
          <>
            <div className={`menu-button-border ${open ? "opened" : ""}`}>
              <motion.button
                className={`header-side-menu-button ${open ? "opened" : ""}`}
                onClick={toggleMenu}
                exit={{ rotate: 90 }}
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
            </div>

            {open && (
              <>
                <div className="corner-left"></div>
                <svg
                  className="svg-corner"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_310_2)">
                    <path
                      d="M30 0H0V30C0 13.431 13.431 0 30 0Z"
                      fill="var(--color-surface-dark)"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_310_2">
                      <rect
                        width="30"
                        height="30"
                        fill="var(--color-surface-dark)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <div
                  className="header-side-menu-container"
                  onClick={(e) => e.stopPropagation()}
                >
                  <HeaderSideButton
                    text="Home"
                    href="#welcome"
                    onClick={() => setOpen(false)}
                  />
                  <HeaderSideButton
                    text="About"
                    href="#about"
                    onClick={() => setOpen(false)}
                  />
                  <HeaderSideButton
                    text="Portfolio"
                    href="#portfolio"
                    onClick={() => setOpen(false)}
                  />
                  <HeaderSideButton
                    text="Contact"
                    href="#contact"
                    onClick={() => setOpen(false)}
                  />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </header>
  );
}

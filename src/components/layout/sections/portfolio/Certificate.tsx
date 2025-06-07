import { certificates } from "../../../../_data/certificates";
import AnimatedContainer from "../../../animations/AnimatedContainer";
import { useEffect, useState } from "react";
import { Directions } from "../../../animations/types";
import { useAppSelector } from "../../../../_hooks/hooks";
import LazyImage from "../../../ui/LazyImage";

export default function CertificateSection() {
  const [isXlScreen, setIsXlScreen] = useState(window.innerWidth >= 1280);
  const theme = useAppSelector((s) => s.theme.theme);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsXlScreen(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <section className="certificate-grid">
      {certificates.map((c, index) => {
        let direction: Directions = Directions.LEFT;

        if (isXlScreen) {
          // Для 3 колонок
          const column = index % 3;

          if (column === 0) {
            direction = Directions.LEFT;
          } else if (column === 1) {
            direction = Directions.DOWN;
          } else {
            direction = Directions.RIGHT;
          }
        } else {
          // Для 2 колонок
          direction = index % 2 === 0 ? Directions.LEFT : Directions.RIGHT;
        }

        return (
          <AnimatedContainer
            direction={direction}
            delay={0.1 + index * 0.05}
            key={index}
            className={`certificate-container ${theme === "light" && "light"}`}
          >
            <a
              key={index}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-link"
            >
              <LazyImage
                src={c.img}
                className={`certificate-img`}
                alt={`certificate img ${index}`}
              />
            </a>
          </AnimatedContainer>
        );
      })}
    </section>
  );
}

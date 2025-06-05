import { certificates } from "../../../../_data/certificates";
import AnimatedContainer from "../../../animated/AnimatedContainer";
import { useEffect, useState } from "react";
import { Directions } from "../../../animated/types";

export default function CertificateSection() {
  const [isXlScreen, setIsXlScreen] = useState(window.innerWidth >= 1280);

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
            className="certificate-container"
          >
            <a
              key={index}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-link"
            >
              <img src={c.img} className={`certificate-img`} />
            </a>
          </AnimatedContainer>
        );
      })}
    </section>
  );
}

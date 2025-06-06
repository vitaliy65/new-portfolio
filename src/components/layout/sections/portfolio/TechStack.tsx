import { techStack } from "../../../../_data/techStack";
import AnimatedContainer from "../../../animations/AnimatedContainer";
import { useEffect, useState } from "react";
import { Directions } from "../../../animations/types";
import { useAppSelector } from "../../../../_hooks/hooks";

export default function TechStackSection() {
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
    <section className="techstack-grid">
      {techStack.map((ts, index) => {
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
            key={index}
            className="flex full"
          >
            <div
              key={index}
              className={`techstack-container ${theme === "light" && "light"}`}
            >
              <div className="techstack-img-container">
                <img src={ts.img} alt={ts.name} className="techstack-img" />
              </div>
              <p className="techstack-text">{ts.name}</p>
            </div>
          </AnimatedContainer>
        );
      })}
    </section>
  );
}

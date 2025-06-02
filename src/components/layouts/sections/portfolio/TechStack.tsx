import { techStack } from "../../../../_data/techStack";
import AnimatedContainer from "../../../animated/AnimatedContainer";
import { useEffect, useState } from "react";

export default function TechStackSection() {
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
    <section className="grid min-[60rem]:grid-cols-6 sm:grid-cols-4 grid-cols-3 gap-4 mt-8">
      {techStack.map((ts, index) => {
        let direction: "up" | "down" | "left" | "right" | "zoomIn" | "zoomOut" =
          "left";

        if (isXlScreen) {
          // Для 3 колонок
          const column = index % 3;

          if (column === 0) {
            direction = "left";
          } else if (column === 1) {
            direction = "down";
          } else {
            direction = "right";
          }
        } else {
          // Для 2 колонок
          direction = index % 2 === 0 ? "left" : "right";
        }

        return (
          <AnimatedContainer
            direction={direction}
            key={index}
            className="flex full"
          >
            <div
              key={index}
              className="flex flex-col full bg-white/15 rounded-lg p-2 shadow-lg hover:shadow-xl transition-all duration-300 justify-between hover:-translate-y-2"
            >
              <div className="w-full">
                <img
                  src={ts.img}
                  alt={ts.name}
                  className="full object-contain sm:p-4 p-2"
                  loading="lazy"
                />
              </div>
              <p className="text-center mt-2 max-sm:text-sm">{ts.name}</p>
            </div>
          </AnimatedContainer>
        );
      })}
    </section>
  );
}

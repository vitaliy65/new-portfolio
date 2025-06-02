import { certificates } from "../../../../_data/certificates";
import AnimatedContainer from "../../../animated/AnimatedContainer";
import { useEffect, useState } from "react";

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
    <section className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-8">
      {certificates.map((c, index) => {
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
            delay={0.1 + index * 0.05}
            key={index}
            className="flex full bg-white/15 rounded-lg"
          >
            <a
              key={index}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col h-fit p-4 shadow-lg hover:shadow-xl transition-all duration-300 justify-between hover:-translate-y-2"
            >
              <img
                src={c.img}
                className={`w-full h-full object-cover rounded-lg`}
              />
            </a>
          </AnimatedContainer>
        );
      })}
    </section>
  );
}

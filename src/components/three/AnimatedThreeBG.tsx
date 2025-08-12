import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { initialBulbSettings } from "../../_data/bulbSettings";
import { Bulbs } from "./Bulbs";

export default function AnimatedThreeBG() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [activeSectionId, setActiveSectionId] = useState("welcome"); // Default to welcome section

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    const sections = ["welcome", "about", "portfolio", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSectionId(entry.target.id);
              }
            });
          },
          { threshold: 0.5 } // Adjust threshold as needed
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="blur-3xl full -z-10 left-0 top-0 fixed">
      <Canvas orthographic camera={{ position: [0, 0, 10], zoom: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 10]} intensity={1} />
        <Bulbs
          bulbSettings={initialBulbSettings}
          windowWidth={windowWidth}
          windowHeight={windowHeight}
          activeSectionId={activeSectionId}
        />
      </Canvas>
    </div>
  );
}

import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "../../../../_data/projects";
import { useState } from "react";
import AnimatedContainer from "../../../animated/AnimatedContainer";

export default function ProjectsSection() {
  const [isHovered, setIsHovered] = useState<{
    isHovered: boolean;
    index: number;
  }>({
    isHovered: false,
    index: -1,
  });

  return (
    <section className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-8">
      {projects.map((project, index) => (
        <AnimatedContainer
          direction={index % 2 === 0 ? "left" : "right"}
          delay={0.1 + index * 0.05}
          key={index}
          className="flex full"
        >
          <div
            onClick={() =>
              window.open(project.link, "_blank", "noopener,noreferrer")
            }
            className="flex flex-col bg-white/15 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 justify-between cursor-pointer"
            onMouseEnter={() => setIsHovered({ isHovered: true, index })}
            onMouseLeave={() => setIsHovered({ isHovered: false, index })}
          >
            <div>
              <div className="aspect-video mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover rounded-lg mb-4 ${
                    isHovered.isHovered &&
                    isHovered.index === index &&
                    "scale-102"
                  } transition-transform duration-200`}
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
              </div>
            </div>

            <div className="flex justify-between items-center flex-col lg:flex-row gap-2">
              <a
                className="flex p-4 py-2 rounded-lg center lg:w-34 w-full border border-gray-500 hover:scale-105 active:hover:scale-95 transition-transform"
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo <ExternalLink />
              </a>
              <a
                className="flex p-4 py-2 rounded-lg bg-white/5 center lg:w-fit w-full hover:scale-105 active:hover:scale-95 transition-transform"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                Source Code
                <ArrowRight />
              </a>
            </div>
          </div>
        </AnimatedContainer>
      ))}
    </section>
  );
}

import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "../../../../_data/projects";
import { useState } from "react";
import AnimatedContainer from "../../../animations/AnimatedContainer";
import { Directions } from "../../../animations/types";
import { useAppSelector } from "../../../../_hooks/hooks";
import LazyImage from "../../../ui/LazyImage";

export default function ProjectsSection() {
  const [isHovered, setIsHovered] = useState<{
    isHovered: boolean;
    index: number;
  }>({
    isHovered: false,
    index: -1,
  });
  const theme = useAppSelector((s) => s.theme.theme);

  return (
    <section className="projects-grid">
      {projects.map((project, index) => (
        <AnimatedContainer
          direction={index % 2 === 0 ? Directions.LEFT : Directions.RIGHT}
          delay={0.1 + index * 0.05}
          key={index}
          className="flex full"
        >
          <div
            onClick={() =>
              window.open(project.link, "_blank", "noopener,noreferrer")
            }
            className={`project-card-bg ${theme === "light" ? "light" : ""}`}
            onMouseEnter={() => setIsHovered({ isHovered: true, index })}
            onMouseLeave={() => setIsHovered({ isHovered: false, index })}
          >
            <div>
              <div className="project-card-img-container">
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className={`full project-card-img ${
                    isHovered.isHovered &&
                    isHovered.index === index &&
                    "scale-102"
                  }`}
                />
              </div>

              <div>
                <h3 className="project-card-title">{project.title}</h3>
                <p
                  className={`project-card-description ${
                    theme === "light" ? "light" : ""
                  }`}
                >
                  {project.description}
                </p>
              </div>
            </div>

            <div className="project-card-buttons-container">
              <a
                className="project-card-button--demo"
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo <ExternalLink />
              </a>
              <a
                className={`project-card-button ${
                  theme === "light" ? "light" : ""
                }`}
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

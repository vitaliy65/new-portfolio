import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type Direction = "up" | "down" | "left" | "right" | "zoomIn" | "zoomOut";

interface AnimatedContainerProps {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}

/**
 * Компонент для анімації появи елементів з різних напрямків
 * @param {ReactNode} children - Дочірні елементи для анімації
 * @param {number} [delay=0] - Затримка анімації в секундах
 * @param {Direction} [direction="left"] - Напрямок появи елемента ("up" | "down" | "left" | "right" | "zoomIn" | "zoomOut")
 * @param {string} [className=""] - Додаткові CSS класи
 * @returns {JSX.Element} Анімований контейнер з дочірніми елементами
 */
export default function AnimatedContainer({
  children,
  delay = 0,
  direction = "left",
  className = "",
}: AnimatedContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const getInitialPosition = (dir: Direction) => {
    switch (dir) {
      case "left":
        return { translateX: -100 };
      case "right":
        return { translateX: 100 };
      case "up":
        return { translateY: -100 };
      case "down":
        return { translateY: 100 };
      case "zoomIn":
        return { scale: 0 };
      case "zoomOut":
        return { scale: 2 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...getInitialPosition(direction) }}
      animate={
        isInView
          ? { opacity: 1, translateX: 0, translateY: 0, scale: 1 }
          : { opacity: 0, ...getInitialPosition(direction) }
      }
      transition={{ duration: 0.3, delay }}
    >
      {children}
    </motion.div>
  );
}

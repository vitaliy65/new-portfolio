import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";
import { Directions } from "./types";

interface AnimatedContainerProps {
  children: ReactNode;
  delay?: number;
  direction?: Directions;
  className?: string;
  onUnload?: () => void;
  onLoad?: () => void;
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
  direction = Directions.LEFT,
  className = "",
  onUnload,
}: AnimatedContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const getInitialPosition = (dir: Directions) => {
    switch (dir) {
      case Directions.LEFT:
        return { opacity: 0, translateX: -100 };
      case Directions.RIGHT:
        return { opacity: 0, translateX: 100 };
      case Directions.UP:
        return { opacity: 0, translateY: -100 };
      case Directions.DOWN:
        return { opacity: 0, translateY: 100 };
      case Directions.ZOOMIN:
        return { opacity: 0, scale: 0 };
      case Directions.ZOOMOUT:
        return { opacity: 0, scale: 2 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`${className ? className : ""}`}
      initial={{ ...getInitialPosition(direction) }}
      animate={
        isInView
          ? { opacity: 1, translateX: 0, translateY: 0, scale: 1 }
          : { ...getInitialPosition(direction) }
      }
      transition={{ duration: 0.3, delay }}
      onAnimationComplete={onUnload}
    >
      {children}
    </motion.div>
  );
}

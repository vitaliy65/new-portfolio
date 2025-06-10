import { motion } from "motion/react";
import ImageContainer from "../ui/Container-Image";
import type { ReactElement } from "react";

type Direction = "top" | "bottom" | "left" | "right";

interface AnimatedIconProps {
  icon: ReactElement;
  delay?: number;
  className?: string;
  direction?: Direction;
  paddingImg?: string;
  color: string;
}

/**
 * AnimatedIcon - компонент для створення анімованих іконок з ефектом появи.
 *
 * @param {ReactElement} icon - React елемент іконки для відображення
 * @param {number} [delay=0] - Затримка анімації в секундах (за замовчуванням: 0)
 * @param {string} [className=""] - Додаткові CSS класи для стилізації контейнера (за замовчуванням: "")
 * @param {Direction} [direction="top"] - Напрямок появи анімації (за замовчуванням: "top")
 *    Можливі значення:
 *    - "top" - поява зверху
 *    - "bottom" - поява знизу
 *    - "left" - поява зліва
 *    - "right" - поява справа
 * @param {string} [paddingImg="p-0"] - Внутрішні відступи для іконки (за замовчуванням: "p-0")
 *
 * @returns {JSX.Element} Анімований компонент з іконкою
 *
 * @example
 * ```tsx
 * <AnimatedIcon
 *   icon={<YourIcon />}
 *   direction="left"
 *   delay={0.5}
 *   className="w-12 h-12"
 *   paddingImg="p-2"
 * />
 * ```
 */
export default function AnimatedIcon({
  icon,
  delay = 0,
  className = "",
  direction = "top",
  paddingImg = "p-0",
  color,
}: AnimatedIconProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "top":
        return { opacity: 0, translateY: -50 };
      case "bottom":
        return { opacity: 0, translateY: 50 };
      case "left":
        return { opacity: 0, translateX: -50 };
      case "right":
        return { opacity: 0, translateX: 50 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: 0.3, delay }}
      className={`center`}
    >
      <ImageContainer
        className={`center ${className} ${color} object-cover overflow-hidden ${paddingImg}`}
        Img={icon}
      />
    </motion.div>
  );
}

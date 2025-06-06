import { motion } from "motion/react";

type Direction = "up" | "down" | "left" | "right";

interface AnimatedTextProps {
  /** Текст, який буде анімовано */
  text: string;
  /** Затримка анімації в секундах */
  delay?: number;
  /** Напрямок появи тексту */
  direction?: Direction;
  /** Додаткові CSS класи */
  className?: string;
}

/**
 * Компонент для анімованого відображення тексту
 * @param {AnimatedTextProps} props - Властивості компонента
 * @param {string} props.text - Текст, який буде анімовано
 * @param {number} [props.delay=0] - Затримка анімації в секундах
 * @param {Direction} [props.direction="left"] - Напрямок появи тексту ("up" | "down" | "left" | "right")
 * @param {string} [props.className=""] - Додаткові CSS класи
 * @returns {JSX.Element} Анімований текст
 */
export default function AnimatedText({
  text,
  delay = 0,
  direction = "left",
  className = "",
}: AnimatedTextProps) {
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
    }
  };

  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, ...getInitialPosition(direction) }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: 0.3, delay }}
    >
      {text}
    </motion.p>
  );
}

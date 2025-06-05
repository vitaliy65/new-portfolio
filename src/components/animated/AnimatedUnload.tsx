import { motion } from "motion/react";
import type { ReactNode } from "react";
import { DirectionsUnload } from "./types";

interface AnimatedContainerProps {
  /** Дочірні елементи для анімації */
  children: ReactNode;
  /** Затримка перед початком анімації в мілісекундах (за замовчуванням: 0) */
  delay?: number;
  /** Напрямок анімації: "scaleUP" - масштабування вгору, "scaleDOWN" - масштабування вниз (за замовчуванням: "scaleUP") */
  direction?: DirectionsUnload;
  /** Додаткові CSS класи для контейнера */
  className?: string;
  /** Функція зворотного виклику, яка виконується після завершення анімації вивантаження */
  onUnload?: () => void;
  /** Функція зворотного виклику, яка виконується після завершення анімації завантаження */
  onLoad?: () => void;
}

/**
 * Компонент для анімації вивантаження елементів
 *
 * @example
 * ```tsx
 * <AnimatedUnload direction="scaleUP" delay={200}>
 *   <div>Анімований контент</div>
 * </AnimatedUnload>
 * ```
 */
export default function AnimatedUnload({
  children,
  delay = 0,
  direction = DirectionsUnload.scaleUP,
  className = "",
  onUnload,
}: AnimatedContainerProps) {
  const getInitialPosition = (dir: DirectionsUnload) => {
    switch (dir) {
      case DirectionsUnload.scaleUP:
        return { scale: 1.5 };
      case DirectionsUnload.scaleDOWN:
        return { scale: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, ...getInitialPosition(direction) }}
      transition={{ duration: 0.3, delay }}
      onAnimationComplete={onUnload}
    >
      {children}
    </motion.div>
  );
}

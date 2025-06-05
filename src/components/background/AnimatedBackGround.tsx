import { motion } from "motion/react";

interface OptimizedBackgroundProps {
  className?: string;
}

export default function AnimatedBackGround({
  className = "",
}: OptimizedBackgroundProps) {
  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 0.2, 1] }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    />
  );
}

import { motion } from "motion/react";

interface OptimizedBackgroundProps {
  imageUrl: string;
  className?: string;
}

export default function OptimizedBackground({
  imageUrl,
  className = "",
}: OptimizedBackgroundProps) {
  return (
    <motion.div
      className={`${className} transition-opacity duration-200 bg-center object-cover`}
      style={{ backgroundImage: `url(${imageUrl})` }}
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

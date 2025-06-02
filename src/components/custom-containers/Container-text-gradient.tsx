interface TextGradientProps {
  className?: string;
  text: string;
  direction?: "left" | "right" | "top" | "bottom";
  from: string;
  to: string;
}

export default function TextGradient({
  className,
  text,
  direction,
  from,
  to,
}: TextGradientProps) {
  const gradientDirections = () => {
    switch (direction) {
      case "left":
        return "bg-gradient-to-l";
      case "right":
        return "bg-gradient-to-r";
      case "top":
        return "bg-gradient-to-t";
      case "bottom":
        return "bg-gradient-to-b";
      default:
        return "bg-gradient-to-r"; // Default to right if no direction is specified
    }
  };

  return (
    <p
      className={`${className} ${gradientDirections()} ${from} ${to} bg-clip-text text-transparent`}
    >
      {text}
    </p>
  );
}

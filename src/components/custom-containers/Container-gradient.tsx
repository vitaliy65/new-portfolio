import type { MouseEvent } from "react";

interface ContainerGradientProps {
  className?: string;
  direction?:
    | "left"
    | "right"
    | "top"
    | "bottom"
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left";
  from: string;
  to: string;
  children?: React.ReactNode;
  isButton?: boolean;
  isInForm?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function ContainerGradient({
  className = "",
  direction = "right",
  from,
  to,
  children,
  isButton = false,
  isInForm = false,
  onClick,
}: ContainerGradientProps) {
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
      case "top-right":
        return "bg-gradient-to-tr";
      case "top-left":
        return "bg-gradient-to-tl";
      case "bottom-right":
        return "bg-gradient-to-br";
      case "bottom-left":
        return "bg-gradient-to-bl";
      default:
        return "bg-gradient-to-r";
    }
  };

  const baseClasses = `${className} ${gradientDirections()} ${from} ${to}`;

  if (isButton) {
    return (
      <button
        className={baseClasses}
        onClick={onClick}
        type={isInForm ? "submit" : "button"}
      >
        {children}
      </button>
    );
  }

  return <div className={baseClasses}>{children}</div>;
}

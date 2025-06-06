import type { LucideIcon } from "lucide-react";
import { useAppSelector } from "../../../../../_hooks/hooks";

interface NavButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

export default function NavButton({
  icon: Icon,
  label,
  onClick,
}: NavButtonProps) {
  const theme = useAppSelector((s) => s.theme.theme);

  return (
    <button
      className={`full-center ${
        theme === "light"
          ? "portfolio-nav-button-light"
          : "portfolio-nav-button"
      }`}
      onClick={onClick}
    >
      <Icon />
      {label}
    </button>
  );
}

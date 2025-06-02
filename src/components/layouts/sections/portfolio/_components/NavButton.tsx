import type { LucideIcon } from "lucide-react";

interface NavButtonProps {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function NavButton({
  icon: Icon,
  label,
  isActive,
  onClick,
}: NavButtonProps) {
  return (
    <button
      className={`full-center rounded-lg flex-col focus:bg-white/20 cursor-pointer transition-colors duration-200 ${
        isActive ? "bg-white/20" : ""
      }`}
      onClick={onClick}
    >
      <Icon />
      {label}
    </button>
  );
}

import type { LucideIcon } from "lucide-react";

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
  return (
    <button className={`full-center portfolio-nav-button`} onClick={onClick}>
      <Icon />
      {label}
    </button>
  );
}

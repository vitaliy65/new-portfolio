import type { ReactElement } from "react";

interface HeaderButtonProps {
  text?: string;
  textObj?: ReactElement;
  href?: string;
  onClick?: () => void;
}

export default function HeaderButton({
  text = "",
  textObj,
  href,
  onClick,
}: HeaderButtonProps) {
  return (
    <a
      className="header-main-menu-button"
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
        document
          .getElementById(`${href?.slice(1)}`)
          ?.scrollIntoView({ behavior: "smooth" });
      }}
      href={href}
    >
      {text != "" ? text : textObj}
    </a>
  );
}

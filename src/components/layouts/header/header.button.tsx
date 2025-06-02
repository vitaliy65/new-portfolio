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
      className="text-xl font-bold active:text-indigo-600 focus:text-indigo-600 py-4 hover:border-b-2 active:border-indigo-600 focus:border-b-2"
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

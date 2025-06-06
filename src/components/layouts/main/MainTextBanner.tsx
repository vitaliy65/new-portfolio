import { useAppSelector } from "../../../_hooks/hooks";

interface MainTextBannerProps {
  text: string;
  className?: string;
  img?: React.ReactNode;
}

export default function MainTextBanner({
  text,
  className,
  img = "",
}: MainTextBannerProps) {
  const theme = useAppSelector((s) => s.theme.theme);
  return (
    <button
      className={`${className ? className : ""} badge ${
        theme === "light" && "badge-light"
      }`}
    >
      {text}
      {img}
    </button>
  );
}

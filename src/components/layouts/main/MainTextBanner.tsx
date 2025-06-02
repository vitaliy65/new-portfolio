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
  return (
    <button
      className={`${className} flex flex-row px-4 py-2 w-full center rounded-full gap-2 transition-all`}
    >
      {text}
      {img}
    </button>
  );
}

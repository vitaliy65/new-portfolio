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
    <button className={`${className ? className : ""} badge`}>
      {text}
      {img}
    </button>
  );
}

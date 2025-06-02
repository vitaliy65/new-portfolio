import type { ReactElement } from "react";

interface ImageContainerProps {
  className: string;
  Img: ReactElement;
}

export default function ImageContainer({
  className,
  Img,
}: ImageContainerProps) {
  return <div className={className}>{Img}</div>;
}

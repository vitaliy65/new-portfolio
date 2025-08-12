import React, { type JSX } from "react";

interface BorderBlickProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement[] | React.ReactElement;
  className?: string;
}

export default function BorderBlick({
  children,
  className = "",
  ...rest
}: BorderBlickProps) {
  return (
    <div
      className={`${className} p-[1px] bg-linear-to-b from-white/70 from-0% to-70%`}
    >
      {children}
    </div>
  );
}

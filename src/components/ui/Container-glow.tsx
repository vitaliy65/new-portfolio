interface ContainerGlowProps {
  className?: string;
  glowColor: string;
  size?: string;
  children?: React.ReactNode;
}

export default function ContainerGlow({
  className = "",
  glowColor,
  size = "16px",
  children,
}: ContainerGlowProps) {
  return (
    <div
      className={`${className} ${glowColor}`}
      style={{ boxShadow: `0 0 ${size} var(--tw-shadow-color)` }}
    >
      {children}
    </div>
  );
}

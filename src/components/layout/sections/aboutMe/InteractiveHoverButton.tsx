import React from "react";
import { ArrowRight } from "lucide-react";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "View Projects", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`${className} group button-to-projects`}
      {...props}
    >
      <span className="button-to-projects-text">{text}</span>
      <div className="button-to-projects-popup-box">
        <span className="f-aurora__content">{text}</span>
        <ArrowRight />
      </div>
      <div className="button-to-projects-bg"></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };

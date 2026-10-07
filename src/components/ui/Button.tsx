import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

interface SharedProps {
  variant?: Variant;
  showArrow?: boolean;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  primary: "bg-accent text-ink hover:bg-off-white",
  secondary:
    "bg-transparent text-off-white border border-off-white/35 hover:bg-off-white hover:text-ink hover:border-off-white",
  ghost: "bg-transparent text-off-white border border-white/15 hover:border-accent hover:text-accent",
};

const baseStyles =
  "group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-semibold tracking-[0.15em] uppercase transition-[color,background-color,border-color] duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

// Critically damped, no overshoot — press feedback should feel instant, not bouncy
const pressSpring = { type: "spring" as const, stiffness: 500, damping: 40, mass: 0.5 };

// framer-motion's onDrag/onAnimation* handlers clash with the native DOM ones
type MotionClash =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration";

type ButtonAsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, MotionClash> & { href?: undefined };

type ButtonAsAnchor = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, MotionClash> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = "primary", showArrow = true, children, className, ...props }, ref) => {
    const classes = clsx(baseStyles, variantStyles[variant], className);

    if ("href" in props && props.href) {
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          whileTap={{ scale: 0.97 }}
          transition={pressSpring}
          {...(props as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, MotionClash>)}
        >
          {children}
          {showArrow && (
            <ArrowRight
              size={16}
              className="transition-transform duration-300 ease-out group-hover:translate-x-1"
            />
          )}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        whileTap={{ scale: 0.97 }}
        transition={pressSpring}
        {...(props as Omit<ButtonHTMLAttributes<HTMLButtonElement>, MotionClash>)}
      >
        {children}
        {showArrow && (
          <ArrowRight
            size={16}
            className="transition-transform duration-300 ease-out group-hover:translate-x-1"
          />
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

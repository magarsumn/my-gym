import { motion } from "framer-motion";
import clsx from "clsx";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | string[];
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const lines = Array.isArray(title) ? title : [title];

  return (
    <div className={clsx(align === "center" && "text-center", className)}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-4 text-xs font-semibold tracking-[0.3em] text-accent uppercase"
        >
          {eyebrow}
        </motion.p>
      )}
      <h2
        className={clsx(
          "font-display text-balance font-medium leading-[0.98] tracking-tight text-off-white",
          "text-5xl sm:text-6xl sm:tracking-[-0.03em] md:text-7xl md:tracking-[-0.035em]",
          titleClassName
        )}
      >
        {lines.map((line, i) => (
          <motion.span
            key={line}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
            className="block"
          >
            {line}
          </motion.span>
        ))}
      </h2>
    </div>
  );
}

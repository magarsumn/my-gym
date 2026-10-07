import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { hero } from "../data/gym";
import { images } from "../data/images";
import { Button } from "./ui/Button";
import { AnimatedCounter } from "./ui/AnimatedCounter";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative isolate grid min-h-[100svh] w-full grid-cols-1 bg-ink lg:grid-cols-2"
    >
      <div className="relative z-10 flex flex-col justify-center px-6 pt-32 pb-16 sm:px-10 lg:px-14 lg:py-24 xl:px-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mb-6 text-xs font-semibold tracking-[0.4em] text-accent uppercase"
        >
          {hero.eyebrow}
        </motion.p>

        <h1 className="font-display max-w-xl text-balance text-6xl font-semibold leading-[0.94] tracking-tight text-off-white sm:text-7xl sm:tracking-[-0.02em]">
          {hero.headline.map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
          className="mt-7 max-w-sm text-balance text-base text-bone sm:text-lg"
        >
          {hero.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="#facilities" variant="primary">
            {hero.primaryCta}
          </Button>
          <Button href="#membership" variant="secondary" showArrow={false}>
            {hero.secondaryCta}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-14 flex items-center gap-4 border-t border-white/10 pt-6"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <p className="font-display text-2xl font-semibold tabular-nums text-off-white">
            <AnimatedCounter value={1247} />
          </p>
          <p className="text-xs text-bone/70 uppercase tracking-[0.15em]">
            Members training this week
          </p>
        </motion.div>
      </div>

      <div className="relative h-[45vh] overflow-hidden border-t border-white/10 lg:h-auto lg:border-t-0 lg:border-l">
        <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[10%] h-[120%]">
          <motion.img
            src={images.hero}
            alt="Athlete training at Fitness Focus"
            className="h-full w-full object-cover"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent lg:bg-gradient-to-l lg:from-ink/20 lg:via-transparent lg:to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-8 left-6 z-10 hidden lg:left-14 lg:block xl:left-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 text-off-white/50"
        >
          <ChevronDown size={16} />
          <span className="text-xs font-medium tracking-[0.2em] uppercase">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

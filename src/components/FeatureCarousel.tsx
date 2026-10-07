import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { carouselSlides } from "../data/gym";
import { useMediaQuery } from "../hooks/useMediaQuery";

const COUNT = carouselSlides.length;
const pressSpring = { type: "spring" as const, stiffness: 500, damping: 40, mass: 0.5 };

function Slide({ slide, distance }: { slide: (typeof carouselSlides)[number]; distance: number }) {
  const emphasis = Math.max(0, 1 - Math.abs(distance) * 0.5);
  return (
    <div className="relative h-full w-screen flex-shrink-0 px-4 sm:px-8 lg:px-16">
      <motion.div
        animate={{
          scale: 0.92 + emphasis * 0.08,
          opacity: 0.45 + emphasis * 0.55,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative mx-auto h-full max-h-[560px] w-full max-w-5xl overflow-hidden border border-white/10"
      >
        <img
          src={slide.image}
          alt={slide.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
          <p className="mb-2 text-xs font-semibold tracking-[0.3em] text-accent uppercase">
            {slide.eyebrow}
          </p>
          <h3 className="max-w-md text-balance text-3xl font-semibold leading-tight text-off-white sm:text-4xl">
            {slide.title}
          </h3>
          <p className="mt-3 max-w-sm text-balance text-sm text-bone sm:text-base">
            {slide.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function Progress({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      {carouselSlides.map((slide, i) => (
        <motion.button
          key={slide.id}
          type="button"
          aria-label={`Go to slide ${i + 1}: ${slide.eyebrow}`}
          aria-current={active === i}
          onClick={() => onSelect(i)}
          whileTap={{ scale: 0.85 }}
          transition={pressSpring}
          className="group relative flex h-4 w-8 items-center"
        >
          <span className="h-[3px] w-8 bg-white/15" />
          <motion.span
            className="absolute left-0 h-[3px] w-8 origin-left bg-accent"
            animate={{ scaleX: active === i ? 1 : 0.25 }}
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
          />
        </motion.button>
      ))}
    </div>
  );
}

function DesktopCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(COUNT - 1) * 100}vw`]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(COUNT - 1, Math.max(0, Math.round(v * (COUNT - 1))));
    setActive(idx);
  });

  const goTo = (index: number) => {
    const clamped = Math.min(COUNT - 1, Math.max(0, index));
    const el = trackRef.current;
    if (!el) return;
    const target =
      el.offsetTop + (clamped / (COUNT - 1)) * (el.offsetHeight - window.innerHeight);
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goTo(active + 1);
    if (e.key === "ArrowLeft") goTo(active - 1);
  };

  return (
    <div ref={trackRef} style={{ height: `${COUNT * 100}vh` }} className="relative">
      <div
        className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden outline-none"
        tabIndex={0}
        role="group"
        aria-roledescription="carousel"
        aria-label="Gym experiences"
        onKeyDown={onKeyDown}
      >
        <motion.div style={{ x }} className="flex h-[70%]">
          {carouselSlides.map((slide, i) => (
            <Slide key={slide.id} slide={slide} distance={i - active} />
          ))}
        </motion.div>

        <div className="mx-auto mt-10 flex w-full max-w-5xl items-center justify-between px-4 sm:px-8 lg:px-16">
          <Progress active={active} onSelect={goTo} />
          <div className="flex items-center gap-3">
            <motion.button
              type="button"
              aria-label="Previous slide"
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
              whileTap={active === 0 ? undefined : { scale: 0.9 }}
              transition={pressSpring}
              className="flex h-11 w-11 items-center justify-center border border-white/15 text-off-white transition-[color,border-color] duration-200 ease-out hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-white/15 disabled:hover:text-off-white"
            >
              <ChevronLeft size={18} />
            </motion.button>
            <motion.button
              type="button"
              aria-label="Next slide"
              onClick={() => goTo(active + 1)}
              disabled={active === COUNT - 1}
              whileTap={active === COUNT - 1 ? undefined : { scale: 0.9 }}
              transition={pressSpring}
              className="flex h-11 w-11 items-center justify-center border border-white/15 text-off-white transition-[color,border-color] duration-200 ease-out hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-white/15 disabled:hover:text-off-white"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    setActive(Math.min(COUNT - 1, Math.max(0, idx)));
  };

  const goTo = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.min(COUNT - 1, Math.max(0, index));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto"
      >
        {carouselSlides.map((slide) => (
          <div key={slide.id} className="w-screen flex-shrink-0 snap-center px-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/10">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="mb-2 text-xs font-semibold tracking-[0.3em] text-accent uppercase">
                  {slide.eyebrow}
                </p>
                <h3 className="text-balance text-2xl font-semibold leading-tight text-off-white">
                  {slide.title}
                </h3>
                <p className="mt-2 text-balance text-sm text-bone">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center px-4">
        <Progress active={active} onSelect={goTo} />
      </div>
    </div>
  );
}

export function FeatureCarousel() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <section id="experience" className="relative bg-ink py-20 lg:py-0">
      <div className="mx-auto mb-10 max-w-7xl px-6 lg:px-10 lg:pt-24">
        <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-accent uppercase">
          The Experience
        </p>
        <h2 className="font-display max-w-2xl text-balance text-4xl font-medium leading-[1.05] tracking-tight text-off-white sm:text-5xl">
          Every zone, built with intent.
        </h2>
      </div>
      {isDesktop ? <DesktopCarousel /> : <MobileCarousel />}
    </section>
  );
}

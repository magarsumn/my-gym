import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems } from "../data/gym";
import { SectionHeading } from "./ui/SectionHeading";

const pressSpring = { type: "spring" as const, stiffness: 500, damping: 40, mass: 0.5 };

export function Gallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 8);
  };

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-gallery-item]");
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="relative bg-charcoal py-28 lg:py-36">
      <div className="mx-auto mb-10 max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow="Gallery" title="A look inside the work." />
      </div>

      <div
        ref={scrollerRef}
        onScroll={updateEdges}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 lg:gap-6 lg:px-10"
      >
        {galleryItems.map((item) => (
          <div
            key={item.id}
            data-gallery-item
            className="relative h-[70vw] max-h-120 w-[78vw] flex-shrink-0 snap-start overflow-hidden border border-white/10 sm:h-105 sm:w-85"
          >
            <img
              src={item.image}
              alt={item.alt}
              loading="lazy"
              className="h-full w-full object-cover grayscale transition-[filter,transform] duration-700 ease-out hover:scale-105 hover:grayscale-0"
            />
          </div>
        ))}
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl items-center gap-3 px-6 lg:px-10">
        <motion.button
          type="button"
          aria-label="Previous"
          onClick={() => scrollByCard(-1)}
          disabled={atStart}
          whileTap={atStart ? undefined : { scale: 0.9 }}
          transition={pressSpring}
          className="flex h-11 w-11 items-center justify-center border border-white/15 text-off-white transition-[color,border-color] duration-200 ease-out hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-white/15 disabled:hover:text-off-white"
        >
          <ChevronLeft size={18} />
        </motion.button>
        <motion.button
          type="button"
          aria-label="Next"
          onClick={() => scrollByCard(1)}
          disabled={atEnd}
          whileTap={atEnd ? undefined : { scale: 0.9 }}
          transition={pressSpring}
          className="flex h-11 w-11 items-center justify-center border border-white/15 text-off-white transition-[color,border-color] duration-200 ease-out hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-white/15 disabled:hover:text-off-white"
        >
          <ChevronRight size={18} />
        </motion.button>
      </div>
    </section>
  );
}

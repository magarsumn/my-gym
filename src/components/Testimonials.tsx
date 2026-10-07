import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "../data/gym";

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => (v + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [active]);

  const testimonial = testimonials[active];

  return (
    <section className="relative overflow-hidden bg-charcoal py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <p className="mb-10 text-xs font-semibold tracking-[0.3em] text-accent uppercase">
          What members say
        </p>

        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
          <div className="relative min-h-[220px] sm:min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={testimonial.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="font-display relative text-balance text-3xl font-medium leading-[1.1] text-off-white sm:text-4xl"
              >
                {testimonial.quote}
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="flex gap-3 lg:flex-col lg:gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                aria-label={`Show testimonial from ${t.name}`}
                aria-current={active === i}
                onClick={() => setActive(i)}
                className={`group flex items-center gap-3 border p-2.5 text-left transition-colors duration-300 lg:w-56 ${
                  active === i
                    ? "border-accent/50 bg-white/[0.06]"
                    : "border-transparent hover:border-white/10"
                }`}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className={`h-11 w-11 flex-shrink-0 object-cover transition-opacity duration-300 ${
                    active === i ? "opacity-100" : "opacity-50 group-hover:opacity-80"
                  }`}
                />
                <span className="hidden lg:block">
                  <span
                    className={`block text-sm font-semibold transition-colors duration-300 ${
                      active === i ? "text-off-white" : "text-bone/60"
                    }`}
                  >
                    {t.name}
                  </span>
                  <span className="block text-xs text-bone/50">{t.detail}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

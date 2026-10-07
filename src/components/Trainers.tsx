import { motion } from "framer-motion";
import { trainers } from "../data/gym";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";

export function Trainers() {
  const trainer = trainers[0];

  return (
    <section id="trainers" className="relative bg-charcoal py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow="Trainer" title="Coached by someone who cares." />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-4/5 overflow-hidden border border-white/10 lg:col-span-5"
          >
            <img
              src={trainer.image}
              alt={trainer.name}
              loading="lazy"
              className="h-full w-full object-cover grayscale transition-[filter,transform] duration-700 ease-out hover:scale-105 hover:grayscale-0"
            />
            <span className="absolute top-5 left-5 bg-accent px-2.5 py-1 text-[11px] font-semibold tracking-wide text-ink">
              Lead Trainer
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="flex flex-col justify-center border-t border-white/10 pt-8 lg:col-span-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16"
          >
            <h3 className="font-display text-3xl font-medium text-off-white sm:text-4xl">
              {trainer.name}
            </h3>
            <p className="mt-2 text-sm font-medium tracking-widest text-accent uppercase">
              {trainer.specialty}
            </p>
            <p className="mt-6 max-w-md text-balance text-lg leading-relaxed text-bone">
              {trainer.bio}
            </p>
            <div className="mt-10">
              <Button href="#membership" variant="secondary">
                Train With Rabin
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

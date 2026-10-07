import { motion } from "framer-motion";
import { programs } from "../data/gym";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";

export function Programs() {
  return (
    <section id="programs" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Programs" title="Training paths for every goal." />
          <p className="max-w-sm text-balance text-bone/80">
            Structured, coach-led programs designed to meet you where you are and take you where
            you want to go.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {programs.map((program, i) => {
            const wide = i % 2 === 0;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: (i % 2) * 0.1 }}
                className={`group relative flex min-h-[420px] flex-col justify-end overflow-hidden border border-white/10 ${
                  wide ? "lg:col-span-7" : "lg:col-span-5 lg:mt-14"
                }`}
              >
                <img
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />

                <div className="relative p-8 sm:p-10">
                  <span className="font-display text-xs font-semibold tabular-nums tracking-[0.3em] text-accent uppercase">
                    0{i + 1}
                  </span>
                  <h3 className="font-display mt-3 text-3xl font-medium text-off-white sm:text-4xl">
                    {program.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-balance text-bone/85">{program.description}</p>
                  <Button
                    href="#membership"
                    variant="ghost"
                    className="mt-6 px-5 py-2.5 text-xs"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

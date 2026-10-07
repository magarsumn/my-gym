import { motion } from "framer-motion";
import { about } from "../data/gym";
import { images } from "../data/images";
import { AnimatedCounter } from "./ui/AnimatedCounter";

export function About() {
  return (
    <section id="about" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-5"
        >
          <p className="mb-5 text-xs font-semibold tracking-[0.3em] text-accent uppercase">
            About Fitness Focus
          </p>
          <h2 className="font-display text-balance text-4xl font-medium leading-[0.98] tracking-tight text-off-white sm:text-5xl md:text-6xl lg:sticky lg:top-32">
            {about.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </motion.div>

        <div className="flex flex-col justify-between gap-12 lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="text-balance text-lg leading-relaxed text-bone"
          >
            {about.body}
          </motion.p>

          <div className="relative overflow-hidden border border-white/10">
            <motion.img
              initial={{ scale: 1.15, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              src={images.about}
              alt="Members training inside Fitness Focus"
              className="aspect-[16/10] w-full object-cover"
              loading="lazy"
            />
          </div>

          <motion.dl
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8"
          >
            {about.stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                }}
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-semibold tabular-nums text-off-white sm:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </dd>
                <p className="mt-1 text-sm text-bone/80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}

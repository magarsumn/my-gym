import { motion } from "framer-motion";
import { images } from "../data/images";
import { Button } from "./ui/Button";

export function FinalCTA() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-ink">
      <motion.img
        initial={{ scale: 1.15, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        src={images.finalCta}
        alt="Athlete finishing a demanding training session"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-28 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display max-w-2xl text-balance text-5xl font-medium leading-[0.98] tracking-tight text-off-white sm:text-6xl md:text-7xl"
        >
          Your next level starts here.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="mt-6 max-w-md text-balance text-lg text-bone"
        >
          Stop waiting for motivation. Build the discipline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="mt-10"
        >
          <Button href="#membership" variant="primary">
            Join the Gym
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

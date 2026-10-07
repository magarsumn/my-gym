import { motion } from "framer-motion";
import { Check } from "lucide-react";
import clsx from "clsx";
import { membershipPlans } from "../data/gym";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";

export function Membership() {
  return (
    <section id="membership" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Membership" title="Choose your path forward." />
          <p className="max-w-xs text-balance text-bone/70 lg:text-right">
            No lock-in contracts. Upgrade, downgrade, or pause whenever life asks you to.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 border-t border-white/10 lg:grid-cols-3 lg:divide-x lg:divide-white/10">
          {membershipPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className={clsx(
                "flex flex-col border-b border-white/10 px-8 py-10 lg:border-b-0 lg:px-10 lg:py-14",
                plan.highlighted && "bg-white/[0.03]"
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold tracking-[0.25em] text-bone/70 uppercase">
                  {plan.name}
                </h3>
                {plan.highlighted && (
                  <span className="text-[11px] font-semibold tracking-[0.15em] text-accent uppercase">
                    Most popular
                  </span>
                )}
              </div>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-semibold tabular-nums text-off-white">
                  ${plan.price}
                </span>
                <span className="text-sm text-bone/60">/ month</span>
              </div>

              <ul className="mt-8 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-bone/90">
                    <Check size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                variant={plan.highlighted ? "primary" : "secondary"}
                className="mt-10 w-full justify-center"
              >
                Start Your Journey
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

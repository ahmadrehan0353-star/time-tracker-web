"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Reveal from "@/components/landing/Reveal";
import TiltCard from "@/components/landing/TiltCard";
import RippleLink from "@/components/landing/RippleLink";
import { pricingPlans } from "@/lib/site";

export default function Pricing() {
  return (
    <section className="bg-white pb-16 pt-4 sm:pb-20">
      <div className="container-xl sm:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08} className={plan.popular ? "lg:-mt-3" : ""}>
              <TiltCard
                className={`relative flex h-full flex-col p-7 ${
                  plan.popular
                    ? "rounded-2xl border-2 border-primary bg-primary-50 shadow-[var(--shadow-card-hover)]"
                    : "card-surface card-surface-hover rounded-2xl"
                }`}
              >
                {plan.popular && (
                  <motion.span
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-white"
                  >
                    Most popular
                  </motion.span>
                )}
                <h3 className="text-lg font-bold text-ink">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted">{plan.description}</p>
                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold text-ink">{plan.price}</span>
                  <span className="text-sm text-subtle">{plan.period}</span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-secondary">
                      <Check className="mt-0.5 size-4 flex-shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-8">
                  <RippleLink
                    href="/contact"
                    className={`w-full text-center ${plan.popular ? "btn-primary" : "btn-secondary"}`}
                  >
                    {plan.price === "Custom" ? "Contact sales" : "Get started"}
                  </RippleLink>
                </motion.div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-10 max-w-lg text-center">
          <p className="text-xs leading-relaxed text-subtle">
            Pricing shown is based on typical market rates for comparable
            time-tracking and activity-monitoring tools, not finalized GenzBPO
            pricing. Talk to sales for a quote tailored to your team.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

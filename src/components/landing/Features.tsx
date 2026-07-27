"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardList, Radio, Camera, AppWindow, UserCheck, Users } from "lucide-react";
import Reveal from "@/components/landing/Reveal";
import { features } from "@/lib/site";

const icons = [ClipboardList, Radio, Camera, AppWindow, UserCheck, Users];

export default function Features({ viewAllHref }: { viewAllHref?: string }) {
  return (
    <section id="features" className="bg-white py-20 sm:py-24">
      <div className="container-xl sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <span className="log-tag">capabilities</span>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">
              Built for practical workforce visibility
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
              Time Tracker focuses on the daily evidence teams actually use -
              not vanity metrics.
            </p>
            {viewAllHref && (
              <Link
                href={viewAllHref}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                See how it works in detail
                <ArrowRight className="size-4" />
              </Link>
            )}
          </Reveal>

          <div className="divide-y divide-border border-y border-border">
            {features.map((feature, index) => {
              const Icon = icons[index];
              return (
                <Reveal key={feature.title} delay={index * 0.05}>
                  <motion.div
                    whileHover={{ x: 6, backgroundColor: "rgba(67,56,202,0.03)" }}
                    transition={{ duration: 0.25 }}
                    className="group flex items-start gap-5 rounded-lg px-3 py-6 -mx-3"
                  >
                    <span className="mono-index pt-1">{String(index + 1).padStart(2, "0")}</span>
                    <motion.div whileHover={{ scale: 1.15, rotate: -6 }} transition={{ duration: 0.25 }}>
                      <Icon
                        className="mt-0.5 size-5 flex-shrink-0 text-primary/70 transition-colors group-hover:text-primary"
                        strokeWidth={1.8}
                      />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-ink">{feature.title}</h3>
                      <p className="mt-1.5 text-sm leading-6 text-muted">{feature.description}</p>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

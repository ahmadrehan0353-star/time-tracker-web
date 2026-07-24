"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";
import AppPreview from "@/components/landing/AppPreview";
import AnimatedCounter from "@/components/landing/AnimatedCounter";
import { site, heroStats } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(67,56,202,0.12),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(5,150,105,0.08),transparent_40%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container-xl grid items-center gap-12 py-16 sm:px-8 sm:py-20 md:grid-cols-[0.9fr_1.1fr] lg:py-24">
        <div className="text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm"
          >
            <Sparkles className="size-3.5" />A {site.ownerName} product
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto max-w-4xl text-4xl font-bold tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl md:mx-0"
          >
            {site.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg md:mx-0"
          >
            {site.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start"
          >
            <a href={site.downloadUrl} className="btn-primary">
              Download for Windows
            </a>
            <a href="#how-it-works" className="btn-secondary">
              See how it works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-semibold text-muted md:justify-start"
          >
            {site.facts.map((fact) => (
              <span
                key={fact}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 shadow-sm"
              >
                <ShieldCheck className="size-3.5 text-accent" />
                {fact}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-8 md:mx-0"
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-ink sm:text-3xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                </p>
                <p className="mt-1 text-xs leading-tight text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <AppPreview />
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/landing/Reveal";
import type { ReactNode } from "react";

export default function PageHeader({
  eyebrow,
  title,
  description,
  visual,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  visual?: ReactNode;
}) {
  const dotGrid = (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(11,18,32,0.07) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        maskImage: visual
          ? "radial-gradient(ellipse 60% 100% at 20% 50%, black 20%, transparent 75%)"
          : "radial-gradient(ellipse 65% 70% at 50% 20%, black 25%, transparent 75%)",
        WebkitMaskImage: visual
          ? "radial-gradient(ellipse 60% 100% at 20% 50%, black 20%, transparent 75%)"
          : "radial-gradient(ellipse 65% 70% at 50% 20%, black 25%, transparent 75%)",
      }}
    />
  );

  if (visual) {
    return (
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        {dotGrid}
        <div className="container-xl relative grid items-center gap-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <span className="log-tag">{eyebrow}</span>
            <h1 className="mt-4 max-w-xl text-4xl font-bold tracking-[-0.035em] text-ink sm:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="mt-5 max-w-lg text-base leading-7 text-muted sm:text-lg">
                {description}
              </p>
            )}
          </Reveal>
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            {visual}
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      {dotGrid}
      <div className="container-xl relative text-center sm:px-8">
        <Reveal>
          <span className="log-tag">{eyebrow}</span>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-[-0.035em] text-ink sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

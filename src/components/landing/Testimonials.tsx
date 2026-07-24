"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Reveal from "@/components/landing/Reveal";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  };

  const t = testimonials[index];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-xl sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label">Testimonials</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            What teams say
          </h2>
          <p className="mt-3 text-xs text-subtle">
            Sample testimonials shown until real customer reviews are published.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-12 max-w-2xl">
          <div className="card-surface min-h-[220px] px-8 py-10 sm:px-14">
            <Quote className="size-8 text-primary/30" />
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 32 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <p className="mt-4 text-lg leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-6 font-bold text-ink">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition hover:border-primary/30 hover:text-primary"
            >
              <ChevronLeft className="size-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-primary" : "w-1.5 bg-slate-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition hover:border-primary/30 hover:text-primary"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

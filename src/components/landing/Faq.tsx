"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import Reveal from "@/components/landing/Reveal";
import { faqs } from "@/lib/site";

export default function Faq({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  const items = compact ? faqs.slice(0, 3) : faqs;

  return (
    <section className={`bg-slate-50 ${compact ? "py-16 sm:py-20" : "py-20 sm:py-24"}`}>
      <div className="container-xl max-w-4xl sm:px-8">
        {!compact && (
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="section-label">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Common questions
            </h2>
          </Reveal>
        )}

        <div className="mt-12 space-y-3">
          {items.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.question} delay={i * 0.05}>
                <div className="card-surface overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-ink">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                    >
                      <Plus className="size-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        {compact && (
          <Reveal delay={0.2} className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              See all questions
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}

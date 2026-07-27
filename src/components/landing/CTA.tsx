"use client";

import { motion } from "framer-motion";
import SalesDialog from "@/components/landing/SalesDialog";
import RippleLink from "@/components/landing/RippleLink";
import Reveal from "@/components/landing/Reveal";

export default function CTA() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8">
      <Reveal className="container-xl">
        <div className="relative mx-auto overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary-dark to-primary-light px-6 py-14 text-center text-white shadow-primary-lg sm:px-12">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
          />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
              Ready for focused tracking?
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              Start using Time Tracker with your team today.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              Install the Windows desktop app, start a session, and turn daily work
              into clear logs, screenshots, activity data, and reports.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <RippleLink
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-primary"
                >
                  Get started
                </RippleLink>
              </motion.div>
              <SalesDialog variant="dark" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

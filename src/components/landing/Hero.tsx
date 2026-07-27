"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import RippleLink from "@/components/landing/RippleLink";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(11,18,32,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 80%)",
        }}
      />

      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-primary/[0.07] blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -14, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute -right-10 top-48 h-64 w-64 rounded-full bg-accent/[0.07] blur-3xl"
      />

      <div className="container-xl relative py-20 sm:px-8 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="log-tag">
              {site.ownerName}/{site.productName.toLowerCase().replace(" ", "-")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-[-0.045em] text-ink sm:text-6xl lg:text-7xl"
          >
            Track time the way
            <br />
            your team{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary via-primary-light to-primary bg-[length:200%_auto] bg-clip-text text-transparent [animation:shimmer_4s_linear_infinite]">
                actually works
              </span>
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-7 max-w-xl text-base leading-7 text-muted sm:text-lg"
          >
            {site.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <RippleLink href="/contact" className="btn-primary">
                Get started
                <ArrowRight className="size-4" />
              </RippleLink>
            </motion.div>
            <motion.a
              href="#preview"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-secondary"
            >
              See the dashboard
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 font-mono text-xs text-subtle"
          >
            {site.facts.join("  ·  ")}
          </motion.p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  );
}

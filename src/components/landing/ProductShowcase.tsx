"use client";

import { motion } from "framer-motion";
import AppPreview from "@/components/landing/AppPreview";
import Reveal from "@/components/landing/Reveal";

export default function ProductShowcase() {
  return (
    <section className="ink-section relative overflow-hidden py-16 sm:py-20">
      <motion.div
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]"
      />
      <div className="container-xl relative sm:px-8">
        <Reveal className="mb-10 text-center">
          <span className="log-tag-light">live product view</span>
        </Reveal>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <AppPreview />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

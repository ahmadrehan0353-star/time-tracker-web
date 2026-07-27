"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const rows = [
  { time: "14:32:01", event: "work_log.sync" },
  { time: "14:32:06", event: "screenshot.upload" },
  { time: "14:32:12", event: "activity.report" },
  { time: "14:32:18", event: "session.heartbeat" },
  { time: "14:32:24", event: "work_log.sync" },
];

export default function SecurityVisual() {
  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-ink p-5 shadow-primary-lg">
      <motion.div
        animate={{ y: ["-10%", "110%"] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-accent/25 to-transparent"
      />
      <div className="mb-4 flex items-center gap-2">
        <span className="size-2 rounded-full bg-error/70" />
        <span className="size-2 rounded-full bg-warning/70" />
        <span className="size-2 rounded-full bg-success/70" />
        <span className="ml-2 font-mono text-[11px] text-white/40">transmission log</span>
      </div>
      <div className="space-y-2.5">
        {rows.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
            className="flex items-center gap-2.5 font-mono text-[11px]"
          >
            <span className="text-white/35">{row.time}</span>
            <span className="text-white/75">{row.event}</span>
            <span className="ml-auto flex items-center gap-1 text-accent">
              <Lock className="size-3" strokeWidth={2} />
              encrypted
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

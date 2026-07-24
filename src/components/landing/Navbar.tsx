"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Clock } from "lucide-react";
import SalesDialog from "@/components/landing/SalesDialog";
import { site } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-white/85 backdrop-blur-xl"
          : "border-b border-transparent bg-white/60 backdrop-blur-md"
      }`}
    >
      <div className="container-xl flex h-16 items-center justify-between sm:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="Time Tracker home">
          <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-primary">
            <Clock className="size-5" strokeWidth={2.25} />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-tight text-ink">
              {site.productName}
            </span>
            <span className="block text-xs text-muted">by {site.ownerName}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
          {site.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <SalesDialog />
          <a href={site.downloadUrl} className="btn-primary h-11 px-5">
            Get Demo
          </a>
        </div>

        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink sm:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-white sm:hidden"
          >
            <div className="container-xl flex flex-col gap-1 py-4">
              {site.navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-muted hover:bg-primary-50 hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2 px-3">
                <SalesDialog className="w-full" />
                <a href={site.downloadUrl} className="btn-primary w-full">
                  Get Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

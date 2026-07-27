"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import SalesDialog from "@/components/landing/SalesDialog";
import RippleLink from "@/components/landing/RippleLink";
import { site } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

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
        <Link href="/" className="flex items-center gap-2.5" aria-label="Time Tracker home">
          <Image src="/logo-icon.png" alt="" width={40} height={40} className="size-10" priority />
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-tight text-ink">
              {site.productName}
            </span>
            <span className="block text-xs text-muted">by {site.ownerName}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
          {site.navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-colors hover:text-primary ${
                  active ? "text-primary" : ""
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-primary"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <SalesDialog />
          <RippleLink href="/contact" className="btn-primary h-11 px-5">
            Get started
          </RippleLink>
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
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-3 text-sm font-medium hover:bg-primary-50 hover:text-primary ${
                    pathname === item.href ? "bg-primary-50 text-primary" : "text-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2 px-3">
                <SalesDialog className="w-full" />
                <RippleLink href="/contact" className="btn-primary w-full">
                  Get started
                </RippleLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

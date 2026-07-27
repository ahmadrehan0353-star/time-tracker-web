import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHeader from "@/components/landing/PageHeader";
import Faq from "@/components/landing/Faq";
import CTA from "@/components/landing/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `FAQ | ${site.productName}`,
  description: "Answers to common questions about how Time Tracker works, security, and platform support.",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PageHeader eyebrow="FAQ" title="Common questions" />
        <Faq />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

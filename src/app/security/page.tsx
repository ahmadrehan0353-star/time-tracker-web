import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHeader from "@/components/landing/PageHeader";
import Security from "@/components/landing/Security";
import SecurityVisual from "@/components/landing/SecurityVisual";
import CTA from "@/components/landing/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Security | ${site.productName}`,
  description:
    "How Time Tracker protects work data: encryption in transit, expiring screenshot links, rate limiting, and admin-controlled access.",
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Security & privacy"
          title="Workforce data, handled carefully"
          description="Time tracking involves sensitive information. Here's specifically what's built in to protect it."
          visual={<SecurityVisual />}
        />
        <Security />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

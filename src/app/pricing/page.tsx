import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHeader from "@/components/landing/PageHeader";
import Pricing from "@/components/landing/Pricing";
import RoiCalculator from "@/components/landing/RoiCalculator";
import Faq from "@/components/landing/Faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Pricing | ${site.productName}`,
  description: "Simple, per-user pricing for Time Tracker, plus an ROI calculator for your team.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Pricing"
          title="Straightforward, per-user pricing"
          description="Pick the plan that fits your team. Every plan includes the core tracking features - higher tiers add depth and support."
        />
        <Pricing />
        <RoiCalculator />
        <Faq compact />
      </main>
      <Footer />
    </div>
  );
}

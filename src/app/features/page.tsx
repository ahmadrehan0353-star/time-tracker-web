import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHeader from "@/components/landing/PageHeader";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import ProductShowcase from "@/components/landing/ProductShowcase";
import CTA from "@/components/landing/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Features | ${site.productName}`,
  description:
    "See everything Time Tracker captures: work logs, screenshots, activity levels, app usage, idle detection, and admin visibility.",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Product tour"
          title="Everything your team needs to see"
          description="Explore the dashboard the same way your admins will - switch between the live tabs below."
        />
        <ProductShowcase />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

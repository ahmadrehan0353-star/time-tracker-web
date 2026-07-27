import CTA from "@/components/landing/CTA";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Navbar from "@/components/landing/Navbar";
import ProductShowcase from "@/components/landing/ProductShowcase";
import TrustedBy from "@/components/landing/TrustedBy";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <TrustedBy />
        <Features viewAllHref="/features" />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

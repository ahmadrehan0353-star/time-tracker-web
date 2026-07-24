import CTA from "@/components/landing/CTA";
import Faq from "@/components/landing/Faq";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Integrations from "@/components/landing/Integrations";
import Navbar from "@/components/landing/Navbar";
import RoiCalculator from "@/components/landing/RoiCalculator";
import Security from "@/components/landing/Security";
import Testimonials from "@/components/landing/Testimonials";
import TrustedBy from "@/components/landing/TrustedBy";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <Security />
        <Integrations />
        <Testimonials />
        <RoiCalculator />
        <Faq />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHeader from "@/components/landing/PageHeader";
import ContactPageForm from "@/components/landing/ContactPageForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact | ${site.productName}`,
  description: "Get in touch with the Time Tracker team about your workforce tracking needs.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Contact"
          title="Let's talk about your team"
          description="Tell us a bit about what you're looking for and we'll get back to you."
        />
        <section className="bg-slate-50 pb-20 pt-4 sm:pb-24">
          <div className="container-xl max-w-xl sm:px-8">
            <ContactPageForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

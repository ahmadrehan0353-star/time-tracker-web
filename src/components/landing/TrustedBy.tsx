import Reveal from "@/components/landing/Reveal";
import { trustedByIndustries } from "@/lib/site";

export default function TrustedBy() {
  return (
    <section className="border-y border-border bg-white py-10">
      <div className="container-xl sm:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-subtle">
            Built for teams like yours across
          </p>
        </Reveal>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {trustedByIndustries.map((industry, i) => (
            <Reveal key={industry} delay={i * 0.05}>
              <span className="inline-flex items-center rounded-full border border-border bg-slate-50 px-4 py-2 text-xs font-semibold text-secondary">
                {industry}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

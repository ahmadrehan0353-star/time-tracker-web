import Reveal from "@/components/landing/Reveal";
import { trustedByIndustries } from "@/lib/site";

export default function TrustedBy() {
  return (
    <section className="border-y border-border bg-white py-8">
      <div className="container-xl flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
            Built for teams across
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-center font-mono text-xs text-secondary sm:text-right">
            {trustedByIndustries.join("  /  ")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

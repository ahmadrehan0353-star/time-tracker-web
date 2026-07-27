import { Download, PlayCircle, LineChart } from "lucide-react";
import Reveal from "@/components/landing/Reveal";
import { steps } from "@/lib/site";

const icons = [Download, PlayCircle, LineChart];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-20 sm:py-24">
      <div className="container-xl sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="section-label">How it works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            From install to insight in three steps
          </h2>
        </Reveal>

        <div className="relative mt-12 grid gap-5 md:grid-cols-3">
          <div className="absolute left-8 right-8 top-9 hidden h-px bg-primary/20 md:block" />
          {steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={step.title} delay={index * 0.1}>
                <article className="card-surface relative p-6">
                  <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-primary text-white shadow-primary">
                    <Icon className="size-7" strokeWidth={1.8} />
                  </div>
                  <span className="absolute right-6 top-6 font-mono text-2xl font-medium text-slate-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-bold text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

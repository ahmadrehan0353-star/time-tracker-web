import Reveal from "@/components/landing/Reveal";
import { integrations } from "@/lib/site";

export default function Integrations() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="container-xl sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label">Integrations</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Fits into the tools your team already uses
          </h2>
          <p className="mt-4 text-muted">
            Time Tracker sits alongside your existing stack instead of asking
            teams to change how they communicate and plan work.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {integrations.map((name, i) => (
            <Reveal key={name} delay={(i % 4) * 0.06}>
              <div className="card-surface card-surface-hover flex h-24 flex-col items-center justify-center gap-2 text-center">
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                  {name.charAt(0)}
                </div>
                <p className="text-xs font-semibold text-ink">{name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

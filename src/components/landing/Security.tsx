import {
  Lock,
  Cloud,
  FileCheck,
  Sliders,
  KeyRound,
  ShieldCheck,
} from "lucide-react";
import Reveal from "@/components/landing/Reveal";
import { securityPoints } from "@/lib/site";

const icons = [Lock, Cloud, FileCheck, Sliders, KeyRound, ShieldCheck];

export default function Security() {
  return (
    <section id="security" className="bg-white py-20 sm:py-24">
      <div className="container-xl sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label">Security & privacy</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Enterprise-grade security, by default
          </h2>
          <p className="mt-4 text-muted">
            Workforce data is sensitive. Time Tracker is built with security and
            privacy controls baked into every layer, not bolted on after.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {securityPoints.map((point, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={point.title} delay={(index % 3) * 0.08}>
                <div className="card-surface h-full p-6">
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-accent-50 text-accent">
                    <Icon className="size-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-bold text-ink">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{point.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Lock, Radio, ImageOff, Gauge, Eye, KeyRound } from "lucide-react";
import Reveal from "@/components/landing/Reveal";
import TiltCard from "@/components/landing/TiltCard";
import { securityPoints } from "@/lib/site";

const icons = [Lock, Radio, ImageOff, Gauge, Eye, KeyRound];

export default function Security() {
  return (
    <section className="bg-white pb-20 pt-4 sm:pb-24">
      <div className="container-xl sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {securityPoints.map((point, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={point.title} delay={(index % 3) * 0.08}>
                <TiltCard className="card-surface card-surface-hover h-full p-6">
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-accent-50 text-accent">
                    <Icon className="size-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-bold text-ink">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{point.description}</p>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

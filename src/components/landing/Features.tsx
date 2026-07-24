import { Clock, Camera, MousePointerClick, AppWindow, PauseCircle, Eye } from "lucide-react";
import Reveal from "@/components/landing/Reveal";
import { features } from "@/lib/site";

const icons = [Clock, Camera, MousePointerClick, AppWindow, PauseCircle, Eye];

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 sm:py-24">
      <div className="container-xl sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label">Features</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Built for practical workforce visibility
          </h2>
          <p className="mt-4 text-muted">
            Time Tracker focuses on the daily evidence teams actually use:
            time, screenshots, activity, apps, and admin visibility.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={feature.title} delay={(index % 3) * 0.08}>
                <article className="card-surface card-surface-hover group h-full p-6">
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="size-6" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-lg font-bold text-ink">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{feature.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

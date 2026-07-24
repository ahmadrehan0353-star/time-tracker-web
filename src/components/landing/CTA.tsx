import SalesDialog from "@/components/landing/SalesDialog";
import Reveal from "@/components/landing/Reveal";
import { site } from "@/lib/site";

export default function CTA() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8">
      <Reveal className="container-xl">
        <div className="mx-auto overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary-dark to-primary-light px-6 py-12 text-center text-white shadow-primary-lg sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
            Ready for focused tracking?
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Start using Time Tracker with your team today.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Install the Windows desktop app, start a session, and turn daily work
            into clear logs, screenshots, activity data, and reports.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={site.downloadUrl}
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-primary transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Download Time Tracker
            </a>
            <SalesDialog variant="dark" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

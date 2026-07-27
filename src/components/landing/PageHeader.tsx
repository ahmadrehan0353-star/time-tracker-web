import Reveal from "@/components/landing/Reveal";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(11,18,32,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 65% 70% at 50% 20%, black 25%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 70% at 50% 20%, black 25%, transparent 75%)",
        }}
      />
      <div className="container-xl relative text-center sm:px-8">
        <Reveal>
          <span className="log-tag">{eyebrow}</span>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-[-0.035em] text-ink sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

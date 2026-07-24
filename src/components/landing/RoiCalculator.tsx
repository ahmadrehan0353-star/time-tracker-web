"use client";

import { useMemo, useState } from "react";
import { Calculator, TrendingUp } from "lucide-react";
import Reveal from "@/components/landing/Reveal";
import { site } from "@/lib/site";

export default function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(18);
  const [gainPercent, setGainPercent] = useState(8);

  const { weeklySavings, monthlySavings, annualSavings } = useMemo(() => {
    const hoursPerWeek = 40;
    const weekly = teamSize * hourlyRate * hoursPerWeek * (gainPercent / 100);
    return {
      weeklySavings: weekly,
      monthlySavings: weekly * 4.33,
      annualSavings: weekly * 52,
    };
  }, [teamSize, hourlyRate, gainPercent]);

  const formatCurrency = (value: number) =>
    value.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <section id="roi" className="bg-white py-20 sm:py-24">
      <div className="container-xl sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label">ROI calculator</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Estimate what visibility is worth to your team
          </h2>
          <p className="mt-4 text-muted">
            A rough estimate of the value unlocked by reducing idle time and
            improving focus, based on inputs you control.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 grid max-w-4xl gap-0 overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)] lg:grid-cols-2">
            <div className="space-y-7 bg-white p-8 sm:p-10">
              <div className="flex items-center gap-2 text-primary">
                <Calculator className="size-5" />
                <p className="text-sm font-bold uppercase tracking-wide">Your team</p>
              </div>

              <SliderField
                label="Team size"
                value={teamSize}
                min={1}
                max={200}
                step={1}
                suffix=" employees"
                onChange={setTeamSize}
              />
              <SliderField
                label="Average hourly rate"
                value={hourlyRate}
                min={5}
                max={100}
                step={1}
                prefix="$"
                onChange={setHourlyRate}
              />
              <SliderField
                label="Estimated productivity gain"
                value={gainPercent}
                min={2}
                max={25}
                step={1}
                suffix="%"
                onChange={setGainPercent}
              />

              <p className="text-xs leading-relaxed text-subtle">
                This is a simplified estimate for illustration, assuming a 40-hour
                work week per employee. Actual results depend on your team and workflows.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-6 bg-gradient-to-br from-primary via-primary-dark to-primary-light p-8 text-white sm:p-10">
              <div className="flex items-center gap-2 text-white/70">
                <TrendingUp className="size-5" />
                <p className="text-sm font-bold uppercase tracking-wide">Estimated impact</p>
              </div>

              <div>
                <p className="text-xs text-white/70">Per week</p>
                <p className="text-2xl font-bold">{formatCurrency(weeklySavings)}</p>
              </div>
              <div>
                <p className="text-xs text-white/70">Per month</p>
                <p className="text-2xl font-bold">{formatCurrency(monthlySavings)}</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs text-white/70">Per year</p>
                <p className="text-3xl font-bold">{formatCurrency(annualSavings)}</p>
              </div>

              <a href={site.downloadUrl} className="btn-secondary bg-white text-primary hover:bg-slate-100">
                Start capturing this value
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SliderField({
  label,
  value,
  min,
  max,
  step,
  prefix = "",
  suffix = "",
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-ink">{label}</span>
        <span className="font-bold text-primary">
          {prefix}
          {value}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-100 accent-primary"
      />
    </div>
  );
}

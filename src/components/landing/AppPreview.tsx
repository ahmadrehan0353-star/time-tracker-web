"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  ClipboardList,
  BarChart3,
  ImageIcon,
  Radio,
  Users,
  UserCheck,
  UserX,
  Wifi,
} from "lucide-react";

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "worklogs", label: "Work Logs", icon: ClipboardList },
  { id: "screenshots", label: "Screenshots", icon: ImageIcon },
  { id: "live", label: "Live View", icon: Radio },
] as const;

type TabId = (typeof tabs)[number]["id"];

const sidebarItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Work Logs", icon: ClipboardList },
  { label: "App Usage", icon: BarChart3 },
  { label: "Screenshots", icon: ImageIcon },
];

const teamOverview = [
  { label: "Total Employees", value: "18", icon: Users },
  { label: "Online Now", value: "8", icon: Wifi },
  { label: "Working Today", value: "15", icon: UserCheck },
  { label: "Absent Today", value: "3", icon: UserX },
];

const workLogs = [
  { name: "A. Reyes", et: "05:32 PM - 05:37 PM", pkt: "02:32 AM - 02:37 AM", dur: "5m", keys: 232, clicks: 72, score: 87 },
  { name: "S. Malik", et: "05:30 PM - 05:35 PM", pkt: "02:30 AM - 02:35 AM", dur: "5m", keys: 98, clicks: 30, score: 82 },
  { name: "J. Okafor", et: "05:30 PM - 05:31 PM", pkt: "02:30 AM - 02:31 AM", dur: "35s", keys: 9, clicks: 9, score: 70 },
  { name: "P. Nandy", et: "05:28 PM - 05:33 PM", pkt: "02:28 AM - 02:33 AM", dur: "5m", keys: 2, clicks: 41, score: 42 },
];

const scoreColor = (score: number) =>
  score >= 75
    ? "bg-accent-50 text-accent"
    : score >= 55
    ? "bg-warning/15 text-[#92620A]"
    : "bg-error/10 text-error";

export default function AppPreview() {
  const [activeTab, setActiveTab] = useState<TabId>("dashboard");

  return (
    <div id="preview" className="relative mx-auto w-full max-w-2xl">
      <div className="absolute -inset-6 rounded-[2rem] bg-primary/15 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[1.75rem] border border-primary/10 bg-white shadow-2xl"
      >
        <div className="flex items-center gap-2 border-b border-border bg-slate-50 px-4 py-3">
          <span className="size-3 rounded-full bg-error" />
          <span className="size-3 rounded-full bg-warning" />
          <span className="size-3 rounded-full bg-success" />
          <div className="ml-3 flex flex-1 items-center gap-2 rounded-full bg-white px-3 py-1">
            <Image src="/logo-icon.png" alt="" width={16} height={16} className="size-4" />
            <span className="text-xs text-muted">Time Tracker desktop</span>
          </div>
        </div>

        <div className="flex items-center gap-1 border-b border-border bg-white px-3 py-2 sm:hidden">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-1 items-center justify-center gap-1 rounded-lg px-1.5 py-2 text-[10px] font-semibold transition ${
                  activeTab === tab.id ? "bg-primary-50 text-primary" : "text-muted"
                }`}
              >
                <Icon className="size-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="grid min-h-[440px] grid-cols-[56px_1fr] bg-slate-50 sm:grid-cols-[160px_1fr]">
          <aside className="flex flex-col bg-gradient-to-b from-primary via-primary to-primary-dark p-3 text-white sm:p-4">
            <div className="mb-6 hidden items-center gap-2 sm:flex">
              <div className="flex size-8 items-center justify-center rounded-lg bg-white/20">
                <Image src="/logo-icon.png" alt="" width={16} height={16} className="size-4" />
              </div>
              <div>
                <p className="text-xs font-bold">Time Tracker</p>
                <p className="text-[10px] text-white/65">by GenzBPO</p>
              </div>
            </div>
            <div className="space-y-1.5">
              {sidebarItems.map((item, index) => {
                const Icon = item.icon;
                const isActive =
                  (index === 0 && activeTab === "dashboard") ||
                  (index === 1 && activeTab === "worklogs") ||
                  (index === 3 && activeTab === "screenshots");
                return (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2.5 text-[11px] font-medium sm:px-3 ${
                      isActive ? "bg-white/20 shadow-lg" : "text-white/70"
                    }`}
                  >
                    <Icon className="size-3.5 flex-shrink-0" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </aside>

          <main className="space-y-4 p-4 sm:p-6">
            <div className="mb-1 hidden items-center gap-1 rounded-full bg-slate-100 p-1 sm:flex">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-1 items-center justify-center gap-1.5 rounded-full px-2 py-1.5 text-[11px] font-semibold transition ${
                      activeTab === tab.id
                        ? "bg-white text-primary shadow-sm"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    <Icon className="size-3.5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              {activeTab === "dashboard" && (
                <motion.div
                  key="dashboard"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                    {teamOverview.map((card) => {
                      const Icon = card.icon;
                      return (
                        <div key={card.label} className="rounded-xl bg-white p-3 shadow-sm shadow-slate-200/80">
                          <Icon className="size-3.5 text-primary/60" />
                          <p className="mt-1.5 text-lg font-bold text-ink">{card.value}</p>
                          <p className="text-[9px] leading-tight text-muted">{card.label}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="rounded-2xl bg-gradient-to-r from-primary via-primary-dark to-primary-light p-4 text-center text-white shadow-primary-lg">
                    <p className="text-xs text-white/70">Wednesday, June 17</p>
                    <p className="mt-1 font-mono text-2xl font-bold">05:36:03 PM</p>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-[11px] text-white/80">
                      <span className="relative flex size-1.5">
                        <span className="absolute inline-flex size-full animate-[pulse-ring_2s_cubic-bezier(0.4,0,0.6,1)_infinite] rounded-full bg-success" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-success" />
                      </span>
                      Live
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                    {[
                      { label: "Today", value: "5.1h" },
                      { label: "This week", value: "17.3h" },
                      { label: "This month", value: "68.8h" },
                      { label: "Productivity", value: "81%" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl bg-white p-3 shadow-sm shadow-slate-200/80">
                        <p className="text-base font-bold text-ink">{s.value}</p>
                        <p className="text-[9px] text-muted">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm shadow-slate-200/80">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-xs font-bold text-ink">Productivity breakdown</p>
                      <p className="text-xs font-bold text-primary">82%</p>
                    </div>
                    <div className="flex h-2.5 overflow-hidden rounded-full bg-slate-100">
                      <div className="bg-accent" style={{ width: "82%" }} />
                      <div className="bg-error" style={{ width: "18%" }} />
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "worklogs" && (
                <motion.div
                  key="worklogs"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  <p className="text-xs font-bold text-ink">Work logs · dual timezone</p>
                  <div className="overflow-hidden rounded-xl bg-white shadow-sm shadow-slate-200/80">
                    {workLogs.map((log, i) => (
                      <div
                        key={log.name}
                        className={`flex items-center gap-2 px-3 py-2.5 text-[10px] ${
                          i !== workLogs.length - 1 ? "border-b border-border" : ""
                        }`}
                      >
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-semibold text-ink">{log.name}</p>
                          <p className="truncate text-muted">
                            {log.et} <span className="text-subtle">ET</span>
                          </p>
                          <p className="truncate text-subtle">
                            {log.pkt} <span className="text-subtle">PKT</span>
                          </p>
                        </div>
                        <div className="flex-shrink-0 text-right text-muted">
                          <p>{log.keys} keys</p>
                          <p>{log.clicks} clicks</p>
                        </div>
                        <span
                          className={`flex-shrink-0 rounded-full px-2 py-0.5 font-bold ${scoreColor(log.score)}`}
                        >
                          {log.score}%
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "screenshots" && (
                <motion.div
                  key="screenshots"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  <p className="text-xs font-bold text-ink">Screenshots · organized per work log</p>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {["from-primary/70 to-primary-light/40", "from-accent/60 to-accent-50", "from-slate-300 to-slate-100", "from-primary-light/60 to-primary/30", "from-accent-50 to-accent/50", "from-slate-200 to-slate-50", "from-primary/50 to-primary-50", "from-slate-300 to-slate-100"].map(
                      (grad, i) => (
                        <div key={i} className="overflow-hidden rounded-lg bg-white shadow-sm shadow-slate-200/80">
                          <div className={`aspect-video bg-gradient-to-br ${grad}`} />
                          <p className="px-1.5 py-1 text-[8px] text-muted">05:{35 - i * 2} PM</p>
                        </div>
                      )
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === "live" && (
                <motion.div
                  key="live"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-ink">Live View — J. Okafor</p>
                    <span className="inline-flex items-center gap-1 rounded-full bg-error/10 px-2 py-0.5 text-[9px] font-bold text-error">
                      <span className="relative flex size-1.5">
                        <span className="absolute inline-flex size-full animate-[pulse-ring_2s_cubic-bezier(0.4,0,0.6,1)_infinite] rounded-full bg-error" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-error" />
                      </span>
                      Live
                    </span>
                  </div>
                  <div className="overflow-hidden rounded-xl bg-ink shadow-sm">
                    <div className="grid aspect-video grid-cols-2 gap-0.5 p-2">
                      <div className="space-y-1">
                        <div className="h-2 w-2/3 rounded bg-white/20" />
                        <div className="h-10 rounded bg-white/10" />
                        <div className="h-3 w-1/2 rounded bg-white/15" />
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 w-1/2 rounded bg-white/20" />
                        <div className="h-16 rounded bg-white/10" />
                      </div>
                    </div>
                  </div>
                  <p className="text-[10px] text-subtle">
                    Screen content shown is illustrative, not a real captured session.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </motion.div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Activity,
  BarChart3,
  Bell,
  Users,
  Clock,
  ImageIcon,
  TrendingUp,
} from "lucide-react";

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "activity", label: "Live Activity", icon: Activity },
  { id: "reports", label: "Reports", icon: BarChart3 },
] as const;

type TabId = (typeof tabs)[number]["id"];

const sidebarItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Team", icon: Users },
  { label: "Work Logs", icon: Clock },
  { label: "Reports", icon: BarChart3 },
];

const statCards = [
  { label: "Active Employees", value: "24 / 28", note: "86% online now" },
  { label: "Productivity Score", value: "84%", note: "+6% this week" },
  { label: "Attendance", value: "97%", note: "On-time this month" },
];

const appRows = [
  { name: "VS Code", time: "2h 10m", width: "82%" },
  { name: "Chrome", time: "1h 35m", width: "64%" },
  { name: "Slack", time: "38m", width: "36%" },
];

const teamPerformance = [
  { name: "Amara O.", role: "Support Lead", score: 92 },
  { name: "Diego R.", role: "Engineer", score: 88 },
  { name: "Priya N.", role: "Analyst", score: 79 },
];

const liveActivity = [
  { name: "Amara O.", action: "Started a work session", time: "2m ago", live: true },
  { name: "Diego R.", action: "Screenshot captured", time: "4m ago", live: true },
  { name: "Priya N.", action: "Went idle", time: "9m ago", live: false },
  { name: "Chen W.", action: "Ended work session", time: "14m ago", live: false },
];

const weeklyBars = [62, 74, 58, 88, 70, 40, 20];

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
          <div className="ml-3 h-7 flex-1 rounded-full bg-white px-4 text-xs leading-7 text-muted">
            Time Tracker desktop
          </div>
          <Bell className="size-4 text-muted" />
        </div>

        <div className="flex items-center gap-1 border-b border-border bg-white px-3 py-2 sm:hidden">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-[11px] font-semibold transition ${
                  activeTab === tab.id ? "bg-primary-50 text-primary" : "text-muted"
                }`}
              >
                <Icon className="size-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="grid min-h-[440px] grid-cols-[56px_1fr] bg-slate-50 sm:grid-cols-[168px_1fr]">
          <aside className="flex flex-col bg-gradient-to-b from-primary via-primary to-primary-dark p-3 text-white sm:p-4">
            <div className="mb-6 hidden items-center gap-2 sm:flex">
              <Image src="/logo-icon.png" alt="" width={32} height={32} className="size-8" />
              <div>
                <p className="text-xs font-bold">Time Tracker</p>
                <p className="text-[10px] text-white/65">by GenzBPO</p>
              </div>
            </div>
            <div className="space-y-1.5">
              {sidebarItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2.5 text-[11px] font-medium sm:px-3 ${
                      index === 0 ? "bg-white/20 shadow-lg" : "text-white/70"
                    }`}
                  >
                    <Icon className="size-3.5 flex-shrink-0" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-auto hidden rounded-xl bg-white/10 p-3 sm:block">
              <p className="text-[10px] text-white/70">This week</p>
              <p className="mt-1 text-lg font-bold">31h 20m</p>
            </div>
          </aside>

          <main className="hidden space-y-4 p-4 sm:block sm:p-6">
            <div className="mb-1 hidden items-center gap-1 rounded-full bg-slate-100 p-1 sm:flex">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
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
                  <div className="rounded-2xl bg-gradient-to-r from-primary via-primary-dark to-primary-light p-4 text-white shadow-primary-lg">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs text-white/70">Tracking Active</p>
                        <p className="text-lg font-bold">2h 18m session</p>
                      </div>
                      <span className="relative flex size-3">
                        <span className="absolute inline-flex size-full animate-[pulse-ring_2s_cubic-bezier(0.4,0,0.6,1)_infinite] rounded-full bg-success" />
                        <span className="relative inline-flex size-3 rounded-full bg-success" />
                      </span>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {statCards.map((card) => (
                      <div key={card.label} className="rounded-2xl bg-white p-4 shadow-lg shadow-slate-200/80">
                        <p className="text-[10px] font-bold uppercase tracking-wide text-muted">
                          {card.label}
                        </p>
                        <p className="mt-2 text-xl font-bold text-ink">{card.value}</p>
                        <p className="text-[11px] text-accent">{card.note}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid gap-3 lg:grid-cols-[1fr_0.9fr]">
                    <div className="rounded-2xl bg-white p-4 shadow-lg shadow-slate-200/80">
                      <div className="mb-3 flex items-center justify-between">
                        <p className="text-sm font-bold text-ink">Productivity</p>
                        <p className="text-sm font-bold text-primary">84%</p>
                      </div>
                      <div className="flex h-3 overflow-hidden rounded-full bg-slate-100">
                        <div className="bg-accent" style={{ width: "68%" }} />
                        <div className="bg-slate-400" style={{ width: "22%" }} />
                        <div className="bg-error" style={{ width: "10%" }} />
                      </div>
                      <p className="mt-3 text-xs text-muted">Productive apps are leading the day.</p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-lg shadow-slate-200/80">
                      <p className="mb-3 text-sm font-bold text-ink">Top apps</p>
                      <div className="space-y-3">
                        {appRows.map((row) => (
                          <div key={row.name}>
                            <div className="mb-1 flex justify-between text-xs">
                              <span className="font-medium text-ink">{row.name}</span>
                              <span className="text-muted">{row.time}</span>
                            </div>
                            <div className="h-2 rounded-full bg-slate-100">
                              <div
                                className="h-full rounded-full bg-primary-light"
                                style={{ width: row.width }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "activity" && (
                <motion.div
                  key="activity"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <div className="rounded-2xl bg-white p-4 shadow-lg shadow-slate-200/80">
                    <p className="mb-3 text-sm font-bold text-ink">Live team activity</p>
                    <div className="space-y-3">
                      {liveActivity.map((item) => (
                        <div key={item.name} className="flex items-center gap-3">
                          <span
                            className={`size-2 flex-shrink-0 rounded-full ${
                              item.live ? "bg-success" : "bg-slate-300"
                            }`}
                          />
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-xs font-semibold text-ink">
                              {item.name}
                              <span className="ml-1.5 font-normal text-muted">{item.action}</span>
                            </p>
                          </div>
                          <span className="flex-shrink-0 text-[10px] text-muted">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-lg shadow-slate-200/80">
                    <div className="mb-3 flex items-center gap-2">
                      <ImageIcon className="size-4 text-primary" />
                      <p className="text-sm font-bold text-ink">Recent screenshots</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="aspect-video rounded-lg bg-gradient-to-br from-slate-100 to-slate-200"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "reports" && (
                <motion.div
                  key="reports"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <div className="rounded-2xl bg-white p-4 shadow-lg shadow-slate-200/80">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-sm font-bold text-ink">Weekly hours</p>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-accent">
                        <TrendingUp className="size-3.5" />
                        +12% vs last week
                      </span>
                    </div>
                    <div className="flex h-28 items-end gap-2">
                      {weeklyBars.map((h, i) => (
                        <div key={i} className="flex flex-1 flex-col items-center gap-2">
                          <div
                            className="w-full rounded-t-md bg-gradient-to-t from-primary to-primary-light"
                            style={{ height: `${h}%` }}
                          />
                          <span className="text-[9px] text-muted">
                            {["M", "T", "W", "T", "F", "S", "S"][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-lg shadow-slate-200/80">
                    <p className="mb-3 text-sm font-bold text-ink">Team performance</p>
                    <div className="space-y-3">
                      {teamPerformance.map((member) => (
                        <div key={member.name} className="flex items-center gap-3">
                          <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-50 text-[11px] font-bold text-primary">
                            {member.name.charAt(0)}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-xs font-semibold text-ink">{member.name}</p>
                            <p className="truncate text-[10px] text-muted">{member.role}</p>
                          </div>
                          <span className="flex-shrink-0 text-xs font-bold text-primary">
                            {member.score}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </main>

          {/* Simplified single-card mobile view so the preview never overflows small screens */}
          <main className="space-y-3 p-3 sm:hidden">
            <div className="rounded-2xl bg-gradient-to-r from-primary via-primary-dark to-primary-light p-3 text-white shadow-primary-lg">
              <p className="text-[10px] text-white/70">Tracking Active</p>
              <p className="text-sm font-bold">2h 18m session</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {statCards.map((card) => (
                <div key={card.label} className="rounded-xl bg-white p-2.5 shadow-lg shadow-slate-200/80">
                  <p className="text-[8px] font-bold uppercase text-muted">{card.label.split(" ")[0]}</p>
                  <p className="mt-1 text-sm font-bold text-ink">{card.value}</p>
                </div>
              ))}
            </div>
          </main>
        </div>
      </motion.div>
    </div>
  );
}

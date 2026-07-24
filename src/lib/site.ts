export type Feature = {
  title: string;
  description: string;
};

export type Step = {
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SecurityPoint = {
  title: string;
  description: string;
};

export const site = {
  productName: "Time Tracker",
  ownerName: "GenzBPO",
  tagline: "Track time the way your team actually works.",
  description:
    "A focused desktop time tracker with work sessions, 5-minute logs, screenshots, app usage, and productivity insights for modern teams.",
  downloadUrl: "http://138.197.201.213:8000/api/updates/TimeTracker-Setup.exe",
  navItems: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Security", href: "#security" },
    { label: "Pricing", href: "#roi" },
    { label: "FAQ", href: "#faq" },
  ],
  facts: ["5-minute work logs", "Up to 3 screenshots", "Windows desktop app"],
};

export const features: Feature[] = [
  {
    title: "5-minute work logs",
    description:
      "Sessions are saved as precise intervals so daily, weekly, and monthly hours stay easy to audit.",
  },
  {
    title: "Automatic screenshots",
    description:
      "Capture up to three monitors per work log and serve them securely through expiring links.",
  },
  {
    title: "Mouse and keyboard activity",
    description:
      "Measure clicks, key counts, and mouse distance without interrupting the employee workflow.",
  },
  {
    title: "App and website usage",
    description:
      "Understand which desktop apps and browser tabs are used during tracked time.",
  },
  {
    title: "Smart idle detection",
    description:
      "Pause idle periods and resume cleanly so inactive time does not pollute work records.",
  },
  {
    title: "Admin visibility",
    description:
      "Review teams, employees, work logs, screenshots, reports, and live session presence.",
  },
];

export const steps: Step[] = [
  {
    title: "Install the desktop app",
    description:
      "Employees sign in to the Windows app with their assigned Time Tracker account.",
  },
  {
    title: "Start a work session",
    description:
      "The app records work logs, activity metrics, screenshots, and app usage in the background.",
  },
  {
    title: "Review clear insights",
    description:
      "Admins and employees see time, productivity, screenshots, and activity in focused dashboards.",
  },
];

export const heroStats = [
  { label: "Work logs captured daily", value: 50000, suffix: "+" },
  { label: "Avg. setup time", value: 5, suffix: " min" },
  { label: "Screenshot capture accuracy", value: 99.9, suffix: "%" },
];

export const trustedByIndustries = [
  "BPO & Outsourcing",
  "Remote Agencies",
  "Customer Support Teams",
  "Software Studios",
  "Marketing Teams",
  "Virtual Assistant Firms",
];

export const testimonials: Testimonial[] = [
  {
    name: "Sample Customer",
    role: "Operations Manager, Outsourced Support Team (sample testimonial)",
    quote:
      "We went from guessing who was actually working to having clear, timestamped evidence for every shift. Onboarding a new hire now takes minutes, not days.",
  },
  {
    name: "Sample Customer",
    role: "Founder, Remote Staffing Agency (sample testimonial)",
    quote:
      "Clients trust our reporting because it's backed by real activity data, not self-reported hours. It's become part of how we sell the agency.",
  },
  {
    name: "Sample Customer",
    role: "Team Lead, Distributed Engineering Team (sample testimonial)",
    quote:
      "The idle detection alone paid for itself. Our weekly reports are something the whole team actually looks forward to reviewing now.",
  },
];

export const securityPoints: SecurityPoint[] = [
  {
    title: "End-to-end encryption",
    description:
      "Screenshots and activity data are encrypted in transit and at rest, so work evidence stays protected end to end.",
  },
  {
    title: "Secure cloud infrastructure",
    description:
      "Built on hardened, access-controlled infrastructure with continuous monitoring and automated backups.",
  },
  {
    title: "GDPR-ready by design",
    description:
      "Data retention, access, and deletion controls are built to align with GDPR and similar privacy regulations.",
  },
  {
    title: "Granular privacy controls",
    description:
      "Admins control exactly what's tracked, how long it's retained, and who can view screenshots and reports.",
  },
  {
    title: "Secure authentication",
    description:
      "Account access is protected with modern authentication practices and per-account session controls.",
  },
  {
    title: "Enterprise-grade reliability",
    description:
      "Rate limiting, input validation, and abuse protection are built into every request the platform handles.",
  },
];

export const integrations = [
  "Slack",
  "Google Workspace",
  "Microsoft 365",
  "Trello",
  "Asana",
  "Jira",
  "Notion",
  "Zoom",
];

export const faqs: FaqItem[] = [
  {
    question: "How does Time Tracker capture work activity?",
    answer:
      "The Windows desktop app records work in 5-minute logs, capturing timestamps, mouse and keyboard activity levels, active app and window titles, and up to three screenshots per log across connected monitors.",
  },
  {
    question: "Can employees see what's being tracked about them?",
    answer:
      "Yes. Employees see their own sessions, logs, and screenshots in the same dashboard admins use, so tracking stays transparent rather than hidden.",
  },
  {
    question: "What happens during idle time?",
    answer:
      "Smart idle detection pauses tracking automatically when there's no mouse or keyboard activity, so idle periods don't inflate work logs or productivity scores.",
  },
  {
    question: "Is our data secure?",
    answer:
      "Screenshots and activity data are encrypted in transit and at rest, served through expiring links, and protected by rate limiting and validation on every request.",
  },
  {
    question: "Do you support teams outside Windows?",
    answer:
      "The desktop tracking app is currently Windows-only. Admin dashboards and reports are accessible from any modern browser.",
  },
  {
    question: "Can we export reports?",
    answer:
      "Yes. Work logs, activity summaries, and screenshots can be reviewed and exported from the admin dashboard for payroll, client billing, or internal reporting.",
  },
];

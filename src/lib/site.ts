export type Feature = {
  title: string;
  description: string;
};

export type Step = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SecurityPoint = {
  title: string;
  description: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
};

export const site = {
  productName: "Time Tracker",
  ownerName: "GenzBPO",
  tagline: "Track time the way your team actually works.",
  description:
    "A desktop time tracker with work logs, screenshots, live screen view, app usage, and productivity reporting for distributed teams.",
  // No confirmed public download link yet - primary CTAs route to the
  // sales form instead of this until a real URL is provided.
  downloadUrl: "http://138.197.201.213:8000/api/updates/TimeTracker-Setup.exe",
  navItems: [
    { label: "Features", href: "/features" },
    { label: "Security", href: "/security" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  facts: ["Live screen view", "Dual-timezone logs", "Windows desktop app"],
};

export const features: Feature[] = [
  {
    title: "Detailed work logs",
    description:
      "Every session breaks into logged intervals with duration, keystrokes, clicks, and a productivity score - shown in both the employee's local time and your team's reference timezone.",
  },
  {
    title: "Live screen view",
    description:
      "Open a real-time view of what an employee is working on right now, with a clear on-screen indicator that a stream is active.",
  },
  {
    title: "Automatic screenshots",
    description:
      "Screenshots are captured throughout the day and organized per employee, per work log, so you can review what was happening at any point in time.",
  },
  {
    title: "Productive vs unproductive app tracking",
    description:
      "Desktop apps and browser activity are categorized as productive, unproductive, or neutral, broken down by total time and session count.",
  },
  {
    title: "Attendance and daily hours",
    description:
      "First login, last logout, hours worked, and present/absent/weekend status are tracked per employee, per day.",
  },
  {
    title: "Team and employee reporting",
    description:
      "Roll activity up by team or drill into a single employee's overview, daily hours, screenshots, and work logs - with reports downloadable straight from the dashboard.",
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
      "The app records work logs, screenshots, app usage, and activity metrics in the background.",
  },
  {
    title: "Review in the admin dashboard",
    description:
      "See team-wide status at a glance, drill into any employee, or open a live view of their screen in real time.",
  },
];

export const trustedByIndustries = [
  "BPO & Outsourcing",
  "Remote Agencies",
  "Customer Support Teams",
  "Software Studios",
  "Marketing Teams",
  "Virtual Assistant Firms",
];

// Security copy is scoped to what's verifiably true of the current build:
// rate limiting and input validation are implemented in /api/sales/route.ts.
// Broader claims (encryption at rest, GDPR certification, SOC 2, etc.)
// are left out until they're confirmed rather than asserted unverified.
export const securityPoints: SecurityPoint[] = [
  {
    title: "Encrypted in transit",
    description:
      "Data moves over HTTPS between the desktop app, dashboard, and servers, so it isn't exposed in plain text on the network.",
  },
  {
    title: "Visible on-screen when live",
    description:
      "Live screen view shows a clear \"Live\" indicator while active, rather than running silently in the background.",
  },
  {
    title: "Expiring screenshot links",
    description:
      "Screenshots are served through links designed to expire rather than staying permanently and publicly accessible.",
  },
  {
    title: "Rate limiting and abuse protection",
    description:
      "Requests to backend endpoints are rate-limited and validated to reduce spam and abuse.",
  },
  {
    title: "Employee-visible tracking",
    description:
      "Employees can see their own logs, hours, and screenshots in the same dashboard admins use, keeping tracking transparent rather than hidden.",
  },
  {
    title: "Admin-controlled access",
    description:
      "Only authenticated admin accounts can view team-wide work logs, screenshots, reports, and live screen sessions.",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What does Time Tracker actually capture?",
    answer:
      "Work logs with duration, keystrokes, clicks, and a productivity score; screenshots throughout the day; which apps and websites were used and whether they're productive; and daily attendance including first login and last logout.",
  },
  {
    question: "What is live screen view?",
    answer:
      "Admins can open a real-time view of an employee's screen for a specific session. A clear \"Live\" indicator shows on screen while a stream is active, and the admin ends the stream when finished.",
  },
  {
    question: "Can employees see what's being tracked about them?",
    answer:
      "Yes. Employees see their own work logs, hours, and screenshots in the same dashboard admins use, so tracking stays transparent rather than hidden.",
  },
  {
    question: "Can I see productivity by team, not just by person?",
    answer:
      "Yes. Reports can be generated per team, showing hours, average logs per day, average clicks and keystrokes per log, average productivity, and absences across everyone on the team.",
  },
  {
    question: "Can we export reports?",
    answer:
      "Yes. Reports are downloadable directly from the dashboard, broken into summary, daily breakdown, app usage, and activity log views.",
  },
  {
    question: "Do you support teams outside Windows?",
    answer:
      "The desktop tracking app is currently Windows-only. Admin dashboards and reports are accessible from any modern browser.",
  },
];

// Pricing is modeled on publicly available 2026 rates for comparable
// screenshot/activity-monitoring time trackers with live-view features
// (Time Doctor, Teramind, ActivTrak), which cluster higher than basic
// time-tracking-only tools given the added monitoring depth. These are
// realistic placeholder figures based on market research, not confirmed
// GenzBPO pricing - replace with real numbers whenever you have them.
export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$6.99",
    period: "per user / month",
    description: "Core time tracking and reporting for small teams.",
    features: [
      "Work logs with productivity scoring",
      "Screenshots",
      "App and website usage tracking",
      "Daily attendance tracking",
      "Basic admin dashboard",
    ],
  },
  {
    name: "Business",
    price: "$12.99",
    period: "per user / month",
    description: "Full visibility for growing teams and outsourced staff.",
    features: [
      "Everything in Starter",
      "Live screen view",
      "Per-team and per-employee reporting",
      "Downloadable Excel reports",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact sales",
    description: "For large or outsourced workforces with custom needs.",
    features: [
      "Everything in Business",
      "Custom data retention policies",
      "Dedicated onboarding",
      "Volume pricing for large teams",
      "Dedicated account manager",
    ],
  },
];

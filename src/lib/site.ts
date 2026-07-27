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
    "A focused desktop time tracker with work sessions, 5-minute logs, screenshots, app usage, and productivity insights for modern teams.",
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
      "Employees can see their own logs and screenshots in the same dashboard admins use, keeping tracking transparent rather than hidden.",
  },
  {
    title: "Admin-controlled access",
    description:
      "Only authenticated admin accounts can view team-wide work logs, screenshots, and reports.",
  },
  {
    title: "Idle-aware capture",
    description:
      "Tracking pauses automatically during idle periods, limiting data capture to active work time.",
  },
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
      "Data is transmitted over HTTPS, screenshots are served through expiring links, and backend requests are protected by rate limiting and validation.",
  },
  {
    question: "Do you support teams outside Windows?",
    answer:
      "The desktop tracking app is currently Windows-only. Admin dashboards and reports are accessible from any modern browser.",
  },
  {
    question: "Can we export reports?",
    answer:
      "Work logs, activity summaries, and screenshots can be reviewed and exported from the admin dashboard for payroll, client billing, or internal reporting.",
  },
];

// Pricing is modeled on publicly available 2026 rates for comparable
// screenshot/activity-monitoring time trackers (Hubstaff, Time Doctor,
// eMonitor, ActivTrak), which mostly cluster $4.50-$12/user/month for
// starter-to-mid tiers with custom enterprise pricing. These are realistic
// placeholder figures based on market research, not confirmed GenzBPO
// pricing - replace with real numbers whenever you have them.
export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$4.99",
    period: "per user / month",
    description: "Core time tracking for small teams getting started.",
    features: [
      "5-minute work logs",
      "Mouse and keyboard activity levels",
      "Smart idle detection",
      "Single-monitor screenshots",
      "Basic admin dashboard",
    ],
  },
  {
    name: "Business",
    price: "$8.99",
    period: "per user / month",
    description: "Full visibility for growing teams and outsourced staff.",
    features: [
      "Everything in Starter",
      "Up to 3-monitor screenshots per log",
      "App and website usage tracking",
      "Weekly and monthly analytics",
      "Team and project reporting",
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

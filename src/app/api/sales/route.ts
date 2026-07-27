import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { site } from "@/lib/site";

export const runtime = "nodejs";

type SalesRequest = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  website?: string;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_CONTENT_LENGTH = 10_000;
const MAX_FIELD_LENGTHS = {
  name: 80,
  email: 120,
  company: 120,
  message: 1_000,
};
const rateLimits = new Map<string, RateLimitEntry>();

const getRecipients = (): string[] =>
  (process.env.SALES_RECIPIENT_EMAILS || process.env.GMAIL_USER || "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);

const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const getErrorCode = (error: unknown): string | undefined =>
  typeof error === "object" && error !== null && "code" in error
    ? String(error.code)
    : undefined;

const escapeHtml = (value: string): string =>
  value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });

const getClientIp = (request: Request): string => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return (
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    "unknown"
  );
};

const isRateLimited = (ip: string): boolean => {
  const now = Date.now();
  const current = rateLimits.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
};

const isTooLong = (
  field: keyof typeof MAX_FIELD_LENGTHS,
  value: string,
): boolean => value.length > MAX_FIELD_LENGTHS[field];

const buildEmailHtml = ({
  name,
  email,
  company,
  message,
}: Required<Pick<SalesRequest, "name" | "email" | "company" | "message">>) => {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company || "Not provided");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return `
    <div style="margin:0;background:#f8fafc;padding:24px;font-family:Arial,Helvetica,sans-serif;color:#0F1F1F;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #E5E7EB;border-radius:18px;overflow:hidden;">
        <div style="background:#4338CA;padding:22px 24px;color:#ffffff;">
          <div style="font-size:12px;letter-spacing:0.18em;text-transform:uppercase;opacity:0.82;">${site.ownerName}</div>
          <h1 style="margin:8px 0 0;font-size:24px;line-height:1.25;">New ${site.productName} sales inquiry</h1>
        </div>
        <div style="padding:24px;">
          <p style="margin:0 0 18px;color:#4B5563;">Someone submitted the Talk to sales form from the ${site.productName} website.</p>
          <div style="border:1px solid #E5E7EB;border-radius:14px;overflow:hidden;">
            <div style="padding:14px 16px;border-bottom:1px solid #E5E7EB;"><strong>Name:</strong> ${safeName}</div>
            <div style="padding:14px 16px;border-bottom:1px solid #E5E7EB;"><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color:#4338CA;">${safeEmail}</a></div>
            <div style="padding:14px 16px;"><strong>Company:</strong> ${safeCompany}</div>
          </div>
          <div style="margin-top:18px;padding:16px;border-radius:14px;background:#f8fafc;border:1px solid #E5E7EB;">
            <div style="margin-bottom:8px;font-weight:700;color:#4338CA;">Message</div>
            <div style="line-height:1.6;">${safeMessage}</div>
          </div>
        </div>
      </div>
    </div>
  `;
};

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  const contentLength = Number(request.headers.get("content-length") || 0);

  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { error: "Invalid request format." },
      { status: 415 },
    );
  }

  if (contentLength > MAX_CONTENT_LENGTH) {
    return NextResponse.json(
      { error: "Request is too large." },
      { status: 413 },
    );
  }

  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  const body = (await request.json().catch(() => null)) as SalesRequest | null;
  const name = body?.name?.trim() || "";
  const email = body?.email?.trim() || "";
  const company = body?.company?.trim() || "";
  const message = body?.message?.trim() || "";

  if (body?.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (
    isTooLong("name", name) ||
    isTooLong("email", email) ||
    isTooLong("company", company) ||
    isTooLong("message", message)
  ) {
    return NextResponse.json(
      { error: "Please shorten your inquiry and try again." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const user = process.env.GMAIL_USER?.trim();
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  const recipients = getRecipients();

  if (!user || !pass || recipients.length === 0) {
    return NextResponse.json(
      { error: "Sales email is not configured." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"Time Tracker Sales" <${user}>`,
      to: recipients,
      replyTo: email,
      subject: `New Time Tracker sales inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: buildEmailHtml({ name, email, company, message }),
    });
  } catch (error) {
    const isAuthError = getErrorCode(error) === "EAUTH";

    return NextResponse.json(
      {
        error: isAuthError
          ? "Sales email authentication failed. Check the Gmail app password."
          : "Unable to send your request right now.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}

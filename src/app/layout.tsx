import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import CursorGlow from "@/components/landing/CursorGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.productName} | ${site.ownerName}`,
  description: site.description,
  keywords: [
    "employee time tracking",
    "workforce monitoring",
    "attendance tracking",
    "productivity software",
    "remote team management",
    "screenshot monitoring",
  ],
  openGraph: {
    type: "website",
    title: `${site.productName} | ${site.ownerName}`,
    description: site.description,
    siteName: `${site.productName} by ${site.ownerName}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.productName} | ${site.ownerName}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#4338CA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: site.productName,
              applicationCategory: "BusinessApplication",
              operatingSystem: "Windows",
              description: site.description,
              publisher: {
                "@type": "Organization",
                name: site.ownerName,
              },
            }),
          }}
        />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}

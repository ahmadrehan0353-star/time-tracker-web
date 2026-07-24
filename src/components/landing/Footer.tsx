import { Clock } from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-slate-50">
      <div className="container-xl grid gap-8 py-10 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white">
              <Clock className="size-5" strokeWidth={2.25} />
            </span>
            <div>
              <p className="font-bold text-ink">{site.productName}</p>
              <p className="text-xs text-muted">A {site.ownerName} product</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            Time tracking, screenshots, activity metrics, and productivity
            insights for teams that need clear work records.
          </p>
        </div>

        <div>
          <p className="font-semibold text-ink">Product</p>
          <div className="mt-3 space-y-2 text-sm text-muted">
            {site.navItems.map((item) => (
              <a key={item.href} href={item.href} className="block hover:text-primary">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-ink">Get started</p>
          <a
            href={site.downloadUrl}
            className="mt-3 inline-flex text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Download for Windows
          </a>
          <p className="mt-6 text-xs text-muted">
            © {year} {site.ownerName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

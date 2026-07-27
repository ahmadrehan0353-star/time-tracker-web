"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { Clock, LogOut } from "lucide-react";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/lib/admin/useAuth";
import { useInactivityLogout } from "@/lib/admin/useInactivityLogout";
import { site } from "@/lib/site";

function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  useInactivityLogout();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/admin/login");
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="flex h-screen items-center justify-center bg-surface">
        <div className="size-8 animate-spin rounded-full border-2 border-border border-t-primary" />
      </div>
    );
  }

  return <>{children}</>;
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLogin = pathname === "/admin/login";

  if (isLogin) {
    return <div className="min-h-screen bg-surface">{children}</div>;
  }

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/admin/login");
  };

  return (
    <AuthGuard>
      <div className="min-h-screen bg-surface">
        <header className="border-b border-border bg-white">
          <div className="container-xl flex h-16 items-center justify-between sm:px-8">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-white">
                <Clock className="size-4" strokeWidth={2.25} />
              </span>
              <span className="font-bold text-ink">{site.productName} Admin</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted hover:border-primary/30 hover:text-primary"
            >
              <LogOut className="size-3.5" />
              Log out
            </button>
          </div>
        </header>
        <main className="container-xl py-8 sm:px-8">{children}</main>
      </div>
    </AuthGuard>
  );
}

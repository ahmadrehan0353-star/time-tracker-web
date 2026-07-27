"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { Search, Trash2, Archive, MailOpen, Download, Mail } from "lucide-react";
import { db } from "@/lib/firebase";

type Lead = {
  id: string;
  name: string;
  email: string;
  company: string;
  message: string;
  status: "unread" | "read" | "archived";
  createdAt?: { toDate: () => Date };
};

const statusFilters = ["all", "unread", "read", "archived"] as const;

function formatDate(ts?: { toDate: () => Date }): string {
  if (!ts?.toDate) return "—";
  return ts.toDate().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<(typeof statusFilters)[number]>("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "leads"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      setLeads(snap.docs.map((d) => ({ id: d.id, ...(d.data() as object) } as Lead)));
    } catch (err) {
      console.error("Failed to load leads:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- standard fetch-on-mount pattern
    void load();
  }, [load]);

  const filtered = useMemo(() => {
    return leads
      .filter((l) => (filter === "all" ? true : (l.status ?? "unread") === filter))
      .filter((l) => {
        if (!search.trim()) return true;
        const q = search.toLowerCase();
        return (
          l.name?.toLowerCase().includes(q) ||
          l.company?.toLowerCase().includes(q) ||
          l.email?.toLowerCase().includes(q)
        );
      });
  }, [leads, filter, search]);

  const setStatus = async (lead: Lead, status: Lead["status"]) => {
    await updateDoc(doc(db, "leads", lead.id), { status });
    load();
  };

  const handleDelete = async (lead: Lead) => {
    if (!confirm(`Delete the message from "${lead.name}"? This can't be undone.`)) return;
    await deleteDoc(doc(db, "leads", lead.id));
    load();
  };

  const exportCsv = () => {
    const headers = ["Name", "Email", "Company", "Message", "Status", "Date"];
    const rows = filtered.map((l) => [
      l.name,
      l.email,
      l.company,
      (l.message || "").replace(/\n/g, " "),
      l.status ?? "unread",
      formatDate(l.createdAt),
    ]);
    const csv = [headers, ...rows]
      .map((row) => row.map((cell) => `"${(cell ?? "").toString().replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `time-tracker-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-ink">Leads</h1>
      <p className="mt-1 text-sm text-muted">
        Every sales inquiry submitted through the website.
      </p>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-2 rounded-full border border-border bg-white px-4 py-2.5 sm:max-w-sm">
          <Search className="size-4 text-subtle" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name, company, email..."
            className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-subtle"
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-1 rounded-full border border-border bg-white p-1">
            {statusFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium capitalize transition-colors ${
                  filter === f ? "bg-primary text-white" : "text-muted hover:text-ink"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <button onClick={exportCsv} className="btn-secondary h-10 px-4 text-xs">
            <Download className="size-3.5" />
            Export CSV
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {loading ? (
          <div className="card-surface p-6 text-sm text-muted">Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="card-surface p-6 text-center text-sm text-muted">
            No leads match this view yet.
          </div>
        ) : (
          filtered.map((lead) => {
            const isExpanded = expanded === lead.id;
            const status = lead.status ?? "unread";
            return (
              <div key={lead.id} className="card-surface p-4">
                <div
                  className="flex cursor-pointer items-center gap-4"
                  onClick={() => setExpanded(isExpanded ? null : lead.id)}
                >
                  <div
                    className={`size-2 flex-shrink-0 rounded-full ${
                      status === "unread" ? "bg-primary" : "bg-transparent"
                    }`}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-ink">
                      {lead.name || "Unnamed"}{" "}
                      {lead.company && <span className="font-normal text-muted">— {lead.company}</span>}
                    </p>
                    <p className="truncate text-xs text-muted">{lead.email}</p>
                  </div>
                  <span className="hidden flex-shrink-0 text-xs text-subtle sm:block">
                    {formatDate(lead.createdAt)}
                  </span>
                  <span
                    className={`flex-shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium capitalize ${
                      status === "unread"
                        ? "bg-primary-50 text-primary"
                        : status === "archived"
                        ? "bg-slate-100 text-subtle"
                        : "bg-accent-50 text-accent"
                    }`}
                  >
                    {status}
                  </span>
                  <div
                    className="flex flex-shrink-0 items-center gap-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {status !== "read" && (
                      <button
                        onClick={() => setStatus(lead, "read")}
                        title="Mark as read"
                        className="flex size-8 items-center justify-center rounded-lg text-muted hover:bg-slate-100 hover:text-ink"
                      >
                        <MailOpen className="size-3.5" />
                      </button>
                    )}
                    {status !== "archived" && (
                      <button
                        onClick={() => setStatus(lead, "archived")}
                        title="Archive"
                        className="flex size-8 items-center justify-center rounded-lg text-muted hover:bg-slate-100 hover:text-ink"
                      >
                        <Archive className="size-3.5" />
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(lead)}
                      title="Delete"
                      className="flex size-8 items-center justify-center rounded-lg text-muted hover:bg-error/10 hover:text-error"
                    >
                      <Trash2 className="size-3.5" />
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div className="mt-4 border-t border-border pt-4">
                    <p className="text-xs uppercase tracking-wide text-subtle">Message</p>
                    <p className="mt-1 text-sm text-secondary">{lead.message || "—"}</p>
                    <a
                      href={`mailto:${lead.email}`}
                      className="btn-secondary mt-4 inline-flex h-9 px-4 text-xs"
                    >
                      <Mail className="size-3.5" />
                      Reply by email
                    </a>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

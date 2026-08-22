import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";

import { PageHeader, Panel, StatusBadge } from "@/components/DashboardShell";
import { adminReports } from "@/lib/data";

export const Route = createFileRoute("/admin/reports")({
  head: () => ({ meta: [{ title: "التقارير | مدرسة عيون مصر" }] }),
  component: ReportsPage,
});

function ReportsPage() {
  return (
    <div>
      <PageHeader title="التقارير" description="تقارير الحضور والرسوم والأداء الأكاديمي" />
      <Panel icon={FileText} title="التقارير المتاحة">
        <div className="space-y-3">
          {adminReports.map((report) => (
            <div
              key={report.name}
              className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border p-4 hover:bg-brand-soft/30"
            >
              <div>
                <div className="font-semibold text-foreground">{report.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {report.period} · {report.type}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <StatusBadge
                  status={report.status}
                  variant={report.status === "جاهز" ? "success" : "gold"}
                />
                {report.status === "جاهز" ? (
                  <button className="rounded-lg bg-brand px-4 py-1.5 text-xs font-bold text-white hover:bg-brand-dark">
                    تحميل
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}

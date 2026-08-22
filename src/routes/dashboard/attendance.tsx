import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck } from "lucide-react";

import { PageHeader, Panel, StatusBadge } from "@/components/DashboardShell";
import { attendanceRecords } from "@/lib/data";

export const Route = createFileRoute("/dashboard/attendance")({
  head: () => ({ meta: [{ title: "الحضور | مدرسة عيون مصر" }] }),
  component: AttendancePage,
});

function statusVariant(status: string) {
  if (status === "حاضر") return "success" as const;
  if (status === "غائب") return "danger" as const;
  return "gold" as const;
}

function AttendancePage() {
  return (
    <div>
      <PageHeader title="سجل الحضور" description="متابعة حضور وغياب الطالب خلال الفصل الدراسي" />
      <div className="mb-5 grid gap-4 sm:grid-cols-3">
        {[
          { label: "أيام الحضور", value: "٨٨", tone: "text-success" },
          { label: "أيام الغياب", value: "٢", tone: "text-danger" },
          { label: "نسبة الحضور", value: "٩٨٪", tone: "text-brand" },
        ].map(({ label, value, tone }) => (
          <div key={label} className="rounded-xl border border-border bg-card p-5 shadow-card">
            <div className="text-sm font-semibold text-muted-foreground">{label}</div>
            <div className={`mt-2 text-3xl font-extrabold ${tone}`}>{value}</div>
          </div>
        ))}
      </div>
      <Panel icon={CalendarCheck} title="السجل التفصيلي">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-brand">
                <th className="px-3 py-2 text-right font-bold">التاريخ</th>
                <th className="px-3 py-2 text-right font-bold">الحالة</th>
                <th className="px-3 py-2 text-right font-bold">ملاحظات</th>
              </tr>
            </thead>
            <tbody>
              {attendanceRecords.map((row) => (
                <tr key={row.date} className="border-b border-border last:border-0">
                  <td className="px-3 py-3 font-semibold text-foreground">{row.date}</td>
                  <td className="px-3 py-3">
                    <StatusBadge status={row.status} variant={statusVariant(row.status)} />
                  </td>
                  <td className="px-3 py-3 text-muted-foreground">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
}

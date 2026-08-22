import { createFileRoute } from "@tanstack/react-router";
import { Users } from "lucide-react";

import { PageHeader, Panel, StatusBadge } from "@/components/DashboardShell";
import { adminStudents } from "@/lib/data";

export const Route = createFileRoute("/admin/students")({
  head: () => ({ meta: [{ title: "الطلاب | مدرسة عيون مصر" }] }),
  component: StudentsPage,
});

function feeVariant(status: string) {
  if (status === "مدفوع") return "success" as const;
  if (status === "متأخر") return "danger" as const;
  return "gold" as const;
}

function StudentsPage() {
  return (
    <div>
      <PageHeader title="إدارة الطلاب" description="قائمة الطلاب المسجلين وبياناتهم" />
      <Panel icon={Users} title="جميع الطلاب">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-border text-brand">
                <th className="px-3 py-2 text-right font-bold">الرقم</th>
                <th className="px-3 py-2 text-right font-bold">الاسم</th>
                <th className="px-3 py-2 text-right font-bold">الصف</th>
                <th className="px-3 py-2 text-right font-bold">الحضور</th>
                <th className="px-3 py-2 text-right font-bold">الرسوم</th>
              </tr>
            </thead>
            <tbody>
              {adminStudents.map((s) => (
                <tr key={s.id} className="border-b border-border last:border-0 hover:bg-brand-soft/30">
                  <td className="px-3 py-3 font-mono text-xs text-muted-foreground">{s.id}</td>
                  <td className="px-3 py-3 font-semibold text-foreground">{s.name}</td>
                  <td className="px-3 py-3">{s.grade}</td>
                  <td className="px-3 py-3 font-semibold text-success">{s.attendance}</td>
                  <td className="px-3 py-3">
                    <StatusBadge status={s.fees} variant={feeVariant(s.fees)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
}

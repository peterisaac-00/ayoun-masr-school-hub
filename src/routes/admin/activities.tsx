import { createFileRoute } from "@tanstack/react-router";
import { Activity } from "lucide-react";

import { PageHeader, Panel, StatusBadge } from "@/components/DashboardShell";
import { activities } from "@/lib/data";

export const Route = createFileRoute("/admin/activities")({
  head: () => ({ meta: [{ title: "الأنشطة | مدرسة عيون مصر" }] }),
  component: AdminActivitiesPage,
});

const enrollments = [
  { activity: "كاراتيه", enrolled: 45, capacity: 50 },
  { activity: "كرة القدم", enrolled: 38, capacity: 40 },
  { activity: "الرسم", enrolled: 22, capacity: 30 },
  { activity: "الروبوتات", enrolled: 18, capacity: 25 },
];

function AdminActivitiesPage() {
  return (
    <div>
      <PageHeader title="إدارة الأنشطة" description="البرامج اللاصفية والأنشطة الصيفية" />
      <div className="grid gap-5 sm:grid-cols-2">
        {activities.map((act) => (
          <Panel key={act.name} icon={Activity} title={act.name}>
            <div className="text-sm text-muted-foreground">الموعد: {act.schedule}</div>
            <div className="mt-2">
              <StatusBadge status={act.status} variant={act.status === "مسجل" ? "success" : "gold"} />
            </div>
          </Panel>
        ))}
      </div>
      <div className="mt-5">
        <Panel icon={Activity} title="التسجيلات">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-brand">
                  <th className="px-3 py-2 text-right font-bold">النشاط</th>
                  <th className="px-3 py-2 text-right font-bold">المسجلون</th>
                  <th className="px-3 py-2 text-right font-bold">السعة</th>
                  <th className="px-3 py-2 text-right font-bold">الإشغال</th>
                </tr>
              </thead>
              <tbody>
                {enrollments.map((row) => (
                  <tr key={row.activity} className="border-b border-border last:border-0">
                    <td className="px-3 py-3 font-semibold">{row.activity}</td>
                    <td className="px-3 py-3">{row.enrolled}</td>
                    <td className="px-3 py-3">{row.capacity}</td>
                    <td className="px-3 py-3 font-bold text-brand">
                      {Math.round((row.enrolled / row.capacity) * 100)}٪
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>
    </div>
  );
}

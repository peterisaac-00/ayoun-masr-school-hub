import { createFileRoute } from "@tanstack/react-router";
import { UserCog } from "lucide-react";

import { PageHeader, Panel } from "@/components/DashboardShell";
import { adminTeachers } from "@/lib/data";

export const Route = createFileRoute("/admin/teachers")({
  head: () => ({ meta: [{ title: "المعلمون | مدرسة عيون مصر" }] }),
  component: TeachersPage,
});

function TeachersPage() {
  return (
    <div>
      <PageHeader title="إدارة المعلمين" description="قائمة المعلمين والمواد التي يدرّسونها" />
      <Panel icon={UserCog} title="هيئة التدريس">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-border text-brand">
                <th className="px-3 py-2 text-right font-bold">الرقم</th>
                <th className="px-3 py-2 text-right font-bold">الاسم</th>
                <th className="px-3 py-2 text-right font-bold">المادة</th>
                <th className="px-3 py-2 text-right font-bold">الفصول</th>
                <th className="px-3 py-2 text-right font-bold">الخبرة</th>
              </tr>
            </thead>
            <tbody>
              {adminTeachers.map((t) => (
                <tr key={t.id} className="border-b border-border last:border-0 hover:bg-brand-soft/30">
                  <td className="px-3 py-3 font-mono text-xs text-muted-foreground">{t.id}</td>
                  <td className="px-3 py-3 font-semibold text-foreground">{t.name}</td>
                  <td className="px-3 py-3">{t.subject}</td>
                  <td className="px-3 py-3">{t.classes}</td>
                  <td className="px-3 py-3 text-muted-foreground">{t.experience}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
}

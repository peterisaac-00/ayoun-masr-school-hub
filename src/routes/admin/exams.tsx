import { createFileRoute } from "@tanstack/react-router";
import { ClipboardList } from "lucide-react";

import { PageHeader, Panel, StatusBadge } from "@/components/DashboardShell";
import { adminExams } from "@/lib/data";

export const Route = createFileRoute("/admin/exams")({
  head: () => ({ meta: [{ title: "الامتحانات | مدرسة عيون مصر" }] }),
  component: AdminExamsPage,
});

function AdminExamsPage() {
  return (
    <div>
      <PageHeader title="إدارة الامتحانات" description="جدولة ومتابعة الامتحانات" />
      <Panel icon={ClipboardList} title="الامتحانات المجدولة">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-brand">
                <th className="px-3 py-2 text-right font-bold">الامتحان</th>
                <th className="px-3 py-2 text-right font-bold">التاريخ</th>
                <th className="px-3 py-2 text-right font-bold">الفصول</th>
                <th className="px-3 py-2 text-right font-bold">الحالة</th>
              </tr>
            </thead>
            <tbody>
              {adminExams.map((exam) => (
                <tr key={exam.name} className="border-b border-border last:border-0">
                  <td className="px-3 py-3 font-semibold">{exam.name}</td>
                  <td className="px-3 py-3">{exam.date}</td>
                  <td className="px-3 py-3">{exam.classes}</td>
                  <td className="px-3 py-3">
                    <StatusBadge status={exam.status} variant="gold" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="mt-4 rounded-lg bg-brand px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-dark">
          + إضافة امتحان جديد
        </button>
      </Panel>
    </div>
  );
}

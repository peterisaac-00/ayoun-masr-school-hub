import { createFileRoute } from "@tanstack/react-router";
import { BarChart3 } from "lucide-react";

import { PageHeader, Panel } from "@/components/DashboardShell";

export const Route = createFileRoute("/admin/grades")({
  head: () => ({ meta: [{ title: "الدرجات | مدرسة عيون مصر" }] }),
  component: AdminGradesPage,
});

const gradeSummary = [
  { grade: "الصف ٦", average: "٨٨٪", top: "مريم حسن", pass: "٩٥٪" },
  { grade: "الصف ٧", average: "٨٦٪", top: "سارة محمود", pass: "٩٢٪" },
  { grade: "الصف ٨", average: "٩٠٪", top: "عمر أحمد", pass: "٩٦٪" },
  { grade: "الصف ٩", average: "٨٧٪", top: "يوسف علي", pass: "٩٤٪" },
  { grade: "الصف ١٠", average: "٨٩٪", top: "كريم إبراهيم", pass: "٩٣٪" },
];

function AdminGradesPage() {
  return (
    <div>
      <PageHeader title="إدارة الدرجات" description="ملخص الأداء الأكاديمي على مستوى الصفوف" />
      <Panel icon={BarChart3} title="متوسط الدرجات حسب الصف">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-brand">
                <th className="px-3 py-2 text-right font-bold">الصف</th>
                <th className="px-3 py-2 text-right font-bold">المعدل</th>
                <th className="px-3 py-2 text-right font-bold">أفضل طالب</th>
                <th className="px-3 py-2 text-right font-bold">نسبة النجاح</th>
              </tr>
            </thead>
            <tbody>
              {gradeSummary.map((row) => (
                <tr key={row.grade} className="border-b border-border last:border-0 hover:bg-brand-soft/30">
                  <td className="px-3 py-3 font-semibold">{row.grade}</td>
                  <td className="px-3 py-3 font-bold text-brand">{row.average}</td>
                  <td className="px-3 py-3">{row.top}</td>
                  <td className="px-3 py-3 font-semibold text-success">{row.pass}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
}

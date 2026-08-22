import { createFileRoute } from "@tanstack/react-router";
import { BarChart3 } from "lucide-react";

import { GradesTable, PageHeader, Panel } from "@/components/DashboardShell";
import { term1, term2 } from "@/lib/data";

export const Route = createFileRoute("/dashboard/grades")({
  head: () => ({ meta: [{ title: "الدرجات | مدرسة عيون مصر" }] }),
  component: GradesPage,
});

function GradesPage() {
  return (
    <div>
      <PageHeader title="الدرجات" description="نتائج الطالب في الفصلين الدراسيين" />
      <div className="mb-5 grid gap-4 sm:grid-cols-3">
        {[
          { label: "المعدل العام", value: "٩٣٪", tone: "text-brand" },
          { label: "أعلى مادة", value: "الرياضيات", tone: "text-success" },
          { label: "ترتيب الصف", value: "٥ من ٢٨", tone: "text-gold" },
        ].map(({ label, value, tone }) => (
          <div key={label} className="rounded-xl border border-border bg-card p-5 shadow-card">
            <div className="text-sm font-semibold text-muted-foreground">{label}</div>
            <div className={`mt-2 text-2xl font-extrabold ${tone}`}>{value}</div>
          </div>
        ))}
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <Panel icon={BarChart3} title="الفصل الدراسي الأول">
          <GradesTable rows={term1} />
        </Panel>
        <Panel icon={BarChart3} title="الفصل الدراسي الثاني">
          <GradesTable rows={term2} />
        </Panel>
      </div>
    </div>
  );
}

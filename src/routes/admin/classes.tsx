import { createFileRoute } from "@tanstack/react-router";
import { School } from "lucide-react";

import { PageHeader, Panel } from "@/components/DashboardShell";
import { adminClasses } from "@/lib/data";

export const Route = createFileRoute("/admin/classes")({
  head: () => ({ meta: [{ title: "الفصول | مدرسة عيون مصر" }] }),
  component: ClassesPage,
});

function ClassesPage() {
  return (
    <div>
      <PageHeader title="الفصول الدراسية" description="توزيع الطلاب على الفصول والقاعات" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {adminClasses.map((c) => (
          <Panel key={c.name} icon={School} title={c.name}>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">عدد الطلاب</span>
                <span className="font-bold text-brand">{c.students}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">المعلم</span>
                <span className="font-semibold">{c.teacher}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">القاعة</span>
                <span className="font-semibold">{c.room}</span>
              </div>
            </div>
          </Panel>
        ))}
      </div>
    </div>
  );
}

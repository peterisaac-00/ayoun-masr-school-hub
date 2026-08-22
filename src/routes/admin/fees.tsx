import { createFileRoute } from "@tanstack/react-router";
import { CreditCard, DollarSign } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { PageHeader, Panel } from "@/components/DashboardShell";
import { adminStudents } from "@/lib/data";

export const Route = createFileRoute("/admin/fees")({
  head: () => ({ meta: [{ title: "الرسوم | مدرسة عيون مصر" }] }),
  component: AdminFeesPage,
});

const feesData = [
  { name: "محصل", value: 75 },
  { name: "متبقي", value: 25 },
];
const colors = ["var(--brand)", "var(--gold)"];

function AdminFeesPage() {
  const overdue = adminStudents.filter((s) => s.fees === "متأخر" || s.fees === "مدفوع جزئياً");

  return (
    <div>
      <PageHeader title="إدارة الرسوم" description="متابعة تحصيل الرسوم الدراسية" />
      <div className="grid gap-5 lg:grid-cols-2">
        <Panel icon={DollarSign} title="نظرة عامة" iconTone="gold">
          <div className="relative mx-auto h-56 w-full max-w-xs">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={feesData} dataKey="value" innerRadius="60%" outerRadius="90%" stroke="none">
                  {feesData.map((_, i) => (
                    <Cell key={i} fill={colors[i]} />
                  ))}
                </Pie>
                <Tooltip formatter={(v: number) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-extrabold text-brand">٧٥٪</span>
              <span className="text-xs text-muted-foreground">محصل</span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-xs text-muted-foreground">المحصل</div>
              <div className="text-lg font-extrabold text-brand">١٨ مليون جنيه</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">المتبقي</div>
              <div className="text-lg font-extrabold text-gold">٦ مليون جنيه</div>
            </div>
          </div>
        </Panel>
        <Panel icon={CreditCard} title="متأخرات الدفع">
          <div className="space-y-3">
            {overdue.map((s) => (
              <div key={s.id} className="flex items-center justify-between rounded-lg border border-border p-3">
                <div>
                  <div className="font-semibold text-foreground">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.grade}</div>
                </div>
                <span className="rounded border border-danger px-2 py-1 text-xs font-semibold text-danger">
                  {s.fees}
                </span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}

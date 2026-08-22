import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { PageHeader, Panel } from "@/components/DashboardShell";

export const Route = createFileRoute("/admin/attendance")({
  head: () => ({ meta: [{ title: "الحضور | مدرسة عيون مصر" }] }),
  component: AdminAttendancePage,
});

const weeklyData = [
  { day: "الأحد", present: 1150, absent: 98 },
  { day: "الإثنين", present: 1180, absent: 68 },
  { day: "الثلاثاء", present: 1165, absent: 83 },
  { day: "الأربعاء", present: 1195, absent: 53 },
  { day: "الخميس", present: 1175, absent: 73 },
];

const classAttendance = [
  { class: "الصف ٦ - أ", rate: "٩٦٪", absent: 1 },
  { class: "الصف ٧ - ب", rate: "٩٤٪", absent: 2 },
  { class: "الصف ٨ - أ", rate: "٩٨٪", absent: 1 },
  { class: "الصف ٩ - أ", rate: "٩١٪", absent: 3 },
  { class: "الصف ١٠ - ب", rate: "٩٣٪", absent: 2 },
];

function AdminAttendancePage() {
  return (
    <div>
      <PageHeader title="إدارة الحضور" description="متابعة حضور الطلاب على مستوى المدرسة" />
      <div className="mb-5 grid gap-4 sm:grid-cols-3">
        {[
          { label: "حضور اليوم", value: "٩٢٫٤٪", tone: "text-success" },
          { label: "الغائبون", value: "٩٥", tone: "text-danger" },
          { label: "المتأخرون", value: "٢٣", tone: "text-gold" },
        ].map(({ label, value, tone }) => (
          <div key={label} className="rounded-xl border border-border bg-card p-5 shadow-card">
            <div className="text-sm font-semibold text-muted-foreground">{label}</div>
            <div className={`mt-2 text-3xl font-extrabold ${tone}`}>{value}</div>
          </div>
        ))}
      </div>
      <Panel icon={CalendarCheck} title="اتجاه الحضور الأسبوعي">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={weeklyData}>
              <CartesianGrid stroke="var(--border)" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Area type="monotone" dataKey="present" stroke="var(--brand)" fill="var(--brand-soft)" name="حاضر" />
              <Area type="monotone" dataKey="absent" stroke="var(--danger)" fill="oklch(0.55 0.21 27 / 0.1)" name="غائب" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Panel>
      <div className="mt-5">
        <Panel icon={CalendarCheck} title="حضور الفصول">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-brand">
                  <th className="px-3 py-2 text-right font-bold">الفصل</th>
                  <th className="px-3 py-2 text-right font-bold">نسبة الحضور</th>
                  <th className="px-3 py-2 text-right font-bold">الغائبون</th>
                </tr>
              </thead>
              <tbody>
                {classAttendance.map((row) => (
                  <tr key={row.class} className="border-b border-border last:border-0">
                    <td className="px-3 py-3 font-semibold">{row.class}</td>
                    <td className="px-3 py-3 font-bold text-success">{row.rate}</td>
                    <td className="px-3 py-3 text-danger">{row.absent}</td>
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

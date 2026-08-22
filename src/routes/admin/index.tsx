import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarCheck,
  ClipboardList,
  DollarSign,
  FileText,
  Megaphone,
  Users,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  LabelList,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Panel } from "@/components/DashboardShell";
import { adminStats } from "@/lib/nav";

export const Route = createFileRoute("/admin/")({
  head: () => ({ meta: [{ title: "لوحة الإدارة | مدرسة عيون مصر" }] }),
  component: AdminDashboardHome,
});

const toneClasses: Record<string, { card: string; badge: string; value: string }> = {
  brand: { card: "bg-brand-soft/70", badge: "bg-brand", value: "text-brand" },
  gold: { card: "bg-gold-soft", badge: "bg-gold", value: "text-gold" },
  success: { card: "bg-success-soft", badge: "bg-success", value: "text-success" },
  violet: { card: "bg-violet-soft", badge: "bg-violet", value: "text-violet" },
};

const feesData = [
  { name: "المحصل", value: 18000000 },
  { name: "المتبقي", value: 6000000 },
];
const feeColors = ["var(--brand)", "var(--gold)"];

const attendanceData = [
  { day: "أحد", value: 88 },
  { day: "إثن", value: 91 },
  { day: "ثلا", value: 90 },
  { day: "أرب", value: 93 },
  { day: "خمي", value: 92 },
  { day: "جمع", value: 90 },
  { day: "سبت", value: 89 },
];

const activity = [
  {
    icon: Users,
    tone: "success",
    name: "تسجيل طالب جديد",
    details: "تم تسجيل عمر علي في الصف الثامن - أ",
    when: "٢١ مايو ٢٠٢٥ – ١٠:٣٠ ص",
    by: "الإدارة",
    byTone: "brand",
  },
  {
    icon: DollarSign,
    tone: "success",
    name: "استلام دفعة",
    details: "تم استلام ١٢٬٠٠٠ جنيه من ولي أمر سارة أحمد (الصف ٧ - ب)",
    when: "٢١ مايو ٢٠٢٥ – ٠٩:١٥ ص",
    by: "الحسابات",
    byTone: "gold",
  },
  {
    icon: CalendarCheck,
    tone: "brand",
    name: "تحديث الحضور",
    details: "تم تحديث حضور اليوم لجميع الفصول",
    when: "٢١ مايو ٢٠٢٥ – ٠٨:٤٥ ص",
    by: "النظام",
    byTone: "muted",
  },
  {
    icon: ClipboardList,
    tone: "violet",
    name: "جدولة امتحان",
    details: "تم جدولة امتحان الرياضيات للصف التاسع يوم ٢٨ مايو ٢٠٢٥",
    when: "٢٠ مايو ٢٠٢٥ – ٠٤:٢٠ م",
    by: "الإدارة",
    byTone: "brand",
  },
  {
    icon: Megaphone,
    tone: "gold",
    name: "نشر إعلان",
    details: "تم الإعلان عن برنامج الأنشطة الصيفية الجديد",
    when: "٢٠ مايو ٢٠٢٥ – ٠٢:١٠ م",
    by: "الإدارة",
    byTone: "brand",
  },
] as const;

const byToneClasses: Record<string, string> = {
  brand: "bg-brand-soft text-brand",
  gold: "bg-gold-soft text-gold",
  muted: "bg-secondary text-muted-foreground",
};

function Filter({ label }: { label: string }) {
  return (
    <span className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-foreground">
      {label} ⌄
    </span>
  );
}

function AdminDashboardHome() {
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {adminStats.map(({ label, value, delta, icon: Icon, tone }) => (
          <div
            key={label}
            className={`rounded-xl border border-border p-5 shadow-card ${toneClasses[tone]!.card}`}
          >
            <div className="flex items-center gap-4">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${toneClasses[tone]!.badge}`}
              >
                <Icon className="h-6 w-6 text-white" />
              </span>
              <div>
                <div className="text-sm font-semibold text-foreground">{label}</div>
                <div className={`text-3xl font-extrabold ${toneClasses[tone]!.value}`}>{value}</div>
              </div>
            </div>
            <div className="mt-3 text-xs font-semibold text-success">{delta} ↑</div>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-2">
        <Panel icon={DollarSign} title="نظرة عامة على تحصيل الرسوم" action={<Filter label="هذا الفصل" />}>
          <div className="grid gap-4 sm:grid-cols-[1fr_1fr] sm:items-center">
            <div className="relative h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={feesData}
                    dataKey="value"
                    innerRadius="62%"
                    outerRadius="95%"
                    startAngle={90}
                    endAngle={-270}
                    stroke="none"
                  >
                    {feesData.map((entry, i) => (
                      <Cell key={entry.name} fill={feeColors[i]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v: number) => `${v.toLocaleString("ar-EG")} جنيه`} />
                </PieChart>
              </ResponsiveContainer>
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-extrabold text-brand">٧٥٪</span>
                <span className="text-xs font-semibold text-muted-foreground">محصل</span>
              </div>
            </div>
            <div>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <span className="h-3 w-3 rounded-full bg-brand" /> الرسوم المحصلة
                  </div>
                  <div className="mt-1 text-base font-bold text-foreground">
                    <span className="text-brand">١٨٬٠٠٠٬٠٠٠ جنيه</span>{" "}
                    <span className="text-xs text-muted-foreground">(٧٥٪)</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <span className="h-3 w-3 rounded-full bg-gold" /> المتبقي
                  </div>
                  <div className="mt-1 text-base font-bold text-foreground">
                    <span className="text-gold">٦٬٠٠٠٬٠٠٠ جنيه</span>{" "}
                    <span className="text-xs text-muted-foreground">(٢٥٪)</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 border-t border-border pt-3">
                <div className="text-sm text-muted-foreground">إجمالي الرسوم</div>
                <div className="text-xl font-extrabold text-brand">٢٤٬٠٠٠٬٠٠٠ جنيه</div>
              </div>
            </div>
          </div>
        </Panel>

        <Panel icon={Users} title="اتجاه الحضور" action={<Filter label="هذا الأسبوع" />}>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={attendanceData} margin={{ top: 24, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="var(--border)" vertical={false} />
                <XAxis
                  dataKey="day"
                  tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  domain={[0, 100]}
                  ticks={[0, 20, 40, 60, 80, 100]}
                  tickFormatter={(v: number) => `${v}%`}
                  tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip formatter={(v: number) => `${v}%`} />
                <Area
                  type="linear"
                  dataKey="value"
                  stroke="var(--brand)"
                  strokeWidth={2}
                  fill="var(--brand-soft)"
                  dot={{ r: 4, fill: "white", stroke: "var(--brand)", strokeWidth: 2 }}
                  activeDot={{ r: 5 }}
                >
                  <LabelList
                    dataKey="value"
                    position="top"
                    offset={10}
                    formatter={(v: number) => `${v}%`}
                    style={{ fontSize: 12, fontWeight: 700, fill: "var(--brand)" }}
                  />
                </Area>
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 text-sm font-semibold text-foreground">
            متوسط الحضور هذا الأسبوع: <span className="text-brand">٩٠٫٤٪</span>
          </div>
        </Panel>
      </div>

      <div className="mt-5">
        <Panel icon={FileText} title="النشاط الأخير">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="border-b border-border text-right text-brand">
                  <th className="px-3 py-2 font-bold">النشاط</th>
                  <th className="px-3 py-2 font-bold">التفاصيل</th>
                  <th className="px-3 py-2 font-bold">التاريخ والوقت</th>
                  <th className="px-3 py-2 font-bold">بواسطة</th>
                </tr>
              </thead>
              <tbody>
                {activity.map(({ icon: Icon, tone, name, details, when, by, byTone }) => (
                  <tr key={name} className="border-b border-border last:border-0">
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2 font-semibold text-foreground">
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-full ${toneClasses[tone]!.badge}`}
                        >
                          <Icon className="h-4 w-4 text-white" />
                        </span>
                        {name}
                      </div>
                    </td>
                    <td className="px-3 py-3 text-muted-foreground">{details}</td>
                    <td className="px-3 py-3 text-muted-foreground">{when}</td>
                    <td className="px-3 py-3">
                      <span
                        className={`rounded px-2 py-1 text-xs font-semibold ${byToneClasses[byTone]!}`}
                      >
                        {by}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  BarChart3,
  CalendarCheck,
  ClipboardList,
  CreditCard,
  DollarSign,
  FileText,
  GraduationCap,
  Home,
  Mail,
  Megaphone,
  School,
  Settings,
  Users,
  UserCog,
} from "lucide-react";
import {
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { DashboardShell, Panel, type NavItem } from "@/components/DashboardShell";
import principal from "@/assets/principal.jpg";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard | Ayoun Masr School" },
      {
        name: "description",
        content:
          "Administrator overview of students, teachers, attendance trends, fees collection and recent activity at Ayoun Masr School.",
      },
      { property: "og:title", content: "Admin Dashboard | Ayoun Masr School" },
      {
        property: "og:description",
        content: "Students, teachers, attendance and fees collection overview for Ayoun Masr.",
      },
    ],
  }),
  component: AdminDashboard,
});

const nav: NavItem[] = [
  { label: "Dashboard", icon: Home },
  { label: "Students", icon: Users, sub: true },
  { label: "Teachers", icon: UserCog, sub: true },
  { label: "Classes", icon: School },
  { label: "Attendance", icon: CalendarCheck, sub: true },
  { label: "Exams", icon: ClipboardList },
  { label: "Grades", icon: BarChart3 },
  { label: "Fees", icon: CreditCard, sub: true },
  { label: "Activities", icon: Activity },
  { label: "Reports", icon: FileText, sub: true },
  { label: "Announcements", icon: Megaphone },
  { label: "Messages", icon: Mail },
  { label: "Settings", icon: Settings },
];

const stats = [
  {
    label: "Total Students",
    value: "1,248",
    delta: "+35 this month",
    icon: Users,
    tone: "brand",
  },
  {
    label: "Total Teachers",
    value: "85",
    delta: "+3 this month",
    icon: GraduationCap,
    tone: "gold",
  },
  {
    label: "Today's Attendance",
    value: "92.4%",
    delta: "+2.6% vs yesterday",
    icon: CalendarCheck,
    tone: "success",
  },
  {
    label: "Fees Collected %",
    value: "75%",
    delta: "+5% vs last month",
    icon: DollarSign,
    tone: "violet",
  },
] as const;

const toneClasses: Record<string, { card: string; badge: string; value: string }> = {
  brand: { card: "bg-brand-soft/70", badge: "bg-brand", value: "text-brand" },
  gold: { card: "bg-gold-soft", badge: "bg-gold", value: "text-gold" },
  success: { card: "bg-success-soft", badge: "bg-success", value: "text-success" },
  violet: { card: "bg-violet-soft", badge: "bg-violet", value: "text-violet" },
};

const feesData = [
  { name: "Fees Collected", value: 18000000 },
  { name: "Outstanding", value: 6000000 },
];
const feeColors = ["var(--brand)", "var(--gold)"];

const attendanceData = [
  { day: "Sun", value: 88 },
  { day: "Mon", value: 91 },
  { day: "Tue", value: 90 },
  { day: "Wed", value: 93 },
  { day: "Thu", value: 92 },
  { day: "Fri", value: 90 },
  { day: "Sat", value: 89 },
];

const activity = [
  {
    icon: Users,
    tone: "success",
    name: "New Student Enrolled",
    details: "Omar Ali has been enrolled in Grade 8 - A",
    when: "May 21, 2025 – 10:30 AM",
    by: "Admin",
    byTone: "brand",
  },
  {
    icon: DollarSign,
    tone: "success",
    name: "Payment Received",
    details: "Payment of EGP 12,000 received for Sarah Ahmed (Grade 7 - B)",
    when: "May 21, 2025 – 09:15 AM",
    by: "Accounts",
    byTone: "gold",
  },
  {
    icon: CalendarCheck,
    tone: "brand",
    name: "Attendance Updated",
    details: "Daily attendance has been updated for all classes",
    when: "May 21, 2025 – 08:45 AM",
    by: "System",
    byTone: "muted",
  },
  {
    icon: ClipboardList,
    tone: "violet",
    name: "Exam Scheduled",
    details: "Math Exam scheduled for Grade 9 on May 28, 2025",
    when: "May 20, 2025 – 04:20 PM",
    by: "Admin",
    byTone: "brand",
  },
  {
    icon: Megaphone,
    tone: "gold",
    name: "Announcement Posted",
    details: "New summer activities program has been announced",
    when: "May 20, 2025 – 02:10 PM",
    by: "Admin",
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

function AdminDashboard() {
  return (
    <DashboardShell
      items={nav}
      activeLabel="Dashboard"
      title="Admin Dashboard"
      userRole="Principal"
      userName="Ahmed Mohamed"
      userPhoto={principal}
    >
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, delta, icon: Icon, tone }) => (
          <div
            key={label}
            className={`rounded-xl border border-border p-5 shadow-card ${toneClasses[tone].card}`}
          >
            <div className="flex items-center gap-4">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${toneClasses[tone].badge}`}
              >
                <Icon className="h-6 w-6 text-white" />
              </span>
              <div>
                <div className="text-sm font-semibold text-foreground">{label}</div>
                <div className={`text-3xl font-extrabold ${toneClasses[tone].value}`}>{value}</div>
              </div>
            </div>
            <div className="mt-3 text-xs font-semibold text-success">{delta} ↑</div>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-2">
        <Panel
          icon={DollarSign}
          title="Fees Collection Overview"
          action={<Filter label="This Term" />}
        >
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
                  <Tooltip formatter={(v: number) => `EGP ${v.toLocaleString()}`} />
                </PieChart>
              </ResponsiveContainer>
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-extrabold text-brand">75%</span>
                <span className="text-xs font-semibold text-muted-foreground">Collected</span>
              </div>
            </div>
            <div>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <span className="h-3 w-3 rounded-full bg-brand" /> Fees Collected
                  </div>
                  <div className="mt-1 text-base font-bold text-foreground">
                    EGP <span className="text-brand">18,000,000</span>{" "}
                    <span className="text-xs text-muted-foreground">(75%)</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <span className="h-3 w-3 rounded-full bg-gold" /> Outstanding
                  </div>
                  <div className="mt-1 text-base font-bold text-foreground">
                    EGP <span className="text-gold">6,000,000</span>{" "}
                    <span className="text-xs text-muted-foreground">(25%)</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 border-t border-border pt-3">
                <div className="text-sm text-muted-foreground">Total Fees</div>
                <div className="text-xl font-extrabold text-brand">EGP 24,000,000</div>
              </div>
            </div>
          </div>
        </Panel>

        <Panel icon={Users} title="Attendance Trend" action={<Filter label="This Week" />}>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={attendanceData} margin={{ top: 16, right: 12, left: 0, bottom: 0 }}>
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
                <Line
                  type="linear"
                  dataKey="value"
                  stroke="var(--brand)"
                  strokeWidth={2}
                  dot={{ r: 4, fill: "white", stroke: "var(--brand)", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 text-sm font-semibold text-foreground">
            Average Attendance This Week: <span className="text-brand">90.4%</span>
          </div>
        </Panel>
      </div>

      <div className="mt-5">
        <Panel icon={FileText} title="Recent Activity">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="border-b border-border text-left text-brand">
                  <th className="px-3 py-2 font-bold">Activity</th>
                  <th className="px-3 py-2 font-bold">Details</th>
                  <th className="px-3 py-2 font-bold">Date &amp; Time</th>
                  <th className="px-3 py-2 font-bold">By</th>
                </tr>
              </thead>
              <tbody>
                {activity.map(({ icon: Icon, tone, name, details, when, by, byTone }) => (
                  <tr key={name} className="border-b border-border last:border-0">
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2 font-semibold text-foreground">
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-full ${toneClasses[tone].badge}`}
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
                        className={`rounded px-2 py-1 text-xs font-semibold ${byToneClasses[byTone]}`}
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
    </DashboardShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  CalendarCheck,
  CalendarDays,
  CreditCard,
  FileText,
  GraduationCap,
  Home,
  Mail,
  Megaphone,
  Settings,
  Sparkles,
  User,
  Wallet,
  ClipboardList,
  BarChart3,
} from "lucide-react";

import { DashboardShell, Panel, type NavItem } from "@/components/DashboardShell";
import principal from "@/assets/principal.jpg";
import student from "@/assets/student.jpg";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Student Dashboard | Ayoun Masr School" },
      {
        name: "description",
        content:
          "Parent and student dashboard with the weekly schedule, attendance, exams, term grades and fees status at Ayoun Masr School.",
      },
      { property: "og:title", content: "Student Dashboard | Ayoun Masr School" },
      {
        property: "og:description",
        content: "Schedule, attendance, exams, grades and fees for your child at Ayoun Masr.",
      },
    ],
  }),
  component: StudentDashboard,
});

const nav: NavItem[] = [
  { label: "Dashboard", icon: Home },
  { label: "Profile", icon: User },
  { label: "Schedule", icon: CalendarDays },
  { label: "Attendance", icon: CalendarCheck },
  { label: "Exams", icon: ClipboardList },
  { label: "Grades", icon: BarChart3 },
  { label: "Fees", icon: CreditCard },
  { label: "Activities", icon: Activity },
  { label: "Messages", icon: Mail },
  { label: "Announcements", icon: Megaphone },
  { label: "Settings", icon: Settings },
];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
const schedule = [
  ["8:00 - 9:00", "English", "Math", "Science", "Arabic", "Math"],
  ["9:00 - 10:00", "Math", "English", "Arabic", "Science", "English"],
  ["10:00 - 11:00", "Science", "Arabic", "Math", "English", "Arabic"],
  ["11:15 - 12:15", "Break", "Break", "Break", "Break", "Break"],
  ["12:15 - 1:15", "Arabic", "Science", "English", "Math", "Science"],
  ["1:15 - 2:15", "ICT", "P.E.", "Social Stud.", "ICT", "P.E."],
];

const exams = [
  { day: "25", month: "MAY", year: "2025", name: "Math Exam", date: "Sunday, 25 May 2025" },
  { day: "28", month: "MAY", year: "2025", name: "Science Exam", date: "Wednesday, 28 May 2025" },
  { day: "01", month: "JUN", year: "2025", name: "English Exam", date: "Sunday, 01 June 2025" },
  { day: "04", month: "JUN", year: "2025", name: "Arabic Exam", date: "Wednesday, 04 June 2025" },
];

const term1 = [
  ["Arabic", "A", "92%"],
  ["English", "A-", "90%"],
  ["Math", "A+", "95%"],
  ["Science", "A", "93%"],
  ["Social Studies", "B+", "87%"],
  ["ICT", "A", "94%"],
];
const term2 = [
  ["Arabic", "A", "93%"],
  ["English", "A", "92%"],
  ["Math", "A+", "96%"],
  ["Science", "A", "94%"],
  ["Social Studies", "A-", "91%"],
  ["ICT", "A", "95%"],
];

function GradesTable({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-hidden rounded-md border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-brand text-white">
            <th className="px-3 py-2 text-left font-bold">Subject</th>
            <th className="px-3 py-2 text-center font-bold">Grade</th>
            <th className="px-3 py-2 text-right font-bold">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([subject, grade, pct]) => (
            <tr key={subject} className="border-t border-border">
              <td className="px-3 py-2 text-foreground">{subject}</td>
              <td className="px-3 py-2 text-center font-semibold text-foreground">{grade}</td>
              <td className="px-3 py-2 text-right font-semibold text-foreground">{pct}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StudentDashboard() {
  return (
    <DashboardShell
      items={nav}
      activeLabel="Dashboard"
      userRole="Welcome,"
      userName="Ahmed's Parent"
      userPhoto={principal}
    >
      <div className="grid gap-5 xl:grid-cols-[1.15fr_1.35fr]">
        <div className="space-y-5">
          <div className="rounded-xl border-b-4 border-gold bg-brand p-6 shadow-card">
            <div className="flex items-center gap-6">
              <img
                src={student}
                alt="Omar Ahmed"
                width={640}
                height={640}
                className="h-28 w-28 rounded-full border-4 border-white/90 object-cover"
              />
              <div className="text-white">
                <h2 className="text-3xl font-extrabold">Omar Ahmed</h2>
                <p className="mt-2 flex items-center gap-2 text-sm font-semibold">
                  <User className="h-4 w-4" /> Age: 13 Years
                </p>
                <p className="mt-1 flex items-center gap-2 text-sm font-semibold">
                  <GraduationCap className="h-4 w-4" /> Class: 8 - A
                </p>
              </div>
            </div>
          </div>

          <Panel icon={CalendarDays} title="Weekly Schedule">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand text-white">
                    <th className="px-3 py-2 font-bold">Time</th>
                    {days.map((d) => (
                      <th key={d} className="px-3 py-2 font-bold">
                        {d}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row) => {
                    const isBreak = row[1] === "Break";
                    return (
                      <tr
                        key={row[0]}
                        className={`border-t border-border text-center ${isBreak ? "bg-gold-soft font-semibold" : ""}`}
                      >
                        {row.map((cell, i) => (
                          <td
                            key={i}
                            className={`px-3 py-2 ${i === 0 ? "text-muted-foreground" : "text-foreground"}`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Panel>

          <div className="grid gap-5 md:grid-cols-2">
            <Panel icon={FileText} title="Grades - Term 1">
              <GradesTable rows={term1} />
            </Panel>
            <Panel icon={FileText} title="Grades - Term 2">
              <GradesTable rows={term2} />
            </Panel>
          </div>
        </div>

        <div className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <Panel icon={CalendarCheck} title="Attendance Summary">
              <div className="flex items-center gap-4">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft">
                  <CalendarCheck className="h-8 w-8 text-brand" />
                </span>
                <div>
                  <div className="text-4xl font-extrabold text-danger">2</div>
                  <div className="text-sm font-semibold text-foreground">Days Absent</div>
                  <div className="text-xs text-muted-foreground">This Term</div>
                </div>
              </div>
            </Panel>

            <Panel icon={Sparkles} title="Summer Activities" iconTone="gold">
              <div className="grid grid-cols-2 gap-4 text-center">
                {[
                  { name: "Karate", icon: Activity },
                  { name: "Football", icon: Activity },
                ].map(({ name, icon: Icon }) => (
                  <div key={name}>
                    <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft">
                      <Icon className="h-8 w-8 text-brand" />
                    </span>
                    <div className="mt-2 text-sm font-bold text-brand">{name}</div>
                    <div className="text-xs font-semibold text-success">Enrolled</div>
                  </div>
                ))}
              </div>
            </Panel>
          </div>

          <Panel icon={FileText} title="Upcoming Exams">
            <div className="divide-y divide-border rounded-md border border-border">
              {exams.map((exam) => (
                <div key={exam.name} className="flex items-center gap-4 p-3">
                  <div className="w-14 rounded-md bg-brand py-1.5 text-center text-white">
                    <div className="text-lg font-extrabold leading-none">{exam.day}</div>
                    <div className="text-[10px] font-bold">{exam.month}</div>
                    <div className="text-[10px] opacity-80">{exam.year}</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-brand">{exam.name}</div>
                    <div className="text-xs text-muted-foreground">{exam.date}</div>
                  </div>
                  <span className="rounded border border-gold px-2 py-1 text-xs font-semibold text-gold">
                    Upcoming
                  </span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel icon={Wallet} title="Fees Status" iconTone="gold">
            <div className="rounded-md border border-border p-4">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="text-xs text-muted-foreground">Total Fees</div>
                  <div className="text-xl font-extrabold text-brand">EGP 24,000</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Paid</div>
                  <div className="text-xl font-extrabold text-success">EGP 18,000</div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full w-[75%] rounded-full bg-gold" />
                </div>
                <span className="text-sm font-bold text-foreground">75%</span>
              </div>
              <div className="mt-4">
                <div className="text-xs text-muted-foreground">Remaining Amount</div>
                <div className="text-lg font-extrabold text-danger">EGP 6,000</div>
              </div>
              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-brand py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark">
                <CreditCard className="h-4 w-4" /> View Payment History
              </button>
            </div>
          </Panel>
        </div>
      </div>
    </DashboardShell>
  );
}

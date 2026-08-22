import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  CalendarCheck,
  CalendarDays,
  CreditCard,
  FileText,
  GraduationCap,
  PersonStanding,
  Sparkles,
  User,
  Volleyball,
  Wallet,
} from "lucide-react";

import { GradesTable, Panel } from "@/components/DashboardShell";
import { days, exams, schedule, term1, term2 } from "@/lib/data";
import student from "@/assets/student.jpg";

export const Route = createFileRoute("/dashboard/")({
  head: () => ({
    meta: [{ title: "لوحة الطالب | مدرسة عيون مصر" }],
  }),
  component: StudentDashboardHome,
});

function StudentDashboardHome() {
  return (
    <div className="grid gap-5 xl:grid-cols-[1.15fr_1.35fr]">
      <div className="space-y-5">
        <div className="rounded-xl border-b-4 border-gold bg-brand p-6 shadow-card">
          <div className="flex items-center gap-6">
            <img
              src={student}
              alt="عمر أحمد"
              width={640}
              height={640}
              className="h-28 w-28 rounded-full border-4 border-white/90 object-cover"
            />
            <div className="text-white">
              <h2 className="text-3xl font-extrabold">عمر أحمد</h2>
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold">
                <User className="h-4 w-4" /> العمر: ١٣ سنة
              </p>
              <p className="mt-1 flex items-center gap-2 text-sm font-semibold">
                <GraduationCap className="h-4 w-4" /> الصف: الثامن - أ
              </p>
            </div>
          </div>
        </div>

        <Panel icon={CalendarDays} title="الجدول الأسبوعي">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand text-white">
                  <th className="px-3 py-2 font-bold">الوقت</th>
                  {days.map((d) => (
                    <th key={d} className="px-3 py-2 font-bold">
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {schedule.map((row) => {
                  const isBreak = row[1] === "استراحة";
                  return (
                    <tr
                      key={row[0]}
                      className={`border-t border-border text-center ${isBreak ? "bg-gold-soft font-semibold" : ""}`}
                    >
                      {row.map((cell, i) => (
                        <td
                          key={i}
                          className={`whitespace-nowrap px-3 py-2 ${i === 0 ? "text-muted-foreground" : "text-foreground"}`}
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
          <Panel icon={FileText} title="الدرجات - الفصل الأول">
            <GradesTable rows={term1} />
          </Panel>
          <Panel icon={FileText} title="الدرجات - الفصل الثاني">
            <GradesTable rows={term2} />
          </Panel>
        </div>
      </div>

      <div className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <Panel icon={CalendarCheck} title="ملخص الحضور">
            <div className="flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft">
                <CalendarCheck className="h-8 w-8 text-brand" />
              </span>
              <div>
                <div className="text-4xl font-extrabold text-danger">٢</div>
                <div className="text-sm font-semibold text-foreground">أيام غياب</div>
                <div className="text-xs text-muted-foreground">هذا الفصل</div>
              </div>
            </div>
          </Panel>

          <Panel icon={Sparkles} title="الأنشطة الصيفية" iconTone="gold">
            <div className="grid grid-cols-2 gap-4 text-center">
              {[
                { name: "كاراتيه", icon: PersonStanding },
                { name: "كرة القدم", icon: Volleyball },
              ].map(({ name, icon: Icon }) => (
                <div key={name}>
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft">
                    <Icon className="h-8 w-8 text-brand" />
                  </span>
                  <div className="mt-2 text-sm font-bold text-brand">{name}</div>
                  <div className="text-xs font-semibold text-success">مسجل</div>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <Panel icon={FileText} title="الامتحانات القادمة">
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
                  قادم
                </span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel icon={Wallet} title="حالة الرسوم" iconTone="gold">
          <div className="rounded-md border border-border p-4">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="text-xs text-muted-foreground">إجمالي الرسوم</div>
                <div className="text-xl font-extrabold text-brand">٢٤٬٠٠٠ جنيه</div>
              </div>
              <div className="text-left">
                <div className="text-xs text-muted-foreground">المدفوع</div>
                <div className="text-xl font-extrabold text-success">١٨٬٠٠٠ جنيه</div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-[75%] rounded-full bg-gold" />
              </div>
              <span className="text-sm font-bold text-foreground">٧٥٪</span>
            </div>
            <div className="mt-4">
              <div className="text-xs text-muted-foreground">المبلغ المتبقي</div>
              <div className="text-lg font-extrabold text-danger">٦٬٠٠٠ جنيه</div>
            </div>
            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-brand py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark">
              <CreditCard className="h-4 w-4" /> عرض سجل المدفوعات
            </button>
          </div>
        </Panel>
      </div>
    </div>
  );
}

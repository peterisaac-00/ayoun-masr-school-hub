import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays } from "lucide-react";

import { PageHeader, Panel } from "@/components/DashboardShell";
import { days, schedule } from "@/lib/data";

export const Route = createFileRoute("/dashboard/schedule")({
  head: () => ({ meta: [{ title: "الجدول الدراسي | مدرسة عيون مصر" }] }),
  component: SchedulePage,
});

function SchedulePage() {
  return (
    <div>
      <PageHeader title="الجدول الدراسي" description="جدول الحصص الأسبوعي للفصل الدراسي الحالي" />
      <Panel icon={CalendarDays} title="الأسبوع الدراسي">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-brand text-white">
                <th className="px-4 py-3 font-bold">الوقت</th>
                {days.map((d) => (
                  <th key={d} className="px-4 py-3 font-bold">
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
                        className={`whitespace-nowrap px-4 py-3 ${i === 0 ? "text-muted-foreground" : "text-foreground"}`}
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
    </div>
  );
}

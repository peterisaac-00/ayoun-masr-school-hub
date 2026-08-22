import { createFileRoute } from "@tanstack/react-router";
import { ClipboardList } from "lucide-react";

import { PageHeader, Panel } from "@/components/DashboardShell";
import { exams } from "@/lib/data";

export const Route = createFileRoute("/dashboard/exams")({
  head: () => ({ meta: [{ title: "الامتحانات | مدرسة عيون مصر" }] }),
  component: ExamsPage,
});

function ExamsPage() {
  return (
    <div>
      <PageHeader title="الامتحانات" description="جدول الامتحانات القادمة والسابقة" />
      <Panel icon={ClipboardList} title="الامتحانات القادمة">
        <div className="divide-y divide-border rounded-md border border-border">
          {exams.map((exam) => (
            <div key={exam.name} className="flex items-center gap-4 p-4">
              <div className="w-16 rounded-md bg-brand py-2 text-center text-white">
                <div className="text-xl font-extrabold leading-none">{exam.day}</div>
                <div className="text-[11px] font-bold">{exam.month}</div>
                <div className="text-[10px] opacity-80">{exam.year}</div>
              </div>
              <div className="flex-1">
                <div className="text-base font-bold text-brand">{exam.name}</div>
                <div className="text-sm text-muted-foreground">{exam.date}</div>
              </div>
              <span className="rounded border border-gold px-3 py-1.5 text-xs font-semibold text-gold">
                قادم
              </span>
            </div>
          ))}
        </div>
      </Panel>
      <div className="mt-5 rounded-xl border border-border bg-brand-soft/50 p-5">
        <h3 className="font-bold text-brand">نصائح للتحضير</h3>
        <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-muted-foreground">
          <li>راجع ملخصات الدروس قبل موعد الامتحان بـ ٣ أيام</li>
          <li>احرص على النوم الكافي ليلة الامتحان</li>
          <li>تأكد من إحضار جميع الأدوات المطلوبة</li>
        </ul>
      </div>
    </div>
  );
}

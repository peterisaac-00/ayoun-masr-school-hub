import { createFileRoute } from "@tanstack/react-router";
import { Activity, Palette, PersonStanding, Volleyball, Bot } from "lucide-react";

import { PageHeader, Panel, StatusBadge } from "@/components/DashboardShell";
import { activities } from "@/lib/data";

export const Route = createFileRoute("/dashboard/activities")({
  head: () => ({ meta: [{ title: "الأنشطة | مدرسة عيون مصر" }] }),
  component: ActivitiesPage,
});

const iconMap = {
  karate: PersonStanding,
  football: Volleyball,
  art: Palette,
  robot: Bot,
};

function ActivitiesPage() {
  return (
    <div>
      <PageHeader title="الأنشطة" description="الأنشطة اللاصفية والبرامج الصيفية" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
        {activities.map((act) => {
          const Icon = iconMap[act.icon as keyof typeof iconMap] ?? Activity;
          return (
            <Panel key={act.name} icon={Icon} title={act.name}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">الموعد</div>
                  <div className="mt-1 font-semibold text-foreground">{act.schedule}</div>
                </div>
                <StatusBadge
                  status={act.status}
                  variant={act.status === "مسجل" ? "success" : "gold"}
                />
              </div>
              {act.status === "متاح" ? (
                <button className="mt-4 w-full rounded-lg bg-brand py-2.5 text-sm font-bold text-white hover:bg-brand-dark">
                  التسجيل
                </button>
              ) : null}
            </Panel>
          );
        })}
      </div>
    </div>
  );
}

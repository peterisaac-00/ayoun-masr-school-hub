import { createFileRoute } from "@tanstack/react-router";
import { Megaphone } from "lucide-react";

import { PageHeader, Panel, StatusBadge } from "@/components/DashboardShell";
import { announcements } from "@/lib/data";

export const Route = createFileRoute("/dashboard/announcements")({
  head: () => ({ meta: [{ title: "الإعلانات | مدرسة عيون مصر" }] }),
  component: AnnouncementsPage,
});

function AnnouncementsPage() {
  return (
    <div>
      <PageHeader title="الإعلانات" description="آخر الأخبار والإعلانات من المدرسة" />
      <div className="space-y-4">
        {announcements.map((item) => (
          <Panel key={item.title} icon={Megaphone} title={item.title}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              <div className="flex items-center gap-2">
                <StatusBadge status={item.tag} variant="gold" />
                <span className="text-xs text-muted-foreground">{item.date}</span>
              </div>
            </div>
          </Panel>
        ))}
      </div>
    </div>
  );
}

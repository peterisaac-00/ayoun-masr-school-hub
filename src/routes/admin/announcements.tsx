import { createFileRoute } from "@tanstack/react-router";
import { Megaphone } from "lucide-react";

import { PageHeader, Panel, StatusBadge } from "@/components/DashboardShell";
import { announcements } from "@/lib/data";

export const Route = createFileRoute("/admin/announcements")({
  head: () => ({ meta: [{ title: "الإعلانات | مدرسة عيون مصر" }] }),
  component: AdminAnnouncementsPage,
});

function AdminAnnouncementsPage() {
  return (
    <div>
      <PageHeader title="إدارة الإعلانات" description="نشر ومتابعة إعلانات المدرسة" />
      <button className="mb-5 rounded-lg bg-brand px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-dark">
        + إعلان جديد
      </button>
      <div className="space-y-4">
        {announcements.map((item) => (
          <Panel key={item.title} icon={Megaphone} title={item.title}>
            <p className="text-sm text-muted-foreground">{item.body}</p>
            <div className="mt-3 flex items-center gap-2">
              <StatusBadge status={item.tag} variant="gold" />
              <span className="text-xs text-muted-foreground">{item.date}</span>
            </div>
          </Panel>
        ))}
      </div>
    </div>
  );
}

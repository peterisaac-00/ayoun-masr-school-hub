import { createFileRoute, Outlet } from "@tanstack/react-router";

import { DashboardShell } from "@/components/DashboardShell";
import { adminNav } from "@/lib/nav";
import principal from "@/assets/principal.jpg";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <DashboardShell
      items={adminNav}
      title="لوحة تحكم الإدارة"
      userRole="مدير المدرسة"
      userName="أحمد محمد"
      userPhoto={principal}
    >
      <Outlet />
    </DashboardShell>
  );
}

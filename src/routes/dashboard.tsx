import { createFileRoute, Outlet } from "@tanstack/react-router";

import { DashboardShell } from "@/components/DashboardShell";
import { studentNav } from "@/lib/nav";
import principal from "@/assets/principal.jpg";

export const Route = createFileRoute("/dashboard")({
  component: StudentLayout,
});

function StudentLayout() {
  return (
    <DashboardShell
      items={studentNav}
      userRole="مرحباً،"
      userName="ولي أمر عمر"
      userPhoto={principal}
    >
      <Outlet />
    </DashboardShell>
  );
}

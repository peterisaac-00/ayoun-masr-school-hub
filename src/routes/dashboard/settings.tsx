import { createFileRoute } from "@tanstack/react-router";
import { Bell, Lock, Settings, User } from "lucide-react";

import { PageHeader, Panel } from "@/components/DashboardShell";

export const Route = createFileRoute("/dashboard/settings")({
  head: () => ({ meta: [{ title: "الإعدادات | مدرسة عيون مصر" }] }),
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <div>
      <PageHeader title="الإعدادات" description="إدارة الحساب وتفضيلات الإشعارات" />
      <div className="grid gap-5 lg:grid-cols-2">
        <Panel icon={User} title="الحساب">
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-foreground">الاسم</label>
              <input
                defaultValue="ولي أمر عمر"
                className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-brand"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-foreground">البريد الإلكتروني</label>
              <input
                defaultValue="parent@ayounmasr.edu.eg"
                type="email"
                className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-brand"
              />
            </div>
            <button className="rounded-lg bg-brand px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-dark">
              حفظ التغييرات
            </button>
          </div>
        </Panel>
        <Panel icon={Lock} title="الأمان">
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-foreground">كلمة المرور الحالية</label>
              <input
                type="password"
                defaultValue="••••••••"
                className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-brand"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-foreground">كلمة المرور الجديدة</label>
              <input
                type="password"
                className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-brand"
              />
            </div>
            <button className="rounded-lg border border-brand px-6 py-2.5 text-sm font-bold text-brand hover:bg-brand-soft">
              تحديث كلمة المرور
            </button>
          </div>
        </Panel>
        <Panel icon={Bell} title="الإشعارات" className="lg:col-span-2">
          <div className="space-y-3">
            {[
              "إشعارات الامتحانات",
              "تنبيهات الحضور والغياب",
              "رسائل المعلمين",
              "إعلانات المدرسة",
            ].map((label) => (
              <label key={label} className="flex items-center justify-between rounded-lg border border-border p-4">
                <span className="text-sm font-semibold text-foreground">{label}</span>
                <input type="checkbox" defaultChecked className="h-4 w-4 accent-brand" />
              </label>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Bell, Lock, Settings, Shield } from "lucide-react";

import { PageHeader, Panel } from "@/components/DashboardShell";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({ meta: [{ title: "الإعدادات | مدرسة عيون مصر" }] }),
  component: AdminSettingsPage,
});

function AdminSettingsPage() {
  return (
    <div>
      <PageHeader title="إعدادات النظام" description="إدارة حساب المدير وإعدادات المدرسة" />
      <div className="grid gap-5 lg:grid-cols-2">
        <Panel icon={Settings} title="معلومات المدرسة">
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold">اسم المدرسة</label>
              <input
                defaultValue="مدرسة عيون مصر"
                className="mt-1 w-full rounded-lg border border-input px-3 py-2.5 text-sm outline-none focus:border-brand"
              />
            </div>
            <div>
              <label className="text-xs font-bold">العنوان</label>
              <input
                defaultValue="٦ أكتوبر، الجيزة، مصر"
                className="mt-1 w-full rounded-lg border border-input px-3 py-2.5 text-sm outline-none focus:border-brand"
              />
            </div>
            <div>
              <label className="text-xs font-bold">رقم الهاتف</label>
              <input
                defaultValue="٠٢-٣٨٣٥٢٣٩٩"
                className="mt-1 w-full rounded-lg border border-input px-3 py-2.5 text-sm outline-none focus:border-brand"
              />
            </div>
            <button className="rounded-lg bg-brand px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-dark">
              حفظ
            </button>
          </div>
        </Panel>
        <Panel icon={Lock} title="الأمان">
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold">كلمة المرور الحالية</label>
              <input type="password" defaultValue="••••••••" className="mt-1 w-full rounded-lg border border-input px-3 py-2.5 text-sm outline-none focus:border-brand" />
            </div>
            <div>
              <label className="text-xs font-bold">كلمة المرور الجديدة</label>
              <input type="password" className="mt-1 w-full rounded-lg border border-input px-3 py-2.5 text-sm outline-none focus:border-brand" />
            </div>
            <button className="rounded-lg border border-brand px-6 py-2.5 text-sm font-bold text-brand hover:bg-brand-soft">
              تحديث
            </button>
          </div>
        </Panel>
        <Panel icon={Shield} title="صلاحيات المستخدمين" className="lg:col-span-2">
          <div className="space-y-3">
            {["المعلمون", "أولياء الأمور", "الموظفون الإداريون"].map((role) => (
              <label key={role} className="flex items-center justify-between rounded-lg border border-border p-4">
                <span className="text-sm font-semibold">{role}</span>
                <input type="checkbox" defaultChecked className="h-4 w-4 accent-brand" />
              </label>
            ))}
          </div>
        </Panel>
        <Panel icon={Bell} title="إشعارات النظام" className="lg:col-span-2">
          <div className="space-y-3">
            {["تنبيهات الحضور", "تقارير الرسوم", "طلبات التسجيل", "رسائل أولياء الأمور"].map(
              (label) => (
                <label key={label} className="flex items-center justify-between rounded-lg border border-border p-4">
                  <span className="text-sm font-semibold">{label}</span>
                  <input type="checkbox" defaultChecked className="h-4 w-4 accent-brand" />
                </label>
              ),
            )}
          </div>
        </Panel>
      </div>
    </div>
  );
}

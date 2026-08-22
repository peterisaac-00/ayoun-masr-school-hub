import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Mail, MapPin, Phone, User } from "lucide-react";

import { PageHeader, Panel } from "@/components/DashboardShell";
import { studentInfo } from "@/lib/data";
import student from "@/assets/student.jpg";

export const Route = createFileRoute("/dashboard/profile")({
  head: () => ({ meta: [{ title: "الملف الشخصي | مدرسة عيون مصر" }] }),
  component: ProfilePage,
});

function ProfilePage() {
  const fields = [
    { label: "رقم الطالب", value: studentInfo.studentId, icon: GraduationCap },
    { label: "البريد الإلكتروني", value: studentInfo.email, icon: Mail },
    { label: "رقم الهاتف", value: studentInfo.phone, icon: Phone },
    { label: "العنوان", value: studentInfo.address, icon: MapPin },
    { label: "فصيلة الدم", value: studentInfo.bloodType, icon: User },
    { label: "جهة اتصال الطوارئ", value: studentInfo.emergencyContact, icon: Phone },
  ];

  return (
    <div>
      <PageHeader title="الملف الشخصي" description="معلومات الطالب وبيانات التواصل" />
      <div className="grid gap-5 lg:grid-cols-[1fr_1.5fr]">
        <Panel icon={User} title="بيانات الطالب">
          <div className="flex flex-col items-center text-center">
            <img
              src={student}
              alt={studentInfo.name}
              className="h-32 w-32 rounded-full border-4 border-brand-soft object-cover"
            />
            <h3 className="mt-4 text-2xl font-extrabold text-brand">{studentInfo.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{studentInfo.class}</p>
            <p className="mt-1 text-sm font-semibold text-foreground">{studentInfo.age}</p>
          </div>
        </Panel>
        <Panel icon={User} title="التفاصيل">
          <div className="grid gap-4 sm:grid-cols-2">
            {fields.map(({ label, value, icon: Icon }) => (
              <div key={label} className="rounded-lg border border-border p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-brand">
                  <Icon className="h-4 w-4" />
                  {label}
                </div>
                <div className="mt-2 text-sm font-semibold text-foreground">{value}</div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}

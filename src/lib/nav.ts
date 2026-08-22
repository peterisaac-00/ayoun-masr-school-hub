import {
  Activity,
  BarChart3,
  CalendarCheck,
  CalendarDays,
  ClipboardList,
  CreditCard,
  FileText,
  GraduationCap,
  Home,
  Mail,
  Megaphone,
  School,
  Settings,
  User,
  UserCog,
  Users,
} from "lucide-react";

import type { NavItem } from "@/components/DashboardShell";

export const studentNav: NavItem[] = [
  { label: "لوحة التحكم", icon: Home, to: "/dashboard" },
  { label: "الملف الشخصي", icon: User, to: "/dashboard/profile" },
  { label: "الجدول الدراسي", icon: CalendarDays, to: "/dashboard/schedule" },
  { label: "الحضور", icon: CalendarCheck, to: "/dashboard/attendance" },
  { label: "الامتحانات", icon: ClipboardList, to: "/dashboard/exams" },
  { label: "الدرجات", icon: BarChart3, to: "/dashboard/grades" },
  { label: "الرسوم", icon: CreditCard, to: "/dashboard/fees" },
  { label: "الأنشطة", icon: Activity, to: "/dashboard/activities" },
  { label: "الرسائل", icon: Mail, to: "/dashboard/messages" },
  { label: "الإعلانات", icon: Megaphone, to: "/dashboard/announcements" },
  { label: "الإعدادات", icon: Settings, to: "/dashboard/settings" },
];

export const adminNav: NavItem[] = [
  { label: "لوحة التحكم", icon: Home, to: "/admin" },
  { label: "الطلاب", icon: Users, to: "/admin/students", sub: true },
  { label: "المعلمون", icon: UserCog, to: "/admin/teachers", sub: true },
  { label: "الفصول", icon: School, to: "/admin/classes" },
  { label: "الحضور", icon: CalendarCheck, to: "/admin/attendance", sub: true },
  { label: "الامتحانات", icon: ClipboardList, to: "/admin/exams" },
  { label: "الدرجات", icon: BarChart3, to: "/admin/grades" },
  { label: "الرسوم", icon: CreditCard, to: "/admin/fees", sub: true },
  { label: "الأنشطة", icon: Activity, to: "/admin/activities" },
  { label: "التقارير", icon: FileText, to: "/admin/reports", sub: true },
  { label: "الإعلانات", icon: Megaphone, to: "/admin/announcements" },
  { label: "الرسائل", icon: Mail, to: "/admin/messages" },
  { label: "الإعدادات", icon: Settings, to: "/admin/settings" },
];

export const adminStats = [
  {
    label: "إجمالي الطلاب",
    value: "١٬٢٤٨",
    delta: "+٣٥ هذا الشهر",
    icon: Users,
    tone: "brand" as const,
  },
  {
    label: "إجمالي المعلمين",
    value: "٨٥",
    delta: "+٣ هذا الشهر",
    icon: GraduationCap,
    tone: "gold" as const,
  },
  {
    label: "حضور اليوم",
    value: "٩٢٫٤٪",
    delta: "+٢٫٦٪ عن أمس",
    icon: CalendarCheck,
    tone: "success" as const,
  },
  {
    label: "نسبة تحصيل الرسوم",
    value: "٧٥٪",
    delta: "+٥٪ عن الشهر الماضي",
    icon: CreditCard,
    tone: "violet" as const,
  },
];

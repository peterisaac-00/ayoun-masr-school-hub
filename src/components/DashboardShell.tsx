import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { ChevronDown, ChevronLeft, LogOut, Menu } from "lucide-react";
import { useState } from "react";
import type { ComponentType, ReactNode } from "react";

import { Logo } from "./Logo";
import { Sheet, SheetContent, SheetTitle } from "./ui/sheet";

export type NavItem = {
  label: string;
  icon: ComponentType<{ className?: string }>;
  to: string;
  sub?: boolean;
};

export function DashboardShell({
  items,
  title,
  userRole,
  userName,
  userPhoto,
  children,
}: {
  items: NavItem[];
  title?: string;
  userRole: string;
  userName: string;
  userPhoto: string;
  children: ReactNode;
}) {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (to: string) => {
    if (to === "/dashboard" || to === "/admin") return pathname === to;
    return pathname === to || pathname.startsWith(`${to}/`);
  };

  const navLinks = (onNavigate?: () => void) => (
    <>
      {items.map((item) => {
        const active = isActive(item.to);
        const Icon = item.icon;
        return (
          <Link
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 text-[15px] font-semibold transition-colors ${
              active
                ? "bg-gold text-brand-dark"
                : "text-white/85 hover:bg-brand-light/50 hover:text-white"
            }`}
          >
            <Icon className="h-5 w-5" />
            <span className="flex-1">{item.label}</span>
            {item.sub ? <ChevronLeft className="h-4 w-4 opacity-70" /> : null}
          </Link>
        );
      })}
    </>
  );

  return (
    <div className="flex min-h-screen bg-brand-soft/60 font-arabic">
      <aside className="fixed inset-y-0 right-0 hidden w-64 flex-col bg-brand px-4 py-6 lg:flex">
        <div className="px-2">
          <Logo variant="light" />
        </div>
        <nav className="mt-8 flex-1 space-y-1">{navLinks()}</nav>
        <button
          onClick={() => navigate({ to: "/", replace: true })}
          className="mt-6 flex items-center gap-3 border-t border-white/15 px-4 pt-5 text-[15px] font-semibold text-white/85 transition-colors hover:text-gold"
        >
          <LogOut className="h-5 w-5" />
          تسجيل الخروج
        </button>
      </aside>

      <div className="flex min-h-screen flex-1 flex-col lg:mr-64">
        <header className="flex items-center justify-between gap-4 border-b border-border bg-card px-6 py-4">
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-lg p-2 text-brand hover:bg-brand-soft"
              aria-label="فتح القائمة"
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          {title ? (
            <h1 className="hidden flex-1 text-center text-2xl font-extrabold text-brand lg:block">
              {title}
            </h1>
          ) : (
            <div className="hidden flex-1 lg:block" />
          )}
          <div className="flex items-center gap-3">
            <img
              src={userPhoto}
              alt={userName}
              width={48}
              height={48}
              className="h-11 w-11 rounded-full object-cover ring-2 ring-brand-soft"
            />
            <div className="leading-tight">
              <div className="text-xs text-muted-foreground">{userRole}</div>
              <div className="text-sm font-bold text-brand">{userName}</div>
            </div>
            <ChevronDown className="h-4 w-4 text-brand" />
          </div>
        </header>

        <main className="flex-1 p-6">{children}</main>

        <footer className="border-t border-border bg-card px-6 py-5 text-center text-sm text-muted-foreground">
          © ٢٠٢٥ مدرسة عيون مصر. جميع الحقوق محفوظة.
        </footer>
      </div>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="right" className="flex w-64 flex-col border-0 bg-brand p-4 font-arabic">
          <SheetTitle className="sr-only">القائمة</SheetTitle>
          <div className="px-2 pt-2">
            <Logo variant="light" />
          </div>
          <nav className="mt-8 flex-1 space-y-1">{navLinks(() => setMobileOpen(false))}</nav>
          <button
            onClick={() => navigate({ to: "/", replace: true })}
            className="mt-6 flex items-center gap-3 border-t border-white/15 px-4 pt-5 text-[15px] font-semibold text-white/85 transition-colors hover:text-gold"
          >
            <LogOut className="h-5 w-5" />
            تسجيل الخروج
          </button>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export function Panel({
  icon: Icon,
  title,
  iconTone = "brand",
  action,
  className = "",
  children,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  iconTone?: "brand" | "gold";
  action?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={`rounded-xl border border-border bg-card p-5 shadow-card ${className}`}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Icon className={`h-5 w-5 ${iconTone === "gold" ? "text-gold" : "text-brand"}`} />
          <h2 className="text-lg font-extrabold text-brand">{title}</h2>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

export function GradesTable({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-hidden rounded-md border border-border">
      <table className="w-full table-fixed text-xs">
        <thead>
          <tr className="bg-brand text-white">
            <th className="px-2 py-2 text-right font-bold">المادة</th>
            <th className="w-16 px-2 py-2 text-center font-bold">التقدير</th>
            <th className="w-24 px-2 py-2 text-left font-bold">النسبة</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([subject, grade, pct]) => (
            <tr key={subject} className="border-t border-border">
              <td className="px-2 py-2 text-foreground">{subject}</td>
              <td className="px-2 py-2 text-center font-semibold text-foreground">{grade}</td>
              <td className="px-2 py-2 text-left font-semibold text-foreground">{pct}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function StatusBadge({
  status,
  variant = "default",
}: {
  status: string;
  variant?: "default" | "success" | "danger" | "gold" | "muted";
}) {
  const classes = {
    default: "border-brand text-brand",
    success: "border-success text-success bg-success-soft",
    danger: "border-danger text-danger bg-danger/10",
    gold: "border-gold text-gold bg-gold-soft",
    muted: "border-border text-muted-foreground bg-secondary",
  };
  return (
    <span
      className={`rounded border px-2 py-1 text-xs font-semibold ${classes[variant] ?? classes.default}`}
    >
      {status}
    </span>
  );
}

export function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-extrabold text-brand">{title}</h2>
      {description ? <p className="mt-1 text-sm text-muted-foreground">{description}</p> : null}
    </div>
  );
}
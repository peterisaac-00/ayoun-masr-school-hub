import { Link, useNavigate } from "@tanstack/react-router";
import { ChevronDown, ChevronRight, LogOut } from "lucide-react";
import type { ComponentType, ReactNode } from "react";

import { Logo } from "./Logo";

export type NavItem = { label: string; icon: ComponentType<{ className?: string }>; sub?: boolean };

export function DashboardShell({
  items,
  activeLabel,
  title,
  userRole,
  userName,
  userPhoto,
  children,
}: {
  items: NavItem[];
  activeLabel: string;
  title?: string;
  userRole: string;
  userName: string;
  userPhoto: string;
  children: ReactNode;
}) {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-brand-soft/60">
      <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col bg-brand px-4 py-6 lg:flex">
        <div className="px-2">
          <Logo variant="light" />
        </div>
        <nav className="mt-8 flex-1 space-y-1">
          {items.map((item) => {
            const active = item.label === activeLabel;
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-[15px] font-semibold transition-colors ${
                  active
                    ? "bg-gold text-brand-dark"
                    : "text-white/85 hover:bg-brand-light/50 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="flex-1">{item.label}</span>
                {item.sub ? <ChevronRight className="h-4 w-4 opacity-70" /> : null}
              </div>
            );
          })}
        </nav>
        <button
          onClick={() => navigate({ to: "/", replace: true })}
          className="mt-6 flex items-center gap-3 border-t border-white/15 px-4 pt-5 text-[15px] font-semibold text-white/85 transition-colors hover:text-gold"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </aside>

      <div className="flex min-h-screen flex-1 flex-col lg:ml-64">
        <header className="flex items-center justify-between gap-4 border-b border-border bg-card px-6 py-4">
          <Link to="/" className="lg:hidden">
            <Logo />
          </Link>
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
          © 2025 Ayoun Masr School. All rights reserved.
        </footer>
      </div>
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
    <section
      className={`rounded-xl border border-border bg-card p-5 shadow-card ${className}`}
    >
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

import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ShieldCheck, Users } from "lucide-react";
import { useState } from "react";

import { Logo } from "@/components/Logo";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "تسجيل الدخول | بوابة مدرسة عيون مصر" },
      {
        name: "description",
        content:
          "سجّل الدخول إلى بوابة مدرسة عيون مصر كطالب أو ولي أمر أو مدير لعرض الجداول والدرجات والتقارير.",
      },
      { property: "og:title", content: "تسجيل الدخول | بوابة مدرسة عيون مصر" },
      {
        property: "og:description",
        content: "الوصول إلى بوابة مدرسة عيون مصر للطلاب وأولياء الأمور والإدارة.",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState<"parent" | "admin">("parent");

  const roles = [
    { key: "parent" as const, label: "طالب / ولي أمر", icon: Users, hint: "parent@ayounmasr.edu.eg" },
    { key: "admin" as const, label: "إدارة", icon: ShieldCheck, hint: "admin@ayounmasr.edu.eg" },
  ];
  const current = roles.find((r) => r.key === role)!;

  return (
    <div className="flex min-h-screen flex-col bg-brand-soft/60 font-arabic">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link to="/">
            <Logo />
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md rounded-xl border border-border bg-card p-7 shadow-card">
          <h1 className="text-center text-2xl font-extrabold text-brand">تسجيل الدخول</h1>
          <p className="mt-1 text-center text-sm text-muted-foreground">
            اختر نوع حسابك للمتابعة
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {roles.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setRole(key)}
                className={`flex flex-col items-center gap-2 rounded-lg border-2 px-3 py-4 text-sm font-bold transition-colors ${
                  role === key
                    ? "border-gold bg-gold-soft text-brand"
                    : "border-border bg-card text-muted-foreground hover:border-brand-light"
                }`}
              >
                <Icon className="h-6 w-6" />
                {label}
              </button>
            ))}
          </div>

          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ to: role === "admin" ? "/admin" : "/dashboard" });
            }}
          >
            <div>
              <label className="text-xs font-bold text-foreground" htmlFor="email">
                البريد الإلكتروني
              </label>
              <input
                id="email"
                type="email"
                defaultValue={current.hint}
                key={current.hint}
                dir="ltr"
                className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-brand"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-foreground" htmlFor="password">
                كلمة المرور
              </label>
              <input
                id="password"
                type="password"
                defaultValue="demo1234"
                dir="ltr"
                className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-brand"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-brand py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
            >
              الدخول كـ {current.label}
            </button>
            <p className="text-center text-xs text-muted-foreground">
              نموذج تجريبي — أي بيانات دخول ستعمل.
            </p>
          </form>
        </div>
      </main>

      <footer className="border-t border-border bg-card px-6 py-5 text-center text-sm text-muted-foreground">
        © ٢٠٢٥ مدرسة عيون مصر. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
}

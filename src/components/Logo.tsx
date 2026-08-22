import { GraduationCap } from "lucide-react";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isLight = variant === "light";
  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl border-2 ${
          isLight ? "border-gold bg-brand-dark" : "border-gold bg-brand"
        }`}
      >
        <GraduationCap className="h-6 w-6 text-gold" strokeWidth={2.2} />
      </div>
      <div className="leading-tight">
        <div
          className={`text-lg font-extrabold tracking-tight ${isLight ? "text-white" : "text-brand"}`}
        >
          عيون مصر
        </div>
        <div className={`text-xs font-semibold ${isLight ? "text-white/70" : "text-muted-foreground"}`}>
          مدرسة عيون مصر
        </div>
      </div>
    </div>
  );
}

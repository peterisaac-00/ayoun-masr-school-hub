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
          Ayoun Masr
        </div>
        <div className="font-arabic text-base font-bold text-gold">عيون مصر</div>
      </div>
    </div>
  );
}

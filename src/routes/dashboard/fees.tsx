import { createFileRoute } from "@tanstack/react-router";
import { CreditCard, Wallet } from "lucide-react";

import { PageHeader, Panel, StatusBadge } from "@/components/DashboardShell";
import { feePayments } from "@/lib/data";

export const Route = createFileRoute("/dashboard/fees")({
  head: () => ({ meta: [{ title: "الرسوم | مدرسة عيون مصر" }] }),
  component: FeesPage,
});

function FeesPage() {
  return (
    <div>
      <PageHeader title="الرسوم الدراسية" description="تفاصيل الرسوم وسجل المدفوعات" />
      <Panel icon={Wallet} title="ملخص الرسوم" iconTone="gold">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="text-xs text-muted-foreground">إجمالي الرسوم</div>
            <div className="text-2xl font-extrabold text-brand">٢٤٬٠٠٠ جنيه</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">المدفوع</div>
            <div className="text-2xl font-extrabold text-success">١٨٬٠٠٠ جنيه</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">المتبقي</div>
            <div className="text-2xl font-extrabold text-danger">٦٬٠٠٠ جنيه</div>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-3">
          <div className="h-3 flex-1 overflow-hidden rounded-full bg-secondary">
            <div className="h-full w-[75%] rounded-full bg-gold" />
          </div>
          <span className="text-sm font-bold">٧٥٪ مدفوع</span>
        </div>
      </Panel>
      <div className="mt-5">
        <Panel icon={CreditCard} title="سجل المدفوعات">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-brand">
                  <th className="px-3 py-2 text-right font-bold">التاريخ</th>
                  <th className="px-3 py-2 text-right font-bold">المبلغ</th>
                  <th className="px-3 py-2 text-right font-bold">طريقة الدفع</th>
                  <th className="px-3 py-2 text-right font-bold">الحالة</th>
                </tr>
              </thead>
              <tbody>
                {feePayments.map((p) => (
                  <tr key={p.date} className="border-b border-border last:border-0">
                    <td className="px-3 py-3 font-semibold">{p.date}</td>
                    <td className="px-3 py-3">{p.amount}</td>
                    <td className="px-3 py-3 text-muted-foreground">{p.method}</td>
                    <td className="px-3 py-3">
                      <StatusBadge
                        status={p.status}
                        variant={p.status === "مدفوع" ? "success" : "danger"}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>
    </div>
  );
}

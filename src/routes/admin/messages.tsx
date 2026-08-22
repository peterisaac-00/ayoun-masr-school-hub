import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";

import { PageHeader, Panel } from "@/components/DashboardShell";
import { messages } from "@/lib/data";

export const Route = createFileRoute("/admin/messages")({
  head: () => ({ meta: [{ title: "الرسائل | مدرسة عيون مصر" }] }),
  component: AdminMessagesPage,
});

function AdminMessagesPage() {
  return (
    <div>
      <PageHeader title="الرسائل" description="مراسلات المعلمين وأولياء الأمور" />
      <Panel icon={Mail} title="صندوق الوارد">
        <div className="divide-y divide-border">
          {messages.map((msg) => (
            <div key={msg.subject} className="flex gap-4 p-4 hover:bg-brand-soft/30">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                {msg.from.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="font-semibold text-foreground">{msg.from}</span>
                  <span className="text-xs text-muted-foreground">{msg.date}</span>
                </div>
                <div className="mt-1 text-sm font-bold text-brand">{msg.subject}</div>
                <p className="mt-1 text-xs text-muted-foreground">{msg.preview}</p>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";

import { PageHeader, Panel } from "@/components/DashboardShell";
import { messages } from "@/lib/data";

export const Route = createFileRoute("/dashboard/messages")({
  head: () => ({ meta: [{ title: "الرسائل | مدرسة عيون مصر" }] }),
  component: MessagesPage,
});

function MessagesPage() {
  return (
    <div>
      <PageHeader title="الرسائل" description="رسائل المعلمين وإدارة المدرسة" />
      <Panel icon={Mail} title="صندوق الوارد">
        <div className="divide-y divide-border">
          {messages.map((msg) => (
            <div
              key={msg.subject}
              className={`flex cursor-pointer gap-4 p-4 transition-colors hover:bg-brand-soft/40 ${msg.unread ? "bg-brand-soft/30" : ""}`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                {msg.from.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-sm ${msg.unread ? "font-extrabold text-brand" : "font-semibold text-foreground"}`}>
                    {msg.from}
                  </span>
                  <span className="shrink-0 text-xs text-muted-foreground">{msg.date}</span>
                </div>
                <div className={`mt-1 text-sm ${msg.unread ? "font-bold text-foreground" : "font-semibold text-foreground"}`}>
                  {msg.subject}
                </div>
                <p className="mt-1 truncate text-xs text-muted-foreground">{msg.preview}</p>
              </div>
              {msg.unread ? (
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />
              ) : null}
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}

"use client";

export type ChatRole = "user" | "assistant";

export type ChatMessageProps = {
  role: ChatRole;
  content: string;
};

export function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} text-sm`}>
      <div
        className={`max-w-[80%] rounded-2xl px-3 py-2 shadow-sm ${
          isUser
            ? "bg-slate-900 text-white rounded-br-sm"
            : "bg-slate-100 text-slate-900 rounded-bl-sm"
        }`}
      >
        <p className="whitespace-pre-line">{content}</p>
      </div>
    </div>
  );
}

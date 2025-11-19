"use client";

import { useState, useRef, useEffect } from "react";
import { Send, X, MessageCircle, Loader2 } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatApiResponse {
  reply: string;
}

function createId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome",
    role: "assistant",
    content:
      "Hi! I'm the InsightFlow assistant. I can answer questions about our services, how we work, and whether we might be a good fit for your team.",
    timestamp: new Date(),
  },
];

function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`flex max-w-[85%] ${
          isUser ? "flex-row-reverse" : "flex-row"
        } gap-2`}
      >
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
            isUser
              ? "bg-linear-to-br from-blue-500 to-blue-600"
              : "bg-linear-to-br from-violet-500 to-purple-600"
          }`}
        >
          <span className="text-xs font-semibold text-white">
            {isUser ? "You" : "AI"}
          </span>
        </div>
        <div
          className={`rounded-2xl px-4 py-2.5 ${
            isUser ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-900"
          }`}
        >
          <p className="text-sm leading-relaxed whitespace-pre-wrap wrap-break-word">
            {message.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  async function handleSubmit() {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = {
      id: createId(),
      role: "user",
      content: trimmed,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      if (!res.ok) throw new Error("Request failed");

      const data = (await res.json()) as ChatApiResponse;

      const assistantMessage: Message = {
        id: createId(),
        role: "assistant",
        content:
          data.reply ||
          "I'm here to help with questions about InsightFlow, our services, and how we work.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error(error);
      const fallbackMessage: Message = {
        id: createId(),
        role: "assistant",
        content:
          "I ran into a technical issue. Please try again or reach out via our Contact page.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="fixed bottom-0 right-0 z-50 p-4 sm:p-6">
      {/* Chat Panel */}
      {isOpen && (
        <div className="mb-4 flex h-[600px] w-[380px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/5">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 bg-linear-to-r from-violet-600 to-purple-600 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">
                  InsightFlow Assistant
                </h3>
                <p className="text-xs text-violet-100">
                  Typically replies instantly
                </p>
              </div>
            </div>
            <button
              onClick={toggleOpen}
              className="flex h-8 w-8 items-center justify-center rounded-full text-white transition hover:bg-white/20"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-linear-to-b from-slate-50 to-white px-5 py-6">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-slate-500">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="text-sm">Thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-slate-200 bg-white p-4">
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about services, process, or fit..."
                rows={1}
                disabled={isLoading}
                className="max-h-32 min-h-11 flex-1 resize-none rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-500/20 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading || !input.trim()}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30 transition hover:shadow-xl hover:shadow-violet-500/40 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleOpen}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-violet-600 to-purple-600 text-white shadow-2xl shadow-violet-500/40 transition hover:scale-110 hover:shadow-violet-500/50"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}

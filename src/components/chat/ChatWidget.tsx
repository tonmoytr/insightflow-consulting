"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Role = "user" | "assistant";

type Message = {
  role: Role;
  content: string;
};

type ChatApiResponse = {
  reply: string;
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi — I'm the AI assistant for InsightFlow Consulting. I can help you think through where AI and automation might be useful in your team's workflows. What kind of team are you working with?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleQuickFill = (text: string) => {
    setInput(text);
    if (!isOpen) {
      setIsOpen(true);
    }
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const data = (await res.json()) as ChatApiResponse;

      const assistantMessage: Message = {
        role: "assistant",
        content:
          data.reply ||
          "I'm the InsightFlow assistant. I can help you understand what we do and how we might support your team.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("CHAT WIDGET ERROR:", error);

      const fallback: Message = {
        role: "assistant",
        content:
          "Something went wrong reaching the AI service. For now, you can also use the Contact page to share a bit about your team and where things feel manual or unclear.",
      };

      setMessages((prev) => [...prev, fallback]);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      <button
        type="button"
        onClick={handleToggle}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-700 text-white shadow-lg shadow-green-600/30 outline-none transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-600/40 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 md:h-16 md:w-16"
        aria-label={isOpen ? "Close chat" : "Open InsightFlow assistant"}
      >
        <div className="absolute inset-0 rounded-full bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
        {isOpen ? (
          <svg
            className="h-6 w-6 transition-transform duration-300 group-hover:rotate-90 md:h-7 md:w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 md:h-7 md:w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-[10px] font-semibold text-white">
              1
            </span>
          </span>
        )}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 flex w-[360px] flex-col overflow-hidden rounded-2xl border border-gray-200/60 bg-white shadow-2xl backdrop-blur-xl md:w-[420px]">
          {/* Header */}
          <header className="relative overflow-hidden border-b border-gray-200/60 bg-gradient-to-r from-green-600 to-green-700 px-5 py-4">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
            <div className="relative flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-white">
                  InsightFlow Assistant
                </h3>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-green-100">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                  </span>
                  Always available · Powered by AI
                </p>
              </div>
              <button
                type="button"
                onClick={handleToggle}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close chat"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </header>

          {/* Messages */}
          <div className="flex h-[460px] flex-col bg-gradient-to-b from-gray-50 to-white">
            <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
              {messages.map((message, index) => {
                const isUser = message.role === "user";
                return (
                  <div
                    key={`${index}-${message.role}`}
                    className={`flex gap-3 ${
                      isUser ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    {!isUser && (
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-700 shadow-sm">
                        <svg
                          className="h-4 w-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] ${
                        isUser
                          ? "rounded-2xl rounded-tr-md bg-gradient-to-br from-green-600 to-green-700 px-4 py-2.5 text-white shadow-md"
                          : "rounded-2xl rounded-tl-md border border-gray-200/60 bg-white px-4 py-2.5 text-gray-800 shadow-sm"
                      }`}
                    >
                      <p className="whitespace-pre-line text-sm leading-relaxed">
                        {message.content}
                      </p>
                    </div>
                    {isUser && (
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-200">
                        <svg
                          className="h-5 w-5 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-green-700 shadow-sm">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div className="rounded-2xl rounded-tl-md border border-gray-200/60 bg-white px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-green-600" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-green-600 [animation-delay:0.15s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-green-600 [animation-delay:0.3s]" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompts */}
            {messages.length <= 1 && (
              <div className="border-t border-gray-200/60 bg-white px-4 py-3">
                <p className="mb-2 text-xs font-medium text-gray-500">
                  Suggested prompts
                </p>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() =>
                      handleQuickFill(
                        "Tell me about InsightFlow and how you typically work with teams."
                      )
                    }
                    className="group flex w-full items-center gap-2.5 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-left text-xs text-gray-700 transition-all hover:border-green-300 hover:bg-green-50"
                  >
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-gray-400 transition-colors group-hover:text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="flex-1">What does InsightFlow do?</span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      handleQuickFill(
                        "We're a small team and a lot of our workflows are manual. Where could AI or automation realistically help first?"
                      )
                    }
                    className="group flex w-full items-center gap-2.5 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-left text-xs text-gray-700 transition-all hover:border-green-300 hover:bg-green-50"
                  >
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-gray-400 transition-colors group-hover:text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    <span className="flex-1">Help with manual workflows</span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      handleQuickFill(
                        "What might a first 4–6 week engagement with InsightFlow look like for us?"
                      )
                    }
                    className="group flex w-full items-center gap-2.5 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-left text-xs text-gray-700 transition-all hover:border-green-300 hover:bg-green-50"
                  >
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-gray-400 transition-colors group-hover:text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="flex-1">
                      Timeline for first engagement
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* Input */}
            <div className="border-t border-gray-200/60 bg-white p-4">
              <div className="flex items-end gap-2">
                <div className="relative flex-1">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        const trimmed = input.trim();
                        if (trimmed && !isLoading) {
                          sendMessage(e as any);
                        }
                      }
                    }}
                    placeholder="Type your message..."
                    className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 pr-10 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-500/20"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                    aria-label="Add attachment"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      />
                    </svg>
                  </button>
                </div>
                <button
                  type="button"
                  onClick={(e) => sendMessage(e as any)}
                  disabled={!input.trim() || isLoading}
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-600 to-green-700 text-white shadow-md transition-all hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:shadow-md"
                  aria-label="Send message"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
              <p className="mt-2 text-[11px] text-gray-400">
                AI can make mistakes. Verify important information.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import { assistantSystemPrompt } from "@/lib/fakeFaqContext";

export const runtime = "nodejs";

function getGroqClient() {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey || apiKey.length < 3) {
    throw new Error("Missing GROQ_API_KEY environment variable.");
  }

  return new Groq({ apiKey });
}

type ChatRequestBody = {
  message: string;
};

type ChatResponseBody = {
  reply: string;
};

function isChatRequestBody(body: unknown): body is ChatRequestBody {
  if (typeof body !== "object" || body === null) return false;
  const record = body as Record<string, unknown>;
  return typeof record.message === "string";
}

// --- Simple heuristics to keep replies on-brand ---

const bannedPhrases = [
  "i'd be happy to help you",
  "our ai solutions can definitely help",
  "let me connect you with one of our experts",
  "3-5x roi",
  "3–5x roi",
  "500+ companies",
  "would you like to schedule a consultation",
  "would you like to see some relevant case studies",
];

function looksOffBrand(raw: string): boolean {
  const lower = raw.toLowerCase();
  const missingBrand = !lower.includes("insightflow");
  const hasBanned = bannedPhrases.some((phrase) =>
    lower.includes(phrase.toLowerCase())
  );
  return missingBrand || hasBanned;
}

function buildFallbackReply(userMessage: string): string {
  const text = userMessage.toLowerCase().trim();

  if (!text || ["hi", "hello", "hey"].includes(text)) {
    return [
      "Hi — I’m the AI assistant for InsightFlow Consulting.",
      "",
      "InsightFlow is a small consulting partner that helps teams use AI and automation in their strategy and operations. We’re focused on practical workflows, not hype.",
      "",
      "You can tell me a bit about your team and where things feel slow or manual, and I’ll suggest how we might be able to help.",
    ].join("\n");
  }

  if (
    text.includes("who are you") ||
    text.includes("who r u") ||
    text.includes("who you")
  ) {
    return [
      "I’m the AI assistant for InsightFlow Consulting.",
      "",
      "InsightFlow helps teams map out where AI and automation can actually help — usually around workflows, decision support, and lightweight internal tools. I can explain what we do, who we’re a good fit for, and how our services might apply to your situation.",
    ].join("\n");
  }

  if (
    text.includes("what can you do") ||
    text.includes("what do you do") ||
    text.includes("how can you help")
  ) {
    return [
      "I help you think through where AI and automation might be useful in your team’s workflows and how InsightFlow could support that.",
      "",
      "Practically, that looks like:",
      "- Mapping your current processes and spotting high-friction steps.",
      "- Suggesting AI and automation opportunities that fit how your team already works.",
      "- Matching those opportunities to InsightFlow services like Discovery & Opportunity Mapping, Workflow Automation, Decision Support Dashboards, or short pilot engagements.",
      "",
      "If you share a bit about your team size, industry, and what feels slow or manual today, I can suggest a more concrete starting point.",
    ].join("\n");
  }

  return [
    "I’m the InsightFlow Consulting assistant.",
    "",
    "Based on what you’ve shared, I can help you:",
    "- Clarify where AI and automation might be useful in your workflows.",
    "- Connect your situation to one or two InsightFlow services that make sense.",
    "- Propose a simple starting point or first experiment.",
    "",
    "If you’re open to it, tell me a bit about your team (size, type of work) and where things currently feel slow, manual, or unclear.",
  ].join("\n");
}

function sanitizeReply(raw: string, userMessage: string): string {
  if (!raw.trim()) {
    return buildFallbackReply(userMessage);
  }

  if (looksOffBrand(raw)) {
    return buildFallbackReply(userMessage);
  }

  return raw;
}

// --- Route handler ---

export async function POST(req: Request) {
  try {
    const json = await req.json();

    if (!isChatRequestBody(json)) {
      return NextResponse.json<ChatResponseBody>(
        { reply: "Invalid request body." },
        { status: 400 }
      );
    }

    const userMessage = json.message.trim();
    if (!userMessage) {
      return NextResponse.json<ChatResponseBody>(
        { reply: "Please enter a valid question or message." },
        { status: 400 }
      );
    }

    const client = getGroqClient();

    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: assistantSystemPrompt,
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
      temperature: 0.25,
      max_tokens: 450,
    });

    const rawReply =
      response.choices?.[0]?.message?.content ??
      "I'm the InsightFlow Consulting assistant. I can help you think through where AI and automation might be useful in your team’s workflows.";

    const reply = sanitizeReply(rawReply, userMessage);

    return NextResponse.json<ChatResponseBody>({ reply });
  } catch (error: unknown) {
    console.error("CHAT ROUTE ERROR:", error);

    return NextResponse.json<ChatResponseBody>(
      {
        reply:
          "There was an issue reaching the AI service. Please try again in a moment, or use the Contact page to share more about your context.",
      },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import { assistantSystemPrompt } from "@/lib/fakeFaqContext";

export const runtime = "nodejs"; // edge runtime breaks env loading

function getGroqClient() {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey || apiKey.length < 3) {
    throw new Error("Missing GROQ_API_KEY environment variable.");
  }

  return new Groq({ apiKey });
}

// Type guard
function isChatRequest(body: unknown): body is { message: string } {
  return (
    typeof body === "object" &&
    body !== null &&
    "message" in body &&
    typeof (body as Record<string, unknown>).message === "string"
  );
}

export async function POST(req: Request) {
  try {
    const json = await req.json();

    if (!isChatRequest(json)) {
      return NextResponse.json(
        { reply: "Invalid request body." },
        { status: 400 }
      );
    }

    const userMessage = json.message.trim();
    if (!userMessage) {
      return NextResponse.json(
        { reply: "Please enter a valid message." },
        { status: 400 }
      );
    }

    // Lazy initialization here, not at top of file
    const client = getGroqClient();

    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: assistantSystemPrompt },
        { role: "user", content: userMessage },
      ],
      temperature: 0.3,
      max_tokens: 300,
    });

    const reply =
      response?.choices?.[0]?.message?.content ??
      "I'm here to help with questions about InsightFlow.";

    return NextResponse.json({ reply });
  } catch (error: unknown) {
    console.error("CHAT ROUTE ERROR:", error);

    return NextResponse.json(
      {
        reply:
          "There was an issue reaching the AI service. Please try again or use the Contact page.",
      },
      { status: 500 }
    );
  }
}

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

type ServiceRecommenderBody = {
  companySize: string;
  industry: string;
  primaryGoal: string;
  mainPainPoints: string;
};

function isServiceRecommenderBody(
  body: unknown
): body is ServiceRecommenderBody {
  if (typeof body !== "object" || body === null) return false;

  const record = body as Record<string, unknown>;
  return (
    typeof record.companySize === "string" &&
    typeof record.industry === "string" &&
    typeof record.primaryGoal === "string" &&
    typeof record.mainPainPoints === "string"
  );
}

export async function POST(req: Request) {
  try {
    const json = await req.json();

    if (!isServiceRecommenderBody(json)) {
      return NextResponse.json(
        { recommendation: "Invalid request body." },
        { status: 400 }
      );
    }

    const { companySize, industry, primaryGoal, mainPainPoints } = json;

    const client = getGroqClient();

    const toolPrompt = `
You are an AI assistant helping a visitor understand which InsightFlow Consulting
services might fit their situation.

Based on the inputs, do three things:
1) Briefly restate what you understood about their context.
2) Recommend 1–2 InsightFlow services (from the service list in the system prompt) that best fit.
3) Suggest what a first 4–6 week engagement could look like in simple, concrete terms.

Be specific but concise. Avoid buzzwords. Speak like a thoughtful consultant.
Inputs:
- Company size: ${companySize}
- Industry / context: ${industry}
- Primary goal: ${primaryGoal}
- Current constraints / pain points: ${mainPainPoints}
`.trim();

    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: assistantSystemPrompt },
        { role: "user", content: toolPrompt },
      ],
      temperature: 0.35,
      max_tokens: 450,
    });

    const recommendation =
      response.choices?.[0]?.message?.content ??
      "I’m not sure what to recommend. It may help to provide a bit more detail about your goals and constraints.";

    return NextResponse.json({ recommendation });
  } catch (error: unknown) {
    console.error("SERVICE RECOMMENDER ROUTE ERROR:", error);

    return NextResponse.json(
      {
        recommendation:
          "There was an issue reaching the AI service. Please try again or use the Contact page to share your context directly.",
      },
      { status: 500 }
    );
  }
}

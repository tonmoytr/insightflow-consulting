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

type BriefAnalyzerBody = {
  brief: string;
  focusArea: string;
};

function isBriefAnalyzerBody(body: unknown): body is BriefAnalyzerBody {
  if (typeof body !== "object" || body === null) return false;

  const record = body as Record<string, unknown>;
  return (
    typeof record.brief === "string" && typeof record.focusArea === "string"
  );
}

export async function POST(req: Request) {
  try {
    const json = await req.json();

    if (!isBriefAnalyzerBody(json)) {
      return NextResponse.json(
        { analysis: "Invalid request body." },
        { status: 400 }
      );
    }

    const { brief, focusArea } = json;

    const client = getGroqClient();

    const toolPrompt = `
You are assisting InsightFlow Consulting by reviewing an incoming project brief.

Your task:
- Read the brief carefully.
- Provide a structured analysis with these sections:
  1) Quick summary of what this team seems to want.
  2) Key goals you infer (bullet points).
  3) Risks or unclear assumptions (bullet points).
  4) Gaps in the brief: what information is missing that InsightFlow would ask for.
  5) Suggested follow-up questions to clarify scope and expectations.

Focus area: ${focusArea}

The brief:
---
${brief}
---
`.trim();

    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: assistantSystemPrompt },
        { role: "user", content: toolPrompt },
      ],
      temperature: 0.35,
      max_tokens: 600,
    });

    const analysis =
      response.choices?.[0]?.message?.content ??
      "I’m not sure how to interpret this brief. It might help to provide more context about goals, constraints, and timelines.";

    return NextResponse.json({ analysis });
  } catch (error: unknown) {
    console.error("BRIEF ANALYZER ROUTE ERROR:", error);

    return NextResponse.json(
      {
        analysis:
          "There was an issue reaching the AI service. Please try again or use the Contact page to share your context directly.",
      },
      { status: 500 }
    );
  }
}
